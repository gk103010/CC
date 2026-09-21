'use client';

import React, { useState } from 'react';
import { capabilitiesData, CapabilityData } from '@/data/capabilitiesData';
import CapabilityItem from './CapabilityItem';
import CapabilityPreview from './CapabilityPreview';

export const CapabilitiesList: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(capabilitiesData[0].id);

  const activeCapability =
    capabilitiesData.find((item) => item.id === activeId) || capabilitiesData[0];

  const handleSelect = (id: string) => {
    setActiveId(id);
  };

  const handleMouseEnter = (id: string) => {
    setActiveId(id);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'var(--space-10)',
        width: '100%',
        alignItems: 'start',
      }}
      className="capabilities-grid-layout"
    >
      {/* Editorial Interactive Capability Index */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        {capabilitiesData.map((capability) => (
          <CapabilityItem
            key={capability.id}
            capability={capability}
            isActive={capability.id === activeId}
            onSelect={handleSelect}
            onMouseEnter={handleMouseEnter}
          />
        ))}
      </div>

      {/* Side-by-Side Graphic Editorial Preview (Desktop) */}
      <div className="capabilities-preview-wrapper">
        <CapabilityPreview activeCapability={activeCapability} />
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.capabilities-grid-layout) {
            grid-template-columns: 1.3fr 0.9fr !important;
          }
        }
        @media (max-width: 1023px) {
          :global(.capabilities-preview-wrapper) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CapabilitiesList;
