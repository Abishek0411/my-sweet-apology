import React from 'react';
import FloatingHeart from './FloatingHeart';
import Sparkle from './Sparkle';
import apologyPhoto from '@/assets/apology-photo.jpg';
import { playLoveMusic } from './LoveMusicPlayer'; // 👈 import this

const ApologySection: React.FC = () => {
  const handlePlayMusic = () => {
    playLoveMusic();
  };

  return (
    <section className="scroll-snap-section bg-gradient-romantic min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingHeart delay={0} className="top-20 left-20" size="lg" />
      <FloatingHeart delay={1.5} className="top-32 right-32" size="md" />
      <Sparkle delay={0.5} className="top-40 left-1/4" />
      <Sparkle delay={2} className="bottom-40 right-1/4" />
      
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Photo Frame */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-love bg-white p-2">
            <img 
              src={apologyPhoto} 
              alt="Apology" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -top-4 -right-4 text-6xl animate-pulse-heart">🥺</div>
        </div>

        {/* Apology Text */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-dreamy border-2 border-love-pink/30">
          <h1 className="text-4xl md:text-5xl font-bubbly font-bold text-foreground mb-6">
            I Apologise 😢
          </h1>
          <p className="text-lg md:text-xl font-bubbly text-muted-foreground leading-relaxed">
            My bad. I haven't been watching so many reels, but I can't justify it. 
            I'm really sorry. 🥺
          </p>
          <div className="flex justify-center mt-6 gap-4 text-3xl">
            <span className="animate-bounce-love">😢</span>
            <span className="animate-bounce-love" style={{ animationDelay: '0.1s' }}>🥺</span>
            <span className="animate-bounce-love" style={{ animationDelay: '0.2s' }}>💔</span>
          </div>

          {/* 🎵 Music Trigger Button */}
          <button
            onClick={handlePlayMusic}
            className="mt-8 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bubbly text-lg shadow-love transition-all duration-300"
          >
            💖 Click for music
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApologySection;
