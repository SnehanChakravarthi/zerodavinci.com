import React from 'react';
import { useSnapshot } from 'valtio';
import state from '@/store';
function ExtendedColors() {
  const snap = useSnapshot(state);

  // Define the colors using hex codes
  const colors = [
    '#FFFFFF', // 1
    '#FF6EC7', // 4
    '#00CC99', // 2
    '#E3256B', // 7
    '#FF9966', // 9
    '#0D98BA', // 5
    '#F7E7CE', // 6
    '#FFD700', // 10
    '#B57EDC', // 3
    '#00BFFF', // 8
  ];

  const handleColorChange = (color) => {
    state.modelColor = color;
    console.log(state.modelColor);
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleColorChange(color)}
          className="h-8 w-8 cursor-pointer rounded-full border border-black sm:h-7 sm:w-7 transition-transform duration-200 ease-in-out hover:scale-110"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}

export default ExtendedColors;
