"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const COUNT = 1600;
const RADIUS = 4.2;

// Casi todo blanco: sólo el extremo superior lleva una pizca de cyan, para que
// el acento de marca aparezca en el fondo sin teñirlo.
const STOPS = [
  new THREE.Color("#ffffff"),
  new THREE.Color("#e8f9fd"),
  new THREE.Color("#67e8f9"),
];

function gradientColor(t: number) {
  const scaled = t * (STOPS.length - 1);
  const idx = Math.min(Math.floor(scaled), STOPS.length - 2);
  const localT = scaled - idx;
  return STOPS[idx].clone().lerp(STOPS[idx + 1], localT);
}

function generateField() {
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    const r = RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const t = (y / RADIUS + 1) / 2;
    const color = gradientColor(Math.min(Math.max(t, 0), 1));
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    sizes[i] = Math.random() * 0.03 + 0.012;
  }

  return { positions, colors, sizes };
}

export function NeuralField() {
  const { positions, colors } = useMemo(() => generateField(), []);
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useThree((s) => s.pointer);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    targetRotation.current.y += delta * 0.045;
    const lerpX = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.25, 0.03);
    const lerpY = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y + pointer.x * 0.35,
      0.03
    );
    groupRef.current.rotation.x = lerpX;
    groupRef.current.rotation.y = lerpY;
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} colors={colors} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.022}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.45}
        />
      </Points>
    </group>
  );
}
