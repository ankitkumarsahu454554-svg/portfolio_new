'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';

export function FeaturedWorksPreview() {
  return (
    <section id="projects" className="relative py-20 md:py-28 border-t border-slate-200 bg-[#F8FAFC]">
      <Container size="wide">
        <SectionHeader
          index="02"
          tag="ENGINEERING PORTFOLIO"
          title="Featured Technical Projects"
          subtitle="Applied Computer Science & AI"
          description="A selection of machine learning architectures, healthcare data pipelines, and enterprise storage utilities I have built with full source code on GitHub."
        />

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Header info */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-sky-700">PROJECT #{project.id}</span>
                    <Badge variant="neutral" className="text-[10px]">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {project.metrics && (
                    <div className="rounded-lg border border-sky-200 bg-sky-50/80 p-2.5 font-mono text-[11px] text-sky-800">
                      <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-semibold">BENCHMARK / VALIDATION:</span>
                      {project.metrics}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 font-mono text-xs text-slate-800 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 transition-all duration-200 shadow-2xs"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Right Problem & Solution & Contribution Details */}
                <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-8">
                  {/* Real-World Problem */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                      THE REAL-WORLD PROBLEM:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Technical Solution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-sky-700 font-bold block">
                      TECHNICAL SOLUTION & ARCHITECTURE:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* My Contribution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-700 font-bold block">
                      MY CONTRIBUTION:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                      TECHNOLOGIES USED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-700"
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

        {/* View All Projects Button */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <p className="font-mono text-xs text-slate-500">
            All projects include complete implementations and documented repositories.
          </p>

          <Button href="/projects" variant="primary" size="md" withArrow>
            VIEW ALL DETAILED PROJECTS
          </Button>
        </div>
      </Container>
    </section>
  );
}
