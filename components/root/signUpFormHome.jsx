'use client';

import React from 'react';
import useHandleSubmit from '../../hooks/useHandleSubmit'; // Import the custom hook

const inputStyles =
  'block w-full rounded-md border bg-neutral-300 focus:border-neutral-500 focus:bg-neutral-100 focus:ring-0';
const alertStyles = 'text-red-500 mt-2';

export default function SignUpForm() {
  const { handleSubmit, alertMessage } = useHandleSubmit();

  return (
    <div className="sm:bg-transparent bg-mainBG sm:mr-0 mr-3">
      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-2 grid-cols-2 sm:grid-rows-2 gap-2 sm:grid-cols-2"
      >
        {/* Full Name Field */}
        <label className="block">
          <input
            name="fullName"
            type="text"
            className={inputStyles}
            placeholder="Full Name"
          />
        </label>

        {/* Email Address Field */}
        <label className="block">
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={`${inputStyles} invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500`}
            placeholder="Email address"
          />
        </label>

        {/* Subscribe Button */}
        <div className="block col-span-2">
          <div className="h-full">
            <button
              type="submit"
              className="h-full w-full text-xl rounded-md bg-green-500 font-bold text-black hover:bg-black hover:text-green-500"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Alert message */}
        {alertMessage && <p className={alertStyles}>{alertMessage}</p>}
      </form>

      {/* Privacy Note */}
      <p className="font-light text-xs pt-1">
        We respect your privacy. Your email address will never be shared or
        sold.
      </p>
    </div>
  );
}
