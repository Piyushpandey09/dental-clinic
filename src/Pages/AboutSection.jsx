import React, { useState } from "react";
import { Award,  Users,  GraduationCap, 
  Heart,  Clock, UserCheck, Sparkles, Zap,  ShieldCheck,  Stethoscope,  Calendar,ChevronLeft, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

// Correct Image Import
import Nirmal from "../Assets/Nirmal.png";
import doc1 from "../Assets/doc1.png"; 

const AboutSection = () => {
  const [currentSet, setCurrentSet] = useState(0); // 0 for first 3 cards, 1 for next 3 cards

  const trustCards = [
    { icon: Heart, title: "Gentle & Anxiety-Free Care", desc: "Specially designed protocols and soft-touch delivery loved by kids, nervous patients, and seniors alike." },
    { icon: Sparkles, title: "Advanced Tech Integration", desc: "Digital smile design dashboards, 3D imaging, precision dental lasers, and state-of-the-art invisible aligners." },
    { icon: ShieldCheck, title: "Absolute Transparency", desc: "No dynamic or hidden costs. Transparent diagnoses, honest medical evaluations, and ethical pricing frameworks only." },
    { icon: Clock, title: "Zero Latency Scheduling", desc: "Optimized surgical rotation slots that ensure you are attended to within ±5 minutes of your timestamp." },
    { icon: UserCheck, title: "Certified Medical Board", desc: "Every structural intervention is mapped by resident implantologists holding accredited industrial records." },
    { icon: Zap, title: "Autoclave Sterilization", desc: "Multi-tier chemical encapsulation logs verifying 100% bio-safe execution tracks for every patient matrix." }
  ];

  // Filters cards based on pagination (3 cards per screen view)
  const displayedCards = trustCards.slice(currentSet * 3, (currentSet + 1) * 3);

  const StatCard = ({ icon: Icon, number, label }) => (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-gray-50 border-t-4 border-gray-200 p-6 rounded-none flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-teal-600 group"
    >
      <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-6 rounded-none transition-colors group-hover:bg-teal-600">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <div>
        <div className="text-4xl font-extrabold text-gray-950 mb-1 tracking-tight group-hover:text-teal-600 transition-colors">{number}</div>
        <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* ====================== HERO BANNER SECTION ====================== */}
      <section id="about" className="relative w-full overflow-hidden bg-gray-950 min-h-[460px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            alt="Nirmal Chaow Dental Surgery Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-teal-400 font-semibold uppercase tracking-widest text-xs block mb-3">
              OUR STORY & PHILOSOPHY
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
              Where Science <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                Meets Warmth
              </span>
            </h1>
            <div className="h-1 w-20 bg-teal-400 mt-6 mb-8" />
            <p className="text-gray-300 text-base md:text-xl max-w-2xl font-normal leading-relaxed">
              At <span className="font-bold text-white border-b border-teal-400">Nirmal Chaow Dental Care</span>, 
              we don’t just fix teeth — we restore confidence, comfort, and joy in every smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================== INTEGRATED CORE STORY & STATS ====================== */}
      <section id="our-story" className="py-20 w-full overflow-hidden bg-gradient-to-b from-white from-50% to-red-100 to-50% scroll-mt-20">
        <div className="w-full px-4 md:px-12 lg:px-20">
          
          <div className="w-full bg-white rounded-none shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row items-stretch relative">
            
            {/* LEFT STORY BLOCK */}
            <div className="w-full lg:w-[440px] bg-gradient-to-br from-teal-800 to-slate-900 text-white p-8 md:p-12 flex flex-col justify-between flex-shrink-0 relative z-10">
              <div className="space-y-8">
                <div>
                  <span className="text-teal-300 font-medium tracking-widest text-xs uppercase block mb-1">Established 2026</span>
                  <h3 className="text-2xl font-bold tracking-tight uppercase">The Dental Mission</h3>
                  <div className="h-1 w-16 bg-teal-400 mt-4" />
                </div>

                <div className="space-y-6 pt-2 text-xs md:text-sm font-normal text-teal-100/90 leading-relaxed">
                  <p>
                    Founded in the heart of Delhi, Nirmal Chaow Dental Care was born from a simple belief: 
                    <span className="font-bold text-teal-300 block mt-1">Dental care should feel like care, not a clinical procedure.</span>
                  </p>
                  <p>
    Our experienced dentists use advanced technology and proven techniques to provide safe, effective, and personalized treatment for patients of all ages.
  </p>

  <p>
    From routine dental check-ups and cleanings to cosmetic and restorative procedures, we focus on delivering exceptional care with comfort and precision.
  </p>

  <p>
    Your oral health, comfort, and confidence are our top priorities. We are committed to helping you achieve a healthy, beautiful smile that lasts a lifetime.
  </p>

  <p>
  Give us one chance to serve you and experience the difference. Your smile is our responsibility, and our dedicated team is available 24×7 to support you whenever you need dental care.
</p>
                </div>
              </div>

              <div className="pt-10 border-t border-teal-700/50 mt-8 lg:mt-0">
                <p className="font-medium text-teal-300 italic text-sm">
                  “Your smile is our responsibility. Your comfort is our absolute priority.”
                </p>
              </div>
            </div>

            {/* RIGHT STATS & METRICS GRID */}
            <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-between min-w-0 relative">
              <div className="w-full">
                <div className="mb-10">
                  <span className="text-teal-600 font-semibold tracking-widest text-xs uppercase block mb-1">BY THE NUMBERS</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight uppercase">Clinical Excellence</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  <StatCard icon={Award} number="3+" label="Years of Excellence" />
                  <StatCard icon={Users} number="500+" label="Smiles Transformed" />
                  <StatCard icon={GraduationCap} number="3+" label="Specialist Dentists" />
                  <StatCard icon={Clock} number="24×7" label="Emergency Support" />
                </div>
              </div>

              <div className="mt-8 relative w-full h-[280px] md:h-[380px] overflow-hidden border border-gray-200">
  <img 
    src={doc1} 
    alt="Nirmal Chaow Dental Clinic Interior"
    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-102"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
  <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
    <div>
      <p className="uppercase text-teal-400 text-[10px] tracking-widest font-semibold">Sanctuary Environment</p>
      <p className="text-base md:text-lg font-bold uppercase tracking-tight mt-0.5">A Modern Oasis For Oral Health</p>
    </div>
    <span className="hidden sm:inline-block bg-teal-600 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">Delhi • 2026</span>
  </div>
</div>
            </div>

          </div>

        </div>
      </section>

{/* ====================== WHY TRUST US (PAGINATED 3-CARD MATRIX WITH ACTIVE SIDEBARS) ====================== */}
{/* ====================== WHY TRUST US (3 CARDS SLIDER - MINIMAL SIDEBARS) ====================== */}
      <section className="w-full relative overflow-hidden select-none">
        {/* Half Background Split Layer - Touches exactly at the grid's bottom block */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-white pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-zinc-950 pointer-events-none z-0" />

        <div className="relative z-10 w-full px-4 md:px-12 lg:px-20 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* LEFT CLICKABLE SIDEBAR */}
          <button 
            onClick={() => setCurrentSet(0)} 
            disabled={currentSet === 0}
            className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center p-2 text-center border-t border-b border-l border-zinc-200 bg-transparent"
          >
            <div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
              currentSet === 0 
                ? "bg-zinc-100 text-zinc-300 cursor-not-allowed" 
                : "bg-zinc-900 text-white hover:bg-teal-600 group"
            }`}>
              <ChevronLeft className={`w-5 h-5 transition-transform ${currentSet !== 0 && "group-hover:-translate-x-0.5"}`} />
            </div>
          </button>

          {/* CENTER ROW: 3 DYNAMIC CARDS DISPLAY PANEL */}
          <div className="col-span-1 lg:col-span-10 flex flex-col">
            
            {/* SECTION HEADER BLOCK */}
            <div className="w-full p-6 md:p-8 bg-white border-t border-r border-l lg:border-l-0 border-zinc-200 text-left">
              <h3 className="text-2xl md:text-3xl font-black text-gray-950 uppercase tracking-tight flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-teal-600" /> Why Families Trust Us
              </h3>
            </div>

            {/* ACTIVE GRID MAPPING (HALKA RED BACKGROUND CARDS) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-950 bg-zinc-900 shadow-2xl overflow-hidden">
              {displayedCards.map((item, index) => {
                const IconComponent = item.icon;
                const globalIndex = currentSet * 3 + index + 1;
                return (
                  <div 
                    key={globalIndex} 
                    className="bg-red-950/40 p-6 md:p-8 border border-red-900/50 text-left flex flex-col justify-between min-h-[260px] transition-all duration-300 group hover:bg-red-900/30"
                  >
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center mb-6 rounded-none group-hover:border-teal-500 group-hover:text-teal-400 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-black uppercase tracking-wider mb-2 group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-zinc-300 text-xs font-normal leading-relaxed tracking-tight group-hover:text-white transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT CLICKABLE SIDEBAR */}
          <button 
            onClick={() => setCurrentSet(1)} 
            disabled={currentSet === 1}
            className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center p-2 text-center border-t border-b border-r border-zinc-200 bg-transparent"
          >
            <div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
              currentSet === 1 
                ? "bg-zinc-100 text-zinc-300 cursor-not-allowed" 
                : "bg-zinc-900 text-white hover:bg-teal-600 group"
            }`}>
              <ChevronRight className={`w-5 h-5 transition-transform ${currentSet !== 1 && "group-hover:translate-x-0.5"}`} />
            </div>
          </button>

        </div>
      </section>
      {/* ====================== MEET THE DOCTOR SPLIT PANEL ====================== */}
      <section id="meet-doctor" className="w-full bg-white border-b border-gray-200 grid lg:grid-cols-12 items-stretch min-h-[550px] scroll-mt-20">
        
        {/* LEFT MEDICAL PROFILE TEXT */}
        <div className="lg:col-span-7 p-8 md:p-14 lg:p-20 flex flex-col justify-between bg-white order-2 lg:order-1">
          <div className="space-y-8">
            <div>
              <span className="text-teal-600 text-xs font-semibold tracking-widest block mb-1">FOUNDER & PRINCIPAL DENTIST</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight uppercase">Dr. Nirmal Sharma</h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">BDS • Cosmetic & Aesthetic Specialist</p>
              <div className="h-1 w-16 bg-teal-500 mt-4" />
            </div>

            <div className="space-y-4 text-gray-600 text-sm font-normal leading-relaxed max-w-2xl">
              <p>
                Dr. Nirmal Sharma is a highly skilled and compassionate clinician specializing in 
                <span className="font-bold text-gray-950"> cosmetic dentistry, dramatic smile makeovers, and premium family care.</span>
              </p>
              <p>
                With her warm personality and precise surgical skill execution, she has helped transform hundreds of smiles across Delhi. She firmly operates under the principle that dental treatments should be seamless, transparent, and completely pain-free.
              </p>
            </div>

            {/* CLINICAL EXPERTISE BULLETS */}
            <div className="pt-4">
              <h4 className="font-bold text-xs text-gray-950 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-teal-600" /> Credentials & Core Focus
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-xs font-medium text-gray-700">
                {[
                  "BDS from NIMS University, Rajasthan",
                  "Advanced Aesthetic Dentistry Certification",
                  "Digital Smile Design Master Specialist",
                  "Laser Dentistry & Painless RCT Expert",
                  "Pediatric & Child Care Specialist",
                  "Certified Invisalign Orthodontist Provider"
                ].map((qual, i) => (
                  <div key={i} className="flex gap-2.5 items-center">
                    <div className="w-1.5 h-1.5 bg-teal-500 flex-shrink-0" />
                    <span>{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QUOTE BLOCK */}
            <div className="italic text-xs md:text-sm leading-relaxed text-gray-700 border-l-4 border-gray-900 pl-4 bg-gray-50 py-3 pr-2">
              “A beautiful smile can change how the world sees you — and how you see yourself. My goal is to make that transformation comfortable, natural, and long-lasting.”
            </div>
          </div>

          <div className="pt-10 max-w-sm">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 hover:bg-teal-700 text-white text-xs font-bold py-4 rounded-none shadow-md flex items-center justify-center gap-2 transition-all tracking-widest uppercase"
            >
              <Calendar className="w-4 h-4" /> Book Consultation Panel ➔
            </motion.button>
          </div>
        </div>

        {/* RIGHT MEDICAL HERO PHOTO IMAGE */}
        <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-full bg-gray-100 overflow-hidden order-1 lg:order-2">
          <img 
            src={Nirmal}
            alt="Dr. Nirmal Sharma Portrait"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 bg-gray-900 px-6 py-4 rounded-none shadow-2xl text-left border-l-4 border-teal-400">
            <p className="text-[9px] font-semibold text-teal-400 uppercase tracking-widest">FOUNDER & PRINCIPAL DENTIST</p>
            <p className="text-sm font-bold text-white uppercase tracking-tight">Dr. Nirmal Sharma (BDS)</p>
          </div>
        </div>

      </section>
    </>
  );
};

export default AboutSection;