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
      className="border-4 border-neutral-200 rounded-full transition-transform duration-100 ease-in-out hover:scale-105 "
    >
      <div
        className={`h-10 px-4 py-1 border-2 border-black rounded-full text-xl 
          flex items-center bg-black text-white`}
      >
        Reserve
      </div>
    </button>
  );
}
