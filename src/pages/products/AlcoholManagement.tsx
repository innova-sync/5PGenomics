import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import banner from "@/assets/banner.jpg";

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
    title: "Alco 6020 Plus Breathalyzer",
    desc: "Compact breathalyzer for roadside testing.",
    img: "/assets/alco-quant-6020-plus-breathalyzer.jpg",
    category: ["cat1"],
  },
  {
    title: "DrugWipe 5 S",
    desc: "Detects slight traces of drugs using saliva.",
    img: "/assets/saliva-drug-test-drugwipe-5-s.jpg",
    category: ["cat2"],
  },
  {
    title: "DrugWipe 6 S",
    desc: "Advanced saliva drug testing system.",
    img: "/assets/drugwipe-6s.jpg",
    category: ["cat2"],
  },
  {
    title: "Urine Drug Test Cup",
    desc: "All-in-one multi-drug urine testing solution.",
    img: "/assets/urine-test-cup.jpg",
    category: ["cat3"],
  },
  {
    title: "Hair Drug Test Device",
    desc: "Forensic toxicology hair testing solution.",
    img: "/assets/hair-test.jpg",
    category: ["cat4"],
  },
  {
    title: "Surface Drug Test",
    desc: "Detect traces of drugs on surfaces.",
    img: "/assets/surface-test.jpg",
    category: ["cat5"],
  },
  {
    title: "Vape Detector",
    desc: "Detect vaping in restricted environments.",
    img: "/assets/vape-detector.jpg",
    category: ["cat6"],
  },
];

const AlcoholManagement = () => {
  const [active, setActive] = useState("all");

  const filteredProducts =
    active === "all"
      ? products
      : products.filter((p) => p.category.includes(active));

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">

        {/* Hero Section */}
        <section
          className="relative py-28 md:py-40 text-white text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 container mx-auto px-4">
            <span className="uppercase tracking-widest text-sm md:text-base">
              Products
            </span>

            <h1 className="mt-4 font-bold leading-tight text-xl sm:text-2xl md:text-4xl lg:text-5xl text-orange">
              Reliable Drug Alcohol Test Kits - Saliva, Urine, Surface & Breathalyzers
            </h1>
          </div>
        </section>

        {/* Title */}
        <section className="py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Products
          </h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-4"></div>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 px-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition 
                ${
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
        <section className="pb-20 container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-sm sm:text-base text-navy mb-2">
                    {product.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default AlcoholManagement;