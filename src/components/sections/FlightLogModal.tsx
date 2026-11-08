'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Award, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
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
      if (!event || event.images.length <= 1) return;
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
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-mc-border bg-mc-surface p-6 sm:p-9 mc-panel shadow-2xl z-10 space-y-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-mc-border pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-mc-cyan font-bold uppercase">{event.type}</span>
                  <span className="text-mc-border">•</span>
                  <span className="text-mc-amber font-semibold uppercase">{event.myRole}</span>
                  {event.isPlaceholder && (
                    <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[9px] font-bold text-rose-400">
                      TODO PLACEHOLDER
                    </span>
                  )}
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mc-text">
                  {event.title}
                </h2>
                <p className="font-mono text-xs text-mc-text-muted">{event.organizer}</p>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-mc-border bg-mc-bg text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                aria-label="Close modal"
                data-cursor="pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Placeholder Warning Banner */}
            {event.isPlaceholder && (
              <div className="p-3.5 rounded-xl border border-mc-amber/50 bg-mc-amber/10 text-xs font-mono text-mc-amber flex items-start gap-2.5">
                <span className="font-bold shrink-0">[UNVERIFIED PLACEHOLDER]:</span>
                <span>
                  This item is a designated template slot. To populate this record with your authentic credentials, certificates, and photos, update <code className="text-mc-cyan font-bold">src/data/events.ts</code>.
                </span>
              </div>
            )}

            {/* Event Telemetry Bar */}
            <div className="flex flex-wrap items-center gap-4 rounded-xl border border-mc-border/70 bg-mc-surface-elevated/50 p-3 font-mono text-xs text-mc-text-secondary">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-mc-cyan" />
                <span>{event.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-mc-amber" />
                <span>{event.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-mc-cyan" />
                <span>Role: {event.myRole}</span>
              </div>
            </div>

            {/* Image Gallery / Lightbox */}
            {event.images.length > 0 && (
              <div className="space-y-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-mc-border bg-mc-surface-raised flex items-center justify-center">
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
                        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-mc-surface/80 text-mc-text hover:bg-mc-cyan hover:text-[#040711] backdrop-blur-sm border border-mc-border transition-colors"
                        aria-label="Previous Image"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev + 1) % event.images.length);
                        }}
                        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-mc-surface/80 text-mc-text hover:bg-mc-cyan hover:text-[#040711] backdrop-blur-sm border border-mc-border transition-colors"
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
                    <span className="shrink-0 text-mc-cyan font-bold">
                      {activeImageIndex + 1} / {event.images.length}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="space-y-2 font-sans">
              <span className="font-mono text-[10px] text-mc-cyan uppercase tracking-wider font-bold block">
                LOG SUMMARY:
              </span>
              <p className="text-sm text-mc-text-secondary leading-relaxed">
                {event.summary}
              </p>
            </div>

            {/* What I Did */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-mc-amber uppercase tracking-wider font-bold block">
                ACTIVITIES & KEY CONTRIBUTIONS:
              </span>
              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-mc-text-secondary">
                {event.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-mc-cyan flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="rounded-xl border border-mc-cyan/30 bg-mc-cyan/8 p-3.5 font-mono text-xs text-mc-cyan">
              <span className="font-bold block uppercase text-[10px] text-mc-text-muted mb-0.5">FINAL OUTCOME / RECOGNITION:</span>
              <span className="text-mc-text font-normal">{event.outcome}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-mc-border bg-mc-bg px-2.5 py-1 font-mono text-[10px] text-mc-text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between border-t border-mc-border pt-4">
              {event.link ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-mc-cyan px-4 py-2 font-mono text-xs font-bold text-[#040711] uppercase tracking-wider shadow-sm hover:shadow-cyan-glow"
                >
                  <span>EVENT PORTAL</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : <div />}

              <button
                onClick={onClose}
                className="rounded-full border border-mc-border px-4 py-2 font-mono text-xs text-mc-text-secondary hover:text-mc-text"
              >
                CLOSE ENTRY [ESC]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

