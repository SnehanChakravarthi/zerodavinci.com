'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useSnapshot } from 'valtio';
import HtmlElements from '@/components/home/HTMLOverlay';
import ThreeJS from '@/components/canvas/ThreeJS';
import state from '@/store';
import LoadingPage from '@/components/home/LoadingPage';
import Navbar from '@/components/root/Navbar';
import { Hero, Section2, SectionEnd } from '@/components/home';
import { useEffect, useState } from 'react';

export default function Home() {
  const snap = useSnapshot(state);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  console.log('doc height', documentHeight);
  console.log('view height', viewportHeight);
  console.log('pages', numberOfPages);

  useEffect(() => {
    // Update the document and viewport height whenever the component mounts or the window resizes
    const updateHeights = () => {
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;

      setDocumentHeight(docHeight);
      setViewportHeight(viewHeight);

      // Calculate the number of "pages"
      const pages = docHeight / viewHeight;
      setNumberOfPages(pages);
    };

    // Listen for changes in the document or viewport height
    window.addEventListener('resize', updateHeights);

    // Initial call to set the heights
    updateHeights();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateHeights);
    };
  }, []);

  return (
    <main className="w-screen h-screen">
      {!snap.modelLoaded && <LoadingPage />}
      <ReactLenis root autoraf>
        <Navbar />
        <ThreeJS />
        <HtmlElements />
        <Hero />
        <Section2 />
        <div className="w-screen flex items-end" style={{ height: '830vh' }}>
          <SectionEnd />
        </div>
      </ReactLenis>
    </main>
  );
}
