'use client';

import React, { useState } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import capabilitiesData from './capabilitiesData';
import CapabilityList from './CapabilityList';
import CapabilityPreview from './CapabilityPreview';

export const WhatWeCreateSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(capabilitiesData.defaultSelectedId);

  const selectedCapability =
    capabilitiesData.items.find((item) => item.id === selectedId) ||
    capabilitiesData.items[0];

  return (
    <section
      id="capabilities-section"
      aria-label="What We Create"
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
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--space-10)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Section Header & Capability Controls */}
          <div
            className="capabilities-left-col"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)',
            }}
          >
            {/* Header Group */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                }}
              >
                <span className="font-label text-gold">{capabilitiesData.sectionIndex}</span>
                <span className="font-label text-muted" aria-hidden="true">—</span>
                <span className="font-label text-muted">{capabilitiesData.sectionLabel}</span>
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
                }}
              >
                {capabilitiesData.heading}
              </h2>
            </div>

            {/* Interactive Capability Selector List */}
            <CapabilityList
              items={capabilitiesData.items}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>

          {/* Right Column: Visual Preview & Selected Capability Panel */}
          <div
            className="capabilities-right-col"
            style={{
              gridColumn: 'span 12',
              position: 'sticky',
              top: '120px',
            }}
          >
            <CapabilityPreview capability={selectedCapability} />
          </div>
        </div>
      </PageContainer>

      {/* Desktop Split Layout Stylesheet */}
      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.capabilities-left-col) {
            grid-column: span 6 !important;
          }
          :global(.capabilities-right-col) {
            grid-column: 7 / span 6 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeCreateSection;
