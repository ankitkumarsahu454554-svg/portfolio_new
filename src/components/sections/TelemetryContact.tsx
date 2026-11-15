'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/Toast';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import {
  Mail,
  Copy,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  ChevronUp,
  Check,
  Sparkles,
} from 'lucide-react';

export function TelemetryContact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      showToast(`Copied ${SITE_CONFIG.email} to clipboard!`, 'success');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast('Could not access clipboard.', 'info');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 border-t border-mc-border bg-white/50 dark:bg-mc-surface/50 overflow-hidden">
      {/* Background Rainbow Gradient Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FF3D81]/15 via-[#00B8D9]/15 to-[#8B5CF6]/15 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Call to Action with Rainbow Headline */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-pink-300 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/40 text-pink-900 dark:text-pink-300 font-mono text-xs uppercase tracking-wider mb-6 font-bold">
            <span className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
            <span>Open for Collaboration & Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-mc-text leading-[1.1]">
            Let&apos;s engineer systems that push{' '}
            <span className="font-serif italic font-normal text-gradient-rainbow">
              computational
            </span>{' '}
            boundaries.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-mc-text-secondary leading-relaxed">
            Interested in applied machine learning, clinical predictive pipelines, or software engineering?
            Reach out directly or connect across my platforms.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* 1. Primary Email Card */}
          <div className="p-7 rounded-3xl border border-[#FF3D81]/30 bg-white dark:bg-mc-surface shadow-[0_12px_32px_-8px_rgba(255,61,129,0.18)] hover:border-[#FF3D81] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-pink-800 dark:text-pink-300 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF3D81]" />
                  Direct Email
                </span>
                <span className="font-mono text-[10px] text-pink-700 dark:text-pink-300 px-2.5 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-800 font-bold">
                  PRIMARY
                </span>
              </div>

              <p className="font-heading text-lg font-bold text-mc-text mb-2 break-all">
                {SITE_CONFIG.email}
              </p>
              <p className="font-sans text-xs text-mc-text-secondary mb-6 leading-relaxed">
                Direct channel for software opportunities, ML research, or engineering discussions.
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-[#FF3D81] to-[#FF8A00] text-white font-mono text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shadow-[#FF3D81]/25 cursor-pointer"
              >
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-mc-surface-elevated border border-mc-border hover:border-[#FF3D81] text-xs font-mono text-mc-text hover:text-[#FF3D81] transition-all cursor-pointer font-bold"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00C48C]" />
                    <span className="text-[#00C48C]">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-mc-text-muted" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. Direct Channels (Phone & Location) */}
          <div className="p-7 rounded-3xl border border-mc-border bg-white dark:bg-mc-surface shadow-md hover:border-[#00B8D9] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-cyan-800 dark:text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00B8D9]" />
                  Direct Channels
                </span>
                <span className="font-mono text-[10px] text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-mc-surface-elevated p-3.5 rounded-2xl border border-mc-border">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-800 dark:text-cyan-400 border border-cyan-500/30 shrink-0">
                    <Phone className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-mc-text-muted uppercase block font-bold">Telephone</span>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="font-heading text-sm font-bold text-mc-text hover:text-[#00B8D9] transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-mc-surface-elevated p-3.5 rounded-2xl border border-mc-border">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                    <MapPin className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-mc-text-muted uppercase block font-bold">Campus / Location</span>
                    <span className="font-heading text-sm font-bold text-mc-text block">
                      {SITE_CONFIG.location}
                    </span>
                    <span className="font-mono text-[11px] text-mc-text-muted">
                      {SITE_CONFIG.university}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-mc-border">
              <span className="font-mono text-[11px] text-mc-text-secondary flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#00C48C]" />
                <span>Open for Software & ML Opportunities</span>
              </span>
            </div>
          </div>

          {/* 3. Developer & Professional Profiles */}
          <div className="p-7 rounded-3xl border border-mc-border bg-white dark:bg-mc-surface shadow-md hover:border-[#8B5CF6] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-violet-800 dark:text-violet-300 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#8B5CF6]" />
                  Profiles & Network
                </span>
                <span className="font-mono text-[10px] text-mc-text-muted px-2.5 py-0.5 rounded-full bg-mc-surface-elevated border border-mc-border font-semibold">
                  EXTERNAL
                </span>
              </div>

              <p className="font-sans text-xs text-mc-text-secondary mb-5">
                Explore source code, repositories, and professional background across developer channels:
              </p>

              <div className="space-y-3">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-mc-border bg-mc-surface-elevated hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-mc-text group-hover:text-[#8B5CF6] transition-colors" />
                    <div>
                      <span className="font-heading text-sm font-bold text-mc-text block leading-tight">GitHub</span>
                      <span className="font-mono text-[11px] text-mc-text-muted">ankitkumarsahu454554-svg</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-mc-text-muted group-hover:text-[#8B5CF6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-mc-border bg-mc-surface-elevated hover:border-[#00B8D9] hover:bg-[#00B8D9]/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-mc-text group-hover:text-[#00B8D9] transition-colors" />
                    <div>
                      <span className="font-heading text-sm font-bold text-mc-text block leading-tight">LinkedIn</span>
                      <span className="font-mono text-[11px] text-mc-text-muted">ankit-kumar-sahu</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-mc-text-muted group-hover:text-[#00B8D9] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-mc-border">
              <span className="font-mono text-[11px] text-mc-text-muted">
                Degree: B-Tech CSE (Data Science) • 8.75 CGPA
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon & Navigation Bar */}
        <div className="pt-8 border-t border-mc-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mc-text-muted">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00C48C]" />
            <span>Ankit Kumar Sahu © 2026 • NIST University (CGPA 8.75)</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <span>Built with Next.js & TypeScript</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#FF3D81] hover:underline transition-all cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
