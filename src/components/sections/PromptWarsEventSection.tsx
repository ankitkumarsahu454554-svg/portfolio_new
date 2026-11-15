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
  Zap,
  Brain,
  Building,
  Award,
} from 'lucide-react';
import { Lightbox, LightboxItem } from '@/components/ui/Lightbox';

interface EventPhoto {
  src: string;
  alt: string;
  title: string;
  caption: string;
  tag: string;
}

interface EventData {
  id: string;
  eventNumber: string;
  badgeTag: string;
  badgeColorClass: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  venue: string;
  timeline: string;
  achievement: string;
  paragraphs: string[];
  pillars: {
    icon: React.ReactNode;
    colorClass: string;
    title: string;
    desc: string;
  }[];
  photos: EventPhoto[];
}

const EVENTS: EventData[] = [
  {
    id: 'event-01',
    eventNumber: 'EVENT 01',
    badgeTag: 'Google for Developers • Bengaluru Campus',
    badgeColorClass: 'border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-300',
    title: 'Prompt Wars: ',
    highlightWord: 'Build with AI',
    subtitle: 'A milestone at Google’s Bengaluru Campus during my 2nd year of B.Tech CSE (Data Science), advancing computational prompt engineering and forging lifelong industry connections.',
    venue: 'Google RMZ Infinity, Bengaluru',
    timeline: '2nd Year B.Tech CSE (Data Science)',
    achievement: 'National Finalist',
    paragraphs: [
      'During the second year of my B.Tech CSE (Data Science) degree at NIST University, attending Prompt Wars at Google’s Bengaluru campus was one of the most defining learning milestones of my engineering journey.',
      'Stepping inside Google’s offices, I participated in an intensive hackathon challenge designed to push the boundaries of computational prompt architectures, reasoning chains, and real-time LLM application development. It was where I learned the most practical aspects of modern generative AI workflows under strict time constraints.',
      'Beyond the competition, it was an invaluable environment to connect with mentors and build lasting friendships with software engineers, startup builders, and fellow developers across the Indian IT industry.',
    ],
    pillars: [
      {
        icon: <Brain className="w-4 h-4" />,
        colorClass: 'bg-pink-500/15 text-pink-700 dark:text-pink-300',
        title: 'AI & Prompt Design',
        desc: 'Structured few-shot chains & robust adversarial evaluation.',
      },
      {
        icon: <Users className="w-4 h-4" />,
        colorClass: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
        title: 'IT Industry Network',
        desc: 'Built strong friendships & mentorship ties across tech.',
      },
      {
        icon: <Zap className="w-4 h-4" />,
        colorClass: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
        title: 'Rapid Prototyping',
        desc: 'Ideated, built, and pitched an AI solution in a single day.',
      },
    ],
    photos: [
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
    ],
  },
  {
    id: 'event-02',
    eventNumber: 'EVENT 02',
    badgeTag: 'GDG Vizag & RTIH • 1st Rank Winners',
    badgeColorClass: 'border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300',
    title: 'Prompt to Product: ',
    highlightWord: '1st Rank Champions',
    subtitle: 'Secured 1st Place with our team in the generative AI product competition conducted by Google Developer Groups Vizag in collaboration with Ratan Tata Innovation Hub.',
    venue: 'Ratan Tata Innovation Hub (RTIH), Visakhapatnam',
    timeline: 'MSME RAMP Activity • Skill & Entrepreneurship',
    achievement: '1st Place / 1st Rank Winners',
    paragraphs: [
      'Conducted by Google Developer Groups (GDG) Vizag in collaboration with the Ratan Tata Innovation Hub (RTIH), Visakhapatnam, the "Prompt to Product" MSME RAMP program challenged innovators to conceptualize, engineer, and ship a full product starting from prompt architectures using Google AI tools.',
      'Collaborating closely with my group teammates, we developed an end-to-end working product that addressed real-world workflows, securing 1st Rank in the competitive workshop sprint.',
      'From multi-modal prompt engineering to rapid front-to-back integration, our team learned all aspects of production AI product delivery and proudly presented our working solution before mentors and industry dignitaries at RTIH.',
    ],
    pillars: [
      {
        icon: <Trophy className="w-4 h-4" />,
        colorClass: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
        title: '1st Rank Champions',
        desc: 'Ranked 1st place in the competitive workshop product sprint.',
      },
      {
        icon: <Sparkles className="w-4 h-4" />,
        colorClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
        title: 'Google AI Tooling',
        desc: 'Engineered a working software product from natural language prompts.',
      },
      {
        icon: <Users className="w-4 h-4" />,
        colorClass: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
        title: 'Teamwork & Synergy',
        desc: 'High-synergy teamwork, rapid ideation & stage presentation.',
      },
    ],
    photos: [
      {
        src: '/events/gdg-vizag-prompt-to-product/team-winners-stage.jpg',
        alt: 'Team receiving 1st Rank Certificates on Stage at RTIH',
        title: '1st Rank Award Ceremony',
        tag: '1ST RANK WINNERS',
        caption: 'Our team receiving 1st Place certificates from mentors and dignitaries at Ratan Tata Innovation Hub, Visakhapatnam.',
      },
      {
        src: '/events/gdg-vizag-prompt-to-product/team-banner-group.jpg',
        alt: 'Team group photo at Prompt to Product Banner',
        title: 'Team Product Group',
        tag: 'TEAM SPRINT',
        caption: 'Our group teammates standing together in front of the Prompt to Product MSME RAMP banner at RTIH.',
      },
      {
        src: '/events/gdg-vizag-prompt-to-product/ratan-tata-mural.jpg',
        alt: 'Ankit at the Ratan Tata inspirational mural at RTIH',
        title: 'Ratan Tata Innovation Hub',
        tag: 'INNOVATION HUB',
        caption: 'At the inspirational Mr. Ratan Tata mural ("If you want to walk far, walk together") at RTIH Visakhapatnam.',
      },
      {
        src: '/events/gdg-vizag-prompt-to-product/prompt-to-product-ankit.jpg',
        alt: 'Ankit at the Prompt to Product event banner',
        title: 'Prompt to Product Sprint',
        tag: 'GDG VIZAG',
        caption: 'At the official event banner: Imagine it. Build it. Ship it.',
      },
      {
        src: '/events/gdg-vizag-prompt-to-product/gdg-vizag-swag.jpg',
        alt: 'Google Developer Groups Vizag official smart bottle swag',
        title: 'GDG Vizag Winner Swag',
        tag: 'EVENT RECOGNITION',
        caption: 'Official Google Developer Groups Vizag branded smart flask swag received at the event.',
      },
    ],
  },
];

