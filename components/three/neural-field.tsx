"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 4200;
const RADIUS = 4.6;
/** Proportion of stars tinted with the brand accent instead of white. */
const CYAN_SHARE = 0.14;

const WHITE = new THREE.Color("#ffffff");
const WARM = new THREE.Color("#dfe9f5");
const CYAN = new THREE.Color("#67e8f9");

function buildField() {
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);
  const phases = new Float32Array(COUNT);
  const speeds = new Float32Array(COUNT);
  const brights = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    // Cube root keeps the distribution even through the volume instead of
    // clumping everything toward the centre.
    const r = RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const tint =
      Math.random() < CYAN_SHARE ? CYAN : Math.random() < 0.35 ? WARM : WHITE;
    colors[i * 3] = tint.r;
    colors[i * 3 + 1] = tint.g;
    colors[i * 3 + 2] = tint.b;

    // Three tiers: a handful of bright anchors, some mid stars, and dust. The
    // spread in brightness is what stops the field reading as flat noise.
    const roll = Math.random();
    if (roll > 0.975) {
      sizes[i] = 3.6;
      brights[i] = 1.0;
    } else if (roll > 0.88) {
      sizes[i] = 2.2;
      brights[i] = 0.6 + Math.random() * 0.2;
    } else {
      sizes[i] = 1.0 + Math.random() * 0.7;
      brights[i] = 0.22 + Math.random() * 0.22;
    }

    phases[i] = Math.random() * Math.PI * 2;
    // Bright stars pulse slower, so they read as steady points rather than
    // flickering along with the dust.
    speeds[i] = brights[i] > 0.6 ? 0.35 + Math.random() * 0.5 : 0.7 + Math.random() * 1.9;
  }

  return { positions, colors, sizes, phases, speeds, brights };
}

const VERT = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;
  attribute float aSpeed;
  attribute float aBright;
  attribute vec3 aColor;

  uniform float uTime;
  uniform float uPixelRatio;

  varying vec3 vColor;
  varying float vTwinkle;
  varying float vBright;

  void main() {
    vColor = aColor;
    vBright = aBright;
    // Never fully off: dips to 0.35 so stars breathe rather than blink out.
    vTwinkle = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * aSpeed + aPhase));

    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    // Scale with distance so the field reads as depth, and grow a little on the
    // bright half of the cycle so those moments also flare.
    // Clamped so stars that drift close to the camera flare instead of
    // ballooning into soft blobs.
    float size = aSize * uPixelRatio * (1.0 + vTwinkle * 0.4) * (7.0 / -mv.z);
    gl_PointSize = min(size, 9.0 * uPixelRatio);
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;

  varying vec3 vColor;
  varying float vTwinkle;
  varying float vBright;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    if (d > 0.5) discard;

    // Tight core plus a wide soft halo — the halo is what reads as a glint.
    float core = smoothstep(0.5, 0.0, d);
    float halo = pow(max(1.0 - d * 2.0, 0.0), 3.4);
    // Bright stars get a wider halo on top of the shared core.
    float alpha = (core * 0.62 + halo * (0.3 + vBright * 0.9)) * vTwinkle * (0.35 + vBright);

    gl_FragColor = vec4(vColor, alpha);
  }
`;

export function NeuralField() {
  const { positions, colors, sizes, phases, speeds, brights } = useMemo(() => buildField(), []);
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((s) => s.pointer);
  const dpr = useThree((s) => s.viewport.dpr);
  const spin = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: typeof dpr === "number" ? dpr : 1 },
    }),
    [dpr]
  );

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (!groupRef.current) return;
    spin.current += delta * 0.04;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.22,
      0.03
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      spin.current + pointer.x * 0.3,
      0.03
    );
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
          <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
          <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
          <bufferAttribute attach="attributes-aBright" args={[brights, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={VERT}
          fragmentShader={FRAG}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
