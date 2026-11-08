'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    // If user prefers reduced motion or already loaded in this session, finish immediately
    const seen = sessionStorage.getItem('mc_preloader_seen');
    if (prefersReducedMotion || seen) {
      setLoading(false);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('mc_preloader_seen', 'true');
            onComplete?.();
          }, 180);
          return 100;
        }
        // Accelerate through 0 to 100 in ~800ms
        const step = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + step, 100);
      });
    }, 65);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-mc-bg text-mc-text select-none overflow-hidden"
        >
          {/* Subtle background telemetry grid */}
          <div className="absolute inset-0 bg-mission-grid opacity-30 pointer-events-none" />

          {/* Central Telemetry Hub */}
          <div className="relative z-10 flex flex-col items-center space-y-5 px-6 max-w-sm w-full">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-telemetry text-mc-cyan">
              <span className="h-2 w-2 rounded-full bg-mc-cyan animate-ping" />
              <span>MISSION CONTROL // INITIALIZING</span>
            </div>

            {/* Huge numeric readout */}
            <div className="font-heading text-6xl font-semibold tracking-tighter text-mc-text flex items-baseline">
              <span>{progress}</span>
              <span className="font-mono text-xl text-mc-cyan font-normal ml-1">%</span>
            </div>

            {/* Sleek Progress Bar */}
            <div className="w-full h-[2px] bg-mc-border rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-mc-cyan via-sky-400 to-mc-amber"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* System Status readout */}
            <div className="flex justify-between w-full font-mono text-[10px] text-mc-text-muted tracking-wider uppercase">
              <span>SYS: DATA_INTELLIGENCE</span>
              <span>T+2026 // READY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

