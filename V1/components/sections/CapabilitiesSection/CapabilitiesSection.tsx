'use client';

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import CapabilitiesList from './CapabilitiesList';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      style={{
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        paddingTop: 'var(--section-spacing-lg)',
        paddingBottom: 'var(--section-spacing-lg)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <PageContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-10)',
            width: '100%',
          }}
        >
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '44rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="font-label text-gold">06</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">CAPABILITIES</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              CAPABILITIES
            </h2>

            <p className="font-body-lg text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>
              A disciplined, end-to-end set of creative and technical capabilities built to transform brand intent into high-performance digital reality.
            </p>
          </div>

          {/* Capabilities List Component */}
          <CapabilitiesList />
        </div>
      </PageContainer>
    </section>
  );
};

export default CapabilitiesSection;
