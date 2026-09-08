"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// Every time-driven term below is phase-locked to this period, so the whole
// scene returns to its exact starting state every LOOP_SECONDS — a real loop,
// not just an endless drift.
const LOOP_SECONDS = 60;

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uPeriod;
  uniform float uAspect;
  uniform int uOctaves;

  varying vec2 vUv;

  const float TAU = 6.2831853;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Rotating each octave keeps the noise from lining up into visible grid axes.
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 6; i++) {
      if (i >= uOctaves) break;
      value += amplitude * noise(p);
      p = rot * p * 2.02;
      amplitude *= 0.5;
    }
    return value;
  }

  // Ridged noise: folding fbm about its midpoint turns soft blobs into the thin
  // bright ropes that give a supernova remnant its webbed look.
  float ridge(vec2 p, float sharpness) {
    return pow(1.0 - abs(fbm(p) * 2.0 - 1.0), sharpness);
  }

  float starLayer(vec2 uv, float scale, float sparsity, float ang) {
    vec2 sp = uv * scale;
    vec2 id = floor(sp);
    vec2 f = fract(sp);
    float h = hash(id);
    float present = step(sparsity, h);
    vec2 centre = vec2(hash(id + 13.7), hash(id + 71.3));
    float core = smoothstep(0.10, 0.0, length(f - centre));
    float twinkle = 0.60 + 0.40 * sin(ang * 3.0 + h * 63.0);
    return core * present * twinkle;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = (uv - 0.5) * vec2(uAspect, 1.0);

    // Sit the remnant right-of-centre: the hero copy occupies the left column.
    // Scaling the offset by aspect pins it to ~69% of the width at any ratio —
    // a fixed offset walks the core off-screen on portrait phones.
    p -= vec2(0.19 * uAspect, 0.0);

    // Portrait viewports see a tall, narrow slice, so tighten the ellipse to
    // keep the whole remnant in frame rather than one flank of it.
    float portrait = 1.0 - smoothstep(0.80, 1.15, uAspect);

    float ang = TAU * uTime / uPeriod;
    vec2 drift = vec2(cos(ang), sin(ang)) * 0.22;
    float pulse = 0.5 + 0.5 * cos(ang);

    vec2 sp = p * 3.0;

    // Two rounds of domain warping tear the smooth field into gas structure.
    vec2 q = vec2(
      fbm(sp + drift),
      fbm(sp + vec2(3.1, 1.7) - drift)
    );
    vec2 r = vec2(
      fbm(sp + 1.7 * q + vec2(1.7, 9.2) + 0.40 * drift),
      fbm(sp + 1.7 * q + vec2(8.3, 2.8) - 0.40 * drift)
    );

    float gas = fbm(sp + 2.1 * r);
    float web = ridge(sp * 2.3 + 2.4 * r, 4.0) * 0.80
              + ridge(sp * 4.7 + 2.4 * r + vec2(5.2, 1.4), 5.0) * 0.50;

    float d = length(p * mix(vec2(1.70, 2.05), vec2(1.30, 1.52), portrait));
    float body = smoothstep(1.06, 0.02, d);
    float shell = smoothstep(0.30, 0.88, d);
    float core = exp(-d * d * 3.0);

    vec3 cCore = vec3(0.80, 0.97, 1.00);
    vec3 cTeal = vec3(0.10, 0.85, 0.95);
    vec3 cGreen = vec3(0.35, 0.85, 0.55);
    vec3 cOrange = vec3(1.00, 0.48, 0.15);
    vec3 cRust = vec3(0.72, 0.20, 0.05);

    // Interior: smooth teal synchrotron glow, greener where the gas piles up.
    float glow = body * pow(clamp(gas, 0.0, 1.0), 1.6) * 1.55;
    vec3 interior = mix(cTeal, cGreen, smoothstep(0.40, 0.90, gas)) * glow * (1.0 - 0.62 * shell);

    // Rim: the sharp filament web, burning orange and strongest at the edge.
    vec3 rim = mix(cOrange, cRust, smoothstep(0.66, 1.06, d)) * web * body * (0.12 + 1.50 * shell);

    // A dimmer teal copy of the same web threads through the middle.
    vec3 innerWeb = mix(cTeal, cCore, 0.25) * web * body * (1.0 - shell) * 0.85;

    vec3 col = interior * 1.35 + rim * 1.20 + innerWeb + cCore * core * (0.50 + 0.12 * pulse);
    col *= 0.88 + 0.12 * pulse;

    float stars = starLayer(uv * vec2(uAspect, 1.0), 190.0, 0.9860, ang)
                + starLayer(uv * vec2(uAspect, 1.0), 95.0, 0.9915, ang) * 0.85;
    vec3 starCol = vec3(stars) * (1.05 - 0.60 * clamp(body * gas * 2.0, 0.0, 1.0));

    vec3 base = vec3(0.008, 0.024, 0.090);
    vec3 haze = vec3(0.05, 0.14, 0.24) * body * 0.16;

    vec3 finalCol = base + haze + col + starCol;
    finalCol *= smoothstep(1.85, 0.40, length(uv - 0.5) * 1.30);

    gl_FragColor = vec4(finalCol, 1.0);
  }
`;

function Nebula({ animate, octaves }: { animate: boolean; octaves: number }) {
  const { viewport, size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: LOOP_SECONDS * 0.25 },
      uPeriod: { value: LOOP_SECONDS },
      uAspect: { value: 1 },
      uOctaves: { value: octaves }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    uniforms.uOctaves.value = octaves;
  }, [octaves, uniforms]);

  useEffect(() => {
    uniforms.uAspect.value = size.width / Math.max(size.height, 1);
  }, [size.width, size.height, uniforms]);

  useFrame((_, delta) => {
    if (!animate) return;
    uniforms.uTime.value = (uniforms.uTime.value + delta) % LOOP_SECONDS;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        args={[
          {
            uniforms,
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER,
            depthWrite: false
          }
        ]}
      />
    </mesh>
  );
}

export default function HeroNebula() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    // Seven fbm passes per fragment is fine on a laptop GPU and brutal on a
    // phone's. Render at 1x there; the scrim over it hides the softness.
    setLowPower(window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Stop burning GPU once the hero is scrolled past or the tab is backgrounded.
  useEffect(() => {
    const node = wrapper.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { rootMargin: "120px" }
    );
    observer.observe(node);

    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const animate = onScreen && tabVisible && !reducedMotion;

  return (
    <div ref={wrapper} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 50 }}
        dpr={lowPower ? 1 : [1, 1.5]}
        frameloop={animate ? "always" : "demand"}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#020617"]} />
        {/* Four octaves on phones: the coarse detail carries the look, and the
            two finest octaves are 40% of the per-pixel cost for grain the scrim
            hides anyway. */}
        <Nebula animate={animate} octaves={lowPower ? 4 : 6} />
      </Canvas>
    </div>
  );
}
