'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsTouchDevice, useMediaQuery } from '@/hooks/useMediaQuery';

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'view'>('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor="pointer"], input, textarea');
      const viewTrigger = target.closest('[data-cursor="view"]');

      if (viewTrigger) {
        setCursorType('view');
      } else if (interactive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouch, prefersReducedMotion, isVisible, mouseX, mouseY]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'pointer' ? 48 : cursorType === 'view' ? 64 : 26,
          height: cursorType === 'pointer' ? 48 : cursorType === 'view' ? 64 : 26,
          borderColor:
            cursorType === 'pointer'
              ? 'rgba(199, 255, 85, 0.8)'
              : cursorType === 'view'
              ? 'rgba(0, 240, 255, 0.8)'
              : 'rgba(255, 255, 255, 0.25)',
          backgroundColor:
            cursorType === 'pointer'
              ? 'rgba(199, 255, 85, 0.08)'
              : cursorType === 'view'
              ? 'rgba(0, 240, 255, 0.12)'
              : 'rgba(255, 255, 255, 0.02)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorType === 'view' && (
          <span className="font-mono text-[9px] font-semibold tracking-widest text-electric">
            VIEW
          </span>
        )}
      </motion.div>

      {/* Pinpoint Core Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_#C7FF55]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: cursorType === 'pointer' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}

