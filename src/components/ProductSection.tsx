import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "Metallographic Testing Equipment",
    description:
      "High-precision instruments for material analysis, grain structure observation, and micro-examination of metal samples. Essential for quality control in metallurgical labs.",
    image: "thightness.jpg",
  },
  {
    title: "Non-Destructive Testing Equipment",
    description:
      "Advanced NDT solutions including ultrasonic flaw detectors, radiographic testing equipment, and eddy current testers for detecting material flaws without causing damage.",
    image: "hardness.jpg",
  },
  {
    title: "Physical Testing Equipment",
    description:
      "Comprehensive range of hardness testers, tensile testing machines, and impact testers designed for accurate mechanical property evaluation in industrial applications.",
    image: "radiography.jpg",
  },
  {
    title: "Sand Testing Equipment",
    description:
      "Specialized equipment for foundry sand analysis, moisture content testing, permeability testing, and green compression strength measurement.",
    image: "microscope.jpg",
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="products"
      className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Curved top border */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-3 sm:mb-4 px-4">
            Our <span className="text-red-600">Products</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-red-600 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Delivering reliable, high-performance testing and inspection equipment for industrial excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mx-2 sm:mx-4 md:mx-0">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={products[currentIndex].image}
                  alt={products[currentIndex].title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  key={currentIndex}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Product Number Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-red-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">
                  {currentIndex + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                  {products[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  {products[currentIndex].description}
                </p>
                <button className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg w-full sm:w-auto text-base sm:text-lg inline-flex items-center justify-center gap-2">
                  Learn More 
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Hidden on Mobile, Visible on Tablet+ */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-16 bg-white hover:bg-red-600 text-blue-900 hover:text-white rounded-full p-3 lg:p-4 shadow-xl transition-all duration-300 hover:scale-110 z-10 items-center justify-center"
            aria-label="Previous product"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-16 bg-white hover:bg-red-600 text-gray-800 hover:text-white rounded-full p-3 lg:p-4 shadow-xl transition-all duration-300 hover:scale-110 z-10 items-center justify-center"
            aria-label="Next product"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-red-600 text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 active:scale-95"
              aria-label="Previous product"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-red-600 text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 active:scale-95"
              aria-label="Next product"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-red-600 w-10 sm:w-12 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>

          {/* Product Counter */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-gray-500 text-base sm:text-lg font-medium">
              Product {currentIndex + 1} of {products.length}
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
}