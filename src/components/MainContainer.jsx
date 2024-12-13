import React from 'react';
import '../index.css'
import { Canvas} from '@react-three/fiber'

import ReactLogo from './canvas/ReactLogo'
import Chocolate from './canvas/Chocolate';

const MainContainer = () => {
  const bgColor = ({ gl }) => {
    gl.setClearColor('#FFFFFF', 1);
  }

  return (
    <Canvas
      id='canvas'
      style={{position: 'fixed'}}
      camera={{ position: [20, 3, 5], fov: 25}}
      onCreated={bgColor}>  
      <pointLight intensity={2} color={0xff0000} position={[0, 5, 5]} />
      <spotLight intensity={1} color={0xff0000} position={(-20, 50, 10)} />
      <Chocolate />
    </Canvas>
  )
}

export default MainContainer

/*
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)} />
      <ReactLogo />
*/