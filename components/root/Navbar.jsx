import React from 'react';
import Logo from './Logo';
import HeaderButton from './HeaderButton';
import Container from './Container';

function Navbar() {
  return (
    <header className="w-screen z-30 fixed ">
      <div className="w-screen h-10 bg-mainBG fixed z-0" />
      <hr className="mt-10 border fixed border-black w-screen z-0" />
      <Container>
        <div className=" w-11/12 mt-4 mx-auto flex items-center justify-between z-10 relative ">
          <Logo />
          <HeaderButton />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
