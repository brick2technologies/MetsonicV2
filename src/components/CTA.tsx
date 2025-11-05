
import { Phone, Mail, Download, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Content */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Elevate Your <span className="text-blue-900">Testing Standards?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
            Get expert consultation and discover the perfect testing equipment for your needs
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#contact"
            className="group relative w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Request a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          
          <a
            href="/brochure.pdf"
            download
            className="group w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Brochure
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {/* Phone Card */}
          <div className="bg-blue-900 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-base mb-1">Call Us</h3>
                <p className="text-red-100 text-sm">+91-XXX-XXX-XXXX</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-blue-900 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-base mb-1">Email Us</h3>
                <p className="text-red-100 text-sm">info@metsonic.com</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-blue-900 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-base mb-1">Visit Us</h3>
                <p className="text-red-100 text-sm">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">30+</div>
              <div className="text-red-100 text-xs md:text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-red-100 text-xs md:text-sm">Trusted Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-red-100 text-xs md:text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-red-100 text-xs md:text-sm">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}