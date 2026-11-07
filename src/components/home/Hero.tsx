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
    <section className="relative min-h-[92vh] w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center bg-[#090A0F] bg-subtle-mesh">
      {/* Refined ambient illumination */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-sky-500/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-12 h-[380px] w-[380px] rounded-full bg-indigo-500/[0.04] blur-[140px]" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Professional Identity & Scope (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/25 bg-sky-400/[0.06] px-4 py-1.5 font-mono text-xs text-sky-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>DATA SCIENCE • MACHINE LEARNING • SOFTWARE ENGINEERING</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
                Ankit Kumar Sahu
              </h1>

              <div className="space-y-1">
                <p className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-sky-300">
                  Computer Science & Engineering Student
                </p>
                <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider">
                  NIST University • Specialization in Data Science
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-slate-300"
            >
              Undergraduate engineer at{' '}
              <strong className="text-white font-medium">NIST University (CGPA: 8.75 / 10)</strong> specializing in{' '}
              <strong className="text-white font-medium">Data Science & AI Systems</strong>. Focused on architecting
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
              <div className="rounded-xl border border-white/[0.08] bg-[#111319] p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/40">
                <span className="text-slate-400 block text-[10px] uppercase">ACADEMIC STANDING</span>
                <span className="text-sky-300 font-semibold text-sm">8.75 CGPA</span>
                <span className="text-slate-500 block text-[10px]">NIST University</span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#111319] p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40">
                <span className="text-slate-400 block text-[10px] uppercase">CORE SPECIALIZATION</span>
                <span className="text-indigo-300 font-semibold text-sm">AI/ML & Data</span>
                <span className="text-slate-500 block text-[10px]">PyTorch & Python</span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/[0.08] bg-[#111319] p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                <span className="text-slate-400 block text-[10px] uppercase">COLLABORATION</span>
                <span className="text-white font-semibold text-sm">Open</span>
                <span className="text-slate-500 block text-[10px]">Projects & Research</span>
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

          {/* Right Column: Clean, Pristine Profile Portrait (Zero distracting overlays or tags around the photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Subtle Computational Graph Canvas in the background */}
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl overflow-hidden opacity-35">
              <NeuralFlowCanvas />
            </div>

            {/* Clean, pure photograph presentation in an elegant frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-2xl border border-white/[0.12] bg-[#111319] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-sky-400/30 hover:shadow-[0_16px_48px_rgba(56,189,248,0.12)]">
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
        </div>
      </Container>
    </section>
  );
}
