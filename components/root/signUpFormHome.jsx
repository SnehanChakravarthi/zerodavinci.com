'use client';

import React from 'react';
import useHandleSubmit from '../../hooks/useHandleSubmit'; // Import the custom hook

const inputStyles =
  'block w-full rounded-md border bg-neutral-300 focus:border-black focus:bg-neutral-100 focus:ring-1 focus:ring-black';
const alertStyles = 'text-red-500 mt-2 font-bold whitespace-nowrap';

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
            required
            minLength="2"
            className={inputStyles}
            placeholder="Full Name"
          />
        </label>

        {/* Email Address Field */}
        <label className="block">
          <input
            name="email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            autoComplete="email"
            className={`${inputStyles}`}
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
