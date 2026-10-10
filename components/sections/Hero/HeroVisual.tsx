'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import FallbackVisual from '@/components/3d/FallbackVisual';

// Client-only dynamic import of 3D Scene with Fallback visual during SSR/loading
const DynamicCCScene = dynamic(() => import('@/components/3d/CCScene'), {
  ssr: false,
  loading: () => <FallbackVisual />,
});

interface HeroVisualProps {
  className?: string;
}

/**
 * HeroVisual Component
 * Renders the 3D CC Scene on the client side with graceful fallback to the static visual.
 */
export const HeroVisual: React.FC<HeroVisualProps> = ({ className }) => {
  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <DynamicCCScene />
    </div>
  );
};

export default HeroVisual;
