'use client';

import React from 'react';
import { TrajectorySection } from '@/components/sections/TrajectorySection';
import { PromptWarsEventSection } from '@/components/sections/PromptWarsEventSection';

export function ExperienceView() {
  return (
    <div className="pt-20 pb-20 bg-mc-bg text-mc-text min-h-screen">
      {/* 1. Academic & Industry Trajectory Timeline */}
      <TrajectorySection />

      {/* 2. Featured Events: Google Prompt Wars */}
      <PromptWarsEventSection />
    </div>
  );
}
