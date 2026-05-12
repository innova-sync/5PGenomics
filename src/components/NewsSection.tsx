import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import banner from "@/assets/banner.jpg";

const healthcareFeatures = [
  {
    title: "Molecular Diagnostic (Lyophilized PCR Kits)",
    img: "/icons/icon-06.png",
    link: "/products/moleculardiagnostic",
    desc: "Lyophilized PCR kits for reliable disease detection",
  },
  {
    title: "NIPT Kits and Service",
    img: "/icons/icon-05.png",
    link: "/products/niptkit",
    desc: "Non-invasive prenatal testing solutions",
  },
  {
    title: "NGS",
    img: "/icons/ngs.png",
    link: "/products/nextgeneration",
    desc: "Next generation sequencing services",
  },
  {
    title: "Mom Guard",
    img: "/icons/icon-04.png",
    link: "/products/momguard",
    desc: "Healthcare consumer product solutions",
  },
];

const GeneticTesting = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

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
              Healthcare Product Solutions for Clinical &amp; Diagnostic Excellence
            </h1>
          </div>
        </section>

        {/* Section Title */}
        <section className="pt-16 pb-4 text-center">
          <h2 className="text-3xl font-bold text-navy">Products</h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-4" />
        </section>

        {/* Feature Cards */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {healthcareFeatures.map((item, index) => (
                <Link key={index} to={item.link}>
                  <div className="group p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-orange/40 hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer h-full flex flex-col items-center justify-center">

                    <div className="flex justify-center mb-5">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-navy leading-snug group-hover:text-orange transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed hidden sm:block">
                      {item.desc}
                    </p>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GeneticTesting;