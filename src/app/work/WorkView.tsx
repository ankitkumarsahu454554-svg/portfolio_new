'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Project } from '@/types';

const PROJECTS: Project[] = [
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
      'Developed a deep learning pipeline utilizing HPO-based phenotype analysis and genetic evidence to rank candidate rare diseases, validated through Top-K accuracy, Mean Reciprocal Rank (MRR), and rigorous statistical benchmarks.',
    link: 'https://github.com/ankitkumarsahu454554-svg',
    accent: '#C7FF55',
  },
  {
    id: '02',
    title: 'MEDIKIOSK // PATIENT CASE TAKING',
    subtitle: 'Multilingual autonomous medical document OCR & clinical intake',
    year: '2026',
    role: 'Full-Stack Software Architect',
    client: 'MEDIKIOSK LABS',
    category: 'Commercial',
    tags: ['REACT', 'FASTAPI', 'POSTGRESQL', 'MEDICAL OCR'],
    description:
      'Multilingual AI patient case-taking platform integrating voice-based symptom collection, medical document OCR, red-flag triage detection, and a high-density Doctor Dashboard for patient history and priority escalation.',
    link: 'https://github.com/ankitkumarsahu454554-svg',
    accent: '#00F0FF',
  },
  {
    id: '03',
    title: 'SECUREWIPE ENTERPRISE v2.0',
    subtitle: 'NIST SP 800-88 compliant hardware data sanitization platform',
    year: '2026',
    role: 'Systems & Security Engineer',
    client: 'ENTERPRISE INFRASTRUCTURE',
    category: 'Interactive',
    tags: ['ELECTRON', 'GO', 'RUST', 'NIST SP 800-88'],
    description:
      'High-throughput data-wiping platform utilizing Go and Rust native modules for physical storage device discovery, multi-pass cryptographic sanitization, validation, and cryptographically tamper-evident audit logs.',
    link: 'https://github.com/ankitkumarsahu454554-svg',
    accent: '#C7FF55',
  },
  {
    id: '04',
    title: 'INDIA SPACE LAB // CANSAT & GIS',
    subtitle: 'Satellite telemetry, drone systems and remote sensing research',
    year: '2026',
    role: 'Space Systems Fellow',
    client: 'INDIA SPACE LAB',
    category: 'R&D',
    tags: ['CANSAT / CUBESAT', 'GIS REMOTE SENSING', 'TELEMETRY'],
    description:
      'Technical training research at India Space Lab, constructing sub-orbital CanSat payloads, GIS spatial analysis pipelines, environmental sensor telemetry, and rocketry recovery frameworks.',
    link: 'https://github.com/ankitkumarsahu454554-svg',
    accent: '#00F0FF',
  },
  {
    id: '05',
    title: 'AETHER / KINETIC // WEBGL ENGINE',
    subtitle: 'Autonomous generative art engine & real-time simulation',
    year: '2025',
    role: 'Creative Developer',
    client: 'KINETIC LABS',
    category: 'Creative Tech',
    tags: ['THREE.JS', 'COMPUTE SHADERS', 'AUDIO REACTIVE', 'WEBGL2'],
    description:
      'A WebGL particle simulation driven by real-time audio analysis and fluid dynamics, handling 250,000 instanced particles at stable 60 FPS.',
    link: 'https://github.com/ankitkumarsahu454554-svg',
    accent: '#C7FF55',
  },
  {
    id: '06',
    title: 'NEURA CHROMATIC 3D',
    subtitle: 'Spatial luxury editorial platform & 3D garment configurator',
    year: '2025',
    role: 'WebGL & Frontend Architect',
    client: 'HAUTE CYBERNETIQUE',
    category: 'Commercial',
    tags: ['NEXT.JS 14', 'R3F', 'PBR MATERIALS', 'TAILWIND'],
    description:
      'Ultra-high fidelity real-time 3D product visualizer featuring bespoke anisotropic metallic materials and dynamic refractive glass surfaces.',
    link: 'https://github.com/ankitkumarsahu454554-svg',
    accent: '#00F0FF',
  },
];

const CATEGORIES = ['ALL', 'Commercial', 'Interactive', 'Creative Tech', 'R&D'] as const;

export function WorkView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="PORTFOLIO ARCHIVE"
          title="SELECTED WORKS & DEPLOYMENTS"
          subtitle="2024 — PRESENT"
          description="A documented index of AI/ML systems, enterprise software, space telemetry, and real-time GPU graphics applications by Ankit Kumar Sahu."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 flex items-center gap-1.5 font-mono text-xs text-gray-500">
              <Filter className="h-3 w-3 text-lime" />
              <span>FILTER:</span>
            </span>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3.5 py-1 font-mono text-xs transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-lime text-black font-semibold shadow-[0_0_15px_rgba(199,255,85,0.3)]'
                    : 'border border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/30 hover:text-white'
                }`}
                data-cursor="pointer"
              >
                {category}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-gray-500">
            SHOWING {filteredProjects.length} OF {PROJECTS.length} RECORDS
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-surface-50/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-lime/40 hover:bg-surface-100/60"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-lime">/{project.id}</span>
                    <span className="font-mono text-xs text-gray-500">// {project.year}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    {project.category}
                  </Badge>
                </div>

                {/* Main Content */}
                <div className="mt-6 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-gray-500 block">
                    {project.client}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-light text-white transition-colors group-hover:text-lime">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-xs text-gray-400">
                  <span className="text-gray-500">ROLE: {project.role}</span>
                  <a
                    href={project.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-lime group-hover:underline"
                    data-cursor="pointer"
                  >
                    <span>SOURCE / REPO</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

