'use client';

import React from 'react';
import { CapabilityData } from '@/data/capabilitiesData';

interface CapabilityItemProps {
  capability: CapabilityData;
  isActive: boolean;
  onSelect: (id: string) => void;
  onMouseEnter: (id: string) => void;
}

export const CapabilityItem: React.FC<CapabilityItemProps> = ({
  capability,
  isActive,
  onSelect,
  onMouseEnter,
}) => {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-border-subtle)',
        transition: 'all var(--transition-fast)',
      }}
    >
      <button
        type="button"
        onClick={() => onSelect(capability.id)}
        onMouseEnter={() => onMouseEnter(capability.id)}
        onFocus={() => onMouseEnter(capability.id)}
        aria-expanded={isActive}
        aria-label={`Capability ${capability.number}: ${capability.title}`}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 'var(--space-5)',
          paddingBottom: 'var(--space-5)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
          transition: 'color var(--transition-fast)',
          outline: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)', flex: 1 }}>
          <span
            className="font-mono"
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
              transition: 'color var(--transition-fast)',
            }}
          >
            {capability.number}
          </span>

          <span
            style={{
              fontFamily: 'var(--font-family-base)',
              fontSize: 'clamp(1.25rem, 2.8vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
              transition: 'all var(--transition-fast)',
              transform: isActive ? 'translateX(8px)' : 'translateX(0px)',
            }}
          >
            {capability.title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <span
            className="font-meta text-muted capability-tag"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
            }}
          >
            {capability.tag}
          </span>

          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
              border: isActive ? 'none' : '1px solid var(--color-border-subtle)',
              transition: 'all var(--transition-fast)',
            }}
          />
        </div>
      </button>

      {/* Description text for active state */}
      <div
        style={{
          maxHeight: isActive ? '120px' : '0px',
          opacity: isActive ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          paddingBottom: isActive ? 'var(--space-5)' : '0px',
          paddingLeft: 'clamp(1.5rem, 3vw, 2.75rem)',
        }}
      >
        <p
          className="font-body-md text-secondary"
          style={{
            margin: 0,
            maxWidth: '38rem',
            lineHeight: 1.6,
          }}
        >
          {capability.shortDescription}
        </p>
      </div>

      <style jsx>{`
        .capability-tag {
          display: none;
        }
        @media (min-width: 768px) {
          .capability-tag {
            display: inline-block;
          }
        }
      `}</style>
    </div>
  );
};

export default CapabilityItem;

