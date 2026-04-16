import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import banner from "@/assets/banner.jpg";

// ── Replace with your company's official email ──────────────────
const COMPANY_EMAIL = "info@genomics.com";

const categories = [
  { name: "All Product", value: "all" },
  { name: "Alcohol Test", value: "cat1" },
  { name: "Saliva Test", value: "cat2" },
  { name: "Urine Test", value: "cat3" },
  { name: "Hair Test", value: "cat4" },
  { name: "Surface Test", value: "cat5" },
  { name: "Vape Detector", value: "cat6" },
];

const products = [
  {
    id: 1,
    title: "Alco 6020 Plus Breathalyzer",
    desc: "Compact breathalyzer for roadside testing.",
    img: "/assets/alco-quant-6020-plus-breathalyzer.jpg",
    category: ["cat1"],
  },
  {
    id: 2,
    title: "DrugWipe 5 S",
    desc: "Detects slight traces of drugs using saliva.",
    img: "/assets/saliva-drug-test-drugwipe-5-s.jpg",
    category: ["cat2"],
  },
  {
    id: 3,
    title: "DrugWipe 6 S",
    desc: "Advanced saliva drug testing system.",
    img: "/assets/drugwipe-6s.jpg",
    category: ["cat2"],
  },
  {
    id: 4,
    title: "Urine Drug Test Cup",
    desc: "All-in-one multi-drug urine testing solution.",
    img: "/assets/urine-test-cup.jpg",
    category: ["cat3"],
  },
  {
    id: 5,
    title: "Hair Drug Test Device",
    desc: "Forensic toxicology hair testing solution.",
    img: "/assets/hair-test.jpg",
    category: ["cat4"],
  },
  {
    id: 6,
    title: "Surface Drug Test",
    desc: "Detect traces of drugs on surfaces.",
    img: "/assets/surface-test.jpg",
    category: ["cat5"],
  },
  {
    id: 7,
    title: "Vape Detector",
    desc: "Detect vaping in restricted environments.",
    img: "/assets/vape-detector.jpg",
    category: ["cat6"],
  },
];

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
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold w-5 text-center">{item.qty}</span>
                    <button
                      onClick={() => onUpdate(item.id, item.qty + 1)}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-orange hover:text-white flex items-center justify-center text-base font-bold transition"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="ml-2 text-xs text-red-400 hover:text-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-5">
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              No payment required. Submitting sends a quote request to our team who will contact you with details.
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
    fullName: "", organisation: "", email: "", phone: "",
    address: "", city: "", country: "", notes: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.country.trim()) e.country = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildEmailBody = () => {
    const productLines = cart
      .map((item) => `  - ${item.title} (Qty: ${item.qty})`)
      .join("\n");

    return `QUOTE REQUEST — Genomics Drug Testing Products
================================================

CUSTOMER INFORMATION
--------------------
Name:         ${form.fullName}
Organisation: ${form.organisation || "N/A"}
Email:        ${form.email}
Phone:        ${form.phone}
Address:      ${form.address}
City:         ${form.city}
Country:      ${form.country}

REQUESTED PRODUCTS
------------------
${productLines}

ADDITIONAL NOTES
----------------
${form.notes || "None"}

================================================
This quote request was submitted via the website.`;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSending(true);
    const subject = encodeURIComponent(
      `Quote Request from ${form.fullName}${form.organisation ? ` — ${form.organisation}` : ""}`
    );
    const body = encodeURIComponent(buildEmailBody());
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      onSuccess();
    }, 800);
  };

  const Field = ({ label, name, placeholder, type = "text", full, textarea, required }) => (
    <div className={full ? "col-span-2" : "col-span-1"}>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
        {label}{required && <span className="text-orange ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={form[name]}
          onChange={handle}
          placeholder={placeholder}
          rows={3}
          className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange/40 resize-none ${
            errors[name] ? "border-red-400" : "border-gray-300"
          }`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handle}
          placeholder={placeholder}
          className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange/40 ${
            errors[name] ? "border-red-400" : "border-gray-300"
          }`}
        />
      )}
      {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
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
            <h3 className="text-xs font-bold text-navy mb-3 uppercase tracking-wide">
              Products Requested
            </h3>
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 rounded-lg object-cover bg-gray-200 flex-shrink-0"
                  />
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

          {/* User Info Form */}
          <div>
            <h3 className="text-xs font-bold text-navy mb-3 uppercase tracking-wide">
              Your Information
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Full Name" name="fullName" placeholder="John Doe" required />
              <Field label="Organisation" name="organisation" placeholder="Company / Hospital / Agency" />
              <Field label="Email Address" name="email" placeholder="john@example.com" type="email" required />
              <Field label="Phone Number" name="phone" placeholder="+234 800 000 0000" required />
              <Field label="Street Address" name="address" placeholder="123 Main Street" full required />
              <Field label="City" name="city" placeholder="Lagos" required />
              <Field label="Country" name="country" placeholder="Nigeria" required />
              <Field
                label="Additional Notes"
                name="notes"
                placeholder="Any specific requirements, quantities, or questions..."
                full
                textarea
              />
            </div>
          </div>

          {/* Info note */}
          <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-700 leading-relaxed">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>
              Clicking <strong>Send Quote Request</strong> will open your email client pre-filled with your details and selected products, addressed to{" "}
              <strong>{COMPANY_EMAIL}</strong>. No payment is collected at this stage.
            </span>
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
              disabled={sending}
              className="flex-1 bg-orange text-white py-3 rounded-xl font-semibold hover:opacity-90 transition text-sm disabled:opacity-60"
            >
              {sending ? "Opening email…" : "Send Quote Request →"}
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
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-navy mb-2">Quote Request Sent!</h2>
      <p className="text-gray-500 text-sm mb-1">
        Your email client should have opened with the pre-filled quote.
      </p>
      <p className="text-gray-500 text-sm mb-6">
        Our team at{" "}
        <span className="font-medium text-orange">{COMPANY_EMAIL}</span> will get back to you shortly.
      </p>
      <button
        onClick={onClose}
        className="bg-orange text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Continue Browsing
      </button>
    </div>
  </div>
);

