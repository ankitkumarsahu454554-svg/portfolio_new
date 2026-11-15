'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Code,
  Zap,
  CheckCircle2,
  Brain,
  Building,
} from 'lucide-react';
import { Lightbox, LightboxItem } from '@/components/ui/Lightbox';

interface EventPhoto {
  src: string;
  alt: string;
  title: string;
  caption: string;
  tag: string;
}

const EVENT_PHOTOS: EventPhoto[] = [
  {
    src: '/events/google-prompt-wars/google-office-reception.jpg',
    alt: 'Ankit Kumar Sahu at Google Bengaluru Office Reception Desk',
    title: 'Google Bengaluru Campus',
    tag: 'CAMPUS ARRIVAL',
    caption: 'At Google Bengaluru Office (RMZ Infinity) for the Prompt Wars event during my 2nd year of B.Tech.',
  },
  {
    src: '/events/google-prompt-wars/promptwars-banner.jpg',
    alt: 'Prompt Wars Banner - Build, pitch & win in one day',
    title: 'Prompt Wars Arena',
    tag: 'EVENT STAGE',
    caption: "Official Google for Developers stage banner: 'Build, pitch & win in one day' — Build with AI.",
  },
  {
    src: '/events/google-prompt-wars/google-guest-pass.jpg',
    alt: 'Official Google Guest Pass issued to Ankit Kumar Sahu',
    title: 'Google Guest Security Badge',
    tag: 'VERIFIED CREDENTIAL',
    caption: 'Official Google Guest Pass issued to Ankit Kumar Sahu at the RMZ Infinity Bengaluru office.',
  },
];

