import React from 'react';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassContainer({ 
  children, 
  className = '',
}: GlassContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl p-8 ${className}`}>
      <div className={`rounded-xl bg-black/10 p-4 backdrop-blur-xl border border-white/20 shadow-xl ${className}`}>
        {children}
      </div>
    </div>
  )
}
