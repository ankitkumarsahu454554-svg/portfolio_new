import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FloatingNavbar } from '@/components/layout/FloatingNavbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { ThemeProvider } from '@/components/layout/ThemeContext';
import { ToastProvider } from '@/components/ui/Toast';
import { Preloader } from '@/components/ui/Preloader';

export const viewport: Viewport = {
  themeColor: '#FFFDF8',
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
    'Personal portfolio and technical logs of Ankit Kumar Sahu, B-Tech CSE (Data Science) undergraduate at NIST University specializing in Applied Machine Learning, Healthcare AI, and Systems Architecture.',
  keywords: [
    'Ankit Kumar Sahu',
    'Computer Science',
    'Data Science',
    'AI/ML',
    'NIST University',
    'Software Engineering',
    'PyTorch',
    'FastAPI',
    'React',
    'Machine Learning Engineering',
  ],
  authors: [{ name: 'Ankit Kumar Sahu' }],
  creator: 'Ankit Kumar Sahu',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-new.vercel.app'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Ankit Kumar Sahu | Computer Science & Engineering (Data Science)',
    description:
      'Computer Science & Engineering student at NIST University (8.75 CGPA) specializing in Data Science, AI/ML, and Software Development.',
    url: 'https://portfolio-new.vercel.app',
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
    title: 'Ankit Kumar Sahu | Computer Science & Engineering (Data Science)',
    description:
      'Computer Science & Engineering student at NIST University (8.75 CGPA) specializing in Data Science, AI/ML, and Software Development.',
    images: ['/images/profile.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-mc-bg text-mc-text antialiased selection:bg-[#FF3D81] selection:text-white relative">
        <ThemeProvider>
          <ToastProvider>
            <SmoothScrollProvider>
              {/* Soft Animated Pastel Aurora Mesh */}
              <div className="aurora-bg" aria-hidden="true">
                <div className="aurora-blob aurora-blob-1" />
                <div className="aurora-blob aurora-blob-2" />
                <div className="aurora-blob aurora-blob-3" />
                <div className="aurora-blob aurora-blob-4" />
              </div>

              {/* Cinematic Preloader (Session-cached, <1.2s) */}
              <Preloader />

              {/* Interactive Magnetic & Morphing Cursor */}
              <CustomCursor />

              {/* Floating Responsive Navbar */}
              <FloatingNavbar />

              <main className="relative min-h-screen">{children}</main>

              <Footer />
            </SmoothScrollProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
