'use client';

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import AboutStatement from './AboutStatement';
import StudioVisual from './StudioVisual';
import { aboutData } from '@/data/aboutData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Chosen Creators"
      style={{
        position: 'relative',
        backgroundColor: 'transparent',
        paddingTop: 'var(--section-spacing-lg)',
        paddingBottom: 'var(--section-spacing-lg)',
        borderTop: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
      }}
    >
      <PageContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-12)',
            width: '100%',
          }}
        >
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '44rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="font-label text-gold">{aboutData.sectionIndex}</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">{aboutData.sectionLabel}</span>
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
              {aboutData.heading}
            </h2>
          </div>

          {/* Editorial Content Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-12)',
              width: '100%',
              alignItems: 'start',
            }}
            className="about-grid-layout"
          >
            {/* Left/Top Editorial Statement & Pillars */}
            <AboutStatement />

            {/* Right/Bottom Studio Graphic Visual Frame */}
            <StudioVisual />
          </div>
        </div>
      </PageContainer>

      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.about-grid-layout) {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
