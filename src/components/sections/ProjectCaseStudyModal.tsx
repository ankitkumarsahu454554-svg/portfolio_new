'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { EngineeringProject } from '@/lib/constants';

interface CaseStudyModalProps {
  project: EngineeringProject | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#040711]/85 backdrop-blur-xl"
          />

          {/* Modal Container with Shared Layout ID */}
          <motion.div
            layoutId={`project-card-${project.id}`}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-mc-border bg-mc-surface p-6 sm:p-10 mc-panel shadow-2xl z-10 space-y-7"
          >
            {/* Header with Close */}
            <div className="flex items-start justify-between border-b border-mc-border pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <span className="text-mc-cyan font-bold">PROJECT #{project.id}</span>
                  <span className="text-mc-border">•</span>
                  <span className="text-mc-amber font-semibold uppercase">{project.category}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-4xl font-bold text-mc-text">
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mc-border bg-mc-bg text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                aria-label="Close modal"
                data-cursor="pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Architectural Visual Slot / Schematic Placeholder */}
            <div className="relative aspect-[16/8] w-full rounded-2xl border border-mc-border bg-mc-bg/70 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <div className="absolute inset-0 bg-mission-grid opacity-30 pointer-events-none" />
              <Cpu className="h-10 w-10 text-mc-cyan mb-3 animate-pulse" />
              <span className="font-mono text-xs text-mc-cyan tracking-telemetry font-bold">
                SYSTEM SCHEMATIC // {project.title.toUpperCase()}
              </span>
              <p className="font-sans text-xs text-mc-text-muted max-w-md mt-1">
                Interactive architecture blueprint & neural pipeline telemetry visualization slot.
              </p>
            </div>

            {/* Case Study Details: Problem, Solution, Contribution */}
            <div className="space-y-6">
              {/* Problem */}
              <div className="rounded-2xl border border-mc-border/80 bg-mc-surface-elevated/60 p-5 space-y-2">
                <span className="font-mono text-[11px] font-bold text-mc-amber tracking-wider uppercase block">
                  1. THE REAL-WORLD PROBLEM STATEMENT
                </span>
                <p className="font-sans text-sm sm:text-base text-mc-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="rounded-2xl border border-mc-border/80 bg-mc-surface-elevated/60 p-5 space-y-2">
                <span className="font-mono text-[11px] font-bold text-mc-cyan tracking-wider uppercase block">
                  2. TECHNICAL ARCHITECTURE & SOLUTION
                </span>
                <p className="font-sans text-sm sm:text-base text-mc-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Contribution */}
              <div className="rounded-2xl border border-mc-border/80 bg-mc-surface-elevated/60 p-5 space-y-2">
                <span className="font-mono text-[11px] font-bold text-mc-text tracking-wider uppercase block">
                  3. MY DIRECT ENGINEERING CONTRIBUTIONS
                </span>
                <p className="font-sans text-sm sm:text-base text-mc-text-secondary leading-relaxed">
                  {project.contribution}
                </p>
              </div>

              {/* Benchmark Validation */}
              {project.metrics && (
                <div className="rounded-2xl border border-mc-cyan/30 bg-mc-cyan/8 p-4 font-mono text-xs text-mc-cyan flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 flex-shrink-0 text-mc-cyan mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase tracking-wider">BENCHMARK & VERIFICATION:</span>
                    <span className="text-mc-text font-normal">{project.metrics}</span>
                  </div>
                </div>
              )}

              {/* Stack */}
              <div>
                <span className="font-mono text-xs text-mc-text-muted font-bold block mb-2 uppercase tracking-wider">
                  TECHNOLOGY STACK:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-xl border border-mc-border bg-mc-bg px-3 py-1.5 font-mono text-xs text-mc-text font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-mc-border pt-5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-mc-cyan px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#040711] shadow-lg hover:shadow-cyan-glow transition-all"
              >
                <Github className="h-4 w-4" />
                <span>INSPECT REPOSITORY SOURCE</span>
              </a>

              <button
                onClick={onClose}
                className="rounded-full border border-mc-border px-5 py-3 font-mono text-xs text-mc-text-secondary hover:text-mc-text font-semibold"
              >
                CLOSE DOSSIER [ESC]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
