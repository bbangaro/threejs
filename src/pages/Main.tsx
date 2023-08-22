import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { Circle, Environment, OrbitControls, Stats } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "src/assets/scene.gltf", (gltf) => {
    console.log(gltf);
  });

  return (
    <>
      <ambientLight />
      <directionalLight position={[0, 0, 0]} castShadow />
      <primitive
        object={gltf.scene}
        position={[0, 0, 0]}
        // scale={[2, 2, 2]}
        children-0-castShadow
      />
      {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow> */}
      <meshStandardMaterial />
      <OrbitControls target={[0, 0, 0]} />
      {/* <Stats /> */}
      {/* <Environment preset="forest" background /> */}
    </>
  );
};

export const Main = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], isPerspectiveCamera: true }}>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};
