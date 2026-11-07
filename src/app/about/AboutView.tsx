'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const CAPABILITIES = [
  {
    category: 'AI & MACHINE LEARNING',
    items: [
      'Supervised Learning & Model Evaluation',
      'LLM APIs, Prompt Engineering & Gemini API',
      'PyTorch, TensorFlow, Scikit-learn',
      'Data Preprocessing, NumPy & Pandas',
      'Healthcare AI & Rare Disease Prediction',
    ],
  },
  {
    category: 'CREATIVE TECH & 3D WEB',
    items: [
      'Interactive WebGL & Shader Pipelines',
      'Three.js & React Three Fiber (R3F)',
      'Custom Vertex & Fragment Shaders (GLSL)',
      'Physically-Based Rendering (PBR)',
      'Physics-Based Interaction & Lenis Scrolling',
    ],
  },
  {
    category: 'FULL-STACK SOFTWARE',
    items: [
      'Next.js 14 App Router & React',
      'FastAPI, Python & REST API Architecture',
      'TypeScript, Go & Rust Systems Development',
      'PostgreSQL, SQL & Database Engineering',
      'Electron Desktop Application Development',
    ],
  },
  {
    category: 'RESEARCH & DOMAIN PRACTICES',
    items: [
      'Data Science Internship (Unified Mentor)',
      'Space Technology (India Space Lab - CanSat & GIS)',
      'Data Sanitization (NIST SP 800-88 Standards)',
      'Multilingual OCR & Voice Symptom Collection',
      'Prompt Wars Finalist (Google for Developers)',
    ],
  },
];

const TIMELINE = [
  {
    period: '2024 — 2028',
    title: 'B-Tech in Computer Science Engineering (Data Science)',
    institution: 'NIST UNIVERSITY',
    detail: 'CGPA: 8.75 / 10. Core focus on Machine Learning, Algorithms, Data Structures, and Applied Mathematics.',
  },
  {
    period: 'OCT 2026 — DEC 2026',
    title: 'Data Science Intern',
    institution: 'UNIFIED MENTOR PVT. LTD',
    detail: 'Hands-on projects in data preprocessing, supervised learning models, and real-world statistical analysis.',
  },
  {
    period: 'JUN 2026 — JUL 2026',
    title: 'Space Technology & Systems Trainee',
    institution: 'INDIA SPACE LAB',
    detail: 'Technical training program covering drone technology, CanSat/CubeSat architectures, GIS remote sensing, and rocketry.',
  },
];

export function AboutView() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container size="wide">
        <SectionHeader
          index="03"
          tag="STUDIO PRACTICE & PROFILE"
          title="ABOUT ANKIT KUMAR SAHU"
          subtitle="AI/ML SPECIALIST & CREATIVE DEVELOPER"
          description="Synthesizing machine learning intelligence, real-time GPU graphics, and robust software architecture."
        />

        {/* Narrative & Cinematic Portrait Row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start pb-20 border-b border-white/[0.08]">
          {/* Left Column: Biography & Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.04] px-3 py-1 font-mono text-xs text-lime">
              <Sparkles className="h-3.5 w-3.5" />
              <span>DATA SCIENCE SPECIALIST & RESEARCHER</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-4xl font-light text-white leading-tight">
              Engineering intelligent systems where <span className="text-lime">data science</span> meets{' '}
              <span className="italic metallic-text">creative technology</span>.
            </h3>

            <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-gray-400">
              <p>
                I am a Computer Science student specializing in Data Science at NIST University, with an active
                focus in Artificial Intelligence, Machine Learning, Large Language Model training, and real-time
                software engineering.
              </p>
              <p>
                My work spans applied AI in healthcare—such as Rare Disease Prediction engines utilizing
                phenotype ranking and HPO analysis—to high-performance multilingual medical intake kiosks
                (MediKiosk) and enterprise data sanitization utilities adhering to NIST SP 800-88 guidelines.
              </p>
              <p>
                In the creative domain, I construct GPU-accelerated WebGL environments, physics-driven tactile
                interfaces, and minimal editorial digital design systems that run with sub-16ms precision.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3.5">
              <Button href="/resume" variant="primary" size="md" withArrow>
                VIEW RESUME
              </Button>
              <Button href="/work" variant="secondary" size="md">
                INSPECT PORTFOLIO
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                COMMISSION WORK
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Primary Cinematic Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="group relative rounded-2xl border border-white/15 bg-surface-50/70 p-4 sm:p-5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-lime/40">
              {/* Corner crosshair badges */}
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-[11px] text-lime">
                  + [PROFILE: ANKIT_KUMAR_SAHU]
                </span>
                <Badge variant="lime" dot pulse className="text-[10px]">
                  VERIFIED
                </Badge>
              </div>

              {/* Cinematic Framed Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-[#060708] shadow-inner">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-60" />

                {/* Bottom Overlay Telemetry on Portrait */}
                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-[#08090B]/85 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading text-sm font-medium text-white">
                        {SITE_CONFIG.curator}
                      </p>
                      <p className="font-mono text-[10px] text-lime">
                        NIST UNIVERSITY • B-TECH CSE (DATA SCIENCE)
                      </p>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-white">
                      8.75 CGPA
                    </span>
                  </div>
                </div>
              </div>

              {/* Portrait Metadata Footer */}
              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-gray-400">
                  <span className="text-gray-500">LOCATION</span>
                  <span>{SITE_CONFIG.location}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-gray-400">
                  <span className="text-gray-500">SPECIALIZATION</span>
                  <span className="text-lime">AI/ML & DATA SCIENCE</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-gray-500">DISPOSITION</span>
                  <span>{SITE_CONFIG.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Experience Track */}
        <div className="py-20 border-b border-white/[0.08]">
          <div className="mb-12">
            <span className="font-mono text-xs text-lime tracking-widest uppercase">
              /TRAJECTORY
            </span>
            <h3 className="mt-2 font-heading text-3xl font-light text-white">
              EDUCATION & TECHNICAL INTERNSHIPS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.08] bg-surface-50/40 p-6 backdrop-blur-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-lime">{item.period}</span>
                  <GraduationCap className="h-4 w-4 text-gray-500" />
                </div>
                <h4 className="font-heading text-base font-light text-white">
                  {item.title}
                </h4>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                  {item.institution}
                </p>
                <p className="font-sans text-xs leading-relaxed text-gray-400 pt-2 border-t border-white/[0.04]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="pt-20">
          <div className="mb-12">
            <span className="font-mono text-xs text-lime tracking-widest uppercase">
              /CAPABILITIES
            </span>
            <h3 className="mt-2 font-heading text-3xl font-light text-white">
              TECHNICAL DISCIPLINES & EXPERTISE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-white/[0.08] bg-surface-50/40 p-6 backdrop-blur-sm"
              >
                <h4 className="border-b border-white/[0.06] pb-3 font-mono text-xs font-semibold tracking-wider text-lime">
                  {group.category}
                </h4>
                <ul className="mt-4 space-y-3 font-sans text-xs text-gray-400">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-electric flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

