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
      className={`relative flex items-center justify-center h-9 w-9 rounded-full border border-mc-border bg-mc-glass text-mc-text hover:border-mc-cyan transition-colors backdrop-blur-md shadow-sm ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      data-cursor="pointer"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 text-mc-amber" />
        ) : (
          <Moon className="h-4 w-4 text-mc-cyan" />
        )}
      </motion.div>
    </button>
  );
}
