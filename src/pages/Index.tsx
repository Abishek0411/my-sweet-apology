import React, { useState } from 'react';
import ApologySection from '@/components/ApologySection';
import ForgivenessSection from '@/components/ForgivenessSection';
import JealousySection from '@/components/JealousySection';
import GameSection from '@/components/GameSection';
import SurpriseSection from '@/components/SurpriseSection';
import FinalSection from '@/components/FinalSection';

const Index = () => {
  const [isSurpriseUnveiled, setIsSurpriseUnveiled] = useState(false);

  const unveilSurprise = () => {
    setIsSurpriseUnveiled(true);
  };

  return (
    <div className="scroll-snap-container">
      <ApologySection />
      <ForgivenessSection />
      <JealousySection />
      <GameSection onSurpriseUnveiled={unveilSurprise} />
      {isSurpriseUnveiled && <SurpriseSection />}
      {isSurpriseUnveiled && <FinalSection />}
    </div>
  );
};

export default Index;
