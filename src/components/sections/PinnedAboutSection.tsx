'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EDUCATION_DATA } from '@/lib/constants';
import { User, Cpu, Compass, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const CHAPTERS = [
  {
    id: '01',
    title: 'Who I Am',
    subtitle: 'Foundation & Academic Rigor',
    icon: <User className="h-5 w-5 text-[#FFC700]" />,
    lead: 'A Computer Science & Engineering undergraduate at NIST University with an 8.75 / 10 CGPA.',
    paragraphs: [
      'My journey is anchored in understanding algorithmic foundations from first principles, decomposing complex mathematical proofs into computational models, and applying rigorous analytical thinking to real-world datasets.',
      'Rather than treating modern artificial intelligence as an opaque black box, I focus on statistical validation, feature distributions, and repeatable benchmarks across every system I design.',
    ],
    highlight: '8.75 CGPA • Top Academic Standing • NIST University',
  },
  {
    id: '02',
    title: 'What I Build',
    subtitle: 'Clinical AI & Enterprise Systems',
    icon: <Cpu className="h-5 w-5 text-[#00C48C]" />,
    lead: 'High-fidelity healthcare machine learning architectures, automated clinical intake pipelines, and cryptographic disk sanitization utilities.',
    paragraphs: [
      'Engineered an end-to-end genetic candidate rare-disease ranking system in PyTorch using Human Phenotype Ontology representations, validated with Top-K accuracy and Mean Reciprocal Rank (MRR).',
      'Developed MediKiosk, an autonomous multilingual medical OCR intake platform, and SecureWipe, an enterprise storage device sanitization engine compliant with NIST SP 800-88 standards.',
    ],
    highlight: 'PyTorch • FastAPI • Rust/Go • NIST SP 800-88 Standards',
  },
  {
    id: '03',
    title: "What I'm Chasing",
    subtitle: 'Next-Gen Frontiers & High Impact',
    icon: <Compass className="h-5 w-5 text-[#FFC700]" />,
    lead: 'Pushing computational boundaries in applied AI, robust distributed backends, and safety-critical intelligence.',
    paragraphs: [
      'I am driven to build production-grade systems that withstand real-world chaos—whether processing high-throughput clinical telemetry or optimizing edge neural inferences.',
      'Actively exploring advanced model evaluations, LLM prompt architectures (recognized as a Finalist in Google for Developers Prompt Wars), and aerospace sensor telemetry.',
    ],
    highlight: 'Google Prompt Wars Finalist • CanSat Telemetry • Scalable Architectures',
  },
];

export function PinnedAboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="relative py-24 md:py-36 border-t border-mc-border overflow-hidden">
      {/* Background Soft Yellow/Green Glow */}
      <div className="pointer-events-none absolute -top-24 right-10 w-96 h-96 bg-gradient-to-br from-[#FFC700]/12 to-[#00C48C]/12 rounded-full blur-3xl -z-10" />

      <Container size="wide">
        <SectionHeader
          index="01"
          tag="ABOUT // MISSION DOSSIER"
          title="Engineering Philosophy & Background"
          subtitle="Mission Profile"
          description="A three-chapter exploration of my academic trajectory at NIST University, empirical problem-solving methodology, and engineering vision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chapter Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] text-mc-text-muted uppercase tracking-wider block mb-2 font-bold">
              SELECT CHAPTER:
            </span>

            {CHAPTERS.map((ch, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'border-[#FFC700] bg-mc-surface shadow-[0_10px_25px_-5px_rgba(255,199,0,0.25)]'
                      : 'border-mc-border bg-mc-surface/70 hover:border-[#00C48C]/50 hover:bg-mc-surface'
                  }`}
                  data-cursor="pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                        isSelected
                          ? 'border-[#FFC700] bg-[#FFC700]/15 text-[#FFC700]'
                          : 'border-mc-border bg-mc-surface-elevated text-mc-text-muted group-hover:text-mc-text'
                      }`}
                    >
                      {ch.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#FFC700] font-bold block">
                        CHAPTER {ch.id}
                      </span>
                      <h4 className="font-heading text-base font-semibold text-mc-text leading-tight">
                        {ch.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#FFC700]' : 'text-mc-text-muted group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}

            {/* Quick Formal Education Snapshot with Yellow/Green Accent */}
            <div className="mt-6 rounded-2xl border border-[#00C48C]/30 bg-mc-surface p-5 backdrop-blur-md shadow-[0_8px_20px_-6px_rgba(0,196,140,0.15)]">
              <div className="flex items-center gap-2.5 text-[#00C48C] border-b border-mc-border pb-3 mb-3 font-mono text-xs font-bold">
                <GraduationCap className="h-4 w-4 text-[#00C48C]" />
                <span>NIST UNIVERSITY SNAPSHOT</span>
              </div>
              <p className="font-heading text-sm text-mc-text font-bold">{EDUCATION_DATA[0].degree}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="px-2 py-0.5 rounded-md bg-[#FFC700]/15 text-[#FFC700] font-mono text-xs font-bold border border-[#FFC700]/30">
                  {EDUCATION_DATA[0].grade}
                </span>
                <span className="font-mono text-[11px] text-mc-text-muted">Top Standing</span>
              </div>
              <p className="font-mono text-[11px] text-mc-text-muted mt-2">{EDUCATION_DATA[0].duration} • {EDUCATION_DATA[0].location}</p>
            </div>
          </div>

          {/* Right Column: Animated Chapter Content Display (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-[#FFC700]/30 bg-mc-surface p-7 sm:p-10 shadow-[0_16px_40px_-10px_rgba(255,199,0,0.15)] relative overflow-hidden"
              >
                {/* Background Chapter Number Watermark */}
                <span className="absolute top-4 right-6 font-mono text-6xl font-black text-mc-border/20 select-none pointer-events-none">
                  0{CHAPTERS[activeTab].id}
                </span>

                <div className="space-y-6 relative z-10">
                  <div>
                    <span className="font-mono text-xs text-[#00C48C] font-bold tracking-wider uppercase block">
                      {CHAPTERS[activeTab].subtitle}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-4xl font-bold text-mc-text mt-1">
                      {CHAPTERS[activeTab].title}
                    </h3>
                  </div>

                  {/* Highlighted Quote in warm yellow/green */}
                  <div className="border-l-4 border-[#FFC700] pl-4 py-2 bg-gradient-to-r from-[#FFC700]/10 via-[#00C48C]/5 to-transparent rounded-r-xl">
                    <p className="font-sans text-lg sm:text-xl font-medium text-mc-text leading-snug">
                      &ldquo;{CHAPTERS[activeTab].lead}&rdquo;
                    </p>
                  </div>

                  <div className="space-y-4 font-sans text-sm sm:text-base text-mc-text-secondary leading-relaxed">
                    {CHAPTERS[activeTab].paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Highlights Callout Box */}
                  <div className="rounded-xl border border-[#00C48C]/30 bg-[#00C48C]/10 p-4 font-mono text-xs text-[#00C48C] flex items-center justify-between">
                    <span className="font-bold tracking-wider">{CHAPTERS[activeTab].highlight}</span>
                    <span className="text-[10px] text-mc-text-muted uppercase font-bold px-2 py-0.5 rounded bg-mc-surface border border-mc-border">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
