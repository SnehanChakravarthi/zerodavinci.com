'use client';

import React from 'react';
import { ColorPicker } from './customiserElements';
import { useWindowDimensions } from '@/hooks';

function Hero() {
  // const { windowDimensions } = useWindowDimensions();

  // const baseFontSize = windowDimensions.width / 30; // Set the base font size as you like

  // const styles = {
  //   fontSize1: `${baseFontSize * 5.5}px`,
  //   fontSize2: `${baseFontSize * 4}px`,
  //   fontSize3: `${baseFontSize * 6.7}px`,
  // };

  return (
    <div className="w-full h-[170vh] flex flex-col items-center justify-start">
      <div className="space-y-1 text-center sticky top-28">
        {/* Intro */}
        {/* <p className="text-xl sm:text-xl font-light">Introducing</p> */}
        {/* ZERO da VINCI */}
        {/* {windowDimensions.width < 480 ? (
          <div>
            <span
              style={{ fontSize: styles.fontSize1 }}
              className="leading-8 sm:leading-custom"
            >
              ZERO
            </span>
            <span
              style={{ fontSize: styles.fontSize2 }}
              className="pl-1 sm:pl-4"
            >
              da
            </span>
            <br />
            <span
              style={{ fontSize: styles.fontSize3 }}
              className="inline-block -mt-3 font-bold leading-custom sm:leading-custom"
            >
              VINCI
            </span>
          </div>
        ) : ( */}
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
        <h2 className="text-md font-medium ">Zero Gravity Workstation</h2>
        <div className=" w-full flex flex-col items-center pt-4 justify-center">
          {/* <hr className="w-[60vw] sm:w-[50vw] absolute  lg:w-[35vw] border-black border" /> */}
          <div class="gradient-line w-full h-0.5 absolute"></div>
          <ColorPicker />
          <p className="text-xs mt-20 italic absolute ">
            Choose Your Shade and Dive in <br />
            Scroll up and down for more
          </p>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      {/* <div className="pt-[95vh] -translate-x-1 flex w-full flex-col items-center justify-center">
        <div className="scroll-down" />
      </div> */}
    </div>
  );
}

export default Hero;
