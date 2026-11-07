import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';

export const viewport: Viewport = {
  themeColor: '#08090B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Ankit Kumar Sahu | Computer Science & Engineering (Data Science)',
    template: '%s | Ankit Kumar Sahu',
  },
  description:
    'Portfolio, curriculum vitae, and technical projects of Ankit Kumar Sahu, B-Tech CSE (Data Science) undergraduate at NIST University. Seeking Software Engineering, AI/ML, and Data Science internships.',
  keywords: [
    'Ankit Kumar Sahu',
    'Computer Science',
    'Data Science',
    'AI/ML',
    'NIST University',
    'Software Engineering',
    'Python',
    'PyTorch',
    'FastAPI',
    'React',
    'Internship',
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
    title: 'Ankit Kumar Sahu | Computer Science & Engineering Portfolio',
    description:
      'Computer Science & Engineering student at NIST University (8.75 CGPA) specializing in Data Science, AI/ML, and Software Development.',
    url: 'https://liquidform.studio',
    siteName: 'Ankit Kumar Sahu Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 1600,
        alt: 'Ankit Kumar Sahu — Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Kumar Sahu | Computer Science & Engineering Portfolio',
    description:
      'Computer Science & Engineering student at NIST University (8.75 CGPA) specializing in Data Science, AI/ML, and Software Development.',
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
          <CustomCursor />
          <Navigation />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
