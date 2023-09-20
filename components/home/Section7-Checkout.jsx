import React from 'react';
import BuyButton from '../root/BuyButton';

function CheckoutSection() {
  return (
    <div className="lg:w-auto sm:w-full lg:mt-20 sm:mt-12 mt-8 px-2 sm:px-0">
      <p className="text-3xl font-bold lg:text-6xl sm:text-5xl">Grab 50% Off</p>
      <p className="block text-red-600 font-bold  sm:text-3xl lg:text-4xl text-xl">
        Super Early Bird Deal!
      </p>
      <div className="text-base font-medium sm:text-base mt-2 md:mt-6  sm:mb-2  tracking-wide text-black max-w-md">
        Reserve your Zero da Vinci today for
        <span className="font-bold text-black"> $95 </span> and secure the
        discounted price of <span className="font-bold text-black"> $1350</span>{' '}
        <span className="line-through text-red-500">$2700</span> at launch.
      </div>

      <ol className="text-sm list-decimal list-inside mb-4 mt-2 md:mt-5 font-bold sm:text-base lg:tracking-wide ">
        <li>
          Reserve:
          <span className="font-medium text-neutral-600">
            {' '}
            Buy the $95 reservation today.
          </span>
        </li>
        <li>
          Unlock:
          <span className="font-medium text-neutral-600">
            {' '}
            50% Super Early Bird Discount.
          </span>
        </li>
        <li>
          Buy:
          <span className="font-medium text-neutral-600">
            {' '}
            Complete purchase at launch.
          </span>
        </li>
      </ol>

      <BuyButton />
      <p className="font-light text-xs pt-1 ">
        🐥 Limited offer & perks for our early birds.
      </p>
    </div>
  );
}

export default CheckoutSection;
