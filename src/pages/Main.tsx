import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { Circle, Environment, OrbitControls, Stats } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "src/assets/scene.gltf");

  return (
    <>
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <primitive
        object={gltf.scene}
        position={[10, 1, 10]}
        children-0-castShadow
      />
      {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow> */}
      <meshStandardMaterial />
      {/* </Circle> */}
      <OrbitControls target={[1, 1, 1]} />
      {/* <axesHelper args={[]} /> */}
      <Stats />
    </>
  );
};

export const Main = () => {
  return (
    <Canvas camera={{ position: [10, -0, 10] }}>
      <Suspense>
        <Model />
        <Environment preset="forest" background />
      </Suspense>
    </Canvas>
  );
};
