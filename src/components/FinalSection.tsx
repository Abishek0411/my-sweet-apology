import React from 'react';
import FloatingHeart from './FloatingHeart';
import Sparkle from './Sparkle';

const FinalSection: React.FC = () => {
  return (
    <section className="scroll-snap-section bg-gradient-romantic min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Extra floating decorations for the finale */}
      <FloatingHeart delay={0} className="top-10 left-10" size="lg" color="red" />
      <FloatingHeart delay={0.5} className="top-20 right-12" size="md" />
      <FloatingHeart delay={1} className="top-32 left-1/4" size="sm" color="purple" />
      <FloatingHeart delay={1.5} className="bottom-40 right-20" size="lg" />
      <FloatingHeart delay={2} className="bottom-20 left-16" size="md" color="red" />
      <FloatingHeart delay={2.5} className="top-40 right-1/3" size="sm" />
      
      <Sparkle delay={0} className="top-16 left-1/3" />
      <Sparkle delay={0.8} className="top-24 right-1/4" />
      <Sparkle delay={1.2} className="bottom-32 left-1/4" />
      <Sparkle delay={1.8} className="bottom-16 right-1/3" />
      <Sparkle delay={2.4} className="top-36 left-1/2" />

      <div className="text-center px-6 max-w-3xl mx-auto">
        {/* Main Declaration */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-dreamy border-4 border-love-pink/50 relative">
          {/* Decorative hearts around the border */}
          <div className="absolute -top-6 -left-6 text-4xl animate-pulse-heart">💖</div>
          <div className="absolute -top-6 -right-6 text-4xl animate-pulse-heart" style={{ animationDelay: '0.5s' }}>💕</div>
          <div className="absolute -bottom-6 -left-6 text-4xl animate-pulse-heart" style={{ animationDelay: '1s' }}>💗</div>
          <div className="absolute -bottom-6 -right-6 text-4xl animate-pulse-heart" style={{ animationDelay: '1.5s' }}>💝</div>
          
          <div className="text-6xl mb-8 animate-bounce-love">❤️</div>
          
          <h1 className="text-3xl md:text-5xl font-bubbly font-bold text-foreground mb-8 leading-relaxed">
            I love you so much, more than anything.
          </h1>
          
          <div className="flex justify-center gap-4 text-4xl mb-8">
            <span className="animate-wiggle">🥰</span>
            <span className="animate-wiggle" style={{ animationDelay: '0.2s' }}>😘</span>
            <span className="animate-wiggle" style={{ animationDelay: '0.4s' }}>💕</span>
            <span className="animate-wiggle" style={{ animationDelay: '0.6s' }}>🌟</span>
          </div>
          
          <p className="text-lg md:text-xl font-bubbly text-muted-foreground leading-relaxed mb-8">
            You are my everything, my sunshine, my reason to smile every day. 
            Thank you for being the most amazing person in my life! 💕✨
          </p>
          
          {/* Signature */}
          <div className="border-t-2 border-love-pink/30 pt-6">
            <p className="text-xl font-bubbly font-bold text-primary">
              Forever yours,
            </p>
            <p className="text-2xl font-bubbly font-bold text-foreground mt-2">
              Your Love 💖
            </p>
          </div>
        </div>

        {/* Floating "The End" */}
        <div className="mt-12">
          <div className="bg-love-pink/80 backdrop-blur-sm rounded-full px-8 py-4 inline-block border-2 border-white shadow-love">
            <span className="text-2xl font-bubbly font-bold text-white">
              💕 The End... or just the beginning? 💕
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;