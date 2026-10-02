const ICONS = {
  phone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>',
  laptop: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M1 20h22"/></svg>',
  tv: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="14" rx="1"/><path d="M9 21h6M12 18v3"/></svg>',
  earbuds: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="9" r="3"/><circle cx="17" cy="9" r="3"/><path d="M7 12v4a3 3 0 003 3M17 12v4a3 3 0 01-3 3"/></svg>',
  headphones: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 13a9 9 0 0118 0v5a2 2 0 01-2 2h-1v-7h3M3 13v7h1a2 2 0 002-2v-5H3"/></svg>',
  battery: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="7" width="18" height="10" rx="2"/><line x1="22" y1="10" x2="22" y2="14"/><path d="M8 9l-2 4h4l-2 4"/></svg>',
  keyboard: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="6" y1="9" x2="6" y2="9.01"/><line x1="10" y1="9" x2="10" y2="9.01"/><line x1="14" y1="9" x2="14" y2="9.01"/><line x1="18" y1="9" x2="18" y2="9.01"/><line x1="7" y1="15" x2="17" y2="15"/></svg>',
};

const HEART_ICON = (filled) =>
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>`;

const STAR_ICON = (filled) =>
  `<svg width="12" height="12" viewBox="0 0 24 24" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.5"><polygon points="12 2.5 15.1 9 22 10 17 15 18.2 22 12 18.6 5.8 22 7 15 2 10 8.9 9"/></svg>`;

