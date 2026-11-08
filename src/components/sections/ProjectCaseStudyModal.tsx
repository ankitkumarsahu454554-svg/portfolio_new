'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, Layers, Cpu, Maximize2 } from 'lucide-react';
import { EngineeringProject } from '@/lib/constants';

interface CaseStudyModalProps {
  project: EngineeringProject | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [project]);

  // Close on Escape key or navigate gallery with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project || !project.images || project.images.length <= 1) return;
      if (e.key === 'ArrowRight') {
        setActiveImageIdx((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
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

  if (!project) return null;

  const currentImage = project.images?.[activeImageIdx] || {
    src: `/projects/${project.slug}/hero.svg`,
    alt: project.title,
    caption: project.summary,
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040711]/88 backdrop-blur-xl"
        />

        {/* Modal Container with Shared Layout ID */}
        <motion.div
          layoutId={`project-card-${project.id}`}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-mc-border bg-mc-surface p-6 sm:p-9 mc-panel shadow-2xl z-10 space-y-6"
        >
          {/* Header with Close */}
          <div className="flex items-start justify-between border-b border-mc-border pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span className="text-mc-cyan font-bold">PROJECT #{project.id}</span>
                <span className="text-mc-border">•</span>
                <span className="text-mc-amber font-semibold uppercase">{project.category}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mc-text">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-mc-border bg-mc-bg text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-colors"
              aria-label="Close modal"
              data-cursor="pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Project Image Gallery with Lightbox Controls */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-2.5">
              <div className="relative aspect-[16/9] w-full rounded-2xl border border-mc-border bg-mc-surface-raised overflow-hidden shadow-lg flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 900px"
                      priority
                      className="object-contain p-2"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-mc-border bg-mc-surface/80 backdrop-blur-md text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                      aria-label="Previous Project Asset"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIdx((prev) => (prev + 1) % project.images.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-mc-border bg-mc-surface/80 backdrop-blur-md text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                      aria-label="Next Project Asset"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption and Thumbnails */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-xs font-mono text-mc-text-muted">
                <span className="text-mc-text-secondary text-center sm:text-left">
                  {currentImage.caption}
                </span>

                {project.images.length > 1 && (
                  <div className="flex items-center gap-1.5 shrink-0">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === activeImageIdx ? 'w-5 bg-mc-cyan' : 'w-1.5 bg-mc-border hover:bg-mc-text-muted'
                        }`}
                        aria-label={`Show image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Case Study Details: Problem, Solution, Contribution */}
          <div className="space-y-5">
            {/* Problem */}
            <div className="rounded-2xl border border-mc-border/80 bg-mc-surface-elevated/60 p-5 space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-mc-amber tracking-wider uppercase block">
                1. THE REAL-WORLD PROBLEM STATEMENT
              </span>
              <p className="font-sans text-xs sm:text-sm text-mc-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="rounded-2xl border border-mc-border/80 bg-mc-surface-elevated/60 p-5 space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-mc-cyan tracking-wider uppercase block">
                2. TECHNICAL ARCHITECTURE & SOLUTION
              </span>
              <p className="font-sans text-xs sm:text-sm text-mc-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Contribution */}
            <div className="rounded-2xl border border-mc-border/80 bg-mc-surface-elevated/60 p-5 space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-mc-text tracking-wider uppercase block">
                3. MY DIRECT ENGINEERING CONTRIBUTIONS
              </span>
              <p className="font-sans text-xs sm:text-sm text-mc-text-secondary leading-relaxed">
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

            {/* Technologies */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-mc-text-muted font-bold block">
                DEPLOYED TECHNOLOGIES & TOOLS:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-mc-border bg-mc-bg px-3 py-1 font-mono text-xs text-mc-text font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-mc-border/60 pt-5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-mc-border bg-mc-bg px-4 py-2 font-mono text-xs text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                data-cursor="open"
              >
                <Github className="h-4 w-4" />
                <span>GITHUB REPOSITORY</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <span className="font-mono text-[11px] text-mc-text-muted">
                VERIFIED REPOSITORY // {project.slug}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
