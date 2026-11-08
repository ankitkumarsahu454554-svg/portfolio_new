'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROJECTS, EngineeringProject } from '@/lib/constants';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<EngineeringProject | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-36 border-t border-mc-border overflow-hidden">
      <Container size="wide">
        <SectionHeader
          index="03"
          tag="CASE STUDIES // DEPLOYMENTS"
          title="Featured Engineering Projects"
          subtitle="Applied Computer Science & AI"
          description="A selection of machine learning architectures, clinical healthcare data pipelines, and enterprise storage utilities built with documented repositories."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col justify-between rounded-3xl border border-mc-border bg-mc-surface p-7 sm:p-8 mc-panel shadow-xl cursor-pointer hover:border-mc-cyan transition-all duration-300"
              data-cursor="view"
            >
              <div className="space-y-5">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-mc-cyan font-bold tracking-wider">PROJECT #{project.id}</span>
                  <span className="rounded-full border border-mc-border bg-mc-surface-elevated px-3 py-1 text-[10px] text-mc-text-muted font-semibold uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-mc-text group-hover:text-mc-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="font-sans text-sm text-mc-text-secondary leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Benchmarks pill */}
                {project.metrics && (
                  <div className="rounded-xl border border-mc-cyan/20 bg-mc-cyan/8 p-3 font-mono text-[11px] text-mc-cyan line-clamp-2">
                    <span className="block text-[9px] uppercase tracking-wider text-mc-text-muted font-bold">
                      VERIFICATION:
                    </span>
                    {project.metrics}
                  </div>
                )}
              </div>

              {/* Bottom Tech Chips & Action */}
              <div className="pt-6 border-t border-mc-border/60 mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-mc-border/60 bg-mc-bg/70 px-2.5 py-1 font-mono text-[11px] text-mc-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-lg border border-mc-border/40 px-2 py-1 font-mono text-[10px] text-mc-text-muted">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-mc-cyan group-hover:underline">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-mc-border bg-mc-bg text-mc-text hover:border-mc-cyan hover:text-mc-cyan transition-colors"
                    aria-label={`GitHub source for ${project.title}`}
                    data-cursor="open"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Instance */}
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
}

