import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import state from '../../store';

export default function Package(props) {
  const { nodes, materials } = useGLTF('/Package-transformed.glb');
  const snap = useSnapshot(state);

  const packageColor = {
    '#535353': materials.PackageBlack,
    '#A8A9AD': materials.PackageChrome,
    '#B88A53': materials.PackageGold,
  };

  const selectedMaterial =
    packageColor[snap.modelColor] || materials.PackageChrome;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PackageBox.geometry}
        material={selectedMaterial}
        position={[0, 0, 0]}
        scale={[1, 1, 1.15]}
      />
    </group>
  );
}

useGLTF.preload('/Package-transformed.glb');
