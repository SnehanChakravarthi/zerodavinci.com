import React, { useEffect, useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

const numDivs = 9; // Number of div elements
const segment = 1 / numDivs; // Divide 1 (100%) by the number of divs
function PageProgress() {
  const progressRef = useRef(0);

  useLenis(({ progress: currentProgress }) => {
    progressRef.current = currentProgress;
  });

  return (
    <div className="flex flex-col sm:space-y-4 space-y-1 items-center">
      {[...Array(numDivs)].map((_, i) => {
        const lowerBound = i * segment;
        const upperBound = (i + 1) * segment;
        const isActive =
          progressRef.current >= lowerBound && progressRef.current < upperBound;
        const size = isActive
          ? 'sm:w-3 sm:h-4 w-2 h-2'
          : 'sm:w-2 sm:h-2 w-1 h-1';
        const backgroundColor = isActive ? 'bg-black' : 'bg-black/30';

        return (
          <div key={i} className="w-3 h-4 flex items-center justify-center">
            <div
              className={`${size} ${backgroundColor} rounded-full transition-all duration-500`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PageProgress;
