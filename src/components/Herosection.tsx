import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  // Image sets for rotation
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

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageSets.length]);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="pt-32 pb-8 md:pb-12 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-extrabold leading-tight relative inline-block animate-fade-in-up">
                <span className="text-blue-900 bg-clip-text">
                  Your{" "}
                  <span className="text-red-600">Trusted Partner</span> in
                  Industrial Testing Solutions
                </span>
              </h1>

              <p className="text-base md:text-2xl text-blue-900 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-in-up-delay">
                At{" "}
                <span className="text-red-500 font-semibold">
                  Metsonic Engineers Pvt. Ltd.
                </span>
                , we provide high-performance{" "}
                <span className="text-red-500 font-medium">
                  testing equipment
                </span>{" "}
                built for precision, reliability, and durability. Our innovative
                solutions empower industries to maintain{" "}
                <span className="text-red-500 font-medium">
                  accuracy and efficiency
                </span>{" "}
                in every test.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delay-2">
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all shadow-[0_0_10px_rgba(255,0,0,0.4)] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
                  Explore Products
                </button>
                <button className="px-6 py-3 text-blue-900 border-blue-900 font-semibold rounded-lg border hover:border-red-500 hover:text-red-400 transition-all flex items-center justify-center gap-2">
                  Download Catalog <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Image Grid with Auto Switch */}
            <div className="relative lg:-mt-10">
              <div
                key={currentSet}
                className="grid grid-cols-2 gap-4 animate-fade-in"
              >
                {/* Column 1 */}
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden h-64 bg-transparent">
                    <img
                      src={imageSets[currentSet][0]}
                      alt="Product 1"
                      className="w-full h-full object-cover transition-opacity duration-800"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 bg-transparent">
                    <img
                      src={imageSets[currentSet][1]}
                      alt="Product 2"
                      className="w-full h-full object-contain transition-opacity duration-800"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-52 bg-transparent">
                    <img
                      src={imageSets[currentSet][2]}
                      alt="Product 3"
                      className="w-full h-full object-contain transition-opacity duration-800"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64 bg-transparent">
                    <img
                      src={imageSets[currentSet][3]}
                      alt="Product 4"
                      className="w-full h-full object-contain transition-opacity duration-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section - Moved below images */}
      <div className="relative pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12  px-6 py-6  mx-auto max-w-3xl">
            <div className="flex flex-col items-center animate-fade-in">
              <img
                src="./badges/25-years.jpg"
                alt="25 Years of Excellence"
                className="h-16 w-auto md:h-24 object-contain"
              />
              <p className="mt-2 text-blue-900 font-semibold text-sm md:text-base text-center">
                25 Years of Excellence
              </p>
            </div>

            <div className="flex flex-col items-center animate-fade-in-delay">
              <img
                src="./badges/iso-certified.jpg"
                alt="ISO Certified"
                className="h-16 w-auto md:h-24 object-contain"
              />
              <p className="mt-2 text-blue-900 font-semibold text-sm md:text-base text-center">
                ISO Certified Company
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;