import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#000000] pt-16 pb-12 text-gray-400">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-10" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Identity & Background */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl font-semibold tracking-tight text-white">
                Ankit Kumar Sahu
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </div>

            <p className="max-w-md font-sans text-sm leading-relaxed text-gray-300">
              Computer Science & Engineering student at <strong className="text-white">NIST University</strong> specializing in Data Science. Seeking technical internships in Software Engineering, Machine Learning, and Data Science.
            </p>

            <div className="pt-2 font-mono text-xs text-gray-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-lime" />
                <span>{SITE_CONFIG.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-300 hover:text-lime transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-lime" />
                <span>{SITE_CONFIG.phone}</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 lg:col-span-3 lg:col-start-7">
            <h4 className="font-mono text-xs tracking-widest text-white uppercase font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-lime"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Professional Profiles */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="font-mono text-xs tracking-widest text-white uppercase font-semibold">
              PROFILES & CONTACT
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <Link
                href={SITE_CONFIG.resumePath}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg border border-lime/30 bg-lime/[0.05] px-3 py-1.5 font-mono text-xs text-lime hover:bg-lime/10 transition-colors"
              >
                <span>Download Resume PDF</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 font-mono text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ankit Kumar Sahu. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>NIST University • B-Tech CSE (Data Science)</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
