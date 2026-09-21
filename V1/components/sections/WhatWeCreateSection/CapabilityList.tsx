'use client';

import React from 'react';
import { CapabilityData } from './capabilitiesData';
import CapabilityItem from './CapabilityItem';

interface CapabilityListProps {
  items: CapabilityData[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export const CapabilityList: React.FC<CapabilityListProps> = ({
  items,
  selectedId,
  onSelect,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Chosen Creators Capabilities"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {items.map((capability) => (
        <CapabilityItem
          key={capability.id}
          capability={capability}
          isSelected={selectedId === capability.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default CapabilityList;
