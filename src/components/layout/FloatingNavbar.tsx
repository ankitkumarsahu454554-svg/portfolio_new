'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SITE_CONFIG } from '@/lib/constants';

interface NavLink {
  title: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { title: 'Overview', href: '/' },
  { title: 'About', href: '/#about' },
  { title: 'Skills', href: '/#skills' },
  { title: 'Projects', href: '/#projects' },
  { title: 'Flight Log', href: '/#flight-log' },
  { title: 'Trajectory', href: '/#experience' },
  { title: 'Resume', href: '/resume' },
  { title: 'Contact', href: '/#contact' },
];

export function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Overview');
  const pathname = usePathname();

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Only hide if scrolled more than 100px
    if (latest > 100 && latest > lastScrollY && !isMobileMenuOpen) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  // Track active section on home page scroll
  useEffect(() => {
    if (pathname !== '/') {
      if (pathname.includes('/resume')) setActiveSection('Resume');
      else if (pathname.includes('/projects')) setActiveSection('Projects');
      else if (pathname.includes('/about')) setActiveSection('About');
      else if (pathname.includes('/experience')) setActiveSection('Trajectory');
      else if (pathname.includes('/contact')) setActiveSection('Contact');
      return;
    }

    const sections = ['contact', 'experience', 'flight-log', 'projects', 'skills', 'about', 'hero'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPos >= el.offsetTop) {
          if (sectionId === 'hero') setActiveSection('Overview');
          else if (sectionId === 'about') setActiveSection('About');
          else if (sectionId === 'skills') setActiveSection('Skills');
          else if (sectionId === 'projects') setActiveSection('Projects');
          else if (sectionId === 'flight-log') setActiveSection('Flight Log');
          else if (sectionId === 'experience') setActiveSection('Trajectory');
          else if (sectionId === 'contact') setActiveSection('Contact');
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress Bar with Signature Rainbow Gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left shadow-sm"
        style={{
          scaleX: scrollYProgress,
          background: 'var(--gradient-rainbow)',
        }}
      />

      {/* Floating Pill Container */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -90,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-4 rounded-full border border-mc-border bg-mc-glass px-3.5 sm:px-5 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
          {/* Logo / Telemetry Callout */}
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs tracking-wider text-mc-text group py-1 pr-1 sm:pr-3 border-r border-mc-border"
            data-cursor="pointer"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF3D81] to-[#00B8D9] text-white shadow-xs">
              <Terminal className="h-3 w-3" />
            </div>
            <span className="font-heading font-bold text-sm hidden sm:inline text-mc-text group-hover:text-rainbow-pink transition-colors">
              ANKIT<span className="text-[#FF3D81]">.</span>
            </span>
            <span className="font-mono text-[10px] text-mc-text-muted hidden md:inline">
              [CSE:DS]
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.title;

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setActiveSection(link.title)}
                  className={`relative px-3 py-1.5 font-mono text-xs tracking-wide transition-colors ${
                    isActive ? 'text-mc-text font-bold' : 'text-mc-text-secondary hover:text-mc-text'
                  }`}
                  data-cursor="pointer"
                >
                  <span className="relative z-10">{link.title}</span>
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF3D81]/15 via-[#00B8D9]/15 to-[#8B5CF6]/15 border border-[#FF3D81]/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full z-20"
                        style={{ background: 'var(--gradient-rainbow)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Resume PDF Button */}
          <div className="flex items-center gap-2 pl-1 sm:pl-2">
            <ThemeToggle />

            <Link
              href={SITE_CONFIG.resumePath}
              download="Ankit_Kumar_Sahu_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#FF3D81]/40 bg-gradient-to-r from-[#FF3D81]/10 via-[#FF8A00]/10 to-[#8B5CF6]/10 px-3.5 py-1.5 font-mono text-xs text-[#FF3D81] dark:text-[#FF8A00] hover:bg-[#FF3D81] hover:text-white transition-all font-semibold shadow-xs"
              data-cursor="open"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>CV</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden items-center justify-center h-8 w-8 rounded-full border border-mc-border bg-mc-surface text-mc-text"
              aria-label="Toggle menu"
              data-cursor="pointer"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer / Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-mc-border bg-mc-surface/98 p-6 shadow-2xl backdrop-blur-xl lg:hidden flex flex-col space-y-4"
          >
            <div className="flex items-center justify-between border-b border-mc-border pb-3">
              <span className="font-mono text-xs text-mc-cyan tracking-telemetry">MISSION CONTROL // NAV</span>
              <span className="font-mono text-[10px] text-mc-text-muted">T+2026</span>
            </div>

            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.title);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-2 border-b border-mc-border/50 font-mono text-sm text-mc-text hover:text-mc-cyan transition-colors"
                >
                  <span>{link.title}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-mc-text-muted" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href={SITE_CONFIG.resumePath}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                className="flex items-center gap-2 rounded-xl border border-mc-cyan bg-mc-cyan/15 px-4 py-2 font-mono text-xs text-mc-cyan font-semibold w-full justify-center"
              >
                <FileText className="h-4 w-4" />
                <span>DOWNLOAD FULL RESUME PDF</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

