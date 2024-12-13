import React from 'react';
import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Chocolate({name, scale}) {
  const model = useMemo(() => useGLTF(`./chocolate${name}/scene.gltf`), []);
  return (
    <mesh>
        <primitive 
            object={model.scene} 
            rotation={[0, 8, 0]}
            scale={scale} 
        />
    </mesh>
  )
}
