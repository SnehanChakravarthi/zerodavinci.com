'use client';

import React, { useState } from 'react';

export default function SignUpForm() {
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.elements.fullName.value.trim();
    const email = e.target.elements.email.value.trim();

    if (!fullName || !email) {
      setAlertMessage('Both name and email are required.');
      return;
    }

    // Continue with your actual submission logic here, and reset the alert
    setAlertMessage(null);
  };

  return (
    <div className="sm:bg-transparent bg-mainBG sm:mr-0 mr-3">
      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-2 grid-cols-2 sm:grid-rows-2 gap-2 sm:grid-cols-2"
      >
        <label className="block">
          <input
            name="fullName"
            type="text"
            className="block w-full rounded-md border bg-neutral-300 focus:border-neutral-500 focus:bg-neutral-100 focus:ring-0"
            placeholder="Full Name"
          />
        </label>
        <label className="block">
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border bg-neutral-300 focus:border-neutral-500 focus:bg-neutral-100 focus:ring-0 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            placeholder="Email address"
          />
        </label>
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
      </form>
      <p className="font-light text-xs pt-1">
        We respect your privacy. Your email address will never be shared or
        sold.
      </p>
      {alertMessage && <p className="text-red-500 mt-2">{alertMessage}</p>}
    </div>
  );
}
