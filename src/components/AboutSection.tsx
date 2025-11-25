import { motion, type Variants } from "framer-motion";
import { Building2, Users, Award, TrendingUp, MapPin, Handshake } from "lucide-react";

export default function AboutUs() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stats = [
    { icon: Award, value: "30+", label: "Years of Excellence", color: "text-red-600" },
    { icon: Users, value: "100+", label: "Trusted Clients", color: "text-blue-600" },
    { icon: Building2, value: "500+", label: "Projects Delivered", color: "text-red-600" },
    { icon: TrendingUp, value: "99%", label: "Client Satisfaction", color: "text-blue-600" },
  ];

  const clients = [
    "BHEL", "HAL", "Nuclear Fuel Complex", "Mishra Dhatu Nigam Ltd.",
    "DMRL", "DLRL", "RCI", "ARC International", "BDL"
  ];

  const partnerships = [
    { region: "Korea", flag: "https://flagcdn.com/w160/kr.png" },
    { region: "China", flag: "https://flagcdn.com/w160/cn.png" },
    { region: "Singapore", flag: "https://flagcdn.com/w160/sg.png" },
  ];

  return (
    <section id="about" className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-red-100 border border-red-200 rounded-full mb-4"
            variants={fadeUp}
          >
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              About Us
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Metsonic <span className="text-red-600">Engineers</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three decades of engineering excellence in industrial testing solutions
          </p>
        </motion.div>


        {/* Company Overview */}
        <motion.div
          className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-12 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <motion.div variants={fadeUp}>
              <div className="relative rounded-2xl overflow-hidden border">
                <img
                  src="https://th.bing.com/th/id/OIP.UPgA6zOZZBweNAwimDDiDwHaE8?w=216&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                  alt="Metsonic Engineers Laboratory"
                  className="w-full h-[400px] object-cover"
                />

                <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-3 rounded-xl">
                  <div className="text-3xl font-bold">1992</div>
                  <div className="text-xs uppercase tracking-wide">Founded</div>
                </div>
              </div>
            </motion.div>


            {/* Company Story */}
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
                  Our Legacy
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Established in <span className="font-bold text-red-600">April 1992</span>,
                  we deliver world-class testing equipment and NDT solutions across India.
                </p>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-5 bg-blue-100 rounded-xl border-l-4 border-blue-600"
                variants={fadeUp}
              >
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Regional Presence</h4>
                  <p className="text-gray-700">
                    Strong footprint across Telangana & Andhra Pradesh.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-5 bg-red-100 rounded-xl border-l-4 border-red-600"
                variants={fadeUp}
              >
                <Handshake className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Global Partnerships</h4>
                  <p className="text-gray-700">
                    Collaborating with innovators from Korea, China, and Singapore.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>


        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-200"
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gray-100">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>

              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* Clients */}
        <motion.div
          className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-12 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
              Trusted by Industry Leaders
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                className="px-6 py-3 bg-white rounded-xl border border-gray-300"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-900 font-semibold">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Global Partners */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-700 mb-6">
            Global Technology Partners
          </h3>

          <motion.div className="flex justify-center gap-8 flex-wrap">
            {partnerships.map((partner, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 px-8 py-5 bg-white rounded-xl border border-gray-300"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={partner.flag}
                  className="w-12 h-9 object-cover rounded-sm"
                />
                <span className="text-blue-900 font-semibold text-lg">
                  {partner.region}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>


        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-blue-900 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Engineering Excellence, Delivered
            </h3>
            <p className="text-lg leading-relaxed opacity-95">
              Supporting Mechanical & Metallurgical innovation across India.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
