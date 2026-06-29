import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaNetworkWired, FaRocket, FaGlobe, FaBrain } from 'react-icons/fa';

const timelineEvents = [
  {
    period: "1930s-2000s",
    title: "THE FOUNDATION (CenturyLink)",
    subtitle: "Built on the foundation of connectivity.",
    points: ["Founded as small telephone company", "Focus: Voice & Connectivity", "Acquired telecom companies", "Built a global network backbone"],
    icon: FaPhoneAlt,
    color: "text-gray-400 border-gray-600 bg-gray-800"
  },
  {
    period: "2000s-2010s",
    title: "TRANSFORMATION & EXPANSION",
    subtitle: "Evolving with the digital world.",
    points: ["Acquired Level 3 Communications", "Expanded into: High-speed Data, Enterprise Services, Cloud-related solutions", "Marked transition to Technology Enabler"],
    icon: FaNetworkWired,
    color: "text-blue-400 border-blue-600 bg-blue-900/30"
  },
  {
    period: "2020",
    title: "THE BORN OF LUMEN",
    subtitle: "From networks to intelligent digital platforms.",
    points: ["Rebranding CenturyLink to Lumen Technologies", "To reflect a shift beyond telecom", "To focus on innovation, data, and digital transformation", "Key focus areas: Edge computing, Cloud connectivity, Cybersecurity, AI-ready infrastructure"],
    icon: FaRocket,
    color: "text-lumen-cyan border-lumen-cyan bg-lumen-cyan/20"
  },
  {
    period: "PRESENT",
    title: "DIGITAL INFRASTRUCTURE LEADER",
    subtitle: "Powering modern digital ecosystems.",
    points: ["Global fiber network", "Secure networking", "Low-latency data", "Powers modern digital ecosystems"],
    icon: FaGlobe,
    color: "text-green-400 border-green-600 bg-green-900/30"
  },
  {
    period: "THE FUTURE",
    title: "VISION: AI & INTELLIGENT CONNECTIVITY",
    subtitle: "Building the backbone of the AI era.",
    points: ["Focus: AI-powered networks", "Edge computing at scale", "Intelligent automation", "Goal: Build the foundation for next-generation innovation"],
    icon: FaBrain,
    color: "text-purple-400 border-purple-600 bg-purple-900/30"
  }
];

const LumenHistory = () => {
  return (
    <section id="origin-story" className="py-24 relative z-10 bg-[#020813]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-lumen-cyan uppercase mb-3">Task 3 Playbook</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">THE LUMEN ORIGIN ODYSSEY</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From where we started to where we are headed next.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-800 via-lumen-cyan to-purple-600 -translate-x-1/2 rounded-full"></div>

          {timelineEvents.map((event, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''} flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 ${event.color} bg-[#020813] z-10 shadow-xl`}>
                  <event.icon className="text-lg" />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all shadow-lg relative group">
                    
                    <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${event.color}`}>
                      {event.period}
                    </div>
                    
                    <h4 className="text-2xl font-black text-white mb-2">{event.title}</h4>
                    <p className="text-lumen-cyan italic mb-6">"{event.subtitle}"</p>
                    
                    <ul className={`space-y-3 text-sm text-gray-400 ${isEven ? 'md:text-right' : 'text-left'}`}>
                      {event.points.map((point, pIdx) => (
                        <li key={pIdx} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 opacity-50 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer Insight */}
        <div className="mt-20 max-w-4xl mx-auto glass p-10 rounded-3xl border-t border-lumen-cyan/50 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lumen-cyan/5 to-transparent"></div>
          <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Key Insight: Lumen's Journey</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 font-medium mb-4">
             <span className="bg-white/5 px-4 py-2 rounded-lg">Telecom Company</span>
             <span className="text-lumen-cyan">➔</span>
             <span className="bg-white/5 px-4 py-2 rounded-lg">Technology Platform</span>
             <span className="text-lumen-cyan">➔</span>
             <span className="bg-white/5 px-4 py-2 rounded-lg text-white font-bold border border-lumen-cyan/30">AI-Driven Innovator</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 text-sm mb-10">
             <span>Connectivity</span>
             <span className="text-lumen-cyan">➔</span>
             <span>Cloud</span>
             <span className="text-lumen-cyan">➔</span>
             <span className="text-white font-bold">Intelligence</span>
          </div>
          
          <div className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            🚀 From a telephone network... to a digital intelligence platform — <span className="text-lumen-cyan">Lumen continues to evolve with the future.</span>
          </div>
          <div className="mt-8 text-xs text-gray-500">Source: Inside Lumen / Company Overview</div>
        </div>
      </div>
    </section>
  );
};

export default LumenHistory;
