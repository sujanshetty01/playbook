import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChallengeTasks from './components/ChallengeTasks';
import FeatureCards from './components/FeatureCards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Playbook Answer Sections (ordered by task number)
import DigitalUniverse from './components/DigitalUniverse';       // Task 1
import Timeline from './components/Timeline';                     // Task 2
import LumenHistory from './components/LumenHistory';             // Task 3
import LumenStory from './components/LumenStory';                 // Task 4
import LumenCity from './components/LumenCity';                   // Task 5
import LumenBrands from './components/LumenBrands';               // Task 6
import LumenCulture from './components/LumenCulture';             // Task 7
import LumenBehaviours from './components/LumenBehaviours';       // Task 8
import LumenRoadmap from './components/LumenRoadmap';             // Task 9
import LumenLeadership from './components/LumenLeadership';       // Task 10
import StepnEngine from './components/StepnEngine';               // Task 12
import CustomerAdvocacy from './components/CustomerAdvocacy';     // Task 13
import GCOIndia from './components/GCOIndia';                     // Task 14
import CollaborationIceberg from './components/CollaborationIceberg'; // Task 15
import InnovationImprovement from './components/InnovationImprovement'; // Task 16
import DigitalTransformation from './components/DigitalTransformation'; // Task 17
import IndustryPresence from './components/IndustryPresence';     // Task 18
import GoodFibesOnly from './components/GoodFibesOnly';           // Task 19
import TransformationStory from './components/TransformationStory'; // Task 20
import LumenDigitalExperience from './components/LumenDigitalExperience'; // Final

const playbookIndex = [
  { task: 1, title: "Inside Lumen — Your Digital Universe", anchor: "universe", color: "from-blue-500 to-lumen-cyan" },
  { task: 2, title: "Navigation Ninja", anchor: "timeline", color: "from-purple-500 to-pink-500" },
  { task: 3, title: "The Origin Story of Lumen", anchor: "origin-story", color: "from-lumen-orange to-lumen-yellow" },
  { task: 4, title: "The Meaning Behind Lumen", anchor: "lumen-story", color: "from-green-400 to-emerald-600" },
  { task: 5, title: "Lumen City — The Digital Ecosystem", anchor: "lumen-city", color: "from-lumen-teal to-blue-600" },
  { task: 6, title: "Lumen's Brand Portfolio", anchor: "lumen-brands", color: "from-lumen-orange to-red-500" },
  { task: 7, title: "Culture & Mindset", anchor: "lumen-culture", color: "from-purple-400 to-indigo-600" },
  { task: 8, title: "Core Behaviours", anchor: "lumen-behaviours", color: "from-pink-500 to-rose-600" },
  { task: 9, title: "Your Learning Roadmap", anchor: "lumen-roadmap", color: "from-amber-400 to-orange-600" },
  { task: 10, title: "Global Leadership Map", anchor: "lumen-leadership", color: "from-teal-300 to-emerald-500" },
  { task: 11, title: "India Leadership Map", anchor: "lumen-leadership", color: "from-teal-300 to-emerald-500" },
  { task: 12, title: "Decoding Team Journeys - STEPN", anchor: "stepn-engine", color: "from-yellow-400 to-yellow-600" },
  { task: 13, title: "Decoding Team Journeys - Customer Advocacy", anchor: "customer-advocacy", color: "from-blue-400 to-indigo-500" },
  { task: 14, title: "Decoding Team Journeys - GCO", anchor: "gco-india", color: "from-orange-400 to-red-500" },
  { task: 15, title: "The Collaboration Iceberg", anchor: "collaboration-iceberg", color: "from-cyan-400 to-blue-600" },
  { task: 16, title: "Innovation & Continuous Improvement", anchor: "innovation-improvement", color: "from-green-500 to-teal-500" },
  { task: 17, title: "Digital Transformation & Excellence", anchor: "digital-transformation", color: "from-indigo-400 to-purple-600" },
  { task: 18, title: "Lumen's Industry Presence", anchor: "industry-presence", color: "from-blue-500 to-cyan-500" },
  { task: 19, title: "Good Fibes Only", anchor: "good-fibes-only", color: "from-orange-500 to-red-500" },
  { task: 20, title: "The Transformation Story", anchor: "transformation-story", color: "from-yellow-400 to-orange-500" },
];

const PlaybookDivider = () => (
  <section id="playbook-answers" className="py-24 relative z-10 bg-gradient-to-b from-space-dark via-[#060d1a] to-space-dark">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-lumen-cyan/50"></div>
          <span className="text-4xl">📖</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-lumen-cyan/50"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Playbook Answers</h2>
        <p className="text-lg text-gray-400">A task-by-task breakdown of our exploration through the Lumen ecosystem. Click any section below to jump directly to it.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playbookIndex.map((item, idx) => (
          <motion.a
            key={item.task}
            href={`#${item.anchor}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
            className="group glass p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
            <div className="flex items-start gap-3">
              <span className="text-xs font-bold text-lumen-cyan bg-lumen-cyan/10 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.task}
              </span>
              <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors leading-snug">
                {item.title}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ChallengeTasks />
      <FeatureCards />

      {/* Section Divider */}
      <PlaybookDivider />

      {/* Playbook Answers — ordered by task number */}
      <DigitalUniverse />          {/* Task 1 */}
      <Timeline />                 {/* Task 2 */}
      <LumenHistory />             {/* Task 3 */}
      <LumenStory />               {/* Task 4 */}
      <LumenCity />                {/* Task 5 */}
      <LumenBrands />              {/* Task 6 */}
      <LumenCulture />             {/* Task 7 */}
      <LumenBehaviours />          {/* Task 8 */}
      <LumenRoadmap />             {/* Task 9 */}
      <LumenLeadership />          {/* Task 10 */}
      <StepnEngine />              {/* Task 12 */}
      <CustomerAdvocacy />         {/* Task 13 */}
      <GCOIndia />                 {/* Task 14 */}
      <CollaborationIceberg />     {/* Task 15 */}
      <InnovationImprovement />    {/* Task 16 */}
      <DigitalTransformation />    {/* Task 17 */}
      <IndustryPresence />         {/* Task 18 */}
      <GoodFibesOnly />            {/* Task 19 */}
      <TransformationStory />      {/* Task 20 */}
      <LumenDigitalExperience />   {/* Final */}

      <Footer />
    </div>
  );
}

export default App;
