'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function ResumeView() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Use explicit zoom=100 parameter to prevent browser PDF engines from expanding to 176% via FitH
  const pdfUrl = `${SITE_CONFIG.resumePath}#zoom=100&navpanes=0&toolbar=1`;
  const rawPdfUrl = SITE_CONFIG.resumePath;

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#000000]">
      <Container size="wide">
        <SectionHeader
          index="04"
          tag="OFFICIAL CURRICULUM VITAE"
          title="Curriculum Vitae"
          subtitle="Academic Credentials & Technical Record"
          description="A complete record of academic coursework at NIST University, data science internships, machine learning projects, and technical proficiencies."
        />

        {/* Document Action & Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 rounded-2xl border border-white/10 bg-[#0D0D0D] p-6 backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Metadata Summary */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge variant="lime" dot pulse className="text-[10px]">
                  VERIFIED DOCUMENT
                </Badge>
                <span className="font-mono text-xs text-white font-medium">
                  Ankit_Kumar_Sahu_Resume.pdf
                </span>
                <span className="hidden sm:inline font-mono text-xs text-gray-500">•</span>
                <span className="font-mono text-xs text-gray-400">184 KB</span>
                <span className="hidden sm:inline font-mono text-xs text-gray-500">•</span>
                <span className="font-mono text-xs text-cyan-400">VECTOR PDF (100% SCALE)</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs text-gray-300">
                <span>CANDIDATE: <strong className="text-white">{SITE_CONFIG.name}</strong></span>
                <span>DEGREE: <strong className="text-white">B-Tech CSE (Data Science)</strong></span>
                <span>INSTITUTION: <strong className="text-white">NIST University</strong></span>
                <span>CGPA: <strong className="text-lime">{SITE_CONFIG.cgpa}</strong></span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={rawPdfUrl}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                variant="primary"
                size="md"
              >
                <Download className="mr-2 h-4 w-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </Button>

              <Button
                href={rawPdfUrl}
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

        {/* Embedded PDF Viewer with 100% initial zoom & centered natural A4 proportions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[880px] relative rounded-2xl border border-white/15 bg-[#0D0D0D] shadow-[0_8px_36px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Frame Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#080808] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2.5">
              <FileText className="h-4 w-4 text-lime" />
              <span className="font-mono text-xs text-white">
                DOCUMENT VIEWER // ANKIT KUMAR SAHU (100% SCALE)
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
              <a
                href={rawPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <span>OPEN FULLSCREEN</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Loader Fallback */}
          {!isIframeLoaded && (
            <div className="absolute inset-0 top-12 z-10 flex flex-col items-center justify-center bg-[#0D0D0D]/95 backdrop-blur-sm">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-lime/20 border-t-lime" />
              <p className="mt-4 font-mono text-xs text-gray-400 uppercase tracking-widest">
                LOADING RESUME AT 100% SCALE...
              </p>
            </div>
          )}

          {/* PDF Viewer Frame configured to exactly 100% scale */}
          <div className="relative w-full h-[650px] sm:h-[850px] md:h-[1050px] lg:h-[1150px] bg-[#000000]">
            <iframe
              src={pdfUrl}
              title="Ankit Kumar Sahu — Professional Resume PDF"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoaded(true)}
            />
          </div>

          {/* Frame Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.08] bg-[#080808] px-4 py-3 sm:px-6 font-mono text-xs text-gray-400">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-lime" />
              <span>ORIGINAL AUTHENTIC RESUME • ZERO ALTERATIONS</span>
            </p>

            <a
              href={rawPdfUrl}
              download="Ankit_Kumar_Sahu_Resume.pdf"
              className="text-lime hover:underline flex items-center gap-1"
            >
              <Download className="h-3.5 w-3.5" />
              <span>SAVE A LOCAL COPY</span>
            </a>
          </div>
        </motion.div>

        {/* Quick Academic & Technical Snapshot */}
        <div className="mt-16 pt-12 border-t border-white/[0.08]">
          <h3 className="font-heading text-2xl font-normal text-white mb-6">
            Key Academic & Technical Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* Education Summary */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-6 space-y-3">
              <div className="flex items-center gap-2 text-lime font-semibold">
                <GraduationCap className="h-4 w-4" />
                <span>EDUCATION</span>
              </div>
              <h4 className="font-heading text-base font-normal text-white">NIST University</h4>
              <p className="text-gray-300 font-sans">B-Tech in Computer Science and Engineering (Data Science)</p>
              <div className="pt-2 text-gray-400 border-t border-white/[0.06] space-y-1">
                <p>DURATION: 2024 — 2028</p>
                <p className="text-lime font-semibold">CGPA: 8.75 / 10</p>
              </div>
            </div>

            {/* Experience Summary */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Briefcase className="h-4 w-4" />
                <span>INTERNSHIPS</span>
              </div>
              <h4 className="font-heading text-base font-normal text-white">Data Science & Space Lab</h4>
              <p className="text-gray-300 font-sans">Unified Mentor (Data Science Intern)</p>
              <p className="text-gray-400 font-sans">India Space Lab (Space Tech & Satellite Systems)</p>
              <div className="pt-2 text-gray-400 border-t border-white/[0.06]">
                <span>FOCUS: Machine Learning & Telemetry</span>
              </div>
            </div>

            {/* Projects Summary (3 Genuine Projects) */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-6 space-y-3">
              <div className="flex items-center gap-2 text-lime font-semibold">
                <Code2 className="h-4 w-4" />
                <span>CORE PROJECTS</span>
              </div>
              <h4 className="font-heading text-base font-normal text-white">Healthcare & Systems</h4>
              <p className="text-gray-300 font-sans">1. Rare Disease Prediction AI (PyTorch)</p>
              <p className="text-gray-300 font-sans">2. MediKiosk Clinical Intake (FastAPI/React)</p>
              <p className="text-gray-300 font-sans">3. SecureWipe Enterprise (Go/Rust)</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
