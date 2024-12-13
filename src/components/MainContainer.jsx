import React from 'react';
import '../index.css'
import { Canvas} from '@react-three/fiber'


// import Chocolate from './canvas/ChocolateBowl';
// import Chocolate from './canvas/ChocolateLeft';
import Chocolate from './canvas/ChocolateSwirl';

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
      <pointLight intensity={2} color={0xff0000} position={[0, 5, 5]} />
      <spotLight intensity={3} color={0xff0000} position={(-20, 50, 10)} />
      <Chocolate />
    </Canvas>
  )
}

export default MainContainer

/*

      import Chocolate from './canvas/ChocolateSwirl';
      <pointLight intensity={3} color={0xff0000} position={[0, 5, 5]} />
      <spotLight intensity={4} color={0xff0000} position={(-20, 50, 10)} />
      <Chocolate />

      import ReactLogo from './canvas/ReactLogo'
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)} />
      <ReactLogo />
*/