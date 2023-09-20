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

export default function Home() {
  const snap = useSnapshot(state);

  return (
    <main style={{ height: '1000vh' }}>
      {!snap.modelLoaded && <LoadingPage />}
      <ReactLenis root autoraf>
        <Navbar />
        <ThreeJS />
        <HtmlElements />
        {/* <div className="w-screen " style={{ height: '160vh' }} />
        <SVGSection /> */}
      </ReactLenis>
    </main>
  );
}
