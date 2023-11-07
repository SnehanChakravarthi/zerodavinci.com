'use client';

import React from 'react';

export default function HeaderButton() {
  const handleStripeLink = () => {
    window.open('https://buy.stripe.com/3cscQw3wG1scbvy6ox', '_blank');
  };

  return (
    <>
      {/* <button
        onClick={handleStripeLink}
        className="border-4 border-mainBG rounded-full h-12 px-4 py-1 text-xl 
      sm:flex  hidden items-center bg-black text-mainBG transition-transform duration-100 ease-in-out hover:scale-105 hover:text-black hover:bg-yellow-500"
      >
        RESERVE
      </button> */}
      <button
        onClick={handleStripeLink}
        className=" flex border-4 border-mainBG rounded-full h-12 w-12  items-center justify-center
       bg-black  transition-transform duration-100 ease-in-out hover:scale-110 hover:bg-yellow-500"
      >
        <img
          src="/buy.svg"
          alt="Zero Da Vinci Logo"
          height={50}
          width={50}
          className="h-5 w-5 "
        ></img>
      </button>
    </>
  );
}
