import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaLightbulb, FaUsers, FaGraduationCap } from 'react-icons/fa';

const culturePoints = [
  {
    title: "Adopting a Winning Mindset",
    subtitle: 'From "Playing Not to Lose" to "Playing to Win"',
    desc: "Lumen promotes a shift from a cautious mindset to a proactive and ambitious approach.",
    compare: [
      { label: "Traditional Approach", text: "Focus on avoiding mistakes and staying safe" },
      { label: "Winning Approach", text: "Take calculated risks, share ideas, and embrace challenges" },
      { label: "Impact", text: "Drives creativity, confidence, and continuous improvement" }
    ],
    icon: FaRunning,
    color: "text-orange-500 bg-orange-100"
  },
  {
    title: "Innovation Through Action",
    subtitle: "Stepping Beyond Comfort Zones",
    desc: "Innovation does not come from playing it safe. Lumen encourages employees and interns to step outside their comfort zones, ask questions, and actively contribute.",
    icon: FaLightbulb,
    color: "text-yellow-500 bg-yellow-100"
  },
  {
    title: "The Role of People",
    subtitle: "People Drive Change",
    desc: "Transformation at Lumen is powered by people. Technology supports growth, but it is human effort, creativity, and collaboration that bring meaningful change.",
    compare: [
      { label: "Focus", text: "Collaboration and teamwork" },
      { label: "Approach", text: "Engaging with peers and learning from diverse perspectives" },
      { label: "Result", text: "Stronger solutions and innovative outcomes" }
    ],
    icon: FaUsers,
    color: "text-blue-500 bg-blue-100"
  },
  {
    title: "Culture as a Strategy",
    subtitle: "Culture is the Foundation",
    desc: "At Lumen, culture is not a guideline—it is the core of how the organization operates. Every action, decision, and interaction reflects the company's values.",
    icon: FaGraduationCap,
    color: "text-purple-500 bg-purple-100"
  }
];

const LumenCulture = () => {
  return (
    <section id="lumen-culture" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-lumen-teal uppercase mb-3">Task 7 Playbook: Kate's Insight</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#00363a] mb-6">Lumen Culture & Mindset</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving Success. Empowering individuals to think boldly, act confidently, and innovate continuously.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {culturePoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl ${point.color} flex items-center justify-center text-3xl mb-6 shadow-sm`}>
                <point.icon />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">{point.title}</h4>
              <h5 className="text-lg font-bold text-lumen-teal mb-4">{point.subtitle}</h5>
              <p className="text-gray-600 mb-6">{point.desc}</p>

              {point.compare && (
                <div className="space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  {point.compare.map((cmp, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 w-32 flex-shrink-0">{cmp.label}</span>
                      <span className={`text-sm font-medium ${cmp.label === 'Impact' || cmp.label === 'Result' ? 'text-lumen-teal font-bold' : 'text-gray-800'}`}>
                        {cmp.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-3xl" /> Applying the Learning as an Intern
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
              <h5 className="font-bold text-lg mb-2">Active Participation</h5>
              <p className="text-sm text-white/90">Actively participate in meetings, discussions, and projects instead of limiting yourself to assigned tasks.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
              <h5 className="font-bold text-lg mb-2">Continuous Learning</h5>
              <p className="text-sm text-white/90">Take initiative to learn new skills, ask questions, and explore different areas of the organization.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
              <h5 className="font-bold text-lg mb-2">Contribution to Innovation</h5>
              <p className="text-sm text-white/90">By sharing ideas and being open to challenges, interns contribute to innovation and the transformation journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumenCulture;
