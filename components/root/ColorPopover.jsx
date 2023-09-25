import React, { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import state from '@/store';
import SignUpForm from '@/components/root/signUpFormHome';
import * as Popover from '@radix-ui/react-popover';
import ExtendedColors from './ExtendedColors';

function ColorPopOver() {
  const snap = useSnapshot(state);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (snap.subscribed) {
      setSubscribed(true);
    }
  }, [snap.subscribed]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="sm:h-7 sm:w-7 h-8 w-8 cursor-pointer relative rounded-full border border-black hover:scale-110  transition-transform duration-200 ease-in-out">
          <img src="/ColorWheel.png" alt="color-picker" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="mx-2 rounded-lg shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={6}
        >
          {!subscribed && (
            <div className="absolute bg-black/90 z-10 rounded-lg py-2 px-3 flex flex-col">
              <p className="text-white text-xs pb-2 tracking-wide ">
                Sign Up to our Newsletter to unlock 10 additional colors
              </p>
              <SignUpForm />
              {/* <p className="font-light text-white text-xs pt-1">
                  If you are already subscribed, subscribe again to unlock all
                  colors
                </p> */}
            </div>
          )}
          <div className="px-8 py-10 bg-black rounded-lg ">
            <ExtendedColors />
          </div>
          {/* <Popover.Close asChild>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Popover.Close> */}
          <Popover.Arrow className="fill-black/90" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default ColorPopOver;
