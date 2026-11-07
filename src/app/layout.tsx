import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';

export const viewport: Viewport = {
  themeColor: '#08090B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'ANKIT KUMAR SAHU — LIQUID / FORM // AI/ML & Creative Technologist',
    template: '%s | LIQUID / FORM',
  },
  description:
    'Portfolio, curriculum vitae, and research archive of Ankit Kumar Sahu (NIST University), exploring AI/ML, Data Science, and real-time GPU graphics.',
  keywords: [
    'Ankit Kumar Sahu',
    'AI/ML',
    'Data Science',
    'NIST University',
    'Creative Developer',
    'Three.js',
    'WebGL',
    'Creative Technologist',
    'Next.js',
    'PyTorch',
  ],
  authors: [{ name: 'Ankit Kumar Sahu' }],
  creator: 'Ankit Kumar Sahu',
  metadataBase: new URL('https://liquidform.studio'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'ANKIT KUMAR SAHU — LIQUID / FORM',
    description: 'AI/ML Enthusiast, Data Science Specialist & Creative Developer (NIST University).',
    url: 'https://liquidform.studio',
    siteName: 'LIQUID / FORM',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 1600,
        alt: 'Ankit Kumar Sahu — LIQUID / FORM Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANKIT KUMAR SAHU — LIQUID / FORM',
    description: 'AI/ML Enthusiast, Data Science Specialist & Creative Developer.',
    images: ['/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-lime selection:text-black">
        <SmoothScrollProvider>
          <NoiseOverlay />
          <CustomCursor />
          <Navigation />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