const TRANSLATIONS = {
  en: {
    "cat.All": "All",
    "cat.Phones": "Phones",
    "cat.Laptops": "Laptops",
    "cat.TVs": "TVs",
    "cat.Audio": "Audio",
    "cat.Accessories": "Accessories",
    "cat.Wishlist": "Saved",
    "hero.title": "Power your day.<br>Pay from your phone.",
    "hero.sub": "Phones, laptops, TVs and accessories in Kampala & beyond — checkout with an M-PESA prompt straight to your handset, no card required.",
    "hero.cta": "Browse the catalog",
    "hero.trust1": "Instant M-PESA STK push",
    "hero.trust2": "Genuine warranty on every item",
    "footer.text": "VoltEdge Electronics — built as a course project. Payments run through Safaricom's M-PESA Daraja sandbox.",
    "cart.title": "Your cart",
    "cart.total": "Total",
    "cart.checkout": "Checkout",
    "cart.empty": "Your cart is empty.",
    "checkout.title": "Pay with M-PESA",
    "checkout.sub": "We'll send a payment prompt to this number. Enter your PIN there to finish.",
    "checkout.name": "Full name",
    "checkout.phone": "M-PESA phone number",
    "checkout.amountDue": "Amount due",
    "checkout.submit": "Send M-PESA prompt",
    "checkout.sending": "Sending prompt…",
    "checkout.invalidPhone": "Enter a valid M-PESA number, e.g. 07XXXXXXXX.",
    "checkout.genericError": "Something went wrong",
    "status.checkPhone": "Check your phone",
    "status.instructions": "Enter your M-PESA PIN on the prompt sent to your phone to complete the order.",
    "status.close": "Close",
    "status.paidTitle": "Payment received",
    "status.paidSub": (receipt) => `Receipt ${receipt || ""} — thank you! Your order is confirmed.`,
    "status.failedTitle": "Payment not completed",
    "status.failedSub": "The prompt was cancelled or timed out. You can try again.",
    "status.stillWaitingTitle": "Still waiting",
    "status.stillWaitingSub": "We haven't heard back yet. Check your M-PESA messages, or close this and try again.",
    "catalog.all": "All products",
    "catalog.count": (n) => `${n} item${n === 1 ? "" : "s"}`,
    "search.placeholder": "Search products…",
    "search.noResults": "No products match your search.",
    "sort.label": "Sort",
    "sort.featured": "Featured",
    "sort.priceAsc": "Price: Low to High",
    "sort.priceDesc": "Price: High to Low",
    "sort.rating": "Top Rated",
    "sort.name": "Name A–Z",
    "product.addToCart": "Add to cart",
    "product.price": "Price",
    "product.reviews": (n) => `(${n})`,
    "stock.low": (n) => `Only ${n} left`,
    "stock.inStock": "In stock",
    "recent.heading": "Recently viewed",
    "wishlist.heading": "Saved items",
    "wishlist.empty": "You haven't saved anything yet — tap the heart on a product to save it.",
    "toast.added": (name) => `Added ${name} to cart`,
    "toast.wishlistAdded": (name) => `Saved ${name}`,
    "toast.wishlistRemoved": (name) => `Removed ${name} from saved items`,
  },
  sw: {
    "cat.All": "Zote",
    "cat.Phones": "Simu",
    "cat.Laptops": "Laptop",
    "cat.TVs": "Televisheni",
    "cat.Audio": "Sauti",
    "cat.Accessories": "Vifaa",
    "cat.Wishlist": "Vipendwa",
    "hero.title": "Washa siku yako.<br>Lipa kutoka simu yako.",
    "hero.sub": "Simu, laptop, televisheni na vifaa Kampala na maeneo mengine — lipa kwa ombi la M-PESA moja kwa moja kwenye simu yako, hakuna kadi inayohitajika.",
    "hero.cta": "Angalia bidhaa",
    "hero.trust1": "Ombi la M-PESA la papo hapo",
    "hero.trust2": "Udhamini halisi kwa kila bidhaa",
    "footer.text": "VoltEdge Electronics — imejengwa kama mradi wa masomo. Malipo yanapitia mazingira ya majaribio ya Daraja ya M-PESA ya Safaricom.",
    "cart.title": "Kikapu chako",
    "cart.total": "Jumla",
    "cart.checkout": "Lipa",
    "cart.empty": "Kikapu chako hakina bidhaa.",
    "checkout.title": "Lipa kwa M-PESA",
    "checkout.sub": "Tutatuma ombi la malipo kwa nambari hii. Weka PIN yako pale kumaliza.",
    "checkout.name": "Jina kamili",
    "checkout.phone": "Nambari ya simu ya M-PESA",
    "checkout.amountDue": "Kiasi cha kulipa",
    "checkout.submit": "Tuma ombi la M-PESA",
    "checkout.sending": "Inatuma ombi…",
    "checkout.invalidPhone": "Weka nambari sahihi ya M-PESA, mfano 07XXXXXXXX.",
    "checkout.genericError": "Hitilafu imetokea",
    "status.checkPhone": "Angalia simu yako",
    "status.instructions": "Weka PIN yako ya M-PESA kwenye ombi lililotumwa kwa simu yako ili kukamilisha oda.",
    "status.close": "Funga",
    "status.paidTitle": "Malipo yamepokelewa",
    "status.paidSub": (receipt) => `Risiti ${receipt || ""} — asante! Oda yako imethibitishwa.`,
    "status.failedTitle": "Malipo hayajakamilika",
    "status.failedSub": "Ombi lilighairiwa au muda uliisha. Unaweza kujaribu tena.",
    "status.stillWaitingTitle": "Bado tunasubiri",
    "status.stillWaitingSub": "Bado hatujapata jibu. Angalia ujumbe wako wa M-PESA, au funga hii na ujaribu tena.",
    "catalog.all": "Bidhaa zote",
    "catalog.count": (n) => `Bidhaa ${n}`,
    "search.placeholder": "Tafuta bidhaa…",
    "search.noResults": "Hakuna bidhaa zinazolingana na utafutaji wako.",
    "sort.label": "Panga",
    "sort.featured": "Chaguo bora",
    "sort.priceAsc": "Bei: Chini hadi Juu",
    "sort.priceDesc": "Bei: Juu hadi Chini",
    "sort.rating": "Zenye Alama Bora",
    "sort.name": "Jina A–Z",
    "product.addToCart": "Weka kikapuni",
    "product.price": "Bei",
    "product.reviews": (n) => `(${n})`,
    "stock.low": (n) => `Zimebaki ${n} tu`,
    "stock.inStock": "Zipo dukani",
    "recent.heading": "Ulizoangalia hivi karibuni",
    "wishlist.heading": "Bidhaa ulizohifadhi",
    "wishlist.empty": "Bado hujahifadhi chochote — gusa moyo kwenye bidhaa kuihifadhi.",
    "toast.added": (name) => `${name} imewekwa kikapuni`,
    "toast.wishlistAdded": (name) => `${name} imehifadhiwa`,
    "toast.wishlistRemoved": (name) => `${name} imeondolewa kwenye vipendwa`,
  },
};

