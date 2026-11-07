'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Database, ArrowUpRight, Download, Mail, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, EDUCATION_DATA, TECHNICAL_SKILLS } from '@/lib/constants';

export function AboutView() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="ACADEMIC & PROFESSIONAL BACKGROUND"
          title="About Ankit Kumar Sahu"
          subtitle="Computer Science & Engineering Student"
          description="An analytical computer science undergraduate at NIST University specializing in Data Science, Machine Learning architectures, and production software engineering."
        />

        {/* Narrative & Cinematic Portrait Row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start pb-16 border-b border-white/[0.08]">
          {/* Left Column: Biography & Academic Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/[0.05] px-3 py-1 font-mono text-xs text-lime">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>NIST UNIVERSITY • B-TECH CSE (DATA SCIENCE)</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-tight">
              Building intelligent systems through <span className="text-cyan-400">empirical machine learning</span> and{' '}
              <span className="text-lime">practical software engineering</span>.
            </h3>

            <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-gray-300">
              <p>
                I am a Computer Science & Engineering undergraduate specializing in Data Science at{' '}
                <strong className="text-white">NIST University</strong>, maintaining an academic record of{' '}
                <strong className="text-lime font-semibold">8.75 / 10 CGPA</strong>. My academic journey is centered around
                understanding algorithmic principles, implementing machine learning models from mathematical fundamentals,
                and developing robust full-stack software.
              </p>
              <p>
                My technical interests span <strong className="text-white">Deep Learning in Healthcare</strong> (such as
                candidate rare disease ranking using Human Phenotype Ontology representations),{' '}
                <strong className="text-white">Applied Data Science</strong> (multilingual medical OCR and clinical intake systems),
                and <strong className="text-white">Systems Software</strong> (cryptographic data sanitization tools complying with
                NIST SP 800-88 enterprise specifications).
              </p>
              <p>
                As an engineer, I prioritize clean architectural design, measurable performance metrics (such as Top-K accuracy and
                Mean Reciprocal Rank), and production reliability over theoretical prototypes. I am seeking summer and fall
                internships at leading technology companies, research organizations, IITs, and NITs where I can contribute to
                challenging software engineering and AI/ML initiatives.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5">
              <Button href={SITE_CONFIG.resumePath} download="Ankit_Kumar_Sahu_Resume.pdf" variant="primary" size="md">
                <Download className="mr-2 h-4 w-4" />
                <span>DOWNLOAD RESUME</span>
              </Button>
              <Button href="/projects" variant="secondary" size="md">
                EXPLORE PROJECTS
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                <Mail className="mr-2 h-4 w-4" />
                <span>GET IN TOUCH</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Original Portrait in Clean Futuristic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/15 bg-surface-50/80 p-4 sm:p-5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              {/* Card Header */}
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono text-xs">
                <span className="text-gray-300 font-medium">CANDIDATE DOSSIER</span>
                <span className="text-lime font-semibold">8.75 CGPA</span>
              </div>

              {/* Exact Unaltered Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-[#060708]">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                  className="object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-[#08090B]/90 p-3 backdrop-blur-md font-mono text-xs">
                  <p className="font-heading text-sm font-medium text-white">{SITE_CONFIG.name}</p>
                  <p className="text-[11px] text-cyan-400">B-Tech CSE (Data Science) • 2024–2028</p>
                  <p className="text-[10px] text-gray-400">NIST University, Odisha</p>
                </div>
              </div>

              {/* Metadata Table */}
              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-gray-400">
                  <span className="text-gray-400">STATUS</span>
                  <span className="text-lime font-medium">Seeking Internships</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-gray-400">
                  <span className="text-gray-400">PRIMARY FOCUS</span>
                  <span className="text-white">AI/ML & Data Science</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-gray-400">EMAIL</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan-400 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Engineering Philosophy & Problem-Solving Approach */}
        <div className="py-16 border-b border-white/[0.08]">
          <div className="mb-8">
            <span className="font-mono text-xs text-lime tracking-widest uppercase">/METHODOLOGY</span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-white">
              Engineering & Problem-Solving Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/[0.08] bg-surface-50/50 p-6 backdrop-blur-sm space-y-3">
              <span className="font-mono text-xs text-cyan-400 font-semibold block">01 / EMPIRICAL RIGOR</span>
              <h4 className="font-heading text-base text-white">Data-Driven Validation</h4>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                Rather than treating machine learning as a black box, I evaluate models through strict statistical benchmarks, cross-validation, and metrics like Top-K accuracy and Mean Reciprocal Rank (MRR).
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-50/50 p-6 backdrop-blur-sm space-y-3">
              <span className="font-mono text-xs text-lime font-semibold block">02 / SYSTEMS ARCHITECTURE</span>
              <h4 className="font-heading text-base text-white">Reliable Software Engineering</h4>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                Writing maintainable, modular, and type-safe code using TypeScript, Python, and Go. Emphasizing clean API contracts, automated data sanitization, and structured backend pipelines.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-50/50 p-6 backdrop-blur-sm space-y-3">
              <span className="font-mono text-xs text-cyan-400 font-semibold block">03 / REAL-WORLD IMPACT</span>
              <h4 className="font-heading text-base text-white">Practical Problem-Solving</h4>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                Focusing on software that solves concrete real-world pain points: accelerating healthcare clinical intake, diagnosing rare genetic diseases, and securing enterprise hardware against data leaks.
              </p>
            </div>
          </div>
        </div>

        {/* Education Detail */}
        <div className="pt-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-lime tracking-widest uppercase">/ACADEMICS</span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-white">
              University Degree & Coursework
            </h3>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-surface-50/60 p-6 sm:p-8 backdrop-blur-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
              <div>
                <h4 className="font-heading text-lg font-medium text-white">{EDUCATION_DATA[0].degree}</h4>
                <p className="font-mono text-xs text-cyan-400">{EDUCATION_DATA[0].institution} • {EDUCATION_DATA[0].location}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-sm font-semibold text-lime">{EDUCATION_DATA[0].grade}</span>
                <p className="font-mono text-xs text-gray-400">{EDUCATION_DATA[0].duration}</p>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
              {EDUCATION_DATA[0].description}
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block mb-2 font-semibold">
                CORE TECHNICAL SUBJECTS:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Machine Learning Foundations',
                  'Object-Oriented Programming (Java/C++)',
                  'Database Management Systems (SQL)',
                  'Operating Systems & Linux',
                  'Probability & Statistics for Data Science',
                  'Linear Algebra & Applied Mathematics',
                  'Web & Distributed Systems',
                ].map((subject) => (
                  <span
                    key={subject}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-gray-300"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
