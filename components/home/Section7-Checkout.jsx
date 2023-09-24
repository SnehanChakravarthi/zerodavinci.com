import React from 'react';
import BuyButton from '../root/BuyButton';
import Image from 'next/image';

function CheckoutSection() {
  return (
    <div className="w-full flex flex-col tracking-wide items-center justify-end h-auto">
      <p className="text-4xl font-bold lg:text-6xl sm:text-5xl mt-20">
        Save 50%
      </p>
      <p className="block text-yellow-500 font-bold  sm:text-3xl lg:text-4xl text-xl">
        Super Early Bird Deal!
      </p>

      <Image
        src="/pictures/blackSEB.png"
        width={500}
        height={500}
        className="rounded-xl mt-4 w-full max-w-xl hidden"
        alt=""
      />

      <div className="text-sm font-medium sm:text-lg mt-2 md:mt-6  tracking-wide text-black text-center ">
        Reserve for Just <span className="font-bold text-black">$95</span> Today
        and Get 50% Off the Retail Price!
      </div>

      {/* <p className="font-bold text-sm mt-4">👇 Here's How It Works: 👇</p> */}

      <ol className="text-sm mb-4 font-bold sm:text-base lg:tracking-wide mt-4 max-w-2xl">
        <li>
          Reserve:
          <span className="font-medium text-neutral-600">
            {' '}
            Get Super Early Bird 50% Discount by reserving today.
          </span>
        </li>
        <li>
          Purchase:
          <span className="font-medium text-neutral-600">
            {' '}
            Pay $1350{' '}
            <span className="line-through decoration-2 decoration-red-500">
              $2700
            </span>
            , in our kickstarter launch this November.
          </span>
        </li>
        <li>
          Delivery:
          <span className="font-medium text-neutral-600">
            {' '}
            Your Zero da Vinci will be shipped to you in Q1 2024.
          </span>
        </li>
      </ol>

      <BuyButton />
      <p className="font-light text-xs pt-1 ">
        Limited offer & perks for our early birds.
      </p>
    </div>
  );
}

export default CheckoutSection;
