import React from 'react';
import { ColorPicker, RotationSlider, ViewAR } from './customiserElements';

function Customiser() {
  return (
    <div className="w-full flex items-center justify-start">
      <hr className="w-screen absolute border border-black" />

      <div className="ml-[47vw] md:w-[50vw] md:flex hidden ">
        <div className="flex flex-row items-center max-w-lg mr-12 w-full">
          <div className="flex flex-row items-center justify-center w-full ">
            <div className="flex flex-col items-center">
              <p className="absolute -translate-y-5 text-xs">Choose Shade</p>
              <ColorPicker />
            </div>
            <div className="flex flex-col w-full items-center">
              <p className="absolute -translate-y-6 text-xs">Slide to rotate</p>
              <RotationSlider />
            </div>
            <ViewAR />
          </div>
        </div>
      </div>
      <div className="md:hidden w-full mb-0 ">
        <div className="flex flex-row items-center justify-center w-full ">
          <div className="flex flex-row items-center justify-center w-full  max-w-sm px-2">
            <div className="flex flex-col w-full items-center">
              <p className="absolute -translate-y-6 text-xs">Slide to rotate</p>
              <RotationSlider />
            </div>
            <ViewAR />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customiser;
