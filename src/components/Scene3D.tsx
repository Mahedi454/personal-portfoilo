import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

const HaloRing = ({
  position,
  rotation,
  color,
  speed,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  speed: number;
  scale: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.z = rotation[2] + state.clock.elapsedTime * speed;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.35}>
      <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
        <torusGeometry args={[1.9, 0.055, 24, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.42} />
      </mesh>
    </Float>
  );
};

const CoreShape = ({ isLight }: { isLight: boolean }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.45}>
      <mesh ref={ref} position={[0.7, 0.25, -0.2]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color={isLight ? "#f8fafc" : "#c7f0ff"}
          emissive={isLight ? "#60a5fa" : "#38bdf8"}
          emissiveIntensity={isLight ? 0.15 : 0.24}
          metalness={0.2}
          roughness={0.32}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const AccentDots = ({ color }: { color: string }) => {
  const points = useRef<THREE.Points>(null);
  const pointCount = 72;

  const positions = useMemo(() => {
    const values = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const radius = 2.4 + Math.random() * 3.8;
      const angle = (i / pointCount) * Math.PI * 2;
      const height = (Math.random() - 0.5) * 4.5;

      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = height;
      values[i * 3 + 2] = Math.sin(angle) * radius * 0.5 - 1.2;
    }

    return values;
  }, []);

  useFrame((state) => {
    if (!points.current) {
      return;
    }

    points.current.rotation.y = state.clock.elapsedTime * 0.045;
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={pointCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.045} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 34 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.25]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={isLight ? 1.1 : 0.65} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={isLight ? 1.2 : 0.9}
        color={isLight ? "#ffffff" : "#7dd3fc"}
      />
      <pointLight
        position={[-4, -2, 3]}
        intensity={isLight ? 0.8 : 0.55}
        color={isLight ? "#fb923c" : "#38bdf8"}
      />

      <group position={[1.2, 0.2, 0]}>
        <HaloRing
          position={[0, 0, 0]}
          rotation={[1.05, 0.2, 0.15]}
          color={isLight ? "#2563eb" : "#67e8f9"}
          speed={0.16}
          scale={1}
        />
        <HaloRing
          position={[-0.3, -0.15, -0.8]}
          rotation={[0.55, -0.35, -0.22]}
          color={isLight ? "#f97316" : "#fb923c"}
          speed={-0.12}
          scale={0.82}
        />
        <CoreShape isLight={isLight} />
      </group>

      <AccentDots color={isLight ? "#2563eb" : "#7dd3fc"} />
    </Canvas>
  );
};

export default Scene3D;
