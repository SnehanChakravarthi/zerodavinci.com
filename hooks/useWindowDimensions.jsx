'use client';

import { useEffect, useState } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [deviceType, setDeviceType] = useState(''); // mobile, tablet, desktop

  useEffect(() => {
    function handleResize() {
      const { innerWidth, innerHeight } = window;

      setWindowDimensions({
        width: innerWidth,
        height: innerHeight,
      });

      if (innerWidth <= 540) {
        setDeviceType('mobile');
      } else if (innerWidth > 540 && innerWidth <= 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    }

    handleResize(); // Initialize

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    windowDimensions,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
  };
}
