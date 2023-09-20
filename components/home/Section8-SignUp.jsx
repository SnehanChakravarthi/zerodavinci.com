import React from 'react';
import SignUpForm from '../root/signUpFormHome';

function SignUpSection() {
  return (
    <div className="px-2 sm:w-1/2 lg:mt-20 sm:mt-12 mt-8 tracking-wide">
      <p className="text-4xl font-bold sm:mb-4 mb-2 sm:text-6xl">Get Ahead</p>
      {/* <p className="text-lg font-medium sm:text-xl mb-2 text-green-500">
        Subscribe for:
      </p> */}
      <p className="text-sm font-normal sm:text-base text-neutral-600">
        💰 Access to one-time-only Early Bird Deals.
      </p>
      <p className="text-sm font-normal sm:text-base text-neutral-600">
        🚀 Frontline seat of our upcoming crowdfunding launch.
      </p>

      <p className=" text-sm font-normal sm:text-base mb-2 text-neutral-600">
        💡 Behind-the-scenes insights and design details.
      </p>

      <p className="font-bold text-xs  sm:text-xs mb-3 ">
        Join our community and and experience comfort and luxury at their
        pinnacle.
      </p>
      <SignUpForm />
    </div>
  );
}

export default SignUpSection;
