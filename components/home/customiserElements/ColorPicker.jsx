'use client';

import React, { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../../store';
import { useState } from 'react';
import ColorPopOver from '@/components/root/ColorPopover';

const COLORS = {
  BLACK: '#535353',
  CHROME: '#A8A9AD',
  GOLD: '#B88A53',
};

const colorData = [
  {
    color: COLORS.BLACK,
    bgClass: 'bg-modelBlack',
    label: 'Select Black Color',
  },
  {
    color: COLORS.CHROME,
    bgClass: 'bg-modelChrome',
    label: 'Select Chrome Color',
  },
  { color: COLORS.GOLD, bgClass: 'bg-modelGold', label: 'Select Gold Color' },
];

function ColorPicker() {
  const snap = useSnapshot(state);

  const handleClick = (value) => {
    state.modelColor = value;
  };

  return (
    <div className="flex flex-row space-x-2">
      <div className="flex flex-row items-center justify-center space-x-2">
        {colorData.map(({ color, bgClass, label }) => {
          // Add a variable for the scale class
          const scaleClass =
            snap.modelColor === color ? 'scale-110' : 'scale-100';

          return (
            <button
              key={color}
              aria-label={label}
              onClick={() => handleClick(color)}
              className={`h-8 w-8 cursor-pointer rounded-full border border-black sm:h-7 sm:w-7 ${bgClass}  transition-transform duration-200 ease-in-out hover:scale-110  ${scaleClass}`}
            ></button>
          );
        })}
      </div>
      <ColorPopOver />
    </div>
  );
}

export default ColorPicker;

// &larr;
