import React from "react";
import { Star, Award, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Piyush Pandey",
    role: "Software Engineer",
    text: "The treatment was smooth and comfortable. The doctor explained everything clearly and the results were great.",
    rating: 5,
    initials: "PP",
    treatment: "Smile Makeover",
    highlight: "Got my confidence back with natural-looking veneers",
  },
  {
    name: "Dr. Swati Yadav",
    role: "Doctor",
    text: "I was scared of dental treatment before, but here everything was painless. Very friendly staff and clean clinic.",
    rating: 3.5,
    initials: "SY",
    treatment: "Root Canal + Crown",
    highlight: "Completely painless experience, highly recommended",
  },
  {
    name: "Ananya Pandey",
    role: "Software Engineer",
    text: "Very happy with my smile now. The process was simple and the team guided me at every step.",
    rating: 5,
    initials: "AP",
    treatment: "Invisible Braces",
    highlight: "My smile transformation in just 8 months",
  },
  {
    name: "Rahul Mishra",
    role: "Entrepreneur",
    text: "Got my dental implants done here. Completely painless and the results look natural.",
    rating: 4.5,
    initials: "RM",
    treatment: "Dental Implants",
    highlight: "Now I can eat anything without hesitation",
  },
  {
    name: "Sneha Kapoor",
    role: "Student",
    text: "The braces treatment was smooth and the doctor explained everything patiently.",
    rating: 5,
    initials: "SK",
    treatment: "Ceramic Braces",
    highlight: "From shy smile to confident one",
  },
  {
    name: "Amit Verma",
    role: "IT Professional",
    text: "Clinic is very clean and modern. Staff is polite and treatment quality is excellent.",
    rating: 5,
    initials: "AV",
    treatment: "Teeth Whitening + Scaling",
    highlight: "My teeth are noticeably whiter in just one sitting",
  },
  {
    name: "Tajinder Chauhan",
    role: "Business Owner",
    text: "Excellent service and very professional team. My dental bridge looks completely natural.",
    rating: 5,
    initials: "TC",
    treatment: "Dental Bridge",
    highlight: "Best decision I made for my smile",
  },
  {
    name: "Devashish Mandal",
    role: "Marketing Executive",
    text: "Got my smile designed here. The results exceeded my expectations. Highly recommended!",
    rating: 3,
    initials: "DM",
    treatment: "Hollywood Smile Design",
    highlight: "Transformed my confidence completely",
  },
  {
    name: "Prabhat Singh",
    role: "Government Officer",
    text: "Very hygienic clinic with advanced equipment. Painless wisdom tooth removal.",
    rating: 5,
    initials: "PS",
    treatment: "Wisdom Tooth Removal",
    highlight: "Quick recovery and zero pain",
  },
  {
    name: "Manoj Tiwari",
    role: "Teacher",
    text: "My entire family gets treatment here. Dr. Nirmal is very experienced and caring.",
    rating: 5,
    initials: "MT",
    treatment: "Family Dental Care",
    highlight: "Trusted by our whole family",
  },
  {
    name: "Girjesh Shukla",
    role: "Retired Professor",
    text: "Got full dentures done. Very comfortable and natural looking. Thank you team!",
    rating: 4,
    initials: "GS",
    treatment: "Complete Dentures",
    highlight: "Now I can smile and eat confidently",
  },
  {
    name: "Arti Singh",
    role: "Housewife",
    text: "Scaling and polishing was done perfectly. My teeth feel so fresh and clean now.",
    rating: 5,
    initials: "AS",
    treatment: "Scaling & Polishing",
    highlight: "Teeth look brighter and healthier",
  },
 {
  name: "Neelam Pandey",
  role: "Housewife",
  text: "I had severe tooth sensitivity for months. The doctor explained everything clearly and treated it gently. Now I can enjoy cold drinks without any pain.",
  rating: 5,
  initials: "NP",
  treatment: "Root Canal Treatment",
  highlight: "Pain-free treatment",
},
{
  name: "Sourabh Kumar",
  role: "Software Engineer",
  text: "I got invisible aligners here. The entire process was smooth, and the staff kept me updated at every stage. Highly satisfied with the results.",
  rating: 5,
  initials: "SK",
  treatment: "Invisible Aligners",
  highlight: "Comfortable teeth alignment",
},
{
  name: "Anjali Verma",
  role: "Teacher",
  text: "The teeth cleaning and polishing session was excellent. The clinic was very hygienic, and my smile feels much brighter now.",
  rating: 5,
  initials: "AV",
  treatment: "Teeth Cleaning",
  highlight: "Fresh and brighter smile",
},
{
  name: "Rajesh Gupta",
  role: "Business Owner",
  text: "I got a dental implant after losing a tooth. The treatment was comfortable, and it feels just like my natural tooth.",
  rating: 5,
  initials: "RG",
  treatment: "Dental Implant",
  highlight: "Strong and natural feel",
},
{
  name: "Priya Singh",
  role: "College Student",
  text: "I visited for teeth whitening before my graduation. The results were amazing, and I received so many compliments on my smile.",
  rating: 5,
  initials: "PS",
  treatment: "Teeth Whitening",
  highlight: "Brighter confident smile",
},
{
  name: "Amit Yadav",
  role: "Bank Employee",
  text: "I had a wisdom tooth extraction. The procedure was quick, and I recovered much faster than I expected. Great experience overall.",
  rating: 5,
  initials: "AY",
  treatment: "Wisdom Tooth Extraction",
  highlight: "Quick recovery",
},
{
  name: "Pooja Mishra",
  role: "Homemaker",
  text: "The doctors were very patient with my child's dental treatment. They made the whole experience comfortable and stress-free.",
  rating: 4,
  initials: "PM",
  treatment: "Pediatric Dentistry",
  highlight: "Child-friendly care",
},
{
  name: "Vikas Tiwari",
  role: "Marketing Executive",
  text: "I received ceramic crowns here, and the color matched perfectly with my natural teeth. The finish is excellent.",
  rating: 4,
  initials: "VT",
  treatment: "Ceramic Crowns",
  highlight: "Perfect natural appearance",
},
];

