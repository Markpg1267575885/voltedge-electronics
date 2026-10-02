# VoltEdge Electronics

A full-stack e-commerce storefront selling electronics (phones, laptops, TVs,
audio, accessories) with checkout powered by Safaricom's M-PESA **Daraja API**
(STK Push / "Lipa Na M-Pesa Online").

## Stack

- **Backend:** Node.js + Express (`server.js`, `routes/`, `services/`)
- **Payments:** Safaricom Daraja API — OAuth token, STK Push, and the
  payment-result callback (`services/mpesa.js`, `routes/orders.js`)
- **Storage:** a small JSON file (`data/orders.json`, created automatically)
  standing in for a real database — swap in Postgres/MySQL/Mongo for
  production by replacing `services/orderStore.js`
- **Frontend:** plain HTML/CSS/JS storefront in `public/` — product grid,
  cart drawer, checkout modal with phone-number entry and live payment status

## 1. Install

```
npm install
```

## 2. Get M-PESA sandbox credentials

1. Create a free account at https://developer.safaricom.co.ke
2. Go to **My Apps → Add a new app**, and enable the **Lipa Na M-Pesa Online
   Sandbox** product on it.
3. Copy the app's **Consumer Key** and **Consumer Secret**.
4. Copy `.env.example` to `.env` and paste them in:

   ```
   cp .env.example .env
   ```

   The sandbox `MPESA_SHORTCODE` (174379) and `MPESA_PASSKEY` in
   `.env.example` are Safaricom's published sandbox test values — they work
   for every developer in the sandbox, no need to change them.

## 3. Expose a callback URL

Safaricom needs a public HTTPS URL to POST the payment result to. On your own
machine, run:

```
ngrok http 4000
```

and paste the `https://…ngrok-free.app` URL it prints into `.env` as:

```
MPESA_CALLBACK_URL=https://xxxx.ngrok-free.app/api/mpesa/callback
```

(If you deploy the app to a real host — Render, Railway, a VPS — use that
host's own HTTPS URL instead and skip ngrok.)

## 4. Run it

```
npm start
```

Visit **http://localhost:4000**.

## 5. Test a payment

Sandbox STK pushes only work with Safaricom's test MSISDN:

- **Phone:** `254708374149`
- **PIN (on the simulated prompt):** any value works in sandbox

Add a product to the cart, checkout, and enter that number — the app polls
for the result and shows "Payment received" once Safaricom's callback lands.

## Project structure

```
server.js              Express app entry point
routes/products.js      GET /api/products, /api/products/:id
routes/orders.js         POST /api/orders (creates order + triggers STK push)
                          GET  /api/orders/:id (poll status)
                          POST /api/mpesa/callback (Safaricom result webhook)
services/mpesa.js        Daraja OAuth token + STK Push request
services/orderStore.js   JSON-file order persistence
data/products.json       Product catalog
public/                  Storefront (HTML/CSS/JS)
```

## Notes for submission

- Going live (real payments, not sandbox) requires Safaricom to approve a
  **Go-Live** application and issue a production shortcode — set
  `MPESA_ENV=production` and swap in the production credentials/shortcode
  when that happens.
- Prices in `data/products.json` are in UGX; adjust currency formatting in
  `public/js/app.js` (`money()`) if a different market is needed.
