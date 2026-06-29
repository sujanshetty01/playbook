import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Learnings", desc: "Showcase the new skills, tools, and methodologies you mastered during your internship.", color: "from-blue-500 to-lumen-cyan" },
  { title: "Projects", desc: "Detail the core projects you contributed to and the specific role you played.", color: "from-lumen-orange to-lumen-yellow" },
  { title: "Business Impact", desc: "Quantify the value you brought to Lumen. How did your work move the needle?", color: "from-green-400 to-emerald-600" },
  { title: "Collaboration", desc: "Highlight teamwork, mentorship, and how you engaged with the Lumen community.", color: "from-purple-500 to-pink-500" },
  { title: "Personal Growth", desc: "Reflect on how this experience shaped your professional trajectory and mindset.", color: "from-lumen-teal to-blue-600" }
];

const FeatureCards = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Playbook Essentials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Make sure your Impact Playbook covers these key areas to maximize your points and leave a lasting impression.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden group ${idx === 4 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lumen-cyan transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
