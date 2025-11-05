import { useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Phone,
  Mail,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  // ... (your 20 products – unchanged)
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
    specs: ["Magnification: up to 1000x", "Lighting: LED Halogen", "Stage: Mechanical XY"],
  },
  {
    id: 2,
    name: "Metallographic Sample Cutting Machines",
    description:
      "Robust cutting machines for precise sectioning of metal specimens with coolant systems.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Sample+Cutting+Machine",
    features: ["Abrasive cutting", "Wet cutting with coolant", "Safety guard system"],
    specs: ["Blade Size: 200–300 mm", "Power: 2 HP", "Speed: 2800 rpm"],
  },
  {
    id: 3,
    name: "Mounting Press",
    description:
      "Hydraulic or pneumatic automatic mounting press for embedding specimens in thermosetting material.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Mounting+Press",
    features: ["Hot and cold mounting", "Digital temperature and pressure control", "Automatic ejection"],
    specs: ["Mould Diameter: 25–50 mm", "Pressure: 0–2 MPa", "Temp: up to 200°C"],
  },
  {
    id: 4,
    name: "Grinding and Polishing Machines",
    description:
      "Manual, semi-automatic, and automatic grinding/polishing machines for metallographic sample preparation.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Grinding+Polishing+Machine",
    features: ["Single/Double disc models", "Variable speed", "Water cooling system"],
    specs: ["Disc Diameter: 200/300 mm", "Speed: 100–1000 rpm", "Power: 0.75–1 HP"],
  },
  {
    id: 5,
    name: "Specimen Etching Unit",
    description:
      "Automatic specimen etching unit for controlled chemical etching of metallographic samples.",
    category: "Metallographic Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Etching+Unit",
    features: ["Digital control", "Corrosion-resistant build", "Adjustable etching current"],
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
    features: ["Palm-top, portable", "Recordable with data storage", "Multi-channel microprocessor type"],
    specs: ["Range: 0.5–6000 mm", "Display: 5.7-inch TFT", "Frequency: 0.5–15 MHz"],
  },
  {
    id: 7,
    name: "Magnetic Particle Testing Machine",
    description:
      "Bench-type magnetic crack detector for ferromagnetic materials with AC/DC magnetization.",
    category: "Non-Destructive Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Magnetic+Particle+Testing+Machine",
    features: ["Bench, yoke, prod, coil types", "Wet or dry method", "Fluorescent/visible inspection"],
    specs: ["Load: up to 3000A", "Control: Microprocessor", "Power: 230V AC"],
  },
  {
    id: 8,
    name: "Dye Penetrant Testing Kit",
    description:
      "Comprehensive kit for non-destructive surface crack detection using dye penetrant method.",
    category: "Non-Destructive Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Dye+Penetrant+Kit",
    features: ["Cleaner, penetrant, developer", "Aerosol spray cans", "Color contrast and fluorescent options"],
    specs: ["Kit Type: 3-part system", "Capacity: 400 ml each", "Sensitivity: Level 2–3"],
  },

  // C) Physical Testing Equipment
  {
    id: 9,
    name: "Universal Testing Machine",
    description:
      "Computer-controlled UTM for tensile, compression, and bend tests on metals and other materials.",
    category: "Physical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Universal+Testing+Machine",
    features: ["Servo-controlled", "Electronic extensometer", "High precision load cell"],
    specs: ["Capacity: 10–1000 kN", "Speed: 0.5–500 mm/min", "Accuracy: ±1%"],
  },
  {
    id: 10,
    name: "Impact Testing Machine",
    description:
      "Pendulum-type impact tester for Charpy and Izod tests on metals and plastics.",
    category: "Physical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Impact+Testing+Machine",
    features: ["Digital display", "Charpy/Izod configuration", "Energy absorption measurement"],
    specs: ["Energy: up to 300J", "Angle: 150°", "Accuracy: ±0.5%"],
  },
  {
    id: 11,
    name: "Spring Testing Machine",
    description:
      "For testing compression and tension springs under variable load.",
    category: "Physical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Spring+Testing+Machine",
    features: ["Digital load indicator", "Motorized operation", "Load-deflection graph output"],
    specs: ["Capacity: 1000 N", "Speed: 0.5–100 mm/min", "Accuracy: ±0.5%"],
  },
  {
    id: 12,
    name: "Compression Testing Machine",
    description:
      "Used for testing compressive strength of materials like concrete and metals.",
    category: "Physical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Compression+Testing+Machine",
    features: ["Digital indicator", "Hydraulic loading", "Automatic overload protection"],
    specs: ["Capacity: 2000 kN", "Accuracy: ±1%", "Power: 2 HP"],
  },

  // D) Chemical Testing Equipment
  {
    id: 13,
    name: "Optical Emission Spectrometer",
    description:
      "Advanced spectrometer for material composition analysis with lab and portable models.",
    category: "Chemical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Optical+Emission+Spectrometer",
    features: ["Lab & portable models", "Elemental analysis", "Fast reading output"],
    specs: ["Wavelength: 120–780 nm", "Voltage: 230V AC", "Software: PC-controlled"],
  },
  {
    id: 14,
    name: "Carbon Sulphur Apparatus",
    description:
      "Used for determining carbon and sulphur content in metals and alloys.",
    category: "Chemical Testing Equipment",
    image: "https://via.placeholder.com/400x300?text=Carbon+Sulphur+Apparatus",
    features: ["Lab-grade", "Accurate combustion analysis", "Durable heating element"],
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
    features: ["Jolt, squeeze, and sand sling types", "Heavy-duty frame", "Adjustable compaction"],
    specs: ["Mould Size: up to 500x500 mm", "Power: 2 HP", "Cycle Time: 15 sec"],
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
    image: "https://via.placeholder.com/400x300?text=Ultrasonic+Cleaning+Machine",
    features: ["Portable and system types", "High frequency", "Automatic timer"],
    specs: ["Frequency: 40 kHz", "Capacity: 5–50 L", "Power: 300–1500 W"],
  },
  {
    id: 18,
    name: "Ultrasonic Plastic Welding Machine",
    description:
      "Ultrasonic welding equipment for joining thermoplastic components efficiently.",
    category: "Ultrasonic Machines",
    image: "https://via.placeholder.com/400x300?text=Ultrasonic+Plastic+Welder",
    features: ["Microprocessor controlled", "Energy saving", "Low maintenance"],
    specs: ["Power: 2000 W", "Frequency: 20 kHz", "Welding Time: 0.01–10 sec"],
  },

  // G) Consumables
  {
    id: 19,
    name: "Abrasive Polishing Papers",
    description:
      "High-quality silicon carbide waterproof papers for metallographic polishing.",
    category: "Consumables",
    image: "https://via.placeholder.com/400x300?text=Abrasive+Polishing+Paper",
    features: ["Grades A to F", "Waterproof", "Available in all grit sizes"],
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
    specs: ["Particle Size: 2–5 μm", "Packaging: 1 kg/5 L", "Color: Black/Fluorescent"],
  },
];

