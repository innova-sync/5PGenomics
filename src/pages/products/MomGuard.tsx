
// src/pages/products/MolecularBiology.tsx
// Route: /products/molecularbiology

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import banner from "@/assets/banner.jpg";

// ── Admin email — all quote requests go here ────────────────────
const ADMIN_EMAIL = "Hello@5pgenomics.com";
// ───────────────────────────────────────────────────────────────

const categories = [
  { label: "All Product", value: "all"  },
  { label: "Oncology",    value: "cat1" },
];

const products = [
  {
    id: 1,
    title: "MIRA-15 Genetic Cancer Panel",
    category: ["cat1"],
    img: "/momguard/MIRA-15-Genetic-Cancer-Panel.jpg",
    desc: "MIRA-15 is a next-generation sequencing (NGS) based diagnostic panel designed for the comprehensive detection of genetic mutations associated",
    href: "MIRA-15-Genetic-Cancer-Panel",
  },
  {
    id: 2,
    title: "TARF NGS Panel Analysis",
    category: ["cat1"],
    img: "/momguard/TARF-NGS-Panel-for-Targeted-Cancer-Therapy-Mutation-Analysis.jpg",
    desc: "NGS-based TARF panel detects key mutations in PIK3CA, KRAS, EGFR, BRAF, and ESR1 to support precision antitumor treatment decisions.",
    href: "TARF-NGS-Panel-for-Targeted-Cancer-Therapy-Mutation-Analysis",
  },
];

/* ── Qty Control ─────────────────────────────────────────────── */
const QtyControl = ({ qty, onIncrease, onDecrease }) => (
  <div className="flex items-center justify-between w-full bg-orange/10 rounded-lg px-2 py-1.5">
    <button
      onClick={onDecrease}
      className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-lg font-bold hover:opacity-80 transition flex-shrink-0"
    >
      −
    </button>
    <span className="text-sm font-bold text-navy">{qty} in cart</span>
    <button
      onClick={onIncrease}
      className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-lg font-bold hover:opacity-80 transition flex-shrink-0"
    >
      +
    </button>
  </div>
);

