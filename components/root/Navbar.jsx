import React from 'react';
import Logo from './Logo';
import HeaderButton from './HeaderButton';
import Container from './Container';

function Navbar() {
  return (
    <header className="mt-4 w-screen z-30 fixed ">
      <hr className="mt-6 border fixed border-black w-screen z-0" />
      <Container>
        <div className=" w-11/12  mx-auto flex items-center justify-between z-10 relative ">
          <Logo />
          <HeaderButton />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
