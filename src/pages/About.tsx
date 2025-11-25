import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Award, Shield, Zap, Users, MapPin, Target, Globe } from "lucide-react";

const timeline = [
  { year: "1992", title: "Foundation", desc: "Metsonic Engineers founded in Hyderabad" },
  { year: "1998", title: "Regional Expansion", desc: "Dominant presence across South India" },
  { year: "2005", title: "Global Partnerships", desc: "Strategic alliances with Korea, China & Singapore" },
  { year: "2010", title: "Defence Sector Entry", desc: "Trusted supplier to DRDO, HAL, ISRO & DMRL" },
  { year: "2015", title: "Advanced NDT Launch", desc: "Pioneered next-gen ultrasonic & radiography solutions" },
  { year: "2024", title: "Industry Leader", desc: "100+ clients • South India's #1 testing equipment partner" },
];

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-red-500/20 border border-red-500/40 rounded-full mb-10 backdrop-blur-sm"
          >
            <Award className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold tracking-wide text-red-400">
              30+ Years of Engineering Excellence
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About <span className="text-red-500">Metsonic</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl block mt-4">
              Engineers Pvt. Ltd.
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mt-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Delivering world-class NDT & industrial testing solutions to India's defence & research sectors.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a
              href="#journey"
              className="group px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Journey Since 1992
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.a
              href="tel:+919490167002"
              className="px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-6 h-6" />
              Speak to Experts
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Built on <span className="text-red-600">Precision</span>,
              <br className="md:hidden" /> Trusted by <span className="text-red-600">India's Best</span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Serving ISRO, DRDO, HAL, BHEL, DMRL and 100+ institutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                "Founded in April 1992, Metsonic Engineers began delivering precision testing technology across India.",
                "Today we represent leading manufacturers from Korea, China & Singapore, bringing cutting-edge technology to the Indian market.",
                "Proud supplier to ISRO, DRDO, HAL, BHEL and 100+ organizations across Defence, Research, and Industrial sectors."
              ].map((text, i) => (
                <motion.p 
                  key={i}
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  {i === 0 && <>Founded in <span className="text-red-600 font-bold">April 1992</span>, Metsonic Engineers began delivering precision testing technology across India.</>}
                  {i === 1 && text}
                  {i === 2 && <>Proud supplier to <b className="text-blue-900">ISRO, DRDO, HAL, BHEL</b> and <b className="text-red-600">100+ organizations</b> across Defence, Research, and Industrial sectors.</>}
                </motion.p>
              ))}

              <motion.div className="flex flex-wrap gap-4 pt-4" variants={fadeInUp}>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">Global Partnerships</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
                  <Target className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-600">Precision Focus</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img src="download.jpeg" alt="Metsonic Engineers Laboratory" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>

              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-4xl font-bold text-red-600 mb-2">30+</div>
                <p className="text-sm text-gray-600 font-semibold">Years Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Industry Leaders Choose <span className="text-red-600">Metsonic</span>
            </h2>
            <p className="text-xl text-gray-600">Excellence backed by three decades of proven results</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Award, title: "30+ Years Excellence", desc: "Three decades of proven expertise", color: "from-red-500 to-red-600" },
              { icon: Users, title: "100+ Clients", desc: "Serving Defence & Research", color: "from-blue-600 to-blue-700" },
              { icon: Zap, title: "24/7 Support", desc: "Round-the-clock assistance", color: "from-red-500 to-red-600" },
              { icon: Shield, title: "ISO Certified", desc: "Quality-assured products", color: "from-blue-600 to-blue-700" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 
                         hover:border-red-400 
                         shadow-md hover:shadow-lg 
                         transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  <item.icon className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-24 px-6 lg:px-12 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
            The Metsonic <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">Three decades of innovation and excellence</p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-8 
                              hover:border-red-400 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-2xl rounded-xl shadow-md">
                      {item.year}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3 text-center">{item.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden max-w-2xl mx-auto space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-14"
            >
              {i < timeline.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gray-200"></div>
              )}
              <div className="absolute left-3 top-4 w-7 h-7 bg-red-600 rounded-full border-4 border-white shadow-md"></div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 
                         hover:border-red-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-block px-5 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-lg mb-3 shadow-md">
                  {item.year}
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl shadow-xl p-12 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="absolute top-0 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 100+ organizations trusting Metsonic for precision testing solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="tel:+919490167002"
                  className="px-8 py-4 bg-white text-blue-900 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </motion.a>

                <motion.a
                  href="mailto:metsonic.engineers@gmail.com"
                  className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Send Enquiry
                </motion.a>
              </div>

              <div className="flex items-center justify-center gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Secunderabad, Telangana • Trusted Since 1992</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}