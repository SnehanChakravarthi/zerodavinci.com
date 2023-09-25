'use client';

import React from 'react';

export default function HeaderButton() {
  const handleStripeLink = () => {
    window.open('https://buy.stripe.com/3cscQw3wG1scbvy6ox', '_blank');
  };

  return (
    <button
      onClick={handleStripeLink}
      className="border-4 border-mainBG rounded-full h-12 px-4 py-1 text-xl 
      flex items-center bg-black text-mainBG transition-transform duration-100 ease-in-out hover:scale-105 hover:text-black hover:bg-yellow-500"
    >
      RESERVE
    </button>
  );
}
