import { Phone, Mail, ArrowRight, Award, Shield, Zap, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  { year: "1992", title: "Foundation", desc: "Metsonic Engineers founded in Hyderabad" },
  { year: "1998", title: "Regional Expansion", desc: "Dominant presence across South India" },
  { year: "2005", title: "Global Partnerships", desc: "Strategic alliances with Korea, China & Singapore" },
  { year: "2010", title: "Defence Sector Entry", desc: "Trusted supplier to DRDO, HAL, ISRO & DMRL" },
  { year: "2015", title: "Advanced NDT Launch", desc: "Pioneered next-gen ultrasonic & radiography solutions" },
  { year: "2024", title: "Industry Leader", desc: "100+ clients • South India's #1 testing equipment partner" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-gradient-to-br from-[#001F5B] via-[#001A4A] to-[#001537] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#E30613]/25 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#E30613]/15 rounded-full blur-[130px]"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#E30613]/25 border border-[#E30613]/40 rounded-full mb-10 backdrop-blur-sm shadow-lg">
            <Award className="w-5 h-5 text-[#E30613]" />
            <span className="text-sm font-semibold tracking-wide text-[#E30613]">
              30+ Years of Engineering Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] max-w-6xl mx-auto drop-shadow-md">
            About <span className="text-[#E30613]">Metsonic</span> <br />
            <span className="text-4xl md:text-5xl lg:text-6xl block mt-4">
              Engineers Pvt. Ltd.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mt-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Delivering world-class NDT & industrial testing solutions to India's
            Defence, Aerospace, Research & Manufacturing sectors since 1992.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-14">
            <a
              href="#journey"
              className="group px-10 py-5 bg-[#E30613] hover:bg-[#c50511] text-white font-bold text-lg rounded-xl 
                transition-all shadow-xl hover:shadow-2xl hover:scale-[1.05] flex items-center justify-center gap-3"
            >
              Our Journey Since 1992
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <a
              href="tel:+919490167002"
              className="px-10 py-5 bg-white text-[#001F5B] font-bold text-lg rounded-xl hover:bg-gray-100 
                transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Speak to Experts
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F5B]">
              Built on <span className="text-[#E30613]">Precision</span>,<br />
              Trusted by <span className="text-[#E30613]">India's Best</span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Three decades of excellence serving ISRO, DRDO, HAL, BHEL, DMRL and 100+ institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Founded in <span className="text-[#E30613] font-bold">April 1992</span>, Metsonic Engineers began with a mission to deliver precision testing technology to India.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Today we represent global leaders from Korea, China, Singapore, and Europe—bringing world-class NDT solutions to critical sectors.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Serving <b className="text-[#001F5B]">ISRO, DRDO, HAL, BHEL, DMRL</b> and over <b className="text-[#E30613]">100 organizations</b>.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="download.jpeg"
                  alt="Metsonic Engineers"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#E30613]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F5B]">
              Why Industry Leaders Choose <span className="text-[#E30613]">Metsonic</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "30+ Years Excellence", desc: "Three decades of proven expertise" },
              { icon: Users, title: "100+ Trusted Clients", desc: "Serving Defence, Research & Industry" },
              { icon: Zap, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
              { icon: Shield, title: "ISO Certified", desc: "Quality assured products & services" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#E30613] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E30613] to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#001F5B] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* DESKTOP: HORIZONTAL TIMELINE */}
      {/* MOBILE: VERTICAL TIMELINE */}
      {/* ======================== */}
      <section id="journey" className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#001F5B] mb-12 md:mb-20 px-4">
            The Metsonic <span className="text-[#E30613]">Journey</span>
          </h2>

          {/* MOBILE VERTICAL TIMELINE */}
          <div className="md:hidden space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Vertical Line */}
                {i !== timeline.length - 1 && (
                  <div className="absolute left-[11px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#E30613] to-[#001F5B]"></div>
                )}
                
                {/* Dot */}
                <div className="absolute left-0 top-4 w-6 h-6 bg-white border-4 border-[#E30613] rounded-full z-10"></div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-100 p-6 hover:shadow-xl hover:border-[#E30613] transition-all duration-300">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E30613] to-red-600 text-white font-bold text-xl rounded-lg shadow-md mb-3">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-bold text-[#001F5B] mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP HORIZONTAL TIMELINE */}
          <div className="hidden md:block relative px-4 lg:px-8">
            {/* Horizontal Line */}
            <div className="absolute top-[92px] left-8 right-8 h-1 bg-gradient-to-r from-[#001F5B] via-[#E30613] to-[#001F5B]"></div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connecting Dot */}
                  <div className="absolute top-[84px] left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#E30613] rounded-full z-10 shadow-lg"></div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 lg:p-8 hover:shadow-2xl hover:border-[#E30613] hover:scale-[1.02] transition-all duration-300 h-full">
                    <div className="text-center mb-4">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E30613] to-red-600 text-white font-bold text-2xl rounded-lg shadow-lg">
                        {item.year}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-[#001F5B] mb-3 text-center">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-[#001F5B] to-[#001A4A] rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E30613]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E30613]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join 100+ organizations trusting Metsonic for precision testing solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+919490167002"
                  className="group px-8 py-4 bg-white text-[#001F5B] font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Call Us
                </a>
                <a
                  href="mailto:metsonic.engineers@gmail.com"
                  className="px-8 py-4 bg-[#E30613] text-white font-bold text-lg rounded-xl hover:bg-[#c50511] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Send Enquiry
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Secunderabad, Telangana • Trusted Since 1992</span>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[#E30613] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E30613]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#E30613]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#001F5B] mb-1">Call Us</h3>
                  <a href="tel:+919490167002" className="text-gray-700 hover:text-[#E30613] transition-colors">
                    +91 94901 67002
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[#E30613] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E30613]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#E30613]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#001F5B] mb-1">Email Us</h3>
                  <a href="mailto:metsonic.engineers@gmail.com" className="text-gray-700 hover:text-[#E30613] transition-colors break-all">
                    metsonic.engineers@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}