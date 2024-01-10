import {Suspense, useEffect, useState, React} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'

import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {
  // const model = useGLTF('./desktop_pc/scene.gltf');
  const model = useGLTF('./blocks/blocks.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1.0} groundColor="black" color="#FFC900"/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-1, 10, 1]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
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