const state = {
  products: [],
  activeCategory: "All",
  cart: JSON.parse(localStorage.getItem("voltedge_cart") || "{}"),
  lang: localStorage.getItem("voltedge_lang") || "en",
  wishlist: new Set(JSON.parse(localStorage.getItem("voltedge_wishlist") || "[]")),
  recentlyViewed: JSON.parse(localStorage.getItem("voltedge_recent") || "[]"),
  searchQuery: "",
  sortBy: "featured",
  quickViewId: null,
  quickViewQty: 1,
};

function t(key, ...args) {
  const entry = TRANSLATIONS[state.lang][key] ?? TRANSLATIONS.en[key] ?? key;
  return typeof entry === "function" ? entry(...args) : entry;
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang;
  document.getElementById("lang-toggle").textContent = state.lang === "en" ? "SW" : "EN";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("voltedge_lang", lang);
  applyStaticTranslations();
  renderGrid();
  renderCart();
  renderRecentlyViewed();
}

const money = (n) => "UGX " + Number(n).toLocaleString("en-UG");

// Deterministic mock stock level per product id, stable across renders.
function stockFor(id) {
  let hash = 0;
  for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) % 97;
  return (hash % 9) + 1; // 1..9
}

function starsHTML(rating) {
  const rounded = Math.round(rating);
  let html = "";
  for (let i = 1; i <= 5; i++) html += STAR_ICON(i <= rounded);
  return html;
}

async function loadProducts() {
  const res = await fetch("/api/products");
  state.products = await res.json();
  renderGrid();
  renderRecentlyViewed();
}

function localizedText(p) {
  return {
    blurb: state.lang === "sw" ? p.blurb_sw || p.blurb : p.blurb,
    spec: state.lang === "sw" ? p.spec_sw || p.spec : p.spec,
  };
}

