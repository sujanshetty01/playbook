import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaLaptopCode, FaRocket } from 'react-icons/fa';

const phases = [
  {
    icon: FaBuilding,
    title: "Past: Foundations",
    subtitle: "Origins and Early Strategy",
    desc: "Centralized commercial operations focused on consolidation and operational efficiency.",
    points: [
      "Building strong operational processes",
      "Establishing network hubs and service delivery models",
      "Ensuring consistency and reliability across regions"
    ],
    color: "from-slate-500 to-gray-600",
    iconColor: "text-slate-500",
    bg: "bg-slate-50"
  },
  {
    icon: FaLaptopCode,
    title: "Present: Evolution & Execution",
    subtitle: "Digital Transformation",
    desc: "Adapting to the digital era with advanced tools and strengthening the brand identity of GCO India.",
    points: [
      "Streamlined and automated processes",
      "Scalable operations to support growing demands",
      "First network hub establishment & enhanced infrastructure"
    ],
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: FaRocket,
    title: "Future: Innovation & Growth",
    subtitle: "Technology-Driven Innovation",
    desc: "Adoption of AI, automation, and data analytics to develop intelligent systems.",
    points: [
      "Global leadership through AI-driven operations",
      "Continuous innovation culture",
      "Strengthening talent and expertise for future-ready ecosystem"
    ],
    color: "from-lumen-teal to-emerald-400",
    iconColor: "text-lumen-teal",
    bg: "bg-teal-50"
  }
];

const GCOIndia = () => {
  return (
    <section id="gco-india" className="py-24 relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-sm tracking-wide mb-6 uppercase"
          >
            <span>A Journey of Innovation & Execution</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#00363a] mb-6 tracking-tight"
          >
            Global Commercial Operations <span className="text-orange-500">(GCO) India</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            A transformation journey from centralized operations to a modern, innovation-driven organization. Highlighting how GCO India has evolved by adapting to digital changes, improving processes, and embracing future-ready technologies like AI.
          </motion.p>
        </div>

        {/* Journey Timeline */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${phase.color} rounded-t-3xl`}></div>
                <div className={`w-16 h-16 rounded-2xl ${phase.bg} flex items-center justify-center text-3xl mb-6 mx-auto ${phase.iconColor} shadow-inner`}>
                  <phase.icon />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-1">{phase.title}</h3>
                <h4 className={`text-sm font-bold text-center mb-4 ${phase.iconColor} tracking-widest uppercase`}>{phase.subtitle}</h4>
                <p className="text-gray-600 text-center text-sm mb-6 pb-6 border-b border-gray-100 flex-grow">
                  {phase.desc}
                </p>
                <ul className="space-y-3">
                  {phase.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${phase.color}`}></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Talent Contribution Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl max-w-5xl mx-auto"
        >
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">GCO India Talent Contribution</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              GCO India’s success is driven by a strong and diverse talent pool that supports innovation, digital transformation, and the execution of global strategies.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">Innovation</span>
              <span className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">Global Strategy Execution</span>
              <span className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">Continuous Improvement</span>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center relative bg-white/10 backdrop-blur-sm">
              <div className="text-center">
                <span className="block text-3xl font-black">100%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Commitment</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GCOIndia;
