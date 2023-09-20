'use client';

import { useControls } from 'leva';

export default function LevaControls() {
  const { posX, posY, posZ, intensity } = useControls('Directional Light', {
    posX: {
      value: 3,
      min: -10,
      max: 10,
      step: 0.1,
    },
    posY: {
      value: 2,
      min: -10,
      max: 10,
      step: 0.1,
    },
    posZ: {
      value: 1.5,
      min: -10,
      max: 10,
      step: 0.1,
    },
    intensity: {
      value: 1,
      min: 0,
      max: 2,
      step: 0.1,
    },
  });

  const { frustum, size, near, samples, rings } = useControls('Soft Shadows', {
    frustum: {
      value: 3.75,
      min: 0,
      max: 10,
      step: 0.01,
    },
    size: {
      value: 35,
      min: 0,
      max: 20,
      step: 0.1,
    },
    near: {
      value: 9.5,
      min: 0,
      max: 20,
      step: 0.1,
    },
    samples: {
      value: 30,
      min: 1,
      max: 100,
      step: 1,
    },
    rings: {
      value: 11,
      min: 1,
      max: 20,
      step: 1,
    },
  });

  return {
    posX,
    posY,
    posZ,
    intensity,
    frustum,
    size,
    near,
    samples,
    rings,
  };
}
