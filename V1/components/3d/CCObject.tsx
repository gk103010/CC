'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface CCObjectProps {
  reducedMotion?: boolean;
}

/**
 * 3D Logo Object Component rendering CC3D.glb model in the Hero section.
 */
export const CCObject: React.FC<CCObjectProps> = ({ reducedMotion = false }) => {
  const { scene } = useGLTF('/models/CC3D.glb');
  const groupRef = useRef<THREE.Group>(null!);
  const scrollYRef = useRef<number>(0);

  // Clone scene so multiple instances don't mutate shared references
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Frame Loop: Continuous slow deliberate rotation (no mouse hover tilting)
  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;

    // Slow, deliberate rotation
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x = 0;
    groupRef.current.rotation.z = 0;
  });

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]} position={[0, 0, 0]}>
      <primitive object={clonedScene} />
    </group>
  );
};

useGLTF.preload('/models/CC3D.glb');

export default CCObject;
