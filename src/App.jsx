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

const PlaybookDivider = () => (
  <section id="playbook-answers" className="py-16 relative z-10 bg-gradient-to-b from-space-dark to-[#020813]">
    <div className="container mx-auto px-6 lg:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-lumen-cyan/50"></div>
          <span className="text-4xl">📖</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-lumen-cyan/50"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Playbook Answers</h2>
        <p className="text-lg text-gray-400">Task-by-task breakdown of our exploration through the Lumen ecosystem.</p>
      </motion.div>
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

      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
