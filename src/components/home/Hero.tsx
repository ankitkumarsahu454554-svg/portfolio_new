'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Download, Mail, ArrowUpRight, Activity, Terminal, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Counter } from '@/components/ui/Counter';
import { Magnetic } from '@/components/ui/Magnetic';
import { SITE_CONFIG } from '@/lib/constants';
import { NeuralFlowCanvas } from './NeuralFlowCanvas';
import { useIsTouchDevice } from '@/hooks/useMediaQuery';
import confetti from 'canvas-confetti';

const ROLES = [
  'Data Scientist',
  'Machine Learning Engineer',
  'Software Systems Engineer',
  'Deep Learning Researcher',
];

export function Hero() {
  const isTouch = useIsTouchDevice();
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotating roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Cursor-reactive parallax for portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Subtle confetti burst on Contact click
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF3D81', '#FF8A00', '#FFC700', '#00C48C', '#00B8D9', '#3D5AFE', '#8B5CF6'],
        disableForReducedMotion: true,
      });
    } catch {
      // Graceful fallback
    }
  };

  return (
    <section id="hero" className="relative min-h-[96vh] w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center">
      {/* Background Neural Constellation Canvas */}
      <div className="absolute inset-0 z-0">
        <NeuralFlowCanvas />
      </div>

      {/* Floating Blurred Colour Blobs (Hero: Pink, Orange, Yellow) */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[440px] w-[440px] rounded-full bg-[#FF3D81]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-12 right-1/4 h-[420px] w-[420px] rounded-full bg-[#FF8A00]/12 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/3 h-[320px] w-[320px] rounded-full bg-[#00B8D9]/12 blur-[100px]" />

      <Container size="wide" className="relative z-10">
        {/* Top Telemetry Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-mc-border/60 pb-3 font-mono text-[11px] text-mc-text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF3D81] animate-ping" />
            <span className="text-pink-800 dark:text-pink-400 font-bold tracking-wider uppercase">PORTFOLIO // LIVE DISPATCH</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-wider uppercase">
            <span className="hidden sm:inline font-medium">NIST UNIVERSITY • B-TECH CSE (DATA SCIENCE)</span>
            <span className="text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
              AVAILABLE FOR COLLABORATION
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Masked Portrait with Animated Conic-Gradient Rainbow Border (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{
                rotateX: isTouch ? 0 : rotateX,
                rotateY: isTouch ? 0 : rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[330px] sm:max-w-[360px] conic-rainbow-border shadow-2xl group"
              data-cursor="view"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] bg-white dark:bg-[#1E1B4B]">
                {/* Unaltered Authentic Portrait */}
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 640px) 310px, 360px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle soft gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />

                {/* Bottom ID Badge inside portrait frame */}
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-white/90 dark:bg-[#14102E]/90 p-3 backdrop-blur-md font-mono text-xs flex items-center justify-between shadow-lg">
                  <div>
                    <p className="font-heading text-xs font-bold text-gray-900 dark:text-white leading-tight">
                      {SITE_CONFIG.name}
                    </p>
                    <p className="text-[10px] text-pink-800 dark:text-pink-300 font-bold tracking-wider">
                      B-Tech CSE (Data Science)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-bold block">8.75 CGPA</span>
                    <span className="text-[8px] text-gray-700 dark:text-gray-400 font-semibold">NIST UNIVERSITY</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Masked Name Reveal, Rotating Roles & Callouts (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Mission Protocol Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-pink-200 dark:border-pink-900/50 bg-pink-50/80 dark:bg-pink-950/30 px-3.5 py-1.5 font-mono text-xs text-mc-text shadow-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#FF3D81] animate-spin-slow" />
              <span className="text-pink-800 dark:text-pink-400 font-bold uppercase tracking-wide">AI & SYSTEMS ENGINEER:</span>
              <span className="text-mc-text-secondary font-medium">Empirical Machine Learning</span>
            </motion.div>

            {/* Giant Masked Name Reveal with Signature Rainbow Gradient */}
            <div className="space-y-3 overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-mc-text leading-[1.05]"
              >
                Ankit Kumar <span className="font-serif font-normal italic text-gradient-rainbow">Sahu</span>
              </motion.h1>

              {/* Dynamic Rotating Role */}
              <div className="h-9 sm:h-11 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5 font-mono text-lg sm:text-2xl md:text-3xl text-[#FF8A00] font-semibold"
                  >
                    <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF3D81]" />
                    <span>{ROLES[roleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Editorial Bio with Serif Italic Emphasis */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-mc-text-secondary"
            >
              Undergraduate engineer at <strong className="text-mc-text font-bold">NIST University</strong> focusing on{' '}
              <span className="font-serif font-normal italic text-[#FF3D81] text-xl">empirical rigor</span> in machine learning,
              predictive healthcare AI pipelines, and high-performance software systems.
            </motion.p>

            {/* Counting-Up Live Telemetry Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 max-w-xl font-mono text-xs"
            >
              <div className="vibrant-card p-4 border-l-4 border-l-[#FF3D81]">
                <span className="text-mc-text-muted block text-[10px] tracking-wider uppercase font-semibold">ACADEMIC CGPA</span>
                <div className="text-pink-800 dark:text-pink-400 font-heading text-2xl font-bold mt-0.5">
                  <Counter value={8.75} decimals={2} duration={1.8} />
                  <span className="text-xs text-mc-text-muted font-normal ml-1">/ 10</span>
                </div>
                <span className="text-mc-text-muted block text-[10px] mt-0.5">NIST University</span>
              </div>

              <div className="vibrant-card p-4 border-l-4 border-l-[#FF8A00]">
                <span className="text-mc-text-muted block text-[10px] tracking-wider uppercase font-semibold">CURRICULUM</span>
                <div className="text-amber-800 dark:text-amber-400 font-heading text-2xl font-bold mt-0.5">
                  <Counter value={2028} duration={1.6} />
                </div>
                <span className="text-mc-text-muted block text-[10px] mt-0.5">CSE (Data Science)</span>
              </div>

              <div className="col-span-2 sm:col-span-1 vibrant-card p-4 border-l-4 border-l-[#00C48C]">
                <span className="text-mc-text-muted block text-[10px] tracking-wider uppercase font-semibold">CREDENTIALS</span>
                <div className="text-emerald-800 dark:text-emerald-400 font-heading text-2xl font-bold mt-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
                  <span>6+</span>
                </div>
                <span className="text-mc-text-muted block text-[10px] mt-0.5">Verified Honors</span>
              </div>
            </motion.div>

            {/* Action Buttons with Signature Rainbow Primary Button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <Magnetic strength={0.3}>
                <Link
                  href="/#projects"
                  className="group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(90deg, #FF3D81, #FF8A00, #00C48C, #00B8D9, #3D5AFE)',
                  }}
                  data-cursor="pointer"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.3}>
                <Link
                  href={SITE_CONFIG.resumePath}
                  download="Ankit_Kumar_Sahu_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-mc-border bg-mc-surface px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-mc-text hover:border-[#FF3D81] hover:text-[#FF3D81] transition-all shadow-sm"
                  data-cursor="open"
                >
                  <Download className="h-4 w-4" />
                  <span>DOWNLOAD CV</span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.3}>
                <Link
                  href="/#contact"
                  onClick={triggerConfetti}
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-mc-text-secondary hover:text-[#FF3D81] transition-colors"
                  data-cursor="pointer"
                >
                  <Mail className="h-4 w-4" />
                  <span>CONTACT</span>
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
