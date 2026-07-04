import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, ShieldCheck, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedCategory] = useState("all");

  const beforeAfterImages = [
    {
      id: 1,
      category: "smile",
      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
      title: "Smile Makeover",
      description: "Porcelain Veneers + Comprehensive Teeth Whitening Plan"
    },
    {
      id: 2,
      category: "whitening",
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      after: "https://images.unsplash.com/photo-1513415277900-a62401e5054e?auto=format&fit=crop&w=600&q=80",
      title: "Teeth Whitening",
      description: "Advanced Professional Laser Bleaching Sequence"
    },
    {
      id: 3,
      category: "braces",
      before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      title: "Orthodontic Realignment",
      description: "Invisible Multi-Stage Clear Aligners"
    },
    {
      id: 4,
      category: "implant",
      before: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&w=600&q=80",
      after: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      title: "Dental Implant Surgery",
      description: "Biocompatible Titanium Single Tooth Replacement"
    },
  ];



  const filteredImages = selectedCategory === "all" 
    ? beforeAfterImages 
    : beforeAfterImages.filter(img => img.category === selectedCategory);

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* ====================== MATCHED INDUSTRIAL HERO BANNER ====================== */}
      <div className="relative w-full overflow-hidden bg-zinc-950 min-h-[440px] flex items-center border-b border-zinc-900">
        {/* Background Graphic Asset with Precision Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
            alt="Clinical Records Visual Matrix"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl"
          >
         
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
              Transformations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                & Before / After Logs
              </span>
            </h1>
            
            {/* The Signature Amber Accent Block */}
            <div className="h-1 w-20 bg-amber-500 mt-6 mb-8" />
            
            <p className="text-zinc-300 text-sm md:text-base max-w-2xl font-normal leading-relaxed">
              Explore authenticated, side-by-side case logs tracking structural transformations, micro-alignment corrections, and tone restorations executed under certified clinical dental protocols.
            </p>
          </motion.div>
        </div>
      </div>

   

      {/* ====================== GALLERY SHARP GRID ====================== */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-zinc-200 rounded-none p-4 flex flex-col justify-between hover:border-zinc-950 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image Grid Setup */}
                <div className="grid grid-cols-2 gap-1.5 bg-zinc-200 relative overflow-hidden p-0.5 border border-zinc-200">
                  
                  {/* BEFORE CONTAINER */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <img 
                      src={item.before} 
                      alt={`${item.title} Before`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-zinc-950 text-white text-[9px] font-mono font-bold tracking-widest px-2 py-1 border border-zinc-800">
                      BEFORE_LOG
                    </div>
                  </div>

                  {/* AFTER CONTAINER */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <img 
                      src={item.after} 
                      alt={`${item.title} After`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 right-3 bg-teal-500 text-zinc-950 text-[9px] font-mono font-bold tracking-widest px-2 py-1 border border-teal-400">
                      SUCCESS_POST
                    </div>
                  </div>

                  {/* Center Split Divider Indicator Icon */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-[1px] w-[2px] hidden md:flex flex-col items-center justify-center pointer-events-none z-10">
                    <div className="w-6 h-6 rounded-none bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white">
                      <Sparkles className="w-3 h-3 text-teal-400" />
                    </div>
                  </div>
                </div>

                {/* Text Metadata Content Area */}
                <div className="pt-5 pb-2 px-1 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-teal-600 font-bold uppercase tracking-widest">
                      </span>
                    </div>
                    <h3 className="font-black text-lg md:text-xl text-zinc-950 uppercase tracking-tight group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-xs font-normal leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-zinc-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] font-mono uppercase tracking-widest">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" /> Patient Authenticated
                    </div>
                    <span className="text-zinc-950 text-xs font-bold uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Inspect Specs <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <div className="w-full text-center py-24 border border-dashed border-zinc-200">
            <Eye className="w-8 h-8 text-zinc-400 mx-auto mb-3" strokeWidth={1} />
            <p className="text-zinc-500 text-xs uppercase font-mono tracking-widest">
              No matching archival logs available for filter sequence.
            </p>
          </div>
        )}
      </section>

      {/* ====================== FOOTNOTE DISCLAIMER BLOCK ====================== */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <div className="bg-zinc-950 p-6 md:p-8 border-l-4 border-amber-500 text-left relative overflow-hidden">
          <p className="text-zinc-400 text-xs md:text-sm font-normal leading-relaxed max-w-5xl">
            <span className="text-white font-bold underline decoration-amber-500/50">Clinical Record Protocol:</span> All transformation data displayed above represents non-augmented clinical reality. Individual structural anomalies, bone density configurations, and alignment speeds vary strictly based on real physiological response metrics.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Gallery;