import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Gen<span className="text-orange">o</span>mics
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Global distributor of healthcare, drug testing, CBRNE detection and forensic investigation kits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-orange" />
                <span>Singapore</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-orange" />
                <span>+65 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-orange" />
                <span>info@Genomics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Genomics Pte Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
