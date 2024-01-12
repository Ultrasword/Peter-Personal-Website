import {Suspense, useEffect, useState, React, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'

import {useFrame} from '@react-three/fiber'

import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {
  // const model = useGLTF('./desktop_pc/scene.gltf');
  const model = useGLTF('./blocks/blocks.gltf')

  const meshRef = useRef();
  const aRef = useRef();
  const bRef = useRef();

  useFrame( ({clock}) => {
    const a = clock.getElapsedTime();
    meshRef.current.rotation.y = 0.1*Math.cos(a);
    meshRef.current.position.y = 0.2*Math.sin(a);

    meshRef.current.needsUpdate = true;
  })

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.76} groundColor="#8AF2FF" color="#29CFFF"/>
      <hemisphereLight intensity={0.3} groundColor="#8AF2FF" color="#29CFFF"
        position={[2, 0, 0]}/>
      <pointLight intensity={4} color="#29CFFF"/>
      <pointLight intensity={3} position={[2, 0, 1]} color="#ffffff"/>
      <pointLight intensity={10} position={[2, -3, 1.5]} color="#ffffff"/>
      <spotLight
        position={[-1, -1, 1]}
        angle={0.09}
        penumbra={10}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <spotLight
        position={[1, 1.9, -1]}
        angle={0.05}
        penumbra={9}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive
        object={model.scene}
        scale={isMobile ? 0.4 : 0.6}
        position={isMobile ? [0, -1.5, -2.2] : [0, -2.5, 0]}
        rotation={[0.3, 1.6, -0.3]}
        >
      </primitive>
    </mesh>
  )
}

const ComputersCanvas = ({isMobile}) => {

  return (
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov:25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          ></OrbitControls>
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all />
      </Canvas>
  )
}

export default ComputersCanvas;