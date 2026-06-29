import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaLightbulb, FaRocket } from 'react-icons/fa';

const ChallengeOverview = () => {
  return (
    <section id="challenge" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Create Your Very Own <br/><span className="text-gradient bg-gradient-warm">Intern's Impact Playbook</span></h2>
          <p className="text-lg text-gray-400">
            Reflect deeply. Build thoughtfully. Submit confidentially. Let your Impact Playbook tell your story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-glow p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-lumen-yellow/20 blur-[50px]"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center text-space-dark text-3xl">
                <FaMedal />
              </div>
              <h3 className="text-3xl font-bold">The Highest Value Task</h3>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              This task is worth <span className="text-lumen-yellow font-bold text-2xl">20 Points</span>. The stronger your playbook, the stronger your final impact. Show us the difference you've made.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaLightbulb className="text-lumen-cyan mt-1 flex-shrink-0" />
                <span className="text-gray-300">Showcase your learnings and technical growth</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRocket className="text-lumen-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">Highlight your business impact and collaboration</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { title: 'Reflect', desc: 'Look back at your journey, the challenges faced, and the milestones achieved.' },
              { title: 'Build', desc: 'Craft a compelling narrative that highlights your unique contributions.' },
              { title: 'Submit', desc: 'Deliver your playbook before the deadline and claim your place in the Lumenverse.' }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-l-4 border-l-lumen-cyan hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeOverview;
