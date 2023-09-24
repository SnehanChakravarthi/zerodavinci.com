import React, { useRef, useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
import { Object3D } from 'three';
import { suspend } from 'suspend-react';
import { Environment, SoftShadows, Float } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useLenis } from '@studio-freight/react-lenis';
import { Perf } from 'r3f-perf';
import { Leva } from 'leva';
import state from '../../store';
import LevaControls from './LevaControls';
import Model from './ZeroDV';
import Human from './Human';
import Package from './Package';
import { scrollUtils, useWindowDimensions } from '@/hooks';
const hdri = import('@pmndrs/assets/hdri/warehouse.exr');

const PAIR_VIEW_START = 0;
const PAIR_VIEW_END = 1.6 / 9;

const HUMAN_SIT_START = 2.6 / 9;
const HUMAN_SIT_END = 0.4 / 9;

const HUMAN_REST_START = 4.45 / 9;
const HUMAN_REST_END = 0.55 / 9;

const DESIGN_MODE_START = 5.2 / 9;
const DESIGN_MODE_END = 0.8 / 9;

const NEW_FLOAT_UP_START = 4.4 / 9;
const NEW_FLOAT_UP_END = 0.4 / 9;

const NEW_FLOAT_DOWN_START = 5.2 / 9;
const NEW_FLOAT_DOWN_END = 0.4 / 9;

