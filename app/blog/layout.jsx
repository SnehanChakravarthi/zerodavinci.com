import React from 'react';

function blogLayout({ children }) {
  return (
    <div className="w-full h-auto bg-mainBG">
      <div className="container flex flex-col items-center w-full h-full mx-auto">
        <div className="w-11/12 h-full my-12">{children}</div>
      </div>
    </div>
  );
}

export default blogLayout;
