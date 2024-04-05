import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import "./App.css";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Cube = ({ position, side, color }) => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, "1", "red");

  const ref = useRef();
  useFrame((state, delta) => {
    // ref.current.rotation.x += delta
    // ref.current.rotation.y += delta
    // ref.current.rotation.z += delta
    // ref.current.position.z = Math.sin(state.clock.getElapsedTime())*2;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={side} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
const App = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[0, 0, 1]}
          intensity={0.5}
          ref={directionalLightRef}
        />
        {/* <group position={[0, -1, 0]}>
          <Cube position={[-1, 0, 0]} side={[1, 1, 1]} color={"red"} />
          <Cube position={[1, 0, 0]} side={[1, 1, 1]} color={"hotpink"} />
          <Cube position={[-1, 2, 0]} side={[1, 1, 1]} color={"blue"} />
          <Cube position={[1, 2, 0]} side={[1, 1, 1]} color={"orange"} />
        </group> */}
        <Cube position={[0, 0, 0]} side={[1, 1, 1]} color={"red"} />
        <mesh position={[2, 1, 1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};

export default App;
