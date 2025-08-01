import React, { useState } from 'react';
import FloatingHeart from './FloatingHeart';
import Sparkle from './Sparkle';
import teddyBearHeart from '@/assets/teddy-bear-heart.jpg';
import { Progress } from '@/components/ui/progress';

const ForgivenessSection: React.FC = () => {
  const [forgiveness, setForgiveness] = useState(0);

  const handleHover = () => {
    setForgiveness(100);
  };

  const handleLeave = () => {
    setForgiveness(0);
  };

  return (
    <section className="scroll-snap-section bg-gradient-dreamy min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingHeart delay={0} className="top-16 left-16" size="md" color="purple" />
      <FloatingHeart delay={2} className="bottom-20 right-20" size="lg" color="red" />
      <Sparkle delay={1} className="top-24 right-1/3" />
      <Sparkle delay={3} className="bottom-32 left-1/3" />

      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* Floating Text */}
        <div className="mb-12 relative">
          <h2 className="text-5xl md:text-7xl font-bubbly font-bold text-white drop-shadow-lg animate-float">
            Please Forgive Me Babe 💗
          </h2>
          <div className="absolute -top-8 -left-8 text-4xl animate-wiggle">💕</div>
          <div className="absolute -bottom-8 -right-8 text-4xl animate-wiggle" style={{ animationDelay: '0.5s' }}>💖</div>
        </div>

        {/* Teddy Bear */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={teddyBearHeart} 
              alt="Teddy Bear with Heart" 
              className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-love"
            />
            <div className="absolute -top-4 -right-4 text-5xl animate-pulse-heart">💝</div>
          </div>
        </div>

        {/* Forgiveness Bar */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-dreamy border-2 border-soft-purple/30 cursor-pointer transform transition-all duration-300 hover:scale-105"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <h3 className="text-2xl md:text-3xl font-bubbly font-bold text-foreground mb-4">
            Forgiveness Level 💕
          </h3>
          <div className="relative">
            <Progress 
              value={forgiveness} 
              className="h-8 mb-4 bg-love-pink/30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bubbly font-bold text-foreground">
                {forgiveness === 100 ? "💕 FORGIVEN! 💕" : "Hover to fill my heart..."}
              </span>
            </div>
          </div>
          {forgiveness === 100 && (
            <div className="text-2xl animate-bounce-love">
              🎉 Thank you, my love! 🎉
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForgivenessSection;