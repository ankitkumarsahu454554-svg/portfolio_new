'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants';
import { ArrowUpRight, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

export function Footer() {
  const pathname = usePathname();

  // If on homepage or contact page, TelemetryContact already provides the full terminal footer
  if (pathname === '/' || pathname === '/contact') {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-mc-border bg-white/80 dark:bg-mc-surface/80 pt-16 pb-12 text-mc-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-mc-border">
          {/* Identity & Background */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl font-bold tracking-tight text-mc-text">
                Ankit Kumar Sahu
              </span>
              <span className="h-2 w-2 rounded-full bg-[#00C48C] animate-pulse" />
            </div>

            <p className="max-w-md font-sans text-sm leading-relaxed text-mc-text-secondary">
              Computer Science & Engineering (Data Science) undergraduate at{' '}
              <strong className="text-mc-text font-bold">NIST University</strong>. Specializing in machine learning architectures, clinical healthcare AI models, and scalable systems.
            </p>

            <div className="pt-2 font-mono text-xs text-mc-text-muted space-y-1.5 font-medium">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#00C48C]" />
                <span>{SITE_CONFIG.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#FF3D81]" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-mc-text hover:text-[#FF3D81] transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#00B8D9]" />
                <span>{SITE_CONFIG.phone}</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 lg:col-span-3 lg:col-start-7">
            <h4 className="font-mono text-xs tracking-widest text-mc-text uppercase font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-mc-text-secondary transition-colors hover:text-[#FF3D81] font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Professional Profiles */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="font-mono text-xs tracking-widest text-mc-text uppercase font-bold">
              PROFILES & CONNECT
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-mc-text-secondary transition-colors hover:text-[#8B5CF6] font-medium"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-mc-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#8B5CF6]" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <Link
                href={SITE_CONFIG.resumePath}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#FF3D81]/40 bg-gradient-to-r from-[#FF3D81]/15 to-[#8B5CF6]/15 px-4 py-2 font-mono text-xs text-[#FF3D81] dark:text-[#FF8A00] hover:bg-[#FF3D81] hover:text-white transition-all font-bold shadow-xs"
              >
                <span>Download Resume PDF</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 font-mono text-xs text-mc-text-muted sm:flex-row sm:items-center">
          <p>© 2026 Ankit Kumar Sahu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>NIST University • B-Tech CSE (Data Science) • CGPA 8.75</p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#FF3D81] hover:underline font-bold cursor-pointer"
            >
              <span>Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
