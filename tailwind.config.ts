import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        foreground: '#0F172A',
        surface: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
        },
        azure: {
          DEFAULT: '#0284C7',
          hover: '#0369A1',
          muted: 'rgba(2, 132, 199, 0.08)',
          glow: 'rgba(2, 132, 199, 0.25)',
        },
        indigo: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          muted: 'rgba(79, 70, 229, 0.08)',
          glow: 'rgba(79, 70, 229, 0.25)',
        },
        emerald: {
          DEFAULT: '#059669',
          muted: 'rgba(5, 150, 105, 0.08)',
        },
        border: {
          subtle: 'rgba(15, 23, 42, 0.08)',
          medium: 'rgba(15, 23, 42, 0.14)',
          highlight: 'rgba(15, 23, 42, 0.22)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;
