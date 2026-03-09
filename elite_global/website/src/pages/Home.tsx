import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  Users,
  Briefcase,
  Settings,
  UserCheck,
  Fuel,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "corporate-trainings",
    title: "Corporate Trainings",
    description:
      "Comprehensive training programs that enhance employees' performance, leadership capacity, and organizational productivity.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: "business-consultancy",
    title: "Business Consultancy",
    description:
      "Strategic insights, market analyses, and actionable business plans that drive sustainable results.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: "management-consultancy",
    title: "Management Consultancy",
    description:
      "Professional advice on corporate governance, performance management, and organizational restructuring.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    id: "human-resource-management",
    title: "Human Resource Management",
    description:
      "Professional HR solutions designed to optimize workforce performance and foster a positive organizational culture.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    id: "oil-and-gas",
    title: "Oil and Gas – Downstream",
    description:
      "Specialized consultancy and capacity-building services in the downstream oil and gas sector.",
    icon: <Fuel className="w-6 h-6" />,
  },
  {
    id: "procurement",
    title: "Procurement",
    description:
      "End-to-end procurement consultancy to achieve value for money, transparency, and compliance in purchasing processes.",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Trainings Delivered" },
  { value: "50+", label: "Organizations Served" },
  { value: "6", label: "Core Service Areas" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Right-side background image */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img
            src="/assets/elite_global/img/elite-global-05.jpeg"
            alt="Elite Global training session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
          <div className="absolute bottom-12 left-12 bg-ibm-blue-60 p-8 text-white z-10">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm font-mono uppercase tracking-widest">
              Years Experience
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-ibm-blue-60 font-mono text-sm mb-4">
                <Globe className="w-4 h-4" />
                <span>BASED IN THE GAMBIA</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
                Strategic{" "}
                <span className="font-semibold">Transformation</span> for
                Global Success.
              </h1>
              <p className="text-lg text-ibm-gray-80 mb-8 max-w-lg leading-relaxed">
                Elite Global Consultancy offers professional advice on corporate
                governance, performance management, and organizational
                restructuring to drive sustainable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="carbon-button-primary">
                  Our Services <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/about" className="carbon-button-ghost">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Mobile image */}
            <div className="mt-10 lg:hidden relative">
              <img
                src="/assets/elite_global/img/elite-global-05.jpeg"
                alt="Elite Global training session"
                className="w-full h-72 object-cover"
              />
              <div className="absolute -bottom-4 left-4 bg-ibm-blue-60 p-6 text-white">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs font-mono uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-ibm-blue-60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <p className="text-4xl md:text-5xl font-bold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-mono uppercase tracking-widest text-white/80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-ibm-gray-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
                Our Core Services
              </h2>
              <h3 className="text-4xl md:text-5xl font-light">
                Tailored Solutions for{" "}
                <span className="font-semibold italic">Growth</span>
              </h3>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-ibm-blue-60 hover:text-white transition-colors text-sm font-medium shrink-0"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ibm-gray-80">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-ibm-gray-90 p-8 group hover:bg-ibm-blue-60 transition-all duration-300"
              >
                <div className="text-ibm-blue-60 group-hover:text-white mb-6 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                <p className="text-ibm-gray-20 group-hover:text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
            <Link
              to="/services"
              className="bg-ibm-gray-90 p-8 group hover:bg-ibm-blue-60 transition-all duration-300 flex flex-col justify-center items-center gap-4"
            >
              <ArrowRight className="w-8 h-8 text-ibm-blue-60 group-hover:text-white transition-colors" />
              <span className="text-ibm-blue-60 group-hover:text-white font-semibold transition-colors">
                Explore All Services
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/assets/elite_global/img/elite-global-02.jpeg"
                  alt="Training group photo"
                  className="w-full h-64 object-cover"
                />
                <img
                  src="/assets/elite_global/img/elite-global-06.jpeg"
                  alt="Oil and gas operations"
                  className="w-full h-64 object-cover"
                />
                <img
                  src="/assets/elite_global/img/elite-global-09.jpeg"
                  alt="Whiteboard session"
                  className="w-full h-64 object-cover col-span-2"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
                About Elite Global
              </h2>
              <h3 className="text-4xl font-light mb-8">
                Empowering Organizations in{" "}
                <span className="font-semibold">The Gambia</span> and Beyond.
              </h3>
              <div className="space-y-6 text-ibm-gray-80 leading-relaxed">
                <p>
                  Elite Global Consultancy Co. Ltd is a premier professional
                  services firm dedicated to driving organizational excellence.
                  We support institutions in developing adequate management
                  systems and policies that bolster accountability, transparency,
                  and efficiency.
                </p>
                <p className="text-ibm-blue-60 font-medium italic border-l-2 border-ibm-blue-60 pl-4">
                  "We Don't Just Advise — We Partner with You to Achieve Lasting
                  Success"
                </p>
              </div>
              <Link
                to="/about"
                className="carbon-button-primary mt-8 inline-flex"
              >
                About Us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-ibm-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/elite_global/img/elite-global-03.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to <span className="font-semibold">Transform</span> Your
              Organization?
            </h2>
            <p className="text-ibm-gray-20 text-lg mb-10 max-w-2xl mx-auto">
              Partner with Elite Global Consultancy to unlock your
              organization's full potential through expert training and strategic
              consultancy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="carbon-button-primary">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="carbon-button-ghost text-white hover:bg-ibm-gray-90">
                Our Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
