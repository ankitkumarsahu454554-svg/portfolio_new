'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Award, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { FlightLogEvent } from '@/data/events';

interface FlightLogModalProps {
  event: FlightLogEvent | null;
  onClose: () => void;
}

export function FlightLogModal({ event, onClose }: FlightLogModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [event]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!event || !event.images || event.images.length <= 1) return;
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % event.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
      }
    };
    if (event) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [event, onClose]);

  return (
    <AnimatePresence>
      {event && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#040711]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            layoutId={`event-card-${event.id}`}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-mc-border bg-white dark:bg-mc-surface p-6 sm:p-9 shadow-2xl z-10 space-y-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-mc-border pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-violet-700 dark:text-violet-400 font-bold uppercase">{event.type}</span>
                  <span className="text-mc-border">•</span>
                  <span className="text-pink-700 dark:text-pink-400 font-bold uppercase">{event.myRole}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mc-text">
                  {event.title}
                </h2>
                <p className="font-mono text-xs text-mc-text-muted font-medium">{event.organizer}</p>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-mc-border bg-mc-surface-elevated text-mc-text hover:border-violet-500 hover:text-violet-600 transition-colors cursor-pointer"
                aria-label="Close modal"
                data-cursor="pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Event Telemetry Bar */}
            <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-mc-border bg-mc-surface-elevated p-3.5 font-mono text-xs text-mc-text-secondary font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                <span>{event.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-pink-600 dark:text-pink-400" />
                <span>{event.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Role: {event.myRole}</span>
              </div>
            </div>

            {/* Image Gallery / Lightbox (only rendered if event has images) */}
            {event.images && event.images.length > 0 && (
              <div className="space-y-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-mc-border bg-mc-surface-elevated flex items-center justify-center">
                  <Image
                    src={event.images[activeImageIndex].src}
                    alt={event.images[activeImageIndex].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain p-2"
                  />

                  {event.images.length > 1 && (
                    <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
                        }}
                        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 text-mc-text hover:bg-violet-600 hover:text-white backdrop-blur-sm border border-mc-border transition-colors cursor-pointer"
                        aria-label="Previous Image"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev + 1) % event.images.length);
                        }}
                        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 text-mc-text hover:bg-violet-600 hover:text-white backdrop-blur-sm border border-mc-border transition-colors cursor-pointer"
                        aria-label="Next Image"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between px-1 text-xs font-mono text-mc-text-muted">
                  <span className="italic line-clamp-1">{event.images[activeImageIndex].caption}</span>
                  {event.images.length > 1 && (
                    <span className="shrink-0 text-violet-600 dark:text-violet-400 font-bold">
                      {activeImageIndex + 1} / {event.images.length}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-mc-text-muted">
                Executive Overview
              </h4>
              <p className="text-sm text-mc-text-secondary leading-relaxed">
                {event.summary}
              </p>
            </div>

            {/* Key Deliverables / What I Did */}
            {event.whatIDid && event.whatIDid.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-mc-text-muted">
                  Technical Contributions & Activities
                </h4>
                <ul className="space-y-2">
                  {event.whatIDid.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-mc-text-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcome Callout */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[11px] font-bold uppercase text-emerald-700 dark:text-emerald-400 block mb-0.5">
                  Verified Outcome
                </span>
                <p className="text-xs text-mc-text leading-relaxed font-medium">
                  {event.outcome}
                </p>
              </div>
            </div>

            {/* Footer with Tags and External Links */}
            <div className="pt-4 border-t border-mc-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-mc-surface-elevated border border-mc-border font-mono text-[11px] text-mc-text font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-mc-border hover:border-violet-500 text-mc-text hover:text-violet-600 transition-colors font-semibold"
                  >
                    <span>Event Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {event.certificateUrl && (
                  <a
                    href={event.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF3D81] to-[#8B5CF6] text-white font-bold transition-all shadow-sm hover:opacity-95"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
