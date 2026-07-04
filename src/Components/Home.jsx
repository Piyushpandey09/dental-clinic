import React, { useState, useRef , useEffect } from "react";
import { CalendarCheck, ShieldCheck, Star, Users, MapPin, Sparkles, Plus, HeartPulse, Activity, ChevronLeft,
  ChevronRight, Heart, Smile, Award, Clock, FileText
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import home3 from "../Assets/home3.png";
import home4 from "../Assets/home4.png";

const Home = () => {
  const banners = [home3, home4];

  const [active, setActive] = useState(null);
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  // --- NEW: Dental Services Data for the Auto-Slider ---
  const services = [
    { title: "Root Canal Treatment (RCT)", icon: "🦷" },
    { title: "Dental Implants", icon: "💎" },
    { title: "Braces & Invisible Aligners", icon: "✨" },
    { title: "Teeth Whitening & Cleaning", icon: "🌟" },
    { title: "Kids Dentistry", icon: "👶" },
    { title: "Smile Makeover", icon: "😊" },
    { title: "Painless Extractions", icon: "⚡" },
    { title: "Surgical Treatments", icon: "🦷"},
  ];

  // Infinite loop ke liye array ko duplicate kiya
  const duplicatedServices = [...services, ...services];

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment online by filling out the form with your preferred date and time, or call our clinic directly for quick assistance.",
    },
    {
      question: "What are your dental clinic timings?",
      answer: "Our clinic operates from 9:00 AM to 10:00 PM, Monday to Sunday, with a break between 2:00 PM and 5:00 PM.",
    },
    {
      question: "What modes of payment are acceptable?",
      answer: "We accept payments through Cash/Credit Card/ Debit Card/ Paytm/ PhonePe or via Airtel Money or any other UPI Payment methods.",
    },
    {
      question: "How frequently should I visit a dentist?",
      answer: "It is generally recommended to visit a dentist every 6 months for regular check-ups and cleanings to maintain good oral health.",
    },
    {
      question: "What are the safety measures adopted?",
      answer: "We follow strict sterilization and hygiene protocols.",
    },
  ];

  const features = [
    { icon: ShieldCheck, title: "Painless & Gentle Care", desc: "Especially for kids, anxious patients, and seniors using latest techniques." },
    { icon: Sparkles, title: "Advanced Technology", desc: "Digital scanners, laser dentistry, 3D imaging & invisible aligners." },
    { icon: Users, title: "Experienced Team", desc: "Led by Dr. Nirmal Sharma with years of expertise in cosmetic dentistry." },
    { icon: Star, title: "Transparent Pricing", desc: "No hidden costs. Honest treatment plans with complete clarity." },
    { icon: HeartPulse, title: "Personalized Care", desc: "Tailored dental solutions designed around your unique comfort and health goals." },
    { icon: Activity, title: "Emergency Assistance", desc: "Quick and responsive emergency dental care when you need it the most." },
    { icon: Heart, title: "Kids Dental Expert", desc: "Friendly and playful environment to keep your child comfortable and cavity-free." },
    { icon: Smile, title: "Cosmetic Makeovers", desc: "Smile designing, professional teeth whitening, and premium veneers for a perfect look." },
    { icon: Award, title: "Sterilization Guarantee", desc: "International class multi-tier sterilization protocol for absolute safety and hygiene." },
    { icon: Clock, title: "Flexible Timings", desc: "Convenient morning and evening hours to fit dental care easily into your busy schedule." },
    { icon: FileText, title: "Insurance & Financing", desc: "Easy documentation, insurance support, and flexible payment plans for major treatments." },
    { icon: MapPin, title: "Prime & Accessible", desc: "Centrally located clinic in Uttam Nagar with easy metro connectivity and parking space." }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
      
      if (direction === "right") setCurrentSlide(1);
      else setCurrentSlide(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]); // Fixed: Added dependency array here
    
  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section id="home" className="w-full pt-0 bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
        <img
           src={banners[currentBanner]}
           alt="Banner"
           className="w-full object-cover transition-all duration-700"
        />
        </motion.div>
      </section>    

      {/* ====================== AUTO-SLIDING SERVICES MARQUEE ====================== */}
      <section className="w-full bg-[#000000] px-50 py-4 overflow-hidden border-y border-blue-100 flex items-center">
        <motion.div 
          className="flex whitespace-nowrap gap-8 text-slate-800 font-medium"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Speed control: Is number ko badhaoge toh speed kam hogi, kam karoge toh tez chalega
            repeat: Infinity
          }}
        >
          {duplicatedServices.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 bg-[#3d0c11] px-5 py-2.5  shadow-sm border border-blue-100"
            >
              <span className="text-xl">{service.icon}</span>
              <span className="text-sm md:text-base font-semibold text-white">{service.title}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 ml-2"></span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ====================== INTEGRATED BLOCK ====================== */}
      <section className="py-20 w-full overflow-hidden bg-gradient-to-b from-gray-50 from-50% to-[#fad2e1] to-50%">  
        <div className="w-full px-15 md:px-12 lg:px-20">
          
          <div className="w-full bg-white rounded-none shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row items-stretch relative">
            
            {/* LEFT SIDE BLOCK */}
            <div className="w-full lg:w-[400px] bg-gradient-to-br from-teal-600 to-blue-700 text-white p-8 md:p-10 flex flex-col justify-between flex-shrink-0 relative z-10">
              <div className="space-y-8">
                <div>
                  <span className="text-teal-200 font-medium tracking-widest text-xs uppercase block mb-1">Quick Connect</span>
                  <h3 className="text-2xl font-bold tracking-tight uppercase">Nirmal Chaow Dental</h3>
                  <div className="h-1 w-16 bg-teal-300 mt-4" />
                </div>

                <div className="space-y-6 pt-2">
                  {/* Clinic Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <CalendarCheck className="text-teal-200" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-teal-100 font-medium uppercase tracking-wider">Clinic Hours</p>
                      <p className="font-semibold text-white text-sm mt-0.5">Mon – Sun : 10:00 AM – 8:00 PM</p>
                    </div>
                  </div>

                  {/* Call/WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <ShieldCheck className="text-teal-200" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-teal-100 font-medium uppercase tracking-wider">Call / WhatsApp</p>
                      <p className="font-semibold text-white text-sm mt-0.5">+91 78381 63988</p>
                    </div>
                  </div>

                  {/* Our Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <MapPin className="text-teal-200" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-teal-100 font-medium uppercase tracking-wider">Our Location</p>
                      <p className="font-semibold text-white text-sm mt-0.5">Uttam Nagar, New Delhi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 lg:pt-0">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full justify-center bg-white text-teal-700 py-3.5 font-bold flex items-center gap-2 shadow-md hover:bg-teal-50 transition-all text-sm uppercase tracking-wider"
                  >
                    Book Appointment
                    <CalendarCheck size={18} />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE BLOCK (Carousel) */}
            <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-between min-w-0 relative">
              
              <div className="w-full">
                <div className="mb-8">
                  <span className="text-teal-600 font-semibold tracking-widest text-xs uppercase block mb-1">Why Choose Us</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight uppercase">Exceptional Care, Every Smile</h2>
                </div>

                <div
                  ref={scrollRef}
                  className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-3 w-full"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="snap-start group bg-gray-50 border-t-4 border-gray-200 p-6 rounded-none flex-shrink-0 min-w-full sm:min-w-[calc(50%-8px)] md:min-w-[calc(33.333%-11px)] lg:min-w-[calc(25%-12px)] transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-teal-600"
                    >
                      <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-6 rounded-none transition-colors group-hover:bg-teal-600">
                        <feature.icon className="w-6 h-6" strokeWidth={2} />
                      </div>

                      <h4 className="text-sm font-bold text-gray-950 mb-2 uppercase tracking-tight group-hover:text-teal-600 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs font-normal leading-relaxed">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100 w-full">
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 transition-all duration-300 ${currentSlide === 0 ? "w-8 bg-teal-600" : "w-3 bg-gray-300"}`} />
                  <span className={`h-1.5 transition-all duration-300 ${currentSlide === 1 ? "w-8 bg-teal-600" : "w-3 bg-gray-300"}`} />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleScroll("left")}
                    className="w-10 h-10 bg-gray-900 text-white hover:bg-teal-600 flex items-center justify-center transition-all rounded-none"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => handleScroll("right")}
                    className="w-10 h-10 bg-gray-900 text-white hover:bg-teal-600 flex items-center justify-center transition-all rounded-none"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================== HOW TO REACH US ====================== */}
      <section className="relative w-full overflow-hidden bg-white">
        
        <div className="absolute top-0 inset-x-0 h-[395px] bg-[#f0efeb]" />
        <div className="absolute top-[395px] bottom-0 inset-x-0 bg-gray-50" />

        <div className="relative z-10 w-full pt-20 pb-0">
          
          <div className="mb-14 text-center max-w-2xl mx-auto px-6">
            <span className="text-xs font-semibold tracking-widest text-gray-900 uppercase block mb-2">VISIT OUR CLINIC</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight uppercase">How to Reach Us</h2>
            <div className="h-1 w-16 bg-teal-400 mx-auto mt-4" />
          </div>

          {/* THE 4 CARDS BLOCK */}
          <div className="px-4 md:px-10 lg:px-16 relative z-20 mb-[-96px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full shadow-2xl border border-gray-950">
              
              {/* Box 1: Address */}
              <div className="bg-gradient-to-b from-teal-900 to-teal-950 p-8 border-b-4 lg:border-b-0 lg:border-r border-teal-500 text-center flex flex-col items-center justify-center min-h-[240px] rounded-none transition-all duration-300 hover:bg-teal-900">
                <div className="w-12 h-12 bg-teal-400 text-teal-950 flex items-center justify-center mb-6 rounded-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h4 className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-2">Our Location</h4>
                <p className="text-white text-xs font-normal leading-relaxed uppercase tracking-tight">
                  D-86, Bindapur Rd, Pratap Garden, Block A, Uttam Nagar, New Delhi
                </p>
              </div>

              {/* Box 2: Phone */}
              <div className="bg-gradient-to-b from-cyan-950 to-slate-950 p-8 border-b-4 lg:border-b-0 lg:border-r border-cyan-500 text-center flex flex-col items-center justify-center min-h-[240px] rounded-none transition-all duration-300 hover:bg-cyan-900">
                <div className="w-12 h-12 bg-cyan-400 text-slate-950 flex items-center justify-center mb-6 rounded-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-2">Phone Support</h4>
                <p className="text-white text-sm font-semibold tracking-wide">
                  +91 78381 63988
                </p>
              </div>

              {/* Box 3: Metro */}
              <div className="bg-gradient-to-b from-emerald-950 to-slate-950 p-8 border-b-4 lg:border-b-0 lg:border-r border-emerald-500 text-center flex flex-col items-center justify-center min-h-[240px] rounded-none transition-all duration-300 hover:bg-emerald-900">
                <div className="w-12 h-12 bg-emerald-400 text-slate-950 flex items-center justify-center mb-6 rounded-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
                </div>
                <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-2">Metro Access</h4>
                <p className="text-white text-xs font-normal leading-relaxed uppercase tracking-tight">
                  Just a 5-minute walk from the nearest Uttam Nagar East station.
                </p>
              </div>

              {/* Box 4: Email */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 border-b-4 lg:border-b-0 border-slate-500 text-center flex flex-col items-center justify-center min-h-[240px] rounded-none transition-all duration-300 hover:bg-slate-800">
                <div className="w-12 h-12 bg-slate-400 text-slate-950 flex items-center justify-center mb-6 rounded-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Email Desk</h4>
                <p className="text-teal-400 text-xs font-semibold underline cursor-pointer hover:text-teal-300 transition-colors tracking-wide break-all">
                  nirmalchaow@dental.com
                </p>
              </div>
            </div>
          </div>

          {/* ULTRA-WIDE SPLIT DASHBOARD PANEL */}
          <div className="w-full bg-white border-t border-gray-200 grid lg:grid-cols-12 items-stretch min-h-[400px] relative z-10">
            
            {/* LEFT PANEL */}
            <div className="lg:col-span-5 p-8 md:p-14 lg:p-20 pt-36 md:pt-40 lg:pt-44 flex flex-col justify-between bg-white">
              <div className="space-y-8">
                <div>
                  <span className="text-teal-600 text-xs font-semibold tracking-widest block mb-1">SCHEDULE & TIMINGS</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight uppercase">When to Visit Us</h3>
                </div>

                <div className="space-y-4 max-w-md">
                  <div className="flex items-center gap-5 p-5 rounded-none bg-gray-50 border-l-4 border-teal-500 shadow-sm">
                    <span className="text-2xl text-teal-600">⚡</span>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Morning Session</p>
                      <p className="text-base font-bold text-gray-800">10:00 AM – 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 rounded-none bg-gray-50 border-l-4 border-cyan-500 shadow-sm">
                    <span className="text-2xl text-cyan-600">🌙</span>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Evening Session</p>
                      <p className="text-base font-bold text-gray-800">05:00 PM – 9:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="p-3 px-5 bg-teal-950 inline-block rounded-none">
                    <p className="text-[11px] font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 animate-ping" />
                      Open All 7 Days For Emergencies
                    </p>
                  </div>
                </div>

                <div className="pt-10 lg:pt-0 max-w-md">
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-gray-900 hover:bg-teal-700 text-white text-xs font-bold py-4 rounded-none shadow-md flex items-center justify-center gap-2 transition-all tracking-widest uppercase"
                  >
                    Get Live Directions on Map ➔
                  </motion.a>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL (MAP IMAGE) */}
            <div className="lg:col-span-7 relative min-h-[450px] lg:min-h-full bg-gray-100 overflow-hidden pt-24 lg:pt-0">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                alt="Clinic Location Map View"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 right-8 bg-gray-900 px-6 py-4 rounded-none shadow-2xl text-right border-r-4 border-teal-400">
                <p className="text-[9px] font-semibold text-teal-400 uppercase tracking-widest">Uttam Nagar Core</p>
                <p className="text-sm font-bold text-white uppercase tracking-tight">Nirmal Chaow Dental Care</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ====================== FAQ SECTION ====================== */}
      <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden w-full border-t border-gray-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-100/20 blur-3xl rounded-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-100/40 blur-3xl rounded-none" />

        <div className="relative w-full px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row items-stretch gap-16 z-10">
          
          {/* LEFT SIDE: FAQ ACCORDION */}
          <div className="flex-1 w-full flex flex-col justify-center">
            <span className="text-teal-600 font-semibold tracking-widest text-xs uppercase block mb-2">HAVE QUESTIONS?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 uppercase tracking-tight leading-none">
              Frequently Asked <br /> Questions
            </h2>

            <div className="space-y-4 w-full">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-none shadow-md border border-gray-200 overflow-hidden w-full transition-all duration-200">
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-all duration-200 rounded-none"
                  >
                    <span className="text-sm md:text-base font-bold text-gray-950 uppercase tracking-tight pr-8">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center flex-shrink-0 transition-colors">
                      <Plus
                        size={20}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${active === i ? "rotate-45 text-teal-400" : ""}`}
                      />
                    </div>
                  </button>

                  {active === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      className="overflow-hidden border-t border-gray-100 bg-gray-50/50"
                    >
                      <p className="px-6 py-5 text-gray-750 text-xs md:text-sm font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: PHOTO OVERLAY */}
          <div className="flex-1 flex items-center justify-center relative w-full lg:w-auto min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-teal-50 border border-gray-200 rounded-none scale-95 opacity-80" />
            
            <motion.div
              className="relative z-10 bg-white p-4 rounded-none border-4 border-gray-950 shadow-2xl w-full max-w-[480px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="overflow-hidden rounded-none relative w-full aspect-square lg:aspect-auto">
                <img src="/fqs.png" alt="Dental FAQ Illustration" className="w-full h-auto object-cover rounded-none" />
                
                <motion.div
                  className="absolute top-4 right-4 bg-gray-950 text-white shadow-xl px-5 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 z-20 border-b-4 border-teal-400"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  💡 Quick Answers
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;