'use client';

import { useEffect, useRef } from 'react';

export const useMousePosition = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX - window.innerWidth / 2) * 0.001,
        y: Math.max((event.clientY - window.innerHeight / 2) * -0.003, 0),
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition.current;
};
