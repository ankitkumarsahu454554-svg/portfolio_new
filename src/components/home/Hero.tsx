'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Magnetic } from '@/components/ui/Magnetic';
import { SceneContainer } from '@/components/canvas/SceneContainer';
import { SITE_CONFIG } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between">
      {/* Background Subtle Grid & Atmospheric Glows */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-lime/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-electric/10 blur-[160px]" />

      <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Telemetry Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-lime">REF: LF-2026</span>
            <span className="h-3 w-[1px] bg-white/20" aria-hidden="true" />
            <span className="font-mono text-xs tracking-wider text-gray-400">
              CREATIVE TECHNOLOGY // INTERACTIVE ARCHITECTURE
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span className="hidden sm:inline">COORDS: {SITE_CONFIG.coordinates}</span>
            <Badge variant="outline" className="text-[10px]">
              WebGL 2.0 / SHADER PIPELINE
            </Badge>
          </div>
        </motion.div>

        {/* Main Hero Grid: Typography + Real-time 3D Canvas */}
        <div className="grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-12 lg:gap-12 flex-1">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.04] px-3 py-1 font-mono text-xs text-lime">
                <Sparkles className="h-3.5 w-3.5 text-lime" />
                <span>LIQUID METALLIC ARCHITECTURE</span>
              </div>

              <h1 className="font-heading text-5xl font-light tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
                DIGITAL <br />
                <span className="font-normal italic metallic-text">SCULPTURE</span> <br />
                <span className="text-white">& REAL-TIME</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl font-sans text-base leading-relaxed text-gray-400 md:text-lg"
            >
              Crafting tactile digital instruments, immersive WebGL environments, and high-performance
              editorial interfaces for visionary brands and institutions worldwide.
            </motion.p>

            {/* Profile Identity Intro Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-surface-100/80 p-3 sm:p-3.5 backdrop-blur-md max-w-md group hover:border-lime/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 overflow-hidden rounded-lg border border-lime/30 bg-[#0C0E12] shadow-[0_0_15px_rgba(199,255,85,0.12)]">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt={`${SITE_CONFIG.curator} portrait`}
                  fill
                  sizes="(max-width: 640px) 56px, 64px"
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wider text-lime font-semibold uppercase">
                    {SITE_CONFIG.curator}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-light text-white truncate">
                  AI/ML & Creative Developer
                </h3>
                <p className="font-mono text-[11px] text-gray-400 truncate">
                  NIST University • Data Science Specialization
                </p>
              </div>
            </motion.div>

            {/* Interactive Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Magnetic strength={0.25}>
                <Button href="/work" variant="primary" size="lg" withArrow>
                  EXPLORE ARCHIVE
                </Button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Button href="/resume" variant="secondary" size="lg">
                  VIEW RESUME
                </Button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Button href="/contact" variant="ghost" size="lg">
                  INQUIRE
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: 3D Scene Viewport */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[620px] lg:col-span-5 flex items-center justify-center"
          >
            {/* Viewport Frame with Technical Crosshairs */}
            <div className="absolute inset-0 rounded-2xl border border-white/[0.08] bg-surface-50/40 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Corner crosshairs */}
              <span className="absolute top-3 left-3 font-mono text-[9px] text-gray-500">
                + [VIEWPORT_01]
              </span>
              <span className="absolute top-3 right-3 font-mono text-[9px] text-lime">
                LIVE 60FPS
              </span>
              <span className="absolute bottom-3 left-3 font-mono text-[9px] text-gray-500">
                DISTORT: 0.45 // GLSL
              </span>
              <span className="absolute bottom-3 right-3 font-mono text-[9px] text-electric">
                THREE_R160
              </span>

              {/* Real-time 3D Scene */}
              <SceneContainer className="h-full w-full" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Technical Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6 font-mono text-xs text-gray-500"
        >
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              <span className="text-gray-300">CORE STATUS: STABLE</span>
            </span>
            <span className="hidden md:inline">SYSTEM: {SITE_CONFIG.version}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">TIMEZONE: {SITE_CONFIG.location}</span>
            <Link
              href="#featured"
              className="group flex items-center gap-2 text-gray-400 hover:text-lime transition-colors"
              data-cursor="pointer"
            >
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

