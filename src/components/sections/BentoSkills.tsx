'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TECHNICAL_SKILLS } from '@/lib/constants';
import { Code2, Brain, Database, Layers, Wrench, BarChart3, Sparkles } from 'lucide-react';

const CATEGORY_META: Record<string, { icon: React.ReactNode; badge: string; colSpan: string }> = {
  'Programming Languages': {
    icon: <Code2 className="h-5 w-5 text-mc-cyan" />,
    badge: 'CORE SYNTAX',
    colSpan: 'lg:col-span-4 md:col-span-6',
  },
  'AI & Machine Learning': {
    icon: <Brain className="h-5 w-5 text-mc-amber" />,
    badge: 'NEURAL & MODELS',
    colSpan: 'lg:col-span-8 md:col-span-6',
  },
  'Data Science & Analytics': {
    icon: <BarChart3 className="h-5 w-5 text-mc-cyan" />,
    badge: 'STATISTICAL EDA',
    colSpan: 'lg:col-span-7 md:col-span-6',
  },
  'Frameworks & Libraries': {
    icon: <Layers className="h-5 w-5 text-mc-amber" />,
    badge: 'SYSTEM APIS',
    colSpan: 'lg:col-span-5 md:col-span-6',
  },
  'Databases & Storage': {
    icon: <Database className="h-5 w-5 text-mc-cyan" />,
    badge: 'PERSISTENCE',
    colSpan: 'lg:col-span-5 md:col-span-6',
  },
  'Developer Tools & Platforms': {
    icon: <Wrench className="h-5 w-5 text-mc-amber" />,
    badge: 'DEVOPS & WORKFLOW',
    colSpan: 'lg:col-span-7 md:col-span-6',
  },
};

// Flattened list of all skills for the infinite marquee
const ALL_SKILLS = TECHNICAL_SKILLS.flatMap((cat) => cat.skills);

export function BentoSkills() {
  return (
    <section id="skills" className="relative py-24 md:py-36 border-t border-mc-border overflow-hidden">
      <Container size="wide">
        <SectionHeader
          index="02"
          tag="ARSENAL // BENTO MATRIX"
          title="Technical Proficiencies & Systems Toolkit"
          subtitle="Engineering Capabilities"
          description="A complete architectural matrix of programming languages, deep learning frameworks, data processing engines, and infrastructure tools."
        />

        {/* Infinite Tech Marquee Strip */}
        <div className="relative mb-14 w-full overflow-hidden border-y border-mc-border/80 bg-mc-surface/60 py-3.5 backdrop-blur-md">
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mc-bg to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mc-bg to-transparent z-10" />

          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4">
            {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full border border-mc-border/60 bg-mc-surface-elevated/70 px-4 py-1.5 font-mono text-xs text-mc-text-secondary select-none"
              >
                <Sparkles className="h-3 w-3 text-mc-cyan" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {TECHNICAL_SKILLS.map((cat, idx) => {
            const meta = CATEGORY_META[cat.title] || {
              icon: <Code2 className="h-5 w-5 text-mc-cyan" />,
              badge: 'TOOLKIT',
              colSpan: 'lg:col-span-4 md:col-span-6',
            };

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-3xl border border-mc-border bg-mc-surface p-7 mc-panel shadow-lg transition-all duration-300 hover:border-mc-cyan/50 hover:shadow-2xl ${meta.colSpan}`}
                data-cursor="view"
              >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-mc-border/60 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-mc-border bg-mc-bg shadow-sm">
                      {meta.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-mc-cyan font-bold tracking-telemetry block">
                        {meta.badge}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-mc-text group-hover:text-mc-cyan transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-xl border border-mc-border/70 bg-mc-bg/60 px-3 py-1.5 font-mono text-xs text-mc-text font-medium transition-all group-hover:border-mc-border hover:border-mc-cyan hover:text-mc-cyan"
                    >
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-mc-cyan" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
