'use client';

import React from 'react';
import { TrajectorySection } from '@/components/sections/TrajectorySection';
import { FlightLogSection } from '@/components/sections/FlightLogSection';

export function ExperienceView() {
  return (
    <div className="pt-20 pb-20 bg-mc-bg text-mc-text min-h-screen">
      {/* 1. Academic & Industry Trajectory Timeline */}
      <TrajectorySection />

      {/* 2. Full Flight Log (Events, Competitions, Workshops) */}
      <FlightLogSection />
    </div>
  );
}
