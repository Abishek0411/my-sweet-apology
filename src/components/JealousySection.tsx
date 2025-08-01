import React, { useState, useEffect, useRef } from 'react';
import FloatingHeart from './FloatingHeart';
import Sparkle from './Sparkle';

const JealousySection: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [canStartSlide, setCanStartSlide] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const messages = [
    {
      text: "Who are the other three who wished you? 👀",
      emoji: "🤔",
      bgColor: "bg-sky-blue/80"
    },
    {
      text: "I hope none of them is a guy 😤",
      emoji: "😤",
      bgColor: "bg-destructive/20"
    },
    {
      text: "Am I still your #1?... 🥺",
      emoji: "🥺",
      bgColor: "bg-love-pink/80"
    }
  ];

  // Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentMessage(0); // show first message
          setTimeout(() => setCanStartSlide(true), 1000); // then start slideshow after 3s
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Slideshow logic (starts after first message)
  useEffect(() => {
    if (!canStartSlide) return;

    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [canStartSlide]);

  return (
    <section
      ref={sectionRef}
      className="scroll-snap-section bg-gradient-soft min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating decorations */}
      <FloatingHeart delay={0} className="top-20 left-12" size="sm" />
      <FloatingHeart delay={1} className="top-40 right-16" size="md" color="red" />
      <FloatingHeart delay={2} className="bottom-28 left-20" size="lg" color="purple" />
      <Sparkle delay={0.5} className="top-32 left-1/3" />
      <Sparkle delay={1.5} className="bottom-40 right-1/3" />
      <Sparkle delay={2.5} className="top-16 right-1/4" />

      <div className="text-center px-6 max-w-3xl mx-auto">
        {/* Speech Bubble */}
        <div className="relative mb-8">
          <div className={`${messages[currentMessage].bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-love border-4 border-white relative transform transition-all duration-500 hover:scale-105`}>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl animate-wiggle">{messages[currentMessage].emoji}</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bubbly font-bold text-foreground leading-relaxed">
              {messages[currentMessage].text}
            </h2>
          </div>
        </div>

        {/* Message indicator dots */}
        <div className="flex justify-center gap-3 mb-8">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentMessage === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted scale-100'
              }`}
            />
          ))}
        </div>

        {/* Cute Character */}
        <div className="relative">
          <div className="text-8xl animate-bounce-love mb-4">🐶</div>
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 inline-block border-2 border-love-pink/30 shadow-dreamy">
            <span className="text-lg font-bubbly font-bold text-muted-foreground">
              *puppy dog eyes*
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JealousySection;
