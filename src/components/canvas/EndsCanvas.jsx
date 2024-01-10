import {Suspense, useEffect, useState, React} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'

import CanvasLoader from '../Loader'


const Ends = ({ isMobile }) => {
  const model = useGLTF('./desktop_pc/scene.gltf');


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [-2, -1.5, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        >
      </primitive>
    </mesh>
  )
}

const EndsCanvas = ({isMobile}) => {

  return (
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov:25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        

        <Preload all />
      </Canvas>
  )
}

export default EndsCanvas;