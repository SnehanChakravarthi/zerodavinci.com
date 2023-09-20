'use client';

import React from 'react';
import { useSnapshot } from 'valtio';
import { Canvas } from '@react-three/fiber';
import { Preload, useProgress } from '@react-three/drei';
import Experience from './Canvas';
import state from '@/store';

function CustomProgressBar() {
  const snap = useSnapshot(state);

  const { progress } = useProgress();

  state.loadProgress = progress;
  return null;
}

export default function ThreeJS() {
  return (
    <div className="fixed -z-10 bottom-0 h-screen w-screen bg-mainBG">
      <CustomProgressBar />
      <Canvas
        shadows
        // frameloop="demand"
        dpr={[1, 2]}
      >
        <Preload all />
        <Experience />
      </Canvas>
    </div>
  );
}
