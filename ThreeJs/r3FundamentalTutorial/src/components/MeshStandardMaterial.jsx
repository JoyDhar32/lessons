import React from "react";

const MeshStandardMaterial = () => {
  return (
    <mesh>
      <boxGeometry  args={[4,4,1]}/>
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default MeshStandardMaterial;
