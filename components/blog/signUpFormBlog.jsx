"use client";

import React from "react";
import useHandleSubmit from "../../hooks/useHandleSubmit"; // Import the custom hook

export default function SignUpForm() {
  const { handleSubmit, alertMessage } = useHandleSubmit();

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="grid grid-rows-3 gap-2 ">
        <label className="block">
          {/* <span className="text-black">Full name</span> */}
          <input
            name="fullName"
            type="text"
            className="
                    block
                    w-full
                    border-transparent
                    bg-gray-100
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="Full Name"
          />
        </label>

        <label className="block">
          {/* <span className="text-black">Email address</span> */}
          <input
            name="email"
            type="email"
            className="
                    block
                    w-full
                    border-transparent
                    bg-gray-100
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="Email address"
          />
        </label>

        <div className="block ">
          <div className="h-full">
            <button
              type="submit"
              className="h-full w-full  bg-black  text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
