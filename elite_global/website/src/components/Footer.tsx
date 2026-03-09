import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ibm-gray-100 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-ibm-gray-80">
          <div className="lg:col-span-1">
            <Link to="/home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-ibm-blue-60 flex items-center justify-center text-white font-bold text-sm">
                E
              </div>
              <span className="text-xl font-semibold tracking-tight">
                ELITE GLOBAL
              </span>
            </Link>
            <p className="text-ibm-gray-20 text-sm leading-relaxed mb-6">
              We don't just advise — we partner with you to achieve lasting
              success.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.15em] mb-6 text-ibm-gray-20">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { to: "/home", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/activities", label: "Activities" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-ibm-gray-20 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.15em] mb-6 text-ibm-gray-20">
              Services
            </h4>
            <div className="space-y-3">
              {[
                "Corporate Trainings",
                "Business Consultancy",
                "Management Consultancy",
                "Human Resource Management",
                "Oil and Gas",
                "Procurement",
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-sm text-ibm-gray-20 hover:text-white transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.15em] mb-6 text-ibm-gray-20">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ibm-blue-60 mt-0.5 shrink-0" />
                <p className="text-sm text-ibm-gray-20">Banjul, The Gambia</p>
              </div>
              <a
                href="mailto:eliteglobalconsultancy.co@gmail.com"
                className="flex items-start gap-3 group"
              >
                <Mail className="w-4 h-4 text-ibm-blue-60 mt-0.5 shrink-0" />
                <p className="text-sm text-ibm-gray-20 group-hover:text-white transition-colors">
                  eliteglobalconsultancy.co@gmail.com
                </p>
              </a>
              <a href="tel:+2207305981" className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-ibm-blue-60 mt-0.5 shrink-0" />
                <p className="text-sm text-ibm-gray-20 group-hover:text-white transition-colors">
                  +220-7305981
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">
          <p className="text-xs text-ibm-gray-80 font-mono">
            &copy; {new Date().getFullYear()} Elite Global Consultancy Co. Ltd.
            All rights reserved.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm text-ibm-blue-60 hover:text-white transition-colors"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
