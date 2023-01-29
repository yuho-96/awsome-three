/*
 * @Author: liuyuhao
 * @Date: 2023-01-28 15:06:21
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 14:06:40
 * @Description:
 */

import React, { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { /* Cloud, */ Sky } from '@react-three/drei'
import logo from './logo.svg'
import './App.css'

function Rig() {
  const camera = useThree(state => state.camera)
  return useFrame(state => {
    camera.position.z = Math.sin(state.clock.elapsedTime) * 20
  })
}

function App() {
  
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <span>three react app</span>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Canvas
        className='mainContent'
        style={{ width: '100vw', height: '100vh', zIndex: 1 }}
        camera={{ position: [0, 0, 16], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <pointLight intensity={2} position={[0, 0, -1000]} />
        <Suspense fallback={null}>
          {/* <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} texture='/cloud.png' /> */}
          {/* <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
          <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
          <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
          <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} /> */}
        </Suspense>
        <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
        <Rig />
      </Canvas>
    </div>
  )
}

export default App
