import { useState } from "react";
import {  Phone, Mail } from "lucide-react";

// ---------- 1. Product type ----------
type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  specs: string[];
};

// ---------- 2. Sample data ----------
const products: Product[] = [
  // A) Metallographic Testing Equipment
  {
    id: 1,
    name: "Metallurgical Microscopes",
    description:
      "Monocular, Binocular, Trinocular, Inverted type microscopes with digital or image capture systems for metallographic studies.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Metallurgical+Microscope",
    features: [
      "Various configurations (Monocular, Binocular, Trinocular, Inverted)",
      "Digital/Computer capture options",
      "High optical clarity and durability",
    ],
    specs: [
      "Magnification: up to 1000x",
      "Lighting: LED Halogen",
      "Stage: Mechanical XY",
    ],
  },
  {
    id: 2,
    name: "Metallographic Sample Cutting Machines",
    description:
      "Robust cutting machines for precise sectioning of metal specimens with coolant systems.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Sample+Cutting+Machine",
    features: [
      "Abrasive cutting",
      "Wet cutting with coolant",
      "Safety guard system",
    ],
    specs: ["Blade Size: 200–300 mm", "Power: 2 HP", "Speed: 2800 rpm"],
  },
  {
    id: 3,
    name: "Mounting Press",
    description:
      "Hydraulic or pneumatic automatic mounting press for embedding specimens in thermosetting material.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Mounting+Press",
    features: [
      "Hot and cold mounting",
      "Digital temperature and pressure control",
      "Automatic ejection",
    ],
    specs: [
      "Mould Diameter: 25–50 mm",
      "Pressure: 0–2 MPa",
      "Temp: up to 200°C",
    ],
  },
  {
    id: 4,
    name: "Grinding and Polishing Machines",
    description:
      "Manual, semi-automatic, and automatic grinding/polishing machines for metallographic sample preparation.",
    category: "Metallographic Testing Equipment",
    image:
      "https://via.placeholder.com/400x300?text=Grinding+Polishing+Machine",
    features: [
      "Single/Double disc models",
      "Variable speed",
      "Water cooling system",
    ],
    specs: [
      "Disc Diameter: 200/300 mm",
      "Speed: 100–1000 rpm",
      "Power: 0.75–1 HP",
    ],
  },
  {
    id: 5,
    name: "Specimen Etching Unit",
    description:
      "Automatic specimen etching unit for controlled chemical etching of metallographic samples.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Etching+Unit",
    features: [
      "Digital control",
      "Corrosion-resistant build",
      "Adjustable etching current",
    ],
    specs: ["Voltage: 0–30V DC", "Current: 0–10A", "Tank Capacity: 2L"],
  },

  // B) Non-Destructive Testing Equipment
  {
    id: 6,
    name: "Ultrasonic Flaw Detector",
    description:
      "Portable ultrasonic testing device for detecting internal flaws in metals and composites.",
    category: "Non-Destructive Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Ultrasonic+Flaw+Detector",
    features: [
      "Palm-top, portable",
      "Recordable with data storage",
      "Multi-channel microprocessor type",
    ],
    specs: [
      "Range: 0.5–6000 mm",
      "Display: 5.7-inch TFT",
      "Frequency: 0.5–15 MHz",
    ],
  },
  {
    id: 7,
    name: "Magnetic Particle Testing Machine",
    description:
      "Bench-type magnetic crack detector for ferromagnetic materials with AC/DC magnetization.",
    category: "Non-Destructive Testing Equipment",
    image:
      "https://via.placeholder.com/400x300?text=Magnetic+Particle+Testing+Machine",
    features: [
      "Bench, yoke, prod, coil types",
      "Wet or dry method",
      "Fluorescent/visible inspection",
    ],
    specs: [
      "Load: up to 3000A",
      "Control: Microprocessor",
      "Power: 230V AC",
    ],
  },
  {
    id: 8,
    name: "Dye Penetrant Testing Kit",
    description:
      "Comprehensive kit for non-destructive surface crack detection using dye penetrant method.",
    category: "Non-Destructive Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Dye+Penetrant+Kit",
    features: [
      "Cleaner, penetrant, developer",
      "Aerosol spray cans",
      "Color contrast and fluorescent options",
    ],
    specs: [
      "Kit Type: 3-part system",
      "Capacity: 400 ml each",
      "Sensitivity: Level 2–3",
    ],
  },

  // C) Physical Testing Equipment
  {
    id: 9,
    name: "Universal Testing Machine",
    description:
      "Computer-controlled UTM for tensile, compression, and bend tests on metals and other materials.",
    category: "Physical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Universal+Testing+Machine",
    features: [
      "Servo-controlled",
      "Electronic extensometer",
      "High precision load cell",
    ],
    specs: [
      "Capacity: 10–1000 kN",
      "Speed: 0.5–500 mm/min",
      "Accuracy: ±1%",
    ],
  },
  {
    id: 10,
    name: "Impact Testing Machine",
    description:
      "Pendulum-type impact tester for Charpy and Izod tests on metals and plastics.",
    category: "Physical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Impact+Testing+Machine",
    features: [
      "Digital display",
      "Charpy/Izod configuration",
      "Energy absorption measurement",
    ],
    specs: ["Energy: up to 300J", "Angle: 150°", "Accuracy: ±0.5%"],
  },
  {
    id: 11,
    name: "Spring Testing Machine",
    description:
      "For testing compression and tension springs under variable load.",
    category: "Physical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Spring+Testing+Machine",
    features: [
      "Digital load indicator",
      "Motorized operation",
      "Load-deflection graph output",
    ],
    specs: [
      "Capacity: 1000 N",
      "Speed: 0.5–100 mm/min",
      "Accuracy: ±0.5%",
    ],
  },
  {
    id: 12,
    name: "Compression Testing Machine",
    description:
      "Used for testing compressive strength of materials like concrete and metals.",
    category: "Physical Testing Equipment",
    image:
      "https://via.placeholder.com/400x300?text=Compression+Testing+Machine",
    features: [
      "Digital indicator",
      "Hydraulic loading",
      "Automatic overload protection",
    ],
    specs: ["Capacity: 2000 kN", "Accuracy: ±1%", "Power: 2 HP"],
  },

  // D) Chemical Testing Equipment
  {
    id: 13,
    name: "Optical Emission Spectrometer",
    description:
      "Advanced spectrometer for material composition analysis with lab and portable models.",
    category: "Chemical Testing Equipment",
    image:
      "https://via.placeholder.com/400x300?text=Optical+Emission+Spectrometer",
    features: [
      "Lab & portable models",
      "Elemental analysis",
      "Fast reading output",
    ],
    specs: [
      "Wavelength: 120–780 nm",
      "Voltage: 230V AC",
      "Software: PC-controlled",
    ],
  },
  {
    id: 14,
    name: "Carbon Sulphur Apparatus",
    description:
      "Used for determining carbon and sulphur content in metals and alloys.",
    category: "Chemical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Carbon+Sulphur+Apparatus",
    features: [
      "Lab-grade",
      "Accurate combustion analysis",
      "Durable heating element",
    ],
    specs: ["Temp: up to 1300°C", "Sample size: 1g", "Accuracy: ±0.1%"],
  },

  // E) Foundry Machinery/Equipment
  {
    id: 15,
    name: "Moulding Machines",
    description:
      "Used for sand mould preparation in foundries with different models available.",
    category: "Foundry Machinery/Equipment",
    image: "https://via.placeholder.com/400x300?text=Moulding+Machine",
    features: [
      "Jolt, squeeze, and sand sling types",
      "Heavy-duty frame",
      "Adjustable compaction",
    ],
    specs: [
      "Mould Size: up to 500x500 mm",
      "Power: 2 HP",
      "Cycle Time: 15 sec",
    ],
  },
  {
    id: 16,
    name: "Sand Mixers",
    description:
      "Efficient sand mixing equipment for uniform sand conditioning in foundries.",
    category: "Foundry Machinery/Equipment",
    image: "https://via.placeholder.com/400x300?text=Sand+Mixer",
    features: ["Batch and continuous models", "Uniform mixing", "Easy cleaning"],
    specs: ["Capacity: 50–500 kg/batch", "Speed: 30 rpm", "Motor: 3 HP"],
  },

  // F) Ultrasonic Machines
  {
    id: 17,
    name: "Ultrasonic Cleaning Machine",
    description:
      "Compact ultrasonic cleaner for component cleaning using cavitation technology.",
    category: "Ultrasonic Machines",
    image:
      "https://via.placeholder.com/400x300?text=Ultrasonic+Cleaning+Machine",
    features: [
      "Portable and system types",
      "High frequency",
      "Automatic timer",
    ],
    specs: ["Frequency: 40 kHz", "Capacity: 5–50 L", "Power: 300–1500 W"],
  },
  {
    id: 18,
    name: "Ultrasonic Plastic Welding Machine",
    description:
      "Ultrasonic welding equipment for joining thermoplastic components efficiently.",
    category: "Ultrasonic Machines",
    image:
      "https://via.placeholder.com/400x300?text=Ultrasonic+Plastic+Welder",
    features: [
      "Microprocessor controlled",
      "Energy saving",
      "Low maintenance",
    ],
    specs: [
      "Power: 2000 W",
      "Frequency: 20 kHz",
      "Welding Time: 0.01–10 sec",
    ],
  },

  // G) Consumables
  {
    id: 19,
    name: "Abrasive Polishing Papers",
    description:
      "High-quality silicon carbide waterproof papers for metallographic polishing.",
    category: "Consumables",
    image: "https://via.placeholder.com/400x300?text=Abrasive+Polishing+Paper",
    features: [
      "Grades A to F",
      "Waterproof",
      "Available in all grit sizes",
    ],
    specs: ["Size: 230x280 mm", "Grit: 60–3000", "Backing: Latex paper"],
  },
  {
    id: 20,
    name: "Magnetic Powders and Inks",
    description:
      "Magnetic powders and fluorescent inks for visual and fluorescent NDT applications.",
    category: "Consumables",
    image: "https://via.placeholder.com/400x300?text=Magnetic+Powder",
    features: ["Dry and wet types", "High sensitivity", "UV/visible options"],
    specs: [
      "Particle Size: 2–5 μm",
      "Packaging: 1 kg/5 L",
      "Color: Black/Fluorescent",
    ],
  },
];