function matchesSearch(p, query) {
  if (!query) return true;
  const { blurb, spec } = localizedText(p);
  const haystack = `${p.name} ${p.category} ${blurb} ${spec}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function sortList(list) {
  const sorted = [...list];
  switch (state.sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

function getFilteredList() {
  let list =
    state.activeCategory === "All"
      ? state.products
      : state.activeCategory === "Wishlist"
      ? state.products.filter((p) => state.wishlist.has(p.id))
      : state.products.filter((p) => p.category === state.activeCategory);

  list = list.filter((p) => matchesSearch(p, state.searchQuery));
  return sortList(list);
}

function cardHTML(p) {
  const { blurb, spec } = localizedText(p);
  const stock = stockFor(p.id);
  const wished = state.wishlist.has(p.id);
  return `
    <article class="card" style="--card-accent:${p.accent}" data-id="${p.id}">
      <button class="wishlist-btn ${wished ? "is-active" : ""}" data-wishlist="${p.id}" aria-label="Save ${p.name}">${HEART_ICON(wished)}</button>
      <div class="card-icon">${ICONS[p.icon] || ""}</div>
      <div class="card-cat">${t(`cat.${p.category}`)}</div>
      <h3>${p.name}</h3>
      <div class="card-rating">${starsHTML(p.rating)}<span class="rating-num">${p.rating.toFixed(1)}</span><span class="rating-count">${t("product.reviews", p.reviews)}</span></div>
      <p class="card-blurb">${blurb}</p>
      <div class="card-spec">${spec}</div>
      <div class="card-stock ${stock <= 3 ? "is-low" : ""}">${stock <= 3 ? t("stock.low", stock) : t("stock.inStock")}</div>
      <div class="card-foot">
        <span class="card-price">${money(p.price)}</span>
        <button class="add-btn" data-add="${p.id}" aria-label="Add ${p.name} to cart">+</button>
      </div>
    </article>`;
}

function wireCardEvents(container) {
  container.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.add, 1, true);
    });
  });
  container.querySelectorAll("[data-wishlist]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWishlist(btn.dataset.wishlist);
    });
  });
  container.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => openQuickView(card.dataset.id));
  });
}

function renderGrid() {
  const grid = document.getElementById("product-grid");
  const noResults = document.getElementById("no-results");
  const list = getFilteredList();

  const titleKey = state.activeCategory === "All" ? t("catalog.all") : state.activeCategory === "Wishlist" ? t("wishlist.heading") : t(`cat.${state.activeCategory}`);
  document.getElementById("catalog-title").textContent = titleKey;
  document.getElementById("catalog-count").textContent = t("catalog.count", list.length);

  if (list.length === 0) {
    grid.innerHTML = "";
    noResults.textContent =
      state.activeCategory === "Wishlist" && !state.searchQuery ? t("wishlist.empty") : t("search.noResults");
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  grid.innerHTML = list.map(cardHTML).join("");
  wireCardEvents(grid);
}

function renderRecentlyViewed() {
  const section = document.getElementById("recently-viewed");
  const grid = document.getElementById("recently-viewed-grid");
  const items = state.recentlyViewed
    .map((id) => state.products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (items.length === 0) {
    section.classList.add("hidden");
    return;
  }
  section.classList.remove("hidden");
  grid.innerHTML = items.map(cardHTML).join("");
  wireCardEvents(grid);
}

function addToRecentlyViewed(id) {
  state.recentlyViewed = [id, ...state.recentlyViewed.filter((x) => x !== id)].slice(0, 4);
  localStorage.setItem("voltedge_recent", JSON.stringify(state.recentlyViewed));
  renderRecentlyViewed();
}

function toggleWishlist(id) {
  const product = state.products.find((p) => p.id === id);
  if (!product) return;
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast(t("toast.wishlistRemoved", product.name));
  } else {
    state.wishlist.add(id);
    showToast(t("toast.wishlistAdded", product.name));
  }
  localStorage.setItem("voltedge_wishlist", JSON.stringify([...state.wishlist]));
  renderGrid();
  renderRecentlyViewed();
  if (state.quickViewId === id) renderQuickViewWishlistState();
}

function saveCart() {
  localStorage.setItem("voltedge_cart", JSON.stringify(state.cart));
}

function addToCart(id, qty = 1, toast = false) {
  state.cart[id] = (state.cart[id] || 0) + qty;
  saveCart();
  renderCart();
  if (toast) {
    const product = state.products.find((p) => p.id === id);
    if (product) showToast(t("toast.added", product.name));
    openCart();
  }
}

function setQty(id, qty) {
  if (qty <= 0) delete state.cart[id];
  else state.cart[id] = qty;
  saveCart();
  renderCart();
}

function cartLines() {
  return Object.entries(state.cart)
    .map(([id, qty]) => ({ product: state.products.find((p) => p.id === id), qty }))
    .filter((l) => l.product);
}

function cartTotal() {
  return cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);
}

function renderCart() {
  const lines = cartLines();
  const container = document.getElementById("cart-items");
  const count = lines.reduce((s, l) => s + l.qty, 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = money(cartTotal());
  document.getElementById("modal-total").textContent = money(cartTotal());
  document.getElementById("checkout-open").disabled = lines.length === 0;

  if (lines.length === 0) {
    container.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
    return;
  }

  container.innerHTML = lines
    .map(
      (l) => `
    <div class="cart-line">
      <div style="flex:1">
        <div class="cart-line-name">${l.product.name}</div>
        <div class="cart-line-price">${money(l.product.price)} &times; ${l.qty}</div>
        <div class="qty-stepper">
          <button data-dec="${l.product.id}" aria-label="Decrease quantity">&minus;</button>
          <span>${l.qty}</span>
          <button data-inc="${l.product.id}" aria-label="Increase quantity">+</button>
          <button class="cart-line-remove" data-remove="${l.product.id}">Remove</button>
        </div>
      </div>
    </div>`
    )
    .join("");

  container.querySelectorAll("[data-inc]").forEach((b) =>
    b.addEventListener("click", () => setQty(b.dataset.inc, (state.cart[b.dataset.inc] || 0) + 1))
  );
  container.querySelectorAll("[data-dec]").forEach((b) =>
    b.addEventListener("click", () => setQty(b.dataset.dec, (state.cart[b.dataset.dec] || 0) - 1))
  );
  container.querySelectorAll("[data-remove]").forEach((b) =>
    b.addEventListener("click", () => setQty(b.dataset.remove, 0))
  );
}

// --- Cart drawer open/close ---
function openCart() {
  document.getElementById("cart-drawer").classList.add("is-open");
  document.getElementById("drawer-backdrop").classList.add("is-open");
}
function closeCart() {
  document.getElementById("cart-drawer").classList.remove("is-open");
  document.getElementById("drawer-backdrop").classList.remove("is-open");
}

// --- Quick view modal ---
function renderQuickViewWishlistState() {
  const btn = document.getElementById("qv-wishlist");
  if (!btn) return;
  const wished = state.wishlist.has(state.quickViewId);
  btn.classList.toggle("is-active", wished);
  btn.innerHTML = HEART_ICON(wished);
}

function openQuickView(id) {
  const product = state.products.find((p) => p.id === id);
  if (!product) return;
  state.quickViewId = id;
  state.quickViewQty = 1;
  addToRecentlyViewed(id);

  const { blurb, spec } = localizedText(product);
  const stock = stockFor(id);

  document.getElementById("qv-icon").innerHTML = ICONS[product.icon] || "";
  document.getElementById("qv-icon").style.color = product.accent;
  document.getElementById("qv-cat").textContent = t(`cat.${product.category}`);
  document.getElementById("qv-name").textContent = product.name;
  document.getElementById("qv-rating").innerHTML =
    starsHTML(product.rating) +
    `<span class="rating-num">${product.rating.toFixed(1)}</span><span class="rating-count">${t("product.reviews", product.reviews)}</span>`;
  document.getElementById("qv-blurb").textContent = blurb;
  document.getElementById("qv-spec").textContent = spec;
  document.getElementById("qv-stock").innerHTML = `<span class="card-stock ${stock <= 3 ? "is-low" : ""}">${stock <= 3 ? t("stock.low", stock) : t("stock.inStock")}</span>`;
  document.getElementById("qv-price").textContent = money(product.price);
  document.getElementById("qv-qty").textContent = state.quickViewQty;
  renderQuickViewWishlistState();

  document.getElementById("quickview-backdrop").classList.add("is-open");
}

function closeQuickView() {
  document.getElementById("quickview-backdrop").classList.remove("is-open");
  state.quickViewId = null;
}

// --- Toasts ---
function showToast(message) {
  const stack = document.getElementById("toast-stack");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  stack.appendChild(el);
  requestAnimationFrame(() => el.classList.add("is-visible"));
  setTimeout(() => {
    el.classList.remove("is-visible");
    setTimeout(() => el.remove(), 250);
  }, 2400);
}

// --- Checkout modal ---
function openCheckout() {
  document.getElementById("checkout-backdrop").classList.add("is-open");
  document.getElementById("checkout-form-view").classList.remove("hidden");
  document.getElementById("checkout-status-view").classList.add("hidden");
  document.getElementById("checkout-error").textContent = "";
}
function closeCheckout() {
  document.getElementById("checkout-backdrop").classList.remove("is-open");
}

let pollTimer = null;

async function submitCheckout() {
  const name = document.getElementById("checkout-name").value.trim();
  const phone = document.getElementById("checkout-phone").value.trim();
  const errorEl = document.getElementById("checkout-error");
  errorEl.textContent = "";

  if (!/^0?7\d{8}$|^2547\d{8}$/.test(phone.replace(/\s/g, ""))) {
    errorEl.textContent = t("checkout.invalidPhone");
    return;
  }

  const items = cartLines().map((l) => ({ id: l.product.id, qty: l.qty }));
  const submitBtn = document.getElementById("checkout-submit");
  submitBtn.disabled = true;
  submitBtn.textContent = t("checkout.sending");

  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, phone, customerName: name }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || t("checkout.genericError"));

    document.getElementById("checkout-form-view").classList.add("hidden");
    document.getElementById("checkout-status-view").classList.remove("hidden");
    document.getElementById("status-spinner").classList.remove("hidden");
    document.getElementById("status-title").textContent = t("status.checkPhone");
    document.getElementById("status-sub").textContent = t("status.instructions");
    pollOrder(data.orderId);
  } catch (err) {
    errorEl.textContent = err.message;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t("checkout.submit");
  }
}

function pollOrder(orderId) {
  clearInterval(pollTimer);
  const titleEl = document.getElementById("status-title");
  const subEl = document.getElementById("status-sub");
  const spinner = document.getElementById("status-spinner");

  let tries = 0;
  pollTimer = setInterval(async () => {
    tries += 1;
    try {
      const res = await fetch(`/api/orders/${orderId}`);
      const order = await res.json();

      if (order.status === "paid") {
        clearInterval(pollTimer);
        spinner.classList.add("hidden");
        titleEl.textContent = t("status.paidTitle");
        subEl.textContent = t("status.paidSub", order.mpesaReceiptNumber);
        state.cart = {};
        saveCart();
        renderCart();
      } else if (order.status === "failed") {
        clearInterval(pollTimer);
        spinner.classList.add("hidden");
        titleEl.textContent = t("status.failedTitle");
        subEl.textContent = order.failReason || t("status.failedSub");
      }
    } catch (_) {
      // transient network hiccup — keep polling
    }

    if (tries > 40) {
      clearInterval(pollTimer);
      spinner.classList.add("hidden");
      titleEl.textContent = t("status.stillWaitingTitle");
      subEl.textContent = t("status.stillWaitingSub");
    }
  }, 3000);
}

// --- Wire up events ---
document.getElementById("cat-nav").addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-pill");
  if (!btn) return;
  document.querySelectorAll(".cat-pill").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  state.activeCategory = btn.dataset.cat;
  renderGrid();
});

document.getElementById("search-input").addEventListener("input", (e) => {
  state.searchQuery = e.target.value.trim();
  renderGrid();
});

document.getElementById("sort-select").addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  renderGrid();
});

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
document.getElementById("drawer-backdrop").addEventListener("click", closeCart);

document.getElementById("checkout-open").addEventListener("click", () => {
  closeCart();
  openCheckout();
});
document.getElementById("checkout-close").addEventListener("click", closeCheckout);
document.getElementById("checkout-backdrop").addEventListener("click", (e) => {
  if (e.target.id === "checkout-backdrop") closeCheckout();
});
document.getElementById("checkout-submit").addEventListener("click", submitCheckout);
document.getElementById("status-done").addEventListener("click", closeCheckout);

document.getElementById("quickview-close").addEventListener("click", closeQuickView);
document.getElementById("qv-wishlist").addEventListener("click", () => {
  if (state.quickViewId) toggleWishlist(state.quickViewId);
});
document.getElementById("quickview-backdrop").addEventListener("click", (e) => {
  if (e.target.id === "quickview-backdrop") closeQuickView();
});
document.getElementById("qv-qty-inc").addEventListener("click", () => {
  state.quickViewQty += 1;
  document.getElementById("qv-qty").textContent = state.quickViewQty;
});
document.getElementById("qv-qty-dec").addEventListener("click", () => {
  state.quickViewQty = Math.max(1, state.quickViewQty - 1);
  document.getElementById("qv-qty").textContent = state.quickViewQty;
});
document.getElementById("qv-add").addEventListener("click", () => {
  if (!state.quickViewId) return;
  addToCart(state.quickViewId, state.quickViewQty, true);
  closeQuickView();
});

document.getElementById("lang-toggle").addEventListener("click", () => {
  setLanguage(state.lang === "en" ? "sw" : "en");
});

applyStaticTranslations();
loadProducts();
renderCart();
