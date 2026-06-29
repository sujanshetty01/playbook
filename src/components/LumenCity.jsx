import React from 'react';
import { motion } from 'framer-motion';
import { FaCity, FaCloud, FaNetworkWired, FaServer, FaMicrochip, FaShieldAlt } from 'react-icons/fa';

const districts = [
  { 
    icon: FaMicrochip, 
    title: "AI Innovation Park", 
    desc: "Building the foundation for intelligent innovation",
    points: ["AI-Ready Infrastructure", "Intelligent Automation", "Advanced Analytics"],
    color: "from-purple-500 to-fuchsia-500" 
  },
  { 
    icon: FaCloud, 
    title: "Cloud Heights", 
    desc: "Where data lives and moves",
    points: ["Cloud Connectivity", "Hybrid Cloud Solutions", "Data Transport"],
    color: "from-blue-400 to-cyan-500" 
  },
  { 
    icon: FaNetworkWired, 
    title: "Connectivity District", 
    desc: "Connecting businesses across the globe",
    points: ["Global Fiber Network", "Enterprise Networking", "High-Speed Connectivity"],
    color: "from-teal-400 to-emerald-500" 
  },
  { 
    icon: FaCity, 
    title: "Lumen Central Tower", 
    desc: "The Digital Infrastructure Leader",
    points: ["Intelligent Foundation", "Empowering the digital world", "Thriving tomorrow"],
    color: "from-lumen-yellow to-lumen-orange" 
  },
  { 
    icon: FaServer, 
    title: "Edge Computing Station", 
    desc: "Intelligence closer to users",
    points: ["Low Latency", "Edge Services", "Real-Time Performance"],
    color: "from-green-400 to-lime-500" 
  },
  { 
    icon: FaShieldAlt, 
    title: "Cyber Security Zone", 
    desc: "Protecting every digital interaction",
    points: ["Threat Protection", "Secure Access", "Network Security"],
    color: "from-red-500 to-orange-500" 
  }
];

const LumenCity = () => {
  return (
    <section className="py-24 relative z-10 bg-[#02040a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-[#02040a] to-[#02040a] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Lumen Today</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">LUMEN CITY</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Powering the Digital World Today. More than connectivity.
          </p>
          <div className="inline-block px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-semibold tracking-wider">
            ONE CITY. ONE NETWORK. INFINITE POSSIBILITIES.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {districts.map((district, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${district.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}></div>
              
              <div className="w-14 h-14 rounded-xl bg-space-dark border border-white/10 flex items-center justify-center mb-6 z-10 relative">
                <district.icon className="text-2xl text-white" />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-2 relative z-10">{district.title}</h4>
              <p className="text-blue-300 text-sm mb-6 relative z-10">{district.desc}</p>
              
              <ul className="space-y-3 relative z-10">
                {district.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LumenCity;
