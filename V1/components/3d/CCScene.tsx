'use client';

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import CCObject from './CCObject';
import CCEnvironment from './CCEnvironment';
import FallbackVisual from './FallbackVisual';

/**
 * WebGL Capability Detection Helper
 */
function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Main 3D Canvas Scene Wrapper for Chosen Creators.
 */
export const CCScene: React.FC = () => {
  const [canRender3D, setCanRender3D] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Check WebGL support
    if (!isWebGLAvailable()) {
      setCanRender3D(false);
      return;
    }

    // 2. Check Reduced Motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    setCanRender3D(true);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // 3. Pause WebGL frame loop when off-screen to preserve 100% GPU bandwidth during scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [canRender3D]);

  // Fallback to static visual if WebGL is unsupported or if an error occurred
  if (!canRender3D || hasError) {
    return <FallbackVisual />;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: 'clamp(180px, 24vw, 320px)',
        height: 'clamp(180px, 24vw, 320px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Suspense fallback={<FallbackVisual />}>
        <Canvas
          frameloop={isInView ? 'always' : 'never'}
          dpr={[1, typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            toneMappingExposure: 1.5,
          }}
          camera={{
            position: [0, 0, 3.8],
            fov: 42,
          }}
          style={{ width: '100%', height: '100%' }}
          onError={() => setHasError(true)}
        >
          <CCEnvironment />
          <CCObject reducedMotion={reducedMotion} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default CCScene;