export default function Experience() {
  const snap = useSnapshot(state);
  const { isMobile, isTablet, isDesktop, windowDimensions } =
    useWindowDimensions();

  // Leva controls
  const { posY, posZ, intensity, frustum, size, near, samples, rings } =
    LevaControls();

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // References for scene objects
  const model1 = useRef(new Object3D());
  const model2 = useRef(new Object3D());
  const plane = useRef(new Object3D());
  const human = useRef(new Object3D());
  const packageRef = useRef(new Object3D());

  const [Ustate, setUState] = useState({
    pairView: true,
    humanSitVisible: false,
    humanRestVisible: false,
    floatUp: 0,
    floatDown: null,
  });

  const { pairView, humanSitVisible, humanRestVisible, floatUp, floatDown } =
    Ustate;

  // Function to update multiple state variables at once
  const setMultipleStates = (newState) => {
    setUState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  let rotationValue = snap.rotationSlider * Math.PI * 0.2;
  let ry = !pairView ? Math.PI / 2 + rotationValue : Math.PI / 2;

  let model1visibility = true;
  let packageVisibility = false;
  const [model2visibility, setModel2visibility] = useState(false);

  const { camera } = useThree();

  // useEffect(() => {
  //   function handleMouseMove(event) {
  //     mouseX.current = event.clientX / window.innerWidth - 0.5;
  //     mouseY.current = event.clientY / window.innerHeight - 0.5;
  //   }
  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // function updateCamera(state, x, y, z, fov = 30) {
  //   state.camera.position.lerp(new THREE.Vector3(x, y, z), 0.05);
  //   state.camera.fov = fov;
  //   state.camera.updateProjectionMatrix();
  // }
  // function computeCameraPosition(t, mouseX, mouseY, zOffset) {
  //   return [
  //     Math.sin(t / 8) + mouseX - 0.5,
  //     Math.max(-mouseY, 0),
  //     5 + Math.cos(t / 5) / 3 + zOffset,
  //   ];
  // }

  // let accumulatedTime = 0;

  // useFrame((state, delta) => {
  //   if (!isDesktop) {
  //     return; // Exit early if not on desktop
  //   }
  //   accumulatedTime += delta; // Increment the accumulated time by the time since last frame
  //   const [x, y, z] = computeCameraPosition(
  //     accumulatedTime, // Pass the accumulated time instead of elapsedTime
  //     mouseX.current,
  //     mouseY.current,
  //     0
  //   );
  //   state.camera.lookAt(0, 0.3, 0);
  //   updateCamera(state, x, y, z);
  // });

  useLenis(({ progress }) => {
    scrollUtils.updateOffset(progress);

    const newStates = {
      pairView: scrollUtils.visible(PAIR_VIEW_START, PAIR_VIEW_END),
      humanSitVisible: scrollUtils.visible(HUMAN_SIT_START, HUMAN_SIT_END),
      humanRestVisible: scrollUtils.visible(HUMAN_REST_START, HUMAN_REST_END),
      floatUp: scrollUtils.range(NEW_FLOAT_UP_START, NEW_FLOAT_UP_END),
      floatDown: scrollUtils.range(NEW_FLOAT_DOWN_START, NEW_FLOAT_DOWN_END),
    };

    // Use a single function to update all the relevant states
    setMultipleStates(newStates);
  });

  useEffect(() => {
    model1.current.rotation.y = ry;

    packageRef.current.rotation.y = ry;

    plane.current.position.set(0, 0, 0);

    const width = windowDimensions.width;
    const height = windowDimensions.height;
    console.log('w', width);
    console.log('h', height);

    if (isMobile) {
      let zValue, yValue;

      if (width <= 320) {
        zValue = 8;
        // yValue = 1.6;
      } else if (width > 320 && width <= 540) {
        zValue = 8 - ((width - 320) / (540 - 320)) * 2;
        // yValue = 1.6 - ((width - 320) / (540 - 320)) * (1.1 - 0.9);
      }

      // if (height <= 700) {
      //   yValue = 1;
      // }

      model1.current.position.x = 0;
      // model1.current.position.y = -1.5;
      packageRef.current.position.x = 0;
      // packageRef.current.position.x = -1.5;

      camera.position.set(0, 0.8, zValue);
      camera.lookAt(0, 1.5, 0);
      camera.fov = 35;
      camera.updateProjectionMatrix();
    } else if (isTablet) {
      let zValue;

      if (width > 480 && width <= 768) {
        zValue = 9 - ((width - 480) / (768 - 480)) * (8 - 6);
      }

      if (pairView) {
        setModel2visibility(true);
        model2.current.position.set(0.8, 0, 0);
        model1.current.position.set(-0.8, 0, 0);
        model2.current.rotation.y = ry;
        camera.position.set(0, 0.7, zValue);
        camera.lookAt(0, 1, 0);
        camera.fov = 35;
        camera.updateProjectionMatrix();
      } else if (!pairView) {
        setModel2visibility(false);
        model1.current.position.set(0.6, 0, 0);
        packageRef.current.position.set(0.6, 0, 0);

        camera.position.set(0, 0.7, zValue - 1);
        camera.lookAt(0, 1, 0);
        camera.fov = 35;
        camera.updateProjectionMatrix();
      }
    } else if (isDesktop) {
      let zValue;
      if (width >= 1280) {
        zValue = 4;
      } else if (width > 768 && width <= 1280) {
        zValue = 4 - ((width - 768) / (1280 - 768)) * (4.5 - 4);
      }

      if (pairView) {
        setModel2visibility(true);
        model2.current.position.set(0.8, 0, 0);
        model1.current.position.set(-0.8, 0, 0);
        model2.current.rotation.y = ry;
        camera.position.set(0, 0.7, zValue);
        camera.lookAt(0, 0.9, 0);
        camera.fov = 35;
        camera.updateProjectionMatrix();
      } else if (!pairView) {
        setModel2visibility(false);
        model1.current.position.set(0.7, 0, 0);
        packageRef.current.position.set(0.7, -1, 0);
        camera.position.set(0, 0.7, zValue - 1);
        camera.lookAt(0, 0.8, 0);
        camera.fov = 50;
        camera.updateProjectionMatrix();
      }
    }
  }, [
    isDesktop,
    isTablet,
    isMobile,
    pairView,
    ry,
    floatDown,
    windowDimensions.width,
  ]);
  // Human sit and rest visibility
  const humanSit = humanSitVisible;
  const humanRest = humanRestVisible;

  // Float values
  let f1 = 0;
  let f2 = 0;
  let f3 = 0;

  if (floatUp > 0) {
    [f1, f2, f3] = [0.15, 0.25, 1].map((value) =>
      THREE.MathUtils.lerp(0, value, floatUp)
    );
  }

  if (floatDown > 0) {
    f1 = THREE.MathUtils.lerp(0.15, 0, floatDown);
    f2 = THREE.MathUtils.lerp(0.25, 0, floatDown);
    f3 = THREE.MathUtils.lerp(1, 0, floatDown);
    packageVisibility = true;
    if (model1 && model1.current && packageRef && packageRef.current) {
      model1.current.position.y = THREE.MathUtils.lerp(0, 0.27, floatDown);
      packageRef.current.position.y = THREE.MathUtils.lerp(-1, 0.12, floatDown);
    }
  }

  // if (floatDown > 0) {
  //   packageVisibility = true;
  // }

  // if (isMobile && FAQSection > 0) {
  //   setPackageVisibility(false);
  // }

  // let ry = nonPairView ? Math.PI / 2 + rotationValue : Math.PI / 2;

  // Camera for mobile
  // const { camera } = useThree();

  // if (isMobile) {
  //   camera.position.set(-2, 0.4, 8);
  //   camera.lookAt(0, 0.6, 0);
  //   camera.fov = 30;
  //   camera.updateProjectionMatrix();
  // }

  return (
    <>
      {/* <Perf position="bottom-left" /> */}
      <Leva collapsed hidden />
      {/* <Leva /> */}
      <Environment files={suspend(hdri).default} />

      {/* {!isMobile && (
        <SoftShadows
          frustum={frustum}
          size={size}
          near={near}
          samples={samples}
          rings={rings}
        />
      )} */}

      {!isMobile && (
        <directionalLight
          position={[1, posY, posZ]}
          intensity={intensity}
          shadow-radius={0}
          castShadow
          // shadow-bias={0.001}
          shadow-mapSize={[512, 512]}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={-5}
          shadow-camera-left={-5}
        />
      )}
      {isMobile && (
        <directionalLight
          position={[1, posY, posZ]}
          intensity={intensity}
          castShadow
          shadow-bias={0.001}
          shadow-mapSize={[256, 256]}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={-5}
          shadow-camera-left={-5}
        />
      )}
      {/* First Model */}
      <Float
        speed={1}
        rotationIntensity={f3}
        floatIntensity={1}
        floatingRange={[f1, f2]}
      >
        <group ref={model1}>
          <Model model={1} visible={model1visibility} />
          {/* <CreateLineAndLabel
            point1={[0, 0.85, 0.55]}
            point2={[0, 1, 0.55]}
            label={'Leather'}
            dimensionsVisible={dimensionsVisible}
          />
          <CreateLineAndLabel
            point1={[0.35, 0.75, 0.1]}
            point2={[0.35, 1, 0.1]}
            label={'Wood'}
            dimensionsVisible={dimensionsVisible}
          />
          <CreateLineAndLabel
            point1={[-0.25, 0.65, -0.43]}
            point2={[-0.25, 1, -0.43]}
            label={'Metal'}
            dimensionsVisible={dimensionsVisible}
          /> */}
          {/* Human */}
          <group ref={human}>
            <Human sit={humanSit} rest={humanRest} />
          </group>
        </group>
      </Float>
      {/* Package */}
      <group ref={packageRef}>
        <Package visible={packageVisibility} />
      </group>
      {/* Second Model */}
      {!isMobile && (
        <group ref={model2}>
          <Model model={2} visible={model2visibility} />
        </group>
      )}
      {/* Plane */}
      <mesh ref={plane} receiveShadow rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[5, 5]} />
        <shadowMaterial color={'black'} attach="material" opacity={0.3} />
      </mesh>
    </>
  );
}

