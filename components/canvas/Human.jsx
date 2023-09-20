import React, { useRef, useEffect } from 'react';
import { useGLTF, Edges, Outlines } from '@react-three/drei';

export default function Human({ sit, rest, ...props }) {
  const { nodes } = useGLTF('/Human-transformed.glb');
  const laptopRef = useRef();
  const humanSitRef = useRef();
  const humanRestRef = useRef();

  useEffect(() => {
    if (laptopRef.current && humanSitRef.current) {
      laptopRef.current.visible = sit;
      humanSitRef.current.visible = sit;
    }
    if (humanRestRef.current) {
      humanRestRef.current.visible = rest;
    }
  }, [sit, rest]);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={laptopRef}
        geometry={nodes.Laptop.geometry}
        position={[0, 0.006, 0.091]}
        rotation={[-0.104, 0, 0]}
      >
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={1}
        />
        <Edges threshold={40} color="black" />
        {/* <Outlines thickness={0.5} angle={0} color="black" /> */}
      </mesh>
      <mesh
        ref={humanSitRef}
        geometry={nodes.HumanSit.geometry}
        position={[0, 0.006, 0.065]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.0094}
      >
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={1}
        />
        <Edges threshold={60} color="black" />
        <Outlines thickness={0.5} angle={20} color="black" />
      </mesh>

      <mesh
        ref={humanRestRef}
        geometry={nodes.HumanRest.geometry}
        position={[0, 0.006, 0.091]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.0095}
      >
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={1}
        />
        <Edges threshold={60} color="black" />
        <Outlines thickness={0.5} angle={10} color="black" />
      </mesh>
    </group>
  );
}

useGLTF.preload('/Human-transformed.glb');
