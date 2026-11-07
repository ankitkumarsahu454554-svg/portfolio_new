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
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#F8FAFC] bg-natural-light min-h-screen">
      <Container size="wide">
        <SectionHeader
          index="02"
          tag="ENGINEERING ARCHIVE"
          title="Technical Projects & Applied Systems"
          subtitle="Real-World Problem Solving"
          description="A documented index of machine learning models, clinical healthcare intake architectures, and cryptographic data sanitization utilities built by Ankit Kumar Sahu."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 flex items-center gap-1.5 font-mono text-xs text-slate-500 font-bold">
              <Filter className="h-3.5 w-3.5 text-sky-600" />
              <span>FILTER:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 font-mono text-xs transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-slate-500 font-medium">
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
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-sky-700">PROJECT #{project.id}</span>
                    <Badge variant="neutral" className="text-[10px]">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {project.metrics && (
                    <div className="rounded-xl border border-sky-200 bg-sky-50/80 p-3 font-mono text-xs text-sky-800">
                      <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">EVALUATION METRICS & COMPLIANCE:</span>
                      {project.metrics}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 font-mono text-xs text-slate-800 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 transition-all duration-200 shadow-2xs font-medium"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Source Code</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-8">
                  {/* Problem */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                      THE REAL-WORLD PROBLEM:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-sky-700 font-bold block">
                      TECHNICAL SOLUTION & ARCHITECTURE:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Contribution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-700 font-bold block">
                      MY CONTRIBUTION:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                      TECHNOLOGIES USED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-700 font-medium"
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
