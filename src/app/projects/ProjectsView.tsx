'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Filter } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { PROJECTS } from '@/lib/constants';

const CATEGORIES = ['All Categories', 'AI / Machine Learning', 'Data Science', 'Systems & Security'] as const;

export function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<string>('All Categories');

  const filteredProjects =
    activeCategory === 'All Categories'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#090A0F] bg-subtle-mesh">
      <Container size="wide">
        <SectionHeader
          index="02"
          tag="ENGINEERING ARCHIVE"
          title="Technical Projects & Applied Systems"
          subtitle="Real-World Problem Solving"
          description="A documented index of machine learning models, clinical healthcare intake architectures, and cryptographic data sanitization utilities built by Ankit Kumar Sahu."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 flex items-center gap-1.5 font-mono text-xs text-slate-400 font-semibold">
              <Filter className="h-3.5 w-3.5 text-sky-400" />
              <span>FILTER:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 font-mono text-xs transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-sky-400 text-slate-950 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                    : 'border border-white/10 bg-[#111319] text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-slate-400">
            SHOWING {filteredProjects.length} OF {PROJECTS.length} PROJECTS
          </span>
        </div>

        {/* Detailed Projects List */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#111319] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/30 hover:shadow-[0_10px_35px_rgba(56,189,248,0.06)] hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-sky-400">PROJECT #{project.id}</span>
                    <Badge variant="neutral" className="text-[10px]">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {project.metrics && (
                    <div className="rounded-xl border border-sky-400/20 bg-sky-400/[0.04] p-3 font-mono text-xs text-sky-300">
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">EVALUATION METRICS & COMPLIANCE:</span>
                      {project.metrics}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#161922] px-4 py-2 font-mono text-xs text-white hover:border-sky-400/50 hover:text-sky-300 transition-all duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Source Code</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-4 lg:pt-0 lg:pl-8">
                  {/* Problem */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                      THE REAL-WORLD PROBLEM:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-sky-400 font-semibold block">
                      TECHNICAL SOLUTION & ARCHITECTURE:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Contribution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 font-semibold block">
                      MY CONTRIBUTION:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-2">
                      TECHNOLOGIES USED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.08] bg-[#161922] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
