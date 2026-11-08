'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Award,
  Calendar,
  MapPin,
  FileText,
  ChevronRight,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

interface TrajectoryNode {
  id: string;
  type: 'education' | 'experience' | 'space';
  title: string;
  roleOrDegree: string;
  institution: string;
  location: string;
  period: string;
  badge: string;
  badgeType: 'cyan' | 'amber' | 'emerald';
  summary: string;
  bullets: string[];
  courseworkOrSkills?: string[];
}

const TRAJECTORY_DATA: TrajectoryNode[] = [
  {
    id: 'traj-1',
    type: 'experience',
    title: 'Data Science Internship',
    roleOrDegree: 'Data Science Intern',
    institution: 'Unified Mentor Pvt. Ltd',
    location: 'Remote, India',
    period: 'Oct 2026 — Dec 2026',
    badge: 'INDUSTRY INTERNSHIP',
    badgeType: 'cyan',
    summary:
      'Engineered machine learning pipelines, conducted statistical feature selection, and deployed analytical models on enterprise data workflows.',
    bullets: [
      'Developed end-to-end data cleaning and feature engineering pipelines in Python (Pandas, NumPy, Scikit-learn).',
      'Trained and evaluated supervised classification and regression models with cross-validation and hyperparameter tuning.',
      'Constructed exploratory data visualization dashboards delivering actionable feature importance metrics.',
    ],
    courseworkOrSkills: ['Python', 'Scikit-learn', 'Feature Engineering', 'EDA', 'Model Tuning'],
  },
  {
    id: 'traj-2',
    type: 'space',
    title: 'Space Systems & Payload Engineering',
    roleOrDegree: 'Space Technology & Systems Trainee',
    institution: 'India Space Lab',
    location: 'India',
    period: 'Jun 2026 — Jul 2026',
    badge: 'SPACE TECHNOLOGY TRACK',
    badgeType: 'amber',
    summary:
      'Hands-on aerospace engineering training focusing on CanSat micro-payload architecture, atmospheric sensor data acquisition, and live telemetry feeds.',
    bullets: [
      'Configured micro-payload sensor arrays for environmental monitoring (temperature, pressure, barometric altitude).',
      'Implemented real-time sensor data telemetry packets and radio downlink processing routines.',
      'Studied satellite GIS remote sensing datasets and satellite orbital mechanics basics.',
    ],
    courseworkOrSkills: ['CanSat Micro-Payload', 'Telemetry Processing', 'GIS Remote Sensing', 'Sensor Integration'],
  },
  {
    id: 'traj-3',
    type: 'education',
    title: 'Formal Computer Science Degree',
    roleOrDegree: 'B.Tech in Computer Science & Engineering (Data Science)',
    institution: 'NIST University',
    location: 'Berhampur, Odisha, India',
    period: '2024 — 2028',
    badge: 'CGPA: 8.75 / 10.0',
    badgeType: 'emerald',
    summary:
      'Rigorous academic grounding in computer science foundations, algorithm design, mathematical statistics, and machine intelligence architectures.',
    bullets: [
      'Maintained a top academic record with cumulative CGPA of 8.75/10 across core engineering disciplines.',
      'Completed extensive laboratory implementations in Object-Oriented Design, Operating Systems, and Database Management.',
      'Participated actively in collegiate developer hackathons, algorithmic coding competitions, and AI research tracks.',
    ],
    courseworkOrSkills: [
      'Data Structures & Algorithms',
      'Machine Learning Foundations',
      'Database Management (SQL/NoSQL)',
      'Operating Systems',
      'Probability & Statistics',
      'Linear Algebra for ML',
    ],
  },
];

