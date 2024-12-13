
import React from 'react';
import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ChocolateSwirl() {
 const model = useMemo(() => useGLTF('./chocolateSwirl/scene.gltf'), []);

  return (
    <mesh>
        <primitive 
            object={model.scene} 
            rotation={[0, -5, 0]}
            scale={0.08} 
        />
    </mesh>
  )
}
