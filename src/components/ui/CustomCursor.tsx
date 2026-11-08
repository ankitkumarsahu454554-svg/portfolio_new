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
      {/* Outer Spring Follower Ring with Morphing Context */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border backdrop-blur-xs select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: labelText ? 56 : isExpanded ? 40 : 22,
          height: labelText ? 56 : isExpanded ? 40 : 22,
          borderColor: isExpanded ? 'var(--accent-cyan)' : 'var(--border-medium)',
          backgroundColor: labelText
            ? 'var(--accent-cyan)'
            : isExpanded
            ? 'var(--accent-cyan-glow)'
            : 'transparent',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {labelText && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-[#040711] uppercase">
            {labelText}
          </span>
        )}
      </motion.div>

      {/* Pinpoint Core Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-mc-cyan shadow-sm"
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
