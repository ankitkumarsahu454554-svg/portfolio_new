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
  accent: string;
}

const REEL_ITEMS: ReelCard[] = [
  {
    id: 'reel-1',
    title: 'Google for Developers Prompt Wars',
    category: 'AI HACKATHON // FINALIST',
    date: '2026',
    image: '/events/google-prompt-wars/cover.svg',
    caption: 'Official National Finalist recognition by Google for Developers for computational prompt architecture.',
    accent: '#FF3D81',
  },
  {
    id: 'reel-2',
    title: 'India Space Lab Aerospace Session',
    category: 'CANSAT TELEMETRY // TRAINING',
    date: 'Jun-Jul 2026',
    image: '/events/india-space-lab/cover.svg',
    caption: 'Hands-on atmospheric sensor logging and CanSat micro-payload telemetry processing.',
    accent: '#FF8A00',
  },
  {
    id: 'reel-3',
    title: 'Rare Disease Prediction AI',
    category: 'MACHINE LEARNING // HEALTHCARE',
    date: 'PROJECT',
    image: '/projects/rare-disease-prediction-ai/architecture.svg',
    caption: 'Hierarchical symptom-to-disease vector distance mapping using Human Phenotype Ontology representations.',
    accent: '#8B5CF6',
  },
  {
    id: 'reel-4',
    title: 'MediKiosk Clinical Intake Platform',
    category: 'FULL STACK // DATA SCIENCE',
    date: 'PROJECT',
    image: '/projects/medikiosk-patient-case-taking/hero.svg',
    caption: 'Automated prescription OCR and physician triage queue dashboard.',
    accent: '#00B8D9',
  },
  {
    id: 'reel-5',
    title: 'SecureWipe Enterprise Disk Sanitization',
    category: 'SYSTEMS // NIST SP 800-88',
    date: 'PROJECT',
    image: '/projects/securewipe-enterprise/sanitization-engine.svg',
    caption: 'Low-level block write patterns compliant with NIST SP 800-88 sanitization verification algorithms.',
    accent: '#00C48C',
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
      {/* Header telemetry tag with yellow/green accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC700]/15 text-[#FFC700]">
            <Camera className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#FFC700] dark:text-[#00C48C] font-bold">
            Visual Telemetry Reel & Project Artifacts
          </span>
        </div>

        <span className="font-mono text-xs text-mc-text-muted hidden sm:inline font-medium">
          CLICK POLAROID CARD TO EXPAND IN FULLSCREEN
        </span>
      </div>

      {/* Horizontally scrolling reel container */}
      <div className="flex gap-5 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 scrollbar-thin scrollbar-thumb-mc-border scrollbar-track-transparent">
        {REEL_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleCardClick(idx)}
            className="group shrink-0 w-[280px] sm:w-[320px] rounded-2xl border border-mc-border bg-white dark:bg-mc-surface p-3 cursor-pointer shadow-md hover:border-[#FFC700] hover:shadow-[0_14px_30px_-6px_rgba(255,199,0,0.22)] transition-all"
          >
            {/* Polaroid visual crop container */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-mc-surface-elevated mb-3 border border-mc-border/70">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  <Maximize2 className="w-3 h-3 text-[#FF3D81]" />
                  Inspect Artifact
                </span>
              </div>

              {/* Tag pill */}
              <div className="absolute top-2 left-2">
                <span
                  className="px-2.5 py-0.5 rounded-md bg-white/95 dark:bg-black/80 font-mono text-[9px] font-bold backdrop-blur-sm shadow-xs"
                  style={{ color: item.accent }}
                >
                  {item.category}
                </span>
              </div>
            </div>

            {/* Title & Date */}
            <div className="flex items-start justify-between gap-2 px-1">
              <h4 className="font-heading text-sm font-bold text-mc-text group-hover:text-[#FF8A00] transition-colors line-clamp-1">
                {item.title}
              </h4>
              <span className="font-mono text-[10px] text-mc-text-muted shrink-0 font-semibold">
                {item.date}
              </span>
            </div>

            <p className="mt-1 px-1 text-xs text-mc-text-secondary line-clamp-2 leading-relaxed">
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
