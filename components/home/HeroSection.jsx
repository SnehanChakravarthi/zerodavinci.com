'use client';

import React from 'react';
import { ColorPicker } from './customiserElements';

function Hero() {
  return (
    <div className="w-full h-[170vh] flex flex-col items-center justify-start">
      <div className="space-y-1 text-center sticky top-28">
        {/* Intro */}

        <h1 className="shrink">
          <span className="text-6xl leading-8 sm:text-7xl sm:leading-custom ">
            ZERO
          </span>
          <span className="pl-1 text-4xl sm:pl-4 sm:text-6xl ">da</span>
          <br />
          <span className="-mt-1 sm:mt-0 inline-block text-7xl font-bold leading-custom sm:text-8xl sm:leading-custom ">
            VINCI
          </span>
        </h1>
        {/* Tag Line */}
        {/* <h2 className="text-md font-medium ">Zero Gravity Workstation</h2> */}
        <div className=" w-full flex flex-col items-center pt-4 justify-center">
          {/* <hr className="w-[60vw] sm:w-[50vw] absolute  lg:w-[35vw] border-black border" /> */}
          <div className="gradient-line w-full h-0.5 absolute"></div>
          <ColorPicker />
          <p className="text-xs mt-20 italic absolute ">
            Choose Your Shade and Dive in <br />
            Scroll to Explore
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
