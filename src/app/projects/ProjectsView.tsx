'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Filter, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS, EngineeringProject } from '@/lib/constants';
import { ProjectCaseStudyModal } from '@/components/sections/ProjectCaseStudyModal';

const CATEGORIES = ['All Categories', 'AI / Machine Learning', 'Data Science', 'Systems & Security'] as const;

export function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<string>('All Categories');
  const [activeModalProject, setActiveModalProject] = useState<EngineeringProject | null>(null);

  const filteredProjects =
    activeCategory === 'All Categories'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-mc-bg text-mc-text min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00B8D9]/30 bg-[#00B8D9]/10 text-[#00B8D9] font-mono text-xs uppercase tracking-wider mb-4 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00B8D9] animate-pulse" />
            <span>Systems & ML Architecture Archive // Cyan-Blue Sector</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-mc-text">
            Engineering <span className="font-serif italic font-normal text-[#00B8D9]">Artifacts</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-mc-text-secondary max-w-2xl leading-relaxed">
            A documented index of machine learning models, clinical healthcare intake architectures, and cryptographic data sanitization utilities built by Ankit Kumar Sahu.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mc-border pb-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 flex items-center gap-1.5 font-mono text-xs text-mc-text-muted font-bold">
              <Filter className="h-3.5 w-3.5 text-[#00B8D9]" />
              <span>FILTER:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#00B8D9] to-[#3D5AFE] text-white font-bold shadow-md shadow-[#00B8D9]/25'
                    : 'border border-mc-border bg-white dark:bg-mc-surface text-mc-text-secondary hover:text-mc-text hover:border-[#00B8D9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-mc-text-muted font-semibold">
            SHOWING {filteredProjects.length} OF {PROJECTS.length} SYSTEMS
          </span>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative rounded-3xl border border-mc-border bg-white dark:bg-mc-surface p-6 sm:p-8 hover:border-[#00B8D9] transition-all duration-300 shadow-md hover:shadow-[0_16px_36px_-8px_rgba(0,184,217,0.22)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border-b border-mc-border/60 pb-6 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold border border-[#00B8D9]/40 bg-[#00B8D9]/10 text-[#00B8D9]">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="font-mono text-xs text-[#FF8A00] font-bold">
                          ★ {project.metrics}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-mc-text group-hover:text-[#00B8D9] transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-mono text-xs text-[#00B8D9] font-medium mt-1">
                      {project.summary}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00B8D9] to-[#3D5AFE] text-white font-mono text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shadow-[#00B8D9]/20 cursor-pointer"
                    >
                      Case Study
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full border border-mc-border bg-mc-surface-elevated hover:border-[#00B8D9] hover:text-[#00B8D9] text-mc-text transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full border border-mc-border bg-mc-surface-elevated hover:border-[#00B8D9] hover:text-[#00B8D9] text-mc-text transition-colors"
                        title="Open Live Demonstration"
                      >
                        <ArrowUpRight className="w-4 h-4 text-[#FF3D81]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem, Solution & Contribution breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-mc-text-muted block mb-1">
                        PROBLEM STATEMENT:
                      </span>
                      <p className="text-xs sm:text-sm text-mc-text-secondary leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00B8D9] block mb-1">
                        ENGINEERED SOLUTION:
                      </span>
                      <p className="text-xs sm:text-sm text-mc-text-secondary leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-mc-surface-elevated border border-mc-border/80 rounded-2xl p-5 space-y-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] block">
                      KEY CONTRIBUTIONS:
                    </span>
                    <p className="text-xs text-mc-text-secondary leading-relaxed">
                      {project.contribution}
                    </p>

                    <div className="pt-2 border-t border-mc-border/40">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-mc-text-muted block mb-2 font-bold">
                        TECHNOLOGIES:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-lg bg-white dark:bg-mc-surface border border-mc-border font-mono text-[11px] text-mc-text font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
