"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type NumberUnit = {
  value: string;
  position: [number, number, number];
  speed: number;
  scale: number;
  opacity: number;
};

const digits = "010101101001110010100111001101001011";

export default function HeroNumberSystem() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 58 }}
        dpr={[1, 1.65]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 12, 42]} />
        <ambientLight intensity={0.5} />
        <DataField />
      </Canvas>
    </div>
  );
}

function DataField() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const units = useMemo(() => createUnits(84), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.16 - group.current.rotation.y) * 0.035;
    group.current.rotation.x += (-pointer.y * 0.08 - group.current.rotation.x) * 0.035;

    for (const child of group.current.children) {
      child.position.z += delta * (0.8 + (child.userData.speed as number));
      child.position.y += Math.sin(Date.now() * 0.0005 + child.position.x) * delta * 0.08;
      if (child.position.z > 8) {
        child.position.z = -36 - Math.random() * 12;
        child.position.x = (Math.random() - 0.5) * 24;
        child.position.y = (Math.random() - 0.5) * 13;
      }
    }
  });

  return (
    <group ref={group} position={[3.2, 0, 0]}>
      <DataStreams />
      <ParticleCloud />
      {units.map((unit, index) => (
        <NumberSprite key={`${unit.value}-${index}`} unit={unit} />
      ))}
    </group>
  );
}

function NumberSprite({ unit }: { unit: NumberUnit }) {
  const texture = useMemo(() => createNumberTexture(unit.value), [unit.value]);
  const material = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: unit.opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      }),
    [texture, unit.opacity]
  );

  return (
    <sprite
      position={unit.position}
      scale={[unit.scale, unit.scale * 0.54, 1]}
      material={material}
      userData={{ speed: unit.speed }}
    />
  );
}

function DataStreams() {
  const positions = useMemo(() => {
    const values: number[] = [];
    for (let i = 0; i < 42; i += 1) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 12;
      const z = -36 + Math.random() * 36;
      values.push(x, y, z, x + (Math.random() - 0.5) * 1.8, y + 2.4 + Math.random() * 3.2, z + 1.5);
    }
    return new Float32Array(values);
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#22D3EE" transparent opacity={0.14} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
}

function ParticleCloud() {
  const points = useMemo(() => {
    const values: number[] = [];
    for (let i = 0; i < 520; i += 1) {
      values.push((Math.random() - 0.5) * 24, (Math.random() - 0.5) * 14, -38 + Math.random() * 44);
    }
    return new Float32Array(values);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#3B82F6" size={0.028} transparent opacity={0.62} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function createUnits(count: number): NumberUnit[] {
  return Array.from({ length: count }, (_, index) => {
    const length = 2 + Math.floor(Math.random() * 8);
    const start = Math.floor(Math.random() * (digits.length - length));
    return {
      value: digits.slice(start, start + length),
      position: [(Math.random() - 0.5) * 24, (Math.random() - 0.5) * 13, -38 + Math.random() * 42],
      speed: Math.random() * 1.4,
      scale: 1.2 + Math.random() * 2.6 + (index % 9 === 0 ? 1.6 : 0),
      opacity: 0.22 + Math.random() * 0.5
    };
  });
}

function createNumberTexture(value: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowColor = "rgba(34, 211, 238, 0.9)";
  ctx.shadowBlur = 22;
  ctx.font = "700 72px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
  ctx.fillStyle = Math.random() > 0.45 ? "rgba(34, 211, 238, .95)" : "rgba(59, 130, 246, .9)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(value, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}
