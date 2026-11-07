'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TECHNICAL_SKILLS } from '@/lib/constants';
import { Code2, Brain, Database, Layers, Wrench, BarChart3 } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 className="h-4 w-4 text-lime" />,
  'AI & Machine Learning': <Brain className="h-4 w-4 text-cyan-400" />,
  'Data Science & Analytics': <BarChart3 className="h-4 w-4 text-lime" />,
  'Frameworks & Libraries': <Layers className="h-4 w-4 text-cyan-400" />,
  'Databases & Storage': <Database className="h-4 w-4 text-lime" />,
  'Developer Tools & Platforms': <Wrench className="h-4 w-4 text-cyan-400" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-28 border-t border-white/[0.08]">
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="TECHNICAL COMPETENCIES"
          title="Technical Skills & Proficiencies"
          subtitle="Core Engineering Toolkit"
          description="A structured overview of programming languages, machine learning frameworks, data science libraries, and development tools I actively use in coursework, internships, and engineering projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((cat) => (
            <div
              key={cat.title}
              className="group relative rounded-2xl border border-white/[0.08] bg-surface-50/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-surface-100/70"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  {CATEGORY_ICONS[cat.title] || <Code2 className="h-4 w-4 text-lime" />}
                </div>
                <h3 className="font-heading text-base font-medium text-white">{cat.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-gray-300 transition-colors group-hover:border-white/20"
                  >
                    <span className="mr-1.5 h-1 w-1 rounded-full bg-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

