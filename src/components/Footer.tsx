
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  // Handle smooth scroll to #clients on Home
  const goToClients = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goToPage = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Logo + Description + Social */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <img
                src="/Logo.jpg"
                alt="Metsonic Engineers logo"
                className="h-14 w-auto object-contain"
              />
              <img
                src="/name.jpg"
                alt="Metsonic Engineers"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              India's leading supplier of industrial testing equipment since 1992.
              Serving Defence, Research, and Industrial sectors with precision and excellence.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/metsonic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-red-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-6 h-6" strokeWidth={2} />
              </a>
              <a
                href="https://facebook.com/metsonic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-6 h-6" strokeWidth={2} />
              </a>
              <a
                href="https://youtube.com/@metsonic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-red-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Youtube className="w-6 h-6" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Right: 3 Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">

            {/* Company Links */}
            <div>
              <h4 className="text-blue-900 font-bold text-sm uppercase tracking-wider mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => goToPage("/company")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    About Us
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                
                <li>
                  <button
                    onClick={() => goToPage("/Products")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    Products
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={goToClients}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    Clients
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goToPage("/contact")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    Contact
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="text-blue-900 font-bold text-sm uppercase tracking-wider mb-6">
                Products
              </h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => goToPage("/products/ndt")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    NDT Equipment
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goToPage("/products/physical")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    Physical Testing
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goToPage("/products/chemical")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    Chemical Testing
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goToPage("/products/foundry")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    Foundry Machinery
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goToPage("/products/ultrasonic")}
                    className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    Ultrasonic Machines
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-blue-900 font-bold text-sm uppercase tracking-wider mb-6">
                Contact Us
              </h4>
              <div className="space-y-5">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-medium">+91 98765 43210</span>
                </a>

                <a
                  href="mailto:info@metsonic.com"
                  className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-medium">info@metsonic.com</span>
                </a>

                <div className="flex items-start gap-4 text-gray-700">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-medium leading-tight">
                    Hyderabad,<br />Telangana, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span className="font-bold text-blue-900">Since 1992</span>
              </div>
              <span className="hidden sm:inline text-gray-400">|</span>
              <span>© 2025 Metsonic Engineers Pvt. Ltd. All Rights Reserved</span>
            </div>

            <div className="flex items-center gap-6 text-gray-600">
              <button
                onClick={() => goToPage("/privacy")}
                className="hover:text-red-600 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => goToPage("/terms")}
                className="hover:text-red-600 transition-colors"
              >
                Terms of Service
              </button>
              <span className="text-gray-400">|</span>
              <span>
                Built by{" "}
                <a
                  href="https://web.brick2tech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-bold"
                >
                  Brick2Tech
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}