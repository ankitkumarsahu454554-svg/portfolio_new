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
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center bg-[#000000]">
      {/* Animated Subtle Digital Grid */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute top-12 right-1/4 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-12 left-10 h-[340px] w-[340px] rounded-full bg-lime/10 blur-[130px]" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Professional Identity & Objectives (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/[0.06] px-3.5 py-1.5 font-mono text-xs text-lime"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              <span>HELLO, I&apos;M</span>
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
                <p className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-cyan-400">
                  Computer Science & Engineering Student
                </p>
                <p className="font-mono text-xs sm:text-sm text-gray-400 tracking-wider">
                  Data Science | AI & Machine Learning | Software Development
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-gray-300"
            >
              Undergraduate engineer at{' '}
              <strong className="text-white font-medium">NIST University (CGPA: 8.75 / 10)</strong> specializing in{' '}
              <strong className="text-white font-medium">Data Science</strong>. Passionate about designing practical
              machine learning systems, clinical healthcare AI models, and scalable backend architectures. Actively seeking
              Software Engineering, AI/ML, and Data Science internship opportunities where I can apply rigorous analytical
              problem-solving and production software engineering.
            </motion.p>

            {/* Credential Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl font-mono text-xs"
            >
              <div className="rounded-xl border border-white/10 bg-[#0D0D0D] p-3 backdrop-blur-sm transition-all duration-300 hover:border-lime/40">
                <span className="text-gray-400 block text-[10px] uppercase">ACADEMIC RECORD</span>
                <span className="text-lime font-semibold text-sm">8.75 CGPA</span>
                <span className="text-gray-400 block text-[10px]">NIST University</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0D0D0D] p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
                <span className="text-gray-400 block text-[10px] uppercase">CORE FOCUS</span>
                <span className="text-cyan-400 font-semibold text-sm">AI/ML & Data</span>
                <span className="text-gray-400 block text-[10px]">PyTorch & Python</span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/10 bg-[#0D0D0D] p-3 backdrop-blur-sm transition-all duration-300 hover:border-white/30">
                <span className="text-gray-400 block text-[10px] uppercase">INTERNSHIP STATUS</span>
                <span className="text-white font-semibold text-sm">Available</span>
                <span className="text-gray-400 block text-[10px]">Summer & Fall</span>
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

          {/* Right Column: Profile Portrait (Reduced by ~12-15% in display width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Subtle Computational Graph Canvas in the background */}
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl overflow-hidden opacity-40">
              <NeuralFlowCanvas />
            </div>

            {/* Constrained card: max-w-[340px] sm:max-w-[360px] (down from ~420px, ~14% reduction) */}
            <div className="group relative w-full max-w-[330px] sm:max-w-[350px] rounded-2xl border border-white/15 bg-[#0D0D0D] p-3.5 sm:p-4 backdrop-blur-md shadow-[0_8px_36px_rgba(0,0,0,0.8)] hover:border-cyan-400/40 transition-all duration-300">
              {/* Technical Frame Header */}
              <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.08] pb-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                  <span className="text-gray-200 font-medium text-[11px]">ANKIT KUMAR SAHU</span>
                </div>
                <span className="text-cyan-400 text-[10px]">B-TECH CSE (DATA SCIENCE)</span>
              </div>

              {/* Exact Unaltered Portrait with reduced scale */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-[#000000]">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 640px) 310px, 350px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle Clean Bottom Gradient Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60" />

                {/* Overlay Card on Portrait */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg border border-white/10 bg-[#000000]/90 p-2.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading text-xs sm:text-sm font-medium text-white">NIST University</p>
                      <p className="font-mono text-[9px] text-gray-400">Computer Science & Engineering</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs font-semibold text-lime">8.75 CGPA</span>
                      <p className="font-mono text-[8px] text-gray-400">Class of 2028</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Spec Tags */}
              <div className="mt-3 flex flex-wrap gap-1 font-mono text-[9px]">
                <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-gray-300">
                  Data Science
                </span>
                <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-gray-300">
                  PyTorch & Python
                </span>
                <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-gray-300">
                  Full-Stack Systems
                </span>
                <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-gray-300">
                  Machine Learning
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
