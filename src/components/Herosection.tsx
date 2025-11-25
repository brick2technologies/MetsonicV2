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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSet((p) => (p + 1) % imageSets.length);
  }, 5000);

  return () => clearInterval(interval);

// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* TAG */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full">
              <Award className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">
                ISO Certified • 25 Years Excellence
              </span>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-blue-900 leading-tight max-w-4xl mx-auto">
            Your <span className="text-red-600">Trusted Partner</span> in Industrial Testing Solutions
          </h1>

          {/* SUBTEXT */}
          <p className="text-lg md:text-xl text-gray-600 text-center mt-6 max-w-3xl mx-auto">
            At <span className="text-red-600 font-bold">Metsonic Engineers Pvt. Ltd.</span>,
            we deliver high-performance testing equipment engineered for precision and reliability.
          </p>

         {/* BUTTONS */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">

  <Link to="/products" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-xl 
      hover:bg-red-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
      Explore Products
      <ArrowRight className="w-5 h-5" />
    </button>
  </Link>

  <button className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-300 
    text-blue-900 font-semibold rounded-xl hover:border-red-600 hover:text-red-600 
    transition-all flex items-center justify-center gap-2 whitespace-nowrap">
    Download Catalog
    <ArrowRight className="w-5 h-5" />
  </button>

</div>


          {/* IMAGE CAROUSEL */}
          <div className="flex justify-center mt-16 gap-4 flex-wrap">
            {imageSets[currentSet]
              .slice(0, isMobile ? 1 : 4)
              .map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white w-[240px] h-[260px] p-4 flex items-center justify-center"
                >
                  <img src={img} className="w-full h-full object-contain" />
                </div>
              ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {imageSets.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSet(idx)}
                className={`h-2 rounded-full ${
                  idx === currentSet ? "w-6 bg-red-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 border border-gray-200 rounded-xl">
              <Zap className="w-6 h-6 text-red-600 mb-3" />
              <h3 className="text-xl font-bold text-blue-900">Precision Engineering</h3>
              <p className="text-gray-600 mt-2">
                Built with high-accuracy technology for dependable results.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 rounded-xl">
              <Shield className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-blue-900">Unmatched Durability</h3>
              <p className="text-gray-600 mt-2">
                Industrial-grade equipment for demanding environments.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 rounded-xl">
              <Award className="w-6 h-6 text-red-600 mb-3" />
              <h3 className="text-xl font-bold text-blue-900">25 Years Trusted</h3>
              <p className="text-gray-600 mt-2">
                Serving industries with proven reliability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
