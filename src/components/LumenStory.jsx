import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaGlobeAmericas, FaMicrochip, FaLightbulb } from 'react-icons/fa';

const storyPoints = [
  {
    title: "Representing a Complete Transformation",
    desc: "More than a rebrand, it symbolizes a profound evolution from a traditional, decentralized telecommunications legacy (pre-1984 AT&T divestiture and diverse non-LEC origins) into a unified, synergistic technology platform.",
    icon: FaGlobeAmericas,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "A Unification of Capabilities",
    desc: "It embodies the strategic acquisition and synthesis of advanced technologies and assets (e.g., CenturyLink, CenturyTel, EMBARQ, Qwest, and Level 3 Communications).",
    icon: FaSearch,
    color: "from-cyan-500 to-teal-500"
  },
  {
    title: "The Path to Intelligent Digital Connectivity",
    desc: "It charts a journey from providing voice connectivity to building high-speed data networks, edge computing, cloud-native services, and AI-powered infrastructure, culminating in an intelligent digital ecosystem.",
    icon: FaMicrochip,
    color: "from-teal-500 to-green-500"
  },
  {
    title: "A Commitment to Innovation",
    desc: "The name \"Lumen\" (meaning light) itself represents illumination, speed, and intelligence, signaling the company's future focus on being a foundational engine for AI and advanced digital applications.",
    icon: FaLightbulb,
    color: "from-yellow-400 to-orange-500"
  }
];

const LumenStory = () => {
  return (
    <section id="lumen-story" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 right-0 opacity-10">
              {/* Paper airplane graphic approximation */}
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="#00b0c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#00b0c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-sm font-bold tracking-widest text-lumen-teal uppercase mb-3">Task 4 Playbook: Search Hero</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#00363a] mb-6 tracking-tight">The Core Meaning of the <span className="text-lumen-teal">Lumen Story</span></h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search smart and uncover the meaning. What does the "Lumen Story" represent?
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {storyPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${point.color}`}></div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} text-white flex items-center justify-center text-xl mb-6 shadow-lg`}>
                  <point.icon />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{point.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pro Tip & Footer */}
          <div className="bg-[#00363a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-lumen-teal/20 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
              <div className="bg-orange-500 text-white rounded-full p-4 flex-shrink-0 shadow-lg shadow-orange-500/30">
                <FaSearch className="text-2xl" />
              </div>
              <div>
                <h4 className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-2">Pro Tip</h4>
                <p className="text-xl font-medium mb-8">
                  Don't just search. Interpret. Look for the transformation journey. Look at the big picture.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300 border-t border-white/10 pt-6">
                  <div>
                    <span className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Submission Format</span>
                    <span className="font-medium text-white">Unified Synthesis</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Source Data Used</span>
                    <span className="font-medium text-white">Inside Lumen / Company Overview (Historical Timeline & Acquisitions Analysis)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LumenStory;
