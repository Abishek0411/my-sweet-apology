import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import FloatingHeart from './FloatingHeart';
import Sparkle from './Sparkle';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const MessageScroll: React.FC = () => {
  const [unlockedMessages, setUnlockedMessages] = useState<number[]>([]);
  const [currentTyping, setCurrentTyping] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  const messages = [
    {
      sender: "You",
      text: "You forgot to wish 🙄",
      time: "2:30 PM",
      type: "received"
    },
    {
      sender: "Me",
      text: "I made a whole damn website 😤",
      time: "2:35 PM", 
      type: "sent"
    },
    {
      sender: "You",
      text: "Wait... what? 😳",
      time: "2:36 PM",
      type: "received"
    },
    {
      sender: "Me", 
      text: "Surprise! This is my apology 💕",
      time: "2:37 PM",
      type: "sent"
    },
    {
      sender: "You",
      text: "OMG! let me take a look🥰",
      time: "2:40 PM",
      type: "received"
    },
    {
      sender: "Me",
      text: "This is the least I could do for my gundu boi 💖✨",
      time: "2:41 PM",
      type: "sent"
    },
    {
      sender: "You",
      text: "You're forgiven... and loved 💕",
      time: "2:45 PM",
      type: "received"
    }
  ];

  useEffect(() => {
    // Create audio element for background music
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMaBzSByPDIeSYFKnXH7N2OSQsUXLTl7aBSFAk+ntjyylwZATKAyPDbfCkHJnLB7N2QQAoUXrTp66hVFAk+ntjyylwZATKByPDZfCYFJ3LA7N2OSQsTV7Pk7aBSFAk+ntjzxlwZATNdyO9LeCsGI3LA6dqNRwsRVbLj6qFMEwhyotjqsl4ZCSeI1PXNhC4OJnS57t6QNQYLZb7h4aNWGAcwjNbyxl8YBCcfx+3VhysNKnLA6dqNRwsRVbLj6qFMEwhxo9jqsV4ZCihxo9jqsV4ZCicewu7VhysNKnLA6dqNRwsRVbLj6qFMEwhxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCihxo9jqsV4ZCi'); // Placeholder for music box sound
    setAudioRef(audio);
    
    // Auto-unlock first message
    setUnlockedMessages([0]);
    
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const unlockNextMessage = (index: number) => {
    if (!unlockedMessages.includes(index) && index < messages.length) {
      setUnlockedMessages(prev => [...prev, index]);
      setCurrentTyping(index);
      
      // Auto-unlock next message after typing completes
      if (index + 1 < messages.length) {
        setTimeout(() => {
          unlockNextMessage(index + 1);
        }, 3000); // Adjust timing based on message length
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef) {
      if (isMusicPlaying) {
        audioRef.pause();
      } else {
        audioRef.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <section className="scroll-snap-section min-h-screen relative overflow-hidden" 
             style={{
               background: `linear-gradient(45deg, #f4f1e8, #f9f6f0)`,
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5a9' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
      
      {/* Floating decorations */}
      <FloatingHeart delay={0} className="top-20 left-16" size="sm" color="purple" />
      <FloatingHeart delay={2} className="bottom-32 right-20" size="md" />
      <Sparkle delay={1} className="top-32 right-1/4" />
      <Sparkle delay={3} className="bottom-40 left-1/3" />

      {/* Music Control */}
      <Button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-cream/80 hover:bg-cream text-foreground border-2 border-love-pink/30 rounded-full w-12 h-12 p-0"
        title={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </Button>

      <div className="flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-2xl w-full">
          
          {/* Parchment Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bubbly font-bold text-foreground mb-4 drop-shadow-sm">
              💌 Message Archive 📜
            </h2>
            <p className="text-lg font-bubbly text-muted-foreground">
              Scroll of Memories • Our Sweet Conversations
            </p>
          </div>

          {/* Parchment Container */}
          <div className="relative bg-gradient-to-b from-amber-50 to-yellow-50 rounded-3xl shadow-2xl border-4 border-amber-200/50 p-8 max-h-96 overflow-y-auto"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4c5a9' fill-opacity='0.05'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%23d4c5a9' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
                 boxShadow: `
                   inset 0 0 0 1px rgba(180, 150, 100, 0.2),
                   0 20px 40px -10px rgba(180, 150, 100, 0.3),
                   0 0 0 1px rgba(255, 255, 255, 0.1)
                 `
               }}>
            
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 text-2xl text-amber-600/30">📜</div>
            <div className="absolute top-4 right-4 text-2xl text-amber-600/30">🕯️</div>
            <div className="absolute bottom-4 left-4 text-2xl text-amber-600/30">🖋️</div>
            <div className="absolute bottom-4 right-4 text-2xl text-amber-600/30">💌</div>

            {/* Messages */}
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="relative">
                  {unlockedMessages.includes(index) ? (
                    <div 
                      className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                      onClick={() => unlockNextMessage(index + 1)}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-md border-2 cursor-pointer hover:scale-105 transition-all duration-300 ${
                        message.type === 'sent' 
                          ? 'bg-love-pink/80 text-white border-love-pink/30 rounded-br-md' 
                          : 'bg-white/90 text-foreground border-sky-blue/30 rounded-bl-md'
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bubbly font-bold">
                            {message.sender}
                          </span>
                          <span className="text-xs opacity-70">
                            {message.time}
                          </span>
                        </div>
                        
                        <div className="font-bubbly text-sm">
                          {currentTyping === index ? (
                            <Typewriter
                              words={[message.text]}
                              loop={1}
                              cursor
                              cursorStyle="💕"
                              typeSpeed={50}
                              deleteSpeed={0}
                              delaySpeed={1000}
                            />
                          ) : (
                            message.text
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'} cursor-pointer`}
                      onClick={() => unlockNextMessage(index)}
                    >
                      <div className="max-w-xs lg:max-w-md px-4 py-3 bg-muted/50 border-2 border-dashed border-muted-foreground/30 rounded-2xl hover:bg-muted/70 transition-all duration-300">
                        <div className="text-center text-muted-foreground font-bubbly">
                          💌 Click to unlock message 💌
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            {unlockedMessages.length < messages.length && (
              <div className="text-center mt-6 text-muted-foreground font-bubbly">
                <div className="animate-bounce">
                  ↓ Keep clicking to read more ↓
                </div>
              </div>
            )}
          </div>

          {/* Final message when all unlocked */}
          {unlockedMessages.length === messages.length && (
            <div className="text-center mt-8 animate-fade-in">
              <div className="bg-gradient-romantic rounded-3xl p-6 border-4 border-white/50 shadow-love">
                <div className="text-3xl mb-4 animate-pulse-heart">💕</div>
                <p className="text-xl font-bubbly font-bold text-white">
                  Our love story continues... 📖✨
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MessageScroll;