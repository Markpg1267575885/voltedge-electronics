require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/mpesa", ordersRouter.mpesaRouter);

app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`VoltEdge Electronics running at http://localhost:${PORT}`);
});
