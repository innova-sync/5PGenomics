
import banner from "@/assets/banner.jpg";

const AboutSection = () => {
  return (
    <div className="bg-background text-foreground">

      {/* Page Title */}
      <section
        className="relative py-20 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }} // change path to your image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <span className="text-sm uppercase tracking-wide">About Us</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-4 text-orange">
            Global Experts in Drug Testing, CBRNE Detection, Forensic & Healthcare Solutions
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <div className="w-16 h-1 bg-orange mx-auto mb-6"></div>

        <p className="max-w-4xl mx-auto mb-4">
          Germonizer is a trusted leader in providing comprehensive solutions in{" "}
          <b>CBRNE risk management, healthcare supplies, forensic investigation, and drug management for narcotics.</b>{" "}
          With years of experience working alongside government agencies, healthcare institutions, law enforcement
          agencies, and public safety organizations, we are committed to enhancing safety, efficiency, and resilience.
        </p>

        <p className="max-w-4xl mx-auto">
          Our expertise bridges critical sectors, enabling us to deliver cutting-edge strategies, compliance solutions,
          and operational support that protect lives and safeguard communities.
        </p>
      </section>


      {/* What We Do */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <div className="w-16 h-1 bg-orange mx-auto mb-10"></div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-semibold text-lg mb-3">CBRNE Risk Management</h3>
            <p>
              • Threat assessment and mitigation strategies.<br />
              • Incident response planning.<br />
              • Decontamination protocols.<br />
              • Advanced CBRNE technologies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Healthcare Management</h3>
            <p>
              • Cutting-edge healthcare technologies.<br />
              • Collaboration with healthcare providers.<br />
              • Continuous innovation in medical systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Narcotics Drug Management</h3>
            <p>
              • Secure drug storage systems.<br />
              • Regulatory compliance.<br />
              • Training for enforcement teams.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Expertise Across Sectors</h3>
            <p>Specialists in CBRNE, healthcare, forensic investigation, and narcotics regulation.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
            <p>We’ve partnered with government agencies and organizations delivering real results.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Tailored Solutions</h3>
            <p>Customized strategies designed for each client’s unique needs.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Commitment to Excellence</h3>
            <p>We follow global best practices from consultation to implementation.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <p><b>• Olubunmi Ajasa</b> – Founder & CEO</p>
          <p><b>• Daisy</b> – Healthcare Specialist</p>
          <p><b>• Daisy Dona</b> – Narcotics Policy Advisor</p>

          <p className="italic mt-4">
            Our professionals are supported by advisors and consultants bringing diverse expertise.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-gray-50 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Clients</h2>

        <p>
          • Government ministries and defense agencies.<br />
          • Healthcare institutions and regulatory bodies.<br />
          • Law enforcement organizations.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>

        <p className="italic max-w-2xl mx-auto">
          "Their team helped us enhance our CBRNE readiness with exceptional professionalism."
        </p>
        <p className="mt-4 font-semibold">
          — Pedro Satirjadi, Director, PT Pesat Pharma Indonesia
        </p>
      </section>

    </div>
  );
};

export default AboutSection;