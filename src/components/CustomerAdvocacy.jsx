import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHeadset, FaGem, FaHandshake, FaUsers } from 'react-icons/fa';

const principles = [
  {
    icon: FaHeart,
    title: "Customer-Centric Approach",
    desc: "Every decision is made with the customer in mind. The focus is on delivering solutions that truly address customer problems.",
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    icon: FaHeadset,
    title: "Active Listening",
    desc: "Understanding customer feedback, concerns, and expectations plays a crucial role in improving services and strengthening relationships.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: FaGem,
    title: "Value Creation",
    desc: "Providing meaningful and effective solutions helps in delivering real business value to customers rather than just fulfilling requirements.",
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    icon: FaHandshake,
    title: "Trust and Relationship Building",
    desc: "Focusing on creating long-term relationships by consistently meeting or exceeding expectations.",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  }
];

const CustomerAdvocacy = () => {
  return (
    <section id="customer-advocacy" className="py-24 relative bg-white text-space-dark overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-rose-50 text-rose-600 font-bold tracking-widest uppercase text-sm mb-6"
          >
            Putting Customers First
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900"
          >
            Customer Advocacy at <span className="text-lumen-teal">Lumen</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            A key concept that highlights Lumen’s commitment to putting customers at the center of its business, delivering meaningful value through services and solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-400 rounded-3xl transform -rotate-3 scale-105 opacity-20 blur-xl"></div>
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">What is Customer Advocacy?</h3>
              <ul className="space-y-6">
                {[
                  "Actively listening to customer needs and concerns",
                  "Providing solutions that create real value",
                  "Building trust and long-term relationships",
                  "Ensuring a positive and consistent customer experience"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 text-rose-500 font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-gray-100 text-gray-600 italic font-medium">
                "It goes beyond just delivering products or services and emphasizes creating a strong connection with customers."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className={`${principle.bg} rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow`}
              >
                <principle.icon className={`text-3xl mb-4 ${principle.color}`} />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#051125] to-[#01050f] rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <FaUsers className="text-5xl text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Organization-Wide Responsibility</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex-1">
                <p className="text-cyan-100 font-medium">Every team contributes to customer satisfaction</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex-1">
                <p className="text-cyan-100 font-medium">Collaboration helps improve overall experience</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex-1">
                <p className="text-cyan-100 font-medium">Continuous improvement driven by feedback</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto italic">
              Customer Advocacy is not limited to a single team. It can be understood as a mindset rather than just a process. It emphasizes putting the customer first in everything we do.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default CustomerAdvocacy;
