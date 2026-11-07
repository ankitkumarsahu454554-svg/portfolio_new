'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { EDUCATION_DATA, EXPERIENCE_DATA, ACHIEVEMENTS } from '@/lib/constants';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export function ExperiencePreview() {
  return (
    <section id="experience-preview" className="relative py-20 md:py-28 border-t border-slate-200 bg-white">
      <Container size="wide">
        <SectionHeader
          index="03"
          tag="ACADEMIC & INDUSTRY TRACK"
          title="Education & Experience"
          subtitle="Track Record"
          description="A summary of my ongoing computer science engineering degree at NIST University, industry training, and technical achievements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Education & Experience (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-200 bg-sky-50 text-sky-700">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-sky-700 uppercase tracking-wider font-bold">FORMAL EDUCATION</span>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">{EDUCATION_DATA[0].institution}</h3>
                </div>
              </div>

              <div className="space-y-3 font-sans">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-heading text-base font-semibold text-slate-900">{EDUCATION_DATA[0].degree}</h4>
                  <span className="inline-block rounded-md border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-mono text-xs text-sky-800 font-semibold">{EDUCATION_DATA[0].grade}</span>
                </div>
                <div className="flex items-center gap-4 font-mono text-xs text-slate-500">
                  <span>{EDUCATION_DATA[0].duration}</span>
                  <span>•</span>
                  <span>{EDUCATION_DATA[0].location}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200/80">
                  {EDUCATION_DATA[0].description}
                </p>
              </div>
            </motion.div>

            {/* Experience Cards */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 flex items-center gap-2 font-bold">
                <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
                <span>TECHNICAL EXPERIENCE & ROLES</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EXPERIENCE_DATA.map((exp, i) => (
                  <motion.div
                    key={exp.organization}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-sm space-y-3 transition-all duration-300 hover:border-indigo-300 hover:shadow-md hover:bg-white"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-indigo-700 font-semibold">{exp.duration}</span>
                      <span className="text-slate-500">{exp.location}</span>
                    </div>

                    <div>
                      <h4 className="font-heading text-base font-semibold text-slate-900">{exp.role}</h4>
                      <p className="font-mono text-xs text-sky-700 font-medium">{exp.organization}</p>
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-slate-200 font-sans text-xs text-slate-600">
                      {exp.highlights.slice(0, 2).map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Achievements & Quick Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-7 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-sky-700">
                <Award className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">HONORS & RECOGNITION</span>
              </div>

              <div className="space-y-4">
                {ACHIEVEMENTS.map((ach) => (
                  <div key={ach.title} className="space-y-1 pb-3 border-b border-slate-200/80 last:border-0 last:pb-0">
                    <h5 className="font-heading text-sm font-semibold text-slate-900">{ach.title}</h5>
                    <p className="font-mono text-[11px] text-slate-500">{ach.organization}</p>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">{ach.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Resume Link Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/70 to-indigo-50/40 p-6 shadow-sm space-y-3"
            >
              <span className="font-mono text-[10px] text-sky-800 uppercase tracking-widest block font-bold">
                CURRICULUM VITAE
              </span>
              <h4 className="font-heading text-base font-semibold text-slate-900">Looking for the complete academic profile?</h4>
              <p className="font-sans text-xs text-slate-700 leading-relaxed">
                Download my verified resume PDF with complete course listings, technical projects, and academic references.
              </p>
              <div className="pt-1">
                <Button href="/resume" variant="primary" size="md" withArrow>
                  VIEW FULL RESUME
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
