import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import HeroVisual from './HeroVisual';
import { heroData } from './heroData';

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="Hero Identity"
      style={{
        position: 'relative',
        minHeight: 'calc(100svh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-8)',
        overflow: 'hidden',
      }}
    >
      <PageContainer style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '1100px',
            margin: '0 auto',
            gap: 'var(--space-8)',
          }}
        >
          {/* 1. Visual Mark (Phase 3 Static Composition / Phase 4 3D Slot) */}
          <div className="hero-animate-1">
            <HeroVisual />
          </div>

          {/* 2. Brand Identity Label */}
          <div
            className="hero-animate-2"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              letterSpacing: '0.12em',
            }}
          >
            <span className="font-label text-secondary">{heroData.heroLabel}</span>
            <span
              style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* 3. Main Brand Statement (Primary H1) */}
          <div className="hero-animate-3">
            <h1
              className="font-display"
              style={{
                maxWidth: '960px',
                margin: '0 auto',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ display: 'block', color: 'var(--color-text-primary)' }}>
                YOU KNOW WHAT
              </span>
              <span style={{ display: 'block', color: 'var(--color-text-secondary)' }}>
                NEEDS TO EXIST.
              </span>
              <span style={{ display: 'block', color: 'var(--color-text-primary)', marginTop: 'var(--space-3)' }}>
                WE KNOW <span style={{ color: 'var(--color-text-secondary)' }}>HOW TO</span>
              </span>
              <span style={{ display: 'block', color: 'var(--color-accent)' }}>
                MAKE IT REAL.
              </span>
            </h1>
          </div>

          {/* 4. Editorial Subtext Statement */}
          <div className="hero-animate-4">
            <p
              className="font-body-lg text-secondary"
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                color: 'var(--color-text-secondary)',
              }}
            >
              {heroData.heroSubtext}
            </p>
          </div>
        </div>
      </PageContainer>

      {/* 5. Scroll Indicator Exit */}
      <div
        className="hero-animate-4"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)',
          marginTop: 'var(--space-8)',
        }}
      >
        <a
          href="#next-section"
          aria-label="Scroll to explore project sections"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-2)',
            color: 'var(--color-text-muted)',
            transition: 'color var(--transition-fast)',
          }}
        >
          <span className="font-label" style={{ fontSize: '0.6875rem', letterSpacing: '0.14em' }}>
            {heroData.scrollLabel}
          </span>
          <div
            className="scroll-line-pulse"
            style={{
              width: '1px',
              height: '32px',
              backgroundColor: 'var(--color-border-strong)',
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
