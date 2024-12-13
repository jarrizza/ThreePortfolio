
import React from 'react';
import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ChocolateSwirl() {
 const model = useMemo(() => useGLTF('./chocolateBowl/scene.gltf'), []);

  return (
    <mesh>
        <primitive 
            object={model.scene} 
            rotation={[0, 8, 0]}
            scale={0.08} 
        />
    </mesh>
  )
}
