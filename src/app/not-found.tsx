import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#000000]">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container size="default" className="relative z-10 text-center">
        <span className="font-mono text-xs text-lime uppercase tracking-widest font-semibold block mb-4">
          ERROR 404
        </span>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-white">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
          The requested page coordinate could not be found or has been relocated within the portfolio.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Button href="/" variant="primary" size="lg" withArrow>
            RETURN TO HOME
          </Button>
          <Button href="/projects" variant="secondary" size="lg">
            VIEW PROJECTS
          </Button>
          <Button href="/resume" variant="ghost" size="lg">
            VIEW RESUME
          </Button>
        </div>
      </Container>
    </div>
  );
}
