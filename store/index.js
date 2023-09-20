// "use client";

import { proxy } from "valtio";

const state = proxy({
  modelColor: 0,
  loadProgress: 0,
  rotationSlider: 0,
  modelLoaded: false,
});

export default state;
