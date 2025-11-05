export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
            About <span className="text-red-600">Metsonic Engineers</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://th.bing.com/th/id/OIP.UPgA6zOZZBweNAwimDDiDwHaE8?w=216&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Metsonic Engineers Laboratory"
                className="w-full h-[300px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600 rounded-full opacity-10 -z-10"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Company Introduction */}
            <div className="bg-gray-50 p-6 lg:p-8 rounded-2xl border-l-4 border-red-600">
              <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-3 lg:mb-4">
                Our Legacy
              </h3>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                Founded in{" "}
                <strong className="text-red-600">April 1992</strong>, Metsonic
                Engineers Pvt. Ltd. has been delivering world-class testing
                equipment and non-destructive testing instruments to Defence,
                Research, and Industrial organizations across India.
              </p>
            </div>

            {/* Key Info Boxes */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-white p-4 lg:p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-red-600 font-bold text-2xl lg:text-3xl mb-2">
                  30+
                </div>
                <p className="text-gray-700 font-medium text-sm lg:text-base">
                  Years of Excellence
                </p>
              </div>
              <div className="bg-white p-4 lg:p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-red-600 font-bold text-2xl lg:text-3xl mb-2">
                  100+
                </div>
                <p className="text-gray-700 font-medium text-sm lg:text-base">
                  Trusted Clients
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                Our strong presence across{" "}
                <strong className="text-blue-900">
                  Telangana & Andhra Pradesh
                </strong>{" "}
                enables us to collaborate with major institutions including{" "}
                <strong className="text-blue-900">
                  BHEL, HAL, Nuclear Fuel Complex
                </strong>
                , and{" "}
                <strong className="text-blue-900">
                  Mishra Dhatu Nigam Ltd.
                </strong>
              </p>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                As a trusted dealer and sole-selling agent, we supply
                cutting-edge products to{" "}
                <strong className="text-blue-900">
                  DMRL, DLRL, RCI, ARC International, BDL
                </strong>
                , and support{" "}
                <strong className="text-blue-900">
                  engineering colleges
                </strong>{" "}
                with specialized equipment for Mechanical and Metallurgical labs.
              </p>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                Today, we are recognized as a{" "}
                <strong className="text-red-600">
                  leading supplier in South India
                </strong>
                , partnering with{" "}
                <strong className="text-blue-900">
                  global innovators from Korea, China, and Singapore
                </strong>{" "}
                to introduce advanced technology to the Indian market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