/* ── Main Page ───────────────────────────────────────────────── */
const AlcoholManagement = () => {
  const [active, setActive] = useState("all");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const filteredProducts =
    active === "all"
      ? products
      : products.filter((p) => p.category.includes(active));

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      return found
        ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...product, qty: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) setCart((prev) => prev.filter((i) => i.id !== id));
    else setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-navy text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {totalItems}
          </span>
        )}
      </button>

      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative py-28 md:py-40 text-white text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 container mx-auto px-4">
            <span className="uppercase tracking-widest text-sm md:text-base">Products</span>
            <h1 className="mt-4 font-bold leading-tight text-xl sm:text-2xl md:text-4xl lg:text-5xl text-orange">
              Reliable Drug Alcohol Test Kits — Saliva, Urine, Surface &amp; Breathalyzers
            </h1>
          </div>
        </section>

        {/* Section Title */}
        <section className="py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Products</h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-4" />
        </section>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 px-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                active === cat.value
                  ? "bg-orange text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <section className="pb-24 container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm sm:text-base text-navy mb-1">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 flex-1">
                    {product.desc}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className={`w-full py-2.5 rounded-lg text-sm font-semibold transition ${
                      addedId === product.id
                        ? "bg-green-500 text-white"
                        : "bg-orange text-white hover:opacity-90"
                    }`}
                  >
                    {addedId === product.id ? "✓ Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
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
          onProceed={() => {
            setCartOpen(false);
            setQuoteOpen(true);
          }}
        />
      )}

      {quoteOpen && (
        <QuoteModal
          cart={cart}
          onClose={() => {
            setQuoteOpen(false);
            setCartOpen(true);
          }}
          onSuccess={handleSuccess}
        />
      )}

      {success && <SuccessModal onClose={() => setSuccess(false)} />}
    </div>
  );
};

export default AlcoholManagement;