import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FloatingHeart from './FloatingHeart';
import Sparkle from './Sparkle';

// Import all images
import firstRide from '@/assets/first-ride.jpg';
import bowlingCouple from '@/assets/bowling-couple.jpg';
import dancingCouple from '@/assets/dancing-couple.jpg';
import privateMoments from '@/assets/private-moments.png';
import weddingFuture from '@/assets/wedding-future.png';
import futureFamily from '@/assets/future-family.png';

const SurpriseSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const memories = [
    {
      image: firstRide,
      caption: "Us on our first ride 😍",
      emoji: "🏍️"
    },
    {
      image: bowlingCouple,
      caption: "Bowling king and his queen 🎳",
      emoji: "🎳"
    },
    {
      image: dancingCouple,
      caption: "Our dance 💃",
      emoji: "💃"
    },
    {
      image: privateMoments,
      caption: "Aerohub 👀",
      emoji: "😘"
    },
    {
      image: weddingFuture,
      caption: "Shaadi loading in 2 ways ❤️⛪",
      emoji: "💒"
    },
    {
      image: futureFamily,
      caption: "Our future fam 🍼👨‍👩‍👧‍👦",
      emoji: "👨‍👩‍👧‍👦"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section id="surprise-section" className="scroll-snap-section bg-gradient-dreamy min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingHeart delay={0} className="top-12 left-12" size="lg" color="red" />
      <FloatingHeart delay={1} className="top-20 right-16" size="md" />
      <FloatingHeart delay={2} className="bottom-16 left-20" size="sm" color="purple" />
      <FloatingHeart delay={3} className="bottom-32 right-12" size="md" color="red" />
      <Sparkle delay={0.5} className="top-32 left-1/4" />
      <Sparkle delay={1.5} className="bottom-40 right-1/3" />
      <Sparkle delay={2.5} className="top-16 right-1/4" />
      <Sparkle delay={3.5} className="bottom-20 left-1/3" />

      <div className="text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bubbly font-bold text-white drop-shadow-lg mb-4">
            Our Love Story 💕
          </h2>
          <p className="text-xl font-bubbly text-white/90 drop-shadow">
            Swipe through our beautiful memories together!
          </p>
        </div>

        {/* Carousel */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-dreamy border-2 border-love-pink/30 max-w-2xl mx-auto">
          <div className="relative mb-6">
            {/* Image */}
            <div className="aspect-video rounded-2xl overflow-hidden border-4 border-love-pink/30 shadow-love">
              <img 
                src={memories[currentSlide].image}
                alt={memories[currentSlide].caption}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full w-12 h-12 p-0 shadow-love"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full w-12 h-12 p-0 shadow-love"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Caption */}
          <div className="text-center">
            <div className="text-4xl mb-3 animate-pulse-heart">
              {memories[currentSlide].emoji}
            </div>
            <h3 className="text-xl md:text-2xl font-bubbly font-bold text-foreground">
              {memories[currentSlide].caption}
            </h3>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;