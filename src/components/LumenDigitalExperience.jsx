import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCubes, FaBolt, FaRocket, FaGlobe, FaPalette } from 'react-icons/fa';

const features = [
  {
    icon: FaCubes,
    title: "Unified Content Display",
    desc: "All content from previous tasks integrated into a single structured platform. Understand relationships between concepts without switching tools.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: FaPalette,
    title: "Visual Representation",
    desc: "Engaging visuals and design elements that simplify complex ideas and make the experience interactive and attractive.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaGlobe,
    title: "Real-Time Accessibility",
    desc: "Hosted as a live application, accessible anytime from any location. Enabling global connectivity and real-time interaction.",
    color: "from-amber-400 to-orange-500"
  }
];

const LumenDigitalExperience = () => {
  return (
    <section id="lumen-digital-experience" className="py-24 relative bg-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-60"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm tracking-wide mb-6"
          >
            <FaLaptopCode />
            <span>THE FINAL STAGE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Lumen Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experience</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            The final stage of the journey, where all concepts, tools, and ideas are brought together into a functional and interactive platform. This showcases how Lumen’s digital ecosystem can be accessed, explored, and utilized effectively.
          </motion.p>
        </div>

        {/* Core Features Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center text-2xl mb-6 shadow-md`}>
                  <feature.icon />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* User Experience Design & Business Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">
              <FaPalette />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">User Experience Design</h3>
            <ul className="space-y-6">
              <li>
                <strong className="block text-cyan-400 text-lg mb-1">Clean and Structured Layout</strong>
                <span className="text-gray-300">Follows a clean design approach with proper spacing, alignment, and consistency, ensuring readability.</span>
              </li>
              <li>
                <strong className="block text-cyan-400 text-lg mb-1">Consistency Across Sections</strong>
                <span className="text-gray-300">Maintains a consistent design pattern aligning with Lumen’s UX principles for a smooth and unified experience.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Value</h3>
            <ul className="space-y-6">
              <li>
                <strong className="block text-blue-600 text-lg mb-1">Digital Transformation in Action</strong>
                <span className="text-gray-600">Demonstrates integration of multiple technologies, simplification of complex workflows, and improved accessibility.</span>
              </li>
              <li>
                <strong className="block text-blue-600 text-lg mb-1">Enhanced Engagement</strong>
                <span className="text-gray-600">By providing an interactive platform, users are more engaged and better understand Lumen’s ecosystem and offerings.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Conclusion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2rem] p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <FaRocket className="text-3xl" />
            </div>
            <h3 className="text-3xl font-bold mb-4">From Concept to Reality</h3>
            <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              This represents the transformation of ideas into a working digital solution. It showcases how planning, design, and implementation come together to create a meaningful user experience, reflecting Lumen’s vision of building connected, intelligent, and future-ready digital platforms.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LumenDigitalExperience;
