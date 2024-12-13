
import React, { useEffect, useMemo } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

const actionNames = [
    'SphereAction',
    'TorusAction1',
    'TorusAction2',
    'TorusAction3'
]

export default function ReactLogo() {
  const reactLogo = useMemo(() => useGLTF('./reactLogo/scene.gltf'), []);

  const animations = useAnimations(reactLogo.animations, reactLogo.scene);

  useEffect(() => {
    actionNames.forEach((actionName) => {
        const action = animations.actions[actionName];
        action.play();
    })}, [animations]);

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