export function PromptWarsEventSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Auto-advance photos every 2.0 seconds (as requested)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EVENT_PHOTOS.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % EVENT_PHOTOS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + EVENT_PHOTOS.length) % EVENT_PHOTOS.length);
  }, []);

  const currentPhoto = EVENT_PHOTOS[activeIndex];

  const lightboxItems: LightboxItem[] = EVENT_PHOTOS.map((p) => ({
    src: p.src,
    alt: p.alt,
    title: p.title,
    caption: p.caption,
  }));

  return (
    <section id="events" className="relative py-24 sm:py-32 overflow-hidden border-t border-mc-border bg-mc-bg">
      {/* Subtle Aurora Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-tr from-[#00B8D9]/15 to-[#8B5CF6]/15 rounded-full blur-[120px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-80 h-80 bg-gradient-to-br from-[#FF3D81]/15 to-[#FF8A00]/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-300 font-mono text-xs uppercase tracking-wider mb-4 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse" />
            <span>Featured Milestone • Google for Developers</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-mc-text leading-tight">
            Prompt Wars:{' '}
            <span className="font-serif italic font-normal text-gradient-rainbow">
              Build with AI
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-mc-text-secondary max-w-2xl leading-relaxed">
            A milestone at Google&apos;s Bengaluru Campus during my 2nd year of B.Tech CSE (Data Science),
            advancing computational prompt engineering and forging lifelong industry connections.
          </p>
        </div>

        {/* Interactive Showcase Grid: 2-Second Slider (Left) & Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 2-Second Animated Photo Carousel (6 cols) */}
          <div
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-3xl border border-mc-border bg-white dark:bg-mc-surface p-3.5 shadow-2xl overflow-hidden">
              {/* Photo Display Window */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-mc-surface-elevated">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhoto.src}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <Image
                      src={currentPhoto.src}
                      alt={currentPhoto.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      priority
                      className="object-cover object-center"
                    />

                    {/* Gradient Overlay for Top Tag & Bottom Caption */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                    {/* Top Tag & Expand Pill */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                        {currentPhoto.tag}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxOpen(true);
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] transition-all cursor-pointer"
                        aria-label="View Fullscreen"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span className="hidden sm:inline">Expand</span>
                      </button>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                      <p className="font-heading text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                        {currentPhoto.title}
                      </p>
                      <p className="font-sans text-xs text-white/90 mt-1 leading-snug drop-shadow-sm">
                        {currentPhoto.caption}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left / Right Nav Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* 2-Second Animated Progress Bar */}
              <div className="mt-3.5 px-1 flex items-center gap-2">
                {EVENT_PHOTOS.map((photo, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={photo.src}
                      onClick={() => setActiveIndex(index)}
                      className="relative flex-1 h-1.5 rounded-full overflow-hidden bg-mc-border/80 cursor-pointer transition-all"
                      aria-label={`Slide ${index + 1}: ${photo.title}`}
                    >
                      {isActive && (
                        <motion.div
                          key={`prog-${activeIndex}-${isPaused}`}
                          initial={{ width: '0%' }}
                          animate={{ width: isPaused ? '100%' : '100%' }}
                          transition={{ duration: isPaused ? 0 : 2, ease: 'linear' }}
                          className="h-full bg-gradient-to-r from-[#FF3D81] via-[#00B8D9] to-[#8B5CF6]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Slideshow Metadata & Pause State */}
              <div className="mt-2.5 px-1 flex items-center justify-between font-mono text-[11px] text-mc-text-muted">
                <span>
                  Photo {activeIndex + 1} of {EVENT_PHOTOS.length} • Slides every 2s
                </span>
                <span className="text-[10px] uppercase font-bold text-mc-text-secondary">
                  {isPaused ? 'Paused on Hover' : 'Auto-Playing'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Storytelling & Key Takeaways (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Context Badge */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-mc-surface-elevated border border-mc-border text-mc-text font-semibold">
                <Building className="w-3.5 h-3.5 text-[#00B8D9]" />
                <span>Google RMZ Infinity, Bengaluru</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-mc-surface-elevated border border-mc-border text-mc-text font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#FF3D81]" />
                <span>2nd Year B.Tech CSE (Data Science)</span>
              </span>
            </div>

            {/* Narrative Story */}
            <div className="space-y-4 font-sans text-base text-mc-text-secondary leading-relaxed">
              <p>
                During the second year of my B.Tech CSE (Data Science) degree at NIST University,
                attending <strong className="text-mc-text font-semibold">Prompt Wars at Google&apos;s Bengaluru campus</strong> was
                one of the most defining learning milestones of my engineering journey.
              </p>

              <p>
                Stepping inside Google&apos;s offices, I participated in an intensive hackathon challenge designed to
                push the boundaries of computational prompt architectures, reasoning chains, and real-time LLM application development.
                It was where I learned the most practical aspects of modern generative AI workflows under strict time constraints.
              </p>

              <p>
                Beyond the competition, it was an invaluable environment to connect with mentors and build lasting friendships
                with software engineers, startup builders, and fellow developers across the Indian IT industry.
              </p>
            </div>

            {/* 3 Core Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl border border-mc-border bg-white dark:bg-mc-surface shadow-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500/15 text-pink-700 dark:text-pink-300 mb-2.5">
                  <Brain className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-xs font-bold text-mc-text uppercase tracking-wide">
                  AI & Prompt Design
                </h4>
                <p className="font-sans text-[11px] text-mc-text-muted mt-1 leading-snug">
                  Structured few-shot chains & robust adversarial evaluation.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-mc-border bg-white dark:bg-mc-surface shadow-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-xs font-bold text-mc-text uppercase tracking-wide">
                  IT Industry Network
                </h4>
                <p className="font-sans text-[11px] text-mc-text-muted mt-1 leading-snug">
                  Built strong friendships & mentorship ties across tech.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-mc-border bg-white dark:bg-mc-surface shadow-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 mb-2.5">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-xs font-bold text-mc-text uppercase tracking-wide">
                  Rapid Prototyping
                </h4>
                <p className="font-sans text-[11px] text-mc-text-muted mt-1 leading-snug">
                  Ideated, built, and pitched an AI solution in a single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox for In-Depth Viewing */}
      <Lightbox
        items={lightboxItems}
        initialIndex={activeIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
