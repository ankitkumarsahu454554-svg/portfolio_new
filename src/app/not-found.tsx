import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Rainbow Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FF3D81]/15 via-[#00B8D9]/15 to-[#8B5CF6]/15 rounded-full blur-[100px] -z-10" />

      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-pink-300 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/40 text-pink-900 dark:text-pink-300 font-mono text-xs uppercase tracking-wider mb-6 font-bold">
          <span className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
          <span>Error 404 • Coordinate Unresolved</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-mc-text leading-none">
          Page <span className="font-serif italic font-normal text-gradient-rainbow">Not Found</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-mc-text-secondary max-w-md mx-auto leading-relaxed">
          The requested trajectory coordinate does not exist or has been relocated within the portfolio telemetry.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md shadow-[#FF3D81]/25 hover:opacity-95"
            style={{ background: 'var(--gradient-rainbow)' }}
          >
            <Home className="w-4 h-4" />
            <span>Return to Mission Control</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-mc-border bg-white dark:bg-mc-surface text-mc-text hover:border-[#00B8D9] font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-xs"
          >
            <Compass className="w-4 h-4 text-[#00B8D9]" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
