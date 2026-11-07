'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { LiquidMetallicMesh } from './LiquidMetallicMesh';
import { ParticleField } from './ParticleField';

export default function Scene() {
  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener(
            'webglcontextlost',
            (event) => {
              event.preventDefault();
              console.warn('WebGL context lost. Waiting for GPU recovery...');
            },
            false
          );
        }}
      >
        {/* Cinematic Studio Lighting Rig */}
        <ambientLight intensity={0.4} />

        {/* Acid Lime Key Rim Light */}
        <directionalLight
          position={[5, 4, 3]}
          intensity={1.8}
          color="#C7FF55"
        />

        {/* Electric Blue Fill Light */}
        <pointLight
          position={[-5, -3, -2]}
          intensity={2.2}
          color="#00F0FF"
        />

        {/* Metallic Top Specular Light */}
        <spotLight
          position={[0, 8, 4]}
          angle={0.6}
          penumbra={0.8}
          intensity={2}
          color="#FFFFFF"
        />

        <Suspense fallback={null}>
          <LiquidMetallicMesh />
          <ParticleField />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
