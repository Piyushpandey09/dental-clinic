import React, { useState } from "react";
import { FaTooth, FaBars, FaTimes,  FaPhone, FaBookOpen, FaUserMd } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);

  const phoneNumber = "+91 7838163988";
  const location = useLocation();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-teal-600 font-semibold"
      : "text-gray-700 hover:text-teal-600 transition-colors duration-200";

  // Improved Scroll Function
  const scrollToSection = (sectionId) => {
    setAboutDropdown(false);
    setMenuOpen(false);

    const targetUrl = `/about#${sectionId}`;

    if (location.pathname === "/about") {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = targetUrl;
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-950 text-white text-xs font-bold uppercase tracking-widest py-3 px-4 sm:px-8 hidden sm:block border-b border-gray-800">
  <div className="w-full max-w-full xl:max-w-[95%] 2xl:max-w-[92%] mx-auto flex justify-between items-center">

    {/* Left */}
    <div className="flex items-center gap-2">
      <span className="text-teal-400">Nirmal Chaow</span>
      <span className="text-gray-700">|</span>
      <span>Nirmal Dental Care</span>
    </div>

    {/* Right */}
   <div className="flex items-center gap-2 text-teal-400">
  <i className="fas fa-globe text-teal-400"></i>
  <span>https://dentohealthcare.in</span>
</div>

  </div>
</div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        {/* Responsive width padding tailored for both small laptops & massive desktop screens */}
        <div className="w-full max-w-full xl:max-w-[95%] 2xl:max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-teal-600 p-2 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <FaTooth className="text-white text-3xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight whitespace-nowrap">
                  Nirmal Chaow
                </h1>
                <p className="text-1xl text-teal-600 font-semibold -mt-1">
                  Dental Care
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-base font-medium">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>

              {/* About Dropdown */}
              <div
               className="relative py-7"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <NavLink
                  to="/about"
                  className={navLinkClass({ isActive: location.pathname === "/about" })}
                >
                  About
                </NavLink>

                <AnimatePresence>
                  {aboutDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full w-[380px] bg-white shadow-2xl border-2 border-gray-950 py-4 z-50 rounded-none"
                    >
                      <div className="absolute -top-3.5 left-6 w-0 h-0 
                        border-l-[14px] border-r-[14px] border-b-[14px] 
                        border-l-transparent border-r-transparent border-b-teal-500">
                      </div>

                      <div className="px-3 space-y-4">
                        <button
                          onClick={() => scrollToSection("our-story")}
                          className="w-full flex items-center gap-4 p-3 rounded-none border border-transparent hover:border-gray-200 hover:bg-gray-50 transition group"
                        >
                          <div className="bg-gray-950 text-white p-3 rounded-none transition">
                            <FaBookOpen size={14} />
                          </div>
                          <div className="text-left">
                            <p className="text-gray-950 font-black uppercase tracking-tight text-xs group-hover:text-teal-600">
                              Know Our Story
                            </p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase mt-0.5">Our journey & values</p>
                          </div>
                        </button>

                        <div className="border-t border-teal-100"></div>

                        <button
                          onClick={() => scrollToSection("meet-doctor")}
                          className="w-full flex items-center gap-4 p-3 rounded-none border border-transparent hover:border-gray-200 hover:bg-gray-50 transition group"
                        >
                          <div className="bg-gray-950 text-white p-3 rounded-none transition">
                            <FaUserMd size={14} />
                          </div>
                          <div className="text-left">
                            <p className="text-gray-950 font-black uppercase tracking-tight text-xs group-hover:text-teal-600">
                              Meet the Doctor
                            </p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase mt-0.5">Dr. Nirmal Sharma</p>
                          </div>
                        </button>

                        <div className="border-t border-blue-100"></div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/services" className={navLinkClass}>Services</NavLink>

              {/* Gallery Dropdown */}
              <div
                className="relative py-7"
                onMouseEnter={() => setGalleryDropdown(true)}
                onMouseLeave={() => setGalleryDropdown(false)}
              >
                <NavLink
                  to="/gallery"
                  className={navLinkClass({ isActive: location.pathname === "/gallery" })}
                >
                  Gallery
                </NavLink>

                <AnimatePresence>
                  {galleryDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full w-[380px] bg-white shadow-2xl border-2 border-gray-950 py-4 z-50 rounded-none"
                    >
                      <div className="absolute -top-3.5 left-6 w-0 h-0 
                        border-l-[14px] border-r-[14px] border-b-[14px] 
                        border-l-transparent border-r-transparent border-b-teal-500">
                      </div>

                      <div className="px-4 space-y-2">
                        <Link
                          to="/gallery#clinic"
                          className="w-full flex items-center gap-4 p-3 rounded-none border border-transparent hover:border-gray-200 hover:bg-gray-50 transition group"
                        >
                          <div className="bg-gray-950 text-xs flex items-center justify-center w-10 h-10 text-white rounded-none">
                            📸
                          </div>
                          <div className="text-left">
                            <p className="text-gray-950 font-black uppercase tracking-tight text-xs group-hover:text-teal-600">
                              Clinic Photos
                            </p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase mt-0.5">Inside clinic view</p>
                          </div>
                        </Link>

                        <Link
                          to="/gallery#treatment"
                          className="w-full flex items-center gap-4 p-3 rounded-none border border-transparent hover:border-gray-200 hover:bg-gray-50 transition group"
                        >
                          <div className="bg-gray-950 text-xs flex items-center justify-center w-10 h-10 text-white rounded-none">
                            🦷
                          </div>
                          <div className="text-left">
                            <p className="text-gray-950 font-black uppercase tracking-tight text-xs group-hover:text-teal-600">
                              Treatment Results
                            </p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase mt-0.5">Before & After</p>
                          </div>
                        </Link>

                        <div className="border-t border-blue-100"></div>

                      
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/testimonials" className={navLinkClass}>Testimonials</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <Link
                to="/Contact"
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-5 lg:px-7 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all font-semibold text-sm whitespace-nowrap"
              >
                Book Appointment
              </Link>

              <button
                onClick={() => setShowCallPopup(true)}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-5 lg:px-7 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all font-semibold text-sm whitespace-nowrap"
              >
                Call Now
              </button>
            </div>

            {/* Mobile Buttons */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setShowCallPopup(true)}
                className="p-3 text-teal-600 hover:bg-teal-50 rounded-full transition"
              >
                <FaPhone size={24} />
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-3 text-gray-700 hover:bg-gray-100 rounded-full transition"
              >
                {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-8 space-y-6">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="block py-3 text-lg text-gray-700 hover:text-teal-600">Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block py-3 text-lg text-gray-700 hover:text-teal-600">About</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className="block py-3 text-lg text-gray-700 hover:text-teal-600">Services</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className="block py-3 text-lg text-gray-700 hover:text-teal-600">Gallery</NavLink>
            <NavLink to="/testimonials" onClick={() => setMenuOpen(false)} className="block py-3 text-lg text-gray-700 hover:text-teal-600">Testimonials</NavLink>
            <NavLink to="/Contact" onClick={() => setMenuOpen(false)} className="block py-3 text-lg text-gray-700 hover:text-teal-600">Contact</NavLink>

            <div className="pt-6 space-y-4">
              <Link to="/Contact" onClick={() => setMenuOpen(false)} className="block w-full text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg">
                Book Appointment
              </Link>
              <button
                onClick={() => { setMenuOpen(false); setShowCallPopup(true); }}
                className="block w-full text-center border-2 border-teal-600 text-teal-600 py-4 rounded-2xl font-semibold text-lg"
              >
                📞 Call Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Call Popup */}
    {showCallPopup && (
        <div className="fixed inset-0 bg-gray-950/80 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-none border-4 border-gray-950 shadow-2xl max-w-sm w-full overflow-hidden"
          >
            <div className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 text-gray-900 border-2 border-gray-950 rounded-none flex items-center justify-center mb-6">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-black text-gray-950 uppercase tracking-tight mb-1">Call Us Now</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-6">Our friendly team is ready to help you</p>

              <a
                href={`tel:${phoneNumber}`}
                className="block bg-gray-950 hover:bg-teal-600 text-white text-xl font-black py-4 rounded-none mb-6 border-b-4 border-teal-500 transition-all"
              >
                {phoneNumber}
              </a>

              <button
                onClick={() => setShowCallPopup(false)}
                className="text-gray-500 hover:text-gray-950 font-black text-xs uppercase tracking-widest transition-colors"
              >
                [ Close Window ]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;