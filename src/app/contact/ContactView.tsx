'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { Check, Copy } from 'lucide-react';

export function ContactView() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Project Collaboration',
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
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#F8FAFC] bg-natural-light min-h-screen">
      <Container size="wide">
        <SectionHeader
          index="05"
          tag="GET IN TOUCH"
          title="Contact & Technical Inquiries"
          subtitle="Direct Communication"
          description="Interested in discussing technical collaborations, software architecture, machine learning research, or technical advisory? Please reach out directly."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h3 className="font-heading text-xl font-semibold text-slate-900">Send a Message</h3>
                <p className="font-sans text-xs text-slate-600 mt-1">
                  Fill out the form below or email me directly at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-sky-700 hover:underline font-mono font-medium">
                    {SITE_CONFIG.email}
                  </a>
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-sky-300 bg-sky-50 text-sky-700">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-slate-900">Message Dispatched</h3>
                  <p className="font-sans text-sm text-slate-700 max-w-md mx-auto">
                    Thank you, {formData.name}. Your note has been received. I will reply to{' '}
                    <span className="text-sky-700 font-mono font-semibold">{formData.email}</span> shortly.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        opportunityType: 'Project Collaboration',
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
                      <label htmlFor="name" className="text-slate-700 uppercase tracking-wider block font-bold">
                        YOUR NAME / ORGANIZATION <span className="text-sky-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Engineering Lead / Researcher"
                        className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-slate-700 uppercase tracking-wider block font-bold">
                        EMAIL ADDRESS <span className="text-sky-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="opportunityType" className="text-slate-700 uppercase tracking-wider block font-bold">
                      INQUIRY / DISCUSSION TYPE
                    </label>
                    <select
                      id="opportunityType"
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-3 text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans"
                    >
                      <option>Project Collaboration</option>
                      <option>Technical Architecture Inquiry</option>
                      <option>AI / Machine Learning Research</option>
                      <option>Open-Source Contribution</option>
                      <option>General Technical Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-slate-700 uppercase tracking-wider block font-bold">
                      MESSAGE DETAILS <span className="text-sky-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details regarding the technical challenge or topic..."
                      className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" withArrow>
                    SEND MESSAGE
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info & Profile Thumbnail */}
          <div className="space-y-6 lg:col-span-5">
            {/* Profile Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm">
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-2xs">
                <Image
                  src={SITE_CONFIG.profileImagePath}
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="56px"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-sm sm:text-base text-slate-900 font-semibold truncate">
                    {SITE_CONFIG.name}
                  </span>
                  <Badge variant="electric" dot pulse className="text-[9px] px-1.5 py-0.5">
                    AVAILABLE
                  </Badge>
                </div>
                <p className="font-mono text-xs text-sky-700 font-medium truncate">
                  B-Tech CSE (Data Science)
                </p>
                <p className="font-mono text-[11px] text-slate-500 truncate">
                  NIST University • CGPA: 8.75 / 10
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm space-y-2">
              <span className="font-mono text-xs text-sky-700 uppercase tracking-widest block font-bold">
                EMAIL ADDRESS
              </span>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-900">
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sky-700 truncate mr-2 hover:underline font-semibold">
                  {SITE_CONFIG.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-sky-600" />
                      <span className="text-[10px] text-sky-600 font-bold">COPIED</span>
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

            {/* Direct Phone Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm space-y-2">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block font-bold">
                TELEPHONE / WHATSAPP
              </span>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-900">
                <span className="text-slate-800 font-medium">{SITE_CONFIG.phone}</span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors flex-shrink-0"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-sky-600" />
                      <span className="text-[10px] text-sky-600 font-bold">COPIED</span>
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

            {/* Social Networks & Resume */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm space-y-3">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block font-bold">
                PROFESSIONAL PROFILES
              </span>
              <div className="space-y-2 font-mono text-xs">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-700 hover:text-sky-700 transition-colors"
                  >
                    <span className="font-medium">{s.label}</span>
                    <span className="text-slate-400">{s.handle}</span>
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
