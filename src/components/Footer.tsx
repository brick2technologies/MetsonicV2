import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-10 lg:pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="flex flex-col gap-0">
              <img
                src="Logo.jpg"
                alt="Metsonic Engineers Pvt Ltd logo"
                className="h-16 w-auto object-contain brightness-110"
              />
              <img
                src="name.jpg"
                alt="Metsonic Engineers Pvt Ltd"
                className="h-10 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading supplier of testing equipment in South India since 1992.
            </p>
            <p className="text-gray-400 text-xs">
              © 2024 Metsonic Engineers Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-red-500 font-bold text-xl mb-5">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Management Team", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-200 hover:text-red-500 transition-colors text-base"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-red-500 font-bold text-xl mb-5">Products</h3>
            <ul className="space-y-3">
              {[
                "Metallographic Testing",
                "Non-Destructive Testing",
                "Physical Testing",
                "Sand Testing",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-200 hover:text-red-500 transition-colors text-base"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with Social Media Icons */}
          <div>
            <h3 className="text-red-500 font-bold text-xl mb-5">Contact</h3>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm leading-relaxed">
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">info@metsonic.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm">+91-XXX-XXX-XXXX</span>
              </li>
            </ul>

            {/* Social Media Row */}
            <div className="flex gap-4 mt-5">
              {/* Instagram */}
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Instagram size={24} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Facebook size={24} />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="mt-5 text-center">
          <div className="text-red-500 text-2xl md:text-2xl font-bold tracking-[0.3em] mb-3">
            SINCE 1992
          </div>
          <div className="text-red-500 font-black text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[16rem] leading-none tracking-wide">
            METSONIC
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 border-t border-gray-700 pb-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-red-500 transition-colors">
                Legal
              </a>
            </div>

            {/* Repeat icons at bottom */}
            <div className="flex ">
              <p className="text-gray-300 text-sm sm:text-base hover:text-red-500 transition-colors duration-200 cursor-default">
                Designed by{" "}
                <a
                  href="https://brick2tech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline hover:text-red-400 font-semibold"
                >
                  Brick2Tech
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
