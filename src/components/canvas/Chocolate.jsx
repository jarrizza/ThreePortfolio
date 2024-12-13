
import React from 'react';
import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Chocolate() {
  const reactLogo = useMemo(() => useGLTF('./chocolate/scene.gltf'), []);

  return (
    <mesh>
        <primitive 
            object={reactLogo.scene} 
            rotation={[0, -5, 0]}
            scale={0.08} 
        />
    </mesh>
  )
}
