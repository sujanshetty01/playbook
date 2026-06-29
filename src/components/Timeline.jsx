import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaRegNewspaper, FaUsers, FaLink, FaCalendarAlt, FaBookOpen, FaCheckCircle, FaSearch, FaBookmark, FaSyncAlt } from 'react-icons/fa';

const journeySteps = [
  { 
    id: 1, 
    icon: FaRegNewspaper,
    title: 'NEWS & ANNOUNCEMENTS', 
    subtitle: 'Stay Informed. Stay Ahead.',
    color: 'text-blue-400',
    details: [
      { label: 'Purpose', text: 'Timely updates and important company news.' },
      { label: "What You'll Find", text: 'Policy updates, leadership messages, operational changes.' },
      { label: 'Why It Matters', text: "Keeps you informed and aligned with what's happening." }
    ]
  },
  { 
    id: 2, 
    icon: FaUsers,
    title: 'STORIES & FEATURES', 
    subtitle: 'Be Inspired. Be Recognized.',
    color: 'text-purple-400',
    details: [
      { label: 'Purpose', text: 'Highlight people, achievements and initiatives.' },
      { label: "What You'll Find", text: 'Employee stories, project spotlights, success journeys.' },
      { label: 'Why It Matters', text: 'Inspires, builds connection and celebrates our culture.' }
    ]
  },
  { 
    id: 3, 
    icon: FaLink,
    title: 'QUICK LINKS / RESOURCES', 
    subtitle: 'Find Fast. Work Smart.',
    color: 'text-lumen-orange',
    details: [
      { label: 'Purpose', text: 'Easy access to tools and essential resources.' },
      { label: "What You'll Find", text: 'HR tools, IT support, policies, templates, systems.' },
      { label: 'Why It Matters', text: 'Saves time and helps you get things done efficiently.' }
    ]
  },
  { 
    id: 4, 
    icon: FaCalendarAlt,
    title: 'EVENTS & HIGHLIGHTS', 
    subtitle: 'Engage. Participate. Connect.',
    color: 'text-green-400',
    details: [
      { label: 'Purpose', text: 'Share upcoming events and key highlights.' },
      { label: "What You'll Find", text: 'Event invites, recaps, campaigns, important dates.' },
      { label: 'Why It Matters', text: 'Helps you stay engaged and be part of the Lumen community.' }
    ]
  },
  { 
    id: 5, 
    icon: FaBookOpen,
    title: 'LEARNING & DEVELOPMENT', 
    subtitle: 'Learn. Grow. Succeed.',
    color: 'text-blue-500',
    details: [
      { label: 'Purpose', text: 'Support your continuous learning and growth.' },
      { label: "What You'll Find", text: 'Courses, learning paths, resources, certifications.' },
      { label: 'Why It Matters', text: 'Builds skills, boosts confidence and fuels your future.' }
    ]
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative z-10 bg-space-dark/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Content Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Navigate. Discover. Grow. Your journey to smart, connected learning and engagement starts here.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Winding Path Line (Simplified as straight for CSS, but styled creatively) */}
          <div className="absolute left-[28px] lg:left-1/2 top-0 bottom-32 w-2 bg-gradient-to-b from-lumen-yellow via-lumen-orange to-lumen-cyan transform lg:-translate-x-1/2 opacity-20 rounded-full border border-white/5"></div>

          {/* Start Here */}
          <div className="flex justify-center mb-16 relative z-10">
            <div className="glass px-8 py-4 rounded-full flex items-center gap-4 border-lumen-yellow shadow-[0_0_20px_rgba(255,227,109,0.3)]">
              <div className="w-10 h-10 rounded-full bg-lumen-yellow/20 flex items-center justify-center text-lumen-yellow">
                <FaPlay className="ml-1" />
              </div>
              <div>
                <div className="text-lumen-yellow font-bold text-sm tracking-widest uppercase">Start Here</div>
                <div className="text-white font-bold text-xl">Open Inside Lumen</div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-start lg:items-center relative ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-[12px] lg:left-1/2 w-10 h-10 bg-space-dark border-[3px] border-white text-white rounded-full transform lg:-translate-x-1/2 z-10 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {step.id}
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${idx % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16 text-left'}`}>
                  <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors border-t-4" style={{ borderTopColor: 'rgba(255,255,255,0.1)' }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-4xl ${step.color}`}>
                        <step.icon />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className={`font-semibold ${step.color}`}>{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      {step.details.map((detail, i) => (
                        <div key={i} className="text-sm">
                          <span className="font-bold text-gray-300">{detail.label}: </span>
                          <span className="text-gray-400">{detail.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Cards Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-24 relative z-10">
            <div className="glass p-6 rounded-2xl bg-lumen-orange/10 border-lumen-orange/30">
              <h4 className="text-xl font-bold text-lumen-orange mb-2">YOU DID IT!</h4>
              <p className="text-gray-300 text-sm">
                You've explored the 5 key areas of content Inside Lumen.<br/><br/>
                Keep navigating. Keep growing. Keep shining!
              </p>
            </div>
            
            <div className="glass p-6 rounded-2xl bg-lumen-yellow/10 border-lumen-yellow/30 text-center flex flex-col justify-center">
              <h4 className="text-xl font-bold text-lumen-yellow mb-2">ONE PLATFORM. ONE LUMEN. ONE FUTURE.</h4>
              <p className="text-gray-300 text-sm">
                Every click brings you closer to growth, connection and impact.
              </p>
            </div>
            
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-4">PRO TIPS FOR NAVIGATING</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <FaSearch className="text-lumen-cyan mt-1 flex-shrink-0" />
                  <span>Use the search bar to find content faster.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <FaBookmark className="text-lumen-cyan mt-1 flex-shrink-0" />
                  <span>Bookmark important pages.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <FaSyncAlt className="text-lumen-cyan mt-1 flex-shrink-0" />
                  <span>Check back often - content is always evolving!</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Timeline;
