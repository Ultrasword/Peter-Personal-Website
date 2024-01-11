import {Suspense, useEffect, useState, React} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'

import CanvasLoader from '../Loader'


const Blocks = ({ isMobile }) => {
  // const model = useGLTF('./desktop_pc/scene.gltf');
  const model = useGLTF('./blocks/blocks.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="#D79605" color="#FFC900"/>
      <hemisphereLight intensity={0.1} groundColor="#D79605" color="#FFC900"
        position={[1000, 0, 0]}/>
      <pointLight intensity={2} color="#FFC900"/>
      <pointLight intensity={2} position={[1, 2, -1]} color="#FFC900"/>
      <pointLight intensity={10} position={[2, -3, 1.5]} color="#FFC900"/>
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
        position={isMobile ? [0, -1.5, -2.2] : [0, -3, 0]}
        rotation={[0.3, 1.6, -0.3]}
        >
      </primitive>
    </mesh>
  )
}

const BlocksCanvas = ({isMobile}) => {

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
          <Blocks isMobile={isMobile}/>
        </Suspense>

        <Preload all />
      </Canvas>
  )
}

export default BlocksCanvas;