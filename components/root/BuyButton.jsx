import React from 'react';

export default function BuyButton() {
  return (
    <button
      onClick={() =>
        (window.location.href = 'https://buy.stripe.com/3cscQw3wG1scbvy6ox')
      }
      className={`px-6 py-2 h-full rounded-full cursor-pointer  bg-red-500 text-lg font-bold text-black hover:shadow-lg transition transform hover:scale-110`} // Added 'transition', 'transform' and 'hover:scale-110'
    >
      RESERVE
    </button>
  );
}
