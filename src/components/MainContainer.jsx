import React from 'react';
import '../index.css'
import { Canvas} from '@react-three/fiber'

import ReactLogo from './canvas/ReactLogo';

const MainContainer = () => {
  const bgColor = ({ gl }) => {
    gl.setClearColor('#ffffff', 1);
  }

  return (
    <Canvas
      id='canvas'
      style={{position: 'fixed'}}
      camera={{ position: [20, 3, 8], fov: 25}}
      onCreated={bgColor}>  
      <pointLight intensity={3} color={0xeeeeee} position={[0, 5, 5]} />
      <spotLight intensity={4} color={0xeeeeee} position={(-20, 50, 10)} />
      <ReactLogo />
    </Canvas>
  )
}

export default MainContainer


/*
  <ReactLogo />
      <Chocolate name={'Swirl'} scale={0.08} />
*/