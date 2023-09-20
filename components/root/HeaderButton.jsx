'use client';

import React from 'react';

// const colorMap = {
//   0: "modelChrome",
//   1: "modelGold",
//   2: "white",
// };

export default function HeaderButton() {
  const handleClick = () => {
    const targetScrollY = (document.documentElement.scrollHeight * 5) / 8;
    window.scrollTo({
      top: targetScrollY,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="border-4 border-mainBG rounded-full h-12 px-4 py-1  text-xl 
      flex items-center bg-black text-mainBG transition-transform duration-100  ease-in-out hover:scale-105 hover:text-black hover:bg-red-500"
    >
      RESERVE
    </button>
  );
}
