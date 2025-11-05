

// Sample client logos - replace with actual client data
const clients = [
  { name: "BHEL", logo: "https://via.placeholder.com/200x100?text=BHEL" },
  { name: "HAL", logo: "https://via.placeholder.com/200x100?text=HAL" },
  { name: "Nuclear Fuel Complex", logo: "https://via.placeholder.com/200x100?text=NFC" },
  { name: "DMRL", logo: "https://via.placeholder.com/200x100?text=DMRL" },
  { name: "DLRL", logo: "https://via.placeholder.com/200x100?text=DLRL" },
  { name: "RCI", logo: "https://via.placeholder.com/200x100?text=RCI" },
  { name: "BDL", logo: "https://via.placeholder.com/200x100?text=BDL" },
  { name: "ARC International", logo: "https://via.placeholder.com/200x100?text=ARC" },
  { name: "Mishra Dhatu Nigam", logo: "https://via.placeholder.com/200x100?text=MIDHANI" },
  { name: "ISRO", logo: "https://via.placeholder.com/200x100?text=ISRO" },
  { name: "DRDO", logo: "https://via.placeholder.com/200x100?text=DRDO" },
  { name: "NPCIL", logo: "https://via.placeholder.com/200x100?text=NPCIL" },
  { name: "VSSC", logo: "https://via.placeholder.com/200x100?text=VSSC" },
  { name: "BARC", logo: "https://via.placeholder.com/200x100?text=BARC" },
  { name: "NAL", logo: "https://via.placeholder.com/200x100?text=NAL" },
];

export default function Clients() {
  // Divide clients into 3 rows
  const row1 = clients.slice(0, 5);
  const row2 = clients.slice(5, 10);
  const row3 = clients.slice(10, 15);

  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24 lg:py-28">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-gray-50">
        <svg
          className="absolute bottom-0 w-full h-12 md:h-16"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Trusted Clients</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Proud to serve leading defence, research, and industrial organizations across India
          </p>
        </div>

        {/* Client Logos Grid - 3 Rows with Marquee Effect */}
        <div className="space-y-4">
          {/* Row 1 - Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right items-center">
              {[...row1, ...row1].map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left items-center">
              {[...row2, ...row2].map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right items-center">
              {[...row3, ...row3].map((client, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100">
            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">30+</div>
            <p className="text-gray-700 font-medium">Years of Service</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100">
            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">100+</div>
            <p className="text-gray-700 font-medium">Satisfied Clients</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100">
            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">500+</div>
            <p className="text-gray-700 font-medium">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100">
            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">24/7</div>
            <p className="text-gray-700 font-medium">Customer Support</p>
          </div>
        </div>
      </div>

     

      {/* Animations */}
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}