import React from 'react';
import { motion } from 'framer-motion';

const stepnPhases = [
  {
    num: "1",
    title: "FOUNDATION",
    subtitle: "Network + Security + IT Operations",
    items: ["Traditional telecom infrastructure", "Network reliability", "Enterprise connectivity", "Security foundations"],
    color: "from-amber-600 to-amber-500",
    textColor: "text-amber-500"
  },
  {
    num: "2",
    title: "TRANSFORMATION",
    subtitle: "STEPN Formation",
    items: ["Bringing together:", "Security", "Technology", "Engineering", "Product", "Network", "into one organization focused on innovation."],
    color: "from-amber-400 to-yellow-500",
    textColor: "text-yellow-500"
  },
  {
    num: "3",
    title: "CLOUD ERA",
    subtitle: "Digital platforms",
    items: ["Cloud migration", "API-first architecture", "Automated provisioning", "Scalable and flexible operations"],
    color: "from-lime-500 to-green-500",
    textColor: "text-green-500"
  },
  {
    num: "4",
    title: "PRODUCT INNOVATION",
    subtitle: "Next-gen services",
    items: ["Lumen Connect", "Fabric Services & Ports", "Multi-cloud connectivity", "Composable products", "Customer-centric experiences"],
    color: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-500"
  },
  {
    num: "5",
    title: "AI ERA",
    subtitle: "High-performance infrastructure",
    items: ["High-capacity fiber networks", "AI data center connectivity", "GPU ecosystem enablement", "Secure AI infrastructure"],
    color: "from-blue-600 to-indigo-600",
    textColor: "text-indigo-400"
  },
  {
    num: "6",
    title: "VISION 2030",
    subtitle: "Intelligent Ecosystem",
    items: ["Autonomous service delivery", "Agentic AI operations", "Predictive networks", "Self-healing infrastructure", "AI-powered customer experiences"],
    color: "from-indigo-400 to-teal-400",
    textColor: "text-teal-400"
  }
];

const StepnEngine = () => {
  return (
    <section className="py-24 relative z-10 bg-white text-space-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00363a]">STEPN: The Engine Behind Lumen's AI Future</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            From Network Infrastructure to Intelligent Digital Ecosystems
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-center font-bold text-gray-400 tracking-widest uppercase mb-12">The STEPN Journey: From Strategy to Execution & Innovation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-12 right-12 h-1 bg-gray-200 z-0"></div>
            
            {stepnPhases.map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg border-4 border-white mx-auto lg:mx-0`}>
                  {phase.num}
                </div>
                <h4 className={`font-bold text-lg mb-1 ${phase.textColor}`}>{phase.title}</h4>
                <p className="text-gray-500 font-semibold text-sm mb-4">{phase.subtitle}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 justify-center lg:justify-start">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-current ${phase.textColor}`}></span>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-lumen-teal"></div>
          <blockquote className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed relative z-10">
            <span className="text-4xl text-lumen-teal absolute -top-4 -left-4 opacity-50">"</span>
            STEPN's journey is the story of how Lumen evolved from operating networks to engineering <strong className="text-lumen-teal">intelligent digital ecosystems</strong>. By combining Security, Technology, Engineering, Product, and Network expertise, STEPN transformed strategy into execution, built cloud and fabric-based platforms, and is now enabling Lumen's vision of becoming the <strong className="text-lumen-teal">backbone for AI</strong>.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default StepnEngine;
