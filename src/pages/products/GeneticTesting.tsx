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
    desc: "Automated fingerprint enhancement on curved surfaces.",
  },
  {
    title: "DNA Sample Collection Kit",
    category: ["cat1"],
    img: "/forensic/dna-sample-collection.jpg",
    desc: "Collect DNA samples from crime scenes.",
  },
];

const healthcareFeatures = [
  {
    title: "Molecular Diagnostic (Lyophilized PCR kits)",
    img: "/icons/icon-06.png",
    link: "#",
  },
  {
    title: "NIPT Kits and Service",
    img: "/icons/icon-05.png",
    link: "#",
  },
  {
    title: "NGS",
    img: "/icons/ngs.png",
    link: "#",
  },
  {
    title: "Consumer Products",
    img: "/icons/icon-04.png",
    link: "#",
  },
];

const ForensicProducts = () => {
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
              Healthcare Product Solutions for Clinical & Diagnostic Excellence
            </h1>
          </div>
        </section>

        {/* FEATURE CARDS (converted properly) */}
        <section className="py-16">
          <div className="container mx-auto px-4">

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {healthcareFeatures.map((item, index) => (
                <a key={index} href={item.link}>
                  <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center cursor-pointer">
                    
                    <div className="flex justify-center mb-4">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-16"
                      />
                    </div>

                    <h3 className="text-sm font-semibold">
                      {item.title}
                    </h3>

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

export default ForensicProducts;