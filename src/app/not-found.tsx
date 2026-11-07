import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Subtle Grid & Atmospheric Glows */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-lime/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" />

      <Container size="default" className="relative z-10 text-center">
        {/* Telemetry Header */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 font-mono text-xs text-lime mb-8">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          <span>FAULT CODE: 0x404 // COORD_NOT_FOUND</span>
        </div>

        {/* Glitch / Metallic 404 */}
        <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl font-light tracking-tighter text-white">
          4<span className="metallic-text italic">0</span>4
        </h1>

        <div className="mt-4 space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-light text-white">
            TOPOGRAPHICAL ANOMALY
          </h2>
          <p className="mx-auto max-w-lg font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
            The requested digital coordinate does not exist in the LIQUID / FORM archive or has been migrated to an alternate sector.
          </p>
        </div>

        {/* Diagnostic Metadata Panel */}
        <div className="mx-auto mt-8 max-w-md rounded-xl border border-white/10 bg-surface-50/70 p-4 font-mono text-xs text-left backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-gray-400">
            <span className="text-gray-500">SYSTEM STATUS</span>
            <span className="text-lime">METALLIC RUNTIME ACTIVE</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/[0.06] py-2 text-gray-400">
            <span className="text-gray-500">DISPATCH RESOLUTION</span>
            <span>REROUTE TO KNOWN SECTOR</span>
          </div>
          <div className="flex items-center justify-between pt-2 text-gray-400">
            <span className="text-gray-500">SUGGESTED PATH</span>
            <span className="text-electric">INDEX // 00</span>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg" withArrow>
            RETURN TO INDEX
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            BROWSE PORTFOLIO
          </Button>
          <Button href="/resume" variant="ghost" size="lg">
            VIEW RESUME
          </Button>
        </div>
      </Container>
    </div>
  );
}
