import React from 'react';
import { motion } from 'framer-motion';
import { FaShoePrints, FaUserNinja, FaHistory, FaSearch, FaCity, FaTags, FaMicrophoneAlt, FaInfinity, FaMapSigns, FaSitemap, FaUsers, FaLightbulb, FaProjectDiagram, FaHandshake, FaCalendarAlt, FaPodcast, FaRocket } from 'react-icons/fa';

const challengeTasks = [
  {
    id: 1,
    title: "First Footsteps",
    icon: FaShoePrints,
    taskTitle: "Find out what Inside Lumen is all about.",
    details: [
      { label: "Where to begin?", text: "Navigate Inside Lumen Page and go all out on a search mission." },
      { label: "Your Checkpoint", text: "Once you've explored, choose a format for your answer and upload it on the form." },
      { label: "Ideas", text: "Weave your own story, draw comparisons, and create analogies for your answers." },
      { label: "Pro Tip", text: "Get comfortable with navigating Inside Lumen, and become a true Lumen Explorer." }
    ],
    points: 3,
    color: "from-orange-400 to-red-500",
    playbookSectionId: "universe",
    playbookText: "View Digital Universe Playbook"
  },
  {
    id: 2,
    title: "Navigation Ninja",
    icon: FaUserNinja,
    taskTitle: "Dive into Inside Lumen and uncover the different types of content available and how they differ from each other.",
    details: [
      { label: "Where to begin?", text: "Start exploring Inside Lumen homepage and look at how the content is organised." },
      { label: "Pro Tip", text: "Don't just scroll. Observe patterns. Notice how content is structured, updated and used." }
    ],
    points: 3,
    color: "from-yellow-300 to-orange-400",
    playbookSectionId: "timeline",
    playbookText: "View Content Journey Playbook"
  },
  {
    id: 3,
    title: "Origin Story",
    icon: FaHistory,
    taskTitle: "Travel through time and discover how Lumen has evolved as a company.",
    details: [
      { label: "Overview", text: "Lumen's story is one of transformation, growth and innovation." },
      { label: "Why It Matters", text: "Understanding Lumen's journey will help you connect the dots, from where we started to where we are to where we are headed next." }
    ],
    points: 3,
    color: "from-gray-700 to-black",
    playbookSectionId: "origin-story",
    playbookText: "View Origin Odyssey Playbook"
  },
  {
    id: 4,
    title: "Search Hero",
    icon: FaSearch,
    taskTitle: "Search smart and uncover the meaning. What does the \"Lumen Story\" represent?",
    details: [
      { label: "Pro Tip", text: "Don't just search. Interpret. Look for the transformation journey. Look at the big picture." }
    ],
    points: "Bonus",
    color: "from-teal-400 to-cyan-500",
    playbookSectionId: "lumen-story",
    playbookText: "View Lumen Story Synthesis"
  },
  {
    id: 5,
    title: "What is Lumen Today?",
    icon: FaCity,
    taskTitle: "You've explored the past... now it's time to understand the present. What does Lumen do today?",
    details: [
      { label: "Why It Matters", text: "Understanding what Lumen delivers today will help you connect your role to the bigger picture." },
      { label: "Pro Tip", text: "Stitch it together - what Lumen offers, what Lumen delivers and the impact we create." }
    ],
    points: 3,
    color: "from-blue-800 to-cyan-900",
    playbookSectionId: "lumen-city",
    playbookText: "View Lumen City Playbook"
  },
  {
    id: 6,
    title: "Brand Discovery",
    icon: FaTags,
    taskTitle: "Go beyond the basics and start understanding how Lumen connects to real purpose and impact.",
    details: [
      { label: "The Challenge", text: "Explore and map Lumen's brands to their purpose - who their clients are and what value they create." }
    ],
    points: 5,
    color: "from-orange-500 to-red-600",
    playbookSectionId: "lumen-brands",
    playbookText: "View Brand Portfolio"
  },
  {
    id: 7,
    title: "Wisdom Drop - Kate's Insight",
    icon: FaMicrophoneAlt,
    taskTitle: "Connect leadership thinking to your own journey as an intern.",
    details: [
      { label: "The Challenge", text: "Pick a quote by our CEO, Kate Johnson and share with us - how it applies to you as an intern." }
    ],
    points: 5,
    color: "from-teal-600 to-teal-800",
    playbookSectionId: "lumen-culture",
    playbookText: "View Culture & Mindset"
  },
  {
    id: 8,
    title: "Behaviour in Action",
    icon: FaInfinity,
    taskTitle: "You've explored, searched, and reflected. Now bring it to life where theory meets reality.",
    details: [
      { label: "The Challenge", text: "Describe real workplace examples you have experienced in your role as an intern for the Lumen 8 Behaviours." }
    ],
    points: 5,
    color: "from-orange-400 to-amber-500",
    playbookSectionId: "lumen-behaviours",
    playbookText: "View The Lumen Way"
  },
  {
    id: 9,
    title: "Learning Path Planner",
    icon: FaMapSigns,
    taskTitle: "Design your own learning journey at Lumen.",
    details: [
      { label: "The Challenge", text: "Create a 30 day learning plan using the resources available at Lumen. Think of it as your personal roadmap to becoming smarter, sharper and more confident." },
      { label: "Pro Tip", text: "The best learners don't wait for growth - they plan it." }
    ],
    points: 5,
    color: "from-orange-300 to-orange-400",
    playbookSectionId: "lumen-roadmap",
    playbookText: "View AI Learning Roadmap"
  },
  {
    id: 10,
    title: "Global Leadership Map",
    icon: FaSitemap,
    taskTitle: "See the bigger picture of how Leadership shapes direction, decisions and impact at Lumen.",
    details: [
      { label: "The Challenge", text: "Create a story that explains the Global Leadership Hierarchy at Lumen. Not just the names or roles, tell the story of how leadership connects, flows, and drives Lumen." }
    ],
    points: 5,
    color: "from-green-300 to-teal-400",
    playbookSectionId: "lumen-leadership",
    playbookText: "View Leadership Ecosystem"
  },
  {
    id: 11,
    title: "India Leadership Map",
    icon: FaSitemap,
    taskTitle: "Explore the India Leadership Map",
    details: [
      { label: "The Challenge", text: "Create a story that explains the India Leadership Hierarchy at Lumen. Tell the story of how leadership connects, flows, and drives Lumen." }
    ],
    points: 5,
    color: "from-teal-300 to-emerald-500",
    playbookSectionId: "lumen-leadership",
    playbookText: "View India Leadership"
  },
  {
    id: 12,
    title: "Decoding Team Journeys - STEPN",
    icon: FaProjectDiagram,
    taskTitle: "Explain the STEPN Journey.",
    details: [
      { label: "The Challenge", text: "From past to present, from old names to new ones, from strategy to execution and innovation. Think about the A to Z of the STEPN team and explain the journey." }
    ],
    points: 5,
    color: "from-yellow-400 to-yellow-600",
    playbookSectionId: "stepn-engine",
    playbookText: "View STEPN Journey"
  },
  {
    id: 13,
    title: "Decoding Team Journeys - Customer Advocacy",
    icon: FaProjectDiagram,
    taskTitle: "Explain the Customer Advocacy Journey.",
    details: [
      { label: "The Challenge", text: "From past to present, from old names to new ones, from strategy to execution and innovation. Think about the A to Z of the Customer Advocacy team and explain the journey." }
    ],
    points: 5,
    color: "from-yellow-500 to-orange-500",
    playbookSectionId: "customer-advocacy",
    playbookText: "View Customer Advocacy"
  },
  {
    id: 14,
    title: "Decoding Team Journeys - GCO",
    icon: FaProjectDiagram,
    taskTitle: "Explain the GCO Journey.",
    details: [
      { label: "The Challenge", text: "From past to present, from old names to new ones, from strategy to execution and innovation. Think about the A to Z of the GCO team and explain the journey." }
    ],
    points: 5,
    color: "from-orange-300 to-orange-500",
    playbookSectionId: "gco-india",
    playbookText: "View GCO Journey"
  },
  {
    id: 15,
    title: "Collaboration in Action",
    icon: FaUsers,
    taskTitle: "Power up your teamwork and uncover collaboration platforms.",
    details: [
      { label: "The Challenge", text: "Uncover all the collaboration platforms used across Lumen and explain how they enable teams to work together." }
    ],
    points: 3,
    color: "from-teal-300 to-teal-500",
    playbookSectionId: "collaboration-iceberg",
    playbookText: "View Collaboration Iceberg"
  },
  {
    id: 16,
    title: "Innovation & Continuous Improvement",
    icon: FaLightbulb,
    taskTitle: "Enhance processes and create efficient systems.",
    details: [
      { label: "The Challenge", text: "Innovation and continuous improvement are essential for organizations to stay competitive and deliver value. Explore how Lumen embraces innovation." }
    ],
    points: 3,
    color: "from-orange-400 to-orange-600",
    playbookSectionId: "innovation-improvement",
    playbookText: "View Innovation & Improvement"
  },
  {
    id: 17,
    title: "Digital Transformation & Operational Excellence",
    icon: FaProjectDiagram,
    taskTitle: "Adopt modern technologies and tools.",
    details: [
      { label: "The Challenge", text: "Digital transformation plays a critical role in modern organizations. Explain how it improves efficiency and enhances customer experience at Lumen." }
    ],
    points: 5,
    color: "from-amber-300 to-yellow-500",
    playbookSectionId: "digital-transformation",
    playbookText: "View Digital Transformation"
  },
  {
    id: 18,
    title: "Industry Presence",
    icon: FaCalendarAlt,
    taskTitle: "Explore and discover the events hosted by Lumen.",
    details: [
      { label: "The Challenge", text: "Explore and discover the events hosted by Lumen, both internal and external. Tell us about the event and how they have created an impact." }
    ],
    points: 3,
    color: "from-red-300 to-red-500",
    playbookSectionId: "industry-presence",
    playbookText: "View Industry Presence"
  },
  {
    id: 19,
    title: "Good Fibes Only",
    icon: FaPodcast,
    taskTitle: "Listen, interpret, and provide a detailed breakdown.",
    details: [
      { label: "The Challenge", text: "Explore 'Good Fibes Only' on Inside Lumen and uncover what it's all about. Your submission should answer what it is, what it focuses on, and what impact it creates." }
    ],
    points: 3,
    color: "from-orange-500 to-red-500",
    playbookSectionId: "good-fibes-only",
    playbookText: "View Good Fibes Only"
  },
  {
    id: 20,
    title: "Transformation Story",
    icon: FaRocket,
    taskTitle: "Uncover the transformation theme.",
    details: [
      { label: "The Challenge", text: "Explore Inside Lumen and uncover the transformation theme. Tell us what you understand about where Lumen is headed." }
    ],
    points: 5,
    color: "from-yellow-400 to-orange-500",
    playbookSectionId: "transformation-story",
    playbookText: "View Transformation Story"
  }
];

