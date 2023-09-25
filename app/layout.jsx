import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { siteConfig } from '@/config/site';

// const secondFont = Poppins({
//   subsets: ['latin'],
//   variable: '--font-secondary',
//   display: 'swap',
// });

// Saira; Comfortaa
const microgramma = localFont({
  src: [
    {
      path: '../public/fonts/MicrogrammaBoldExtendedD/font.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/MicrogrammaMediumExtendedD/font.woff2',
      weight: '400',
      style: 'medium',
    },
  ],
});

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Zero da Vinci',
    'Zero Gravity',
    'Workstation',
    'Designer Furniture',
    'Multifunctional Furniture',
  ],
  authors: 'Snehan Chakravarthi',
  creator: [
    {
      name: 'Motsats Furniture',
      url: siteConfig.url,
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    site: '@MotsatsDesign',
    title: siteConfig.name,
    description: siteConfig.description,
    image: '/og.png',
    creator: '@MotsatsDesign',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${microgramma.className} overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
