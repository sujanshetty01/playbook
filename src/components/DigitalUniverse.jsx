import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaNewspaper, FaCompass, FaFolderOpen, FaHeart, FaChartLine, FaHeadset, FaHandshake, FaMicrochip, FaPaintBrush } from 'react-icons/fa';

const sections = [
  { icon: FaUsers, title: "Who We Are", desc: "The people, purpose, and passion that define Lumen." },
  { icon: FaNewspaper, title: "What's Happening", desc: "Your daily stream of stories, wins, and updates." },
  { icon: FaCompass, title: "Our North Star", desc: "A clear vision that guides every step forward." },
  { icon: FaFolderOpen, title: "Top Resources", desc: "Your essential tools — organized, accessible, effortless." },
  { icon: FaHeart, title: "Employee Essentials", desc: "Everything you need to work confidently and thrive daily." },
  { icon: FaChartLine, title: "Career & Growth", desc: "Your launchpad for learning, recognition, and opportunity." },
  { icon: FaHeadset, title: "Support & Help", desc: "Reliable support at your fingertips, anytime you need it." },
  { icon: FaHandshake, title: "Customer & Sales Hubs", desc: "Where teams unite to deliver exceptional customer value." },
  { icon: FaMicrochip, title: "Tools & Tech", desc: "Your gateway to innovation, AI, and smarter workflows." },
  { icon: FaPaintBrush, title: "Brand & Media", desc: "Creative assets that help you represent Lumen with pride." }
];

const DigitalUniverse = () => {
  return (
    <section id="universe" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lumen-teal/10 via-space-dark to-space-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-lumen-cyan uppercase mb-3">Inside Lumen</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Your Digital Universe</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Smart Minds. Stronger Together. Every Resource. Every Team. One Intelligent Workplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-lumen-teal-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <section.icon className="text-lumen-cyan text-xl" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{section.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{section.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalUniverse;
