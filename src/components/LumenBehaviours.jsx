import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaLightbulb, FaHeart, FaShieldAlt } from 'react-icons/fa';

const behaviours = [
  {
    title: "Allyship & Teamwork",
    desc: "Collaboration is at the heart of Lumen's culture. Working together across teams helps build stronger solutions and shared success.",
    icon: FaHandsHelping,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Clarity & Growth Mindset",
    desc: "Seeking feedback and continuously improving ensures clarity in goals and progress. A growth mindset enables individuals to learn, adapt, and evolve.",
    icon: FaLightbulb,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Customer Obsession",
    desc: "Focusing on customer needs ensures that solutions are aligned with real business requirements and deliver meaningful value.",
    icon: FaHeart,
    color: "from-red-400 to-red-600"
  },
  {
    title: "Courage & Trust",
    desc: "Expressing ideas confidently and building trust within teams encourages innovation and open communication.",
    icon: FaShieldAlt,
    color: "from-green-400 to-green-600"
  }
];

const applicationPoints = [
  { title: "Clarifying Focus", desc: "Understanding the purpose behind tasks helps align efforts with organizational goals. It ensures meaningful contribution rather than just task completion." },
  { title: "Driving Small-Scale Changes", desc: "Small improvements in daily work can lead to significant impact over time. Incremental progress supports larger transformation goals." },
  { title: "Commitment to Innovation", desc: "A commitment to innovation means continuously exploring new ideas, technologies, and approaches to solve challenges effectively." }
];

const LumenBehaviours = () => {
  return (
    <section id="lumen-behaviours" className="py-24 relative z-10 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-lumen-cyan uppercase mb-3">Task 8 Playbook: Behaviour in Action</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">The Lumen Way</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging the gap between concepts and real-world application. How individuals contribute to organizational success through collaboration, innovation, and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {behaviours.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                <b.icon />
              </div>
              <h4 className="text-xl font-bold mb-3">{b.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-lumen-teal/20 to-lumen-cyan/20 border border-lumen-cyan/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h4 className="text-3xl font-bold mb-4">Application in the Workplace</h4>
            <p className="text-gray-300">Translating theoretical behaviors into daily impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applicationPoints.map((pt, idx) => (
              <div key={idx} className="bg-space-dark/80 p-6 rounded-2xl border border-white/5 shadow-inner">
                <div className="text-lumen-cyan font-black text-2xl mb-2">0{idx + 1}</div>
                <h5 className="font-bold text-lg mb-2">{pt.title}</h5>
                <p className="text-sm text-gray-400">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumenBehaviours;
