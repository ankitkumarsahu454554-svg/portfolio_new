import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Sparkles, Cpu, Layers, Activity } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Sparkles,
    code: '01/PHY',
    title: 'PHYSICALITY IN DIGITAL SPACE',
    text: 'Moving beyond flat vectors. Treating pixels as dynamic materials possessing mass, reflection, surface tension, and chromatic distortion.',
  },
  {
    icon: Cpu,
    code: '02/RTM',
    title: 'GPU-ACCELERATED ARCHITECTURE',
    text: 'Custom GLSL shaders and compute passes optimized for high refresh displays. Ensuring tactile immediacy with zero dropped frames.',
  },
  {
    icon: Layers,
    code: '03/TYP',
    title: 'EDITORIAL PRECISION & RIGOR',
    text: 'Typographic tension born from Swiss modernist layout systems paired with futuristic technical telemetry and responsive fluid scaling.',
  },
  {
    icon: Activity,
    code: '04/INT',
    title: 'INTENTIONAL INTERACTION',
    text: 'Subtle physics-driven feedback, magnetic damping, and bespoke micro-interactions designed to respect user focus rather than distract.',
  },
];

export function PhilosophyBanner() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/[0.08] bg-[#0A0C0F]/60">
      <Container size="wide">
        <SectionHeader
          index="02"
          tag="PRACTICE PHILOSOPHY"
          title="ENGINEERING PRINCIPLES"
          subtitle="CORE METHODOLOGY"
          description="Bridging the gap between fine visual craft and robust software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.code}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-300 hover:border-lime/40 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <span className="font-mono text-xs text-lime">{principle.code}</span>
                    <Icon className="h-4 w-4 text-gray-500 group-hover:text-lime transition-colors" />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-light tracking-tight text-white group-hover:text-lime transition-colors">
                    {principle.title}
                  </h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-gray-400">
                    {principle.text}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] font-mono text-[10px] text-gray-600">
                  STANDARD OPERATIONAL SPEC
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

