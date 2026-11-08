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
    <div className="pt-24 pb-20 bg-mc-canvas text-mc-text-primary min-h-screen">
      {/* Narrative & Cinematic Portrait Row (Portrait on Left, Information on Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-[340px] rounded-2xl border border-mc-border/90 bg-mc-surface p-3.5 shadow-2xl hover:border-mc-cyan/50 transition-all duration-500">
              {/* Subtle ambient cyan glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-mc-cyan/20 to-mc-amber/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-mc-surface-raised">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 640px) 300px, 340px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Verified Student Badge */}
              <div className="mt-3.5 pt-3 border-t border-mc-border/60 flex items-center justify-between font-mono text-xs">
                <span className="text-mc-text-muted">NIST UNIVERSITY</span>
                <span className="text-mc-cyan font-bold">CGPA: 8.75 / 10.0</span>
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
            <div className="inline-flex items-center gap-2 rounded-full border border-mc-cyan/30 bg-mc-cyan/10 px-3.5 py-1 font-mono text-xs text-mc-cyan font-semibold">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>NIST UNIVERSITY • B-TECH CSE (DATA SCIENCE)</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-mc-text-primary leading-tight">
              Engineering high-impact systems through{' '}
              <span className="font-serif italic font-normal text-mc-cyan">empirical machine learning</span> and{' '}
              <span className="font-serif italic font-normal text-mc-amber">data pipelines</span>.
            </h1>

            <p className="font-sans text-base sm:text-lg text-mc-text-secondary leading-relaxed">
              I am an undergraduate Computer Science & Engineering student at{' '}
              <strong className="text-mc-text-primary">NIST University</strong> specializing in Data Science.
              My work spans predictive healthcare AI, atmospheric telemetry processing, and cryptographic secure wiping algorithms.
            </p>

            <p className="font-sans text-sm sm:text-base text-mc-text-secondary leading-relaxed">
              Through internships at <strong className="text-mc-text-primary">Unified Mentor Pvt. Ltd</strong> and aerospace systems training at <strong className="text-mc-text-primary">India Space Lab</strong>, I have cultivated an obsession with mathematically sound architectures, high accuracy benchmarks, and production-grade software reliability.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mc-cyan text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-mc-cyan/90 transition-all shadow-md shadow-mc-cyan/20"
              >
                <Download className="w-4 h-4 text-black" />
                <span>View Full Resume</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mc-surface border border-mc-border hover:border-mc-cyan/60 font-mono text-xs text-mc-text-primary hover:text-mc-cyan font-medium uppercase tracking-wider transition-all"
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

      {/* Visual Telemetry Photo Reel Strip */}
      <PhotoReelStrip />

      {/* Bento Skills Grid */}
      <BentoSkills />
    </div>
  );
}
