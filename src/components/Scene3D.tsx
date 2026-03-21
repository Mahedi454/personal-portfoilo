import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

const FloatingGeometry = ({
  position,
  color,
  speed = 1,
  size = 1,
  wireColor,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
  wireColor: string;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.12 * speed;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.16 * speed;
    }
  });

  return (
    <Float speed={speed * 1.6} rotationIntensity={0.25} floatIntensity={0.7}>
      <group ref={groupRef} position={position} scale={size}>
        <mesh>
          <octahedronGeometry args={[1.1, 0]} />
          <MeshTransmissionMaterial
            backside
            color={color}
            thickness={0.8}
            roughness={0.1}
            chromaticAberration={0.05}
            anisotropy={0.2}
            distortion={0.12}
            distortionScale={0.24}
            temporalDistortion={0.12}
            transmission={0.92}
          />
        </mesh>
        <lineSegments>
          <edgesGeometry args={[new THREE.OctahedronGeometry(1.18, 0)]} />
          <lineBasicMaterial color={wireColor} transparent opacity={0.45} />
        </lineSegments>
      </group>
    </Float>
  );
};

const ParticleField = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 320;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.015;
      points.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#7dd3fc" transparent opacity={0.75} sizeAttenuation />
    </points>
  );
};

const LightRig = ({ isLight }: { isLight: boolean }) => (
  <>
    <color attach="background" args={[isLight ? "#f7f4ee" : "#07111f"]} />
    <fog attach="fog" args={[isLight ? "#f7f4ee" : "#07111f", 8, 18]} />
    <ambientLight intensity={isLight ? 1.15 : 0.55} />
    <hemisphereLight
      skyColor={isLight ? "#ffffff" : "#60a5fa"}
      groundColor={isLight ? "#cbd5e1" : "#020617"}
      intensity={isLight ? 1.4 : 0.9}
    />
    <directionalLight position={[4, 6, 5]} intensity={isLight ? 1.6 : 1.1} color={isLight ? "#ffffff" : "#67e8f9"} />
    <pointLight position={[-5, -2, 4]} intensity={isLight ? 1.1 : 0.8} color={isLight ? "#f97316" : "#fb923c"} />
  </>
);

const Scene3D = () => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <Canvas
      camera={{ position: [0, 0.4, 7], fov: 42 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <LightRig isLight={isLight} />
      <Environment preset={isLight ? "city" : "night"} />
      <FloatingGeometry
        position={[-2.8, 1.4, -0.8]}
        color={isLight ? "#dbeafe" : "#67e8f9"}
        wireColor={isLight ? "#2563eb" : "#93c5fd"}
        speed={0.8}
        size={1.35}
      />
      <FloatingGeometry
        position={[2.5, -0.8, -1.6]}
        color={isLight ? "#ffedd5" : "#fdba74"}
        wireColor={isLight ? "#ea580c" : "#fb923c"}
        speed={0.65}
        size={0.95}
      />
      <FloatingGeometry
        position={[0.2, 2, -2.8]}
        color={isLight ? "#ffffff" : "#dbeafe"}
        wireColor={isLight ? "#64748b" : "#38bdf8"}
        speed={0.55}
        size={0.62}
      />
      <ParticleField />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={isLight ? 0.45 : 0.35} />
    </Canvas>
  );
};

export default Scene3D;
