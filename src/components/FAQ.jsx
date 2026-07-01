import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: "What is the Intern's Impact Playbook?",
    a: "It is the final, high-value milestone in the iLearnLumen series where you synthesize your learnings, project experiences, and overall impact within Lumen's digital ecosystem."
  },
  {
    q: "How does Lumen drive digital transformation?",
    a: "Lumen focuses on edge computing, cloud connectivity, cybersecurity, and AI-ready infrastructure to deliver intelligent digital platforms that empower next-generation enterprises."
  },
  {
    q: "What is the strategic role of the STEPN Engine?",
    a: "The STEPN Engine acts as a catalyst for end-to-end transformation, bridging strategy with execution to drive operational excellence and continuous innovation across teams."
  },
  {
    q: "How do Lumen's Core Behaviours shape our workplace culture?",
    a: "Our culture is rooted in continuous learning, collaboration, and customer obsession. These behaviours empower us to solve complex challenges and maintain a 'Good Fibes Only' inclusive environment."
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