const googleReviews = [
  { name: "Rohan Kapoor", text: "Excellent service and very hygienic clinic. Dr. Nirmal is highly skilled.", rating: 5 },
  { name: "Mehak Jain", text: "Best dentist in South Delhi. My smile makeover looks so natural!", rating: 5 },
  { name: "Sanjay Verma", text: "Very reasonable pricing and transparent treatment plan.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <>
      {/* ====================== HERO BANNER SECTION ====================== */}
      <section id="testimonials" className="relative w-full overflow-hidden bg-zinc-950 min-h-[460px] flex items-center border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
            alt="Happy smiling patients background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-amber-400 font-semibold uppercase tracking-widest text-xs block mb-3">
              PATIENT EXPERIENCES
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
              Smiles That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Speak For Us
              </span>
            </h1>
            <div className="h-1 w-20 bg-amber-500 mt-6 mb-8" />
            <p className="text-zinc-300 text-base md:text-xl max-w-2xl font-normal leading-relaxed">
              Real clinical records and reviews from patients who underwent structural treatments and achieved absolute oral function and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================== MAIN REVIEWS GRID ====================== */}
      <section className="w-full bg-white py-20 border-b border-gray-100">
        <div className="w-full px-4 md:px-12 lg:px-20">
          
          {/* Section Header */}
          <div className="mb-14 border-b border-gray-200 pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="text-amber-600 text-xs font-semibold tracking-widest block mb-1">CLINICAL VERIFIED CASES</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight uppercase">Patient Case Studies</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-md font-normal leading-relaxed">
              An archive of direct evaluations based on sterile surgical and aesthetic care standards.
            </p>
          </div>

          {/* Grid Layout Without Rounded Radius */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.03, 0.3) }}
                className="group bg-zinc-50 border border-gray-200 rounded-none p-6 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:border-zinc-950 transition-all duration-300"
              >
                <div>
                  {/* Top Stats/Stars Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} size={14} className="text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-gray-300 group-hover:text-amber-500 transition-colors" />
                  </div>

                  {/* Review Narrative */}
                  <p className="text-gray-700 text-xs md:text-sm font-normal leading-relaxed mb-6 italic">
                    “{t.text}”
                  </p>
                </div>

                <div>
                  {/* Embedded Treatment Indicator Card */}
                  <div className="mb-6 p-4 bg-zinc-100/80 border border-gray-200/60 rounded-none group-hover:bg-zinc-50 transition-colors">
                    <div className="flex items-center gap-2 text-zinc-900 text-xs font-bold uppercase tracking-tight">
                      <Award className="w-4 h-4 text-amber-600" strokeWidth={2} />
                      {t.treatment}
                    </div>
                    <p className="text-gray-500 text-[11px] mt-1.5 leading-tight font-normal">
                      {t.highlight}
                    </p>
                  </div>

                  {/* Operational Patient Profile */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 bg-zinc-950 text-white flex items-center justify-center font-bold text-xs rounded-none tracking-wider">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-gray-400 text-[11px] font-normal uppercase mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== GOOGLE EXTERNAL FEED SECTION ====================== */}
      <section className="w-full bg-zinc-50 py-20 border-b border-gray-200">
        <div className="w-full px-4 md:px-12 lg:px-20">
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 border-l-4 border-amber-500 pl-4">
            <span className="text-3xl">🎦</span>
            <div>
              <h3 className="text-2xl font-black text-gray-950 uppercase tracking-tight">Verified Google Feedback</h3>
              <p className="text-gray-500 text-xs font-normal">Direct external reviews synchronized via public business engine records.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {googleReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 border border-gray-200 rounded-none shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-normal text-xs leading-relaxed italic">“{review.text}”</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="font-bold text-gray-950 text-xs uppercase tracking-tight">{review.name}</p>
                  <span className="text-[10px] font-semibold text-gray-400 tracking-wider">GOOGLE USER</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
};

export default TestimonialsSection;