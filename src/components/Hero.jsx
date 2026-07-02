import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lumen-orange/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-lumen-cyan/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-lumen-cyan/30 bg-lumen-cyan/10 text-lumen-cyan font-medium text-sm mb-4">
            Welcome to the Final Task
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            iLearnLumen: <br className="hidden md:block" />
            <span className="text-gradient bg-gradient-warm leading-tight">Intern Explorer Challenge</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white/90">
            Intern's Impact Playbook
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            <span className="text-lumen-peach font-medium">We've explored. We've discovered. We've learned.</span><br />
            Now, step into the final phase of your journey. The Impact Playbook is your canvas to synthesize your learnings, highlight your unique contributions, and leave a lasting mark on the Lumen ecosystem.
          </p>
          
          <p className="text-lg text-gray-400 italic max-w-xl mx-auto pt-4">
            Reflect deeply. Build thoughtfully. Let your story resonate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#tasks" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-space-dark font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Begin Your Journey
              </a>
            </motion.div>
            
            <a href="#playbook-answers" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-lumen-cyan/50 text-lumen-cyan font-bold text-lg hover:bg-lumen-cyan/10 transition-colors">
              View Playbook Answers
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
