import React from 'react';
import ApologySection from '@/components/ApologySection';
import ForgivenessSection from '@/components/ForgivenessSection';
import JealousySection from '@/components/JealousySection';
import GameSection from '@/components/GameSection';
import SurpriseSection from '@/components/SurpriseSection';
import FinalSection from '@/components/FinalSection';

const Index = () => {
  return (
    <div className="scroll-snap-container">
      <ApologySection />
      <ForgivenessSection />
      <JealousySection />
      <GameSection />
      <SurpriseSection />
      <FinalSection />
    </div>
  );
};

export default Index;
