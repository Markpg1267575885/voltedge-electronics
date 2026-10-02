const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "data", "orders.json");

function readAll() {
  if (!fs.existsSync(FILE)) return {};
  return JSON.parse(fs.readFileSync(FILE, "utf8") || "{}");
}

function writeAll(orders) {
  fs.writeFileSync(FILE, JSON.stringify(orders, null, 2));
}

function create(order) {
  const orders = readAll();
  orders[order.id] = order;
  writeAll(orders);
  return order;
}

function get(id) {
  return readAll()[id] || null;
}

function updateByCheckoutRequestId(checkoutRequestId, patch) {
  const orders = readAll();
  const order = Object.values(orders).find(
    (o) => o.checkoutRequestId === checkoutRequestId
  );
  if (!order) return null;
  Object.assign(order, patch);
  orders[order.id] = order;
  writeAll(orders);
  return order;
}

module.exports = { create, get, updateByCheckoutRequestId };
