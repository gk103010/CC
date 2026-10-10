import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import AtmosphericBackground from '@/components/layout/AtmosphericBackground';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'CHOSEN CREATORS',
    template: '%s | CHOSEN CREATORS',
  },
  description: 'Chosen Creators agency website project foundation.',
  keywords: ['Chosen Creators', 'Creative Agency', 'Portfolio'],
  authors: [{ name: 'Chosen Creators Team' }],
  creator: 'Chosen Creators',
  metadataBase: new URL('https://chosencreators.com'),
  openGraph: {
    title: 'CHOSEN CREATORS',
    description: 'Chosen Creators agency website project foundation.',
    url: 'https://chosencreators.com',
    siteName: 'CHOSEN CREATORS',
    locale: 'en_US',
    type: 'website',
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
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090909',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sansFont.variable}>
      <body>
        <AtmosphericBackground />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