function EventShowcaseCard({ event, index }: { event: EventData; index: number }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentPhoto = event.photos[activePhotoIndex];

  // Auto-advance photos every 2.0 seconds silently in the background
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % event.photos.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, event.photos.length]);

  const handleNextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev + 1) % event.photos.length);
  }, [event.photos.length]);

  const handlePrevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
  }, [event.photos.length]);

  const lightboxItems: LightboxItem[] = event.photos.map((p) => ({
    src: p.src,
    alt: p.alt,
    title: p.title,
    caption: p.caption,
  }));

  return (
    <div className="relative rounded-3xl border border-mc-border bg-white/70 dark:bg-mc-surface/70 p-6 sm:p-10 shadow-xl backdrop-blur-xs">
      {/* Event Header Bar with Number & Venue Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-mc-border">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-800">
            {event.eventNumber}
          </span>
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-mc-text">
            {event.title}
            <span className="font-serif italic font-normal text-gradient-rainbow">
              {event.highlightWord}
            </span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border font-mono text-xs font-bold ${event.badgeColorClass}`}>
            <Award className="w-3.5 h-3.5" />
            <span>{event.achievement}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-mc-surface-elevated border border-mc-border font-mono text-xs text-mc-text font-semibold">
            <Building className="w-3.5 h-3.5 text-[#00B8D9]" />
            <span>{event.venue}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-mc-surface-elevated border border-mc-border font-mono text-xs text-mc-text font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#FF3D81]" />
            <span>{event.timeline}</span>
          </span>
        </div>
      </div>

      {/* Split Grid: 2-Second Slider (Left) & Storytelling (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: 2-Second Animated Photo Carousel (6 cols) */}
        <div
          className="lg:col-span-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-2xl border border-mc-border bg-white dark:bg-mc-surface p-3 shadow-lg overflow-hidden">
            {/* Photo Window */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xl bg-mc-surface-elevated">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhoto.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />

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
                  handlePrevPhoto();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPhoto();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Silent Progress Indicator Bar (Clean, no text labels) */}
            <div className="mt-3 px-1 flex items-center gap-2">
              {event.photos.map((photo, pIdx) => {
                const isActive = pIdx === activePhotoIndex;
                return (
                  <button
                    key={photo.src}
                    onClick={() => setActivePhotoIndex(pIdx)}
                    className="relative flex-1 h-1.5 rounded-full overflow-hidden bg-mc-border/80 cursor-pointer transition-all"
                    aria-label={`Photo ${pIdx + 1}`}
                  >
                    {isActive && (
                      <motion.div
                        key={`prog-${event.id}-${activePhotoIndex}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'linear' }}
                        className="h-full bg-gradient-to-r from-[#FF3D81] via-[#00B8D9] to-[#8B5CF6]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Story & 3 Core Pillars (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          <p className="text-sm sm:text-base text-mc-text font-medium leading-relaxed">
            {event.subtitle}
          </p>

          {/* Narrative Story */}
          <div className="space-y-3 font-sans text-sm text-mc-text-secondary leading-relaxed">
            {event.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>

          {/* 3 Core Experience Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {event.pillars.map((pillar, pilIdx) => (
              <div key={pilIdx} className="p-3.5 rounded-2xl border border-mc-border bg-white dark:bg-mc-surface shadow-xs">
                <div className={`flex h-7 w-7 items-center justify-center rounded-xl mb-2 ${pillar.colorClass}`}>
                  {pillar.icon}
                </div>
                <h4 className="font-heading text-xs font-bold text-mc-text uppercase tracking-wide">
                  {pillar.title}
                </h4>
                <p className="font-sans text-[11px] text-mc-text-muted mt-1 leading-snug">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for this event */}
      <Lightbox
        items={lightboxItems}
        initialIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

export function PromptWarsEventSection() {
  return (
    <section id="events" className="relative py-24 sm:py-32 overflow-hidden border-t border-mc-border bg-mc-bg">
      {/* Subtle Aurora Ambient Glow */}
      <div className="pointer-events-none absolute top-1/3 -left-48 w-96 h-96 bg-gradient-to-tr from-[#00B8D9]/15 to-[#8B5CF6]/15 rounded-full blur-[120px] -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-[#FF3D81]/15 to-[#FF8A00]/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-pink-300 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/40 text-pink-900 dark:text-pink-300 font-mono text-xs uppercase tracking-wider mb-4 font-bold">
            <span className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
            <span>Hackathons & Tech Milestones</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-mc-text leading-tight">
            Events &{' '}
            <span className="font-serif italic font-normal text-gradient-rainbow">
              Achievements
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-mc-text-secondary leading-relaxed">
            Hands-on generative AI innovation, award-winning team sprints, and community leadership across India&apos;s leading technology hubs.
          </p>
        </div>

        {/* Events Stacked Sequentially ("under by under", no tab selection needed) */}
        <div className="space-y-12 sm:space-y-16">
          {EVENTS.map((event, index) => (
            <EventShowcaseCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
