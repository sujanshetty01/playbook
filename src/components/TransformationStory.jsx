import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaChartLine, FaCogs, FaRobot, FaNetworkWired, FaRocket } from 'react-icons/fa';

const journeySteps = [
  {
    icon: FaSeedling,
    title: "1. Seed: Connectivity Foundation",
    desc: "Started with building a strong base in communication networks. Focused on establishing reliable connectivity and building customer trust.",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: FaChartLine,
    title: "2. Growth: Network Expansion",
    desc: "As digital demand increased, Lumen expanded its global reach with investments in global fiber networks and improved speed.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: FaCogs,
    title: "3. Transformation: Digital Evolution",
    desc: "Embraced modern technologies like cloud computing, edge computing, and cybersecurity to transform business.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: FaRobot,
    title: "4. Acceleration: AI & Automation",
    desc: "Shifted focus to accelerating innovation using Artificial Intelligence, automation, and data-driven insights.",
    color: "from-purple-500 to-fuchsia-600"
  },
  {
    icon: FaNetworkWired,
    title: "5. Future: Connected Ecosystems",
    desc: "Building a future of integrated and intelligent ecosystems, smart communities, and sustainable growth.",
    color: "from-fuchsia-500 to-pink-600"
  }
];

const TransformationStory = () => {
  return (
    <section id="transformation-story" className="py-24 relative bg-gray-50 text-space-dark overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm"
          >
            <FaRocket />
            <span>Continuous Growth</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            The Story of Lumen’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Transformation</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            From a simple connectivity provider to a leader in digital innovation. What began as a mission to connect people has evolved into building powerful digital ecosystems that support businesses, communities, and technological advancement worldwide.
          </motion.p>
        </div>

        {/* Journey Steps (Vertical Timeline) */}
        <div className="max-w-4xl mx-auto mb-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12">
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg z-10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-lg`}>
                    <step.icon />
                  </div>
                </div>
                
                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-24 md:pl-0">
                  <div className={`bg-white rounded-2xl p-8 shadow-md border border-gray-100 ${idx % 2 === 0 ? 'md:ml-16' : 'md:mr-16'} hover:-translate-y-1 transition-transform duration-300 relative group overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact & Future Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 border-b pb-4">Impact Created by Lumen</h3>
            <div className="space-y-6">
              {[
                { title: "Empowering Businesses", desc: "Helping organizations innovate, grow, and support digital transformation initiatives." },
                { title: "Protecting What Matters", desc: "Delivering secure and reliable solutions, ensuring trust and data protection." },
                { title: "Accelerating Innovation", desc: "Enabling new ideas and technologies, driving industry advancements." },
                { title: "Connecting Communities", desc: "Bridging gaps through connectivity, creating opportunities worldwide." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-10 shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Where Lumen is Headed</h3>
            <p className="text-purple-100 mb-8 relative z-10">
              Lumen is focused on building the digital backbone of the AI-driven economy by combining:
            </p>
            <div className="space-y-6 relative z-10">
              <div className="bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-1">Physical Infrastructure</h4>
                <p className="text-purple-200 text-sm">Strong and reliable networks.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-1">Programmable Networks</h4>
                <p className="text-purple-200 text-sm">Flexible and scalable systems.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-1">Connected Ecosystems</h4>
                <p className="text-purple-200 text-sm">Integrated platforms for collaboration.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TransformationStory;
