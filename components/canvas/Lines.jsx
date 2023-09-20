import React from 'react';
import { Line, Html } from '@react-three/drei';

export default function CreateLineAndLabel({
  point1,
  point2,
  label,
  dimensionsVisible,
}) {
  if (!dimensionsVisible) return null;
  // Calculate the midpoint for the label
  // const midpoint = [
  //   (point1[0] + point2[0]) / 2 + 0.02,
  //   (point1[1] + point2[1]) / 2 + 0.02,
  //   (point1[2] + point2[2]) / 2 + 0.02,
  // ];

  return (
    <>
      <Line
        points={[point1, point2]}
        color="black"
        lineWidth={1.5}
        dashed
        dashScale={50}
        dashOffset={1}
      />
      <Html position={point2}>
        {/* Spread the rest of the props here as well */}
        <div className="text-xs absolute -translate-x-10 -translate-y-5 bg-black text-white  px-2 rounded-lg whitespace-nowrap">
          <p>{label}</p>
        </div>
      </Html>
    </>
  );
}
