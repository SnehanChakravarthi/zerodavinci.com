'use client';

import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import { useSnapshot } from 'valtio';
import state from '../../../store';

export default function RotationSlider() {
  const snap = useSnapshot(state);

  const handleSliderChange = (value) => {
    state.rotationSlider = value;
  };

  return (
    <div className="w-full px-4">
      <Slider.Root
        className="relative flex h-6 touch-none select-none items-center "
        defaultValue={[5]}
        max={10}
        step={0.01}
        onValueChange={handleSliderChange}
      >
        <Slider.Track className="relative h-8 grow rounded-full bg-black sm:h-7 -mx-1" />
        <Slider.Thumb
          className="block h-7 w-7  cursor-pointer rounded-full bg-white border-2 border-black drop-shadow-md focus:outline-none  sm:h-5 sm:w-5"
          aria-label="Rotate Model"
        />
      </Slider.Root>
    </div>
  );
}
