import React from 'react';
import { motion } from 'framer-motion';

const visibleOutcomes = [
  { title: "CUSTOMER SUCCESS", desc: "Happy customers. Stronger loyalty." },
  { title: "FASTER RESOLUTION", desc: "Issues resolved quickly." },
  { title: "STRONGER COLLABORATION", desc: "Teams connected. Better together." },
  { title: "BUSINESS IMPACT", desc: "Better results. Greater value." }
];

const hiddenElements = [
  { title: "KNOWLEDGE CENTER", desc: "The source of policies, processes, training, and how-to guides.", align: "left" },
  { title: "iLINK", desc: "Connects information and people across the organization.", align: "left" },
  { title: "MIST", desc: "Submit requests, get solutions, track progress and collaborate.", align: "left" },
  { title: "PAC2PLD", desc: "Moves work through structured workflows from PAC1 to PLD.", align: "left" },
  { title: "RCA & OUTAGES", desc: "Detects issues, analyzes root causes and drives resolution.", align: "right" },
  { title: "TELEPRESENCE", desc: "Bridges distances and connects teams in real time for faster decisions.", align: "right" },
  { title: "ROSS", desc: "Empowers teams with operations information, news, training and resources.", align: "right" }
];

const CollaborationIceberg = () => {
  return (
    <section className="py-24 relative z-10 bg-gradient-to-b from-[#051125] to-[#01050f] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">THE COLLABORATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ICEBERG</span></h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto font-light">
            What people see is the outcome.<br/>
            <span className="text-cyan-400 font-medium">What makes it possible is our collaboration ecosystem.</span>
          </p>
        </div>

        {/* Top Tip of Iceberg (Visible) */}
        <div className="mb-20">
          <div className="inline-block bg-black/40 border border-cyan-500/30 px-6 py-2 rounded-full text-cyan-300 text-sm font-bold tracking-widest uppercase mb-8 mx-auto flex w-max">
            What People See (10% Visible Outcomes)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleOutcomes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 glass border-t-2 border-t-cyan-400 rounded-xl"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-cyan-200/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Water Line Divider */}
        <div className="relative h-px w-full bg-cyan-500/50 mb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#01050f] px-6 text-cyan-500 font-bold tracking-widest text-lg">
            THE HIDDEN 90%
          </div>
        </div>

        {/* Underwater (Hidden) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            {hiddenElements.filter(e => e.align === 'left').map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right"
              >
                <h4 className="text-lg font-bold text-cyan-300 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center (The Iceberg Graphic Representation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[3rem] text-center border-cyan-500/20 relative shadow-[0_0_50px_rgba(6,182,212,0.15)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent"></div>
            <h3 className="text-2xl font-black text-white mb-4 relative z-10">Working together behind every successful outcome.</h3>
            <p className="text-cyan-400 font-bold tracking-widest text-sm relative z-10 mb-8">
              PEOPLE • PLATFORMS • PROCESSES • KNOWLEDGE
            </p>
            <blockquote className="text-gray-300 italic relative z-10 border-t border-white/10 pt-6">
              "Alone, we can do so little; together we can do so much."
              <footer className="text-cyan-400 mt-2 font-semibold">— Helen Keller</footer>
            </blockquote>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            {hiddenElements.filter(e => e.align === 'right').map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h4 className="text-lg font-bold text-cyan-300 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Tags */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm font-bold text-cyan-500 tracking-wider">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500"></span>ALL EMPLOYEES CONNECTED</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500"></span>ONE ECOSYSTEM INFINITE IMPACT</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500"></span>STRONGER TOGETHER EVERY SINGLE DAY</div>
        </div>
        
      </div>
    </section>
  );
};

export default CollaborationIceberg;
