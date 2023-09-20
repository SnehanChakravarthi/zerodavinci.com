import React from 'react';

function TurnDevice() {
  return (
    <div
      id="rotate-device-message"
      className="rotate-device-message flex fixed inset-0 bg-gray-800 text-white items-center justify-center text-2xl z-50"
    >
      <p>Please rotate your device to portrait mode.</p>
    </div>
  );
}

export default TurnDevice;
