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
        rainbow: {
          pink: '#FF3D81',
          orange: '#FF8A00',
          yellow: '#FFC700',
          green: '#00C48C',
          cyan: '#00B8D9',
          blue: '#3D5AFE',
          violet: '#8B5CF6',
        },
        mc: {
          bg: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          glass: 'var(--bg-glass)',
          text: 'var(--text-primary)',
          'text-secondary': 'var(--text-secondary)',
          'text-muted': 'var(--text-muted)',
          'text-subtle': 'var(--text-subtle)',
          cyan: 'var(--accent-cyan)',
          amber: 'var(--accent-amber)',
          border: 'var(--border-subtle)',
          'border-medium': 'var(--border-medium)',
          'border-highlight': 'var(--border-highlight)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marqueeReverse 32s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'glow-pink': '0 0 24px -2px rgba(255, 61, 129, 0.35)',
        'glow-blue': '0 0 24px -2px rgba(61, 90, 254, 0.35)',
        'glow-cyan': '0 0 24px -2px rgba(0, 184, 217, 0.35)',
        'glow-green': '0 0 24px -2px rgba(0, 196, 140, 0.35)',
        'glow-violet': '0 0 24px -2px rgba(139, 92, 246, 0.35)',
        'glow-orange': '0 0 24px -2px rgba(255, 138, 0, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
