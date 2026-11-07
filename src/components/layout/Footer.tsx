import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#060709] pt-20 pb-12 text-gray-400">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-10" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand & Statement */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                LIQUID <span className="text-lime">/</span> FORM
              </span>
              <Badge variant="outline" className="text-[10px]">
                STUDIO v2.6
              </Badge>
            </div>

            <p className="max-w-md font-sans text-sm leading-relaxed text-gray-400">
              A creative technology practice operating at the intersection of real-time 3D,
              computational aesthetics, and high-performance digital systems.
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                SYSTEM TELEMETRY
              </span>
              <div className="mt-2 space-y-1 font-mono text-xs text-gray-400">
                <p>COORDINATES: {SITE_CONFIG.coordinates}</p>
                <p>TIME REGION: {SITE_CONFIG.location}</p>
                <p>STATUS: {SITE_CONFIG.status}</p>
              </div>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="space-y-4 lg:col-span-3 lg:col-start-7">
            <h4 className="font-mono text-xs tracking-widest text-white uppercase">
              INDEX DIRECTORY
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-gray-400 transition-colors hover:text-lime"
                    data-cursor="pointer"
                  >
                    <span>{item.title}</span>
                    <span className="text-gray-600">/{item.index}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Networks & Inquiries */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="font-mono text-xs tracking-widest text-white uppercase">
              DIRECT CHANNELS
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-gray-400 transition-colors hover:text-white"
                    data-cursor="pointer"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-gray-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <span className="font-mono text-[11px] text-gray-500">ELECTRONIC MAIL</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="mt-1 block font-mono text-xs text-lime hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 font-mono text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} LIQUID / FORM — {SITE_CONFIG.curator}. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            <span>ENGINEERED WITH NEXT.JS, THREE.JS & LENIS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