const ChallengeTasks = () => {
  return (
    <section id="tasks" className="py-24 relative z-10 bg-white text-space-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00363a]">The Explorer Missions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Complete all 20 tasks to gather points, uncover knowledge, and build the foundation for your final Playbook.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600">3 Point Tasks</span>
            <span className="px-4 py-2 bg-orange-100 rounded-full text-orange-600">5 Point Tasks</span>
            <span className="px-4 py-2 bg-teal-100 rounded-full text-teal-700">Bonus Task</span>
          </div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {challengeTasks.map((task, idx) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.05 }}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row"
            >
              {/* Task Sidebar / Number */}
              <div className={`bg-gradient-to-br ${task.color} p-6 md:w-64 flex flex-col items-center justify-center text-center text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <task.icon className="text-5xl mb-4 drop-shadow-md" />
                <div className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">Task {task.id}</div>
                <h3 className="text-xl font-black px-2">{task.title}</h3>
                <div className="mt-6 bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/30 font-bold">
                  {task.points} {typeof task.points === 'number' ? 'Points' : ''}
                </div>
              </div>
              
              {/* Task Content */}
              <div className="p-8 md:p-10 flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200 leading-relaxed">
                  {task.taskTitle}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {task.details.map((detail, i) => (
                    <div key={i} className={`p-4 rounded-xl border shadow-sm ${detail.label.includes('Pro Tip') ? 'bg-orange-50/50 border-orange-100' : 'bg-white border-gray-100'}`}>
                      <div className="text-xs font-bold uppercase tracking-wider text-lumen-teal mb-2 flex items-center gap-2">
                        {detail.label.includes('Pro Tip') && <span className="text-orange-500 text-lg">★</span>}
                        {detail.label}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{detail.text}</p>
                    </div>
                  ))}
                </div>
                
                {task.playbookSectionId && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <a 
                      href={`#${task.playbookSectionId}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-space-dark text-white font-bold rounded-full hover:bg-lumen-teal transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
                    >
                      <span>{task.playbookText || 'View Playbook Answer'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeTasks;
