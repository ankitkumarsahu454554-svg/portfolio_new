'use client';

import React from 'react';
import { TelemetryContact } from '@/components/sections/TelemetryContact';

export function ContactView() {
  return (
    <div className="pt-20 bg-mc-canvas text-mc-text-primary min-h-screen">
      <TelemetryContact />
    </div>
  );
}
