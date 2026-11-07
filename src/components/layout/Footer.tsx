import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-slate-50/80 pt-16 pb-12 text-slate-600">
      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Identity & Background */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl font-semibold tracking-tight text-slate-900">
                Ankit Kumar Sahu
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
            </div>

            <p className="max-w-md font-sans text-sm leading-relaxed text-slate-600">
              Computer Science & Engineering student at <strong className="text-slate-900 font-medium">NIST University</strong> specializing in Data Science. Focusing on machine learning architectures, clinical healthcare AI models, and scalable backend systems.
            </p>

            <div className="pt-2 font-mono text-xs text-slate-600 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-sky-600" />
                <span>{SITE_CONFIG.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-indigo-600" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-700 hover:text-sky-600 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-sky-600" />
                <span>{SITE_CONFIG.phone}</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 lg:col-span-3 lg:col-start-7">
            <h4 className="font-mono text-xs tracking-widest text-slate-900 uppercase font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition-colors hover:text-sky-600 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Professional Profiles */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="font-mono text-xs tracking-widest text-slate-900 uppercase font-semibold">
              PROFILES & CONTACT
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-sky-600 font-medium"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-600" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <Link
                href={SITE_CONFIG.resumePath}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg border border-sky-300 bg-sky-50 px-3.5 py-1.5 font-mono text-xs text-sky-700 hover:bg-sky-100 transition-colors font-medium shadow-sm"
              >
                <span>Download Resume PDF</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 font-mono text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ankit Kumar Sahu. All rights reserved.</p>
          <p className="text-slate-500">NIST University • B-Tech CSE (Data Science)</p>
        </div>
      </Container>
    </footer>
  );
}
