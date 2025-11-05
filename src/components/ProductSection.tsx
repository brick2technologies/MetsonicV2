import { useState } from "react";
import { ChevronRight, ChevronLeft, Microscope, Radio, TestTube, Beaker, Factory, Waves, Package } from "lucide-react";

const products = [
  {
    title: "Metallographic Testing",
    description:
      "High-precision instruments for material analysis and grain structure observation.",
    icon: Microscope,
  },
  {
    title: "Non-Destructive Testing",
    description:
      "Advanced NDT solutions for detecting material flaws without causing damage.",
    icon: Radio,
  },
  {
    title: "Physical Testing",
    description:
      "Comprehensive range of hardness testers and tensile testing machines.",
    icon: TestTube,
  },
  {
    title: "Chemical Testing",
    description:
      "Advanced chemical analysis instruments for material composition testing.",
    icon: Beaker,
  },
  {
    title: "Foundry Machinery",
    description:
      "Complete range of foundry equipment including molding machines.",
    icon: Factory,
  },
  {
    title: "Ultrasonic Machines",
    description:
      "State-of-the-art ultrasonic testing and cleaning equipment.",
    icon: Waves,
  },
  {
    title: "Consumables",
    description:
      "High-quality consumables and accessories for all testing equipment.",
    icon: Package,
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section
      id="products"
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3">
            <span className="text-red-600 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-3 sm:mb-4">
            Our <span className="text-red-600">Products</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Delivering reliable, high-performance testing and inspection equipment
          </p>
        </div>

        {/* Mobile Carousel (visible on mobile only) */}
        <div className="block md:hidden mb-16">
          <div className="relative max-w-md mx-auto">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Icon = products[currentIndex].icon;
                    return <Icon className="w-7 h-7 text-red-600" strokeWidth={2} />;
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {products[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {products[currentIndex].description}
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm mt-2">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-red-600 w-6 h-1.5"
                      : "bg-gray-300 w-1.5 h-1.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid (visible on tablet and desktop) */}
        <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Card 1 - Large */}
          <div className="group md:col-span-3 lg:col-span-4 lg:row-span-2 bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border border-gray-100 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center mb-4 lg:mb-6">
                <Microscope className="w-6 h-6 lg:w-7 lg:h-7 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-3 lg:mb-4">
                {products[0].title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4 lg:mb-6">
                {products[0].description}
              </p>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group md:col-span-3 lg:col-span-4 bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-5 lg:p-6 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center mb-3 lg:mb-4">
                <Radio className="w-6 h-6 text-blue-900" strokeWidth={2} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-blue-900 mb-2 lg:mb-3">
                {products[1].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 lg:mb-4">
                {products[1].description}
              </p>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group md:col-span-3 lg:col-span-4 bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-5 lg:p-6 border border-gray-100 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center mb-3 lg:mb-4">
                <TestTube className="w-6 h-6 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-blue-900 mb-2 lg:mb-3">
                {products[2].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 lg:mb-4">
                {products[2].description}
              </p>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group md:col-span-3 lg:col-span-4 bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-5 lg:p-6 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center mb-3 lg:mb-4">
                <Beaker className="w-6 h-6 text-blue-900" strokeWidth={2} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-blue-900 mb-2 lg:mb-3">
                {products[3].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 lg:mb-4">
                {products[3].description}
              </p>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 5 - Wide */}
          <div className="group md:col-span-6 lg:col-span-8 bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-5 lg:p-6 border border-gray-100 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center mb-3 lg:mb-4">
                <Factory className="w-6 h-6 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-blue-900 mb-2 lg:mb-3">
                {products[4].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 lg:mb-4">
                {products[4].description}
              </p>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group md:col-span-3 lg:col-span-6 bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-5 lg:p-6 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center mb-3 lg:mb-4">
                <Waves className="w-6 h-6 text-blue-900" strokeWidth={2} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-blue-900 mb-2 lg:mb-3">
                {products[5].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 lg:mb-4">
                {products[5].description}
              </p>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 7 */}
          <div className="group md:col-span-3 lg:col-span-6 bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-5 lg:p-6 border border-gray-100 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center mb-3 lg:mb-4">
                <Package className="w-6 h-6 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-blue-900 mb-2 lg:mb-3">
                {products[6].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 lg:mb-4">
                {products[6].description}
              </p>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect testing equipment for your specific requirements
          </p>
          <button className="bg-white text-blue-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 sm:gap-3">
            Contact Our Experts
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}