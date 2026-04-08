import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SpecialtiesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
