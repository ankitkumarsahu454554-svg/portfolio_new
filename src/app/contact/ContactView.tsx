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
    opportunityType: 'Internship Opportunity',
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
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#000000]">
      <Container size="wide">
        <SectionHeader
          index="05"
          tag="GET IN TOUCH"
          title="Contact & Technical Opportunities"
          subtitle="Direct Communication"
          description="Interested in discussing software engineering internships, AI/ML research collaborations, or technical projects? Please reach out directly."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Professional Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-6 sm:p-10 backdrop-blur-sm">
              <div className="border-b border-white/[0.08] pb-4 mb-6">
                <h3 className="font-heading text-xl font-medium text-white">Send a Message</h3>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  Fill out the form below or email me directly at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-lime hover:underline font-mono">
                    {SITE_CONFIG.email}
                  </a>
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl text-white">Message Dispatched</h3>
                  <p className="font-sans text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Your note has been received. I will reply to{' '}
                    <span className="text-lime font-mono">{formData.email}</span> shortly.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        opportunityType: 'Internship Opportunity',
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
                      <label htmlFor="name" className="text-gray-300 uppercase tracking-wider block font-semibold">
                        YOUR NAME / ORGANIZATION <span className="text-lime">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Technical Recruiter / Researcher"
                        className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-300 uppercase tracking-wider block font-semibold">
                        EMAIL ADDRESS <span className="text-lime">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="opportunityType" className="text-gray-300 uppercase tracking-wider block font-semibold">
                      INQUIRY / OPPORTUNITY TYPE
                    </label>
                    <select
                      id="opportunityType"
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-sans"
                    >
                      <option>Software Engineering Internship</option>
                      <option>AI / Machine Learning Internship</option>
                      <option>Data Science Internship</option>
                      <option>Research Collaboration / Academic Project</option>
                      <option>General Technical Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-300 uppercase tracking-wider block font-semibold">
                      MESSAGE DETAILS <span className="text-lime">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about the role, technical scope, or discussion topic..."
                      className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-sans"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" withArrow>
                    SEND MESSAGE
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info & Profile Thumbnail (slightly reduced size: h-14 w-14) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Authentic Profile Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.12] bg-[#0D0D0D] p-4 sm:p-5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-cyan-400/40 bg-[#000000]">
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
                  <span className="font-heading text-sm sm:text-base text-white font-medium truncate">
                    {SITE_CONFIG.name}
                  </span>
                  <Badge variant="lime" dot pulse className="text-[9px] px-1.5 py-0.5">
                    AVAILABLE
                  </Badge>
                </div>
                <p className="font-mono text-xs text-cyan-400 truncate">
                  B-Tech CSE (Data Science)
                </p>
                <p className="font-mono text-[11px] text-gray-400 truncate">
                  NIST University • CGPA: 8.75 / 10
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-5 sm:p-6 backdrop-blur-sm space-y-2">
              <span className="font-mono text-xs text-lime uppercase tracking-widest block font-semibold">
                EMAIL ADDRESS
              </span>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#141414] p-3 font-mono text-xs text-white">
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan-400 truncate mr-2 hover:underline">
                  {SITE_CONFIG.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors flex-shrink-0"
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

            {/* Direct Phone Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-5 sm:p-6 backdrop-blur-sm space-y-2">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block font-semibold">
                TELEPHONE / WHATSAPP
              </span>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#141414] p-3 font-mono text-xs text-white">
                <span className="text-gray-200">{SITE_CONFIG.phone}</span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors flex-shrink-0"
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

            {/* Social Networks & Resume */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-5 sm:p-6 backdrop-blur-sm space-y-3">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block font-semibold">
                PROFESSIONAL NETWORKS
              </span>
              <div className="space-y-2 font-mono text-xs">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1.5 border-b border-white/[0.04] text-gray-300 hover:text-lime transition-colors"
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
