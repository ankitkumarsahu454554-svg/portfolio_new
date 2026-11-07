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
import { Mail, Download, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ankit Kumar Sahu | Computer Science & Engineering (Data Science)',
  description:
    'Undergraduate Computer Science & Engineering student at NIST University specializing in Data Science, AI/ML, and Software Development. Seeking technical internship opportunities.',
};

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Technical Skills & Proficiencies */}
      <SkillsSection />

      {/* Featured Projects */}
      <FeaturedWorksPreview />

      {/* Education & Experience Highlights */}
      <ExperiencePreview />

      {/* Internship & Collaboration Call To Action */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.08] overflow-hidden">
        <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-15" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <Container size="wide" className="relative z-10 text-center">
          <Badge variant="lime" dot pulse className="mb-5">
            AVAILABLE FOR INTERNSHIPS
          </Badge>

          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl">
            Seeking Summer & Fall <br />
            <span className="text-cyan-400 font-light">Software Engineering & AI/ML Internships</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-gray-300 md:text-base leading-relaxed">
            I am eager to contribute strong machine learning foundations, data analytics expertise, and full-stack software development skills to innovative engineering teams and research labs.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              GET IN TOUCH
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
