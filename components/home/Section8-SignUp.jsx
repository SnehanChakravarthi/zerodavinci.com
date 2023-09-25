import React from 'react';
import SignUpForm from '../root/signUpFormHome';

function SignUpSection() {
  return (
    <div className="tracking-wide w-full max-w-2xl">
      <p className="text-2xl font-bold md:text-3xl mb-4">Join the Revolution</p>

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
      <p className="font-light text-xs pt-1">
        We respect your privacy. Your email address will never be shared or
        sold.
      </p>
    </div>
  );
}

export default SignUpSection;
