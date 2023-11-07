import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { siteConfig } from '@/config/site';
import Script from 'next/script';
import Head from 'next/head';
import Navbar from '@/components/root/Navbar';
import Footer from '@/components/root/Footer';

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Zero da Vinci',
  image: '/pictures/og2.png',
  description:
    'An innovative furniture concept that lets you toggle between zero-gravity comfort and productive work settings, all wrapped up in stunning design inspired by both the past and the future.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '95.00',
  },
};

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    // Existing Keywords
    'Zero da Vinci',
    'Motsats',
    'Motsats Furniture',
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

  manifest: '/site.webmanifest',
  themeColor: 'white',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      </Head>
      <body className={`${microgramma.className} overflow-x-hidden`}>
        <Navbar />
        {children}
        {/* <Analytics /> */}

        <Footer />
      </body>
      <Script
        id="gtag-external-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EHWNF6P10R"
      />

      <Script id="gtag-inline-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHWNF6P10R');
          `}
      </Script>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}
