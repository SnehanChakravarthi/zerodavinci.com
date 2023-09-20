import React from 'react';
import { ColorPicker } from './customiserElements';

function SemiSection() {
  return (
    <div className="sm:w-2/3 lg:mt-20 sm:mt-12 mt-10 px-2 sm:px-0 ">
      <div className="flex-col mb-2 text-4xl font-bold lg:text-6xl sm:text-5xl">
        <span className="block -mb-2">Apex of</span>
        <span className="block">Relaxation</span>
      </div>

      <p className="text-sm mb-6 sm:max-w-lg max-w-md  font-medium  tracking-wide text-neutral-600 sm:text-start text-justify sm:text-base">
        Submerge in ultimate relaxation, simulating the weightlessness of outer
        space. Elevate your blood flow and attain emotional tranquility. Zero
        gravity awaits.
      </p>
      <div className="md:hidden flex-row items-center justify-start w-full flex ">
        <ColorPicker />
        <p className="ml-1 text-xs italic"> &larr; Chose your shade</p>
      </div>
    </div>
  );
}

export default SemiSection;
