'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  FileText,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function ResumeView() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Explicit zoom=100 parameter to prevent browser PDF engines from expanding beyond natural view
  const pdfUrl = `${SITE_CONFIG.resumePath}#zoom=100&navpanes=0&toolbar=1`;
  const rawPdfUrl = SITE_CONFIG.resumePath;

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-mc-canvas text-mc-text-primary min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mc-cyan/30 bg-mc-cyan/5 text-mc-cyan font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-mc-cyan animate-pulse" />
            <span>Official Curriculum Vitae</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-mc-text-primary">
            Curriculum <span className="font-serif italic font-normal text-mc-cyan">Vitae</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-mc-text-secondary max-w-2xl">
            A comprehensive record of academic credentials at NIST University (CGPA 8.75/10), data science engineering, machine learning pipelines, and verified honors.
          </p>
        </div>

        {/* Action & Metadata Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-2xl border border-mc-border/80 bg-mc-surface p-6 shadow-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Metadata Summary */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-mc-cyan/40 bg-mc-cyan/10 font-mono text-xs text-mc-cyan font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED DOCUMENT
                </span>
                <span className="font-mono text-xs text-mc-text-primary font-semibold">
                  Ankit_Kumar_Sahu_Resume.pdf
                </span>
                <span className="hidden sm:inline font-mono text-xs text-mc-text-muted">•</span>
                <span className="font-mono text-xs text-mc-text-muted">184 KB</span>
                <span className="hidden sm:inline font-mono text-xs text-mc-text-muted">•</span>
                <span className="font-mono text-xs text-mc-cyan font-medium">
                  VECTOR PDF (100% SCALE)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs text-mc-text-secondary">
                <span>
                  CANDIDATE: <strong className="text-mc-text-primary">{SITE_CONFIG.name}</strong>
                </span>
                <span>
                  DEGREE: <strong className="text-mc-text-primary">B-Tech CSE (Data Science)</strong>
                </span>
                <span>
                  INSTITUTION: <strong className="text-mc-text-primary">NIST University</strong>
                </span>
                <span>
                  CGPA: <strong className="text-mc-cyan font-bold">{SITE_CONFIG.cgpa}</strong>
                </span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={rawPdfUrl}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mc-cyan text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-mc-cyan/90 transition-all shadow-md shadow-mc-cyan/20 active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-black" />
                <span>Download Resume PDF</span>
              </a>

              <a
                href={rawPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mc-surface-raised border border-mc-border hover:border-mc-cyan/60 font-mono text-xs text-mc-text-primary hover:text-mc-cyan font-medium uppercase tracking-wider transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Fullscreen</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Embedded PDF Viewer with 100% scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-[900px] relative rounded-2xl border border-mc-border/90 bg-mc-surface shadow-2xl overflow-hidden"
        >
          {/* Frame Top Bar */}
          <div className="flex items-center justify-between border-b border-mc-border/80 bg-mc-surface-raised px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2.5">
              <FileText className="h-4 w-4 text-mc-cyan" />
              <span className="font-mono text-xs text-mc-text-primary font-semibold">
                DOCUMENT VIEWER // ANKIT KUMAR SAHU (100% SCALE)
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <a
                href={rawPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-mc-cyan hover:underline font-medium"
              >
                <span>OPEN FULLSCREEN</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Loader Fallback */}
          {!isIframeLoaded && (
            <div className="absolute inset-0 top-12 z-10 flex flex-col items-center justify-center bg-mc-surface/95 backdrop-blur-sm">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-mc-border border-t-mc-cyan" />
              <p className="mt-4 font-mono text-xs text-mc-text-secondary uppercase tracking-widest font-medium">
                RENDERING RESUME VECTOR CANVAS...
              </p>
            </div>
          )}

          {/* PDF Viewer Frame configured to exactly 100% scale */}
          <div className="relative w-full h-[650px] sm:h-[850px] md:h-[1050px] lg:h-[1150px] bg-mc-surface">
            <iframe
              src={pdfUrl}
              title="Ankit Kumar Sahu — Professional Resume PDF"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoaded(true)}
            />
          </div>

          {/* Frame Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-mc-border/80 bg-mc-surface-raised px-4 py-3 sm:px-6 font-mono text-xs text-mc-text-secondary">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-mc-cyan" />
              <span>ORIGINAL AUTHENTIC RESUME • VERIFIED NIST UNIVERSITY</span>
            </p>

            <a
              href={rawPdfUrl}
              download="Ankit_Kumar_Sahu_Resume.pdf"
              className="text-mc-cyan hover:underline flex items-center gap-1 font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              <span>SAVE A LOCAL COPY</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
