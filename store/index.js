// "use client";

import { proxy } from 'valtio';

const state = proxy({
  modelColor: '#A8A9AD',
  loadProgress: 0,
  rotationSlider: 0,
  modelLoaded: false,
  subscribed: false,
});

export default state;
