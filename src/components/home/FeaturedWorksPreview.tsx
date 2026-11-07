'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';

export function FeaturedWorksPreview() {
  return (
    <section id="projects" className="relative py-20 md:py-28 border-t border-white/[0.08]">
      <Container size="wide">
        <SectionHeader
          index="02"
          tag="ENGINEERING PORTFOLIO"
          title="Featured Technical Projects"
          subtitle="Applied Computer Science & AI"
          description="A selection of machine learning architectures, healthcare data pipelines, enterprise storage utilities, and aerospace telemetry systems I have built with full source code on GitHub."
        />

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-white/[0.08] bg-surface-50/60 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-surface-100/70"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Header info */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-lime">PROJECT #{project.id}</span>
                    <Badge variant="outline" className="text-[10px]">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {project.summary}
                  </p>

                  {project.metrics && (
                    <div className="rounded-lg border border-lime/20 bg-lime/[0.04] p-2.5 font-mono text-[11px] text-lime">
                      <span className="block text-[9px] uppercase tracking-wider text-gray-400">BENCHMARK / VALIDATION:</span>
                      {project.metrics}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      data-cursor="pointer"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Right Problem & Solution & Contribution Details */}
                <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-4 lg:pt-0 lg:pl-8">
                  {/* Real-World Problem */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">
                      THE REAL-WORLD PROBLEM:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Technical Solution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 font-semibold block">
                      TECHNICAL SOLUTION & ARCHITECTURE:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* My Actual Contribution */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-lime font-semibold block">
                      MY CONTRIBUTION:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block mb-2">
                      TECHNOLOGIES USED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
          <p className="font-mono text-xs text-gray-400">
            All projects include full implementations and documented repositories.
          </p>

          <Button href="/projects" variant="primary" size="md" withArrow>
            VIEW ALL DETAILED PROJECTS
          </Button>
        </div>
      </Container>
    </section>
  );
}
