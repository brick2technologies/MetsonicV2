import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have a question? Need a quote? Our team is ready to help you find the perfect testing solution.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
                  We’d Love to Hear from You
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're exploring NDT solutions, need technical support, or want to discuss custom requirements — we're just a message away.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Office Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Metsonic Engineers Pvt. Ltd.</strong><br />
                      63, ishaq Colony, Wellington Road,<br />
                      Secunderabad, Telangana – 500015, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Phone</h3>
                    <div className="space-y-1">
                      
                      <a href="tel:+919490167002" className="block text-red-600 hover:underline">
                        +91 94901 67002
                      </a>
                      <a href="tel:+919490167005" className="block text-red-600 hover:underline">
                        +91 94901 67005
                      </a>
                    </div>
                    {/* <p className="text-sm text-gray-500 mt-2">Mon–Fri: 9AM–6PM IST</p> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Email</h3>
                    <a href="mailto:metsonic.engineers@gmail.com" className="text-red-600 hover:underline break-all">
                      metsonic.engineers@gmail.com
                    </a>
                    <p className="text-sm text-gray-500">We reply within 4 hours</p>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === "sending"
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700 hover:scale-105"
                  }`}
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed – Updated Location */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
            Find Us on the Map
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
            <iframe
              title="Metsonic Engineers Pvt. Ltd. Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.945678912345!2d77.637890!3d12.978456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae141f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s63%2C%20Colony%20Wellington%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560025!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Let’s discuss how Metsonic can empower your quality control.
          </p>
          <a
            href="tel:+918028402784"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Call Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}