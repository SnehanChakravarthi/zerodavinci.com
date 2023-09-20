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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional, adds smooth scrolling
    });
  };

  return (
    <div className="border-neutral-200 border-4 rounded-full">
      <div
        onClick={scrollToTop}
        ref={logoRef}
        className="flex items-center bg-neutral-200 rounded-full h-10 w-10 justify-center cursor-pointer"
      >
        <img
          src="/Logo.svg"
          alt="Zero Da Vinci Logo"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
