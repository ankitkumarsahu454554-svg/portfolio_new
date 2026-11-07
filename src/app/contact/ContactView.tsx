'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { Check, Copy, Terminal } from 'lucide-react';

export function ContactView() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'AI/ML & Data Science Solution',
    timeline: 'Within 1-3 Months',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SITE_CONFIG.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container size="wide">
        <SectionHeader
          index="05"
          tag="COMMISSION & INQUIRIES"
          title="INITIATE COLLABORATION"
          subtitle="DIRECT DISPATCH"
          description="Available for AI/ML engineering, data science research, real-time creative technology, and full-stack software development."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-surface-50/60 p-6 sm:p-10 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-lime" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider">
                    DISPATCH TRANSMISSION PROTOCOL
                  </span>
                </div>
                <Badge variant="lime" dot pulse className="text-[10px]">
                  READY
                </Badge>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl text-white">TRANSMISSION RECEIVED</h3>
                  <p className="font-sans text-sm text-gray-400 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Your transmission has been dispatched to{' '}
                    <span className="text-lime">{SITE_CONFIG.email}</span>. Expected response within 24 hours.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        scope: 'AI/ML & Data Science Solution',
                        timeline: 'Within 1-3 Months',
                        message: '',
                      });
                    }}
                  >
                    SEND ANOTHER MESSAGE
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-400 uppercase tracking-wider block">
                        NAME / ENTITY <span className="text-lime">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Acme Research / Tech Corp"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-gray-600 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-400 uppercase tracking-wider block">
                        CONTACT EMAIL <span className="text-lime">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-gray-600 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="scope" className="text-gray-400 uppercase tracking-wider block">
                        PRIMARY SCOPE
                      </label>
                      <select
                        id="scope"
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#0C0E12] px-4 py-3 text-white focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                      >
                        <option>AI/ML & Data Science Solution</option>
                        <option>WebGL & Real-time 3D Experience</option>
                        <option>Full-Stack Web / Software Engineering</option>
                        <option>Healthcare / Disease Prediction AI</option>
                        <option>Technical Advisory & Audit</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-gray-400 uppercase tracking-wider block">
                        TIMELINE
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#0C0E12] px-4 py-3 text-white focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                      >
                        <option>Immediate / Q1</option>
                        <option>Within 1-3 Months</option>
                        <option>Q2 / Future Schedule</option>
                        <option>Exploratory / Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-400 uppercase tracking-wider block">
                      PROJECT PARAMETERS & DETAILS <span className="text-lime">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline the core objective, dataset requirements, creative aspirations, or technical requirements..."
                      className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-gray-600 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" withArrow>
                    DISPATCH INQUIRY
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info & Profile Thumbnail */}
          <div className="space-y-6 lg:col-span-5">
            {/* Small Profile Identity Thumbnail Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.12] bg-surface-50/70 p-5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 overflow-hidden rounded-xl border border-lime/40 bg-[#0C0E12] shadow-[0_0_15px_rgba(199,255,85,0.2)]">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt={SITE_CONFIG.curator}
                  fill
                  sizes="64px"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-sm sm:text-base text-white font-medium truncate">
                    {SITE_CONFIG.curator}
                  </span>
                  <Badge variant="lime" dot pulse className="text-[9px] px-1.5 py-0.5">
                    ONLINE
                  </Badge>
                </div>
                <p className="font-mono text-xs text-lime truncate">
                  AI/ML Enthusiast & Creative Developer
                </p>
                <p className="font-mono text-[11px] text-gray-400 truncate">
                  NIST University • {SITE_CONFIG.location}
                </p>
              </div>
            </div>

            {/* Quick Email Direct Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface-50/50 p-6 sm:p-7 backdrop-blur-sm space-y-3">
              <span className="font-mono text-xs text-lime uppercase tracking-widest block">
                DIRECT ELECTRONIC MAIL
              </span>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-xs text-white">
                <span className="text-lime truncate mr-2">{SITE_CONFIG.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  data-cursor="pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-lime" />
                      <span className="text-[10px] text-lime">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="text-[10px]">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone / Call Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface-50/50 p-6 sm:p-7 backdrop-blur-sm space-y-3">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
                DIRECT TELEPHONE / WHATSAPP
              </span>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-xs text-white">
                <span className="text-gray-200">{SITE_CONFIG.phone}</span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  data-cursor="pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-lime" />
                      <span className="text-[10px] text-lime">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="text-[10px]">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Resume Quick Access Button Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface-50/50 p-6 sm:p-7 backdrop-blur-sm flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block">
                  CURRICULUM VITAE
                </span>
                <p className="font-mono text-xs text-white mt-0.5">
                  Ankit_Kumar_Sahu_Resume.pdf
                </p>
              </div>
              <Button href="/resume" variant="ghost" size="sm" withArrow>
                VIEW RESUME
              </Button>
            </div>

            {/* Social Networks */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface-50/50 p-6 sm:p-7 backdrop-blur-sm space-y-3">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
                AUTHENTICATED NETWORKS
              </span>
              <div className="space-y-2 font-mono text-xs">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1.5 border-b border-white/[0.04] text-gray-400 hover:text-lime transition-colors"
                    data-cursor="pointer"
                  >
                    <span>{s.label}</span>
                    <span className="text-gray-500">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

