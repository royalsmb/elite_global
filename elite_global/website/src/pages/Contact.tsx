import { motion } from "motion/react";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-ibm-gray-100 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </h2>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Contact <span className="font-semibold">Us</span>
            </h1>
            <p className="text-ibm-gray-20 text-lg max-w-2xl leading-relaxed">
              Ready to transform your organization? Reach out to our team of
              experts and let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-28">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                info: "Banjul, The Gambia",
                sub: "West Africa",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                info: "eliteglobalconsultancy.co@gmail.com",
                sub: "We respond within 24 hours",
                href: "mailto:eliteglobalconsultancy.co@gmail.com",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                info: "+220-7305981",
                sub: "WhatsApp: +220-7555577",
                href: "tel:+2207305981",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Working Hours",
                info: "Mon – Fri: 9AM – 5PM",
                sub: "Saturday: By appointment",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="block bg-white p-8 shadow-lg border-t-4 border-ibm-blue-60 hover:shadow-xl transition-shadow h-full"
                  >
                    <div className="w-12 h-12 bg-ibm-blue-60 flex items-center justify-center text-white mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-ibm-gray-80 text-sm break-all">
                      {item.info}
                    </p>
                    <p className="text-ibm-gray-80 text-xs mt-1">{item.sub}</p>
                  </a>
                ) : (
                  <div className="bg-white p-8 shadow-lg border-t-4 border-ibm-blue-60 h-full">
                    <div className="w-12 h-12 bg-ibm-blue-60 flex items-center justify-center text-white mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-ibm-gray-80 text-sm">{item.info}</p>
                    <p className="text-ibm-gray-80 text-xs mt-1">{item.sub}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-ibm-gray-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
                Send a Message
              </h2>
              <h3 className="text-3xl font-light mb-6">
                How Can We{" "}
                <span className="font-semibold">Help You?</span>
              </h3>
              <p className="text-ibm-gray-80 leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24
                hours. You can also reach us directly via email or phone.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-5 h-5 text-ibm-blue-60 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Free Consultation</p>
                    <p className="text-ibm-gray-80 text-sm">
                      Initial consultations are complimentary — let's explore
                      how we can support your organization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-ibm-blue-60 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Tailored Solutions</p>
                    <p className="text-ibm-gray-80 text-sm">
                      Every engagement is customized to meet your specific needs
                      and objectives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <img
                  src="/img/elite-global-22.jpeg"
                  alt="Team training session"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 shadow-lg">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-ibm-gray-80">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-ibm-gray-80 tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-ibm-gray-80 tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full p-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-ibm-gray-80 tracking-wider">
                          Organization
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                          placeholder="Your organization"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-ibm-gray-80 tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full p-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                          placeholder="+220 XXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-ibm-gray-80 tracking-wider">
                        Service Interest *
                      </label>
                      <select
                        required
                        className="w-full p-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option>Corporate Trainings</option>
                        <option>Business Consultancy</option>
                        <option>Management Consultancy</option>
                        <option>Human Resource Management</option>
                        <option>Oil and Gas – Downstream</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-ibm-gray-80 tracking-wider">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full p-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors resize-none"
                        placeholder="Tell us about your needs and how we can help..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="carbon-button-primary w-full md:w-auto"
                    >
                      Send Message <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
