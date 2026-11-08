'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EDUCATION_DATA } from '@/lib/constants';
import { User, Cpu, Compass, GraduationCap, ArrowRight } from 'lucide-react';

const CHAPTERS = [
  {
    id: '01',
    title: 'Who I Am',
    subtitle: 'Foundation & Academic Rigor',
    icon: <User className="h-5 w-5 text-mc-cyan" />,
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
    icon: <Cpu className="h-5 w-5 text-mc-amber" />,
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
    icon: <Compass className="h-5 w-5 text-mc-cyan" />,
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
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="DOSSIER // CHAPTER LOG"
          title="About & Engineering Philosophy"
          subtitle="Mission Profile"
          description="A three-chapter exploration of my academic background at NIST University, empirical problem-solving methodology, and engineering vision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chapter Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] text-mc-text-muted uppercase tracking-telemetry block mb-2 font-semibold">
              SELECT CHAPTER:
            </span>

            {CHAPTERS.map((ch, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group mc-panel ${
                    isSelected
                      ? 'border-mc-cyan bg-mc-surface-elevated shadow-lg'
                      : 'border-mc-border bg-mc-surface/70 hover:border-mc-border-medium'
                  }`}
                  data-cursor="pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                        isSelected
                          ? 'border-mc-cyan bg-mc-cyan/15 text-mc-cyan'
                          : 'border-mc-border bg-mc-bg text-mc-text-muted group-hover:text-mc-text'
                      }`}
                    >
                      {ch.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-mc-cyan font-bold block">
                        CHAPTER {ch.id}
                      </span>
                      <h4 className="font-heading text-base font-semibold text-mc-text leading-tight">
                        {ch.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-mc-cyan' : 'text-mc-text-muted group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}

            {/* Quick Formal Education Snapshot */}
            <div className="mt-6 rounded-2xl border border-mc-border bg-mc-surface/60 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-mc-cyan border-b border-mc-border pb-3 mb-3 font-mono text-xs font-semibold">
                <GraduationCap className="h-4 w-4" />
                <span>NIST UNIVERSITY SNAPSHOT</span>
              </div>
              <p className="font-heading text-sm text-mc-text font-semibold">{EDUCATION_DATA[0].degree}</p>
              <p className="font-mono text-xs text-mc-amber mt-1 font-bold">{EDUCATION_DATA[0].grade}</p>
              <p className="font-mono text-[11px] text-mc-text-muted mt-0.5">{EDUCATION_DATA[0].duration} • {EDUCATION_DATA[0].location}</p>
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
                className="rounded-3xl border border-mc-border bg-mc-surface p-7 sm:p-10 mc-panel shadow-2xl relative overflow-hidden"
              >
                {/* Background Telemetry Code Watermark */}
                <span className="absolute top-4 right-6 font-mono text-5xl font-black text-mc-border/30 select-none pointer-events-none">
                  CH.{CHAPTERS[activeTab].id}
                </span>

                <div className="space-y-6 relative z-10">
                  <div>
                    <span className="font-mono text-xs text-mc-cyan font-bold tracking-telemetry uppercase block">
                      {CHAPTERS[activeTab].subtitle}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-4xl font-bold text-mc-text mt-1">
                      {CHAPTERS[activeTab].title}
                    </h3>
                  </div>

                  <p className="font-sans text-lg sm:text-xl font-medium text-mc-text leading-snug border-l-2 border-mc-cyan pl-4">
                    {CHAPTERS[activeTab].lead}
                  </p>

                  <div className="space-y-4 font-sans text-sm sm:text-base text-mc-text-secondary leading-relaxed">
                    {CHAPTERS[activeTab].paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Highlights Callout Box */}
                  <div className="rounded-xl border border-mc-cyan/25 bg-mc-cyan/8 p-4 font-mono text-xs text-mc-cyan flex items-center justify-between">
                    <span className="font-bold tracking-wider">{CHAPTERS[activeTab].highlight}</span>
                    <span className="text-[10px] text-mc-text-muted uppercase">VERIFIED</span>
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

