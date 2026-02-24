import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Handshake,
  Award,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every engagement, ensuring transparency and accountability.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description:
      "We strive for quality in every service we deliver, from training to consultancy solutions.",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Partnership",
    description:
      "We don't just advise — we partner with our clients to achieve lasting, measurable success.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Innovation",
    description:
      "We embrace modern methodologies and best practices to deliver cutting-edge solutions.",
  },
];

const milestones = [
  {
    year: "Founded",
    title: "Company Established",
    description:
      "Elite Global Consultancy Co. Ltd was established in The Gambia with a vision to drive organizational excellence.",
  },
  {
    year: "Growth",
    title: "Expanded Services",
    description:
      "Expanded into Oil & Gas downstream consulting, HR management, and corporate governance training.",
  },
  {
    year: "Impact",
    title: "Nationwide Reach",
    description:
      "Delivered training and consultancy services to over 50 organizations across The Gambia and beyond.",
  },
  {
    year: "Today",
    title: "Trusted Partner",
    description:
      "Recognized as a premier consultancy firm with 10+ years of experience driving sustainable results.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-ibm-gray-100 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/img/elite-global-02.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
              Who We Are
            </h2>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              About <span className="font-semibold">Elite Global</span>
            </h1>
            <p className="text-ibm-gray-20 text-lg max-w-2xl leading-relaxed">
              A premier professional services firm dedicated to driving
              organizational excellence in The Gambia and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
                Our Story
              </h2>
              <h3 className="text-4xl font-light mb-8">
                Driving{" "}
                <span className="font-semibold">Organizational Excellence</span>{" "}
                Since Day One.
              </h3>
              <div className="space-y-6 text-ibm-gray-80 leading-relaxed">
                <p>
                  Elite Global Consultancy Co. Ltd is a premier professional
                  services firm based in The Gambia, dedicated to driving
                  organizational excellence across multiple sectors.
                </p>
                <p>
                  We support institutions in developing adequate management
                  systems and policies that bolster accountability, transparency,
                  and efficiency. With vast experience across multiple sectors,
                  including Oil & Gas, Corporate Governance, and Human Resource
                  Management, our consultants guide organizations towards
                  strategic transformation and long-term success.
                </p>
                <p>
                  Our training programs are practical, interactive, and tailored
                  to the specific goals of each organization we serve. We believe
                  in building capacity from within, empowering teams with the
                  knowledge and skills they need to excel.
                </p>
              </div>

              <div className="mt-8 p-6 bg-ibm-gray-10 border-l-4 border-ibm-blue-60">
                <p className="text-ibm-blue-60 font-medium italic text-lg">
                  "At Elite Global Consultancy Co. Ltd — We Don't Just Advise —
                  We Partner with You to Achieve Lasting Success"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img
                src="/img/elite-global-35.jpeg"
                alt="Elite Global partnership"
                className="w-full h-72 object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/img/elite-global-03.jpeg"
                  alt="Training session"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="/img/elite-global-07.jpeg"
                  alt="Oil and gas field work"
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-ibm-gray-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 border-t-4 border-ibm-blue-60"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-ibm-blue-60 flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-ibm-gray-80 leading-relaxed">
                To empower organizations with the strategic expertise, practical
                training, and innovative solutions they need to achieve
                sustainable growth, operational excellence, and lasting
                transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 border-t-4 border-ibm-blue-60"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-ibm-blue-60 flex items-center justify-center text-white">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-ibm-gray-80 leading-relaxed">
                To be the leading consultancy and capacity-building firm in The
                Gambia and across West Africa, recognized for delivering
                exceptional value, fostering organizational excellence, and
                driving positive change in every sector we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
              What Drives Us
            </h2>
            <h3 className="text-4xl font-light">
              Our Core <span className="font-semibold">Values</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-12 h-12 bg-ibm-gray-10 group-hover:bg-ibm-blue-60 flex items-center justify-center text-ibm-blue-60 group-hover:text-white transition-all duration-300 mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-ibm-gray-80 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-24 bg-ibm-gray-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
              Our Journey
            </h2>
            <h3 className="text-4xl font-light">
              Building a Legacy of{" "}
              <span className="font-semibold italic">Impact</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ibm-gray-80">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-ibm-gray-90 p-8"
              >
                <span className="text-ibm-blue-60 font-mono text-sm uppercase tracking-widest">
                  {milestone.year}
                </span>
                <h4 className="text-xl font-semibold mt-4 mb-3">
                  {milestone.title}
                </h4>
                <p className="text-ibm-gray-20 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
              Our Team
            </h2>
            <h3 className="text-4xl font-light">
              The People Behind{" "}
              <span className="font-semibold">Our Success</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src="/img/elite-global-02.jpeg"
                alt="Elite Global team"
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src="/img/elite-global-43.jpeg"
              alt="Team meeting"
              className="w-full h-64 object-cover"
            />
            <img
              src="/img/elite-global-10.jpeg"
              alt="Training group"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ibm-blue-60 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's Work <span className="font-semibold">Together</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need corporate training, business consultancy, or HR
            solutions — our team is ready to partner with you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-between bg-white text-ibm-blue-60 px-6 py-4 min-w-[14rem] font-semibold hover:bg-ibm-gray-10 transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
