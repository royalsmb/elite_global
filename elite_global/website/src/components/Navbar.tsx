import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 border-b border-ibm-gray-20/50">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-ibm-blue-60 flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <span className="text-xl font-semibold tracking-tight">
              ELITE GLOBAL
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/activities", label: "Activities" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive(link.to)
                    ? "text-ibm-blue-60"
                    : "hover:text-ibm-blue-60"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-ibm-blue-60"
                  />
                )}
              </Link>
            ))}
            <Link to="/contact" className="carbon-button-primary text-sm">
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-ibm-gray-20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/activities", label: "Activities" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-lg font-medium py-3 px-4 transition-colors ${
                    isActive(link.to)
                      ? "text-ibm-blue-60 bg-ibm-gray-10"
                      : "hover:bg-ibm-gray-10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
