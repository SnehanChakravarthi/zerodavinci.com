import React from 'react';
import { ColorPicker } from './customiserElements';

function DesignSection() {
  return (
    <>
      <div className="sm:w-2/3 lg:mt-20 sm:mt-12 mt-10 px-2 sm:px-0 ">
        <div className="flex-col mb-2 text-4xl font-bold lg:text-6xl sm:text-5xl">
          <span className="block -mb-2">Form</span>
          <span className="block">Function</span>
        </div>

        <p className="text-sm mb-6 sm:max-w-lg max-w-md  font-medium  tracking-wide text-neutral-600 sm:text-start text-justify sm:text-base">
          Blending robust metal, premium leather, and handcrafted wood, Zero da
          Vinci embodies durability, comfort, and timeless elegance. Designed
          for convenience, it also comes in a flat-packed format, making
          assembly and relocation a breeze.
        </p>
        <div className="md:hidden flex-row items-center justify-start w-full flex ">
          <ColorPicker />
          <p className="ml-1 text-xs italic"> &larr; Chose shade</p>
        </div>
      </div>
    </>
  );
}

export default DesignSection;
