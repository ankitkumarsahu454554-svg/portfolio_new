import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedWorksPreview } from '@/components/home/FeaturedWorksPreview';
import { PhilosophyBanner } from '@/components/home/PhilosophyBanner';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero with 3D Scene */}
      <Hero />

      {/* Featured Works Showcase */}
      <FeaturedWorksPreview />

      {/* Philosophy & Principles */}
      <PhilosophyBanner />

      {/* Direct Call to Action Banner */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.08] overflow-hidden">
        <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-15" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-lime/10 blur-[140px]" />

        <Container size="wide" className="relative z-10 text-center">
          <Badge variant="lime" dot pulse className="mb-6">
            CURRENTLY ACCEPTING NEW COMMISSIONS
          </Badge>

          <h2 className="mx-auto max-w-4xl font-heading text-4xl font-light tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            HAVE A PROJECT REQUIRING <br />
            <span className="italic metallic-text">EXCEPTIONAL EXECUTION?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-sans text-sm text-gray-400 md:text-base leading-relaxed">
            Collaborating with leading studios, agencies, and innovative founders to build
            unforgettable digital experiences, real-time shaders, and web applications.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              START A CONVERSATION
            </Button>
            <Button href="/resume" variant="secondary" size="lg">
              VIEW RESUME
            </Button>
            <Button href="/work" variant="ghost" size="lg">
              BROWSE ARCHIVE
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

