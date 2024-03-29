import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
const App = () => {
  const Cube=({position, side, color})=>{
    return(
    <mesh position={position}>
    <boxGeometry args={side}/>
    <meshStandardMaterial color={color} />
  </mesh>
    )
  }
  return (
    <>
      <Canvas>
      <ambientLight intensity={0.5} />
        <directionalLight position={[0,0 , 1]} intensity={0.5}/> 
        <group position={[0,-1,0]}>
        <Cube position={[-1,0,0]} side={[1,1,1]} color={"red"} />
        <Cube position={[1,0,0]} side={[1,1,1]} color={"hotpink"} />
        <Cube position={[-1,2,0]} side={[1,1,1]} color={"blue"} />
        <Cube position={[1,2,0]} side={[1,1,1]} color={"orange"} />
</group>f

        {/* <mesh position={[1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
       
        <mesh position={[-1, 2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[1, 2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="purple" />
        </mesh> */}
      </Canvas>
    </>
  );
};

export default App;
