import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCloud, FaShieldAlt, FaWifi, FaServer } from 'react-icons/fa';

const brandSegments = [
  {
    title: "Lumen Enterprise",
    desc: "Delivering advanced network and cloud infrastructure solutions for large organizations.",
    purpose: "Enable global enterprises with scalable connectivity and cloud integration",
    users: "Fortune 500 companies, financial institutions, and government organizations",
    impact: "Supports high-capacity networks and simplifies cross-cloud operations",
    value: "Drives strong enterprise growth and recurring revenue",
    icon: FaBuilding,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Network-as-a-Service (NaaS)",
    desc: "Transforms traditional networking into an on-demand, flexible model.",
    purpose: "Provide cloud-like networking with scalable bandwidth",
    users: "Cloud-based companies and digital platforms",
    impact: "Reduces infrastructure costs and speeds up deployment",
    value: "Enables businesses to scale quickly based on demand",
    icon: FaCloud,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Black Lotus Labs",
    desc: "Lumen's advanced cybersecurity division.",
    purpose: "Detect and prevent cyber threats at the network level",
    users: "Enterprises, financial institutions, healthcare systems",
    impact: "Monitors billions of security events and prevents attacks",
    value: "Enhances trust and reduces security risks across networks",
    icon: FaShieldAlt,
    color: "from-red-500 to-rose-600"
  },
  {
    title: "Quantum Fiber",
    desc: "High-speed internet services for consumers and small businesses.",
    purpose: "Deliver fast and reliable fiber-based connectivity",
    users: "Residential users and small businesses",
    impact: "Improves user experience with high-speed internet",
    value: "Builds a strong customer base with recurring subscriptions",
    icon: FaWifi,
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "CenturyLink",
    desc: "Manages traditional telecom services while transitioning to modern infrastructure.",
    purpose: "Maintain legacy services while enabling migration to fiber",
    users: "Rural areas and existing telecom customers",
    impact: "Ensures continuity of services during transition",
    value: "Provides stable revenue while supporting future growth investments",
    icon: FaServer,
    color: "from-gray-500 to-gray-700"
  }
];

const LumenBrands = () => {
  return (
    <section id="lumen-brands" className="py-24 relative z-10 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-lumen-teal uppercase mb-3">Task 6 Playbook: Brand Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Lumen Brand Portfolio</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving Digital Innovation. A diverse portfolio of products and services designed to support businesses, consumers, and global infrastructure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {brandSegments.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group ${idx === brandSegments.length - 1 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${brand.color} opacity-10 rounded-bl-full`}></div>
              
              <div className="flex items-start gap-6 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                  <brand.icon />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{brand.title}</h4>
                  <p className="text-gray-600 font-medium mb-6">{brand.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase mb-1">Purpose</div>
                  <div className="text-sm text-gray-800">{brand.purpose}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase mb-1">Target Users</div>
                  <div className="text-sm text-gray-800">{brand.users}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase mb-1">Impact</div>
                  <div className="text-sm text-lumen-teal font-medium">{brand.impact}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase mb-1">Value</div>
                  <div className="text-sm text-gray-800 font-bold">{brand.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-[#00363a] rounded-3xl p-10 text-center text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h4 className="text-2xl font-bold mb-6 text-lumen-cyan relative z-10">Building the Future of Connectivity</h4>
          <p className="text-lg text-gray-300 relative z-10">
            Lumen's brand portfolio demonstrates a balanced approach between innovation and stability. By combining enterprise solutions, next-generation services, cybersecurity, and consumer connectivity, Lumen continues to lead the way in powering the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LumenBrands;
