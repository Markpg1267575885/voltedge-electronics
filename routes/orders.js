const express = require("express");
const { v4: uuidv4 } = require("uuid");
const products = require("../data/products.json");
const orderStore = require("../services/orderStore");
const mpesa = require("../services/mpesa");

const router = express.Router();

// POST /api/orders — create an order from the cart and trigger the
// M-PESA STK Push prompt on the customer's phone.
router.post("/", async (req, res) => {
  try {
    const { items, phone, customerName } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    // Recompute the total from the server's own price list — never trust
    // amounts sent by the client.
    let total = 0;
    const lineItems = items.map(({ id, qty }) => {
      const product = products.find((p) => p.id === id);
      if (!product) throw new Error(`Unknown product: ${id}`);
      const quantity = Math.max(1, Number(qty) || 1);
      total += product.price * quantity;
      return { id, name: product.name, price: product.price, qty: quantity };
    });

    const orderId = uuidv4();
    const order = {
      id: orderId,
      items: lineItems,
      total,
      phone,
      customerName: customerName || "",
      status: "pending", // pending -> stk_sent -> paid | failed
      createdAt: new Date().toISOString(),
    };

    const stkResponse = await mpesa.stkPush({
      phone,
      amount: total,
      accountReference: `ORD-${orderId.slice(0, 8)}`,
      description: "VoltEdge order",
    });

    // Safaricom can return HTTP 200 with a non-zero ResponseCode (e.g. bad
    // shortcode/passkey, amount rejected) — that's still a failure to us.
    if (String(stkResponse.ResponseCode) !== "0") {
      throw new Error(
        stkResponse.CustomerMessage ||
          stkResponse.ResponseDescription ||
          "M-PESA rejected the payment request"
      );
    }

    order.checkoutRequestId = stkResponse.CheckoutRequestID;
    order.merchantRequestId = stkResponse.MerchantRequestID;
    order.status = "stk_sent";
    orderStore.create(order);

    res.json({
      orderId: order.id,
      status: order.status,
      message: "Check your phone and enter your M-PESA PIN to complete payment.",
    });
  } catch (err) {
    console.error("Order/STK push failed:", err.response?.data || err.message);
    res.status(500).json({
      error:
        err.response?.data?.errorMessage ||
        err.message ||
        "Could not start M-PESA payment",
    });
  }
});

// GET /api/orders/:id — the frontend polls this while waiting for the
// customer to complete (or cancel) the STK push prompt.
router.get("/:id", (req, res) => {
  const order = orderStore.get(req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
});

module.exports = router;

// Separate router, mounted at /api/mpesa in server.js, so the callback
// URL matches exactly what's documented in .env.example.
const mpesaRouter = express.Router();

// POST /api/mpesa/callback — Safaricom calls this URL with the result
// once the customer enters their PIN (or cancels/times out).
mpesaRouter.post("/callback", (req, res) => {
  try {
    const stkCallback = req.body?.Body?.stkCallback;
    if (!stkCallback) return res.status(400).json({ error: "Malformed callback" });

    const { CheckoutRequestID, ResultCode, CallbackMetadata } = stkCallback;

    if (Number(ResultCode) === 0) {
      const items = CallbackMetadata?.Item || [];
      const get = (name) => items.find((i) => i.Name === name)?.Value;
      orderStore.updateByCheckoutRequestId(CheckoutRequestID, {
        status: "paid",
        mpesaReceiptNumber: get("MpesaReceiptNumber"),
        amountPaid: get("Amount"),
        paidAt: new Date().toISOString(),
      });
    } else {
      orderStore.updateByCheckoutRequestId(CheckoutRequestID, {
        status: "failed",
        failReason: stkCallback.ResultDesc,
      });
    }

    // Safaricom just needs a 200 acknowledging receipt.
    res.json({ ResultCode: 0, ResultDesc: "Accepted" });
  } catch (err) {
    console.error("Callback handling error:", err.message);
    res.status(500).json({ ResultCode: 1, ResultDesc: "Server error" });
  }
});

module.exports.mpesaRouter = mpesaRouter;
