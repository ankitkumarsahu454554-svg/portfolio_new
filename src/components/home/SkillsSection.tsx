'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TECHNICAL_SKILLS } from '@/lib/constants';
import { Code2, Brain, Database, Layers, Wrench, BarChart3 } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 className="h-4 w-4 text-sky-600" />,
  'AI & Machine Learning': <Brain className="h-4 w-4 text-indigo-600" />,
  'Data Science & Analytics': <BarChart3 className="h-4 w-4 text-sky-600" />,
  'Frameworks & Libraries': <Layers className="h-4 w-4 text-indigo-600" />,
  'Databases & Storage': <Database className="h-4 w-4 text-sky-600" />,
  'Developer Tools & Platforms': <Wrench className="h-4 w-4 text-indigo-600" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-28 border-t border-slate-200 bg-white">
      <Container size="wide">
        <SectionHeader
          index="01"
          tag="TECHNICAL COMPETENCIES"
          title="Technical Skills & Proficiencies"
          subtitle="Core Engineering Toolkit"
          description="A structured overview of programming languages, machine learning frameworks, data science libraries, and development tools I actively use in engineering systems and research projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md hover:bg-white hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-xs">
                  {CATEGORY_ICONS[cat.title] || <Code2 className="h-4 w-4 text-sky-600" />}
                </div>
                <h3 className="font-heading text-base font-semibold text-slate-900">{cat.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-700 shadow-2xs transition-colors group-hover:border-slate-300"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
