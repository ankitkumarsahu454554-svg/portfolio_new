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
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-[#F8FAFC]/85 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Brand & Identity */}
          <Link
            href="/"
            className="group flex flex-col transition-opacity hover:opacity-90"
            aria-label="Ankit Kumar Sahu - Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-semibold tracking-tight text-slate-900">
                Ankit Kumar Sahu
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
            </div>
            <span className="font-mono text-[10px] text-slate-500 tracking-wider font-medium">
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
                    isActive ? 'text-sky-600 font-semibold' : 'text-slate-600 hover:text-slate-950 font-medium'
                  )}
                >
                  <span>{item.title}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sky-600 rounded-full" />
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
            className="flex md:hidden items-center justify-center rounded-lg border border-slate-300 bg-white p-2 text-slate-800 hover:border-slate-400 transition-colors shadow-sm"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/98 px-6 py-6 space-y-4 shadow-xl">
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
                      'flex items-center justify-between border-b border-slate-100 pb-2 font-mono text-sm tracking-wide transition-colors',
                      isActive ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-slate-950'
                    )}
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
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
