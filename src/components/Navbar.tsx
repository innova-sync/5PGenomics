import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const productLinks = [
  {
    label: "Molecular Diagnostic Kits",
    path: "/products/moleculardiagnostic",
    desc: "Lyophilized PCR kits for reliable disease detection",
  },
  {
    label: "NIPT Kits and Services",
    path: "/products/niptkit",
    desc: "Non-invasive prenatal testing solutions",
  },
  {
    label: "Mom Guard",
    path: "/products/momguard",
    desc: "Maternal health genomics solutions",
  },
];

const navLinks = [
  { label: "Home",              path: "/"        },
  { label: "About 5P Genomics", path: "/about"   },
  { label: "Technology",        path: null,       children: productLinks },
  { label: "Solution",          path: "/solution" },
  { label: "Services",          path: "/services" },
];

const Navbar = () => {
  const [open, setOpen]               = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string | null) => {
    if (!path) return location.pathname.startsWith("/products");
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="5P Genomics Logo" className="h-10 w-auto" />
          <span className="hidden sm:block font-bold text-lg text-navy">
            5P Genomics
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">

              {link.children ? (
                <>
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition ${
                      isActive(link.path)
                        ? "text-orange"
                        : "text-foreground hover:text-orange"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>

                  {/* Mega Dropdown */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-card border border-border shadow-xl rounded-2xl p-6 w-[480px]">
                      <div className="grid grid-cols-1 gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`flex items-start gap-3 p-4 rounded-xl hover:bg-accent transition group/item ${
                              location.pathname === child.path ? "bg-accent" : ""
                            }`}
                          >
                            {/* active dot */}
                            <span
                              className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                                location.pathname === child.path
                                  ? "bg-orange"
                                  : "bg-border group-hover/item:bg-orange"
                              } transition`}
                            />
                            <div>
                              <p className={`font-semibold text-sm ${
                                location.pathname === child.path
                                  ? "text-orange"
                                  : "group-hover/item:text-white"
                              }`}>
                                {child.label}
                              </p>
                              {child.desc && (
                                <p className="text-xs text-muted-foreground mt-0.5 group-hover/item:text-white/80">
                                  {child.desc}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path!}
                  className={`text-sm font-medium transition ${
                    isActive(link.path)
                      ? "text-orange"
                      : "text-foreground hover:text-orange"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] border-t border-border" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setProductOpen(!productOpen)}
                    className="flex justify-between items-center w-full py-2 text-sm font-medium"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition ${productOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`transition-all overflow-hidden ${
                      productOpen ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="pl-3 space-y-1 border-l border-border">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className={`block p-3 rounded-md hover:bg-accent transition ${
                            location.pathname === child.path ? "bg-accent" : ""
                          }`}
                        >
                          <p className={`text-sm font-medium ${
                            location.pathname === child.path ? "text-orange" : ""
                          }`}>
                            {child.label}
                          </p>
                          {child.desc && (
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {child.desc}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path!}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    isActive(link.path) ? "text-orange" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;