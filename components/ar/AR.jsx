'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../store';
import '@google/model-viewer';

const COLORS = {
  BLACK: '2',
  CHROME: '0',
  GOLD: '1',
};

const modelData = [
  {
    model: '/ZeroDVBlack-transformed.glb',
    color: COLORS.BLACK,
    label: 'Black Model',
    bgClass: 'bg-modelBlack',
  },
  {
    model: '/ZeroDVChrome-transformed.glb',
    color: COLORS.CHROME,
    label: 'Chrome Model',
    bgClass: 'bg-modelChrome', // Or whatever class you'd like to use
  },
  {
    model: '/ZeroDVGold-transformed.glb',
    color: COLORS.GOLD,
    label: 'Gold Model',
    bgClass: 'bg-modelGold', // Or whatever class you'd like to use
  },
];

const modelMap = {
  0: '/ZeroDVChrome-transformed.glb',
  1: '/ZeroDVGold-transformed.glb',
  2: '/ZeroDVBlack-transformed.glb',
};

export default function ARView() {
  const modelViewerRef = useRef(null);
  const [arSupported, setArSupported] = useState(false);
  const snap = useSnapshot(state);
  const buttonValue = snap.modelColor;

  useEffect(() => {
    if (modelViewerRef.current) {
      setArSupported(modelViewerRef.current.canActivateAR);
      console.log('AR Supported: ', modelViewerRef.current.canActivateAR);
    }
  }, [modelViewerRef.current]);

  const initialModel = () => {
    return modelMap[buttonValue] || '/ZeroDVChrome-transformed.glb';
  };

  const [currentModel, setCurrentModel] = useState(initialModel);

  const handleClick = (value) => {
    state.modelColor = value;
    console.log(value);
  };

  const setModel = (model) => {
    setCurrentModel(model);
  };

  const playForward = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.timeScale = 1.5;
      modelViewerRef.current.play({ repetitions: 1 });
    }
  };

  const playBackward = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.timeScale = -1.5;
      modelViewerRef.current.play({ repetitions: 1 });
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      <model-viewer
        ref={modelViewerRef}
        id="my-model-viewer"
        style={{ width: '100%', height: '100%' }}
        src={currentModel}
        ar
        alt="Model of Zero Da Vinci"
        ar-placement="floor"
        ar-scale="fixed"
        camera-controls
        camera-orbit="auto auto 100%"
        camera-target="0 0 0.1m"
        max-camera-orbit="auto auto 6m"
        ar-modes="scene-viewer quick-look webxr"
        quick-look-browsers="safari chrome"
      >
        <div className="flex flex-col w-full items-center justify-center absolute bottom-12 space-y-1 text-xs font-bold">
          <p className="italic font-medium">1. Chose your Shade</p>
          <div className="flex flex-row items-center justify-center space-x-2">
            {modelData.map(({ model, color, bgClass }) => (
              <button
                key={model}
                aria-label={color}
                onClick={() => {
                  setModel(model);
                  handleClick(color);
                }}
                className={`h-8 w-8 grow cursor-pointer rounded-full border border-black ${bgClass} transform active:scale-95`}
              ></button>
            ))}
          </div>
          <p className="italic font-medium">2. Chose Mode</p>
          <div className="space-x-2 flex w-full justify-center ">
            <button
              className="rounded-full bg-red-500 h-8 border grow border-black text-black transform active:scale-95"
              onClick={playBackward}
            >
              Zero-G Mode
            </button>
            <button
              className="rounded-full bg-black h-8 grow text-white transform active:scale-95 "
              onClick={playForward}
            >
              Work Mode
            </button>
          </div>
          <p className="italic font-medium">3. Click Activate AR</p>
        </div>

        {arSupported && (
          <button
            className="bg-green-500 flex items-center justify-center h-11 py-2 rounded-full font-bold border border-black w-full absolute bottom-0 "
            slot="ar-button"
          >
            Activate AR
          </button>
        )}
        {!arSupported && (
          <div className="bg-green-500 flex items-center justify-center h-11 py-2 rounded-full font-bold border border-black w-full absolute bottom-0 ">
            AR not supported!
          </div>
        )}
      </model-viewer>
    </div>
  );
}
