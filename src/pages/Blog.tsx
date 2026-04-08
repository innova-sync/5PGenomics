import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
