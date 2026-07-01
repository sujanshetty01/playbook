import React from 'react';
import { motion } from 'framer-motion';
import { FaFutbol, FaMusic, FaUsersCog, FaHandshake, FaLaptopHouse } from 'react-icons/fa';

const events = [
  {
    icon: FaFutbol,
    title: "Lumen Sports Events (Sports Fest)",
    desc: "Cricket, football, and badminton tournaments. Encourages teamwork, reduces stress, and builds a positive, energetic work culture.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: FaMusic,
    title: "LEHAR Program",
    desc: "Cultural programs and celebrations. Promotes employee well-being, inclusivity, and strengthens organizational culture.",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: FaUsersCog,
    title: "Leadership Connect / Town Halls",
    desc: "Leadership speeches, Q&A sessions, and strategy discussions. Improves transparency and aligns employees with the company vision.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: FaHandshake,
    title: "Customer & Partner Events",
    desc: "Product demos, solution discussions, and networking. Builds strong customer relationships and creates new business opportunities.",
    color: "from-amber-400 to-orange-500"
  },
  {
    icon: FaLaptopHouse,
    title: "Tech & Innovation Webinars",
    desc: "Webinars on cloud, network, and security. Positions Lumen as a technology leader and increases brand value and visibility.",
    color: "from-cyan-400 to-blue-500"
  }
];

const IndustryPresence = () => {
  return (
    <section id="industry-presence" className="py-24 relative bg-white text-space-dark overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm tracking-wide mb-6 uppercase"
          >
            <span>Connecting People, Powering Possibilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Lumen Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Presence</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Organizing impactful events that promote collaboration, innovation, and engagement to build strong relationships with employees, customers, and partners.
          </motion.p>
        </div>

        {/* Initiatives & Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 relative group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.color} text-white flex items-center justify-center text-2xl mb-6 shadow-md`}>
                <event.icon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Overall Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[3rem] p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-teal-900/40 mix-blend-multiply"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">01</div>
              <h4 className="text-lg font-bold mb-2">Stronger Employees</h4>
              <p className="text-sm text-gray-400">Engaged, motivated, and empowered workforce.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">02</div>
              <h4 className="text-lg font-bold mb-2">Stronger Relationships</h4>
              <p className="text-sm text-gray-400">Better connections with teams, customers, and partners.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">03</div>
              <h4 className="text-lg font-bold mb-2">Stronger Business</h4>
              <p className="text-sm text-gray-400">Increased growth opportunities and long-term success.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">04</div>
              <h4 className="text-lg font-bold mb-2">Stronger Future</h4>
              <p className="text-sm text-gray-400">Building a sustainable and innovative organization.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IndustryPresence;
