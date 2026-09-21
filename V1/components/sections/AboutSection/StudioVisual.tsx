'use client';

import React from 'react';

export const StudioVisual: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '420px',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-sm)',
        padding: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Background Graphic Structural Alignment Lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* Top Header Label */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-meta text-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>
          STUDIO FRAME // CC-01
        </span>
        <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
          GLOBAL POSITIONING
        </span>
      </div>

      {/* Center Typographic Graphic Emblem */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--space-8) 0',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-family-base)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            opacity: 0.9,
            textTransform: 'uppercase',
          }}
        >
          CHOSEN
        </div>
        <div
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            color: 'var(--color-accent)',
            marginTop: 'var(--space-2)',
            textTransform: 'uppercase',
          }}
        >
          CREATIVE DIRECTION & ENGINE
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span className="font-meta text-muted" style={{ fontSize: '0.7rem' }}>
            OPERATIONAL METHODOLOGY
          </span>
          <span className="font-mono text-primary" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
            INTEGRATED SYSTEM
          </span>
        </div>

        <span className="font-mono text-gold" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
          [07 // STUDIO]
        </span>
      </div>
    </div>
  );
};

export default StudioVisual;
