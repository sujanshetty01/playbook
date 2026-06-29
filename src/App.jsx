import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChallengeOverview from './components/ChallengeOverview';
import ChallengeTasks from './components/ChallengeTasks';
import DigitalUniverse from './components/DigitalUniverse';
import Timeline from './components/Timeline';
import FeatureCards from './components/FeatureCards';
import Countdown from './components/Countdown';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LumenCity from './components/LumenCity';
import LumenHistory from './components/LumenHistory';
import StepnEngine from './components/StepnEngine';
import CollaborationIceberg from './components/CollaborationIceberg';
import LumenStory from './components/LumenStory';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ChallengeOverview />
      <ChallengeTasks />
      <Timeline />
      <FeatureCards />
      <LumenCity />
      <DigitalUniverse />
      <CollaborationIceberg />
      <LumenHistory />
      <LumenStory />
      <StepnEngine />
      <Countdown />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
