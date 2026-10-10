/*GK-18-02-08*/

'use client';

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="final-cta"
      aria-label="Final Call to Action"
      style={{
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        paddingTop: 'var(--section-spacing-xl)',
        paddingBottom: 'var(--section-spacing-xl)',
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
          {/* Top Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span className="font-label text-gold">START A PROJECT</span>
            <span className="font-label text-muted" aria-hidden="true">—</span>
            <span className="font-label text-muted">NEXT STEP</span>
          </div>

          {/* Primary Statement */}
          <div style={{ maxWidth: '64rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              <span style={{ display: 'block', color: 'var(--color-text-primary)' }}>
                YOU KNOW WHAT
              </span>
              <span style={{ display: 'block', color: 'var(--color-text-secondary)' }}>
                NEEDS TO EXIST.
              </span>
              <span style={{ display: 'block', color: 'var(--color-text-primary)', marginTop: 'var(--space-4)' }}>
                WE KNOW <span style={{ color: 'var(--color-text-secondary)' }}>HOW TO</span>
              </span>
              <span style={{ display: 'block', color: 'var(--color-accent)' }}>
                MAKE IT REAL.
              </span>
            </h2>
          </div>

          {/* Direct Conversion Action Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
              paddingTop: 'var(--space-6)',
            }}
          >
            <Button href="#contact" variant="gold" size="lg">
              START A PROJECT →
            </Button>

            <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
              DIRECT INQUIRIES & DISCOVERY
            </span>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default FinalCTA;