const categories = [
  "All",
  "Metallographic Testing Equipment",
  "Non-Destructive Testing Equipment",
  "Physical Testing Equipment",
  "Chemical Testing Equipment",
  "Foundry Machinery/Equipment",
  "Ultrasonic Machines",
  "Consumables",
];

const PRODUCTS_PER_PAGE = 8;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-red-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
            Our <span className="text-red-500">Products</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up-delay">
            Cutting-Edge Testing Solutions for Industry Leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <a
              href="#catalog"
              className="group bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Explore Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="group bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Request Quote
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section id="catalog" className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Product <span className="text-red-600">Catalog</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2 text-red-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filters.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-red-600 hover:bg-red-50 border border-red-600"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-700 hover:bg-red-50 border border-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-red-600 hover:bg-red-50 border border-red-600"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-blue-900">{selectedProduct.name}</h2>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                  {selectedProduct.category}
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{selectedProduct.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature: string, idx: number) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <TrendingUp className="w-4 h-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">Specifications</h4>
                  <ul className="space-y-2">
                    {selectedProduct.specs.map((spec: string, idx: number) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 flex-1 text-center inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Request Quote
                </a>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-colors duration-300 flex-1 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose <span className="text-red-600">Metsonic</span> Products?
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by 100+ organizations for precision, reliability, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">Global Standards</div>
              <p className="text-gray-700 font-medium">ISO-certified equipment meeting ASTM & DIN norms</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-delay">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">Expert Support</div>
              <p className="text-gray-700 font-medium">24/7 technical assistance and on-site training</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-delay-2">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">Proven Reliability</div>
              <p className="text-gray-700 font-medium">Backed by 30+ years of industry expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your <span className="text-yellow-300">Testing Capabilities?</span>
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact our experts for customized solutions and competitive pricing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+918028402784"
              className="group bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="mailto:metsonic.engineers@gmail.com"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-red-100 text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">30+</div>
              <div className="text-red-100 text-sm">Years</div>
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
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scroll-dot { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.3s both; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.6s both; }
        .animate-scroll-dot { animation: scroll-dot 2s ease-in-out infinite; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}