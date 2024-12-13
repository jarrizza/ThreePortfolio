
import React from 'react';
import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ReactLogo() {
  const reactLogo = useMemo(() => useGLTF('./reactLogo/scene.gltf'), []);

  return (
    <mesh>
        <primitive 
            object={reactLogo.scene} 
            rotation={[0, -5, 0]}
            scale={0.65} 
        />
    </mesh>
  )
}