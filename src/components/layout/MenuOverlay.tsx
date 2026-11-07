'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Globe, Clock, BriefcaseBusiness, FileUser } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const pathname = usePathname();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const itemVariants = {
    closed: { y: 40, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#08090B] px-6 py-6 md:px-12 md:py-8 lg:px-16"
        >
          {/* Background subtle noise and grid */}
          <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-lime/5 blur-3xl" />
          <div className="pointer-events-none absolute bottom-1/4 -left-24 h-96 w-96 rounded-full bg-electric/5 blur-3xl" />

          {/* Top Bar inside Menu */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                LIQUID <span className="text-lime">/</span> FORM
              </span>
              <span className="hidden font-mono text-xs text-gray-400 sm:inline">
                INDEX NAVIGATION
              </span>
            </div>

            <button
              onClick={onClose}
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:border-lime hover:bg-lime hover:text-black"
              aria-label="Close menu"
              data-cursor="pointer"
            >
              <span>CLOSE</span>
              <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Main Navigation Matrix */}
          <div className="relative z-10 my-auto grid grid-cols-1 gap-12 py-8 lg:grid-cols-12 lg:gap-8">
            {/* Primary Nav Links */}
            <nav className="flex flex-col space-y-4 lg:col-span-8">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline justify-between border-b border-white/[0.06] py-3 transition-colors hover:border-lime/40"
                      data-cursor="pointer"
                    >
                      <div className="flex items-baseline gap-4 md:gap-8">
                        <span className="font-mono text-xs tracking-widest text-gray-500 group-hover:text-lime">
                          {item.index}
                        </span>
                        <div className="flex items-center gap-3">
                          {item.href === '/work' && (
                            <BriefcaseBusiness className="h-6 w-6 text-gray-500 group-hover:text-lime transition-colors" />
                          )}
                          {item.href === '/resume' && (
                            <FileUser className="h-6 w-6 text-gray-500 group-hover:text-lime transition-colors" />
                          )}
                          <span
                            className={`font-heading text-3xl font-light tracking-tight transition-transform duration-300 group-hover:translate-x-3 md:text-5xl lg:text-6xl ${
                              isActive ? 'text-lime font-normal' : 'text-white group-hover:text-white'
                            }`}
                          >
                            {item.title}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="hidden font-mono text-xs tracking-widest text-gray-500 transition-colors group-hover:text-electric sm:inline">
                          [{item.tag}]
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Sidebar Editorial & Telemetry */}
            <motion.div
              custom={NAV_ITEMS.length}
              variants={itemVariants}
              className="flex flex-col justify-between space-y-8 border-l-0 border-white/10 pt-6 lg:col-span-4 lg:border-l lg:pt-0 lg:pl-12"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                    CURRENT DISPOSITION
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="lime" dot pulse>
                      AVAILABLE
                    </Badge>
                    <span className="font-mono text-xs text-gray-300">
                      {SITE_CONFIG.status}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                    STUDIO COORDINATES
                  </h3>
                  <div className="mt-2 space-y-1 font-mono text-xs text-gray-400">
                    <p className="flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5 text-lime" />
                      <span>{SITE_CONFIG.coordinates}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-electric" />
                      <span>{SITE_CONFIG.location}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                    FRAMEWORK ARCHITECTURE
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-gray-400">
                    <span className="rounded bg-white/5 px-2 py-1">THREE.JS / WEBGL</span>
                    <span className="rounded bg-white/5 px-2 py-1">NEXT.JS 14</span>
                    <span className="rounded bg-white/5 px-2 py-1">GLSL SHADERS</span>
                    <span className="rounded bg-white/5 px-2 py-1">LENIS SMOOTH</span>
                  </div>
                </div>
              </div>

              {/* Direct Inquiries Link */}
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <span className="font-mono text-[11px] text-gray-400">DIRECT INQUIRIES</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-mono text-sm text-lime mt-1 block hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar: Networks */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-6 font-mono text-xs text-gray-400">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-lime"
                  data-cursor="pointer"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="font-mono text-[11px] text-gray-600">
              ESC TO DISMISS // {SITE_CONFIG.version}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