// const Model = dynamic(
//   () => import("@/components/canvas/ZeroDaVinci").then((mod) => mod.Model),
//   { ssr: false }
// );

// const Human = dynamic(
//   () => import("@/components/canvas/Human").then((mod) => mod.Human),
//   { ssr: false }
// );
{
  /* <mesh position={[-0.8, -0.45, 0]}>
  <boxGeometry args={[1.45, 0.2, 1]} />
  <meshBasicMaterial color={"black"} />
</mesh> */
}

// const scrollYRef = useRef(0);

// const lenis = useLenis(({ scroll }) => {
//   scrollYRef.current = lenis.progress;
// });

// if (isTablet && model1 && model1.current && model2 && model2.current) {
//   model2visibility = true;
//   model1.current.position.set(-0.7, -0.6, 0);
//   model1.current.rotation.y = Math.PI / 2;
//   model2.current.position.set(0.7, -0.6, 0);
//   model2.current.rotation.y = Math.PI / 2;
//   plane.current.position.set(0, -0.6, 0);

//   camera.position.set(0, 0.4, 8);
//   camera.lookAt(0, 0.6, 0);
//   camera.fov = 30;
//   camera.updateProjectionMatrix();
// }
// if (isDesktop && model1 && model1.current && model2 && model2.current) {
//   model2visibility = true;
//   model1.current.position.set(-0.8, -0.6, 0);
//   model1.current.rotation.y = Math.PI / 2;
//   model2.current.position.set(0.8, -0.6, 0);
//   model2.current.rotation.y = Math.PI / 2;
//   plane.current.position.set(0, -0.6, 0);

//   camera.position.set(0, 0.4, 6);
//   camera.lookAt(0, 0.6, 0);
//   camera.fov = 30;
//   camera.updateProjectionMatrix();
// }

// if (isTablet && model1 && model1.current && model2 && model2.current) {
//   model1.current.position.set(
//     THREE.MathUtils.lerp(-0.7, -0.9, heroSectionProgress),
//     -0.6,
//     0
//   );
//   model2.current.position.set(
//     THREE.MathUtils.lerp(0.7, 0.9, heroSectionProgress),
//     -0.6,
//     0
//   );
// }

// if (isDesktop && model1 && model1.current && model2 && model2.current) {
//   model1.current.position.set(
//     THREE.MathUtils.lerp(-0.8, -1, heroSectionProgress),
//     -0.6,
//     0
//   );
//   model2.current.position.set(
//     THREE.MathUtils.lerp(0.8, 1, heroSectionProgress),
//     -0.6,
//     0
//   );
// }

//   if (nonPairView) {
//     model1.current.position.set(1, -0.6, 0);
//     setModel2visibility(false);
//   } else {
//     setModel2visibility(true);
//   }
// }

// let newValues = { ...floatValues };
//w

// Batch the state update
// setFloatValues(newValues);

// if (floatDown > 0) {
//   setPackageVisibility(true);
//   packageRef.current.position.y = THREE.MathUtils.lerp(
//     -3,
//     -0.48,
//     modelHeightchange
//   );
// } else {
//   setPackageVisibility(false);
// }
