import React from 'react';
import { motion } from 'framer-motion';
import { FaPodcast, FaNetworkWired, FaProjectDiagram, FaGlobeAmericas, FaLightbulb, FaPlayCircle } from 'react-icons/fa';

const layers = [
  {
    icon: FaGlobeAmericas,
    title: "Physical Infrastructure",
    desc: "World-class fiber network foundation providing strong global connectivity, reliable and scalable infrastructure.",
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    icon: FaNetworkWired,
    title: "Programmable Network",
    desc: "Advanced digital networking capabilities with centralized and flexible control systems.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: FaProjectDiagram,
    title: "Connected Ecosystem",
    desc: "Integration of partners, technology, and platforms delivering meaningful outcomes through a digital marketplace.",
    color: "from-indigo-500 to-blue-600"
  }
];

const GoodFibesOnly = () => {
  return (
    <section id="good-fibes-only" className="py-24 relative bg-[#09090b] text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-900/20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-300 font-bold text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
              <FaPodcast />
              <span>Internal Initiative</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Good Fibers <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Only</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              A dynamic internal initiative that focuses on communication, innovation, and collaboration. It combines storytelling, leadership insights, and technology updates to connect employees and align everyone with Lumen’s vision of building the digital backbone for the AI-driven future.
            </p>
            <div className="flex items-center gap-4 text-purple-400 font-bold uppercase tracking-widest text-sm">
              <span>Listen</span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              <span>Interpret</span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              <span>Impact</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm group cursor-pointer flex items-center justify-center"
          >
            <img src={`${import.meta.env.BASE_URL}good-fibes.jpg`} alt="Good Fibes Only" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 mix-blend-overlay z-0"></div>
            <FaPlayCircle className="text-7xl text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
              <div>
                <span className="bg-fuchsia-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">EPISODE HIGHLIGHTS</span>
                <p className="text-white font-medium text-sm drop-shadow-md">Energy, Momentum & Customer Needs</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Powerful Layers */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-12">Core Strategy: Three Powerful Layers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {layers.map((layer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center text-2xl mb-6`}>
                  <layer.icon />
                </div>
                <h4 className="text-xl font-bold mb-3">{layer.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Focus Areas & Culture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-fuchsia-900/30 to-purple-900/30 rounded-3xl p-10 border border-fuchsia-500/20"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaLightbulb className="text-fuchsia-400" />
              Key Focus Areas
            </h3>
            <ul className="space-y-4">
              {[
                "AI-Ready Infrastructure for cloud and data-driven systems",
                "Strategic Partnerships to strengthen digital capabilities",
                "Multi-Cloud Connectivity for seamless integration",
                "Customer-Centric Solutions for faster deployment"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-fuchsia-400 font-bold mt-0.5">→</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-3xl p-10 border border-purple-500/20"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaPodcast className="text-purple-400" />
              Organizational Culture
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <span className="block text-purple-300 font-bold text-sm mb-1">Values</span>
                <span className="text-xs text-gray-400">Bold thinking, fast learning, ownership, teamwork.</span>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <span className="block text-purple-300 font-bold text-sm mb-1">Expectations</span>
                <span className="text-xs text-gray-400">Understand vision, share knowledge, contribute to growth.</span>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 col-span-2">
                <span className="block text-purple-300 font-bold text-sm mb-1">Impact Created</span>
                <span className="text-xs text-gray-400">Stronger relationships, faster innovation, business growth, and a unified connected organization.</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default GoodFibesOnly;
