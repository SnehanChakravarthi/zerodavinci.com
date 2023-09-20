'use client';

import React from 'react';
import useHandleSubmit from '../../hooks/useHandleSubmit'; // Import the custom hook

export default function SignUpForm() {
  const { handleSubmit, alertMessage } = useHandleSubmit();

  return (
    <div className="sm:bg-transparent bg-neutral-200">
      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-2 grid-cols-2 sm:grid-rows-2 gap-2 sm:grid-cols-2 "
      >
        <label className="block ">
          {/* <span className="text-black">Full name</span> */}
          <input
            name="fullName"
            type="text"
            className="
                    block
                    w-full
                    rounded-md
                    border-transparent
                    bg-neutral-300 focus:border-neutral-500 focus:bg-neutral-100
                    focus:ring-0 
                  "
            placeholder="Full Name"
          />
        </label>

        <label className="block ">
          {/* <span className="text-black">Email address</span> */}
          <input
            name="email"
            type="email"
            className="
                    block
                    w-full
                    rounded-md
                    border-transparent
                    bg-neutral-300 focus:border-neutral-500 focus:bg-neutral-100
                    focus:ring-0 
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "
            placeholder="Email address"
          />
        </label>

        <div className="block col-span-2">
          <div className="h-full">
            <button
              type="submit"
              className="h-full w-full text-xl rounded-md  bg-green-500 font-bold text-black hover:bg-black hover:text-green-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
      <p className="font-light text-xs pt-1 ">
        We respect your privacy. Your email address will never be shared or
        sold.
      </p>
      {alertMessage && <p className="text-red-500">{alertMessage}</p>}
    </div>
  );
}
