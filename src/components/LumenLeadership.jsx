import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaCogs, FaProjectDiagram, FaRocket } from 'react-icons/fa';

const layers = [
  {
    title: "Vision Setters",
    role: "Define the overall direction and future goals.",
    focus: "Provide guidance, inspire innovation, and ensure alignment with long-term objectives.",
    icon: FaEye,
    color: "bg-blue-600",
    border: "border-blue-600"
  },
  {
    title: "Strategic Leaders",
    role: "Act as a bridge between vision and execution.",
    focus: "Technology domains, operational readiness, and customer experience. Translate ideas into actionable plans.",
    icon: FaCogs,
    color: "bg-cyan-600",
    border: "border-cyan-600"
  },
  {
    title: "Functional & Regional Leaders",
    role: "Ensure proper coordination across global and regional teams.",
    focus: "Global Perspective (unified decisions) and Local Adaptation (adjusting strategies to regional needs).",
    icon: FaProjectDiagram,
    color: "bg-teal-500",
    border: "border-teal-500"
  },
  {
    title: "Grassroots Teams & Contributors",
    role: "Bring ideas to life.",
    focus: "Development, implementation, and continuous improvement. Transform strategies into real results.",
    icon: FaRocket,
    color: "bg-emerald-500",
    border: "border-emerald-500"
  }
];

const LumenLeadership = () => {
  return (
    <section id="lumen-leadership" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-lumen-teal uppercase mb-3">Task 10 & 11 Playbook: Global & India Leadership Map</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#00363a] mb-6">Lumen Leadership Ecosystem</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Ideas to Impact. How ideas evolve into impactful solutions through a structured flow of leadership and teamwork.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative py-10">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 via-cyan-500 to-emerald-500 -translate-x-1/2 rounded-full hidden md:block"></div>

          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'} text-center`}>
                  <div className={`inline-block bg-white border-2 ${layer.border} rounded-2xl p-6 shadow-xl`}>
                    <h4 className={`text-2xl font-bold mb-2 text-gray-900`}>{layer.title}</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">The Role</p>
                    <p className="text-gray-700 mb-4">{layer.role}</p>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-gray-600">
                      <strong>Focus:</strong> {layer.focus}
                    </div>
                  </div>
                </div>
                
                <div className={`hidden md:flex w-16 h-16 rounded-full ${layer.color} border-4 border-white shadow-lg items-center justify-center text-white text-2xl z-20 ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <layer.icon />
                </div>
                
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-lumen-teal to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
            <h4 className="text-2xl font-bold mb-4">Connecting Ideas Across Levels</h4>
            <p className="text-lg opacity-90">
              The ecosystem emphasizes the flow of ideas from top-level vision to grassroots execution and back. Ideas are translated effectively, feedback flows upward, and teams stay aligned with overall goals to drive continuous innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumenLeadership;
