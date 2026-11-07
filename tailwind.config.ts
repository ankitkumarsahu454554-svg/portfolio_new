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
        background: '#090A0F',
        foreground: '#F8FAFC',
        surface: {
          50: '#0E1017',
          100: '#111319',
          200: '#161922',
          300: '#1C202C',
          400: '#282E3E',
        },
        azure: {
          DEFAULT: '#38BDF8',
          hover: '#60A5FA',
          muted: 'rgba(56, 189, 248, 0.12)',
          glow: 'rgba(56, 189, 248, 0.3)',
        },
        indigo: {
          DEFAULT: '#6366F1',
          hover: '#818CF8',
          muted: 'rgba(99, 102, 241, 0.12)',
          glow: 'rgba(99, 102, 241, 0.3)',
        },
        emerald: {
          DEFAULT: '#34D399',
          muted: 'rgba(52, 211, 153, 0.12)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          medium: 'rgba(255, 255, 255, 0.14)',
          highlight: 'rgba(255, 255, 255, 0.22)',
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
