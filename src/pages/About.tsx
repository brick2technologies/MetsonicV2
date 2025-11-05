import { useState } from "react";
import { ArrowRight, Award, Users, TrendingUp, Target, Phone, Mail } from "lucide-react";

// Sample images - replace with actual company images
const companyImages = [
  "https://via.placeholder.com/400x300?text=Lab+1",
  "https://via.placeholder.com/400x300?text=Team+1",
  "https://via.placeholder.com/400x300?text=Product+1",
  "https://via.placeholder.com/400x300?text=Lab+2",
  "https://via.placeholder.com/400x300?text=Team+2",
  "https://via.placeholder.com/400x300?text=Product+2",
  "https://via.placeholder.com/400x300?text=Lab+3",
  "https://via.placeholder.com/400x300?text=Team+3",
];

const timeline = [
  { year: "1992", title: "Foundation", description: "Metsonic Engineers founded with a vision to deliver world-class testing equipment" },
  { year: "1998", title: "Expansion", description: "Extended operations across Telangana & Andhra Pradesh" },
  { year: "2005", title: "International Partnerships", description: "Established partnerships with global innovators from Korea, China, and Singapore" },
  { year: "2010", title: "Defence Sector", description: "Became trusted supplier for major defence and research organizations" },
  { year: "2015", title: "Innovation Hub", description: "Launched advanced NDT solutions for aerospace industry" },
  { year: "2024", title: "Industry Leader", description: "Recognized as leading supplier in South India with 100+ satisfied clients" },
];

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(timeline.length - 1);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
            About <span className="text-red-500">Metsonic</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up-delay">
            30+ Years of Excellence in Testing Equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <a
              href="#story"
              className="group bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="#timeline"
              className="group bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Our Journey
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section id="story" className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Curved top border */}
        <div className="absolute top-0 left-0 right-0 h-16">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#ffffff"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Story</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in-left">
              <h3 className="text-3xl font-bold text-gray-900">Building Excellence Since 1992</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in <strong className="text-red-600">April 1992</strong>, Metsonic Engineers Pvt. Ltd. began with a clear mission: to deliver world-class testing equipment and non-destructive testing instruments to Defence, Research, and Industrial organizations across India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey from a small enterprise to becoming a leading supplier in South India is marked by unwavering commitment to quality, innovation, and customer satisfaction. We've built lasting relationships with prestigious institutions like BHEL, HAL, DMRL, and ISRO.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we stand proud as trusted partners to over <strong className="text-red-600">100+ organizations</strong>, bringing cutting-edge technology from global innovators to the Indian market.
              </p>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://via.placeholder.com/600x400?text=Company+Image"
                  alt="Metsonic Engineers"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-600 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-red-600 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Growth Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">30+</div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-700 font-medium">Trusted Clients</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-2">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-3">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-700 font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We're <span className="text-red-600">Growing</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous innovation and strategic partnerships drive our growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">Delivering premium testing equipment with uncompromising quality standards</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Highly skilled professionals dedicated to customer success and satisfaction</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market Expansion</h3>
              <p className="text-gray-600">Growing presence across India with strategic partnerships worldwide</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay-3">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Focus</h3>
              <p className="text-gray-600">Constantly introducing cutting-edge technology to meet industry needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Images + Vision & Mission */}
            {/* Infinite Scrolling Images + Vision & Mission */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Facilities</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Vision & Mission – 2 columns on **all** screens */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">   {/* <-- changed */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in providing innovative, reliable, and cutting-edge non-destructive testing solutions that empower industries to achieve excellence in safety, quality, and performance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class testing equipment and exceptional service through continuous innovation, strategic global partnerships, and unwavering commitment to customer success and industry advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Row 1 – Scroll Right */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-scroll-right">
            {[...companyImages, ...companyImages].map((img, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 mx-2 sm:mx-4">
                <img
                  src={img}
                  alt={`Facility ${index + 1}`}
                  className="w-64 h-48 sm:w-80 sm:h-60 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 – Scroll Left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...companyImages, ...companyImages].map((img, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 mx-2 sm:mx-4">
                <img
                  src={img}
                  alt={`Facility ${index + 1}`}
                  className="w-64 h-48 sm:w-80 sm:h-60 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
              {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Milestones that shaped our success</p>
          </div>

          {/* Desktop & Tablet – Horizontal alternating layout */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                    <div
                      className={`inline-block bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                        activeTimeline === index ? "scale-105" : ""
                      }`}
                    >
                      <div className="text-3xl font-bold text-red-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        activeTimeline === index
                          ? "bg-red-600 scale-125"
                          : "bg-white border-4 border-red-600"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${
                          activeTimeline === index ? "bg-white" : "bg-red-600"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile – Same horizontal alternating layout as desktop */}
          <div className="md:hidden space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
                onMouseEnter={() => setActiveTimeline(index)}
              >
                {/* Card */}
                <div className="flex-1">
                  <div
                    className={`bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      activeTimeline === index ? "scale-105" : ""
                    }`}
                  >
                    <div className="text-2xl font-bold text-red-600 mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      activeTimeline === index
                        ? "bg-red-600 scale-125"
                        : "bg-white border-4 border-red-600"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        activeTimeline === index ? "bg-white" : "bg-red-600"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Empty side */}
                <div className="flex-1"></div>
              </div>
            ))}

            {/* Vertical line for mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200 -z-10"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner with <span className="text-yellow-300">Industry Leaders?</span>
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join 100+ organizations trusting Metsonic Engineers for their testing equipment needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#contact"
              className="group bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="mailto:info@metsonic.com"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">30+</div>
              <div className="text-red-100 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-red-100 text-sm">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-red-100 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
        .animate-fade-in-delay-3 { animation: fade-in 0.8s ease-out 0.6s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.3s both; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.6s both; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-dot { animation: scroll-dot 2s ease-in-out infinite; }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}