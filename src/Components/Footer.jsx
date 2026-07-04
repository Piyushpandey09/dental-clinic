import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTooth,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative text-gray-300 pt-16 pb-8 overflow-hidden">
      
      {/* Background Image - Same as before */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* Teal Dark Overlay */}
     <div className="absolute inset-0 bg-black/80"></div>
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center space-x-3">
            <div className="bg-teal-500 p-3 rounded-full shadow-lg">
              <FaTooth className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Nirmal Chaow Dental Care
            </h2>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Providing high-quality dental care with modern technology and
            experienced doctors. Your smile is our priority.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            D-86, Bindapur Rd, Pratap Garden, Block A, Uttam Nagar, Bindapur, New Delhi, 110059
          </p>

         
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">

        
          {/* Clinic Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-teal-500/30 pb-2">
              Clinic Hours
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Morning Session: 10:00 AM – 2:00 PM</p>
              <p>launch: 02:00 PM – 05:00 PM</p>
              <p>Evening Session: 05:00 AM – 9:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-teal-500/30 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2 hover:text-teal-400 transition">
                <FaMapMarkerAlt className="mt-1 text-teal-400" />
                <span>Nirmal Chaow Dental Care, Delhi</span>
              </div>

              <div className="flex items-center space-x-2 hover:text-teal-400 transition">
                <FaPhone className="text-teal-400" />
                <a href="tel:+7838163988">+91 7838163988</a>
              </div>

              <div className="flex items-center space-x-2 hover:text-teal-400 transition">
                <FaEnvelope className="text-teal-400" />
                <a href="mailto:nirmaldental@gmail.com">nirmalchaowdentalcare@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-teal-900/50 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}  Nirmal Chaow Dental Care.  All rights reserved. [Website designed & maintained by Nirmal Chaow Dental Care]
      </div>

      {/* Scroll to Top Button with Teal Color */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-8 z-40 bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;