'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Sparkles, ChevronRight, Maximize2 } from 'lucide-react';
import { Lightbox, LightboxItem } from '@/components/ui/Lightbox';

interface ReelCard {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  caption: string;
}

const REEL_ITEMS: ReelCard[] = [
  {
    id: 'reel-1',
    title: 'Google for Developers Prompt Wars',
    category: 'AI HACKATHON // FINALIST',
    date: '2026',
    image: '/events/google-prompt-wars/cover.svg',
    caption: 'Official National Finalist recognition by Google for Developers for computational prompt architecture.',
  },
  {
    id: 'reel-2',
    title: 'India Space Lab Aerospace Session',
    category: 'CANSAT TELEMETRY // TRAINING',
    date: 'Jun-Jul 2026',
    image: '/events/india-space-lab/cover.svg',
    caption: 'Hands-on atmospheric sensor logging and CanSat micro-payload telemetry processing.',
  },
  {
    id: 'reel-3',
    title: 'Rare Disease Prediction AI',
    category: 'MACHINE LEARNING // HEALTHCARE',
    date: 'PROJECT',
    image: '/projects/rare-disease-prediction-ai/architecture.svg',
    caption: 'Hierarchical symptom-to-disease vector distance mapping using Human Phenotype Ontology representations.',
  },
  {
    id: 'reel-4',
    title: 'MediKiosk Clinical Intake Platform',
    category: 'FULL STACK // DATA SCIENCE',
    date: 'PROJECT',
    image: '/projects/medikiosk-patient-case-taking/hero.svg',
    caption: 'Automated prescription OCR and physician triage queue dashboard.',
  },
  {
    id: 'reel-5',
    title: 'SecureWipe Enterprise Disk Sanitization',
    category: 'SYSTEMS // NIST SP 800-88',
    date: 'PROJECT',
    image: '/projects/securewipe-enterprise/sanitization-engine.svg',
    caption: 'Low-level block write patterns compliant with NIST SP 800-88 sanitization verification algorithms.',
  },
  {
    id: 'reel-6',
    title: 'Cisco Data Science Essentials',
    category: 'CISCO ACADEMY // CREDENTIAL',
    date: '2026',
    image: '/events/cisco-data-science/cover.svg',
    caption: 'Foundational certification in Python computational data science and statistical pipeline development.',
  },
];

export function PhotoReelStrip() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const lightboxItems: LightboxItem[] = REEL_ITEMS.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    caption: `${item.title} — ${item.caption}`,
  }));

  const handleCardClick = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="relative py-12 overflow-hidden">
      {/* Header telemetry tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-mc-cyan" />
          <span className="font-mono text-xs uppercase tracking-wider text-mc-cyan font-bold">
            Visual Telemetry Reel & Project Artifacts
          </span>
        </div>

        <span className="font-mono text-xs text-mc-text-muted hidden sm:inline">
          CLICK CARD TO INSPECT IN FULLSCREEN LIGHTBOX
        </span>
      </div>

      {/* Horizontally scrolling reel container */}
      <div className="flex gap-5 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 scrollbar-thin scrollbar-thumb-mc-border scrollbar-track-transparent">
        {REEL_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleCardClick(idx)}
            className="group shrink-0 w-[280px] sm:w-[320px] rounded-2xl border border-mc-border/80 bg-mc-surface p-3 cursor-pointer shadow-lg hover:border-mc-cyan/60 hover:shadow-cyan-glow transition-all"
          >
            {/* Visual crop container */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-mc-surface-raised mb-3 border border-mc-border/60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mc-cyan text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                  <Maximize2 className="w-3 h-3" />
                  View Asset
                </span>
              </div>

              {/* Tag pill */}
              <div className="absolute top-2 left-2">
                <span className="px-2 py-0.5 rounded-md bg-mc-surface/90 border border-mc-border/60 font-mono text-[9px] text-mc-cyan font-semibold backdrop-blur-xs">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Title & Date */}
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-display text-sm font-bold text-mc-text-primary group-hover:text-mc-cyan transition-colors line-clamp-1">
                {item.title}
              </h4>
              <span className="font-mono text-[10px] text-mc-text-muted shrink-0">
                {item.date}
              </span>
            </div>

            <p className="mt-1 text-xs text-mc-text-secondary line-clamp-2 leading-relaxed">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={lightboxItems}
        initialIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
