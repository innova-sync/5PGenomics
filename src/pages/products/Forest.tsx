import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const categories = [
  { label: "All Product", value: "all" },
  { label: "Forensic", value: "cat1" },
  { label: "Investigation", value: "cat2" },
];

const products = [
  {
    title: "Forensic Fingerprint Imaging System – ForensiScan",
    category: ["cat1"],
    img: "/forensic/forensic-fingerprint-imaging.jpg",
    link: "#",
    desc: "Automated photography and enhancement of fingerprints on curved and reflective surfaces.",
  },
  {
    title: "DNA Sample Collection Kits for Forensic Investigation",
    category: ["cat1"],
    img: "/forensic/dna-sample-collection.jpg",
    link: "#",
    desc: "Collect DNA samples from biological evidence at crime scenes.",
  },
  {
    title: "Digital Crime Scene Documentation",
    category: ["cat1"],
    img: "/forensic/digital-crime-scene.jpg",
    link: "#",
    desc: "Automated panoramic imaging for crime scene documentation.",
  },
  {
    title: "CYBERGLOBE – Automated 3D Capturing System",
    category: ["cat1"],
    img: "/forensic/cyberglobe.jpg",
    link: "#",
    desc: "Advanced 3D imaging system for crime scene digitalisation.",
  },
  {
    title: "Bullet Hole Testing Kit",
    category: ["cat1"],
    img: "/forensic/bullet-hole-kit.jpg",
    link: "#",
    desc: "Portable forensic solution for accurate bullet hole identification.",
  },
  {
    title: "Troya Tactical Surveillance Platform",
    category: ["cat2"],
    img: "/forensic/troya-surveillance.jpg",
    link: "#",
    desc: "Advanced surveillance system with GPS and camera control.",
  },
  {
    title: "InTouch BLE Communication System",
    category: ["cat2"],
    img: "/forensic/wireless-communication.jpg",
    link: "#",
    desc: "Secure wireless communication without touching devices.",
  },
];

const Forensic = () => {
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
              Forensic Investigation and Management Products
            </h1>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-20">
          <div className="container mx-auto px-4">

            {/* TITLE */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Products</h2>
              <div className="w-20 h-1 bg-orange mx-auto mt-4"></div>
            </div>

            {/* FILTER */}
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-md border ${
                    filter === cat.value
                      ? "bg-orange text-white"
                      : "bg-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {filteredProducts.map((item, index) => (
                <div
                  key={index}
                  className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-sm font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">
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

export default Forensic;