'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsTouchDevice, useMediaQuery } from '@/hooks/useMediaQuery';

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'open' | 'drag'>('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 320, mass: 0.25 };
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

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const val = cursorTarget.getAttribute('data-cursor');
        if (val === 'view' || val === 'open' || val === 'drag') {
          setCursorType(val);
          return;
        }
      }

      const interactive = target.closest('a, button, input, textarea, select');
      if (interactive) {
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

  const isExpanded = cursorType !== 'default';
  const labelText =
    cursorType === 'view' ? 'VIEW' : cursorType === 'open' ? 'OPEN' : cursorType === 'drag' ? 'DRAG' : '';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Spring Follower Ring with Rainbow Accent */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border-2 select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: isExpanded ? '0 0 16px rgba(255, 61, 129, 0.35)' : 'none',
        }}
        animate={{
          width: labelText ? 58 : isExpanded ? 42 : 24,
          height: labelText ? 58 : isExpanded ? 42 : 24,
          borderColor: isExpanded ? '#FF3D81' : 'rgba(139, 92, 246, 0.4)',
          backgroundColor: labelText
            ? '#FF3D81'
            : isExpanded
            ? 'rgba(255, 61, 129, 0.08)'
            : 'transparent',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 320 }}
      >
        {labelText && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-white uppercase">
            {labelText}
          </span>
        )}
      </motion.div>

      {/* Pinpoint Core Dot with Vibrant Coral Glow */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-[#FF3D81] shadow-[0_0_8px_#FF3D81]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible && !labelText ? 1 : 0,
          scale: isExpanded ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
