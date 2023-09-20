import React from 'react';
// import { useSnapshot } from 'valtio';
// import state from '@/store';

export default function BuyButton() {
  // const snap = useSnapshot(state);
  // const buttonValue = snap.modelColor;

  // const buttonColors = {
  //   2: 'white',
  //   0: 'modelSilver',
  //   1: 'modelGold',
  //   default: 'white', // Default background color
  // };

  // const bgClass = `bg-${buttonColors[buttonValue] || buttonColors.default}`;

  return (
    <button
      onClick={() =>
        (window.location.href =
          'https://buy.stripe.com/test_eVa0324Ombxs6UEcMO')
      }
      className={`px-6 py-2 h-full rounded-full cursor-pointer  bg-red-500 text-lg font-bold text-black hover:shadow-lg transition transform hover:scale-110`} // Added 'transition', 'transform' and 'hover:scale-110'
    >
      RESERVE
    </button>
  );
}
