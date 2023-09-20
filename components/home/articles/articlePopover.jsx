import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import WorkModeArticle from "./WorkModeArticle";
import ScrollArea from "./scrollArea";

const ArticleDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-thin text-white">
        Read More
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/80 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="border  fixed left-[50%] top-[50%] z-10 flex h-[70vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] flex-col justify-between rounded-xl bg-white p-4  focus:outline-none  data-[state=open]:animate-contentShow sm:left-[50%] sm:w-[60vw]  sm:p-[25px]">
        <Dialog.Title className="text-3xl font-semibold my-6">
          Work Beyond Boundaries
        </Dialog.Title>
        <WorkModeArticle />
        <div className="absolute right-3 top-3 cursor-pointer">
          <Dialog.Close asChild>
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
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ArticleDialog;
