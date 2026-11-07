'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  BriefcaseBusiness,
  FileUser,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Magnetic } from '@/components/ui/Magnetic';
import { MenuOverlay } from './MenuOverlay';
import { soundManager } from '@/lib/sound';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const pathname = usePathname();

  const handleToggleSound = () => {
    const nextMuted = soundManager.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleOpenMenu = () => {
    soundManager.playOpen();
    setIsMenuOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#08090B]/85 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Logo & Identity */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="group flex items-baseline gap-2 text-white transition-opacity hover:opacity-90"
              data-cursor="pointer"
              aria-label="Liquid Form Homepage"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              <span className="font-heading text-lg font-bold tracking-tight">
                LIQUID <span className="text-lime">/</span> FORM
              </span>
              <span className="hidden font-mono text-[10px] tracking-widest text-gray-500 uppercase sm:inline">
                [SYS_v2.8]
              </span>
            </Link>

            <span className="hidden h-4 w-[1px] bg-white/10 md:inline" aria-hidden="true" />

            <div className="hidden items-center gap-2 lg:flex">
              <Badge variant="lime" dot pulse className="text-[10px]">
                ONLINE
              </Badge>
              <span className="font-mono text-[11px] text-gray-400">
                {SITE_CONFIG.curator}
              </span>
            </div>
          </div>

          {/* Dedicated Primary Navigation Links (Desktop) */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {/* PORTFOLIO Navigation Item */}
            <Link
              href="/work"
              className={cn(
                'group relative flex items-center gap-2 font-mono text-xs tracking-wider transition-all duration-200 py-1.5',
                pathname === '/work' ? 'text-lime' : 'text-gray-400 hover:text-white'
              )}
              data-cursor="pointer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              <BriefcaseBusiness
                className={cn(
                  'h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110 group-hover:text-lime',
                  pathname === '/work' ? 'text-lime' : 'text-gray-500'
                )}
              />
              <span>PORTFOLIO</span>
              {pathname === '/work' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-lime shadow-[0_0_8px_#C7FF55]" />
              )}
            </Link>

            {/* RESUME Navigation Item */}
            <Link
              href="/resume"
              className={cn(
                'group relative flex items-center gap-2 font-mono text-xs tracking-wider transition-all duration-200 py-1.5',
                pathname === '/resume' ? 'text-lime' : 'text-gray-400 hover:text-white'
              )}
              data-cursor="pointer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              <FileUser
                className={cn(
                  'h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110 group-hover:text-lime',
                  pathname === '/resume' ? 'text-lime' : 'text-gray-500'
                )}
              />
              <span>RESUME</span>
              {pathname === '/resume' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-lime shadow-[0_0_8px_#C7FF55]" />
              )}
            </Link>

            {/* ABOUT Navigation Item */}
            <Link
              href="/about"
              className={cn(
                'group relative font-mono text-xs tracking-wider transition-colors duration-200 py-1.5',
                pathname === '/about' ? 'text-lime' : 'text-gray-400 hover:text-white'
              )}
              data-cursor="pointer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              <span>ABOUT</span>
              {pathname === '/about' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-lime shadow-[0_0_8px_#C7FF55]" />
              )}
            </Link>

            {/* LAB EXPERIMENTS Navigation Item */}
            <Link
              href="/experiments"
              className={cn(
                'group relative font-mono text-xs tracking-wider transition-colors duration-200 py-1.5',
                pathname === '/experiments' ? 'text-lime' : 'text-gray-400 hover:text-white'
              )}
              data-cursor="pointer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              <span>LAB</span>
              {pathname === '/experiments' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-lime shadow-[0_0_8px_#C7FF55]" />
              )}
            </Link>
          </nav>

          {/* Action CTAs, Mobile Direct Icons & Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Quick Mobile Icons for Portfolio & Resume */}
            <div className="flex items-center gap-1.5 md:hidden">
              <Link
                href="/work"
                className={cn(
                  'flex items-center gap-1 rounded-full border px-2.5 py-1.5 font-mono text-[10px] uppercase transition-colors',
                  pathname === '/work'
                    ? 'border-lime bg-lime/10 text-lime'
                    : 'border-white/10 bg-white/[0.02] text-gray-400 hover:text-lime hover:border-lime/40'
                )}
                aria-label="Portfolio"
                data-cursor="pointer"
              >
                <BriefcaseBusiness className="h-3 w-3" />
                <span>WORK</span>
              </Link>

              <Link
                href="/resume"
                className={cn(
                  'flex items-center gap-1 rounded-full border px-2.5 py-1.5 font-mono text-[10px] uppercase transition-colors',
                  pathname === '/resume'
                    ? 'border-lime bg-lime/10 text-lime'
                    : 'border-white/10 bg-white/[0.02] text-gray-400 hover:text-lime hover:border-lime/40'
                )}
                aria-label="Resume"
                data-cursor="pointer"
              >
                <FileUser className="h-3 w-3" />
                <span>CV</span>
              </Link>
            </div>

            {/* Audio Feedback Toggle */}
            <button
              onClick={handleToggleSound}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1.5 font-mono text-[10px] text-gray-400 hover:border-lime hover:text-lime transition-colors"
              title={isMuted ? 'Enable UI Soundscape' : 'Mute Soundscape'}
              data-cursor="pointer"
              aria-label={isMuted ? 'Enable Sound' : 'Mute Sound'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-3.5 w-3.5 text-lime" />
                  <span className="hidden sm:inline text-lime">AUDIO ON</span>
                </>
              )}
            </button>

            {/* Inquire Direct CTA */}
            <Link
              href="/contact"
              className="hidden font-mono text-xs tracking-wider uppercase text-lime hover:underline sm:inline"
              data-cursor="pointer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              [ INQUIRE ]
            </Link>

            {/* Full Navigation Overlay Trigger */}
            <Magnetic strength={0.4}>
              <button
                onClick={handleOpenMenu}
                onMouseEnter={() => soundManager.playHover()}
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 font-mono text-xs tracking-widest text-white transition-all duration-300 hover:border-lime/60 hover:bg-lime hover:text-black"
                aria-label="Open Navigation Index"
                data-cursor="pointer"
              >
                <span className="hidden sm:inline">INDEX</span>
                <Menu className="h-4 w-4 transition-transform group-hover:scale-110" />
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* Full-screen navigation overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
