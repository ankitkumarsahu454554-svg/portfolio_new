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
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#F8FAFC] bg-natural-light min-h-screen">
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="ACADEMIC & PROFESSIONAL BACKGROUND"
          title="About Ankit Kumar Sahu"
          subtitle="Computer Science & Engineering Student"
          description="An analytical computer science undergraduate at NIST University specializing in Data Science, Machine Learning architectures, and production software engineering."
        />

        {/* Narrative & Cinematic Portrait Row (Portrait on Left, Information on Right) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start pb-16 border-b border-slate-200">
          {/* Left Column: Clean, Pristine Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[320px] sm:max-w-[340px] rounded-2xl border border-slate-200/90 bg-white p-3 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.12),0_4px_16px_-4px_rgba(15,23,42,0.06)] hover:border-sky-300 transition-all duration-500">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 font-mono text-xs text-sky-700 font-semibold shadow-2xs">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>NIST UNIVERSITY • B-TECH CSE (DATA SCIENCE)</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900 leading-tight">
              Building intelligent systems through <span className="text-sky-700">empirical machine learning</span> and{' '}
              <span className="text-indigo-700">practical software engineering</span>.
            </h3>

            <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-slate-700">
              <p>
                I am a Computer Science & Engineering undergraduate specializing in Data Science at{' '}
                <strong className="text-slate-950 font-semibold">NIST University</strong>, maintaining a consistent academic record of{' '}
                <strong className="text-sky-700 font-bold">8.75 / 10 CGPA</strong>. My academic journey is centered around
                understanding algorithmic principles, implementing machine learning models from mathematical fundamentals,
                and developing robust full-stack software.
              </p>
              <p>
                My technical interests span <strong className="text-slate-950 font-semibold">Deep Learning in Healthcare</strong> (such as
                candidate rare disease ranking using Human Phenotype Ontology representations),{' '}
                <strong className="text-slate-950 font-semibold">Applied Data Science</strong> (multilingual medical OCR and clinical intake systems),
                and <strong className="text-slate-950 font-semibold">Systems Software</strong> (cryptographic data sanitization tools complying with
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
        <div className="py-16 border-b border-slate-200">
          <div className="mb-8">
            <span className="font-mono text-xs text-sky-700 tracking-widest uppercase font-bold">/METHODOLOGY</span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-slate-900">
              Engineering & Problem-Solving Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm space-y-3 transition-all duration-300 hover:border-sky-300 hover:shadow-md hover:-translate-y-1">
              <span className="font-mono text-xs text-sky-700 font-bold block">01 / EMPIRICAL RIGOR</span>
              <h4 className="font-heading text-base font-semibold text-slate-900">Data-Driven Validation</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than treating machine learning as a black box, I evaluate models through strict statistical benchmarks, cross-validation, and metrics like Top-K accuracy and Mean Reciprocal Rank (MRR).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm space-y-3 transition-all duration-300 hover:border-indigo-300 hover:shadow-md hover:-translate-y-1">
              <span className="font-mono text-xs text-indigo-700 font-bold block">02 / SYSTEMS ARCHITECTURE</span>
              <h4 className="font-heading text-base font-semibold text-slate-900">Reliable Software Engineering</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Writing maintainable, modular, and type-safe code using TypeScript, Python, and Go. Emphasizing clean API contracts, automated data sanitization, and structured backend pipelines.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm space-y-3 transition-all duration-300 hover:border-sky-300 hover:shadow-md hover:-translate-y-1">
              <span className="font-mono text-xs text-sky-700 font-bold block">03 / REAL-WORLD IMPACT</span>
              <h4 className="font-heading text-base font-semibold text-slate-900">Practical Problem-Solving</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focusing on software that solves concrete real-world pain points: accelerating healthcare clinical intake, diagnosing rare genetic diseases, and securing enterprise hardware against data leaks.
              </p>
            </div>
          </div>
        </div>

        {/* Education Detail */}
        <div className="pt-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-sky-700 tracking-widest uppercase font-bold">/ACADEMICS</span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-slate-900">
              University Degree & Coursework
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h4 className="font-heading text-xl font-semibold text-slate-900">{EDUCATION_DATA[0].degree}</h4>
                <p className="font-mono text-sm text-sky-700 font-medium mt-0.5">
                  {EDUCATION_DATA[0].institution} • {EDUCATION_DATA[0].location}
                </p>
              </div>
              <div className="rounded-md border border-sky-200 bg-sky-50 px-2.5 py-1 font-mono text-sm font-bold text-sky-800">
                {EDUCATION_DATA[0].grade}
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
              {EDUCATION_DATA[0].description}
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
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
                    className="rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1 font-mono text-xs text-slate-700 font-medium"
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
