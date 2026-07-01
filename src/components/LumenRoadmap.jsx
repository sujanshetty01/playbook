import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaRobot, FaCogs } from 'react-icons/fa';

const phases = [
  {
    week: "Week 1",
    title: "Foundations",
    subtitle: "Understanding Basics",
    desc: "Build a strong programming foundation.",
    points: [
      "Learn Python basics (variables, data types, loops, functions)",
      "Understand data structures (lists, dictionaries)",
      "Introduction to AI and machine learning concepts",
      "Practice simple coding problems"
    ],
    icon: FaCode,
    color: "from-blue-500 to-cyan-500"
  },
  {
    week: "Week 2",
    title: "Data & Machine Learning",
    subtitle: "Working with Data",
    desc: "Introduce data handling and machine learning concepts.",
    points: [
      "Learn NumPy and Pandas for data processing",
      "Perform data cleaning and transformation",
      "Understand regression and classification models",
      "Evaluate model performance and build a small project"
    ],
    icon: FaDatabase,
    color: "from-cyan-500 to-teal-500"
  },
  {
    week: "Week 3",
    title: "Generative AI & LLMs",
    subtitle: "Exploring Advanced AI",
    desc: "Focus on modern AI technologies.",
    points: [
      "Understand Generative AI and Large Language Models",
      "Learn prompt engineering techniques",
      "Explore Natural Language Processing (NLP) & RAG",
      "Integrate APIs and build a chatbot concept"
    ],
    icon: FaRobot,
    color: "from-teal-500 to-emerald-500"
  },
  {
    week: "Week 4",
    title: "Application & Automation",
    subtitle: "Applying Knowledge",
    desc: "Focus on real-world implementation.",
    points: [
      "Learn Power Automate and automation workflows",
      "Understand API integration and cloud basics (Azure)",
      "Explore tools like Copilot Studio for AI agents",
      "Build a real-world use case combining AI and automation"
    ],
    icon: FaCogs,
    color: "from-emerald-500 to-green-500"
  }
];

const LumenRoadmap = () => {
  return (
    <section id="lumen-roadmap" className="py-24 relative z-10 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-lumen-teal uppercase mb-3">Task 9 Playbook: Learning Path Planner</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">AI Learning Roadmap</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured 30-day plan designed to build a strong foundation in Artificial Intelligence, data analysis, and automation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 mb-8 bg-white rounded-3xl p-6 md:p-8 shadow-lg shadow-gray-200/50 border border-gray-100"
            >
              <div className={`md:w-1/3 rounded-2xl bg-gradient-to-br ${phase.color} p-6 text-white flex flex-col justify-center items-center text-center shadow-inner`}>
                <phase.icon className="text-4xl mb-4 opacity-90" />
                <div className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">
                  {phase.week}
                </div>
                <h4 className="text-2xl font-bold mb-1">{phase.title}</h4>
                <p className="text-sm font-medium text-white/90">{phase.subtitle}</p>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-600 font-medium mb-4 italic">"{phase.desc}"</p>
                <ul className="space-y-3">
                  {phase.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                      <span className="text-gray-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#00363a] inline-block px-10 py-6 rounded-2xl shadow-xl text-white">
            <h4 className="text-xl font-bold mb-2 text-lumen-cyan">Expected Outcomes</h4>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Gain strong programming and data handling skills, apply machine learning concepts, build AI-powered applications, and develop automation workflows. A true journey toward becoming an AI professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumenRoadmap;
