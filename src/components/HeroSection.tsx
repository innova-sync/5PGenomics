import { Shield, Radiation, Search, Hospital } from "lucide-react";
import { Link } from "react-router-dom";

import heroBg from "@/assets/hero-bg.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const services = [
  { icon: Shield, title: "Drug & Alcohol Management", path: "/products/alcohol-management" },
  { icon: Radiation, title: "CBRNe", path: "/products/cbrne" },
  { icon: Search, title: "Forensic Investigation Management", path: "/products/forensic" },
  { icon: Hospital, title: "Healthcare Consumer Products", path: "/products/healthcare" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Text */}
        <div className="max-w-2xl mt-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Welcome to 5P Genomics
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-navy leading-tight mt-6">
            Global Distributor Of Healthcare, Drug Testing, CBRNE Detection And
            Forensic Investigation Kits
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg mt-6">
            With massive experience and network, customer satisfaction is always
            first priority.
          </p>
        </div>

        {/* Service Cards */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-10">
        {services.map((svc, i) => (
          <Link key={i} to={svc.path}>
            <div className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all p-6 md:p-8 flex flex-col items-center text-center group cursor-pointer border border-border hover:-translate-y-1">
              
              <svc.icon
                size={48}
                className="text-orange mb-4 group-hover:scale-110 transition-transform"
                strokeWidth={1.5}
              />

              <h3 className="text-sm md:text-base font-semibold text-navy">
                {svc.title}
              </h3>

            </div>
          </Link>
        ))}
      </div>

        {/* About Section */}
        <div className="container mx-auto px-4 mt-11">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={about1}
                  alt="Corporate meeting"
                  className="rounded-lg object-cover w-full h-48 shadow-md"
                  loading="lazy"
                />
                <img
                  src={about2}
                  alt="Lab diagnostics"
                  className="rounded-lg object-cover w-full h-48 shadow-md"
                  loading="lazy"
                />
              </div>

              <div className="pt-8">
                <img
                  src={about3}
                  alt="CEO Portrait"
                  className="rounded-lg object-cover w-full h-[400px] shadow-md"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                About Us
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in providing an exceptional network for
                manufacturing and services tailored to meet the needs of end
                users. Our goal is to connect businesses with the resources they
                need to succeed in today's competitive landscape.
              </p>

              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-orange text-secondary-foreground font-semibold rounded-md hover:bg-orange-light transition-colors text-sm"
              >
                Know More
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;