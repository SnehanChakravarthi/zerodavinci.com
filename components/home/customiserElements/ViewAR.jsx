'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import * as Dialog from '@radix-ui/react-dialog';
import QRCode from 'react-qr-code';
import { useState, useEffect } from 'react';

const ARView = dynamic(() => import('@/components/ar/AR'), {
  ssr: false,
});
export default function ViewAR() {
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const baseUrl = `${window.location.protocol}//${window.location.host}`;
      setQrValue(`${baseUrl}/AR`);
    }
  }, []);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="rounded-full pr-3">
          <div className="relative w-16 h-16 border border-black rounded-full flex items-center justify-center bg-black cursor-pointer hover-trigger">
            {/* Tooltip */}
            <div className="hidden absolute bg-black text-xs text-white px-2 py-1 rounded z-10 hover-content">
              AR Mode
            </div>
            <div className="w-14 h-14 relative rounded-full  flex items-center justify-center ">
              <div className="absolute w-full h-full animate-slowSpin">
                <img
                  src="/ARViewCircularBlack.svg"
                  alt="AR View Circular"
                  className="object-contain h-full w-full"
                />
              </div>
              <button className="absolute border border-black flex h-9 w-9 items-center justify-center bg-white rounded-full">
                <img
                  src="/apple-ar-logo.svg"
                  alt="AR Model Viewer"
                  className="h-7 w-7"
                />
              </button>
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/90 data-[state=open]:animate-overlayShow z-30" />
        <Dialog.Content className="fixed z-40 left-[50%] top-[50%] flex h-[80vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] flex-col justify-between rounded-xl bg-white p-4  focus:outline-none  data-[state=open]:animate-contentShow sm:left-[50%] sm:w-[50vw]  sm:p-[25px]">
          {/* <Dialog.Title className="mt-8 text-center items-center justify-center flex text-sm sm:hidden px-4">
            Pick the color variant, chose mode, click AR Button at the bottom to
            view Zero da Vinci at your place
          </Dialog.Title> */}
          <div className="h-full w-full">
            <ARView />

            <div className="absolute sm:flex flex-col top-6 w-full max-w-[96px] h-auto hidden bg-white">
              <QRCode
                size={256}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                value={qrValue}
                viewBox={`0 0 256 256`}
              />
              <p className="text-xs text-center mt-2">
                Scan QR code for AR view or visit this site on your phone
              </p>
            </div>
          </div>

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
}
