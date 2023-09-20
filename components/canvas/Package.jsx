import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import state from '../../store';

export default function Package(props) {
  const { nodes, materials } = useGLTF('/Package-transformed.glb');
  const snap = useSnapshot(state);
  const buttonValue = snap.modelColor;

  const packageColor = {
    2: materials.PackageBlack,
    0: materials.PackageChrome,
    1: materials.PackageGold,
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PackageBox.geometry}
        material={packageColor[buttonValue]}
        position={[0, 0, 0]}
        scale={[1, 1, 1.15]}
      />
    </group>
  );
}

useGLTF.preload('/Package-transformed.glb');
