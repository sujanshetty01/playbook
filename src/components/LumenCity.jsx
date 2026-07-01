import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaGlobe, FaCloud, FaRobot, FaMicrochip, FaShieldAlt } from 'react-icons/fa';

const cityZones = [
  {
    title: "Connectivity District",
    desc: "Connects businesses across the globe through high-speed and reliable networks.",
    features: "Global fiber network, enterprise networking, high-speed connectivity",
    purpose: "Ensures fast and seamless communication",
    impact: "Enables organizations to operate efficiently across regions",
    icon: FaGlobe,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Cloud Heights",
    desc: "Represents the storage and movement of data in the digital space.",
    features: "Cloud connectivity, hybrid cloud solutions, data transport",
    purpose: "Supports flexible and scalable data management",
    impact: "Helps businesses store, access, and process data efficiently",
    icon: FaCloud,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    title: "AI Innovation Park",
    desc: "Highlights Lumen's capabilities in artificial intelligence and advanced analytics.",
    features: "AI-ready infrastructure, intelligent automation, advanced analytics",
    purpose: "Drives innovation and smarter decision-making",
    impact: "Enhances operational efficiency and future-ready solutions",
    icon: FaRobot,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Edge Computing Station",
    desc: "Brings data processing closer to users.",
    features: "Low latency, edge services, real-time performance",
    purpose: "Reduces delays and improves speed",
    impact: "Enables faster application performance and better user experience",
    icon: FaMicrochip,
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Cyber Security Zone",
    desc: "Focuses on protecting digital interactions and sensitive data.",
    features: "Threat protection, secure access, network security",
    purpose: "Ensures safety and reliability",
    impact: "Builds trust and safeguards business operations",
    icon: FaShieldAlt,
    color: "from-red-400 to-red-600"
  }
];

const LumenCity = () => {
  return (
    <section id="lumen-city" className="py-24 relative z-10 bg-space-dark text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lumen-teal/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lumen-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-lumen-cyan uppercase mb-3">Task 5 Playbook: What is Lumen Today?</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">Lumen City</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powering the Digital World Today. A futuristic digital ecosystem where connectivity, cloud technology, security, and artificial intelligence come together in one unified platform.
          </p>
        </div>

        {/* Central Tower */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 text-center mb-16 shadow-2xl backdrop-blur-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-lumen-teal to-lumen-cyan text-white text-4xl mb-6 shadow-lg shadow-lumen-cyan/30">
            <FaBuilding />
          </div>
          <h4 className="text-3xl font-bold mb-4 text-white">Lumen Central Tower</h4>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            At the center of Lumen City stands the Lumen Central Tower, symbolizing the core digital infrastructure. It acts as the foundation that connects, secures, and powers the entire ecosystem. This tower represents leadership in digital transformation and innovation.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cityZones.map((zone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-white/30 rounded-3xl p-8 transition-all hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${zone.color} flex items-center justify-center text-2xl text-white mb-6 shadow-lg`}>
                <zone.icon />
              </div>
              <h5 className="text-2xl font-bold mb-3 text-white">{zone.title}</h5>
              <p className="text-gray-400 text-sm mb-6">{zone.desc}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Features</div>
                  <div className="text-sm text-gray-300">{zone.features}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Purpose</div>
                  <div className="text-sm text-gray-300">{zone.purpose}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Impact</div>
                  <div className="text-sm text-lumen-cyan font-medium">{zone.impact}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Summary */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/10 rounded-full px-6 py-2 border border-white/20 text-sm font-bold text-gray-300 uppercase tracking-widest mb-4">
            Platform Advantages
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 font-medium">
            <span className="px-4 border-r border-white/20">Global Reach</span>
            <span className="px-4 border-r border-white/20">Built for People</span>
            <span className="px-4 border-r border-white/20">Secure by Design</span>
            <span className="px-4 text-lumen-cyan">Future Ready</span>
          </div>
          <h4 className="text-2xl font-bold text-white mt-12">One City. One Network. Infinite Possibilities.</h4>
        </div>
      </div>
    </section>
  );
};

export default LumenCity;
