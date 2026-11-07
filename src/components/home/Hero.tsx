'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail, GraduationCap, Sparkles, Code2, Database } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';
import { NeuralFlowCanvas } from './NeuralFlowCanvas';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center">
      {/* Subtle Atmospheric Grid & Ambient Glows */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[380px] w-[380px] rounded-full bg-lime/10 blur-[130px]" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Professional Identity & Objectives */}
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
              <div className="rounded-xl border border-white/10 bg-surface-50/70 p-3 backdrop-blur-sm">
                <span className="text-gray-400 block text-[10px] uppercase">ACADEMIC RECORD</span>
                <span className="text-lime font-semibold text-sm">8.75 CGPA</span>
                <span className="text-gray-400 block text-[10px]">NIST University</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-surface-50/70 p-3 backdrop-blur-sm">
                <span className="text-gray-400 block text-[10px] uppercase">CORE FOCUS</span>
                <span className="text-cyan-400 font-semibold text-sm">AI/ML & Data</span>
                <span className="text-gray-400 block text-[10px]">PyTorch & Python</span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/10 bg-surface-50/70 p-3 backdrop-blur-sm">
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

          {/* Right Column: Authentic Profile Portrait in Futuristic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Subtle Computational Graph Canvas in the background */}
            <div className="absolute -inset-4 sm:-inset-8 -z-10 rounded-3xl overflow-hidden opacity-50">
              <NeuralFlowCanvas />
            </div>

            <div className="group relative rounded-2xl border border-white/15 bg-surface-50/80 p-4 sm:p-5 backdrop-blur-md shadow-[0_8px_36px_rgba(0,0,0,0.6)] hover:border-cyan-500/40 transition-all duration-300">
              {/* Technical Frame Header */}
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                  <span className="text-gray-300 font-medium">ANKIT KUMAR SAHU</span>
                </div>
                <span className="text-cyan-400 text-[11px]">B-TECH CSE (DATA SCIENCE)</span>
              </div>

              {/* Exact Unaltered Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-[#060708] shadow-inner">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle Clean Bottom Gradient Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-50" />

                {/* Overlay Card on Portrait */}
                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-[#08090B]/90 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading text-sm font-medium text-white">NIST University</p>
                      <p className="font-mono text-[10px] text-gray-400">Computer Science & Engineering</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs font-semibold text-lime">8.75 CGPA</span>
                      <p className="font-mono text-[9px] text-gray-400">Class of 2028</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Spec Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-gray-300">
                  Data Science
                </span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-gray-300">
                  PyTorch & Python
                </span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-gray-300">
                  Full-Stack Systems
                </span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-gray-300">
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
