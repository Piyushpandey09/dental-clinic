import React, { useState } from "react";
import { AlignCenter, Smile, Sparkles, Wrench, Heart, Zap, Clock, Scissors, Eye, Shield, Brush, Activity, Gem, UserCheck, Award, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Import your local images from src/Assets
import ToothFillingImg from "../Assets/ToothFilling.png";
import Rct from "../Assets/RCT.png";
import ToothExtraction from "../Assets/ToothExtraction.png";
import DentalImplants from "../Assets/DentalImplants.png";
import TeethBleaching from "../Assets/TeethBleaching.png";
import WisdomToothExtraction from "../Assets/WisdomToothExtraction.png";
import SmileDesigning from "../Assets/SmileDesigning.png";
import Dentures from "../Assets/Dentures.png";
import CleaningPolishing from "../Assets/CleaningPolishing.png";
import ToothJewels from "../Assets/ToothJewels.png";
import OrthodonticsTreatment from "../Assets/OrthodonticsTreatment.png";
import SurgicalTreatments from "../Assets/SurgicalTreatments.png";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Routine dental check-ups, deep scaling, and professional teeth cleaning.\nComplete preventive oral health protocols to keep family smiles healthy."
  },
  {
    icon: Sparkles,     
    title: "Cosmetic Dentistry",
    description: "Advanced clinical laser teeth whitening and premium porcelain veneers.\nCustom smile makeover treatments tailored to enhance facial aesthetics."
  },
  {
    icon: AlignCenter,
    title: "Orthodontics",
    description: "Modern metal braces, subtle ceramic appliances, and invisible aligners.\nComprehensive bite correction procedures for kids, teens, and adults."
  },
  {
    icon: Wrench,
    title: "Restorative Care",
    description: "Biocompatible zirconia crowns, bridges, and durable composite fillings.\nFull structural tooth rehabilitation to restore natural chewing function."
  },
  {
    icon: Activity,
    title: "Root Canal Therapy",
    description: "Painless laser-assisted root canals and infected pulp removal.\nImmediate tooth-saving procedures under local microscopic guidance."
  },
   {
    icon: Activity,
    title: "Root Canal Therapy",
    description: "Painless laser-assisted root canals and infected pulp removal.\nImmediate tooth-saving procedures under local microscopic guidance."
  },
  {
    icon: ShieldCheck,
    title: "Pediatric Dentistry",
    description: "Specialized gentle dental care and cavity-prevention sealant applications.\nFun and stress-free oral check-ups designed specifically for kids."
  },
  {
    icon: Heart,
    title: "Gum Care & Periodontics",
    description: "Clinical treatment for bleeding gums, recession, and loose teeth.\nAdvanced flap surgery and ultrasonic root planing for healthy foundations."
  },
  {
    icon: UserCheck,
    title: "Oral & Maxillofacial Surgery",
    description: "Surgical wisdom tooth extractions and corrective jaw alignment procedures.\nSafe minor oral biopsies and advanced clinical trauma management."
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Professional topical fluoride applications and custom nighttime mouthguards.\nEarly diagnostic screenings to intercept dental issues before they develop."
  },
  {
    icon: Eye,
    title: "Advanced Diagnostics",
    description: "High-resolution digital OPG x-rays and ultra-precise intraoral scans.\nDetailed modern treatment planning with minimal radiation exposure."
  },
  {
    icon: Clock,
    title: "Emergency Dentistry",
    description: "Immediate relief protocols for acute dental pain and broken teeth.\nSame-day priority bookings for urgent trauma or swelling control."
  },
  {
    icon: Award,
    title: "Geriatric Dental Care",
    description: "Custom lightweight complete dentures and specialized dry mouth therapies.\nGentle age-appropriate oral treatments prioritizing comfort and utility."
  }
];

