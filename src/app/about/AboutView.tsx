'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Download, Mail, ArrowUpRight, Award, BookOpen, Sparkles } from 'lucide-react';
import { SITE_CONFIG, EDUCATION_DATA } from '@/lib/constants';
import { PinnedAboutSection } from '@/components/sections/PinnedAboutSection';
import { BentoSkills } from '@/components/sections/BentoSkills';
import { PhotoReelStrip } from '@/components/sections/PhotoReelStrip';
import Link from 'next/link';

export function AboutView() {
  return (
    <div className="pt-24 pb-20 bg-mc-bg text-mc-text min-h-screen overflow-x-hidden">
      {/* Narrative & Cinematic Portrait Row (Portrait on Left, Information on Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Portrait with Rotating Conic Rainbow Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-[340px] conic-rainbow-border shadow-2xl">
              <div className="relative rounded-[1.6rem] bg-white dark:bg-mc-surface p-3.5 shadow-xl transition-all duration-500">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-mc-surface-elevated">
                  <Image
                    src={SITE_CONFIG.profileImagePath}
                    alt="Ankit Kumar Sahu - Portrait"
                    fill
                    sizes="(max-width: 640px) 300px, 340px"
                    priority
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Verified Student Badge */}
                <div className="mt-3.5 pt-3 border-t border-mc-border flex items-center justify-between font-mono text-xs">
                  <span className="text-mc-text-muted font-medium">NIST UNIVERSITY</span>
                  <span className="text-emerald-800 dark:text-emerald-400 font-bold">CGPA: 8.75 / 10.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-300 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/40 px-3.5 py-1 font-mono text-xs text-pink-900 dark:text-pink-300 font-bold">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>NIST UNIVERSITY • B-TECH CSE (DATA SCIENCE)</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-mc-text leading-tight">
              Engineering high-impact systems through{' '}
              <span className="font-serif italic font-normal text-gradient-rainbow">
                empirical machine learning
              </span>{' '}
              and data pipelines.
            </h1>

            <p className="font-sans text-base sm:text-lg text-mc-text-secondary leading-relaxed">
              I am an undergraduate Computer Science & Engineering student at{' '}
              <strong className="text-mc-text font-bold">NIST University</strong> specializing in Data Science.
              My work spans predictive healthcare AI, atmospheric telemetry processing, and cryptographic secure wiping algorithms.
            </p>

            <p className="font-sans text-sm sm:text-base text-mc-text-secondary leading-relaxed">
              Through internships at <strong className="text-mc-text font-semibold">Unified Mentor Pvt. Ltd</strong> and aerospace systems training at <strong className="text-mc-text font-semibold">India Space Lab</strong>, I have cultivated an obsession with mathematically sound architectures, high accuracy benchmarks, and production-grade software reliability.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#FF3D81]/25 hover:opacity-95"
                style={{ background: 'var(--gradient-rainbow)' }}
              >
                <Download className="w-4 h-4 text-white" />
                <span>View Full Resume</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-mc-surface border border-mc-border hover:border-[#FF3D81] font-mono text-xs text-mc-text hover:text-[#FF3D81] font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Dispatch</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3-Chapter Pinned Storytelling Dossier */}
      <PinnedAboutSection />

      {/* Visual Photo-Reel Filmstrip */}
      <PhotoReelStrip />

      {/* Bento Matrix Skills Showcase */}
      <BentoSkills />
    </div>
  );
}
