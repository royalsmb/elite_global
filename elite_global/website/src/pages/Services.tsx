import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  Settings,
  UserCheck,
  Fuel,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "corporate-trainings",
    title: "Corporate Trainings",
    description:
      "We design and deliver comprehensive corporate training programs that help enhance employees' performance, the capacity for leadership, and overall organizational productivity.",
    details:
      "Our trainings are practical, interactive, and tailored according to specific goals of your organization. We focus on leadership development, governance, ethics, performance management, customer service excellence, strategic planning and organizational effectiveness.",
    icon: <Users className="w-8 h-8" />,
    image: "/img/elite-global-18.jpeg",
    highlights: [
      "Leadership Development",
      "Governance & Ethics",
      "Performance Management",
      "Customer Service Excellence",
      "Strategic Planning",
      "Organizational Effectiveness",
    ],
  },
  {
    id: "business-consultancy",
    title: "Business Consultancy",
    description:
      "Our business consultancy services help organizations identify growth opportunities, improve operational efficiency, and enhance overall performance.",
    details:
      "We closely work with the management team to provide strategic insights, conduct market analyses, and develop actionable business plans that drive sustainable results. Be it a startup or established company, our solutions are customized to align with your business vision.",
    icon: <Briefcase className="w-8 h-8" />,
    image: "/img/elite-global-04.jpeg",
    highlights: [
      "Strategic Insights",
      "Market Analyses",
      "Actionable Business Plans",
      "Startup Advisory",
      "Operational Efficiency",
      "Growth Strategy",
    ],
  },
  {
    id: "management-consultancy",
    title: "Management Consultancy",
    description:
      "Elite Global Consultancy offers professional advice on corporate governance, performance management, and organizational restructuring.",
    details:
      "We support institutions in developing adequate management systems and policies that bolster accountability, transparency, and efficiency. With vast experience, our consultants will guide your organization towards strategic transformation and long-term success.",
    icon: <Settings className="w-8 h-8" />,
    image: "/img/elite-global-11.jpeg",
    highlights: [
      "Corporate Governance",
      "Performance Management",
      "Organizational Restructuring",
      "Policy Development",
      "Accountability Systems",
      "Strategic Transformation",
    ],
  },
  {
    id: "human-resource-management",
    title: "Human Resource Management",
    description:
      "We provide professional HR solutions designed to optimize workforce performance and foster a positive organizational culture.",
    details:
      "Our services under this category cover recruitment and selection, employee training and development, performance appraisal systems, and HR policy formulation. We help institutions build strong, motivated teams aligned with their strategic objectives.",
    icon: <UserCheck className="w-8 h-8" />,
    image: "/img/elite-global-10.jpeg",
    highlights: [
      "Recruitment & Selection",
      "Employee Training & Development",
      "Performance Appraisal Systems",
      "HR Policy Formulation",
      "Team Building",
      "Organizational Culture",
    ],
  },
  {
    id: "oil-and-gas",
    title: "Oil and Gas – Downstream",
    description:
      "We offer specialized consultancy and capacity-building services in the downstream oil and gas sector.",
    details:
      "Our expertise includes retail station management, operational efficiency, compliance, and safety standards. Such training extends to station managers, supervisors, and service attendants with the aim of improving productivity, customer satisfaction, and profitability throughout your operations.",
    icon: <Fuel className="w-8 h-8" />,
    image: "/img/elite-global-06.jpeg",
    highlights: [
      "Retail Station Management",
      "Operational Efficiency",
      "Compliance & Safety Standards",
      "Supervisor Training",
      "Customer Satisfaction",
      "Profitability Optimization",
    ],
  },
  {
    id: "procurement",
    title: "Procurement",
    description:
      "We provide end-to-end procurement consultancy services to help organizations achieve value for money, transparency, and compliance in their purchasing processes.",
    details:
      "Our procurement expertise covers strategic sourcing, supplier evaluation and management, tender preparation and evaluation, contract management, and procurement policy development. We help both public and private sector institutions build efficient, accountable procurement systems aligned with best practices.",
    icon: <ShoppingCart className="w-8 h-8" />,
    image: "/img/elite-global-28.jpeg",
    highlights: [
      "Strategic Sourcing",
      "Supplier Evaluation",
      "Tender Management",
      "Contract Management",
      "Procurement Policy",
      "Compliance & Transparency",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-ibm-gray-100 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/img/elite-global-14.jpeg"
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
              What We Do
            </h2>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Our Core <span className="font-semibold">Services</span>
            </h1>
            <p className="text-ibm-gray-20 text-lg max-w-2xl leading-relaxed">
              Tailored solutions across corporate training, consultancy, human
              resources, and the oil and gas sector — empowering organizations
              to achieve lasting success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                  >
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-ibm-blue-60 p-4 text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  <div
                    className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}
                  >
                    <div className="text-ibm-blue-60 mb-4">
                      <span className="font-mono text-sm uppercase tracking-[0.2em]">
                        {String(index + 1).padStart(2, "0")} / Service
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                      {service.title}
                    </h3>
                    <p className="text-ibm-gray-80 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-ibm-gray-80 leading-relaxed mb-8 text-sm">
                      {service.details}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {service.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-ibm-blue-60 shrink-0" />
                          <span className="text-ibm-gray-80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-ibm-gray-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
              Our Work
            </h2>
            <h3 className="text-4xl font-light">
              Training & Consultancy in{" "}
              <span className="font-semibold">Action</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              "elite-global-03.jpeg",
              "elite-global-06.jpeg",
              "elite-global-10.jpeg",
              "elite-global-22.jpeg",
              "elite-global-28.jpeg",
              "elite-global-35.jpeg",
              "elite-global-37.jpeg",
              "elite-global-43.jpeg",
            ].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`overflow-hidden ${
                  i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={`/img/${img}`}
                  alt="Elite Global in action"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ibm-blue-60 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Need a <span className="font-semibold">Customized</span> Solution?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Every organization is unique. Let us design a training or
            consultancy program tailored specifically to your needs and
            objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-between bg-white text-ibm-blue-60 px-6 py-4 min-w-[14rem] font-semibold hover:bg-ibm-gray-10 transition-colors"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
