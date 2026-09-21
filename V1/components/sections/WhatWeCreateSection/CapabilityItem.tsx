'use client';

import React from 'react';
import { CapabilityData } from './capabilitiesData';

interface CapabilityItemProps {
  capability: CapabilityData;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const CapabilityItem: React.FC<CapabilityItemProps> = ({
  capability,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      role="tab"
      id={`capability-tab-${capability.id}`}
      aria-selected={isSelected}
      aria-controls={`capability-panel-${capability.id}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => onSelect(capability.id)}
      style={{
        width: '100%',
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--color-border-subtle)',
        paddingTop: 'var(--space-6)',
        paddingBottom: 'var(--space-6)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-4)',
        transition: 'color var(--transition-fast), border-color var(--transition-fast)',
        outline: 'none',
      }}
    >
      {/* Capability Number */}
      <span
        className="font-meta"
        style={{
          fontSize: '0.875rem',
          color: isSelected ? 'var(--color-accent)' : 'var(--color-text-muted)',
          transition: 'color var(--transition-fast)',
          minWidth: '2rem',
        }}
      >
        {capability.number}
      </span>

      {/* Capability Title */}
      <span
        style={{
          fontFamily: 'var(--font-family-base)',
          fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
          transition: 'color var(--transition-fast)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
          flex: 1,
        }}
      >
        <span>{capability.title}</span>
        {isSelected && (
          <span
            style={{
              display: 'inline-block',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-accent)',
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
        )}
      </span>

      {/* Selector Indicator Arrow */}
      <span
        style={{
          color: isSelected ? 'var(--color-accent)' : 'transparent',
          fontSize: '1rem',
          transition: 'color var(--transition-fast), transform var(--transition-fast)',
          transform: isSelected ? 'translateX(0)' : 'translateX(-4px)',
        }}
        aria-hidden="true"
      >
        →
      </span>
    </button>
  );
};

export default CapabilityItem;
