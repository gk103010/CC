'use client';

import React from 'react';
import { CapabilityData } from '@/data/capabilitiesData';

interface CapabilityPreviewProps {
  activeCapability: CapabilityData;
}

export const CapabilityPreview: React.FC<CapabilityPreviewProps> = ({
  activeCapability,
}) => {
  return (
    <div
      style={{
        position: 'sticky',
        top: '6rem',
        padding: 'var(--space-8)',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '360px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Background Graphic Structural Grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Top Meta Bar */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-meta text-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>
          CAPABILITY PREVIEW // {activeCapability.number}
        </span>
        <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
          {activeCapability.tag}
        </span>
      </div>

      {/* Center Typographic Focal Statement */}
      <div style={{ position: 'relative', zIndex: 2, margin: 'var(--space-8) 0' }}>
        <h3
          style={{
            fontFamily: 'var(--font-family-base)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            textTransform: 'uppercase',
            margin: '0 0 var(--space-4) 0',
          }}
        >
          {activeCapability.title}
        </h3>
        <p className="font-body-md text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>
          {activeCapability.shortDescription}
        </p>
      </div>

      {/* Bottom Structural Indicator */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--color-border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="font-meta text-muted" style={{ fontSize: '0.7rem' }}>
          CHOSEN CREATORS STUDIO ARCHITECTURE
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[1, 2, 3].map((bar) => (
            <span
              key={bar}
              style={{
                width: '12px',
                height: '2px',
                backgroundColor: 'var(--color-accent)',
                opacity: 0.3 * bar,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilityPreview;
