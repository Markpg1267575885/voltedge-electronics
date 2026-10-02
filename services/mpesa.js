const axios = require("axios");

const isSandbox = (process.env.MPESA_ENV || "sandbox") === "sandbox";
const BASE_URL = isSandbox
  ? "https://sandbox.safaricom.co.ke"
  : "https://api.safaricom.co.ke";

// Safaricom's OAuth token expires after ~1 hour. Cache it so we don't
// request a fresh one on every single checkout.
let cachedToken = null;
let cachedTokenExpiry = 0;

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedTokenExpiry) {
    return cachedToken;
  }

  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_CONSUMER_SECRET;
  if (!key || key.includes("your_consumer_key")) {
    throw new Error(
      "M-PESA credentials are not configured. Copy .env.example to .env and fill in " +
        "MPESA_CONSUMER_KEY / MPESA_CONSUMER_SECRET from https://developer.safaricom.co.ke"
    );
  }

  const credentials = Buffer.from(`${key}:${secret}`).toString("base64");
  const { data } = await axios.get(
    `${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
    { headers: { Authorization: `Basic ${credentials}` } }
  );

  cachedToken = data.access_token;
  // Refresh a minute early to be safe.
  cachedTokenExpiry = Date.now() + (Number(data.expires_in) - 60) * 1000;
  return cachedToken;
}

function timestampNow() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return (
    d.getFullYear().toString() +
    pad(d.getMonth() + 1) +
    pad(d.getDate()) +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    pad(d.getSeconds())
  );
}

/**
 * Normalizes a Kenyan/Ugandan-style local number (07XXXXXXXX or 254/2567XXXXXXXX)
 * into the 2547XXXXXXXX / 2567XXXXXXXX MSISDN format Safaricom expects.
 */
function normalizePhone(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.startsWith("0")) return `254${digits.slice(1)}`;
  if (digits.startsWith("254") || digits.startsWith("256")) return digits;
  if (digits.startsWith("7") || digits.startsWith("1")) return `254${digits}`;
  return digits;
}

/**
 * Initiates an STK Push ("Lipa Na M-Pesa Online") prompt on the customer's phone.
 * amount must be a whole number of shillings — Daraja rejects decimals.
 */
async function stkPush({ phone, amount, accountReference, description }) {
  const token = await getAccessToken();
  const shortcode = process.env.MPESA_SHORTCODE;
  const passkey = process.env.MPESA_PASSKEY;
  const timestamp = timestampNow();
  const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString(
    "base64"
  );

  const payload = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: Math.round(amount),
    PartyA: normalizePhone(phone),
    PartyB: shortcode,
    PhoneNumber: normalizePhone(phone),
    CallBackURL: process.env.MPESA_CALLBACK_URL,
    AccountReference: accountReference.slice(0, 12),
    TransactionDesc: description.slice(0, 13),
  };

  const { data } = await axios.post(
    `${BASE_URL}/mpesa/stkpush/v1/processrequest`,
    payload,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return data; // { MerchantRequestID, CheckoutRequestID, ResponseCode, ... }
}

module.exports = { getAccessToken, stkPush, normalizePhone };
