import { Canvas } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";
import React, { useRef } from "react";

const App = () => {
  const lightRef = useRef(null);
  return (
    <>
      <Canvas>
        {/* Use the ref directly */}
        <directionalLight ref={lightRef} position={[1, 2, 3]} color="white" />

        {/* Directional Light Helper using ref */}
        <DirectionalLightHelper
          light={lightRef.current} // Pass the ref directly
          size={1}
          color="red"
        />

        <mesh>
          <boxGeometry args={[4, 4, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
};

export default App;
