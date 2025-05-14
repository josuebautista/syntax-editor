'use client';

import React, { useEffect, useRef } from 'react';

interface GlassBackgroundProps {
  children: React.ReactNode;
}

interface Ball {
  id: string;
  dx: number;
  dy: number;
  el: HTMLDivElement;
}

export default function AnimatedGlassBackground({
  children,
}: GlassBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<Ball[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ballElements = Array.from(
      container.querySelectorAll('.dvd-ball')
    ) as HTMLDivElement[];

    const balls: Ball[] = ballElements.map((el, index) => {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;

      const startX = Math.random() * (containerWidth - elWidth);
      const startY = Math.random() * (containerHeight - elHeight);

      el.style.transform = `translate(${startX}px, ${startY}px)`;

      return {
        id: `ball-${index}`,
        dx: Math.random() * 0.5 + 0.2,
        dy: Math.random() * 0.5 + 0.2,
        el,
      };
    });

    ballsRef.current = balls;

    const moveBalls = () => {
      const { offsetWidth: width, offsetHeight: height } = container;

      balls.forEach((ball) => {
        const rect = ball.el.getBoundingClientRect();
        const parentRect = container.getBoundingClientRect();
        const left = rect.left - parentRect.left;
        const top = rect.top - parentRect.top;

        let newX = left + ball.dx;
        let newY = top + ball.dy;

        const ballWidth = ball.el.offsetWidth;
        const ballHeight = ball.el.offsetHeight;

        if (newX + ballWidth > width || newX < 0) {
          ball.dx *= -1;
          newX = Math.max(0, Math.min(width - ballWidth, newX));
        }

        if (newY + ballHeight > height || newY < 0) {
          ball.dy *= -1;
          newY = Math.max(0, Math.min(height - ballHeight, newY));
        }

        ball.el.style.transform = `translate(${newX}px, ${newY}px)`;
      });

      requestAnimationFrame(moveBalls);
    };

    requestAnimationFrame(moveBalls);
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative min-h-screen w-full overflow-hidden bg-slate-950'
    >
      <div className='absolute h-72 w-72 rounded-full bg-pink-600/30 blur-[80px] dvd-ball'></div>
      <div className='absolute h-96 w-96 rounded-full bg-blue-600/30 blur-[80px] dvd-ball'></div>
      <div className='absolute h-72 w-72 rounded-full bg-green-600/30 blur-[80px] dvd-ball'></div>
      <div className='absolute h-80 w-80 rounded-full bg-violet-600/30 blur-[80px] dvd-ball'></div>
      {children}
    </div>
  );
}
