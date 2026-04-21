import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import banner from "@/assets/banner.jpg";

// const COMPANY_EMAIL = "digitalinsightworld@gmail.com";


// ── EmailJS config — replace these 3 values with yours ─────────
const EMAILJS_SERVICE_ID  = "service_htzzesw";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_hwbf5q6";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "1S7_5bYekT_21UN4C";   // e.g. "aBcDeFgHiJkLmNoP"
// ───────────────────────────────────────────────────────────────

const categories = [
  { label: "All Product",                          value: "all"  },
  { label: "Oncology",                             value: "cat1" },
  { label: "Urogenital Infections",                value: "cat2" },
  { label: "Respiratory Infection",                value: "cat3" },
  { label: "Hepatitis",                            value: "cat4" },
  { label: "HIV",                                  value: "cat5" },
  { label: "HPV (Genotypes)",                      value: "cat10"},
  { label: "Tropical Disease",                     value: "cat6" },
  { label: "Herpes Simplex Virus Infection",       value: "cat7" },
  { label: "TB & Antimicrobial Resistance",        value: "cat8" },
  { label: "DNA/RNA Extraction",                   value: "cat9" },
];

const products = [
  // ── Oncology ─────────────────────────────────────────────────
  {
    id: 1,
    title: "BRCA 1/2 (Blood & Tissue)",
    category: ["cat1"],
    img: "/moleculardiagnostic/brca.jpg",
    desc: "Detection of 16 germline/somatic mutations in BRCA1 and BRCA2 genes.",
    href: "brca-blood-tissue-genetic-test-kit",
  },
  {
    id: 2,
    title: "BRAF (Tissue/Multi)",
    category: ["cat1"],
    img: "/moleculardiagnostic/braf.jpg",
    desc: "Diagnoses melanoma, papillary thyroid, ovarian, colorectal and prostate cancer for targeted therapy.",
    href: "braf-tissue-multi-sample-kit",
  },
  {
    id: 3,
    title: "EGFR (Plasma/Tissue/Multi)",
    category: ["cat1"],
    img: "/moleculardiagnostic/egfr.jpg",
    desc: "Examines patients with non-small cell lung cancer (NSCLC) for targeted therapy indications.",
    href: "egfr-cancer-detection-kit-plasma-tissue-multi",
  },
  {
    id: 4,
    title: "NRAS Kit (Tissue)",
    category: ["cat1"],
    img: "/moleculardiagnostic/nras.jpg",
    desc: "Examines patients diagnosed with colorectal cancer for targeted therapy indications.",
    href: "nras-tissue-diagnostic-kit",
  },
  {
    id: 5,
    title: "KRAS Kit (Tissue)",
    category: ["cat1"],
    img: "/moleculardiagnostic/kras.jpg",
    desc: "Examines patients diagnosed with colorectal cancer in the KRAS region.",
    href: "kras-tissue-mutation-detection-kit",
  },
  {
    id: 6,
    title: "Prosta Test 2.0 Kit",
    category: ["cat1"],
    img: "/moleculardiagnostic/prosta-test-2.0.jpg",
    desc: "Early non-invasive diagnosis of prostate cancer by detection of the TMPRSS2-ERG chimeric gene.",
    href: "prostate-cancer-screening-test-kit",
  },
  {
    id: 7,
    title: "HRR Screening Kit",
    category: ["cat1"],
    img: "/moleculardiagnostic/hrr-screening.jpg",
    desc: "Detection of 16 germline mutations in the HRR genes associated with hereditary cancer.",
    href: "hrr-screening-hereditary-cancer-kit",
  },

  // ── Urogenital ────────────────────────────────────────────────
  {
    id: 8,
    title: "Urogen Detection Kit",
    category: ["cat2"],
    img: "/moleculardiagnostic/urogen-test-12.jpg",
    desc: "Detection of DNA of 12 pathogens of urogenital infections.",
    href: "urogen-detection-kit",
  },

  // ── Respiratory ───────────────────────────────────────────────
  {
    id: 9,
    title: "SARS Covid-2 Test",
    category: ["cat3"],
    img: "/moleculardiagnostic/sars-covid-2-test.jpg",
    desc: "Diagnostics of respiratory viral infection caused by the SARS-CoV-2 coronavirus.",
    href: "sars-covid-2-test-kit",
  },
  {
    id: 10,
    title: "Covid-2 Fast Test",
    category: ["cat3"],
    img: "/moleculardiagnostic/covid-2-fast-test.jpg",
    desc: "Rapid diagnostics of respiratory viral infection caused by the SARS-CoV-2 coronavirus.",
    href: "covid-2-fast-sars-cov-2-detection-kit",
  },
  {
    id: 11,
    title: "Covid Influenza Test",
    category: ["cat3"],
    img: "/moleculardiagnostic/covid-influenza-test.jpg",
    desc: "Diagnostics of respiratory viral infection caused by SARS-CoV-2 and Influenza.",
    href: "covid-influenza-test-kit",
  },

  // ── Hepatitis ─────────────────────────────────────────────────
  {
    id: 12,
    title: "HEPA-B-TEST-Q",
    category: ["cat4"],
    img: "/moleculardiagnostic/hepa-b-test-q.jpg",
    desc: "Quantitative detection of the hepatitis B virus DNA.",
    href: "hepa-b-test-q-hbv-dna-detection-kit",
  },
  {
    id: 13,
    title: "HEPA-C-TEST-Q",
    category: ["cat4"],
    img: "/moleculardiagnostic/hepa-c-test-q.jpg",
    desc: "Quantitative detection of the hepatitis C virus RNA in patients.",
    href: "hepa-c-test-q",
  },
  {
    id: 14,
    title: "HEPA-D-TEST-Q",
    category: ["cat4"],
    img: "/moleculardiagnostic/hepa-d-test-q.jpg",
    desc: "Qualitative and quantitative detection of hepatitis D virus RNA in patients.",
    href: "hepa-d-test-q",
  },
  {
    id: 15,
    title: "HEPA-C-GENOTYPE-TEST",
    category: ["cat4"],
    img: "/moleculardiagnostic/hepa-c-genotype-test.jpg",
    desc: "Detection of hepatitis C virus and its genotypes (1a, 1b, 2, 3, 4, 5a, 6).",
    href: "hepa-c-genotype-test",
  },
  {
    id: 16,
    title: "HEPA-BCD-TEST",
    category: ["cat4"],
    img: "/moleculardiagnostic/hepa-bcd-test.jpg",
    desc: "Detection and differentiation of hepatitis B, C and D viruses in patients.",
    href: "hepa-bcd-virus-detection-kit",
  },

  // ── HIV ───────────────────────────────────────────────────────
  {
    id: 17,
    title: "HIV (Virus 1 & 2) Test",
    category: ["cat5"],
    img: "/moleculardiagnostic/hiv-virus-one-and-two-test.jpg",
    desc: "Detect and differentiate human immunodeficiency viruses type 1 and 2 (HIV-1 and HIV-2).",
    href: "hiv-virus-1-2-test-kit",
  },
  {
    id: 18,
    title: "HIV-1-TEST-Q",
    category: ["cat5"],
    img: "/moleculardiagnostic/hiv-test-q.jpg",
    desc: "Quantitative detection of the human immunodeficiency virus (HIV-1).",
    href: "hiv-1-test-q",
  },

  // ── HPV ───────────────────────────────────────────────────────
  {
    id: 19,
    title: "HPV Test Kit",
    category: ["cat10"],
    img: "/moleculardiagnostic/HPV-test-kit.jpg",
    desc: "Detection of human papillomavirus (HPV) DNA viruses infecting epithelial cells.",
    href: "human-papillomavirus-hpv-dna-test-kit",
  },

  // ── Tropical Disease ──────────────────────────────────────────
  {
    id: 20,
    title: "PLASMODIUM-TEST-Q",
    category: ["cat6"],
    img: "/moleculardiagnostic/plasmodium-test-q.jpg",
    desc: "Recommended for patients with clinical symptoms of malaria with suspected infection.",
    href: "plasmodium-test-q",
  },
  {
    id: 21,
    title: "PLASMODIUM-SPECIES-TEST",
    category: ["cat6"],
    img: "/moleculardiagnostic/plasmodium-species-test.jpg",
    desc: "Species-level identification of Plasmodium malaria pathogens.",
    href: "plasmodium-species-test",
  },
  {
    id: 22,
    title: "DENV-TEST",
    category: ["cat6"],
    img: "/moleculardiagnostic/denv-test.jpg",
    desc: "For patients with viral disease symptoms with suspected Dengue virus infection.",
    href: "dengue-virus-detection-kit",
  },
  {
    id: 23,
    title: "ZIK-TEST",
    category: ["cat6"],
    img: "/moleculardiagnostic/zik-test.jpg",
    desc: "For patients with viral disease symptoms with suspected Zika virus infection.",
    href: "zika-virus-detection-kit",
  },
  {
    id: 24,
    title: "CHIK-TEST",
    category: ["cat6"],
    img: "/moleculardiagnostic/chik-test.jpg",
    desc: "For patients with clinical symptoms of viral disease with suspected Chikungunya virus.",
    href: "chikungunya-test-kit",
  },
  {
    id: 25,
    title: "TROPIC-TEST",
    category: ["cat6"],
    img: "/moleculardiagnostic/tropic-test.jpg",
    desc: "For patients with symptoms of viral disease caused by tropical disease infection.",
    href: "tropic-virus-detection-test",
  },

  // ── Herpes ────────────────────────────────────────────────────
  {
    id: 26,
    title: "HHV6-TEST",
    category: ["cat7"],
    img: "/moleculardiagnostic/hhv6-test.jpg",
    desc: "Qualitative and quantitative detection of human herpes simplex virus type 6 (HHV-6) DNA.",
    href: "hhv6-test-herpesvirus-detection",
  },

  // ── TB ────────────────────────────────────────────────────────
  {
    id: 27,
    title: "MTB-TEST",
    category: ["cat8"],
    img: "/moleculardiagnostic/mtb-test.jpg",
    desc: "Detection of tuberculosis and non-tuberculosis complex mycobacteria.",
    href: "mtb-test-tuberculosis-ntm-pcr",
  },
  {
    id: 28,
    title: "MTB-RESIST-I-TEST",
    category: ["cat8"],
    img: "/moleculardiagnostic/mtb-resist-one-test.jpg",
    desc: "Detection of mutations associated with first-line drug resistance in tuberculosis complex mycobacteria.",
    href: "tb-first-line-drug-resistance-test",
  },
  {
    id: 29,
    title: "MTB-RESIST-II-TEST",
    category: ["cat8"],
    img: "/moleculardiagnostic/mtb-resist-two-test.jpg",
    desc: "Detects polymorphisms associated with resistance to second-line chemotherapy drugs.",
    href: "mtb-resist-ii-tuberculosis-resistance",
  },

  // ── DNA/RNA Extraction ────────────────────────────────────────
  {
    id: 30,
    title: "NA-EXTRA",
    category: ["cat9"],
    img: "/moleculardiagnostic/na-extra.jpg",
    desc: "Isolation of DNA/RNA from human clinical material using magnetic particle method for PCR tests.",
    href: "na-extra-dna-rna-extraction-kit",
  },
  {
    id: 31,
    title: "NA-EXTRA-PLATE",
    category: ["cat9"],
    img: "/moleculardiagnostic/na-extra-plate.jpg",
    desc: "Semi-automatic simultaneous extraction of DNA/RNA from human clinical material.",
    href: "na-extra-plate-dna-rna-extraction-kit",
  },
  {
    id: 32,
    title: "DNA-PLASMA M AND RT",
    category: ["cat9"],
    img: "/moleculardiagnostic/dna-plasma-m-rt.jpg",
    desc: "Isolation of human DNA from plasma samples using reversible binding of nucleic acids.",
    href: "dna-plasma-m-mrt-kit",
  },
  {
    id: 33,
    title: "DNA-TISSUE M AND F",
    category: ["cat9"],
    img: "/moleculardiagnostic/dna-tissue-m.jpg",
    desc: "Isolation of human DNA from formalin-fixed paraffin-embedded tissues (FFPE blocks).",
    href: "human-dna-isolation-from-ffpe-blocks",
  },
  {
    id: 34,
    title: "DNA-FAST",
    category: ["cat9"],
    img: "/moleculardiagnostic/dna-fast.jpg",
    desc: "Collection, transportation and isolation of DNA from clinical material.",
    href: "dna-fast-kit",
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
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

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

  const handleSubmit = async () => {
    if (!validate()) return;
    setSending(true);
    setSendError("");

    // Format product list for the email
    const productList = cart
      .map((item) => `• ${item.title} — Qty: ${item.qty}`)
      .join("\n");

    // These keys MUST match the variable names in your EmailJS template
    const templateParams = {
      from_name:    form.fullName,
      organisation: form.organisation || "N/A",
      from_email:   form.email,
      phone:        form.phone,
      address:      form.address,
      city:         form.city,
      country:      form.country,
      products:     productList,
      // This sends a reply-to so you can reply directly to the customer
      reply_to:     form.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSending(false);
      onSuccess();
    } catch (err) {
      console.error("EmailJS error:", err);
      setSending(false);
      setSendError("Failed to send. Please try again or contact us directly.");
    }
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

          {/* Send error message */}
          {sendError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
              {sendError}
            </div>
          )}

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
              className="flex-1 bg-orange text-white py-3 rounded-xl font-semibold hover:opacity-90 transition text-sm disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending…
                </>
              ) : "Send Quote Request →"}
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
      <h2 className="text-2xl font-bold text-navy mb-2">Quote Request Sent!</h2>
      <p className="text-gray-500 text-sm mb-2 leading-relaxed">
        Your request has been submitted. Our team will review your product selections and get back to you shortly.
      </p>
      <p className="text-xs text-gray-400 mb-6">
        Expect a response within <span className="font-semibold text-navy">24–48 hours</span>.
      </p>
      <button onClick={onClose} className="bg-orange text-white px-10 py-3 rounded-xl font-semibold hover:opacity-90 transition w-full">
        Continue Browsing
      </button>
    </div>
  </div>
);

/* ── Main Page ───────────────────────────────────────────────── */
const MolecularDiagnostic = () => {
  const [filter, setFilter]     = useState("all");
  const [cart, setCart]         = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [success, setSuccess]   = useState(false);

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
              Molecular Diagnostic Kits — Lyophilized PCR for Reliable Disease Detection
            </h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">

            {/* Section Title */}
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

export default MolecularDiagnostic;