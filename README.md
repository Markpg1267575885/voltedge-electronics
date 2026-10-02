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

## 3. Expose a public HTTPS callback URL

Safaricom needs a public HTTPS URL to POST the payment result to — your own
phone or laptop isn't reachable from the internet by default. There are two
ways to get one; **Option A is recommended** because it also means the site
itself works from any device, browser, or network — not just whichever
machine happens to be running it.

### Option A — deploy it for real (works everywhere, no phone needed)

[Render](https://render.com) has a genuine free tier: no credit card, git-push
deploys, automatic HTTPS.

1. Push this project to a GitHub repo (create one at github.com/new, then
   from inside the `voltedge` folder: `git init && git add . && git commit -m
   "voltedge" && git remote add origin <your-repo-url> && git push -u origin
   main`).
2. At https://render.com → **New → Web Service** → connect that repo.
3. Settings: **Runtime** Node, **Build Command** `npm install`, **Start
   Command** `npm start`, **Plan** Free.
4. Under **Environment**, add the variables from `.env.example`
   (`MPESA_CONSUMER_KEY`, `MPESA_CONSUMER_SECRET`, `MPESA_SHORTCODE`,
   `MPESA_PASSKEY`, `MPESA_ENV`) — leave `MPESA_CALLBACK_URL` for last.
5. Deploy. Render gives you a URL like `https://voltedge-xxxx.onrender.com`.
   Add one more environment variable:
   `MPESA_CALLBACK_URL=https://voltedge-xxxx.onrender.com/api/mpesa/callback`,
   then redeploy (Render does this automatically when env vars change).

Now the storefront and the M-PESA callback both work from that URL, from any
phone, laptop, or browser — nothing needs to stay running locally. (Render's
free tier sleeps after 15 minutes idle and takes ~1 minute to wake back up on
the next visit — normal for a free demo, not a bug.)

### Option B — run it locally in Termux with a tunnel

If you just want to test on-device without deploying anywhere:

```
pkg install wget
wget <the arm64 .tgz link from https://ngrok.com/download>
tar -xzf ngrok-*.tgz
./ngrok authtoken YOUR_TOKEN        # free account at ngrok.com
termux-chroot ./ngrok http 4000     # termux-chroot is required — ngrok can't
                                     # resolve DNS in plain Termux without it
```

Paste the `https://xxxx.ngrok-free.app` URL it prints into `.env` as
`MPESA_CALLBACK_URL=.../api/mpesa/callback`. This only works while Termux and
the tunnel are both open on that phone.

## 4. Run it

```
npm start
```

Locally: visit **http://localhost:4000**. On Render: visit the URL it gave you.

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
- Prices in `data/products.json` are in KES (Kenyan Shillings), matching the
  currency Safaricom's Daraja API actually transacts in. Adjust the numbers
  there, and the formatting in `public/js/app.js` (`money()`), if a different
  market/currency is needed.
