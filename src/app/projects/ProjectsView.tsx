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
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-mc-canvas text-mc-text-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mc-cyan/30 bg-mc-cyan/5 text-mc-cyan font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-mc-cyan animate-pulse" />
            <span>Systems & ML Architecture Archive</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-mc-text-primary">
            Engineering <span className="font-serif italic font-normal text-mc-cyan">Artifacts</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-mc-text-secondary max-w-2xl">
            A documented index of machine learning models, clinical healthcare intake architectures, and cryptographic data sanitization utilities built by Ankit Kumar Sahu.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mc-border/80 pb-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 flex items-center gap-1.5 font-mono text-xs text-mc-text-muted font-bold">
              <Filter className="h-3.5 w-3.5 text-mc-cyan" />
              <span>FILTER:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-mc-cyan text-black font-bold shadow-md shadow-mc-cyan/20'
                    : 'border border-mc-border bg-mc-surface text-mc-text-secondary hover:text-mc-text-primary hover:border-mc-cyan/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-mc-text-muted">
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
                className="group relative rounded-2xl border border-mc-border/90 bg-mc-surface p-6 sm:p-8 hover:border-mc-cyan/60 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-mc-cyan/5"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border-b border-mc-border/60 pb-6 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border border-mc-cyan/40 bg-mc-cyan/10 text-mc-cyan">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="font-mono text-xs text-mc-amber font-semibold">
                          ★ {project.metrics}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-mc-text-primary group-hover:text-mc-cyan transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-mono text-xs text-mc-cyan font-medium mt-1">
                      {project.summary}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl bg-mc-cyan text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-mc-cyan/90 transition-all shadow-md shadow-mc-cyan/10"
                    >
                      Case Study
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-mc-border bg-mc-surface-raised hover:border-mc-cyan hover:text-mc-cyan text-mc-text-secondary transition-colors"
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
                        className="p-2.5 rounded-xl border border-mc-border bg-mc-surface-raised hover:border-mc-cyan hover:text-mc-cyan text-mc-text-secondary transition-colors"
                        title="Open Live Demonstration"
                      >
                        <ArrowUpRight className="w-4 h-4" />
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
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-mc-cyan block mb-1">
                        ENGINEERED SOLUTION:
                      </span>
                      <p className="text-xs sm:text-sm text-mc-text-secondary leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-mc-surface-raised/70 border border-mc-border/60 rounded-xl p-5 space-y-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-mc-amber block">
                      KEY CONTRIBUTIONS:
                    </span>
                    <p className="text-xs text-mc-text-secondary leading-relaxed">
                      {project.contribution}
                    </p>

                    <div className="pt-2 border-t border-mc-border/40">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-mc-text-muted block mb-2">
                        TECHNOLOGIES:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-mc-surface border border-mc-border/80 font-mono text-[11px] text-mc-text-secondary"
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
