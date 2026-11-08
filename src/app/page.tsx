import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { PinnedAboutSection } from '@/components/sections/PinnedAboutSection';
import { PhotoReelStrip } from '@/components/sections/PhotoReelStrip';
import { BentoSkills } from '@/components/sections/BentoSkills';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { FlightLogSection } from '@/components/sections/FlightLogSection';
import { TrajectorySection } from '@/components/sections/TrajectorySection';
import { TelemetryContact } from '@/components/sections/TelemetryContact';

export const metadata: Metadata = {
  title: 'Ankit Kumar Sahu | Data Science & Machine Learning Portfolio',
  description:
    'Undergraduate Computer Science & Engineering (Data Science) student at NIST University (CGPA 8.75/10). Specializing in AI/ML architectures, predictive healthcare diagnostics, and systems engineering.',
  keywords: [
    'Ankit Kumar Sahu',
    'Data Science Portfolio',
    'Machine Learning Engineer',
    'NIST University',
    'Rare Disease Prediction AI',
    'CanSat Telemetry',
    'Unified Mentor',
    'Prompt Wars Finalist',
  ],
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-mc-canvas text-mc-text-primary overflow-x-hidden selection:bg-mc-cyan selection:text-black">
      {/* 1. Hero & Constellation Field */}
      <Hero />

      {/* 2. Pinned 3-Chapter Storytelling About Dossier */}
      <PinnedAboutSection />

      {/* 2.5 Visual Photo-Reel Filmstrip */}
      <PhotoReelStrip />

      {/* 3. Bento Grid Skills & Infinite Marquee */}
      <BentoSkills />

      {/* 4. Projects Showcase with Shared-Element Case Study Modals */}
      <ProjectsShowcase />

      {/* 5. Flight Log (Competitions, Events, Hackathons & Workshops) */}
      <FlightLogSection />

      {/* 6. Academic & Industry Trajectory Timeline */}
      <TrajectorySection />

      {/* 7. Telemetry Contact, Email Quick-Copy & Footer */}
      <TelemetryContact />
    </main>
  );
}
