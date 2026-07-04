import { useState } from "react";
import { CalendarCheck, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  "General Check-up",
  "Teeth Cleaning & Polishing",
  "Root Canal Treatment",
  "Braces & Aligners",
  "Dental Implants",
  "Tooth Extraction",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Others",
];

const ContactAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.service) {
      alert("Please fill all required fields");
      return;
    }

    alert("Appointment Request Submitted Successfully ✅\n\nOur team will contact you within 2 hours.");
    
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="bg-white min-h-screen">

      {/* ====================== INDUSTRIAL HERO BANNER ====================== */}
      <div className="relative w-full overflow-hidden bg-zinc-950 min-h-[440px] flex items-center border-b border-zinc-900">
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
            <span className="text-amber-400 font-semibold uppercase tracking-with-widest text-xs block mb-3">
              SCHEDULING PORTAL
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
              Book Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Appointment
              </span>
            </h1>
            <div className="h-1 w-20 bg-amber-500 mt-6 mb-8" />
            <p className="text-zinc-300 text-base md:text-xl max-w-2xl font-normal leading-relaxed">
              Access sterile clinical treatments and advanced diagnostics. Complete your scheduling submission matrix or interface directly via live emergency protocols.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ====================== MAIN FUNCTIONAL CONTENT ====================== */}
      <div className="w-full px-4 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* 🔷 LEFT COLUMN: METRICS & SYSTEM DATA (5/12 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Imagery Core */}
            <div className="rounded-none border border-zinc-200 bg-zinc-100 p-2 overflow-hidden group">
              <img
                src="/dental1.png"
                alt="Dental Clinic Interior"
                className="w-full h-64 object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-300 rounded-none"
              />
            </div>

            {/* Operational Timing Module */}
            <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-none">
              <h3 className="text-lg font-black text-zinc-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                <Clock className="text-amber-500" size={20} />
                Clinical Matrix Timings
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-white border border-zinc-200 p-4 rounded-none">
                  <span className="font-bold text-zinc-900 uppercase tracking-tight">Morning Session</span>
                  <span className="text-zinc-600 font-medium font-mono">10:00 AM – 02:00 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white border border-zinc-200 p-4 rounded-none">
                  <span className="font-bold text-zinc-900 uppercase tracking-tight">EEvening Session</span>
                  <span className="text-zinc-600 font-medium font-mono">05:00 PM – 09:00 PM</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-500 font-normal">
                <span>AVAILABILITY PROFILE:</span>
                <span className="font-bold text-zinc-900 uppercase tracking-wider">OPEN 7 DAYS A WEEK</span>
              </div>
            </div>

            {/* Strategic Routing Panel (Contact Blocks) */}
            <div className="border border-zinc-200 p-8 space-y-4 rounded-none bg-white">
              <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">Location Coordinates</h4>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-none">
                <MapPin className="text-zinc-950 mt-0.5 flex-shrink-0" size={18} />
                <div className="text-xs">
                  <p className="font-bold text-zinc-950 uppercase tracking-tight">Nirmal Chaow Dental Care</p>
                  <p className="text-zinc-600 mt-1 leading-relaxed font-normal">
                    D-86, Bindapur Rd, Pratap Garden, Block A, Uttam Nagar, Bindapur, New Delhi, 110059
                  </p>
                  <p className="text-amber-600 font-bold uppercase text-[10px] tracking-wider mt-2">
                    [ Near Uttam Nagar Metro Station ]
                  </p>
                </div>
              </div>

              {/* Direct Voice Channel */}
              <div className="flex items-center gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-none">
                <Phone className="text-zinc-950 flex-shrink-0" size={18} />
                <div className="text-xs">
                  <p className="font-bold text-zinc-950 uppercase tracking-tight">Central Response Desk</p>
                  <p className="text-zinc-700 font-mono font-bold mt-0.5 text-sm">+91 78381 63988</p>
                </div>
              </div>
            </div>

            {/* Micro Validation Stat */}
            <div className="bg-zinc-950 text-white p-6 border border-zinc-900 rounded-none text-center">
              <span className="text-amber-400 text-xs font-mono font-bold tracking-widest block mb-1">
                SYSTEM CALIBRATION INDEX
              </span>
              <p className="text-[11px] text-zinc-400 uppercase tracking-wide font-normal">
                CRITICAL CARE STANDARDS OPERATING UNDER REGISTERED DELHI MEDICAL PARAMETERS
              </p>
            </div>
          </motion.div>

          {/* 🔷 RIGHT COLUMN: SCHEDULING INTERFACE + MAP (7/12 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Sharp Minimalist Form */}
            <div className="bg-white border-2 border-zinc-950 p-8 rounded-none">
              <div className="border-b border-zinc-200 pb-4 mb-6">
                <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight">Transmission Request</h3>
                <p className="text-zinc-500 text-xs font-normal mt-1">
                  Fill fields thoroughly. Target confirmation cycle is standard &le; 2 Hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5">Full Registered Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-xs text-zinc-900 font-normal focus:bg-white focus:border-zinc-950 focus:ring-0 outline-none transition-colors"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5">Email Protocol *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. name@domain.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-xs text-zinc-900 font-normal focus:bg-white focus:border-zinc-950 focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5">Contact Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-xs text-zinc-900 font-normal focus:bg-white focus:border-zinc-950 focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5">Departmental Allocation *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-xs text-zinc-900 font-normal focus:bg-white focus:border-zinc-950 focus:ring-0 outline-none transition-colors"
                    required
                  >
                    <option value="">-- SELECT TREATMENT SPECTRUM --</option>
                    {services.map((s, i) => (
                      <option key={i} value={s}>{s.toUpperCase()}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5">Clinical Notes or Preferred Slot (Optional)</label>
                  <textarea
                    name="message"
                    placeholder="Enter explicit dental history notes or requested appointment window specifications..."
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-xs text-zinc-900 font-normal focus:bg-white focus:border-zinc-950 focus:ring-0 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-950 hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-none flex items-center justify-center gap-2 border border-transparent transition-all active:scale-[0.99] mt-2"
                >
                  <CalendarCheck size={14} className="text-amber-400" />
                  Execute Appointment Request
                </button>
              </form>
            </div>

            {/* Industrial Embedded Maps Frame */}
            <div className="bg-white border border-zinc-200 rounded-none overflow-hidden">
              <div className="p-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
                <h4 className="font-bold text-xs text-zinc-950 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={14} className="text-amber-500" /> Live Geographical Node
                </h4>
                <span className="text-[10px] font-mono text-zinc-400">MAP_ID // 110059</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.0662578!3d28.6124895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05849a8fb8db%3A0xe44ee37556746953!2sNirmal%20chaow%20dental%20care!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="280"
                style={{ border: 0, filter: "grayscale(10%) contrast(105%)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nirmal Chaow Dental Care Clinic Map Coordinates"
              ></iframe>
            </div>

            {/* Action Bar Direct Bypass Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href="tel:+917838163988"
                className="bg-zinc-100 border border-zinc-300 text-zinc-900 hover:bg-zinc-950 hover:text-white py-3.5 text-center text-xs font-bold uppercase tracking-wider transition rounded-none flex items-center justify-center gap-2"
              >
                <Phone size={14} /> Immediate Voice Link
              </a>

              <a
                href="https://wa.me/917838163988"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-100 border border-zinc-300 text-zinc-900 hover:border-emerald-600 hover:bg-emerald-50 text-center text-xs font-bold uppercase tracking-wider transition rounded-none flex items-center justify-center gap-2"
              >
                <span>💬</span> WhatsApp Direct Feed
              </a>
            </div>

          </motion.div>
        </div>

        {/* Legal Disclaimer Subtext */}
        <div className="mt-20 max-w-5xl mx-auto border-t border-zinc-200 pt-8 text-center text-[11px] text-zinc-400 font-normal leading-relaxed">
          <p>
            * PRIVACY PROTOCOL & LEGAL DISCLAIMER: This framework represents an appointment scheduling queue transmission mechanism. Final operational times slots are checked against dynamic parameters inside the clinical registry. Treatments are initiated post face-to-face tactical evaluations by certified practitioners only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactAppointment;