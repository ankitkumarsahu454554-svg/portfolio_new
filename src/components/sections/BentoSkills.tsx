'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  SiPython,
  SiC,
  SiJavascript,
  SiPostgresql,
  SiTypescript,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiJupyter,
  SiGooglecolab,
  SiVercel,
  SiLinux,
  SiMysql,
  SiSqlite,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import {
  Brain,
  Code2,
  Database,
  Layers,
  Wrench,
  BarChart3,
  Sparkles,
  Cpu,
  Activity,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface SkillItem {
  name: string;
  tag: string;
  icon: React.ReactNode;
  brandColor?: string;
}

interface SkillCategory {
  id: string;
  tabKey: string;
  title: string;
  badge: string;
  accentColor: string;
  lightShadow: string;
  icon: React.ReactNode;
  colSpan: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    tabKey: 'AI & ML',
    title: 'AI & Machine Learning',
    badge: 'CORE RESEARCH & INFERENCE',
    accentColor: '#8B5CF6',
    lightShadow: 'rgba(139, 92, 246, 0.25)',
    icon: <Brain className="h-5 w-5 text-[#8B5CF6]" />,
    colSpan: 'lg:col-span-8 md:col-span-12',
    skills: [
      { name: 'PyTorch', tag: 'Deep Learning & Tensors', icon: <SiPytorch className="h-4 w-4 text-[#EE4C2C]" /> },
      { name: 'TensorFlow', tag: 'Neural Pipelines', icon: <SiTensorflow className="h-4 w-4 text-[#FF6F00]" /> },
      { name: 'Scikit-learn', tag: 'Supervised & Clustering', icon: <SiScikitlearn className="h-4 w-4 text-[#F7931E]" /> },
      { name: 'CNNs', tag: 'Computer Vision Architectures', icon: <Cpu className="h-4 w-4 text-[#8B5CF6]" /> },
      { name: 'NLP', tag: 'Semantic & Ontological Embeddings', icon: <Layers className="h-4 w-4 text-[#8B5CF6]" /> },
      { name: 'Feature Engineering', tag: 'Scaling, Imputation & Encoding', icon: <Activity className="h-4 w-4 text-[#8B5CF6]" /> },
      { name: 'Model Evaluation', tag: 'Top-K, MRR & ROC-AUC Benchmarks', icon: <Sparkles className="h-4 w-4 text-[#8B5CF6]" /> },
    ],
  },
  {
    id: 'languages',
    tabKey: 'Languages',
    title: 'Programming Languages',
    badge: 'SYNTAX & ALGORITHMS',
    accentColor: '#3D5AFE',
    lightShadow: 'rgba(61, 90, 254, 0.25)',
    icon: <Code2 className="h-5 w-5 text-[#3D5AFE]" />,
    colSpan: 'lg:col-span-4 md:col-span-6',
    skills: [
      { name: 'Python', tag: 'Primary Language & ML Core', icon: <SiPython className="h-4 w-4 text-[#3776AB]" /> },
      { name: 'Java', tag: 'OOP & Software Design', icon: <FaJava className="h-4 w-4 text-[#ED8B00]" /> },
      { name: 'C', tag: 'Systems & Low-Level Memory', icon: <SiC className="h-4 w-4 text-[#A8B9CC]" /> },
      { name: 'JavaScript', tag: 'Modern ES6+ Async Syntax', icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" /> },
      { name: 'TypeScript', tag: 'Typed Frontend & APIs', icon: <SiTypescript className="h-4 w-4 text-[#3178C6]" /> },
      { name: 'SQL', tag: 'Relational Schema & Queries', icon: <SiPostgresql className="h-4 w-4 text-[#4169E1]" /> },
    ],
  },
  {
    id: 'data-science',
    tabKey: 'Data Science',
    title: 'Data Science & Analytics',
    badge: 'NUMERICAL & EXPLORATORY EDA',
    accentColor: '#FF3D81',
    lightShadow: 'rgba(255, 61, 129, 0.25)',
    icon: <BarChart3 className="h-5 w-5 text-[#FF3D81]" />,
    colSpan: 'lg:col-span-6 md:col-span-6',
    skills: [
      { name: 'NumPy', tag: 'Vectorized N-D Array Operations', icon: <SiNumpy className="h-4 w-4 text-[#013243]" /> },
      { name: 'Pandas', tag: 'High-Throughput Tabular DataFrames', icon: <SiPandas className="h-4 w-4 text-[#150458]" /> },
      { name: 'OpenCV', tag: 'Computer Vision & Matrix Transforms', icon: <SiOpencv className="h-4 w-4 text-[#5C3EE8]" /> },
      { name: 'Matplotlib', tag: 'Statistical Distribution Plots', icon: <BarChart3 className="h-4 w-4 text-[#FF3D81]" /> },
      { name: 'Data Preprocessing', tag: 'Outlier Removal & Normalization', icon: <Activity className="h-4 w-4 text-[#FF3D81]" /> },
    ],
  },
  {
    id: 'frameworks',
    tabKey: 'Frameworks',
    title: 'Frameworks & Libraries',
    badge: 'FULL-STACK & BACKEND APIS',
    accentColor: '#FF8A00',
    lightShadow: 'rgba(255, 138, 0, 0.25)',
    icon: <Layers className="h-5 w-5 text-[#FF8A00]" />,
    colSpan: 'lg:col-span-6 md:col-span-6',
    skills: [
      { name: 'React', tag: 'Component UI & State Architecture', icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
      { name: 'Next.js', tag: 'App Router, SSR & Edge Performance', icon: <SiNextdotjs className="h-4 w-4 text-[#000000] dark:text-[#FFFFFF]" /> },
      { name: 'FastAPI', tag: 'Asynchronous Python Microservices', icon: <SiFastapi className="h-4 w-4 text-[#009688]" /> },
      { name: 'Node.js', tag: 'Server-Side Execution & Scripting', icon: <SiNodedotjs className="h-4 w-4 text-[#339933]" /> },
      { name: 'Tailwind CSS', tag: 'Design Tokens & Atomic Styling', icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" /> },
    ],
  },
  {
    id: 'databases',
    tabKey: 'Databases',
    title: 'Databases & Storage',
    badge: 'PERSISTENCE & MODELING',
    accentColor: '#00C48C',
    lightShadow: 'rgba(0, 196, 140, 0.25)',
    icon: <Database className="h-5 w-5 text-[#00C48C]" />,
    colSpan: 'lg:col-span-5 md:col-span-6',
    skills: [
      { name: 'PostgreSQL', tag: 'ACID Relational Storage Engine', icon: <SiPostgresql className="h-4 w-4 text-[#4169E1]" /> },
      { name: 'MySQL', tag: 'Relational Database Management', icon: <SiMysql className="h-4 w-4 text-[#4479A1]" /> },
      { name: 'SQLite', tag: 'Embedded Zero-Config Storage', icon: <SiSqlite className="h-4 w-4 text-[#003B57]" /> },
    ],
  },
  {
    id: 'tools',
    tabKey: 'Tools',
    title: 'Developer Tools & Platforms',
    badge: 'WORKFLOW & DEPLOYMENT',
    accentColor: '#00B8D9',
    lightShadow: 'rgba(0, 184, 217, 0.25)',
    icon: <Wrench className="h-5 w-5 text-[#00B8D9]" />,
    colSpan: 'lg:col-span-7 md:col-span-6',
    skills: [
      { name: 'Git', tag: 'Distributed Version Control', icon: <SiGit className="h-4 w-4 text-[#F05032]" /> },
      { name: 'GitHub', tag: 'Repositories & CI/CD Actions', icon: <SiGithub className="h-4 w-4 text-[#181717] dark:text-[#FFFFFF]" /> },
      { name: 'Jupyter', tag: 'Interactive Exploration & Analysis', icon: <SiJupyter className="h-4 w-4 text-[#F37626]" /> },
      { name: 'Google Colab', tag: 'Cloud GPU Model Training', icon: <SiGooglecolab className="h-4 w-4 text-[#F9AB00]" /> },
      { name: 'VS Code', tag: 'Extensible Development IDE', icon: <VscCode className="h-4 w-4 text-[#007ACC]" /> },
      { name: 'Vercel', tag: 'Serverless Edge Deployment', icon: <SiVercel className="h-4 w-4 text-[#000000] dark:text-[#FFFFFF]" /> },
      { name: 'Linux / Bash', tag: 'CLI Automation & POSIX Ops', icon: <SiLinux className="h-4 w-4 text-[#FCC624]" /> },
    ],
  },
];

// Dual-row marquee datasets
const MARQUEE_ROW_1 = [
  { name: 'Python', icon: <SiPython className="h-3.5 w-3.5 text-[#3776AB]" /> },
  { name: 'PyTorch', icon: <SiPytorch className="h-3.5 w-3.5 text-[#EE4C2C]" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="h-3.5 w-3.5 text-[#FF6F00]" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="h-3.5 w-3.5 text-[#F7931E]" /> },
  { name: 'NumPy', icon: <SiNumpy className="h-3.5 w-3.5 text-[#013243]" /> },
  { name: 'Pandas', icon: <SiPandas className="h-3.5 w-3.5 text-[#150458]" /> },
  { name: 'OpenCV', icon: <SiOpencv className="h-3.5 w-3.5 text-[#5C3EE8]" /> },
  { name: 'FastAPI', icon: <SiFastapi className="h-3.5 w-3.5 text-[#009688]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="h-3.5 w-3.5 text-[#4169E1]" /> },
  { name: 'Git', icon: <SiGit className="h-3.5 w-3.5 text-[#F05032]" /> },
  { name: 'Linux', icon: <SiLinux className="h-3.5 w-3.5 text-[#FCC624]" /> },
];

const MARQUEE_ROW_2 = [
  { name: 'React', icon: <SiReact className="h-3.5 w-3.5 text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="h-3.5 w-3.5" /> },
  { name: 'TypeScript', icon: <SiTypescript className="h-3.5 w-3.5 text-[#3178C6]" /> },
  { name: 'Java', icon: <FaJava className="h-3.5 w-3.5 text-[#ED8B00]" /> },
  { name: 'C Language', icon: <SiC className="h-3.5 w-3.5 text-[#A8B9CC]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-3.5 w-3.5 text-[#06B6D4]" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="h-3.5 w-3.5 text-[#339933]" /> },
  { name: 'Jupyter', icon: <SiJupyter className="h-3.5 w-3.5 text-[#F37626]" /> },
  { name: 'Google Colab', icon: <SiGooglecolab className="h-3.5 w-3.5 text-[#F9AB00]" /> },
  { name: 'Vercel', icon: <SiVercel className="h-3.5 w-3.5" /> },
  { name: 'MySQL', icon: <SiMysql className="h-3.5 w-3.5 text-[#4479A1]" /> },
];

const FILTER_TABS = [
  'All',
  'Languages',
  'AI & ML',
  'Data Science',
  'Frameworks',
  'Databases',
  'Tools',
];

export function BentoSkills() {
  const [activeTab, setActiveTab] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Filter categories
  const displayedCategories =
    activeTab === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.tabKey === activeTab);

  return (
    <section id="skills" className="relative py-24 md:py-36 border-t border-mc-border overflow-hidden">
      {/* Background Soft Glow Tint */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#8B5CF6]/10 via-[#3D5AFE]/10 to-[#FF3D81]/10 rounded-full blur-[100px] -z-10" />

      <Container size="wide">
        <SectionHeader
          index="02"
          tag="SKILLS // TECHNICAL ARSENAL"
          title="Technical Proficiencies & Systems Toolkit"
          subtitle="Engineering Capabilities"
          description="An interactive showcase of deep learning frameworks, data processing engines, languages, and production infrastructure tools with real brand ecosystems."
        />

        {/* Dual-Row Infinite Marquee Ticker */}
        <div className="relative mb-12 w-full overflow-hidden border-y border-mc-border/80 bg-mc-surface/60 py-3 backdrop-blur-md rounded-2xl shadow-sm">
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mc-bg to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mc-bg to-transparent z-10" />

          {/* Row 1: Scrolling Left */}
          <div className="flex w-max animate-marquee gap-3 mb-2.5 hover:[animation-play-state:paused]">
            {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((item, idx) => (
              <span
                key={`m1-${item.name}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full border border-mc-border/70 bg-mc-surface-elevated px-3.5 py-1.5 font-mono text-xs text-mc-text-secondary select-none transition-all hover:border-[#8B5CF6] hover:text-[#8B5CF6] shadow-xs cursor-default"
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </span>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-max animate-marquee-reverse gap-3 hover:[animation-play-state:paused]">
            {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((item, idx) => (
              <span
                key={`m2-${item.name}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full border border-mc-border/70 bg-mc-surface-elevated px-3.5 py-1.5 font-mono text-xs text-mc-text-secondary select-none transition-all hover:border-[#00C48C] hover:text-[#00C48C] shadow-xs cursor-default"
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs with Animated Pill */}
        <div className="mb-10 flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-mc-border bg-mc-surface/80 backdrop-blur-md shadow-md">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 font-mono text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-white' : 'text-mc-text-secondary hover:text-mc-text'
                  }`}
                  data-cursor="pointer"
                >
                  <span className="relative z-10">{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="skills-tab-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF3D81] via-[#FF8A00] to-[#8B5CF6] shadow-sm"
                      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Bento Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((cat, idx) => {
              const isAIMLHero = cat.id === 'ai-ml';

              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col justify-between rounded-3xl border border-mc-border bg-mc-surface p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${cat.colSpan}`}
                  style={{
                    boxShadow: `0 12px 30px -10px ${cat.lightShadow}`,
                  }}
                  data-cursor="view"
                >
                  {/* Subtle Accent Glow Corner */}
                  <div
                    className="pointer-events-none absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl opacity-15 transition-opacity group-hover:opacity-30"
                    style={{ backgroundColor: cat.accentColor }}
                  />

                  <div>
                    {/* Header with Icon Tile & Badge */}
                    <div className="flex items-start justify-between border-b border-mc-border/60 pb-5 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 shadow-sm"
                          style={{
                            borderColor: `${cat.accentColor}40`,
                            backgroundColor: `${cat.accentColor}12`,
                          }}
                        >
                          {cat.icon}
                        </div>
                        <div>
                          <span
                            className="font-mono text-[10px] font-bold tracking-wider uppercase block"
                            style={{ color: cat.accentColor }}
                          >
                            {cat.badge}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-mc-text group-hover:text-mc-cyan transition-colors">
                            {cat.title}
                          </h3>
                        </div>
                      </div>

                      <span className="font-mono text-[11px] text-mc-text-muted px-2.5 py-1 rounded-full border border-mc-border bg-mc-surface-elevated font-semibold">
                        {cat.skills.length} Items
                      </span>
                    </div>

                    {/* HERO VISUAL CENTERPIECE FOR AI & ML CATEGORY */}
                    {isAIMLHero && (
                      <div className="mb-6 rounded-2xl border border-[#8B5CF6]/30 bg-gradient-to-r from-[#8B5CF6]/8 via-mc-surface-elevated to-[#FF3D81]/8 p-4 sm:p-5 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-3 border-b border-mc-border/60 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8B5CF6]">
                              Neural Pipeline & Representation Architecture
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-mc-text-muted hidden sm:inline">
                            PYTORCH CORE
                          </span>
                        </div>

                        {/* Interactive Flow Diagram */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-1">
                          <div className="rounded-xl border border-mc-border/70 bg-mc-surface p-2.5">
                            <span className="font-mono text-[9px] text-mc-text-muted uppercase block font-semibold">Stage 01</span>
                            <span className="font-heading text-xs font-bold text-mc-text">Input Cohort</span>
                            <span className="font-mono text-[10px] text-[#3D5AFE] block mt-0.5">Phenotypic Vectors</span>
                          </div>

                          <div className="rounded-xl border border-mc-border/70 bg-mc-surface p-2.5">
                            <span className="font-mono text-[9px] text-mc-text-muted uppercase block font-semibold">Stage 02</span>
                            <span className="font-heading text-xs font-bold text-mc-text">HPO Embedding</span>
                            <span className="font-mono text-[10px] text-[#8B5CF6] block mt-0.5">Distance Metrics</span>
                          </div>

                          <div className="rounded-xl border border-mc-border/70 bg-mc-surface p-2.5">
                            <span className="font-mono text-[9px] text-mc-text-muted uppercase block font-semibold">Stage 03</span>
                            <span className="font-heading text-xs font-bold text-mc-text">Neural Ranker</span>
                            <span className="font-mono text-[10px] text-[#FF3D81] block mt-0.5">PyTorch Network</span>
                          </div>

                          <div className="rounded-xl border border-mc-border/70 bg-mc-surface p-2.5">
                            <span className="font-mono text-[9px] text-mc-text-muted uppercase block font-semibold">Stage 04</span>
                            <span className="font-heading text-xs font-bold text-mc-text">Evaluation</span>
                            <span className="font-mono text-[10px] text-[#00C48C] block mt-0.5">Top-K & MRR</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interactive Skills Chips with Lift, 3D Depth & Tooltip */}
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {cat.skills.map((skill) => {
                        const isHovered = hoveredSkill === skill.name;

                        return (
                          <div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="relative group/chip"
                          >
                            <motion.button
                              whileHover={{ y: -3, scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex items-center gap-2 rounded-xl border border-mc-border/80 bg-mc-surface-elevated px-3.5 py-2 font-mono text-xs text-mc-text font-medium transition-all duration-200 hover:shadow-md cursor-default"
                              style={{
                                borderColor: isHovered ? cat.accentColor : undefined,
                                backgroundColor: isHovered ? `${cat.accentColor}12` : undefined,
                              }}
                            >
                              <span className="flex items-center justify-center">{skill.icon}</span>
                              <span className="font-semibold">{skill.name}</span>
                            </motion.button>

                            {/* Micro-Stat Tooltip on Hover */}
                            <AnimatePresence>
                              {isHovered && (
                                <motion.div
                                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                  transition={{ duration: 0.15 }}
                                  className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-max max-w-[220px] rounded-lg border border-mc-border bg-mc-surface px-3 py-1.5 shadow-xl backdrop-blur-md"
                                >
                                  <p className="font-mono text-[10px] font-semibold text-mc-text leading-tight">
                                    {skill.tag}
                                  </p>
                                  <div
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-r border-b border-mc-border bg-mc-surface"
                                  />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="mt-6 pt-4 border-t border-mc-border/50 flex items-center justify-between text-mc-text-muted font-mono text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: cat.accentColor }}
                      />
                      <span>Verified Academic & Project Stack</span>
                    </span>
                    <span className="font-bold text-xs" style={{ color: cat.accentColor }}>
                      ● Active
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
