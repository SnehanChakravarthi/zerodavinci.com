import React from 'react';

function Section2() {
  return (
    <div className="overflow-x-clip absolute w-screen -mt-52 bg-neutral-50 flex text-sm font-medium text-black sm:text-base text-clip  sm:text-center tracking-wide h-screen flex-col items-center justify-center shadow-md shadow-black/30 z-0">
      <div className="flex flex-col w-full h-auto items-center justify-center px-4 text-center py-6 ">
        <div className="flex justify-center items-center max-w-xl w-[130vw]">
          <video
            className="w-full h-full object-cover transform translate-x-5"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/ZeroDV1_webm.webm" type='video/mp4; codecs="hvc1"' />
            <source src="/ZeroDV1_hevc.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <hr className="w-[60vw] sm:w-[50vw]  lg:w-[35vw] border-black mb-6 mt-3" />
      <div className="flex flex-col items-center justify-center md:px-0 px-[7vw]  text-justify max-w-screen-lg ">
        <p className="indent-10 sm:px-28">
          A synthesis of grand design and solution-oriented multifunctionality,
          embodied into one single object. The Zero da Vinci redefines your
          space by seamlessly blending <span className="font-bold"> work</span>{' '}
          and
          <span className="font-bold"> rest.</span> It's not just furniture;
          it's a lifestyle statement that reflects your innovative and conscious
          living.
        </p>
      </div>
    </div>
  );
}

export default Section2;
