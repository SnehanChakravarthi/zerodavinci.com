import * as THREE from 'three';
import { MeshStandardMaterial } from 'three';
import React, { useState, useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { dampC } from 'maath/easing';
import { useLenis } from '@studio-freight/react-lenis';
import state from '../../store';
import { scrollUtils } from '@/hooks';

const animationNames = [
  'ZeroDaVinciAction', // 0
  'CastorsAction', // 1
  'DeskAction', // 2
  'LegFrameAction', // 3
  'LegRestAction', // 4
  'HeadFrameAction', // 5
  'HeadRestAction', // 6
  'HeadFrameAction3', // 7
  'HeadRestAction3', // 8
  'LegRestAction2', // 9
  'BoundingBoxAction', // 10
];

const meshesToChangeSet = new Set([
  'BodyMesh_3',
  'DeskMesh_1',
  'HeadFrameMesh',
  'HeadRestMesh_1',
  'LegFrameMesh',
  'LegRestMesh_1',
]);

const buttonColors = {
  2: '#535353', // black
  0: '#A8A9AD', // silver
  1: '#B88A53', // gold
};

const HERO_SECTION_START = 0.1 / 9;
const HERO_SECTION_END = 0.4 / 9;

const HIDDEN_SECTION_START = 1.6 / 9;
const HIDDEN_SECTION_END = 0.2 / 9;

const SEMI_MODE_START = 3 / 9;
const SEMI_MODE_END = 0.5 / 9;

const REST_MODE_START = 4 / 9;
const REST_MODE_END = 0.4 / 9;

// const CHECKOUT_MODE_START = 6 / 9;
// const CHECKOUT_MODE_END = 0.3 / 9;

// const SUBSCRIBE_MODE_START = 7 / 9;
// const SUBSCRIBE_MODE_END = 0.3 / 9;

const MY_CLIP_DURATION = 3.75;

export default function Model({ model, ...props }) {
  const snap = useSnapshot(state);
  const isColorChangingRef = useRef(false); // Use useRef instead of useState
  const previousModelColor = useRef(snap.modelColor); // Initialize with the current global state
  const updatedTargetColor = useRef(new THREE.Color());
  const baseMaterialRef = useRef(
    new MeshStandardMaterial({
      color: snap.modelColor || '#A5A5A5',
      metalness: 1,
      roughness: 0.4,
    })
  );

  const group = useRef();
  const mixers = useRef({});
  const actions = useRef({});
  const clips = useRef({});
  const animProgressRef = useRef(0);
  const prevAnimProgressRef = useRef(null);
  const animIndexRef = useRef([]);

  let animProgress = 0;
  if (model === 2) {
    animProgress = 1;
  }
  let animIndex = [0, 1, 2, 3, 4, 5, 6];

  const { nodes, materials, animations, scene } = useGLTF(
    '/ZeroDV-transformed.glb'
  );

  // Initialize mixers and actions only once, then cache them.
  useEffect(() => {
    // console.count("Model useEffect");
    for (const animationName of animationNames) {
      if (!clips.current[animationName]) {
        clips.current[animationName] = THREE.AnimationClip.findByName(
          animations,
          animationName
        );
      }
      const clip = clips.current[animationName];
      if (clip && !actions.current[animationName]) {
        const mixer = new THREE.AnimationMixer(group.current);
        const action = mixer.clipAction(clip);
        action.setLoop(THREE.LoopOnce);
        mixers.current[animationName] = mixer;
        actions.current[animationName] = action;
      }
    }
  }, []);
  // Set modelLoaded to true when all the gltf is loaded
  useEffect(() => {
    if (nodes && materials && animations) {
      state.modelLoaded = true;
    }
  }, [nodes, materials, animations]);

  // Assign material color when the modelColor changes
  useEffect(() => {
    if (group.current) {
      group.current.traverse((child) => {
        if (child instanceof THREE.Mesh && meshesToChangeSet.has(child.name)) {
          child.material = baseMaterialRef.current;
        }
      });
    }
  }, [group, meshesToChangeSet]);

  // Check if the modelColor has changed
  useEffect(() => {
    if (snap.modelColor !== previousModelColor.current) {
      isColorChangingRef.current = true; // Use the ref to keep track
      previousModelColor.current = snap.modelColor;
    }
  }, [snap.modelColor]);

  // Frame loop to change the color
  useFrame((_, delta) => {
    if (isColorChangingRef.current) {
      console.log('Changing color');
      // Check the ref
      updatedTargetColor.current.set(snap.modelColor || '#A5A5A5');

      dampC(
        baseMaterialRef.current.color,
        updatedTargetColor.current,
        0.1,
        delta
      );

      if (baseMaterialRef.current.color.equals(updatedTargetColor.current)) {
        isColorChangingRef.current = false; // Update the ref
      }
    }
  });

  // Scroll loop for animation calculation
  useLenis(({ progress }) => {
    scrollUtils.updateOffset(progress);

    const heroSectionProgress = scrollUtils.range(
      HERO_SECTION_START,
      HERO_SECTION_END
    );
    const hiddenSectionProgress = scrollUtils.range(
      HIDDEN_SECTION_START,
      HIDDEN_SECTION_END
    );
    const semiModeProgress = scrollUtils.range(SEMI_MODE_START, SEMI_MODE_END);
    const restModeProgress = scrollUtils.range(REST_MODE_START, REST_MODE_END);
    // const checkoutModeProgess = scrollUtils.range(
    //   CHECKOUT_MODE_START,
    //   CHECKOUT_MODE_END
    // );
    // const subscribeModeProgress = scrollUtils.range(
    //   SUBSCRIBE_MODE_START,
    //   SUBSCRIBE_MODE_END
    // );

    if (heroSectionProgress > 0) {
      animIndex = [0, 1, 2, 3, 4, 5, 6, 10];
      if (model === 2) {
        animProgress = 1 - heroSectionProgress;
      } else {
        animProgress = heroSectionProgress;
      }
    }

    if (hiddenSectionProgress > 0) {
      animProgress = hiddenSectionProgress;
      animIndex = [3, 4, 5, 6, 7, 8, 9];
    }

    if (semiModeProgress > 0) {
      animProgress = 1 - semiModeProgress;
      animIndex = [2, 3, 7, 8, 9];
    }
    if (restModeProgress > 0) {
      animProgress = 1 - restModeProgress;
      animIndex = [0, 1, 10];
    }
    // if (checkoutModeProgess > 0) {
    //   animProgress = checkoutModeProgess;
    //   animIndex = [0, 1, 10];
    // }
    // if (subscribeModeProgress > 0) {
    //   animProgress = subscribeModeProgress;
    //   animIndex = [2, 3, 7, 8, 9];
    // }

    animProgressRef.current = animProgress;
    animIndexRef.current = animIndex;
  });

  // Frame loop for animation
  useFrame((state, delta) => {
    const currentAnimProgress = animProgressRef.current;

    // Check if animProgressRef has changed, if not, exit early.
    if (prevAnimProgressRef.current === currentAnimProgress) {
      return;
    }

    const currentAnimIndex = animIndexRef.current;
    prevAnimProgressRef.current = currentAnimProgress;

    for (const index of currentAnimIndex) {
      const animationName = animationNames[index];

      // De-structure here to reduce dot notation repetition
      const { [animationName]: action } = actions.current;
      const { [animationName]: mixer } = mixers.current;

      // Early exit if action or mixer doesn't exist
      if (!action || !mixer) continue;

      // Perform calculation and update
      action.time = currentAnimProgress * MY_CLIP_DURATION;
      action.play();
      action.paused = true;
      mixer.update(delta);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="BoundingBox" position={[0, 0, -0.07]} scale={1.479}>
          <group
            name="ZeroDaVinci"
            position={[0, 0.049, -0.108]}
            rotation={[0.593, 0, 0]}
            scale={0.676}
          >
            <mesh
              name="Castors"
              castShadow
              receiveShadow
              geometry={nodes.Castors.geometry}
              material={materials.BlackBase}
              position={[0, 0.045, 0.129]}
            />
            <group name="Body">
              <mesh
                name="BodyMesh"
                castShadow
                receiveShadow
                geometry={nodes.BodyMesh.geometry}
                material={materials.ModelMaterial}
              />
              <mesh
                name="BodyMesh_1"
                castShadow
                receiveShadow
                geometry={nodes.BodyMesh_1.geometry}
                material={baseMaterialRef.current}
              />
              <mesh
                name="BodyMesh_2"
                castShadow
                receiveShadow
                geometry={nodes.BodyMesh_2.geometry}
                material={materials.CaseMaterial}
              />
              <mesh
                name="BodyMesh_3"
                castShadow
                receiveShadow
                geometry={nodes.BodyMesh_3.geometry}
                material={baseMaterialRef.current}
              />

              <group
                name="Desk"
                position={[0, 0.731, 0.118]}
                rotation={[2.094, 0, 0]}
              >
                <mesh
                  name="DeskMesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.DeskMesh.geometry}
                  material={materials.ModelMaterial}
                />

                <mesh
                  name="DeskMesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.DeskMesh_1.geometry}
                  material={baseMaterialRef.current}
                />
                <mesh
                  name="DeskMesh_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.DeskMesh_2.geometry}
                  material={materials.BlackBase}
                />
                <mesh
                  name="DeskMesh_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.DeskMesh_3.geometry}
                  material={materials.CaseMaterial}
                />
                <group name="DeskLid" position={[0, 0.011, 0.24]}>
                  <mesh
                    name="DeskLidMesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.DeskLidMesh.geometry}
                    material={materials.ModelMaterial}
                  />

                  <mesh
                    name="DeskLidMesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.DeskLidMesh_1.geometry}
                    material={baseMaterialRef.current}
                  />
                  <mesh
                    name="DeskLidMesh_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.DeskLidMesh_2.geometry}
                    material={materials.BlackBase}
                  />
                </group>
              </group>
              <group
                name="HeadFrame"
                position={[0, 0.732, 0.438]}
                rotation={[0.384, 0, 0]}
              >
                <mesh
                  name="HeadFrameMesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.HeadFrameMesh.geometry}
                  material={baseMaterialRef.current}
                />
                <mesh
                  name="HeadFrameMesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.HeadFrameMesh_1.geometry}
                  material={materials.BlackBase}
                />
                <group
                  name="HeadRest"
                  position={[0, 0.194, -0.287]}
                  rotation={[1.326, 0, 0]}
                >
                  <mesh
                    name="HeadRestMesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.HeadRestMesh.geometry}
                    material={materials.ModelMaterial}
                  ></mesh>

                  <mesh
                    name="HeadRestMesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.HeadRestMesh_1.geometry}
                    material={baseMaterialRef.current}
                  />

                  <mesh
                    name="HeadRestMesh_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.HeadRestMesh_2.geometry}
                    material={baseMaterialRef.current}
                  />
                  <mesh
                    name="HeadRestMesh_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.HeadRestMesh_3.geometry}
                    material={materials.CaseMaterial}
                  />
                  <mesh
                    name="HeadRestMesh_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.HeadRestMesh_4.geometry}
                    material={materials.BlackBase}
                  />
                </group>
              </group>
              <group
                name="LegFrame"
                position={[0, 0.447, -0.449]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="LegFrameMesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.LegFrameMesh.geometry}
                  material={baseMaterialRef.current}
                />

                <mesh
                  name="LegFrameMesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.LegFrameMesh_1.geometry}
                  material={materials.CaseMaterial}
                />

                <group
                  name="LegRest"
                  position={[0, 0.256, -0.05]}
                  rotation={[-Math.PI / 9, 0, 0]}
                >
                  <mesh
                    name="LegRestMesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.LegRestMesh.geometry}
                    material={materials.ModelMaterial}
                  />
                  <mesh
                    name="LegRestMesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.LegRestMesh_1.geometry}
                    material={baseMaterialRef.current}
                  />
                  <mesh
                    name="LegRestMesh_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.LegRestMesh_2.geometry}
                    material={baseMaterialRef.current}
                  />
                  <mesh
                    name="LegRestMesh_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.LegRestMesh_3.geometry}
                    material={materials.BlackBase}
                  />
                </group>
              </group>
            </group>
            <mesh
              name="LeftFrame"
              castShadow
              receiveShadow
              geometry={nodes.LeftFrame.geometry}
              material={materials.BlackBase}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/ZeroDV-transformed.glb');
