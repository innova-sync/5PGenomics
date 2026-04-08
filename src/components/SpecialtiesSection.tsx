import { ShieldCheck, Radiation, Pill, Brain, Search, FlaskConical } from "lucide-react";

const specialties = [
  { icon: ShieldCheck, title: "Defence Technology" },
  { icon: Radiation, title: "CBRNe Management" },
  { icon: Pill, title: "Narcotics Management" },
  { icon: Brain, title: "AI Healthcare" },
  { icon: Search, title: "AI Investigation" },
  { icon: FlaskConical, title: "AI Lab Forensic" },
];

const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Specialties</h2>
          <h3 className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhancing resilience and operational effectiveness across sectors
          </h3>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-sm leading-relaxed">
            We deliver comprehensive solutions that enhance resilience and operational effectiveness
            across diverse sectors. From safeguarding communities to empowering healthcare
            professionals, Germonizer is at the forefront of innovation for a safer, healthier world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {specialties.map((spec, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow border border-border group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                <spec.icon size={32} className="text-orange" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-semibold text-navy">{spec.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
