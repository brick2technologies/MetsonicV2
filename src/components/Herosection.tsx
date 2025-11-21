import React, { useEffect, useState } from "react";
import { ArrowRight, Award, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const imageSets = [
    [
      "./Metalllographic/Abrassive-cutting-machine.png",
      "./Metalllographic/Belt-Grinder.png",
      "./Metalllographic/Double-Disk-Polisher.png",
      "./Metalllographic/Mounting-Press.png",
    ],
    [
      "./Non-Destructive/Ultrasonic-Flaw-Detector.png",
      "./Non-Destructive/UV-Lamp.png",
      "./Non-Destructive/Magnetic-Particle-Inspection.png",
      "./Non-Destructive/Ultrasonic-Thickness-Guage.png",
    ],
    [
      "./Physical-Testing/universal-testing-machine.png",
      "./Physical-Testing/torsion-testing-machine.png",
      "./Physical-Testing/impact-testing.png",
      "./Physical-Testing/digital-fatigue-testing-machine.png",
    ],
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Auto-slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageSets.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Main Hero Text */}
          <div className="text-center mb-16 space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full animate-fade-in">
              <Award className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">ISO Certified • 25 Years Excellence</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-5xl mx-auto animate-fade-in-up">
              <span className="text-blue-900">Your </span>
              <span className="text-red-600 relative">
                Trusted Partner
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 100 2 150 5C200 8 250 5 298 10" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-blue-900"> in Industrial Testing Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
              At <span className="text-red-600 font-bold">Metsonic Engineers Pvt. Ltd.</span>, we deliver 
              high-performance testing equipment engineered for precision, reliability, and durability—empowering 
              industries to achieve unmatched accuracy and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
              <Link to="/products" >
              <button className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              <button className="px-8 py-4 bg-white text-blue-900 border-2 border-blue-200 font-semibold rounded-xl hover:border-red-500 hover:text-red-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                Download Catalog
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div key={currentSet} className="flex justify-center gap-4 md:gap-6 animate-slide-up">

              {/* Show 1 image on mobile, 4 on desktop */}
              {imageSets[currentSet]
                .slice(0, isMobile ? 1 : 4)
                .map((img, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-red-200 ${
                      idx % 2 === 0 ? 'hover:-translate-y-2' : 'hover:translate-y-2'
                    }`}
                    style={{
                      width: '240px',
                      height: '280px',
                      animationDelay: `${idx * 0.1}s`
                    }}
                  >
                    <img
                      src={img}
                      alt={`Product ${idx + 1}`}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}

            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {imageSets.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSet(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSet ? 'w-8 bg-red-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-all hover:shadow-xl animate-fade-in">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Precision Engineering</h3>
              <p className="text-gray-600">Built with cutting-edge technology for accurate and reliable testing results.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-all hover:shadow-xl animate-fade-in-delay">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Unmatched Durability</h3>
              <p className="text-gray-600">Industrial-grade equipment designed to withstand demanding environments.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-all hover:shadow-xl animate-fade-in-delay-2">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">25 Years Trusted</h3>
              <p className="text-gray-600">Quarter-century of excellence serving industries worldwide.</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.15s both; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.3s both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-up-delay { animation: fade-in-up 0.8s ease-out 0.2s both; }
        .animate-fade-in-up-delay-2 { animation: fade-in-up 0.8s ease-out 0.4s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default HeroSection;
