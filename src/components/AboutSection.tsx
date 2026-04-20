import banner from "@/assets/banner.jpg";

const stats = [
  { value: "500+", label: "Research Projects" },
  { value: "20+", label: "Countries Served" },
  { value: "50+", label: "Expert Scientists" },
  { value: "99%", label: "Accuracy Rate" },
];

const whatWeDo = [
  {
    title: "Research & Research Design",
    desc: "Comprehensive study design, data analysis, and scientific methodology tailored to your genomics research objectives.",
  },
  {
    title: "Molecular Biology & Genomics",
    desc: "Advanced molecular techniques including gene expression, protein analysis, and cellular genomics for cutting-edge discovery.",
  },
  {
    title: "Next Generation Sequencing",
    desc: "High-throughput NGS solutions delivering fast, accurate, and cost-effective sequencing for any scale of genomic study.",
  },
  {
    title: "Genetic Testing Services",
    desc: "Clinically validated genetic testing spanning diagnostics, carrier screening, pharmacogenomics, and hereditary disease profiling.",
  },
];

const whyUs = [
  {
    title: "Precision at Every Step",
    desc: "Our workflows are validated to the highest scientific standards, ensuring accurate and reproducible results.",
  },
  {
    title: "End-to-End Expertise",
    desc: "From study design to sequencing to interpretation — we cover the full genomics pipeline under one roof.",
  },
  {
    title: "Tailored for You",
    desc: "Whether you're a researcher, clinician, or institution, we craft solutions that fit your exact needs.",
  },
  {
    title: "Global Reach, Local Impact",
    desc: "Partnering with institutions across 20+ countries to bring genomic insights where they matter most.",
  },
];

const AboutSection = () => {
  return (
    <div className="bg-background text-foreground">

      {/* Hero Banner */}
      <section
        className="relative py-24 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-block text-xs uppercase tracking-widest text-orange font-semibold mb-3 border border-orange/40 px-3 py-1 rounded-full">
            About Us
          </span>
          <h1 className="text-2xl md:text-4xl font-bold mt-4 leading-tight text-white">
            Pioneering the Future of <span className="text-orange">Genomic Science</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 text-sm md:text-base">
            5P Genomics is a world-class genomics company committed to precision science,
            innovative research, and transformative genetic solutions.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-orange">{s.value}</p>
              <p className="text-sm text-white/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <div className="w-16 h-1 bg-orange mx-auto mb-6" />
        <p className="max-w-3xl mx-auto mb-4 text-muted-foreground leading-relaxed">
          5P Genomics is a trusted leader in genomic research and genetic testing services.
          We partner with research institutions, clinical laboratories, biotech companies,
          and healthcare providers to deliver <strong className="text-foreground">precision genomic solutions</strong> that
          accelerate discovery and improve patient outcomes.
        </p>
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          Our team of expert scientists and bioinformaticians brings decades of combined
          experience across molecular biology, next generation sequencing, and translational
          genomics — making us the partner of choice for organisations that demand excellence.
        </p>
      </section>


      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to advance your genomics journey?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm">
            Get in touch with our team to explore how 5P Genomics can support your research or clinical goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutSection;