import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Tag, Facebook, Loader2 } from "lucide-react";

interface Activity {
  name: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  summary: string;
  description: string;
  image_1: string | null;
  image_2: string | null;
  tags: string[];
}

const fallbackActivities: Activity[] = [
  {
    name: "revenue-performance-training-2026",
    title:
      "Training Program on Improving Revenue Performance and Supervisory Effectiveness in Revenue Controls",
    slug: "revenue-performance-training-2026",
    category: "Corporate Training",
    date: "2026-03-04",
    summary:
      "We are thrilled to have commenced a week long training program on Improving Revenue Performance and Supervisory Effectiveness in Revenue Controls.",
    description:
      "This intensive training program focuses on reinforcing leadership capacity among supervisors and revenue officers to ensure strict compliance with revenue procedures, improved monitoring systems, and a culture of integrity and accountability. By enhancing supervisory competencies in areas such as internal controls, performance monitoring, staff discipline, reporting accuracy, and ethical oversight, the organization can establish a stronger control environment that minimizes revenue losses and boosts operational efficiency.",
    image_1: "/assets/elite_global/img/elite-global-01.jpeg",
    image_2: "/assets/elite_global/img/elite-global-02.jpeg",
    tags: ["training", "revenue", "gambia", "africa"],
  },
  {
    name: "oil-gas-downstream-field-visit",
    title:
      "Downstream Oil & Gas Field Visit and Safety Compliance Assessment",
    slug: "oil-gas-downstream-field-visit",
    category: "Oil & Gas",
    date: "2026-02-15",
    summary:
      "Our team conducted an on-site field visit to petroleum storage and distribution facilities as part of our downstream oil and gas consultancy services.",
    description:
      "Elite Global Consultancy's oil and gas team carried out comprehensive field assessments at petroleum storage depots and distribution terminals. The visit covered safety compliance reviews, operational efficiency evaluations, and hands-on training for facility personnel. Our experts worked alongside station managers and supervisors to identify areas for improvement in safety standards, product handling, and environmental compliance.",
    image_1: "/assets/elite_global/img/elite-global-06.jpeg",
    image_2: "/assets/elite_global/img/elite-global-07.jpeg",
    tags: ["oil-gas", "safety", "downstream", "field-visit"],
  },
  {
    name: "customer-service-excellence-training",
    title: "Customer Service Excellence Training for Fuel Station Staff",
    slug: "customer-service-excellence-training",
    category: "Corporate Training",
    date: "2026-01-20",
    summary:
      "Elite Global delivered a comprehensive customer service excellence training program for fuel station supervisors and service attendants.",
    description:
      "The training focused on improving customer interactions, handling complaints effectively, and building a service-oriented culture at retail fuel stations. Participants engaged in interactive group exercises, role-playing scenarios, and presentations to develop practical skills they can immediately apply in their daily operations. The program aimed to boost customer satisfaction, increase repeat business, and enhance the overall brand reputation of the stations.",
    image_1: "/assets/elite_global/img/elite-global-14.jpeg",
    image_2: "/assets/elite_global/img/elite-global-18.jpeg",
    tags: ["training", "customer-service", "oil-gas"],
  },
  {
    name: "petrosen-station-management-training",
    title: "Petrosen Station Management and Operational Efficiency Training",
    slug: "petrosen-station-management-training",
    category: "Oil & Gas",
    date: "2025-12-10",
    summary:
      "Our team conducted station management training at Petrosen facilities, focusing on operational efficiency, compliance, and profitability optimization.",
    description:
      "Elite Global Consultancy partnered with Petrosen to deliver targeted training for station managers and supervisors. The program covered key areas including inventory management, fuel loss prevention, health and safety compliance, staff supervision, and customer service protocols. Participants also visited operational sites to gain hands-on understanding of best practices in downstream petroleum operations.",
    image_1: "/assets/elite_global/img/elite-global-30.jpeg",
    image_2: "/assets/elite_global/img/elite-global-28.jpeg",
    tags: ["oil-gas", "petrosen", "station-management"],
  },
  {
    name: "corporate-governance-workshop",
    title: "Corporate Governance and Accountability Workshop",
    slug: "corporate-governance-workshop",
    category: "Management Consultancy",
    date: "2025-11-15",
    summary:
      "A multi-day corporate governance workshop was conducted for senior management and board members to strengthen institutional accountability frameworks.",
    description:
      "Elite Global Consultancy facilitated an intensive workshop on corporate governance, focusing on board effectiveness, risk management, ethical leadership, and transparency in organizational decision-making. The workshop brought together senior executives, department heads, and board members for interactive sessions, case study analyses, and strategic planning exercises. Participants developed actionable governance frameworks tailored to their organizations.",
    image_1: "/assets/elite_global/img/elite-global-04.jpeg",
    image_2: "/assets/elite_global/img/elite-global-11.jpeg",
    tags: ["governance", "accountability", "leadership"],
  },
  {
    name: "hr-capacity-building",
    title: "HR Capacity Building and Performance Management Training",
    slug: "hr-capacity-building",
    category: "Human Resource Management",
    date: "2025-10-08",
    summary:
      "Elite Global delivered HR capacity building sessions focused on performance appraisal systems, employee development, and HR policy formulation.",
    description:
      "This training program was designed to equip HR professionals and managers with modern tools and techniques for effective human resource management. Topics covered included designing performance appraisal systems, conducting effective employee evaluations, creating development plans, and formulating HR policies aligned with organizational objectives. The hands-on approach ensured participants left with practical frameworks they could implement immediately.",
    image_1: "/assets/elite_global/img/elite-global-40.jpeg",
    image_2: "/assets/elite_global/img/elite-global-43.jpeg",
    tags: ["HR", "performance-management", "capacity-building"],
  },
  {
    name: "international-partnership-meeting",
    title: "Strategic Partnership Meeting with International Stakeholders",
    slug: "international-partnership-meeting",
    category: "Business Consultancy",
    date: "2025-09-20",
    summary:
      "Elite Global Consultancy hosted a strategic meeting with international partners to explore new avenues for collaboration in capacity building across West Africa.",
    description:
      "Our leadership team met with international stakeholders to discuss expanding our consultancy and training services across the West African region. The meeting focused on identifying joint ventures, knowledge exchange opportunities, and collaborative training programs that would benefit organizations in The Gambia and neighboring countries. This partnership aligns with our vision to become the leading consultancy firm in the region.",
    image_1: "/assets/elite_global/img/elite-global-35.jpeg",
    image_2: "/assets/elite_global/img/elite-global-37.jpeg",
    tags: ["partnership", "international", "west-africa"],
  },
  {
    name: "financial-management-training",
    title: "Financial Management and Budgeting Training",
    slug: "financial-management-training",
    category: "Corporate Training",
    date: "2025-08-12",
    summary:
      "A comprehensive financial management training was conducted for finance officers and department heads on budgeting, financial reporting, and accountability.",
    description:
      "Elite Global Consultancy delivered a practical training program on financial management covering budgeting techniques, financial statement analysis, internal audit procedures, and fiscal accountability. The training included hands-on exercises using real-world financial scenarios, whiteboard sessions on calculation methodologies, and group discussions on best practices in public and private sector financial management.",
    image_1: "/assets/elite_global/img/elite-global-09.jpeg",
    image_2: "/assets/elite_global/img/elite-global-03.jpeg",
    tags: ["finance", "budgeting", "training"],
  },
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(html: string): string {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const categories = [
  "All",
  "Corporate Training",
  "Oil & Gas",
  "Management Consultancy",
  "Human Resource Management",
  "Business Consultancy",
  "Procurement",
];

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchActivities();
  }, []);

  async function fetchActivities() {
    try {
      const res = await fetch(
        "/api/method/elite_global.api.get_activities"
      );
      const data = await res.json();
      if (data.message && data.message.length > 0) {
        setActivities(data.message);
      } else {
        setActivities(fallbackActivities);
      }
    } catch {
      setActivities(fallbackActivities);
    } finally {
      setLoading(false);
    }
  }

  const filtered =
    activeCategory === "All"
      ? activities
      : activities.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-ibm-gray-100 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/assets/elite_global/img/elite-global-01.jpeg"
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
              News & Updates
            </h2>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Our <span className="font-semibold">Activities</span>
            </h1>
            <p className="text-ibm-gray-20 text-lg max-w-2xl leading-relaxed">
              Stay up to date with our latest training programs, consultancy
              engagements, field visits, and partnerships across The Gambia and
              beyond.
            </p>
            <a
              href="https://www.facebook.com/eliteglobalconsultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-ibm-blue-60 hover:text-white transition-colors text-sm font-medium"
            >
              <Facebook className="w-4 h-4" />
              Follow us on Facebook for live updates
            </a>
          </motion.div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-ibm-blue-60 text-white"
                    : "bg-ibm-gray-10 text-ibm-gray-80 hover:bg-ibm-gray-20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-ibm-blue-60 animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ibm-gray-80 text-lg">
                No activities found in this category.
              </p>
            </div>
          ) : (
            <div className="space-y-20">
              {filtered.map((activity, index) => (
                <motion.article
                  key={activity.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Images */}
                    <div
                      className={
                        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                      }
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {activity.image_1 && (
                          <img
                            src={activity.image_1}
                            alt={activity.title}
                            className="w-full h-64 object-cover"
                          />
                        )}
                        {activity.image_2 && (
                          <img
                            src={activity.image_2}
                            alt={activity.title}
                            className="w-full h-40 object-cover"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={
                        index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                      }
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-ibm-blue-60 text-xs font-mono uppercase tracking-[0.15em] bg-ibm-blue-60/10 px-3 py-1">
                          {activity.category}
                        </span>
                        <span className="flex items-center gap-1 text-ibm-gray-80 text-xs font-mono">
                          <Calendar className="w-3 h-3" />
                          {formatDate(activity.date)}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                        {activity.title}
                      </h3>

                      <p className="text-ibm-blue-60 font-medium mb-4 text-sm italic">
                        {activity.summary}
                      </p>

                      <p className="text-ibm-gray-80 leading-relaxed text-sm mb-6">
                        {stripHtml(activity.description || "")}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {activity.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-ibm-gray-80 bg-ibm-gray-10 px-2 py-1"
                          >
                            <Tag className="w-3 h-3" />#{tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-ibm-gray-80 italic">
                        Elite Global Consultancy Co. Ltd — your strategic
                        partner in capacity development.
                      </p>
                    </div>
                  </div>

                  {index < filtered.length - 1 && (
                    <div className="border-b border-ibm-gray-20 mt-20" />
                  )}
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-24 bg-ibm-gray-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Facebook className="w-12 h-12 text-ibm-blue-60 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Follow Us on <span className="font-semibold">Facebook</span>
          </h2>
          <p className="text-ibm-gray-20 text-lg mb-10 max-w-2xl mx-auto">
            Stay connected with Elite Global Consultancy for the latest news,
            training updates, and insights on corporate development in The
            Gambia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/eliteglobalconsultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-ibm-blue-60 text-white px-6 py-4 min-w-[14rem] font-semibold hover:bg-ibm-blue-70 transition-colors"
            >
              Follow on Facebook <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-between bg-white text-ibm-blue-60 px-6 py-4 min-w-[14rem] font-semibold hover:bg-ibm-gray-10 transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
