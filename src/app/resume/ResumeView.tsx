'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  FileText,
  ShieldCheck,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function ResumeView() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const pdfUrl = SITE_CONFIG.resumePath;

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container size="wide">
        {/* Top Section Header */}
        <SectionHeader
          index="02"
          tag="CURRICULUM VITAE"
          title="MY RESUME"
          subtitle="PROFESSIONAL PROFILE"
          description="A snapshot of my professional journey, academic record, technical competencies, and applied software engineering research."
        />

        {/* Document Metadata & Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 rounded-2xl border border-white/10 bg-surface-50/70 p-6 backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Metadata Pills */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge variant="lime" dot pulse className="text-[10px]">
                  VERIFIED ORIGINAL
                </Badge>
                <span className="font-mono text-xs text-white font-medium">
                  Ankit_Kumar_Sahu_Resume.pdf
                </span>
                <span className="hidden sm:inline font-mono text-xs text-gray-500">•</span>
                <span className="font-mono text-xs text-gray-400">184 KB</span>
                <span className="hidden sm:inline font-mono text-xs text-gray-500">•</span>
                <span className="font-mono text-xs text-gray-400">VECTOR PDF</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs text-gray-400">
                <span>CANDIDATE: <strong className="text-gray-200">{SITE_CONFIG.curator}</strong></span>
                <span>DEGREE: <strong className="text-gray-200">B-Tech CSE (Data Science)</strong></span>
                <span>CGPA: <strong className="text-lime">8.75 / 10</strong></span>
              </div>
            </div>

            {/* Action Buttons: Download & Open */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={pdfUrl}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                variant="primary"
                size="md"
              >
                <Download className="mr-2 h-4 w-4" />
                <span>DOWNLOAD RESUME</span>
              </Button>

              <Button
                href={pdfUrl}
                external
                variant="secondary"
                size="md"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                <span>OPEN FULL RESUME</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Section: Embedded PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-white/15 bg-[#0A0C0F] shadow-[0_8px_36px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Viewer Frame Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0E1117] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-lime" />
              <span className="font-mono text-xs text-white">
                DOCUMENT PREVIEW // {SITE_CONFIG.curator.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px] text-gray-400">
              <span className="hidden sm:inline">PAGES: 1 OF 1</span>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-lime hover:underline"
              >
                <span>EXPAND</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Fallback Loader while iframe mounts */}
          {!isIframeLoaded && (
            <div className="absolute inset-0 top-12 z-10 flex flex-col items-center justify-center bg-[#0A0C0F]/90 backdrop-blur-sm">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-lime/20 border-t-lime" />
              <p className="mt-4 font-mono text-xs text-gray-400 uppercase tracking-widest">
                INITIALIZING DOCUMENT STREAM...
              </p>
            </div>
          )}

          {/* Embedded PDF Frame */}
          <div className="relative w-full h-[650px] sm:h-[850px] md:h-[1000px] lg:h-[1150px] bg-[#12151B]">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
              title="Ankit Kumar Sahu - Professional Resume PDF"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoaded(true)}
            />
          </div>

          {/* Viewer Footer Bar with Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.08] bg-[#0E1117] px-4 py-3 sm:px-6 font-mono text-xs text-gray-400">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-lime" />
              <span>ORIGINAL AUTHOR SIGNED • ZERO TAMPERING OR MODIFICATIONS</span>
            </p>

            <div className="flex items-center gap-4">
              <a
                href={pdfUrl}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                className="text-lime hover:underline flex items-center gap-1"
              >
                <Download className="h-3.5 w-3.5" />
                <span>SAVE AS PDF</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Snapshot Summary Section: Academic & Technical Blueprint */}
        <div className="mt-16 pt-12 border-t border-white/[0.08]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-lime tracking-widest uppercase">
                /EXECUTIVE SUMMARY
              </span>
              <h3 className="mt-1 font-heading text-2xl font-light text-white">
                CURRICULUM HIGHLIGHTS AT A GLANCE
              </h3>
            </div>
            <Badge variant="outline" className="hidden sm:inline font-mono text-xs">
              DOCUMENT MIRROR
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* Education Summary */}
            <div className="rounded-xl border border-white/[0.08] bg-surface-50/50 p-6 space-y-3">
              <div className="flex items-center gap-2 text-lime">
                <GraduationCap className="h-4 w-4" />
                <span className="font-semibold uppercase">EDUCATION</span>
              </div>
              <h4 className="font-heading text-base font-light text-white">
                NIST UNIVERSITY
              </h4>
              <p className="text-gray-300">
                B-Tech in Computer Science Engineering (Data Science)
              </p>
              <div className="pt-2 text-gray-400 border-t border-white/[0.06] space-y-1">
                <p>DURATION: 2024 — 2028</p>
                <p className="text-lime">CUMULATIVE CGPA: 8.75 / 10</p>
              </div>
            </div>

            {/* Core Internships */}
            <div className="rounded-xl border border-white/[0.08] bg-surface-50/50 p-6 space-y-3">
              <div className="flex items-center gap-2 text-electric">
                <BriefcaseBusiness className="h-4 w-4" />
                <span className="font-semibold uppercase">INTERNSHIPS</span>
              </div>
              <h4 className="font-heading text-base font-light text-white">
                DATA SCIENCE & SPACE LAB
              </h4>
              <p className="text-gray-300">
                Unified Mentor Pvt. Ltd (Data Science Intern)
              </p>
              <p className="text-gray-400">
                India Space Lab (Space Tech & Satellite Systems)
              </p>
              <div className="pt-2 text-gray-400 border-t border-white/[0.06]">
                <span>FOCUS: Machine Learning, Remote Sensing & CanSat</span>
              </div>
            </div>

            {/* Key Software Innovations */}
            <div className="rounded-xl border border-white/[0.08] bg-surface-50/50 p-6 space-y-3">
              <div className="flex items-center gap-2 text-lime">
                <Code2 className="h-4 w-4" />
                <span className="font-semibold uppercase">FEATURED PROJECTS</span>
              </div>
              <h4 className="font-heading text-base font-light text-white">
                HEALTHCARE & SYSTEMS
              </h4>
              <p className="text-gray-300">
                1. Rare Disease Prediction AI (PyTorch, HPO)
              </p>
              <p className="text-gray-300">
                2. MediKiosk Patient Case Taking (FastAPI, React)
              </p>
              <p className="text-gray-300">
                3. SecureWipe Enterprise v2.0 (Electron, Go, Rust)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

