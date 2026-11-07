'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#000000]/90 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Brand & Identity */}
          <Link
            href="/"
            className="group flex flex-col transition-opacity hover:opacity-90"
            aria-label="Ankit Kumar Sahu - Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-semibold tracking-tight text-white">
                Ankit Kumar Sahu
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </div>
            <span className="font-mono text-[10px] text-gray-400 tracking-wider">
              CSE (DATA SCIENCE) • NIST UNIVERSITY
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || (item.href === '/projects' && pathname === '/work');

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group relative font-mono text-xs tracking-wider transition-colors duration-200 py-1.5',
                    isActive ? 'text-lime font-medium' : 'text-gray-300 hover:text-white'
                  )}
                >
                  <span>{item.title}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-lime shadow-[0_0_8px_#C7FF55]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={SITE_CONFIG.resumePath}
              download="Ankit_Kumar_Sahu_Resume.pdf"
              variant="secondary"
              size="sm"
            >
              <FileText className="mr-1.5 h-3.5 w-3.5" />
              <span>RESUME PDF</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white hover:border-lime/60 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#000000]/98 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || (item.href === '/projects' && pathname === '/work');

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-sm tracking-wide transition-colors',
                      isActive ? 'text-lime font-medium' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-500" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <Button
                href={SITE_CONFIG.resumePath}
                download="Ankit_Kumar_Sahu_Resume.pdf"
                variant="primary"
                size="md"
                className="w-full"
              >
                <FileText className="mr-1.5 h-4 w-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
