import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaTools, FaChartPie, FaUserCircle, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

const components = [
  {
    icon: FaTools,
    title: "Technology Enablement",
    desc: "Adoption of cloud platforms, automation for repetitive tasks, and integration of AI and data analytics."
  },
  {
    icon: FaNetworkWired,
    title: "Process Optimization",
    desc: "Streamlining workflows to improve efficiency, reducing manual effort, and standardizing operations for consistency."
  },
  {
    icon: FaChartPie,
    title: "Data-Driven Decision Making",
    desc: "Using analytics to gain insights, making informed business decisions, and monitoring performance through metrics."
  },
  {
    icon: FaUserCircle,
    title: "Customer Focus",
    desc: "Delivering faster services, enhancing user experience, and meeting customer expectations effectively."
  }
];

const DigitalTransformation = () => {
  return (
    <section id="digital-transformation" className="py-24 relative bg-gray-50 text-space-dark overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100/50 to-blue-100/50 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm border border-blue-200"
          >
            <FaProjectDiagram />
            <span>Future Ready</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Digital Transformation & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Operational Excellence</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Adopting modern technologies and tools, automating workflows, and enhancing system integration to move from manual processes to faster, smarter, and scalable solutions.
          </motion.p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {components.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-lg shadow-blue-900/5 border border-blue-50 flex gap-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex flex-shrink-0 items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <comp.icon />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{comp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Excellence & Benefits */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            {/* Operational Excellence */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">Operational Excellence</h3>
              <div className="space-y-6">
                {[
                  { title: "Improved Efficiency", text: "Faster execution of tasks, reduced delays, and improved turnaround time." },
                  { title: "Quality & Accuracy", text: "Minimized errors through automation, delivering consistent outcomes." },
                  { title: "Scalability", text: "Ability to handle increased workload with flexible systems." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <FaCheckCircle className="text-cyan-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-white">Benefits of Transformation</h3>
              <ul className="space-y-4">
                {[
                  "Enhanced productivity and performance",
                  "Better collaboration across teams",
                  "Faster innovation and service delivery",
                  "Improved customer satisfaction",
                  "Strong competitive advantage"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-blue-50 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-6 border-t border-white/10 text-sm text-cyan-200 italic">
                Transformation is essential for achieving operational excellence in today’s fast-changing environment.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalTransformation;