/* ── Cart Drawer ─────────────────────────────────────────────── */
const CartDrawer = ({ cart, onClose, onUpdate, onRemove, onProceed }) => {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-navy">
            Quote Cart{" "}
            <span className="text-sm font-normal text-gray-500">
              ({totalQty} {totalQty === 1 ? "item" : "items"})
            </span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400 mt-16 text-sm">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0 bg-gray-100"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-navy leading-snug mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 mb-2">{item.desc}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdate(item.id, item.qty - 1)}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-orange hover:text-white flex items-center justify-center text-base font-bold transition"
                    >−</button>
                    <span className="text-sm font-semibold w-5 text-center">{item.qty}</span>
                    <button
                      onClick={() => onUpdate(item.id, item.qty + 1)}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-orange hover:text-white flex items-center justify-center text-base font-bold transition"
                    >+</button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="ml-2 text-xs text-red-400 hover:text-red-600 transition"
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-5">
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              No payment required. Our team will contact you with pricing &amp; availability.
            </p>
            <button
              onClick={onProceed}
              className="w-full bg-orange text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Request a Quote →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

/* ── Quote Modal ─────────────────────────────────────────────── */
const QuoteModal = ({ cart, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    fullName: "", organisation: "", email: "",
    phone: "", address: "", city: "", country: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.country.trim()) e.country = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const totalItems = cart.reduce((s, i) => s + i.qty, 0);

    const productLines = cart
      .map((item) => `  • ${item.title} — Qty: ${item.qty}`)
      .join("\n");

    const submittedAt = new Date().toLocaleString("en-NG", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Lagos",
    });

    const subject = `New Quote Request from ${form.fullName}`;

    const body = [
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "        NEW QUOTE REQUEST",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "CUSTOMER DETAILS",
      "─────────────────────────────────",
      `Full Name    : ${form.fullName}`,
      `Organisation : ${form.organisation || "N/A"}`,
      `Email        : ${form.email}`,
      `Phone        : ${form.phone}`,
      `Address      : ${form.address}`,
      `City         : ${form.city}`,
      `Country      : ${form.country}`,
      "",
      `PRODUCTS REQUESTED (${totalItems} item${totalItems !== 1 ? "s" : ""})`,
      "─────────────────────────────────",
      productLines,
      "",
      "─────────────────────────────────",
      `Submitted    : ${submittedAt}`,
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    ].join("\n");

    // Open the user's email client pre-filled and addressed to admin
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    onSuccess();
  };

  const inputClass = (name: string) =>
    `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition ${
      errors[name] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-2xl">
          <div>
            <h2 className="text-lg font-bold text-navy">Request a Quote</h2>
            <p className="text-xs text-gray-500">
              Fill in your details — our team will reach out with pricing &amp; availability.
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">
            &times;
          </button>
        </div>

        <div className="px-6 py-5 space-y-6">

          {/* Product Summary */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-xs font-bold text-navy mb-3 uppercase tracking-wide">Products Requested</h3>
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.img} alt={item.title} className="w-10 h-10 rounded-lg object-cover bg-gray-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy truncate">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-orange flex-shrink-0 bg-orange/10 px-2 py-0.5 rounded-md">
                    Qty: {item.qty}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {/* Form */}
          <div>
            <h3 className="text-xs font-bold text-navy mb-4 uppercase tracking-wide">Your Information</h3>
            <div className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Full Name <span className="text-orange">*</span>
                  </label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handle}
                    placeholder="John Doe" autoComplete="name" className={inputClass("fullName")} />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Organisation</label>
                  <input type="text" name="organisation" value={form.organisation} onChange={handle}
                    placeholder="Company / Hospital / Agency" autoComplete="organization" className={inputClass("organisation")} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Email Address <span className="text-orange">*</span>
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handle}
                    placeholder="john@example.com" autoComplete="email" className={inputClass("email")} />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Phone Number <span className="text-orange">*</span>
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handle}
                    placeholder="+234 800 000 0000" autoComplete="tel" className={inputClass("phone")} />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Street Address <span className="text-orange">*</span>
                </label>
                <input type="text" name="address" value={form.address} onChange={handle}
                  placeholder="123 Main Street" autoComplete="street-address" className={inputClass("address")} />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    City <span className="text-orange">*</span>
                  </label>
                  <input type="text" name="city" value={form.city} onChange={handle}
                    placeholder="Lagos" autoComplete="address-level2" className={inputClass("city")} />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Country <span className="text-orange">*</span>
                  </label>
                  <input type="text" name="country" value={form.country} onChange={handle}
                    placeholder="Nigeria" autoComplete="country-name" className={inputClass("country")} />
                  {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pb-2">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition text-sm"
            >
              ← Back to Cart
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-orange text-white py-3 rounded-xl font-semibold hover:opacity-90 transition text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Quote Request
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ── Success Modal ───────────────────────────────────────────── */
const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm text-center px-8 py-10">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-navy mb-2">Almost There!</h2>
      <p className="text-gray-500 text-sm mb-2 leading-relaxed">
        Your email app has opened with your quote pre-filled and addressed to our
        team. Just press <span className="font-semibold text-navy">Send</span> in
        your email app to complete it.
      </p>
      <p className="text-xs text-gray-400 mb-6">
        Expect a response within <span className="font-semibold text-navy">24–48 hours</span> once sent.
      </p>
      <button onClick={onClose} className="bg-orange text-white px-10 py-3 rounded-xl font-semibold hover:opacity-90 transition w-full">
        Continue Browsing
      </button>
    </div>
  </div>
);

/* ── Main Page ───────────────────────────────────────────────── */
const MomGuard = () => {
  const [filter, setFilter]       = useState("all");
  const [cart, setCart]           = useState([]);
  const [cartOpen, setCartOpen]   = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [success, setSuccess]     = useState(false);

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category.includes(filter));

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  const getQty = (id: number) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      return found
        ? prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) setCart((prev) => prev.filter((i) => i.id !== id));
    else setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id: number) => setCart((prev) => prev.filter((i) => i.id !== id));

  const handleSuccess = () => {
    setQuoteOpen(false);
    setCart([]);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 z-30 bg-orange text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:opacity-90 transition"
        aria-label="Open quote cart"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-navy text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {totalItems}
          </span>
        )}
      </button>

      <div className="pt-20">
        {/* Hero Banner */}
        <section
          className="relative py-20 text-white text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 container mx-auto px-4">
            <span className="inline-block text-xs uppercase tracking-widest text-orange font-semibold mb-3 border border-orange/40 px-3 py-1 rounded-full">
              Products
            </span>
            <h1 className="text-2xl md:text-4xl font-bold mt-3 text-white">
              Next Generation Sequencing (NGS) Genetic Testing Panels
            </h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy">Products</h2>
              <div className="w-20 h-1 bg-orange mx-auto mt-4" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
                    filter === cat.value
                      ? "bg-orange text-white border-orange"
                      : "bg-white text-navy border-gray-300 hover:border-orange hover:text-orange"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const qty = getQty(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col border border-gray-100"
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-44 object-cover bg-gray-100"
                    />
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-semibold text-navy mb-1 leading-snug">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 mb-4 flex-1 leading-relaxed">
                        {product.desc}
                      </p>

                      {qty > 0 ? (
                        <QtyControl
                          qty={qty}
                          onIncrease={() => addToCart(product)}
                          onDecrease={() => updateQty(product.id, qty - 1)}
                        />
                      ) : (
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full py-2.5 rounded-lg text-sm font-semibold bg-orange text-white hover:opacity-90 transition"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </div>

      <Footer />

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdate={updateQty}
          onRemove={removeItem}
          onProceed={() => { setCartOpen(false); setQuoteOpen(true); }}
        />
      )}

      {quoteOpen && (
        <QuoteModal
          cart={cart}
          onClose={() => { setQuoteOpen(false); setCartOpen(true); }}
          onSuccess={handleSuccess}
        />
      )}

      {success && <SuccessModal onClose={() => setSuccess(false)} />}
    </div>
  );
};

export default MomGuard;