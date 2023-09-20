import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useEffect } from "react";

export default function SitArticlePopover() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-thin text-white">
          Read More
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal className="h-screen w-screen ">
        <AlertDialog.Overlay className="fixed inset-0 bg-black/80 data-[state=open]:animate-overlayShow" />
        <AlertDialog.Content className="fixed left-[50%] top-[50%] z-10 flex h-[70vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] flex-col justify-between rounded-xl bg-white p-4  focus:outline-none  data-[state=open]:animate-contentShow sm:left-[50%] sm:w-[60vw]  sm:p-[25px]">
          <AlertDialog.Description className="mt-4 items-center justify-center sm:flex ">
            <div className="h-full w-full p-4 overflow-y-auto space-y-4 ">
              <span className="text-3xl font-semibold">
                Work Beyond Boundaries
              </span>

              <p className="text-lg">
                In today's world, the lines between work and life are
                increasingly blurred. Zero da Vinci's Work Mode is designed to
                be an oasis of focused productivity that helps you delineate
                those boundaries.
              </p>

              <p className="text-lg">
                The integrated mini height-adjustable desk serves dual purposes.
                It accommodates ergonomic needs while also providing a dedicated
                workspace. This setup encourages you to center your thoughts and
                actions on tasks at hand.
              </p>

              <p className="text-lg">
                But Work Mode isn't just about physical comfort; it's a mindset
                of elevated performance. The ergonomic design aims to relieve
                back strain and improve posture, enabling you to work longer
                without discomfort.
              </p>

              <p className="text-lg">
                The design goes a step further with built-in storage
                compartments, thoughtfully incorporated to keep your workspace
                clutter-free, thereby reducing distractions.
              </p>

              <p className="text-lg">
                Work Mode by Zero da Vinci creates a unique environment that
                stimulates your focus, creativity, and posture. It sets the
                stage for peak performance. In this space, challenges transform
                into opportunities waiting to be seized.
              </p>

              <p className="text-lg font-medium">
                Welcome to a new frontier of limitless productivity, where Work
                Mode by Zero da Vinci helps you Work Beyond Boundaries.
              </p>
            </div>
          </AlertDialog.Description>

          <div className="absolute right-3 top-3 cursor-pointer">
            <AlertDialog.Cancel asChild>
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
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
