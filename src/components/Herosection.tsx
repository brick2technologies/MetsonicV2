import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
      <div className="pt-32 pb-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl xl:text-6xl font-extrabold leading-tight relative inline-block"
              >
                <span className="text-blue-900 bg-clip-text">
                  Your{" "}
                  <span className="text-red-600">Trusted Partner</span> in
                  Industrial Testing Solutions
                </span>
              </motion.h1>

              <p className="text-base md:text-2xl text-blue-900 leading-relaxed max-w-2xl mx-auto md:mx-0">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSet}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {/* Column 1 */}
                  <div className="space-y-4 pt-12">
                    <div className="rounded-2xl overflow-hidden h-64 bg-transparent">
                      <img
                        src={imageSets[currentSet][0]}
                        alt="Product 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-48 bg-transparent">
                      <img
                        src={imageSets[currentSet][1]}
                        alt="Product 2"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden h-52 bg-transparent">
                      <img
                        src={imageSets[currentSet][2]}
                        alt="Product 3"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-64 bg-transparent">
                      <img
                        src={imageSets[currentSet][3]}
                        alt="Product 4"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ✅ Badges inside hero, bottom center overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-wrap items-center justify-center gap-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <img
              src="./badges/25-years.jpg"
              alt="25 Years of Excellence"
              className="h-14 w-auto md:h-20 object-contain"
            />
            <p className="mt-1 text-blue-900 font-semibold text-xs md:text-sm text-center">
              25 Years of Excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <img
              src="./badges/iso-certified.jpg"
              alt="ISO Certified"
              className="h-14 w-auto md:h-20 object-contain"
            />
            <p className="mt-1 text-blue-900 font-semibold text-xs md:text-sm text-center">
              ISO Certified Company
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
