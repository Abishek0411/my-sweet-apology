import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FloatingHeart from './FloatingHeart';
import Sparkle from './Sparkle';

interface GameSectionProps {
  onSurpriseUnveiled: () => void;
}

const GameSection: React.FC<GameSectionProps> = ({ onSurpriseUnveiled }) => {
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 });
  const [input, setInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const dodgeButton = useCallback(() => {
    if (!isUnlocked) {
      setAttempts(prev => prev + 1);
      const newX = Math.random() * 60 + 10; // 10-70% to keep it in viewport
      const newY = Math.random() * 60 + 10; // 10-70% to keep it in viewport
      setButtonPosition({ x: newX, y: newY });
    }
  }, [isUnlocked]);
  
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isUnlocked) return;

      const button = document.getElementById("surprise-button");
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        // If cursor is within 100px, dodge!
        dodgeButton();
      }
    },
    [isUnlocked, dodgeButton]
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.toLowerCase() === 'forgive') {
      setIsUnlocked(true);
      setButtonPosition({ x: 50, y: 50 }); // Center the button
    }
  };

  const handleSurpriseClick = () => {
    if (isUnlocked) {
      // Unveil the surprise sections
      onSurpriseUnveiled();
      
      // Scroll to surprise section after a brief delay to allow rendering
      setTimeout(() => {
        const surpriseSection = document.getElementById('surprise-section');
        surpriseSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="scroll-snap-section bg-gradient-romantic min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingHeart delay={0} className="top-16 left-16" size="lg" />
      <FloatingHeart delay={1} className="top-32 right-20" size="md" color="red" />
      <FloatingHeart delay={2} className="bottom-20 left-24" size="sm" color="purple" />
      <Sparkle delay={0.5} className="top-24 left-1/3" />
      <Sparkle delay={1.5} className="bottom-32 right-1/4" />
      <Sparkle delay={2.5} className="top-40 right-1/3" />

      <div className="text-center px-6 max-w-2xl mx-auto relative">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bubbly font-bold text-white drop-shadow-lg mb-6">
            Catch Me If You Can! 😜
          </h2>
          <p className="text-xl font-bubbly text-white/90 drop-shadow">
            Try to click the surprise button... I dare you! 
          </p>
        </div>

        {/* Dodging Button Container */}
        <div className="relative h-64 mb-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/30 overflow-hidden">
          <Button
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 font-bubbly text-lg px-6 py-3 ${
              isUnlocked 
                ? 'bg-primary hover:bg-primary/90 cursor-pointer' 
                : 'bg-secondary hover:bg-secondary/90 cursor-pointer'
            }`}
            style={{
              left: `${buttonPosition.x}%`,
              top: `${buttonPosition.y}%`,
            }}
            onMouseEnter={dodgeButton}
            onClick={handleSurpriseClick}
          >
            🎁 SURPRISE 🎁
          </Button>
        </div>

        {attempts > 0 && !isUnlocked && (
          <div className="mb-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border-2 border-love-pink/30">
            <p className="text-lg font-bubbly text-foreground">
              Hehe! You tried {attempts} time{attempts > 1 ? 's' : ''}! 😆
            </p>
          </div>
        )}

        {/* Input Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-dreamy border-2 border-love-pink/30">
          <Label htmlFor="forgive-input" className="text-xl font-bubbly font-bold text-foreground mb-4 block">
            Hint: type 'Forgive' to unlock the surprise 💌
          </Label>
          <Input
            id="forgive-input"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="text-center text-lg font-bubbly border-2 border-love-pink/50 focus:border-primary rounded-2xl h-12"
          />
          
          {isUnlocked && (
            <div className="mt-4 text-center">
              <div className="text-3xl animate-bounce-love mb-2">🎉</div>
              <p className="text-lg font-bubbly text-primary font-bold">
                Button unlocked! Now click it! 💕
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
