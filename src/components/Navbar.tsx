import React, { useState, useEffect } from "react";
import { Menu, X, Download, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll when landing on Home with #clients hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#clients") {
      setTimeout(() => {
        const element = document.getElementById("clients");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/company" },
    { name: "Products", path: "/products" },
    { name: "Clients", path: "/#clients" },   // Special path
    { name: "Contact", path: "/contact" },
  ];

  // Handle Clients link click — works from any page
  const handleClientsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on home → just scroll
      document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home + hash → useEffect above will handle scroll
      navigate("/#clients");
    }

    if (isOpen) setIsOpen(false);
  };

  // Generic link handler (for mobile/desktop)
  const handleLinkClick = (path: string) => {
    if (path === "/#clients") {
      const mockEvent: React.MouseEvent<HTMLAnchorElement> = {
        preventDefault: () => {},
      } as React.MouseEvent<HTMLAnchorElement>;
      handleClientsClick(mockEvent);
    } else {
      navigate(path);
      if (isOpen) setIsOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-2xl py-3"
            : "bg-white/90 backdrop-blur-xl shadow-lg py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-4 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="Logo.jpg"
                  alt="Metsonic Engineers logo"
                  className={`relative transition-all duration-300 ${
                    scrolled ? "h-10" : "h-14"
                  } w-auto object-contain`}
                />
              </motion.div>
              <div className="hidden md:block">
                <img
                  src="name.jpg"
                  alt="Metsonic Engineers"
                  className={`transition-all duration-300 ${
                    scrolled ? "h-10" : "h-14"
                  } w-auto object-contain`}
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  className="relative px-5 py-2 text-blue-900 text-sm font-bold hover:text-red-600 transition-colors duration-300 group cursor-pointer"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-red-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Contact Info */}
              <div className="hidden lg:flex items-center gap-6 mr-4">
                <a
                  href="tel:+91-9876543210"
                  className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-red-50 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Call Us</p>
                    <p className="text-sm font-bold">+91-98765-43210</p>
                  </div>
                </a>
              </div>

              {/* Download Button */}
              <a
                href="/brochure.pdf"
                download
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-6 py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span className="hidden lg:inline">Catalog</span>
              </a>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={toggleSidebar}
                className="xl:hidden p-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} strokeWidth={2.5} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-red-900/95 backdrop-blur-md z-50"
              onClick={toggleSidebar}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <div className="pointer-events-auto max-w-lg w-full mx-6">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-900 to-red-600 p-8 text-center">
                    <img src="Logo.jpg" alt="Logo" className="h-16 mx-auto mb-3" />
                    <img src="name.jpg" alt="Name" className="h-12 mx-auto" />
                    <p className="text-white/80 text-sm mt-3">Industrial Testing Excellence</p>
                  </div>

                  {/* Links */}
                  <div className="p-6 space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.name}
                        onClick={() => handleLinkClick(link.path)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="w-full text-left block text-blue-900 text-lg font-bold py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-600 transition-all duration-300 border-2 border-transparent hover:border-red-200"
                      >
                        {link.name}
                      </motion.button>
                    ))}
                  </div>

                  {/* Quick Info */}
                  <div className="px-6 pb-6 grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                      <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Call Us</p>
                      <p className="text-sm font-bold text-blue-900">+91-98765</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
                      <Mail className="w-6 h-6 text-red-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Email</p>
                      <p className="text-sm font-bold text-blue-900">info@...</p>
                    </div>
                  </div>

                  {/* Download */}
                  <div className="px-6 pb-6">
                    <a
                      href="/brochure.pdf"
                      download
                      onClick={toggleSidebar}
                      className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      Download Catalog
                    </a>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-4 text-center border-t border-gray-100">
                    <p className="text-blue-900 text-sm">
                      <span className="font-bold text-red-600">30+ Years</span> of Excellence
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;