'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Download, Mail, ArrowUpRight, Activity, Terminal, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Counter } from '@/components/ui/Counter';
import { Magnetic } from '@/components/ui/Magnetic';
import { SITE_CONFIG } from '@/lib/constants';
import { NeuralFlowCanvas } from './NeuralFlowCanvas';
import { useIsTouchDevice } from '@/hooks/useMediaQuery';

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

  return (
    <section id="hero" className="relative min-h-[96vh] w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center">
      {/* Background Neural Constellation Canvas */}
      <div className="absolute inset-0 z-0">
        <NeuralFlowCanvas />
      </div>

      {/* Atmospheric Radial Lights */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[520px] w-[520px] rounded-full bg-mc-cyan/8 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-12 right-1/4 h-[440px] w-[440px] rounded-full bg-mc-amber/6 blur-[150px]" />

      <Container size="wide" className="relative z-10">
        {/* Top Telemetry Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-mc-border/60 pb-3 font-mono text-[11px] text-mc-text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-mc-cyan animate-pulse" />
            <span className="text-mc-cyan tracking-telemetry font-semibold">SECTOR 01 // TELEMETRY LINK ACTIVE</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-wider uppercase">
            <span className="hidden sm:inline">NIST UNIVERSITY • CSE (DATA SCIENCE)</span>
            <span className="text-mc-cyan font-semibold">STATUS: NOMINAL</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Masked Portrait with Subtle Cursor-Reactive Parallax (5 cols) */}
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
              className="relative w-full max-w-[330px] sm:max-w-[360px] rounded-3xl border border-mc-border p-3.5 mc-panel shadow-2xl group transition-colors duration-500 hover:border-mc-cyan/60"
              data-cursor="view"
            >
              {/* Corner Telemetry Marks */}
              <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-mc-cyan/60 pointer-events-none" />
              <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-mc-cyan/60 pointer-events-none" />
              <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-mc-cyan/60 pointer-events-none" />
              <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-mc-cyan/60 pointer-events-none" />

              {/* Exact Unaltered Portrait in Masked Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-mc-secondary">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt="Ankit Kumar Sahu - Portrait"
                  fill
                  sizes="(max-width: 640px) 310px, 360px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle Vignette Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mc-bg/70 via-transparent to-transparent opacity-80" />

                {/* Bottom ID Badge inside the portrait frame */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-mc-border bg-mc-glass/90 p-2.5 backdrop-blur-md font-mono text-xs flex items-center justify-between">
                  <div>
                    <p className="font-heading text-xs font-semibold text-mc-text leading-tight">{SITE_CONFIG.name}</p>
                    <p className="text-[10px] text-mc-cyan tracking-wider font-medium">B-Tech CSE (Data Science)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-mc-amber font-semibold block">8.75 CGPA</span>
                    <span className="text-[8px] text-mc-text-muted">NIST UNIVERSITY</span>
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
              className="inline-flex items-center gap-2 rounded-full border border-mc-border bg-mc-surface/80 px-3.5 py-1.5 font-mono text-xs text-mc-text shadow-sm backdrop-blur-md"
            >
              <Activity className="h-3.5 w-3.5 text-mc-cyan animate-pulse" />
              <span className="text-mc-cyan font-bold">MISSION OBJECTIVE:</span>
              <span className="text-mc-text-secondary">Engineering Next-Gen AI & Systems</span>
            </motion.div>

            {/* Giant Masked Name Reveal */}
            <div className="space-y-3 overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-mc-text leading-[1.05]"
              >
                Ankit Kumar <span className="font-serif font-normal italic text-mc-cyan">Sahu</span>
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
                    className="flex items-center gap-2.5 font-mono text-lg sm:text-2xl md:text-3xl text-mc-amber font-medium"
                  >
                    <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-mc-cyan" />
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
              Undergraduate engineer at <strong className="text-mc-text font-semibold">NIST University</strong> focusing on{' '}
              <span className="font-serif font-normal italic text-mc-text text-xl">empirical rigor</span> in machine learning,
              clinical healthcare AI pipelines, and high-performance software systems.
            </motion.p>

            {/* Counting-Up Live Telemetry Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 max-w-xl font-mono text-xs"
            >
              <div className="rounded-2xl border border-mc-border bg-mc-surface/70 p-4 mc-panel backdrop-blur-md">
                <span className="text-mc-text-muted block text-[10px] tracking-wider uppercase font-semibold">ACADEMIC CGPA</span>
                <div className="text-mc-cyan font-heading text-2xl font-bold mt-0.5">
                  <Counter value={8.75} decimals={2} duration={1.8} />
                  <span className="text-xs text-mc-text-muted font-normal ml-1">/ 10</span>
                </div>
                <span className="text-mc-text-muted block text-[10px] mt-0.5">NIST University</span>
              </div>

              <div className="rounded-2xl border border-mc-border bg-mc-surface/70 p-4 mc-panel backdrop-blur-md">
                <span className="text-mc-text-muted block text-[10px] tracking-wider uppercase font-semibold">CURRICULUM</span>
                <div className="text-mc-amber font-heading text-2xl font-bold mt-0.5">
                  <Counter value={2028} duration={1.6} />
                </div>
                <span className="text-mc-text-muted block text-[10px] mt-0.5">CSE (Data Science)</span>
              </div>

              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-mc-border bg-mc-surface/70 p-4 mc-panel backdrop-blur-md">
                <span className="text-mc-text-muted block text-[10px] tracking-wider uppercase font-semibold">CREDENTIALS</span>
                <div className="text-mc-cyan font-heading text-2xl font-bold mt-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="h-5 w-5 text-mc-cyan" />
                  <span>6+</span>
                </div>
                <span className="text-mc-text-muted block text-[10px] mt-0.5">Verified Certifications</span>
              </div>
            </motion.div>

            {/* Action Buttons with Magnetic Pull */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <Magnetic strength={0.3}>
                <Link
                  href="/#projects"
                  className="group relative inline-flex items-center gap-2.5 rounded-full bg-mc-cyan px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#040711] shadow-lg transition-transform hover:shadow-cyan-glow hover:-translate-y-0.5 active:translate-y-0"
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
                  className="inline-flex items-center gap-2 rounded-full border border-mc-border bg-mc-surface px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-all"
                  data-cursor="open"
                >
                  <Download className="h-4 w-4" />
                  <span>DOWNLOAD CV</span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.3}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-mc-text-secondary hover:text-mc-cyan transition-colors"
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
