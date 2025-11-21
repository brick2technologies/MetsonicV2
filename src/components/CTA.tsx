
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Download, ArrowRight, Clock, Shield, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91-XXX-XXX-XXXX",
      subtext: "Mon-Sat, 9:00 AM - 6:00 PM",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@metsonic.com",
      subtext: "Response within 24 hours",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Hyderabad, India",
      subtext: "Telangana & Andhra Pradesh",
      color: "from-red-500 to-red-600"
    }
  ];

  const benefits = [
    "Expert consultation included",
    "Customized solutions available",
    "Competitive pricing guaranteed",
    "Fast delivery & installation"
  ];

  const trustMetrics = [
    { icon: Award, value: "30+", label: "Years Excellence" },
    { icon: Shield, value: "100+", label: "Trusted Clients" },
    { icon: Clock, value: "24/7", label: "Support" },
    { icon: CheckCircle, value: "100%", label: "Quality" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden py-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #dc2626 1px, transparent 1px), linear-gradient(to bottom, #dc2626 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold uppercase tracking-wide mb-6">
                Get Started Today
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Testing Standards?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Partner with India's leading industrial testing equipment provider. 
              Get expert guidance, premium quality, and unmatched support.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              </Link>

              <motion.button
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Catalog
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Contact Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{info.title}</h3>
                      <p className="text-red-400 font-semibold text-base mb-1">{info.detail}</p>
                      <p className="text-gray-400 text-sm">{info.subtext}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Stats */}
            <motion.div
              className="bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h4 className="text-white font-bold text-lg mb-4 text-center">Why Choose Us?</h4>
              <div className="grid grid-cols-4 gap-4">
                {trustMetrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5 text-red-400" strokeWidth={2} />
                      </div>
                      <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                      <p className="text-gray-400 text-xs">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-white font-bold">ISO Certified</p>
                <p className="text-gray-400 text-sm">Quality Assured</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold">Govt. Approved</p>
                <p className="text-gray-400 text-sm">Trusted Partner</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-white font-bold">100% Genuine</p>
                <p className="text-gray-400 text-sm">Original Products</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}