import React from 'react';

interface SparkleProps {
  delay?: number;
  className?: string;
}

const Sparkle: React.FC<SparkleProps> = ({ delay = 0, className = '' }) => {
  return (
    <div 
      className={`sparkle text-accent text-lg ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        position: 'absolute',
        zIndex: 10
      }}
    >
      ✨
    </div>
  );
};

export default Sparkle;