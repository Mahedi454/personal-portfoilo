import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

const FloatingGeometry = ({ position, color, speed = 1, distort = 0.3, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
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
      <pointsMaterial size={0.03} color="#4dd0e1" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#4dd0e1" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#7c4dff" />

      <FloatingGeometry position={[-3, 1.5, -2]} color="#4dd0e1" speed={0.8} distort={0.4} size={0.8} />
      <FloatingGeometry position={[3.5, -1, -3]} color="#7c4dff" speed={0.6} distort={0.5} size={1.2} />
      <FloatingGeometry position={[1, 2.5, -4]} color="#4dd0e1" speed={1} distort={0.3} size={0.5} />
      <FloatingGeometry position={[-2, -2, -1]} color="#7c4dff" speed={0.4} distort={0.6} size={0.6} />

      <ParticleField />
      <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={1} />
    </Canvas>
  );
};

export default Scene3D;
