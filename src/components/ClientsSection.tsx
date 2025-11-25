import { motion } from "framer-motion";
import { Shield, Award, TrendingUp, Clock } from "lucide-react";
import { easeOut } from "framer-motion";
import { Link } from "react-router-dom";

const clients = [
  { name: "BHEL", logo: "https://via.placeholder.com/200x100?text=BHEL", sector: "Power" },
  { name: "HAL", logo: "https://via.placeholder.com/200x100?text=HAL", sector: "Aerospace" },
  { name: "Nuclear Fuel Complex", logo: "https://via.placeholder.com/200x100?text=NFC", sector: "Nuclear" },
  { name: "DMRL", logo: "https://via.placeholder.com/200x100?text=DMRL", sector: "Defence" },
  { name: "DLRL", logo: "https://via.placeholder.com/200x100?text=DLRL", sector: "Defence" },
  { name: "RCI", logo: "https://via.placeholder.com/200x100?text=RCI", sector: "Research" },
  { name: "BDL", logo: "https://via.placeholder.com/200x100?text=BDL", sector: "Defence" },
  { name: "ARC International", logo: "https://via.placeholder.com/200x100?text=ARC", sector: "Industrial" },
  { name: "Mishra Dhatu Nigam", logo: "https://via.placeholder.com/200x100?text=MIDHANI", sector: "Metallurgy" },
  { name: "ISRO", logo: "https://via.placeholder.com/200x100?text=ISRO", sector: "Space" },
  { name: "DRDO", logo: "https://via.placeholder.com/200x100?text=DRDO", sector: "Defence" },
  { name: "NPCIL", logo: "https://via.placeholder.com/200x100?text=NPCIL", sector: "Nuclear" },
  { name: "VSSC", logo: "https://via.placeholder.com/200x100?text=VSSC", sector: "Space" },
  { name: "BARC", logo: "https://via.placeholder.com/200x100?text=BARC", sector: "Research" },
  { name: "NAL", logo: "https://via.placeholder.com/200x100?text=NAL", sector: "Aerospace" },
];

const sectors = [
  { name: "Defence", count: 5, color: "from-red-500 to-red-600" },
  { name: "Aerospace", count: 3, color: "from-blue-600 to-blue-700" },
  { name: "Nuclear", count: 2, color: "from-red-500 to-red-600" },
  { name: "Research", count: 3, color: "from-blue-600 to-blue-700" },
  { name: "Space", count: 2, color: "from-red-500 to-red-600" },
];

const stats = [
  { icon: Award, value: "30+", label: "Years Excellence", color: "text-red-600", bg: "bg-red-50" },
  { icon: Shield, value: "100+", label: "Trusted Clients", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: TrendingUp, value: "500+", label: "Projects Delivered", color: "text-red-600", bg: "bg-red-50" },
  { icon: Clock, value: "24/7", label: "Support Available", color: "text-blue-600", bg: "bg-blue-50" },
];

export default function Clients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut }
    }
  };

  return (
    <section id="clients" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden py-24">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #dc2626 1px, transparent 1px), 
                              linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            Clients Who <span className="text-red-600">Trust Us</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving India's most prestigious defence, research, and industrial organizations
          </p>
        </motion.div>

        {/* Sectors */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className={`px-5 py-2 bg-gradient-to-r ${sector.color} text-white rounded-full text-sm font-semibold`}
            >
              {sector.name} ({sector.count})
            </div>
          ))}
        </motion.div>

        {/* Client Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 h-full flex flex-col items-center justify-center relative">

                {/* Hover BG (Soft, No Glow) */}
                <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <p className="relative z-10 text-sm font-bold text-blue-900 group-hover:text-red-600 transition-colors duration-300">
                  {client.name}
                </p>

                <span className="relative z-10 text-xs text-gray-500 mt-1 px-2 py-1 bg-gray-100 rounded-full">
                  {client.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>

              <div className={`text-4xl font-bold ${stat.color} mb-2 text-center`}>
                {stat.value}
              </div>

              <p className="text-gray-600 font-semibold text-center text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Block (Cleaned) */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-900 rounded-3xl p-12 lg:p-16 relative">

            <div className="relative text-center">

              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Join 100+ Leading Organizations
              </h3>

              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Partner with India's most trusted name in industrial testing equipment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all"
                >
                  Become a Client
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[Award, Shield, TrendingUp].map((Icon, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-gray-200"
            >
              <Icon className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-xs text-gray-500 font-semibold">Certified</p>
                <p className="text-sm font-bold text-blue-900">Quality Standard</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
