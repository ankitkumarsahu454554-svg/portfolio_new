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
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#000000]">
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
            <span className="mr-2 flex items-center gap-1.5 font-mono text-xs text-gray-400 font-semibold">
              <Filter className="h-3.5 w-3.5 text-lime" />
              <span>FILTER:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 font-mono text-xs transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-lime text-black font-semibold shadow-[0_0_12px_rgba(199,255,85,0.3)]'
                    : 'border border-white/10 bg-[#0D0D0D] text-gray-300 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-gray-400">
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
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-lime">PROJECT #{project.id}</span>
                    <Badge variant="outline" className="text-[10px] border-white/15 bg-white/[0.03]">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {project.metrics && (
                    <div className="rounded-xl border border-lime/20 bg-lime/[0.04] p-3 font-mono text-xs text-lime">
                      <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">EVALUATION METRICS & COMPLIANCE:</span>
                      {project.metrics}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#141414] px-4 py-2 font-mono text-xs text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub Repository</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Problem / Solution / Contribution Column */}
                <div className="lg:col-span-7 space-y-5 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-6 lg:pt-0 lg:pl-8">
                  {/* Real-World Problem */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      1. The Real-World Problem
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Technical Solution */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400 block">
                      2. Technical Solution & System Architecture
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Actual Contribution */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-lime block">
                      3. My Specific Contribution
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">
                      Technologies & Libraries:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-[#141414] px-2.5 py-1 font-mono text-xs text-gray-300"
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
