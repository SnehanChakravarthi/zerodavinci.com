import React from 'react';

function SemiSection() {
  return (
    <div className="sm:w-2/3 lg:mt-20 sm:mt-12 mt-10 px-2 sm:px-0">
      <div className="flex-col mb-2 text-4xl font-bold lg:text-6xl sm:text-5xl">
        <span className="block -mb-2">Perfect</span>
        <span className="block">Interlude</span>
      </div>

      <p className="text-sm mb-6 sm:max-w-lg max-w-md  font-medium  tracking-wide text-neutral-600 sm:text-start text-justify sm:text-base">
        Take a step back without stepping away. A moment to pause, gather your
        thoughts, and recharge, bridging the gap between work and ultimate
        relaxation.
      </p>
    </div>
  );
}

export default SemiSection;
