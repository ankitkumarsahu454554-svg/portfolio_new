'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center h-9 w-9 rounded-full border border-mc-border bg-mc-glass text-mc-text hover:border-[#FF3D81] transition-colors backdrop-blur-md shadow-sm cursor-pointer ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      data-cursor="pointer"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 text-[#FFC700] drop-shadow-[0_0_8px_rgba(255,199,0,0.6)]" />
        ) : (
          <Moon className="h-4 w-4 text-[#8B5CF6] drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
        )}
      </motion.div>
    </button>
  );
}
