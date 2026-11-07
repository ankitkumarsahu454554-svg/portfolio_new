'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EDUCATION_DATA, EXPERIENCE_DATA, ACHIEVEMENTS, SITE_CONFIG } from '@/lib/constants';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ExperienceView() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#000000]">
      <Container size="wide">
        <SectionHeader
          index="03"
          tag="CAREER TRAJECTORY"
          title="Experience, Education & Achievements"
          subtitle="Chronological Record"
          description="Documented academic milestones at NIST University, real-world data science internships, and technical recognitions."
        />

        {/* Formal Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-8">
            <GraduationCap className="h-5 w-5 text-lime" />
            <h3 className="font-heading text-xl font-medium text-white uppercase tracking-wider">
              Formal Education
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-6 sm:p-8 backdrop-blur-sm space-y-4 hover:border-lime/40 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.06] pb-4">
              <div>
                <span className="font-mono text-xs text-lime font-semibold">UNDERGRADUATE DEGREE</span>
                <h4 className="font-heading text-xl font-medium text-white mt-1">
                  {EDUCATION_DATA[0].degree}
                </h4>
                <p className="font-mono text-sm text-cyan-400 mt-0.5">
                  {EDUCATION_DATA[0].institution} • {EDUCATION_DATA[0].location}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-block rounded-lg border border-lime/30 bg-lime/[0.08] px-3 py-1 font-mono text-sm font-semibold text-lime">
                  {EDUCATION_DATA[0].grade}
                </span>
                <p className="font-mono text-xs text-gray-400 mt-1.5 flex items-center gap-1 sm:justify-end">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{EDUCATION_DATA[0].duration}</span>
                </p>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
              {EDUCATION_DATA[0].description}
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">
                RELEVANT TECHNICAL COURSEWORK:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures and Algorithms',
                  'Machine Learning Foundations',
                  'Database Management Systems',
                  'Object-Oriented Programming (C++/Java)',
                  'Probability and Statistics',
                  'Linear Algebra for Machine Learning',
                  'Operating Systems Architecture',
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-white/10 bg-[#141414] px-3 py-1 font-mono text-xs text-gray-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Internships & Industry Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-8">
            <Briefcase className="h-5 w-5 text-cyan-400" />
            <h3 className="font-heading text-xl font-medium text-white uppercase tracking-wider">
              Internships & Technical Roles
            </h3>
          </div>

          <div className="space-y-6">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.organization}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-6 sm:p-8 backdrop-blur-sm space-y-4 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.06] pb-4">
                  <div>
                    <h4 className="font-heading text-lg sm:text-xl font-medium text-white">
                      {exp.role}
                    </h4>
                    <p className="font-mono text-sm text-lime mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gray-400">
                    <span className="rounded-md border border-white/10 bg-[#141414] px-2.5 py-1">
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                    KEY RESPONSIBILITIES & CONTRIBUTIONS:
                  </span>
                  <ul className="space-y-2 font-sans text-xs sm:text-sm text-gray-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competitions & Honors */}
        <div>
          <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-8">
            <Award className="h-5 w-5 text-lime" />
            <h3 className="font-heading text-xl font-medium text-white uppercase tracking-wider">
              Honors, Competitions & Recognition
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((ach, index) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-6 backdrop-blur-sm space-y-2.5 hover:border-lime/40 transition-all duration-300"
              >
                <span className="font-mono text-xs font-semibold text-lime uppercase">{ach.organization}</span>
                <h4 className="font-heading text-lg font-medium text-white">{ach.title}</h4>
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Resume Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm"
        >
          <div>
            <h4 className="font-heading text-xl font-medium text-white">Need a copy of my curriculum vitae for review?</h4>
            <p className="font-sans text-xs sm:text-sm text-gray-300 mt-1">
              Download the complete vector PDF formatted for university recruiters and talent acquisition teams.
            </p>
          </div>

          <Button
            href={SITE_CONFIG.resumePath}
            download="Ankit_Kumar_Sahu_Resume.pdf"
            variant="primary"
            size="lg"
          >
            <Download className="mr-2 h-4 w-4" />
            <span>DOWNLOAD RESUME PDF</span>
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}
