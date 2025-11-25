import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Award,
  Users,
  Zap,
  Shield,
  Package,
  TestTube,
  Radio,
  ArrowRight,
  Star,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productInterest: "",
        message: "",
      });
    }, 1500);
  };

  const whyChooseUs = [
    { icon: Award, title: "30+ Years Excellence", desc: "Three decades of proven expertise in industrial testing" },
    { icon: Users, title: "100+ Happy Clients", desc: "Trusted by Defence, Research & Industrial sectors" },
    { icon: Zap, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
    { icon: Shield, title: "ISO Certified", desc: "Quality assured products and services" },
  ];

  const productCategories = [
    { icon: TestTube, name: "Metallographic Testing", desc: "Precision instruments for material analysis", popular: true },
    { icon: Radio, name: "Non-Destructive Testing", desc: "Advanced NDT solutions for flaw detection", popular: true },
    { icon: Package, name: "Physical Testing", desc: "Hardness and tensile testing machines", popular: false },
    { icon: Zap, name: "Chemical Testing", desc: "Composition analysis equipment", popular: false },
  ];

  const testimonials = [
    { name: "BHEL", role: "Power Sector", text: "Reliable equipment and excellent after-sales support", rating: 5 },
    { name: "DRDO", role: "Defence Research", text: "High precision instruments that meet our stringent requirements", rating: 5 },
    { name: "HAL", role: "Aerospace", text: "Partnership of over 15 years, consistently delivering quality", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Transform Your Testing <span className="text-red-600">Capabilities Today</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join 100+ leading organizations across Defence, Research, and Industrial sectors. Get expert consultation
              and discover equipment that delivers precision, reliability, and ROI.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: "30+", label: "Years in Business" },
              { value: "100+", label: "Satisfied Clients" },
              { value: "500+", label: "Projects Delivered" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Industry Leaders Choose <span className="text-red-600">Metsonic</span>
            </h2>
            <p className="text-xl text-gray-600">Excellence backed by three decades of proven results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-red-400 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Explore Our <span className="text-red-600">Product Range</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive testing solutions for every industry need</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-red-400 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-50 transition-colors">
                    <product.icon className="w-8 h-8 text-blue-600 group-hover:text-red-600 transition-colors" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-blue-900">{product.name}</h3>
                      {product.popular && (
                        <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">Popular</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{product.desc}</p>
                    <div className="text-red-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Trusted by <span className="text-red-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600">See what our clients say about us</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Upgrade Your Testing Equipment?
            </h2>
            <p className="text-xl text-blue-100">
              Fill out the form below and our experts will reach out within 4 hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  {[
                    "Our expert will contact you within 4 hours",
                    "Free consultation on your testing requirements",
                    "Custom solution recommendations",
                    "Competitive pricing and demo options",
                    "Complete technical support included",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-blue-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-white" />
                  <h4 className="text-lg font-bold text-white">Prefer to call?</h4>
                </div>
                <a href="tel:+919490167002" className="text-2xl font-bold text-white hover:text-red-400 transition-colors">
                  +91 94901 67002
                </a>
                <p className="text-blue-100 text-sm mt-2">Available Mon-Sat, 9 AM - 6 PM</p>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {["name", "email", "phone", "company"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-bold text-gray-700 mb-2 capitalize">
                      {field === "email" ? "Email Address" : field.replace(/([A-Z])/g, " $1")} *
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      placeholder={
                        field === "name"
                          ? "John Doe"
                          : field === "email"
                          ? "john@company.com"
                          : field === "phone"
                          ? "+91 98765 43210"
                          : "Your Company"
                      }
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Product Interest *</label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a product category</option>
                    <option value="metallographic">Metallographic Testing</option>
                    <option value="ndt">Non-Destructive Testing</option>
                    <option value="physical">Physical Testing</option>
                    <option value="chemical">Chemical Testing</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Requirements *</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your testing needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === "sending"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : status === "success"
                      ? "bg-green-600 text-white"
                      : "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600"
                  }`}
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Request Sent! We'll Contact You Soon
                    </>
                  ) : (
                    <>
                      Get Expert Consultation
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Address */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Visit Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Metsonic Engineers Pvt. Ltd.</h3>
                    <p className="text-gray-700 leading-relaxed">
                      63, Ishaq Colony, Wellington Road<br />
                      Secunderabad, Telangana – 500015<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Email</h3>
                    <a href="mailto:metsonic.engineers@gmail.com" className="text-red-600 hover:underline">
                      metsonic.engineers@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
              <iframe
                title="Metsonic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.103444235851!2d78.50390107481884!3d17.454762300861397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a46d5ee9767%3A0xb7e91dcbaed21ceb!2sMETSONIC%20ENGINEERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1763719602893!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}