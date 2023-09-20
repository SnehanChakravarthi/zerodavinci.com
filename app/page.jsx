'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useSnapshot } from 'valtio';
import HtmlElements from '@/components/home/HTMLOverlay';
import ThreeJS from '@/components/canvas/ThreeJS';
import state from '@/store';
import LoadingPage from '@/components/home/LoadingPage';
import Navbar from '@/components/root/Navbar';
import SVGSection from '@/components/home/Section2-SVG';
import { FAQSection, Hero } from '@/components/home';

export default function Home() {
  const snap = useSnapshot(state);

  return (
    <main className="w-screen h-screen">
      {!snap.modelLoaded && <LoadingPage />}
      <ReactLenis root autoraf>
        <Navbar />
        <ThreeJS />
        <HtmlElements />
        <Hero />
        <SVGSection />
        <div className="w-screen" style={{ height: '530vh' }} />
        <FAQSection />
      </ReactLenis>
    </main>
  );
}
