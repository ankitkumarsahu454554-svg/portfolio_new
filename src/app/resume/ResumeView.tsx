'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  FileText,
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

  // Explicit zoom=100 parameter to prevent browser PDF engines from expanding beyond natural view
  const pdfUrl = `${SITE_CONFIG.resumePath}#zoom=100&navpanes=0&toolbar=1`;
  const rawPdfUrl = SITE_CONFIG.resumePath;

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#090A0F] bg-subtle-mesh">
      <Container size="wide">
        <SectionHeader
          index="04"
          tag="OFFICIAL CURRICULUM VITAE"
          title="Curriculum Vitae"
          subtitle="Academic Credentials & Technical Record"
          description="A complete record of academic coursework at NIST University, data science projects, machine learning models, and engineering proficiencies."
        />

        {/* Document Action & Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 rounded-2xl border border-white/[0.08] bg-[#111319] p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Metadata Summary */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge variant="electric" dot pulse className="text-[10px]">
                  VERIFIED DOCUMENT
                </Badge>
                <span className="font-mono text-xs text-white font-medium">
                  Ankit_Kumar_Sahu_Resume.pdf
                </span>
                <span className="hidden sm:inline font-mono text-xs text-slate-500">•</span>
                <span className="font-mono text-xs text-slate-400">184 KB</span>
                <span className="hidden sm:inline font-mono text-xs text-slate-500">•</span>
                <span className="font-mono text-xs text-sky-400">VECTOR PDF (100% SCALE)</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs text-slate-300">
                <span>CANDIDATE: <strong className="text-white">{SITE_CONFIG.name}</strong></span>
                <span>DEGREE: <strong className="text-white">B-Tech CSE (Data Science)</strong></span>
                <span>INSTITUTION: <strong className="text-white">NIST University</strong></span>
                <span>CGPA: <strong className="text-sky-300">{SITE_CONFIG.cgpa}</strong></span>
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
          className="mx-auto max-w-[880px] relative rounded-2xl border border-white/[0.12] bg-[#111319] shadow-[0_12px_40px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Frame Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0E1017] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2.5">
              <FileText className="h-4 w-4 text-sky-400" />
              <span className="font-mono text-xs text-white">
                DOCUMENT VIEWER // ANKIT KUMAR SAHU (100% SCALE)
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
              <a
                href={rawPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sky-400 hover:underline"
              >
                <span>OPEN FULLSCREEN</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Loader Fallback */}
          {!isIframeLoaded && (
            <div className="absolute inset-0 top-12 z-10 flex flex-col items-center justify-center bg-[#111319]/95 backdrop-blur-sm">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-sky-400/20 border-t-sky-400" />
              <p className="mt-4 font-mono text-xs text-slate-400 uppercase tracking-widest">
                LOADING RESUME AT 100% SCALE...
              </p>
            </div>
          )}

          {/* PDF Viewer Frame configured to exactly 100% scale */}
          <div className="relative w-full h-[650px] sm:h-[850px] md:h-[1050px] lg:h-[1150px] bg-[#090A0F]">
            <iframe
              src={pdfUrl}
              title="Ankit Kumar Sahu — Professional Resume PDF"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoaded(true)}
            />
          </div>

          {/* Frame Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.08] bg-[#0E1017] px-4 py-3 sm:px-6 font-mono text-xs text-slate-400">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-400" />
              <span>ORIGINAL AUTHENTIC RESUME • VERIFIED NIST UNIVERSITY</span>
            </p>

            <a
              href={rawPdfUrl}
              download="Ankit_Kumar_Sahu_Resume.pdf"
              className="text-sky-400 hover:underline flex items-center gap-1"
            >
              <Download className="h-3.5 w-3.5" />
              <span>SAVE A LOCAL COPY</span>
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
