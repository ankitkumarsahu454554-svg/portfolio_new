'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
        showToast('Message sent successfully!', 'success');
        setFormState({ name: '', email: '', subject: '', message: '', fax_number: '' });
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
    <footer id="contact" className="relative pt-24 pb-12 border-t border-mc-border/80 bg-mc-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Call to Action */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mc-cyan/30 bg-mc-cyan/5 text-mc-cyan font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-mc-cyan animate-pulse" />
            <span>Open Telemetry Link • Direct Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-mc-text-primary leading-[1.1] max-w-4xl">
            Let&apos;s engineer systems that push{' '}
            <span className="font-serif italic font-normal text-mc-cyan">computational</span> boundaries.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-mc-text-secondary max-w-2xl leading-relaxed">
            Interested in data science, predictive machine learning models, or collaborative software engineering?
            Reach out directly or transmit a dispatch through the channel below.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Direct telemetry info & links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 rounded-2xl border border-mc-cyan/40 bg-gradient-to-br from-mc-cyan/10 via-mc-surface to-mc-surface shadow-xl shadow-mc-cyan/5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-mc-cyan flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  Direct Email
                </span>
                <span className="font-mono text-[11px] text-mc-text-muted">FASTEST RESPONSE</span>
              </div>

              <p className="font-mono text-sm sm:text-base font-semibold text-mc-text-primary break-all mb-4">
                {SITE_CONFIG.email}
              </p>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-mc-cyan text-black font-mono text-xs font-bold tracking-wider uppercase hover:bg-mc-cyan/90 transition-all duration-200 shadow-md shadow-mc-cyan/20 active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Metadata Card */}
            <div className="p-6 rounded-2xl border border-mc-border/80 bg-mc-surface space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-mc-cyan mt-1 shrink-0" />
                <div>
                  <span className="font-mono text-xs text-mc-text-muted block">Direct Phone</span>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm text-mc-text-primary hover:text-mc-cyan transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-mc-cyan mt-1 shrink-0" />
                <div>
                  <span className="font-mono text-xs text-mc-text-muted block">Station / Location</span>
                  <span className="font-mono text-sm text-mc-text-primary">
                    {SITE_CONFIG.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social / Technical Networks */}
            <div className="p-6 rounded-2xl border border-mc-border/80 bg-mc-surface">
              <span className="font-mono text-xs uppercase tracking-wider text-mc-text-muted block mb-3">
                Verified Technical Profiles
              </span>
              <div className="space-y-2">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-mc-surface-raised border border-mc-border/60 hover:border-mc-cyan/50 hover:bg-mc-surface transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-mc-text-muted group-hover:text-mc-cyan transition-colors" />
                    <span className="font-mono text-xs font-medium text-mc-text-primary group-hover:text-mc-cyan transition-colors">
                      GitHub (ankitkumarsahu454554-svg)
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mc-text-muted group-hover:text-mc-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-mc-surface-raised border border-mc-border/60 hover:border-mc-cyan/50 hover:bg-mc-surface transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-mc-text-muted group-hover:text-mc-cyan transition-colors" />
                    <span className="font-mono text-xs font-medium text-mc-text-primary group-hover:text-mc-cyan transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mc-text-muted group-hover:text-mc-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-mc-border/80 bg-mc-surface shadow-lg">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-mc-border/60">
                <div>
                  <h3 className="font-display text-xl font-bold text-mc-text-primary">
                    Send Direct Dispatch
                  </h3>
                  <p className="font-mono text-xs text-mc-text-muted mt-0.5">
                    Transmits directly to {SITE_CONFIG.email}
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-mc-amber" />
              </div>

              {submitStatus === 'success' ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-mc-cyan/10 border border-mc-cyan/40 text-mc-cyan flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-mc-text-primary">
                    Dispatch Confirmed
                  </h4>
                  <p className="text-sm text-mc-text-secondary max-w-sm mx-auto font-mono text-xs">
                    {statusMessage}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setStatusMessage('');
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-mc-surface-raised border border-mc-border font-mono text-xs text-mc-cyan hover:underline"
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
                      <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. Jane Doe / Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-mc-surface-raised border border-mc-border/80 text-sm font-sans text-mc-text-primary placeholder-mc-text-muted/50 focus:outline-none focus:border-mc-cyan transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@organization.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-mc-surface-raised border border-mc-border/80 text-sm font-sans text-mc-text-primary placeholder-mc-text-muted/50 focus:outline-none focus:border-mc-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase">
                      Topic / Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-mc-surface-raised border border-mc-border/80 text-sm font-sans text-mc-text-primary placeholder-mc-text-muted/50 focus:outline-none focus:border-mc-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-mc-text-secondary mb-1.5 uppercase">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, team opportunity, or inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl bg-mc-surface-raised border border-mc-border/80 text-sm font-sans text-mc-text-primary placeholder-mc-text-muted/50 focus:outline-none focus:border-mc-cyan transition-colors resize-none"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 font-mono text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-mc-cyan text-black font-mono text-xs font-bold tracking-wider uppercase hover:bg-mc-cyan/90 transition-all duration-200 shadow-lg shadow-mc-cyan/20 active:scale-[0.99] disabled:opacity-50"
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
        <div className="pt-8 border-t border-mc-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mc-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Ankit Kumar Sahu © 2026 • NIST University</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js & TypeScript</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-mc-cyan hover:underline transition-all"
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