const newServices = [
  { title: "Tooth Filling", shortDesc: "Composite & aesthetic fillings", image: ToothFillingImg, description: "Healthy teeth are essential not just for your smile but also for your comfort, confidence and overall well-being.", icon: Gem },
  { title: "Root Canal Treatment (RCT)", shortDesc: "Painless root canal with advanced technology", image: Rct, description: "A simple cavity or mild toothache may seem harmless at first, but when left untreated, it can progress deeper...", icon: Heart },
  { title: "Tooth Extraction", shortDesc: "Simple & surgical extractions", image: ToothExtraction, description: "Sometimes, saving a tooth is not possible. When a tooth is severely damaged, decayed, or impacted, removal becomes necessary.", icon: Scissors },
  { title: "Dental Implants", shortDesc: "Permanent tooth replacement with implants", image: DentalImplants, description: "Get strong, natural-looking teeth with our premium dental implants.", icon: Zap },
  { title: "Teeth Bleaching", shortDesc: "Advanced teeth whitening", image: TeethBleaching, description: "Get a dazzling white smile in just one sitting with our safe bleaching treatment.", icon: Sparkles },
  { title: "Wisdom Tooth Extraction", shortDesc: "Safe surgical removal of wisdom teeth", image: WisdomToothExtraction, description: "Painless wisdom tooth removal by experienced specialists.", icon: Scissors },
  { title: "Smile Designing", shortDesc: "Complete smile makeover", image: SmileDesigning, description: "Get your dream smile with our personalized smile designing treatment.", icon: Award },
  { title: "Dentures", shortDesc: "Complete & partial dentures", image: Dentures, description: "Restore your smile and chewing ability with comfortable, well-fitting dentures.", icon: UserCheck },
  { title: "Cleaning & Polishing", shortDesc: "Professional scaling and polishing", image: CleaningPolishing, description: "Remove stains and plaque for a brighter, healthier smile.", icon: Brush },
  { title: "Tooth Jewels", shortDesc: "Add sparkle to your smile", image: ToothJewels, description: "Decorate your smile with safe and trendy tooth jewels.", icon: Gem },
  { title: "Orthodontics Treatment", shortDesc: "Metal braces, ceramic braces & clear aligners", image: OrthodonticsTreatment, description: "Straighten your teeth with metal braces, ceramic braces or invisible aligners.", icon: AlignCenter },
  { title: "Surgical Treatments", shortDesc: "Minor oral surgeries", image: SurgicalTreatments, description: "Expert surgical care with modern techniques and patient comfort.", icon: ShieldCheck },
];

const loopServices = [...services, ...services];

const ServicesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // 3 dynamic vertical grid pairs across layout columns (Shows 6 cards cleanly per page view)
  const itemsPerPage = 3; 
  const totalPages = Math.ceil(loopServices.length / (itemsPerPage * 2));

  const startIndex = currentPage * itemsPerPage;
  const displayPairs = Array.from({ length: itemsPerPage }).map((_, colIdx) => {
    const targetColIdx = startIndex + colIdx;
    return loopServices.slice(targetColIdx * 2, targetColIdx * 2 + 2);
  }).filter(pair => pair.length > 0);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* ====================== HERO BANNER SECTION ====================== */}
      <section id="services" className="relative w-full overflow-hidden bg-gray-950 min-h-[460px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
            alt="Nirmal Chaow Dental Surgery Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-teal-400 font-semibold uppercase tracking-widest text-xs block mb-3">
              WHAT WE OFFER
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
              Expert Dental Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                For Every Smile
              </span>
            </h1>
            <div className="h-1 w-20 bg-teal-400 mt-6 mb-8" />
            <p className="text-gray-300 text-base md:text-xl max-w-2xl font-normal leading-relaxed">
              From routine maintenance to complex surgical restorations, we execute precise, modern dentistry tailored strictly to your individual comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================== 2-ROW SPLIT BACKGROUND SLIDER (PAGE-BY-PAGE SYNC) ====================== */}
      <section className="relative w-full bg-white group/section select-none">
        
        {/* TOP HALF CONTAINER (White Background Content Area) */}
        <div className="w-full px-6 md:px-12 lg:px-20 pt-16 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-zinc-200 pb-10">
            <div>
              <h2 className="text-3xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight">Exceptional Care, Every Smile</h2>
            </div>
            
            {/* INDUSTRIAL NAVIGATION CONTROLS */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className={`w-10 h-10 border flex items-center justify-center transition-colors rounded-none shadow-md ${
                  currentPage === 0 
                    ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed" 
                    : "bg-zinc-950 text-white border-zinc-900 hover:bg-teal-500 hover:text-zinc-950"
                }`}
                aria-label="Previous Slots"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className={`w-10 h-10 border flex items-center justify-center transition-colors rounded-none shadow-md ${
                  currentPage === totalPages - 1 
                    ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed" 
                    : "bg-zinc-950 text-white border-zinc-900 hover:bg-teal-500 hover:text-zinc-950"
                }`}
                aria-label="Next Slots"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* THE HALF-BACKGROUND SPLIT ARCHITECTURE */}
        <div className="relative w-full bg-zinc-950 border-t border-zinc-900 pt-0 pb-16">
          
          {/* Slider Track Wrapper - Negative margin triggers the perfect vertical split float */}
          <div className="relative -mt-24 z-20 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-12 lg:px-20">
              {displayPairs.map((pair, colIdx) => {
                return (
                  <div key={colIdx} className="flex flex-col gap-4 w-full">
                    {pair.map((service, pairIdx) => {
                      const globalIdx = (startIndex + colIdx) * 2 + pairIdx;
                      const Icon = service.icon;

                      return (
                        <div
                          key={globalIdx}
                          className="relative w-full p-6 bg-white border border-zinc-200 text-zinc-900 shadow-md hover:border-zinc-400 hover:shadow-lg transition-all duration-300 rounded-none h-[180px] flex items-start gap-4 text-left"
                        >
                          {/* Left Solid Square Icon Box */}
                          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-zinc-950 border border-zinc-900 text-teal-400 rounded-none">
                            <Icon className="w-5 h-5" strokeWidth={1.5} />
                          </div>

                          {/* Right Content Space */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm md:text-base font-black uppercase tracking-tight mb-1 text-zinc-950 line-clamp-1">
                              {service.title}
                            </h3>
                            <p className="text-[11px] font-normal leading-relaxed text-zinc-500 line-clamp-4">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== MAIN CLINICAL SERVICES GRID ====================== */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-4 md:px-12 lg:px-20">
          
          {/* Industrial Clean Header Block */}
          <div className="mb-14 border-b border-gray-200 pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="text-teal-600 text-xs font-semibold tracking-widest block mb-1">OUR FULL SPECTRUM EXPERTISE</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight uppercase">Complete Clinical Range</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-md font-normal leading-relaxed">
              Advanced dental operational treatments backed by industry-standard clinical diagnostic equipment and sterile execution.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {newServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.04, 0.3) }}
                  className="group bg-gray-50 border border-gray-200 rounded-none overflow-hidden flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:border-gray-950 transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 border-b border-gray-200 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 w-9 h-9 bg-gray-950/90 backdrop-blur text-white flex items-center justify-center border border-white/10">
                      <Icon className="w-4 h-4 text-teal-400" />
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between text-left">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-950 uppercase tracking-tight line-clamp-1 group-hover:text-teal-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-teal-600 text-[11px] font-bold uppercase tracking-wider mt-0.5 line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                    <p className="text-gray-600 text-xs font-normal leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Footnote Panel */}
          <div className="mt-16 bg-gray-950 p-8 text-left border-l-4 border-teal-500 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-10 translate-y-10">
              <Smile className="w-64 h-64 text-white" />
            </div>
            <p className="text-gray-300 text-xs md:text-sm max-w-4xl font-normal leading-relaxed relative z-10">
              We provide <span className="font-bold text-white border-b border-teal-400/50">complete multi-disciplinary dental care</span> — including diagnostic check-ups, aesthetic dental surgeries, and sterile therapeutic operations. Gentle and clinical comfort protocols are uniformly maintained for patients of all age clusters, explicitly including <span className="text-white font-bold">children, geriatric elderly demographics, and intensive women's oral healthcare</span>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesSection;