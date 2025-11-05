import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/company" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ===== Top Navbar ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-8 py-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img
              src="Logo.jpg"
              alt="Metsonic Engineers Pvt Ltd logo"
              className="h-14 w-auto object-contain"
            />
            <img
              src="name.jpg"
              alt="Metsonic Engineers Pvt Ltd text logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-blue-900 text-lg font-medium hover:text-red-600 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a
              href="/brochure.pdf"
              download
              className="flex items-center gap-2 bg-red-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              Catalog
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-red-600 hover:text-red-700 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <Menu size={32} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* ===== Overlay ===== */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* ===== Right Sidebar ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-black via-neutral-900 to-black border-l border-silver/20 z-50 transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col justify-between pb-10`}
      >
        {/* Top Section */}
        <div className="relative flex flex-col items-center justify-center p-8 border-b border-silver/20">
          <button
            onClick={toggleSidebar}
            className="absolute top-6 right-6 text-silver hover:text-red-500 transition-colors duration-300 p-2"
            aria-label="Close menu"
          >
            <X size={30} strokeWidth={2.5} />
          </button>

          <div className="flex flex-col items-center">
            <img
              src="Logo.jpg"
              alt="Metsonic Engineers Pvt Ltd logo"
              className="h-16 w-auto object-contain"
            />
            <img
              src="name.jpg"
              alt="Metsonic Engineers Pvt Ltd text logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-4 px-8 mt-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleSidebar}
              className="text-silver text-2xl font-semibold py-3 relative group transition-all duration-300"
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Download Button */}
        <div className="px-8 mt-10">
          <a
            href="/brochure.pdf"
            download
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </a>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="h-1 bg-gradient-to-r from-silver to-red-600 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .text-silver {
          color: #C0C0C0;
        }
      `}</style>
    </>
  );
};

export default Navbar;
