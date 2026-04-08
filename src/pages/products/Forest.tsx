import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TreePine } from "lucide-react";

const Forest = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <TreePine size={40} className="text-orange" strokeWidth={1.5} />
              <h1 className="text-3xl md:text-4xl font-bold text-navy">Forensic Investigation</h1>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Our forensic investigation management solutions support law enforcement and investigative bodies with cutting-edge tools for evidence collection, analysis, and case management.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {["Evidence Collection Kits", "Crime Scene Analysis Tools", "Forensic Lab Equipment"].map((product) => (
                <div key={product} className="bg-card rounded-lg shadow-md p-6 border border-border">
                  <h3 className="text-lg font-semibold text-navy mb-2">{product}</h3>
                  <p className="text-muted-foreground text-sm">
                    Professional-grade forensic tools for thorough investigations.
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

export default Forest;
