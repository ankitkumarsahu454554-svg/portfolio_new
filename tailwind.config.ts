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
        background: '#08090B',
        foreground: '#EDEDED',
        surface: {
          50: '#0C0E12',
          100: '#11141A',
          200: '#171B24',
          300: '#1F2430',
          400: '#2D3445',
        },
        lime: {
          DEFAULT: '#C7FF55',
          hover: '#D6FF7A',
          muted: 'rgba(199, 255, 85, 0.15)',
          glow: 'rgba(199, 255, 85, 0.35)',
        },
        electric: {
          DEFAULT: '#00F0FF',
          hover: '#38F4FF',
          muted: 'rgba(0, 240, 255, 0.15)',
          glow: 'rgba(0, 240, 255, 0.35)',
        },
        metallic: {
          light: '#E6E9EF',
          muted: '#8F9CAE',
          dark: '#1D222A',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          medium: 'rgba(255, 255, 255, 0.15)',
          accent: 'rgba(199, 255, 85, 0.3)',
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

