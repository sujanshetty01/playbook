import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaSyncAlt, FaChartLine, FaCogs, FaUsers, FaArrowRight } from 'react-icons/fa';

const focusAreas = [
  {
    icon: FaCogs,
    title: "Process Improvement",
    desc: "Streamlining workflows to reduce delays, eliminating redundant steps, and enhancing productivity and efficiency."
  },
  {
    icon: FaLightbulb,
    title: "Technology Adoption",
    desc: "Using automation tools to simplify tasks, implementing digital platforms for faster operations, and leveraging AI."
  },
  {
    icon: FaUsers,
    title: "Customer-Centric Approach",
    desc: "Understanding customer needs, improving service delivery, and ensuring consistent positive experiences."
  },
  {
    icon: FaSyncAlt,
    title: "Collaboration & Communication",
    desc: "Encouraging teamwork, sharing knowledge, and improving coordination between teams across departments."
  }
];

const steps = [
  { step: "Step 1", title: "Identify Gaps", desc: "Analyze current processes to find areas of improvement." },
  { step: "Step 2", title: "Plan Enhancements", desc: "Design solutions using modern tools and technologies." },
  { step: "Step 3", title: "Execute Changes", desc: "Implement improvements with proper tracking and monitoring." },
  { step: "Step 4", title: "Review & Optimize", desc: "Continuously monitor performance and refine processes." }
];

const InnovationImprovement = () => {
  return (
    <section id="innovation-improvement" className="py-24 relative bg-white overflow-hidden text-space-dark">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-50 text-indigo-600 font-bold text-sm tracking-wide mb-6 uppercase"
          >
            <FaChartLine />
            <span>Delivering Value</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Innovation and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Continuous Improvement</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Essential for organizations to stay competitive. This focuses on enhancing processes, adopting new technologies, and creating efficient systems that support business goals and customer satisfaction.
          </motion.p>
        </div>

        {/* Key Areas of Focus */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Key Areas of Focus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <area.icon />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{area.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits & Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-bold mb-8 relative z-10">Benefits of Continuous Improvement</h3>
            
            <div className="space-y-6 relative z-10">
              {[
                { title: "Operational Efficiency", desc: "Faster execution of tasks, reduced errors and improved accuracy." },
                { title: "Employee Productivity", desc: "Better tools and processes support employees, increasing engagement." },
                { title: "Customer Satisfaction", desc: "Faster response times and high-quality service delivery." },
                { title: "Business Growth", desc: "Improved outcomes, scalability, and a stronger market position." }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20">
                    <span className="text-indigo-300 font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{benefit.title}</h4>
                    <p className="text-indigo-200 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Implementation Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4"
          >
            <h3 className="text-3xl font-bold mb-10 text-gray-900">Implementation Approach</h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-0.5 h-12 bg-gray-200 mt-2 group-hover:bg-indigo-200 transition-colors duration-300"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                      {step.title}
                      {idx < steps.length - 1 && <FaArrowRight className="text-gray-300 text-sm" />}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default InnovationImprovement;
