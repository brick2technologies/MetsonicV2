import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Microscope,
  Radio,
  TestTube,
  Beaker,
  Factory,
  Waves,
  Package,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Metallographic Testing",
    description: "High-precision instruments for material analysis and grain structure observation.",
    icon: Microscope,
    features: ["Material Analysis", "Grain Structure", "Microscopy Solutions"],
    color: "from-red-500 to-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    id: 2,
    title: "Non-Destructive Testing",
    description: "Advanced NDT solutions for detecting material flaws without causing damage.",
    icon: Radio,
    features: ["Flaw Detection", "Ultrasonic Testing", "Quality Assurance"],
    color: "from-blue-600 to-blue-700",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: 3,
    title: "Physical Testing",
    description: "Comprehensive range of hardness testers and tensile testing machines.",
    icon: TestTube,
    features: ["Hardness Testing", "Tensile Analysis", "Impact Testing"],
    color: "from-red-500 to-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    id: 4,
    title: "Chemical Testing",
    description: "Advanced chemical analysis instruments for material composition testing.",
    icon: Beaker,
    features: ["Composition Analysis", "Spectroscopy", "Lab Equipment '"],
    color: "from-blue-600 to-blue-700",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: 5,
    title: "Foundry Machinery",
    description: "Complete range of foundry equipment including molding machines.",
    icon: Factory,
    features: ["Molding Machines", "Casting Equipment", "Production Tools"],
    color: "from-red-500 to-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    id: 6,
    title: "Ultrasonic Machines",
    description: "State-of-the-art ultrasonic testing and cleaning equipment.",
    icon: Waves,
    features: ["Cleaning Systems", "Inspection Tools", "Precision Equipment"],
    color: "from-blue-600 to-blue-700",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: 7,
    title: "Consumables",
    description: "High-quality consumables and accessories for all testing equipment.",
    icon: Package,
    features: ["Testing Supplies", "Accessories", "Maintenance Parts"],
    color: "from-red-500 to-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);

  // Fixed Variants with proper easing (cubic-bezier array)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // "easeOut" cubic-bezier
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const activeProductData = products[activeProduct];

  return (
    <section id="products" className="relative bg-white py-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1e3a8a 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              Our Solutions
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            Product <span className="text-red-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive testing and inspection solutions engineered for precision and reliability
          </p>
        </motion.div>

        {/* Split View Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Product List */}
          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product, index) => {
              const Icon = product.icon;
              const isActive = activeProduct === index;

              return (
                <motion.button
                  key={product.id}
                  variants={itemVariants}
                  onClick={() => setActiveProduct(index)}
                  className={`w-full text-left transition-all duration-500 rounded-2xl overflow-hidden group ${
                    isActive
                      ? `bg-gradient-to-r ${product.color} shadow-2xl scale-[1.02]`
                      : "bg-white hover:bg-gray-50 border-2 border-gray-100 hover:border-gray-200 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div className="p-6 flex items-center gap-5">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        isActive ? "bg-white/20" : product.lightColor
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 transition-all duration-500 ${
                          isActive ? "text-white" : product.textColor
                        }`}
                        strokeWidth={2}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xl font-bold mb-1 transition-colors duration-500 ${
                          isActive ? "text-white" : "text-blue-900"
                        }`}
                      >
                        {product.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-500 ${
                          isActive ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {product.description}
                      </p>
                    </div>

                    <ArrowRight
                      className={`w-6 h-6 flex-shrink-0 transition-all duration-500 ${
                        isActive
                          ? "text-white translate-x-0 opacity-100"
                          : "text-gray-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right Side - Active Product Details */}
          <motion.div
            key={activeProduct}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="lg:sticky lg:top-24"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div
                className={`w-20 h-20 rounded-2xl ${activeProductData.lightColor} flex items-center justify-center mb-6`}
              >
                {React.createElement(activeProductData.icon, {
                  className: `w-10 h-10 ${activeProductData.textColor}`,
                  strokeWidth: 2,
                })}
              </div>

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                {activeProductData.title}
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {activeProductData.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Key Capabilities
                </h4>
                {activeProductData.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      className={`w-5 h-5 ${activeProductData.textColor} flex-shrink-0`}
                    />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4"> 
                <Link to="/contact">
                <button className="flex-1 px-6 py-4 bg-white text-blue-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-red-400 transition-all duration-300">
                  Get Quote
                </button>
                </Link>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProduct(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeProduct
                      ? "w-8 h-2 bg-red-600"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to product ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Need a Custom Testing Solution?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our engineering team specializes in creating tailored solutions for unique industrial requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                  Contact Our Experts
                  <ArrowRight className="w-5 h-5" />
                </button>
                </Link>
                <button className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}