import React from 'react';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Experiment } from '@/types';

export const metadata: Metadata = {
  title: 'Experiments & Lab Archive',
  description:
    'Exploratory procedural algorithms, shader studies, WebGL prototypes, and real-time interaction experiments by Ankit Kumar Sahu.',
};

const EXPERIMENTS: Experiment[] = [
  {
    id: 'EXP-09',
    title: 'CHROMATIC REFRACTION FIELD',
    medium: 'GLSL Fragment Shader',
    date: '2025.10',
    tech: ['WEBGL2', 'DISPERSION', 'CAUSTICS'],
    status: 'ONLINE',
    description:
      'Simulating spectral chromatic aberration through double-refracted liquid crystal lenses at interactive frame rates.',
  },
  {
    id: 'EXP-08',
    title: 'ORGANIC TISSUE DISPLACEMENT',
    medium: 'Vertex Displacement Mesh',
    date: '2025.07',
    tech: ['THREE.JS', 'SIMPLEX NOISE', 'PBR'],
    status: 'ONLINE',
    description:
      'Harmonic curl noise displacing high-subdivision mesh topologies in response to pointer velocity and scroll acceleration.',
  },
  {
    id: 'EXP-07',
    title: 'AUDIO-REACTIVE SPECTROGRAM',
    medium: 'Web Audio FFT + Instanced Mesh',
    date: '2025.03',
    tech: ['WEB AUDIO API', 'INSTANCING', 'GPU BUFFERS'],
    status: 'ONLINE',
    description:
      'Transforming polyphonic audio frequencies into real-time 3D topographical contours and dynamic neon wireframes.',
  },
  {
    id: 'EXP-06',
    title: 'SUB-SURFACE METALLIC FLUID',
    medium: 'Raymarching Signed Distance Fields',
    date: '2024.11',
    tech: ['RAYMARCHING', 'SDF', 'GLSL SHADERS'],
    status: 'STAGING',
    description:
      'Mathematical blob merging with iridescent Fresnel reflections rendered inside a single screen-space quad.',
  },
  {
    id: 'EXP-05',
    title: 'KINETIC GLYPH GENERATOR',
    medium: 'Parametric Typography Engine',
    date: '2024.08',
    tech: ['OPENTYPE.JS', 'SVG PATHS', 'GSAP'],
    status: 'ARCHIVED',
    description:
      'Interpolating letterform bezier curves along fluid path vectors according to mathematical physics constraints.',
  },
  {
    id: 'EXP-04',
    title: 'SPATIAL DEPTH MAP PARALLAX',
    medium: 'Depth Estimation + 3D Displace',
    date: '2024.04',
    tech: ['AI DEPTH MAP', 'CANVAS', 'POINTER LOCK'],
    status: 'ARCHIVED',
    description:
      'Synthesizing multi-plane perspective depth out of flat editorial photography through depth displacement mapping.',
  },
];

export default function ExperimentsPage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container size="wide">
        <SectionHeader
          index="04"
          tag="RESEARCH & DEVELOPMENT"
          title="LAB / CODE EXPERIMENTS"
          subtitle="EXPLORATORY PROTOTYPES"
          description="A sandbox of procedural algorithms, shader studies, and interaction experiments examining new forms of digital expression."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIMENTS.map((exp) => (
            <div
              key={exp.id}
              className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-surface-50/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-lime/40 hover:bg-surface-100/60"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-lime">{exp.id}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-gray-500">{exp.date}</span>
                    <Badge
                      variant={
                        exp.status === 'ONLINE'
                          ? 'lime'
                          : exp.status === 'STAGING'
                          ? 'electric'
                          : 'outline'
                      }
                      className="text-[9px] px-2 py-0.5"
                    >
                      {exp.status}
                    </Badge>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wider block">
                    {exp.medium}
                  </span>
                  <h3 className="font-heading text-lg font-light text-white group-hover:text-lime transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[9px] text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-gray-400 group-hover:border-lime group-hover:text-lime transition-colors">
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

