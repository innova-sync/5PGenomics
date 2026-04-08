import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Get in touch with us for any inquiries about our products and services. Our team is ready to assist you.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin size={20} className="mt-0.5 flex-shrink-0 text-orange" />
                    <span>Singapore</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={20} className="flex-shrink-0 text-orange" />
                    <span>+65 1234 5678</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={20} className="flex-shrink-0 text-orange" />
                    <span>info@germonizer.com</span>
                  </li>
                </ul>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange resize-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange text-secondary-foreground font-semibold rounded-md hover:bg-orange-light transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
