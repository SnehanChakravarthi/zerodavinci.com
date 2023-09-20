import React from 'react';

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
          Vinci embodies durability, comfort, and timeless elegance. A union of
          high-end materials that enhance function and elevate artistry.
        </p>
        {/* <ColorPicker /> */}
      </div>
    </>
  );
}

export default DesignSection;
