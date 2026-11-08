'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useToast } from '@/components/ui/Toast';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import {
  Mail,
  Copy,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  ChevronUp,
  Sparkles,
  Check,
  AlertCircle,
  Loader2,
  PartyPopper,
} from 'lucide-react';

export function TelemetryContact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    fax_number: '', // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      showToast('Please fill in all required fields.', 'info');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setSubmitStatus('success');
        setStatusMessage(data.message || 'Dispatch successfully transmitted.');
        showToast('Message transmitted successfully!', 'success');
        setFormState({ name: '', email: '', subject: '', message: '', fax_number: '' });

        // Celebratory rainbow confetti burst
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF3D81', '#FF8A00', '#FFC700', '#00C48C', '#00B8D9', '#3D5AFE', '#8B5CF6'],
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to dispatch message. Please retry or email directly.');
        showToast('Failed to send dispatch.', 'info');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setStatusMessage('Network connectivity issue. Please reach out to ankitkumarsahu488526@gmail.com directly.');
      showToast('Network error occurred.', 'info');
    } finally {
      setIsSubmitting(false);
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
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-pink-300 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/40 text-pink-900 dark:text-pink-300 font-mono text-xs uppercase tracking-wider mb-6 font-bold">
            <span className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
            <span>Open Telemetry Link • Full Rainbow Sector</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-mc-text leading-[1.1] max-w-4xl">
            Let&apos;s engineer systems that push{' '}
            <span className="font-serif italic font-normal text-gradient-rainbow">
              computational
            </span>{' '}
            boundaries.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-mc-text-secondary max-w-2xl leading-relaxed">
            Interested in machine learning research, clinical predictive pipelines, or software engineering?
            Reach out directly or transmit a dispatch through the secure channel below.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Direct telemetry info & links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 sm:p-7 rounded-3xl border border-[#FF3D81]/30 bg-white dark:bg-mc-surface shadow-[0_12px_32px_-8px_rgba(255,61,129,0.18)] hover:border-[#FF3D81] transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-pink-800 dark:text-pink-300 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF3D81]" />
                  Direct Email Dispatch
                </span>
                <span className="font-mono text-[10px] text-mc-text-muted px-2 py-0.5 rounded-full bg-mc-surface-elevated border border-mc-border font-semibold">
                  PRIMARY
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 bg-mc-surface-elevated p-3.5 rounded-2xl border border-mc-border mb-4">
                <span className="font-mono text-xs sm:text-sm text-mc-text font-bold truncate">
                  {SITE_CONFIG.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-mc-surface border border-mc-border hover:border-[#FF3D81] text-xs font-mono text-mc-text hover:text-[#FF3D81] transition-all shrink-0 cursor-pointer shadow-xs font-semibold"
                  aria-label="Copy email address"
                  data-cursor="pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00C48C]" />
                      <span className="text-[#00C48C]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-mc-text-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF3D81] to-[#FF8A00] text-white font-mono text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shadow-[#FF3D81]/20 cursor-pointer"
                data-cursor="pointer"
              >
                <span>Compose Mail Client</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metadata Card */}
            <div className="p-6 rounded-3xl border border-mc-border bg-white dark:bg-mc-surface shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30">
                  <MapPin className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-mc-text-muted uppercase block font-bold">Location</span>
                  <span className="font-heading text-sm font-bold text-mc-text">{SITE_CONFIG.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-800 dark:text-cyan-400 border border-cyan-500/30">
                  <Phone className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-mc-text-muted uppercase block font-bold">Contact Line</span>
                  <span className="font-heading text-sm font-bold text-mc-text">{SITE_CONFIG.phone}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-mc-border/60 flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-mc-border bg-mc-surface-elevated hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-mc-text text-xs font-mono font-semibold transition-all shadow-xs"
                    data-cursor="open"
                  >
                    {link.label === 'GitHub' && <Github className="w-3.5 h-3.5" />}
                    {link.label === 'LinkedIn' && <Linkedin className="w-3.5 h-3.5" />}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Rainbow Focus Inputs */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl border border-mc-border bg-white dark:bg-mc-surface shadow-[0_16px_40px_-10px_rgba(74,71,104,0.12)]">
              <div className="flex items-center justify-between pb-5 border-b border-mc-border mb-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-mc-text">
                    Send Direct Dispatch
                  </h3>
                  <p className="font-mono text-xs text-mc-text-muted mt-0.5">
                    Transmits directly to {SITE_CONFIG.email}
                  </p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF3D81] to-[#8B5CF6] text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="py-12 text-center space-y-4 rounded-2xl bg-gradient-to-r from-[#00C48C]/10 via-[#00B8D9]/10 to-[#8B5CF6]/10 border border-[#00C48C]/30 p-8">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-mc-surface border border-[#00C48C] text-[#00C48C] flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-mc-text">
                    Dispatch Confirmed!
                  </h4>
                  <p className="text-sm text-mc-text-secondary max-w-sm mx-auto font-mono text-xs">
                    {statusMessage}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setStatusMessage('');
                    }}
                    className="mt-4 px-5 py-2.5 rounded-full bg-white dark:bg-mc-surface border border-mc-border font-mono text-xs text-[#00C48C] hover:border-[#00C48C] transition-all font-bold shadow-xs cursor-pointer"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Trap (Hidden from users) */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="fax_number"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formState.fax_number}
                      onChange={(e) => setFormState({ ...formState, fax_number: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. Jane Doe / Recruiter"
                        className="w-full px-4 py-2.5 rounded-2xl bg-mc-surface-elevated border border-mc-border text-sm font-sans text-mc-text placeholder-mc-text-muted focus:outline-none focus:border-[#FF3D81] focus:ring-2 focus:ring-[#FF3D81]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase font-bold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@organization.com"
                        className="w-full px-4 py-2.5 rounded-2xl bg-mc-surface-elevated border border-mc-border text-sm font-sans text-mc-text placeholder-mc-text-muted focus:outline-none focus:border-[#FF3D81] focus:ring-2 focus:ring-[#FF3D81]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase font-bold">
                      Topic / Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-2xl bg-mc-surface-elevated border border-mc-border text-sm font-sans text-mc-text placeholder-mc-text-muted focus:outline-none focus:border-[#00B8D9] focus:ring-2 focus:ring-[#00B8D9]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase font-bold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, team opportunity, or inquiry..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-mc-surface-elevated border border-mc-border text-sm font-sans text-mc-text placeholder-mc-text-muted focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all resize-none"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-500 font-mono text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF3D81]/25 hover:opacity-95 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    style={{ background: 'var(--gradient-rainbow)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
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
