'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface LightboxItem {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ items, initialIndex = 0, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext(); // Swiped left -> next
    } else if (diff < -50) {
      handlePrev(); // Swiped right -> prev
    }
    setTouchStartX(null);
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040711]/92 backdrop-blur-2xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Control Bar */}
          <div className="w-full flex items-center justify-between pb-3 text-xs font-mono text-mc-text-secondary">
            <div className="flex items-center gap-3">
              <span className="text-mc-cyan font-bold tracking-wider">
                TELEMETRY ASSET // {currentIndex + 1} OF {items.length}
              </span>
              {currentItem.title && (
                <span className="hidden sm:inline text-mc-text-muted">
                  • {currentItem.title}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-mc-border bg-mc-surface text-mc-text-primary hover:border-mc-cyan hover:text-mc-cyan transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Image Frame */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] rounded-2xl border border-mc-border/80 bg-mc-surface overflow-hidden shadow-2xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  className="object-contain p-2 sm:p-4"
                />
              </motion.div>
            </AnimatePresence>

            {/* Left / Right Navigation Arrows */}
            {items.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-mc-border bg-mc-surface/80 backdrop-blur-md text-mc-text-primary hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-mc-border bg-mc-surface/80 backdrop-blur-md text-mc-text-primary hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Caption & Indicator Bar */}
          <div className="w-full mt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-mc-text-muted">
            <p className="text-center sm:text-left text-mc-text-secondary">
              {currentItem.caption || currentItem.alt}
            </p>
            <div className="flex items-center gap-1.5 shrink-0">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex ? 'w-6 bg-mc-cyan' : 'w-1.5 bg-mc-border hover:bg-mc-text-muted'
                  }`}
                  aria-label={`Jump to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
