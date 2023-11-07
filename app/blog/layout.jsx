import React from 'react';

function blogLayout({ children }) {
  return (
    <div className="bg-mainBG w-full h-auto">
      <div className="mx-auto h-full container flex w-full flex-col items-center">
        <div className="my-12 h-full w-11/12">{children}</div>
      </div>
    </div>
  );
}

export default blogLayout;
