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
        background: '#000000',
        foreground: '#FFFFFF',
        surface: {
          50: '#080808',
          100: '#0D0D0D',
          200: '#141414',
          300: '#1A1A1A',
          400: '#262626',
        },
        lime: {
          DEFAULT: '#C7FF55',
          hover: '#D6FF7A',
          muted: 'rgba(199, 255, 85, 0.12)',
          glow: 'rgba(199, 255, 85, 0.35)',
        },
        electric: {
          DEFAULT: '#00F0FF',
          hover: '#38F4FF',
          muted: 'rgba(0, 240, 255, 0.12)',
          glow: 'rgba(0, 240, 255, 0.35)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.16)',
          accent: 'rgba(0, 240, 255, 0.3)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
        ultra: '0.25em',
      },
    },
  },
  plugins: [],
};

export default config;
