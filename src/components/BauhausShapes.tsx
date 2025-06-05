import React from 'react';

interface BauhausShapesProps {
  variant?: 'hero' | 'floating' | 'accent';
  className?: string;
}

export const BauhausShapes: React.FC<BauhausShapesProps> = ({ variant = 'floating', className = '' }) => {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Large blue circle */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary rounded-full opacity-10"></div>
        
        {/* Yellow triangle */}
        <div className="absolute top-1/4 left-10 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-bauhaus-yellow opacity-20"></div>
        
        {/* Red square */}
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-bauhaus-red transform rotate-12 opacity-15"></div>
        
        {/* Small blue rectangle */}
        <div className="absolute top-1/2 right-10 w-16 h-32 bg-primary-light transform -rotate-45 opacity-20"></div>
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Small decorative shapes */}
        <div className="absolute top-8 right-8 w-4 h-4 bg-bauhaus-yellow rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-6 h-6 bg-bauhaus-red transform rotate-45"></div>
        <div className="absolute top-1/2 left-4 w-2 h-8 bg-primary"></div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary-light rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-bauhaus-yellow transform rotate-45 opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/2 w-6 h-16 bg-bauhaus-red opacity-25"></div>
    </div>
  );
};