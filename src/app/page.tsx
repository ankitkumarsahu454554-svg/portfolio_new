import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { SkillsSection } from '@/components/home/SkillsSection';
import { FeaturedWorksPreview } from '@/components/home/FeaturedWorksPreview';
import { ExperiencePreview } from '@/components/home/ExperiencePreview';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/lib/constants';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ankit Kumar Sahu | Computer Science & Engineering (Data Science)',
  description:
    'Undergraduate Computer Science & Engineering student at NIST University specializing in Data Science, AI/ML, and Systems Engineering.',
};

export default function HomePage() {
  return (
    <div className="relative bg-[#F8FAFC]">
      {/* Hero Section */}
      <Hero />

      {/* Technical Skills & Proficiencies */}
      <SkillsSection />

      {/* Featured Projects */}
      <FeaturedWorksPreview />

      {/* Education & Experience Highlights */}
      <ExperiencePreview />

      {/* Technical Collaboration Call To Action */}
      <section className="relative py-20 md:py-28 border-t border-slate-200 overflow-hidden bg-[#F8FAFC] bg-natural-light">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-sky-200/40 blur-[140px]" />

        <Container size="wide" className="relative z-10 text-center">
          <Badge variant="electric" dot pulse className="mb-5 shadow-sm">
            OPEN FOR TECHNICAL COLLABORATION
          </Badge>

          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Engineering High-Impact Systems <br />
            <span className="text-sky-700 font-light">& Applied Machine Learning</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-slate-700 md:text-base leading-relaxed">
            Interested in discussing machine learning architectures, healthcare data pipelines, software systems, or technical research? Let&apos;s connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              START A CONVERSATION
            </Button>
            <Button
              href={SITE_CONFIG.resumePath}
              download="Ankit_Kumar_Sahu_Resume.pdf"
              variant="secondary"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>DOWNLOAD RESUME</span>
            </Button>
            <Button href="/projects" variant="ghost" size="lg">
              VIEW ALL PROJECTS
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
