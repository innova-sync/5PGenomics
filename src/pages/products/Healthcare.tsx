import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hospital } from "lucide-react";

const Healthcare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <Hospital size={40} className="text-orange" strokeWidth={1.5} />
              <h1 className="text-3xl md:text-4xl font-bold text-navy">Healthcare Consumer Products</h1>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              We offer a wide range of healthcare consumer products designed for both professional medical use and personal health monitoring, ensuring quality and reliability.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {["Rapid Test Kits", "Personal Health Monitors", "Medical Consumables"].map((product) => (
                <div key={product} className="bg-card rounded-lg shadow-md p-6 border border-border">
                  <h3 className="text-lg font-semibold text-navy mb-2">{product}</h3>
                  <p className="text-muted-foreground text-sm">
                    Trusted healthcare products for everyday wellness needs.
                  </p>
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

export default Healthcare;
