import React, { useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

export default function Logo() {
  const logoRef = useRef(null);

  useLenis(({ progress }) => {
    const rotationDegree = progress * 360;
    if (logoRef.current) {
      logoRef.current.style.transform = `rotate(${rotationDegree}deg)`;
    }
  });

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth', // Optional, adds smooth scrolling
  //   });
  // };

  return (
    <div className="border-mainBG border-4 rounded-full  transition transform hover:scale-110">
      <div
        // onClick={scrollToTop}
        ref={logoRef}
        className="flex items-center bg-mainBG rounded-full h-10 w-10 justify-center cursor-pointer "
      >
        <img
          src="/Logo.svg"
          alt="Zero Da Vinci Logo"
          className="rounded-full"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
