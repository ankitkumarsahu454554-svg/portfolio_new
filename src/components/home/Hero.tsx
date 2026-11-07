'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';
import { NeuralFlowCanvas } from './NeuralFlowCanvas';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center bg-[#F8FAFC] bg-natural-light">
      {/* Natural Ambient Sun & Sky Illumination */}
      <div className="pointer-events-none absolute top-12 left-10 h-[480px] w-[480px] rounded-full bg-amber-200/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-12 h-[420px] w-[420px] rounded-full bg-sky-200/35 blur-[140px]" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Clean, Pristine Profile Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start relative"
          >
            {/* Subtle Computational Graph Canvas in the background */}
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl overflow-hidden opacity-40">
              <NeuralFlowCanvas />
            </div>

            {/* Clean, pure photograph presentation in an editorial natural-light frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-2xl border border-slate-200/90 bg-white p-3 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.12),0_4px_16px_-4px_rgba(15,23,42,0.06)] transition-all duration-500 hover:border-sky-400 hover:shadow-[0_20px_48px_-8px_rgba(2,132,199,0.18)]">
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

          {/* Right Column: Professional Identity & Information (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 font-mono text-xs text-sky-700 font-semibold shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600 animate-pulse" />
              <span>DATA SCIENCE • MACHINE LEARNING • SOFTWARE ENGINEERING</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-900">
                Ankit Kumar Sahu
              </h1>

              <div className="space-y-1">
                <p className="font-heading text-xl sm:text-2xl md:text-3xl font-normal text-sky-700">
                  Computer Science & Engineering Student
                </p>
                <p className="font-mono text-xs sm:text-sm text-slate-600 tracking-wider font-medium">
                  NIST University • Specialization in Data Science
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-slate-700"
            >
              Undergraduate engineer at{' '}
              <strong className="text-slate-950 font-semibold">NIST University (CGPA: 8.75 / 10)</strong> specializing in{' '}
              <strong className="text-slate-950 font-semibold">Data Science & AI Systems</strong>. Focused on architecting
              empirical machine learning models, clinical healthcare intelligence pipelines, and high-performance
              backend software. Committed to rigorous analytical problem-solving and writing robust, maintainable code.
            </motion.p>

            {/* Credential Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl font-mono text-xs"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md">
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">ACADEMIC STANDING</span>
                <span className="text-sky-700 font-semibold text-sm">8.75 CGPA</span>
                <span className="text-slate-600 block text-[10px]">NIST University</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-md">
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">CORE SPECIALIZATION</span>
                <span className="text-indigo-700 font-semibold text-sm">AI/ML & Data</span>
                <span className="text-slate-600 block text-[10px]">PyTorch & Python</span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">COLLABORATION</span>
                <span className="text-slate-900 font-semibold text-sm">Open</span>
                <span className="text-slate-600 block text-[10px]">Projects & Research</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 pt-3"
            >
              <Button href="/projects" variant="primary" size="lg" withArrow>
                EXPLORE PROJECTS
              </Button>

              <Button
                href={SITE_CONFIG.resumePath}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                variant="secondary"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                <span>DOWNLOAD RESUME</span>
              </Button>

              <Button href="/contact" variant="ghost" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                <span>CONTACT ME</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
