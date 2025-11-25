import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
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

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/company" },
    { name: "Products", path: "/products" },
    { name: "Clients", path: "/#clients" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (path: string) => {
    if (path === "/#clients") {
      if (location.pathname === "/") {
        document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
      } else navigate("/#clients");
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
          ${scrolled ? "bg-white py-3 border-b border-gray-200" : "bg-white py-5"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">

            {/* LOGO SECTION */}
            <a href="/" className="flex items-center gap-4">
              <img
                src="Logo.jpg"
                alt="Metsonic Logo"
                className={`${scrolled ? "h-10" : "h-14"} w-auto`}
              />
              <img
                src="name.jpg"
                alt="Metsonic"
                className={`hidden md:block ${scrolled ? "h-10" : "h-14"} w-auto`}
              />
            </a>

            {/* DESKTOP MENU */}
            {/* Desktop Menu */}
<div className="hidden xl:flex items-center gap-6">
  {navLinks.map((link) => (
    <button
      key={link.name}
      onClick={() => handleLinkClick(link.path)}
      className="relative px-3 py-2 text-blue-900 font-semibold text-base 
                 hover:text-red-600 transition-colors duration-200"
    >
      {link.name}
    </button>
  ))}
</div>


            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">
              <a
                href="/brochure.pdf"
                download
                className="hidden md:flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
              >
                <Download className="w-4 h-4" />
                Catalog
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={toggleSidebar}
                className="xl:hidden p-3 bg-blue-900 text-white rounded-lg"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 p-8 flex flex-col"
          >
            {/* MOBILE HEADER */}
            <div className="flex justify-between items-center mb-8">
              <img src="Logo.jpg" className="h-14" />
              <button onClick={toggleSidebar}>
                <X size={26} />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-blue-900 text-xl font-semibold py-3 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* MOBILE DOWNLOAD BUTTON */}
            <div className="mt-auto pt-10">
              <a
                href="/brochure.pdf"
                download
                className="w-full bg-red-600 text-white text-lg font-bold py-4 rounded-lg flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Download Catalog
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
