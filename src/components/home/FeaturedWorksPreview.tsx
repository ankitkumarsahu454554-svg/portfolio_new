'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';

const FEATURED_PROJECTS: Project[] = [
  {
    id: '01',
    title: 'RARE DISEASE PREDICTION AI',
    subtitle: 'Phenotype-driven genetic candidate disease ranking system',
    year: '2026',
    role: 'Lead AI/ML Researcher',
    client: 'HEALTHCARE AI RESEARCH',
    category: 'Creative Tech',
    tags: ['PYTHON', 'PYTORCH', 'HPO PHENOTYPE', 'MRR / TOP-K'],
    description:
      'A deep learning pipeline using HPO phenotype analysis and genetic evidence to rank candidate rare diseases, evaluated via Top-K accuracy and statistical comparisons.',
    link: '/work',
    accent: '#C7FF55',
  },
  {
    id: '02',
    title: 'MEDIKIOSK // CASE TAKING SOFTWARE',
    subtitle: 'Multilingual autonomous medical document OCR & clinical intake',
    year: '2026',
    role: 'Full-Stack Software Architect',
    client: 'MEDIKIOSK LABS',
    category: 'Commercial',
    tags: ['REACT', 'FASTAPI', 'POSTGRESQL', 'MEDICAL OCR'],
    description:
      'Multilingual AI patient case-taking platform integrating voice-based symptom collection, medical document OCR, and doctor priority dashboards.',
    link: '/work',
    accent: '#00F0FF',
  },
  {
    id: '03',
    title: 'SECUREWIPE ENTERPRISE v2.0',
    subtitle: 'NIST SP 800-88 compliant hardware data sanitization platform',
    year: '2026',
    role: 'Systems & Security Engineer',
    client: 'DATA SECURITY RESEARCH',
    category: 'Interactive',
    tags: ['ELECTRON', 'GO', 'RUST', 'NIST SP 800-88'],
    description:
      'High-throughput data sanitization utility leveraging Go and Rust for storage device detection, sanitization verification, and tamper-evident audit logging.',
    link: '/work',
    accent: '#C7FF55',
  },
];

export function FeaturedWorksPreview() {
  return (
    <section id="featured" className="relative py-24 md:py-32 border-t border-white/[0.08]">
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="SELECTED ARCHIVE"
          title="CURATED WORKS & DEPLOYMENTS"
          subtitle="ENGINEERING ARCHIVE 2024 — 2026"
          description="A selection of machine learning innovations, systems software, and interactive digital experiences engineered by Ankit Kumar Sahu."
        />

        {/* Project List: Editorial Index Style */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <Link
                href={project.link || '/work'}
                className="block py-10 md:py-14"
                data-cursor="view"
              >
                <div className="grid grid-cols-1 items-baseline gap-6 lg:grid-cols-12">
                  {/* Left: Index & Client */}
                  <div className="flex items-baseline gap-4 lg:col-span-3">
                    <span className="font-mono text-sm tracking-widest text-lime">
                      /{project.id}
                    </span>
                    <div>
                      <span className="font-mono text-xs tracking-wider text-gray-500 uppercase block">
                        {project.client}
                      </span>
                      <span className="font-mono text-[11px] text-gray-600 block mt-0.5">
                        {project.year} // {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Center: Title & Description */}
                  <div className="space-y-3 lg:col-span-6">
                    <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-400 max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right: Category & Action */}
                  <div className="flex items-center justify-between lg:col-span-3 lg:justify-end gap-4">
                    <span className="font-mono text-xs tracking-wider text-gray-500">
                      [{project.category}]
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Full Archive */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <Button href="/resume" variant="primary" size="md">
            INSPECT FULL RESUME
          </Button>

          <Button href="/work" variant="terminal" size="lg" withArrow>
            VIEW COMPLETE ARCHIVE ({FEATURED_PROJECTS.length}+ WORKS)
          </Button>
        </div>
      </Container>
    </section>
  );
}
