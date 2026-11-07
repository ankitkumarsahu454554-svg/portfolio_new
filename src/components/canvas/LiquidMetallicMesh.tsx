'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface LiquidMetallicMeshProps {
  distort?: number;
  speed?: number;
}

export function LiquidMetallicMesh({ distort = 0.45, speed = 1.8 }: LiquidMetallicMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      // Gentle natural rotation and floating wobble
      meshRef.current.rotation.x = t * 0.25;
      meshRef.current.rotation.y = t * 0.35;
      // Mouse interaction parallax
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        state.pointer.x * 0.4,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        state.pointer.y * 0.4,
        0.05
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.15;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <group>
        {/* Main Organic Liquid Metallic Distorted Orb */}
        <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[1.6, 64, 64]} />
          <MeshDistortMaterial
            color="#D8E2EC"
            roughness={0.12}
            metalness={0.92}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distort={distort}
            speed={speed}
            wireframe={false}
          />
        </mesh>

        {/* Outer Orbiting Precision Technical Wireframe Ring */}
        <mesh ref={ringRef} position={[0, 0, 0]}>
          <torusGeometry args={[2.5, 0.015, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" wireframe={true} transparent opacity={0.35} />
        </mesh>

        {/* Secondary Acid-Lime Accent Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.1, 2.12, 64]} />
          <meshBasicMaterial color="#C7FF55" side={THREE.DoubleSide} transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}
