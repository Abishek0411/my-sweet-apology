import React from 'react';

interface FloatingHeartProps {
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'pink' | 'red' | 'purple';
  className?: string;
}

const FloatingHeart: React.FC<FloatingHeartProps> = ({ 
  delay = 0, 
  size = 'md', 
  color = 'pink',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const colorClasses = {
    pink: 'text-love-pink',
    red: 'text-destructive',
    purple: 'text-soft-purple'
  };

  return (
    <div 
      className={`floating-heart ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        position: 'absolute',
        zIndex: 10
      }}
    >
      💕
    </div>
  );
};

export default FloatingHeart;