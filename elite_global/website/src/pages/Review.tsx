import { useState } from "react";
import { motion } from "motion/react";
import { Star, Send, CheckCircle } from "lucide-react";

export default function Review() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    designation: "",
    organization: "",
    rating: 5,
    testimonial: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    if (!form.full_name.trim() || !form.testimonial.trim()) {
      setError("Please fill in your name and testimonial.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/method/elite_global.api.submit_testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Frappe-CSRF-Token": (window as any).csrf_token || "none",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.exc) {
        setError("Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <section className="pt-32 pb-24 min-h-screen flex items-center bg-ibm-gray-10">
          <div className="max-w-xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-light mb-4">
                Thank You, <span className="font-semibold">{form.full_name}</span>!
              </h1>
              <p className="text-ibm-gray-80 text-lg leading-relaxed">
                Your testimonial has been submitted successfully. It will appear
                on our website once reviewed by our team. We truly appreciate
                your feedback!
              </p>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-ibm-gray-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-sm font-mono text-ibm-blue-60 uppercase tracking-[0.2em] mb-4">
              Share Your Experience
            </h2>
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Leave a <span className="font-semibold">Testimonial</span>
            </h1>
            <p className="text-ibm-gray-20 text-lg max-w-2xl mx-auto">
              We value your feedback. Share your experience working with Elite
              Global Consultancy and help others make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-ibm-gray-10">
        <div className="max-w-2xl mx-auto px-4">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 shadow-sm"
          >
            {/* Rating */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setForm({ ...form, rating: star })}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= form.rating
                          ? "fill-ibm-blue-60 text-ibm-blue-60"
                          : "text-ibm-gray-20"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.full_name}
                  onChange={(e) =>
                    setForm({ ...form, full_name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                  placeholder="+220-1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) =>
                    setForm({ ...form, organization: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                  placeholder="Company or organization"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Designation / Role
              </label>
              <input
                type="text"
                value={form.designation}
                onChange={(e) =>
                  setForm({ ...form, designation: e.target.value })
                }
                className="w-full px-4 py-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors"
                placeholder="Your role or title"
              />
            </div>

            {/* Testimonial */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Your Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.testimonial}
                onChange={(e) =>
                  setForm({ ...form, testimonial: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-ibm-gray-10 border-b-2 border-ibm-gray-20 focus:border-ibm-blue-60 outline-none transition-colors resize-none"
                placeholder="Share your experience working with Elite Global Consultancy..."
                required
              />
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="carbon-button-primary w-full justify-center disabled:opacity-50"
            >
              {submitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Testimonial <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>

            <p className="text-xs text-ibm-gray-80 mt-4 text-center">
              Your testimonial will be reviewed before being published on our
              website.
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
}
