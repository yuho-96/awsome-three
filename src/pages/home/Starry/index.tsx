/*
 * @Author: liuyuhao
 * @Date: 2023-01-29 15:03:55
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 16:07:34
 * @Description: starry
 */

import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial /* PositionPoint */ } from '@react-three/drei'
import { inSphere } from 'maath/random'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  )
}

function Stars() {
  const ref = useRef<any>()
  const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((_state, delta) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color='#ffa0e0'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
