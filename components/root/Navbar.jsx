'use client';

import React from 'react';
import Logo from './Logo';
import HeaderButton from './HeaderButton';
import Container from './Container';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="w-screen z-30 fixed ">
      <div className="w-screen h-10 bg-mainBG fixed z-0" />
      <hr className="mt-10 border fixed border-black w-screen z-0" />
      <Container>
        <div className=" w-11/12 mt-4 mx-auto flex items-center justify-between z-10 relative ">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Logo />
            </Link>
            <div className="bg-mainBG  absolute ml-6 -z-10 py-1 pr-1 rounded-r-full">
              <div className="bg-black ml-4 -z-10 py-2 rounded-r-full">
                <Link
                  href="/blog"
                  className="text-sm hover:text-white  font-medium  text-mainBG ml-10  rounded-r-full sm:text-base text-clip  sm:text-center tracking-wide flex-col items-center justify-center  shadow-black/30 "
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-sm hover:text-white font-medium  text-mainBG  mx-6  rounded-r-full sm:text-base text-clip  sm:text-center tracking-wide flex-col items-center justify-center  shadow-black/30 "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <HeaderButton />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