const categories = [
  "Metallographic Testing Equipment",
  "Non-Destructive Testing Equipment",
  "Physical Testing Equipment",
  "Chemical Testing Equipment",
  "Foundry Machinery/Equipment",
  "Ultrasonic Machines",
  "Consumables",
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Group products by category
  const groupedProducts = categories.map((category) => ({
    category,
    products: products.filter((p) => p.category === category),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className=" top-16 relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {/* Gears */}
          <div className="gear gear-1">
            <svg viewBox="0 0 100 100" className="w-32 h-32">
              <path d="M50,10 L55,20 L65,18 L60,28 L70,30 L63,38 L72,43 L63,48 L70,56 L60,58 L65,68 L55,66 L50,76 L45,66 L35,68 L40,58 L30,56 L37,48 L28,43 L37,38 L30,30 L40,28 L35,18 L45,20 Z" 
                    fill="currentColor" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="gear gear-2">
            <svg viewBox="0 0 100 100" className="w-24 h-24">
              <path d="M50,10 L55,20 L65,18 L60,28 L70,30 L63,38 L72,43 L63,48 L70,56 L60,58 L65,68 L55,66 L50,76 L45,66 L35,68 L40,58 L30,56 L37,48 L28,43 L37,38 L30,30 L40,28 L35,18 L45,20 Z" 
                    fill="currentColor" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="gear gear-3">
            <svg viewBox="0 0 100 100" className="w-40 h-40">
              <path d="M50,10 L55,20 L65,18 L60,28 L70,30 L63,38 L72,43 L63,48 L70,56 L60,58 L65,68 L55,66 L50,76 L45,66 L35,68 L40,58 L30,56 L37,48 L28,43 L37,38 L30,30 L40,28 L35,18 L45,20 Z" 
                    fill="currentColor" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          {/* Microscope Icon */}
          <div className="floating-icon microscope-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-20 h-20">
              <circle cx="12" cy="18" r="3" strokeWidth="2"/>
              <path d="M8 18h8M12 15V9M9 9l3-6 3 6M6 21h12" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Testing Machine Icon */}
          <div className="floating-icon machine-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-24 h-24">
              <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/>
              <path d="M4 12h16M12 4v16M8 8h8M8 16h8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Measuring Tool Icon */}
          <div className="floating-icon ruler-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
              <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeWidth="2"/>
            </svg>
          </div>

          {/* Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Products
          </h1>
          <p className="text-lg md:text-2xl text-red-100 max-w-3xl mx-auto animate-fade-in-up-delay">
            Cutting-Edge Testing Solutions for Industry Leaders
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {groupedProducts.map((group) => (
          <div key={group.category} className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {group.category}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {group.products.map((product) => (
                <div
                  key={product.id}
                  className="flip-card h-[420px] sm:h-[460px] md:h-[500px] cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                    {/* Front of Card */}
                    <div className="flip-card-front absolute inset-0 bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                      <div className="h-40 sm:h-48 overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3 sm:p-4 md:p-6">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-red-100 text-red-600 text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3">
                          {product.category.split(" ")[0]}
                        </span>
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 sm:line-clamp-4">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-xl md:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 text-white flex flex-col">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex-1 overflow-hidden">
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold text-red-100 mb-1 sm:mb-2 text-xs sm:text-sm">
                            Key Features:
                          </h4>
                          <ul className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-red-300 mr-1 sm:mr-2 flex-shrink-0">•</span>
                                <span className="line-clamp-2">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-100 mb-1 sm:mb-2 text-xs sm:text-sm">
                            Specifications:
                          </h4>
                          <ul className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs">
                            {product.specs.map((spec, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-red-300 mr-1 sm:mr-2 flex-shrink-0">•</span>
                                <span className="line-clamp-1">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="mt-3 sm:mt-4 w-full bg-white text-red-600 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold hover:bg-red-50 transition-colors text-xs sm:text-sm md:text-base"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-lg"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 md:h-full object-cover rounded-2xl"
                />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-3">
                  {selectedProduct.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedProduct.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 text-sm"
                      >
                        <span className="text-red-600 mr-2 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Specifications
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.specs.map((spec, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 text-sm"
                      >
                        <span className="text-red-600 mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors flex-1 text-center">
                    Request Quote
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors flex-1 text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Metsonic Products?
          </h2>
          <p className="text-center text-red-100 mb-12 text-lg">
            Trusted by 100+ organizations for precision, reliability, and
            innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">Global Standards</h3>
              <p className="text-red-100">
                ISO-certified equipment meeting ASTM & DIN norms
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-2">Expert Support</h3>
              <p className="text-red-100">
                24/7 technical assistance and on-site training
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Proven Reliability</h3>
              <p className="text-red-100">
                Backed by 30+ years of industry expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Testing Capabilities?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts for customized solutions and competitive pricing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Phone className="w-5 h-5" /> Call Us
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Mail className="w-5 h-5" /> Email Us
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
              <div className="text-gray-400">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">30+</div>
              <div className="text-gray-400">Years</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for flip animation and hero animations */}
      <style>{`
        .flip-card-inner {
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @media (max-width: 768px) {
          .flip-card:active .flip-card-inner {
            transform: rotateY(180deg);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Hero Animation Styles */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(10px); }
        }

        @keyframes particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gear {
          position: absolute;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .gear-1 {
          top: 10%;
          left: 5%;
          animation: rotate 20s linear infinite;
        }

        .gear-2 {
          bottom: 15%;
          right: 10%;
          animation: rotateReverse 15s linear infinite;
        }

        .gear-3 {
          top: 50%;
          right: 5%;
          animation: rotate 25s linear infinite;
        }

        .floating-icon {
          position: absolute;
          animation: float 6s ease-in-out infinite;
        }

        .microscope-icon {
          top: 20%;
          right: 15%;
          animation-delay: 0s;
        }

        .machine-icon {
          bottom: 25%;
          left: 10%;
          animation: floatSlow 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .ruler-icon {
          top: 60%;
          left: 15%;
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: particle linear infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}