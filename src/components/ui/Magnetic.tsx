'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice, useMediaQuery } from '@/hooks/useMediaQuery';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 0.25, className = '' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 240, damping: 18, mass: 0.15 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

