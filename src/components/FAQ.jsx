import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: "What is the Interns Impact Playbook?",
    a: "It is the final and highest value task in the iLearnLumen series where you showcase your learnings, projects, and overall impact during your internship."
  },
  {
    q: "How many points is this task worth?",
    a: "This task is worth 20 points, making it the most significant task in the Intern Explorer Challenge."
  },
  {
    q: "When is the deadline for submission?",
    a: "All playbooks must be submitted confidentially by 03-Jul-2026, 6:00 PM."
  },
  {
    q: "What format should the Playbook be in?",
    a: "You can use presentations, documents, or digital portfolios. Focus on clarity, visual appeal, and strong storytelling."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                <FaChevronDown className={`text-lumen-cyan transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
