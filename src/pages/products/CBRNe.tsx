import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const categories = [
  { label: "All Product", value: "all" },
  { label: "Chemical Detection", value: "cat1" },
  { label: "Biological Detection", value: "cat2" },
  { label: "Radiological & Nuclear Detection", value: "cat3" },
  { label: "Explosive Detection", value: "cat4" },
  { label: "Decontamination", value: "cat5" },
  { label: "Respiration", value: "cat6" },
];

const products = [
  {
    title: "Three Way Paper Chemical Agent Liquid Detector",
    category: ["cat1"],
    img: "/cbrne/three-way-paper.jpg",
    link: "#",
    desc: "Detects G, V, or H agents using color changes.",
  },
  {
    title: "Advanced Chemical Warfare Agent Detector",
    category: ["cat1"],
    img: "/cbrne/advanced-chemical-warfare-agent.jpg",
    link: "#",
    desc: "Rapid detection of chemical vapors.",
  },
  {
    title: "CW Sentry Chemical Warfare Agent Detector",
    category: ["cat1"],
    img: "/cbrne/cw-sentry.jpg",
    link: "#",
    desc: "Time-phased analysis of chemical vapors.",
  },
  {
    title: "Biological Identification System",
    category: ["cat2"],
    img: "/cbrne/biological-identification.jpg",
    link: "#",
    desc: "Detects evolving biological threats.",
  },
  {
    title: "Biological Sampling Kit",
    category: ["cat2"],
    img: "/cbrne/biskit-kit.jpg",
    link: "#",
    desc: "Ensures contamination-free sampling.",
  },
  {
    title: "Radiological Detection System",
    category: ["cat3"],
    img: "/cbrne/radiological-detection.jpg",
    link: "#",
    desc: "Flexible radiological monitoring solution.",
  },
  {
    title: "Gamma Ray Spectrometer",
    category: ["cat3"],
    img: "/cbrne/gamma-spectrometer.jpg",
    link: "#",
    desc: "High precision radiation analysis.",
  },
  {
    title: "Explosive Detection Kit",
    category: ["cat4"],
    img: "/cbrne/explosive-kit.jpg",
    link: "#",
    desc: "Reliable explosive identification system.",
  },
  {
    title: "CBR Multi Purpose Wipes",
    category: ["cat5"],
    img: "/cbrne/cbr-wipes.jpg",
    link: "#",
    desc: "Surface decontamination solution.",
  },
  {
    title: "Decon PLUS M333",
    category: ["cat5"],
    img: "/cbrne/decon-plus.jpg",
    link: "#",
    desc: "General-purpose decontamination.",
  },
  {
    title: "Escape Hood CBRN",
    category: ["cat6"],
    img: "/cbrne/escape-hood.jpg",
    link: "#",
    desc: "Respiratory protection in hazardous environments.",
  },
  {
    title: "Sentinel XL CBRN",
    category: ["cat6"],
    img: "/cbrne/sentinel-xl.jpg",
    link: "#",
    desc: "Advanced chemical and biological protection.",
  },
];

const CBRNE = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category.includes(filter));

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* HERO */}
        <section className="bg-[url('/images/bg.jpg')] bg-cover bg-center py-20 text-white relative">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 text-center">
            <span className="uppercase tracking-widest">Products</span>
            <h1 className="text-2xl md:text-4xl font-bold mt-4">
              CBRNe Products - Chemical, Biological, Radiological, Nuclear & Explosives Detection
            </h1>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy">Products</h2>
              <div className="w-20 h-1 bg-orange mx-auto mt-4"></div>
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-md border ${
                    filter === cat.value
                      ? "bg-orange text-white"
                      : "bg-white text-navy"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {filteredProducts.map((item, index) => (
                <div key={index} className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CBRNE;