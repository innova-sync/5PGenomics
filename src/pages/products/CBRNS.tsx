import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Radiation } from "lucide-react";
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
    img: "/images/thumbnail/Three Way Paper.jpg",
    link: "/three-way-chemical-agent-liquid-detector.html",
    desc: "Detects G, V, or H agents using color changes.",
  },
  {
    title: "Advanced Chemical Warfare Agent Detector",
    category: ["cat1"],
    img: "/images/thumbnail/Advanced Chemical Warfare Agent.jpg",
    link: "/acwa-chemical-warfare-oem-sensor-module-detector.html",
    desc: "Rapid detection of chemical vapors.",
  },
  {
    title: "CW Sentry Chemical Warfare Agent Detector",
    category: ["cat1"],
    img: "/images/thumbnail/cw sentry chemical warfare agent detector.jpg",
    link: "/cw-sentry-chemical-warfare-agent-detector.html",
    desc: "Time-phased analysis of chemical vapors.",
  },
  {
    title: "Biological Identification System",
    category: ["cat2"],
    img: "/images/thumbnail/next generation biological identification system.jpg",
    link: "/next-generation-biological-identification-system.html",
    desc: "Detects evolving biological threats.",
  },
  {
    title: "Biological Sampling Kit",
    category: ["cat2"],
    img: "/images/thumbnail/biskit-biological sampling kit.jpg",
    link: "/biskit-biological-sampling-kit.html",
    desc: "Ensures contamination-free sampling.",
  },
  {
    title: "Radiological Detection System",
    category: ["cat3"],
    img: "/images/thumbnail/d-tect’s radiological detection system.jpg",
    link: "/radiation-monitoring-dtect-device.html",
    desc: "Flexible radiological monitoring solution.",
  },
  {
    title: "Gamma Ray Spectrometer",
    category: ["cat3"],
    img: "/images/thumbnail/germanium gamma ray imaging hpge spectrometer.jpg",
    link: "/germanium-gamma-hpge-spectrometer.html",
    desc: "High precision radiation analysis.",
  },
  {
    title: "Explosive Detection Kit",
    category: ["cat4"],
    img: "/images/thumbnail/general screening explosive.jpg",
    link: "/general-screening-explosive-detection-identification.html",
    desc: "Reliable explosive identification system.",
  },
  {
    title: "CBR Multi Purpose Wipes",
    category: ["cat5"],
    img: "/images/thumbnail/CBR Multi-Purpose Wipes.jpg",
    link: "/cbr-decontamination-wipes.html",
    desc: "Surface decontamination solution.",
  },
  {
    title: "Decon PLUS M333",
    category: ["cat5"],
    img: "/images/thumbnail/Decon PLUS.jpg",
    link: "/decon-plus-m333-general-purpose-decontaminant.html",
    desc: "General-purpose decontamination.",
  },
  {
    title: "Escape Hood CBRN",
    category: ["cat6"],
    img: "/images/thumbnail/Escape Hood CBRN.jpg",
    link: "/escape-hood-cbrn.html",
    desc: "Respiratory protection in hazardous environments.",
  },
  {
    title: "Sentinel XL CBRN",
    category: ["cat6"],
    img: "/images/thumbnail/Sentinel XL CBRN.jpg",
    link: "/sentinel-xl-cbrn.html",
    desc: "Advanced chemical and biological protection.",
  },
];

const CBRNS = () => {
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

            {/* HEADER */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy">Products</h2>
              <div className="w-20 h-1 bg-orange mx-auto mt-4"></div>
            </div>

            {/* FILTER BUTTONS */}
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

            {/* PRODUCT GRID */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {filteredProducts.map((item, index) => (
                <a key={index} href={item.link}>
                  <div className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 h-full">
                    
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
                </a>
              ))}
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CBRNS;