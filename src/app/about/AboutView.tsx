'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Download, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, EDUCATION_DATA } from '@/lib/constants';

export function AboutView() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#090A0F] bg-subtle-mesh">
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="ACADEMIC & PROFESSIONAL BACKGROUND"
          title="About Ankit Kumar Sahu"
          subtitle="Computer Science & Engineering Student"
          description="An analytical computer science undergraduate at NIST University specializing in Data Science, Machine Learning architectures, and production software engineering."
        />

        {/* Narrative & Cinematic Portrait Row (Portrait on Left, Information on Right) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start pb-16 border-b border-white/[0.08]">
          {/* Left Column: Clean, Pristine Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[320px] sm:max-w-[340px] rounded-2xl border border-white/[0.12] bg-[#111319] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:border-sky-400/30 transition-all duration-500">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#090A0F]">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 640px) 300px, 340px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography & Academic Focus (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/[0.06] px-3.5 py-1 font-mono text-xs text-sky-400">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>NIST UNIVERSITY • B-TECH CSE (DATA SCIENCE)</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-tight">
              Building intelligent systems through <span className="text-sky-300">empirical machine learning</span> and{' '}
              <span className="text-indigo-300">practical software engineering</span>.
            </h3>

            <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-slate-300">
              <p>
                I am a Computer Science & Engineering undergraduate specializing in Data Science at{' '}
                <strong className="text-white">NIST University</strong>, maintaining a consistent academic record of{' '}
                <strong className="text-sky-300 font-semibold">8.75 / 10 CGPA</strong>. My academic journey is centered around
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
                Mean Reciprocal Rank), and production reliability over theoretical prototypes. I actively collaborate on technical
                challenges, open-source architectures, and engineering initiatives.
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
        </div>

        {/* Engineering Philosophy & Problem-Solving Approach */}
        <div className="py-16 border-b border-white/[0.08]">
          <div className="mb-8">
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">/METHODOLOGY</span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-white">
              Engineering & Problem-Solving Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111319] p-6 backdrop-blur-sm space-y-3 transition-all duration-300 hover:border-sky-400/30 hover:shadow-[0_8px_30px_rgba(56,189,248,0.06)] hover:-translate-y-1">
              <span className="font-mono text-xs text-sky-400 font-semibold block">01 / EMPIRICAL RIGOR</span>
              <h4 className="font-heading text-base text-white">Data-Driven Validation</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rather than treating machine learning as a black box, I evaluate models through strict statistical benchmarks, cross-validation, and metrics like Top-K accuracy and Mean Reciprocal Rank (MRR).
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#111319] p-6 backdrop-blur-sm space-y-3 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.06)] hover:-translate-y-1">
              <span className="font-mono text-xs text-indigo-400 font-semibold block">02 / SYSTEMS ARCHITECTURE</span>
              <h4 className="font-heading text-base text-white">Reliable Software Engineering</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Writing maintainable, modular, and type-safe code using TypeScript, Python, and Go. Emphasizing clean API contracts, automated data sanitization, and structured backend pipelines.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#111319] p-6 backdrop-blur-sm space-y-3 transition-all duration-300 hover:border-sky-400/30 hover:shadow-[0_8px_30px_rgba(56,189,248,0.06)] hover:-translate-y-1">
              <span className="font-mono text-xs text-sky-400 font-semibold block">03 / REAL-WORLD IMPACT</span>
              <h4 className="font-heading text-base text-white">Practical Problem-Solving</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Focusing on software that solves concrete real-world pain points: accelerating healthcare clinical intake, diagnosing rare genetic diseases, and securing enterprise hardware against data leaks.
              </p>
            </div>
          </div>
        </div>

        {/* Education Detail */}
        <div className="pt-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">/ACADEMICS</span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-white">
              University Degree & Coursework
            </h3>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#111319] p-6 sm:p-8 backdrop-blur-sm space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/[0.06] pb-4">
              <div>
                <h4 className="font-heading text-xl font-medium text-white">{EDUCATION_DATA[0].degree}</h4>
                <p className="font-mono text-sm text-sky-400 mt-0.5">
                  {EDUCATION_DATA[0].institution} • {EDUCATION_DATA[0].location}
                </p>
              </div>
              <div className="font-mono text-sm font-semibold text-sky-300">
                {EDUCATION_DATA[0].grade}
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              {EDUCATION_DATA[0].description}
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                CORE TECHNICAL SUBJECTS:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures and Algorithms',
                  'Machine Learning Foundations',
                  'Database Management Systems',
                  'Object-Oriented Programming',
                  'Probability and Statistics',
                  'Linear Algebra for Machine Learning',
                  'Operating Systems',
                ].map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-white/[0.08] bg-[#161922] px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {c}
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