export function TrajectorySection() {
  const [activeNode, setActiveNode] = useState<string>('traj-1');

  return (
    <section id="trajectory" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Anchor for legacy or experience links */}
      <div id="experience" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mc-cyan/30 bg-mc-cyan/5 text-mc-cyan font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-mc-cyan animate-ping" />
            <span>Operational Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-mc-text-primary">
            Academic & Industry <span className="font-serif italic font-normal text-mc-cyan">Trajectory</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-mc-text-secondary max-w-2xl">
            A chronological timeline connecting academic rigor at NIST University with practical engineering in data science and aerospace systems.
          </p>
        </div>

        {/* Action Link to Resume */}
        <div className="self-start md:self-auto">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-mc-surface border border-mc-cyan/40 hover:border-mc-cyan text-mc-text-primary hover:text-mc-cyan font-mono text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-mc-cyan/10"
          >
            <FileText className="w-4 h-4 text-mc-cyan" />
            <span>Open Vector Resume</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Timeline Grid */}
      <div className="relative">
        {/* Vertical line running through (desktop) */}
        <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-mc-cyan via-mc-amber/60 to-emerald-400/40" />

        <div className="space-y-12">
          {TRAJECTORY_DATA.map((node, index) => {
            const isSelected = activeNode === node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12"
              >
                {/* Timeline node icon */}
                <div className="hidden lg:flex shrink-0 w-16 h-16 rounded-2xl border border-mc-border/80 bg-mc-surface-raised items-center justify-center relative z-10 shadow-lg group">
                  {node.type === 'experience' && (
                    <Briefcase className="w-6 h-6 text-mc-cyan group-hover:scale-110 transition-transform" />
                  )}
                  {node.type === 'space' && (
                    <Rocket className="w-6 h-6 text-mc-amber group-hover:scale-110 transition-transform" />
                  )}
                  {node.type === 'education' && (
                    <GraduationCap className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                  )}
                  {/* Subtle pulsing indicator */}
                  <span
                    className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-mc-surface ${
                      node.badgeType === 'cyan'
                        ? 'bg-mc-cyan'
                        : node.badgeType === 'amber'
                        ? 'bg-mc-amber'
                        : 'bg-emerald-400'
                    }`}
                  />
                </div>

                {/* Content Panel */}
                <div
                  onClick={() => setActiveNode(node.id)}
                  className={`w-full p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-mc-cyan/50 bg-mc-surface shadow-xl shadow-mc-cyan/5'
                      : 'border-mc-border/80 bg-mc-surface/70 hover:bg-mc-surface-raised hover:border-mc-border'
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-mc-border/60 pb-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold border ${
                            node.badgeType === 'cyan'
                              ? 'border-mc-cyan/40 bg-mc-cyan/10 text-mc-cyan'
                              : node.badgeType === 'amber'
                              ? 'border-mc-amber/40 bg-mc-amber/10 text-mc-amber'
                              : 'border-emerald-400/40 bg-emerald-400/10 text-emerald-400'
                          }`}
                        >
                          {node.badge}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-mc-text-primary">
                        {node.roleOrDegree}
                      </h3>
                      <p className="text-sm font-mono text-mc-cyan font-medium mt-1">
                        {node.institution}
                      </p>
                    </div>

                    <div className="text-left sm:text-right font-mono text-xs text-mc-text-secondary space-y-1">
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-mc-text-muted" />
                        <span>{node.period}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5 text-mc-text-muted">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{node.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary paragraph */}
                  <p className="text-sm sm:text-base text-mc-text-secondary leading-relaxed mb-5">
                    {node.summary}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-2.5 mb-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-mc-text-muted block">
                      KEY DELIVERABLES & TECHNICAL SCOPE:
                    </span>
                    <ul className="space-y-2">
                      {node.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-xs sm:text-sm text-mc-text-secondary leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-mc-cyan mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coursework or Skills Tags */}
                  {node.courseworkOrSkills && (
                    <div className="pt-4 border-t border-mc-border/50">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-mc-text-muted block mb-2.5">
                        {node.type === 'education' ? 'CORE COURSEWORK:' : 'TECHNICAL FOCUS:'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {node.courseworkOrSkills.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-lg bg-mc-surface-raised border border-mc-border/80 font-mono text-xs text-mc-text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
