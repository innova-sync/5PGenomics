import { Shield, Radiation, Search, Hospital } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import heroBg from "@/assets/hero-bg.jpg";
import banner2 from "@/assets/banner2.png";

const services = [
  { icon: Shield,    title: "Research & Research Design",    path: "/products/researchdesign"   },
  { icon: Radiation, title: "Molecular Biology & Genomics",  path: "/products/molecularbiology" },
  { icon: Search,    title: "Next Generation Sequencing",    path: "/products/nextgeneration"   },
  { icon: Hospital,  title: "Genetic Testing Services",      path: "/products/genetictesting"   },
];

/* ── reusable scroll-reveal wrapper ── */
const Reveal = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ── SVG hex grid overlay ── */
const HexOverlay = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.18 }}
  >
    <defs>
      <pattern
        id="hex-pattern"
        x="0"
        y="0"
        width="60"
        height="52"
        patternUnits="userSpaceOnUse"
      >
        {/* flat-top hexagon path, 28px radius */}
        <polygon
          points="15,2 45,2 58,26 45,50 15,50 2,26"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.2"
        />
        <polygon
          points="15,2 45,2 58,26 45,50 15,50 2,26"
          fill="#0ea5e9"
          fillOpacity="0.06"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hex-pattern)" />
  </svg>
);

const HeroSection = () => {
  const aboutRef = useRef(null);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* dark base layer so text is always readable */}
        <div className="absolute inset-0 bg-black/55" />
        {/* bright-light blue tint — layered on top of dark base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,165,233,0.40) 0%, rgba(56,189,248,0.22) 50%, rgba(2,132,199,0.45) 100%)",
          }}
        />
        {/* hex grid on top of tint */}
        <HexOverlay />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Hero Text ── */}
        <div className="max-w-2xl mt-16">
          <motion.p
            className="text-xs font-semibold tracking-[0.3em] uppercase text-sky-200 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to 5P Genomics
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mt-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Next Generation life science frontier in{" "}
            <span className="text-sky-200">Research, Genomics</span> and Clinical
            laboratory solutions.
          </motion.h1>
        </div>

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-10">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <Link to={svc.path}>
                <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 md:p-8 flex flex-col items-center text-center group cursor-pointer border border-white/20 hover:bg-white/20">
                  <svc.icon
                    size={44}
                    className="text-sky-200 mb-4 group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    {svc.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── About Section ── */}
        <div ref={aboutRef} className="mt-20 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Single Image */}
            <Reveal direction="left">
              <div className="relative">
                {/* decorative ring */}
                <div className="absolute -inset-3 rounded-2xl border border-sky-300/30 pointer-events-none" />
                <div className="absolute -inset-6 rounded-2xl border border-sky-300/15 pointer-events-none" />

                <img
                  src={banner2}
                  alt="5P Genomics Lab"
                  className="rounded-2xl object-cover w-full h-72 md:h-96 shadow-2xl"
                  loading="lazy"
                />

                {/* floating badge */}
                {/* <motion.div
                  className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl px-4 py-3 text-center"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <p className="text-2xl font-bold text-sky-600">500+</p>
                  <p className="text-xs text-gray-500 font-medium">Research Projects</p>
                </motion.div> */}
              </div>
            </Reveal>

            {/* Text */}
            <Reveal direction="right" delay={0.15}>
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{ background: "rgba(0,20,40,0.60)", backdropFilter: "blur(12px)", border: "1px solid rgba(56,189,248,0.15)" }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-sky-300 mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                  5P Genomics
                </h2>

                <p className="text-white/90 leading-relaxed mb-5 text-sm md:text-base">
                  In the ever-dynamic sphere of Precision medicine, Genomics applications,
                  Next generation sequencing, and Translational research, 5P Genomics has
                  emerged as a beacon of support to Research Institutions, Research Scientists,
                  Clinicians, Hospitals, and Diagnostic Laboratories.
                </p>

                {/* Mission block */}
                <div className="mb-4 pl-4 border-l-2 border-sky-400">
                  <p className="text-sky-300 font-bold text-sm uppercase tracking-wide mb-1">Our Mission</p>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    To transform research and clinical laboratory capabilities through a sophisticated managed
                    service model, delivering integrated molecular solutions and technical excellence
                    that remove financial and operational barriers to advanced diagnostics.
                  </p>
                </div>

                {/* Vision block */}
                <div className="mb-8 pl-4 border-l-2 border-orange">
                  <p className="text-orange font-bold text-sm uppercase tracking-wide mb-1">Our Vision</p>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    To be the definitive bridge for genomic innovation, priming a future where every partner
                    has seamless access to world-class Research and Biomedical technology.
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/about"
                    className="inline-block px-7 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors text-sm shadow-lg"
                  >
                    Know More →
                  </Link>
                </motion.div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;