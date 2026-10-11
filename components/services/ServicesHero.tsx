'use client';

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { servicesData } from '@/data/servicesData';
import Button from '@/components/ui/Button';

export const ServicesHero: React.FC = () => {
  const { hero } = servicesData;

  return (
    <section
      aria-label="Services Hero"
      style={{
        position: 'relative',
        paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
        borderBottom: '1px solid var(--color-border-subtle)',
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
          {/* Header Metadata & Big Display Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)',
              maxWidth: '64rem',
            }}
          >
            {/* Index Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span className="font-label text-gold">{hero.sectionIndex}</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">{hero.sectionLabel}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              <span style={{ display: 'block', color: 'var(--color-text-primary)' }}>
                {hero.headline}
              </span>
              <span
                style={{
                  display: 'block',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                }}
              >
                {hero.headlineSub}
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p
              className="font-body-lg text-secondary"
              style={{
                maxWidth: '46rem',
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              {hero.description}
            </p>

            {/* Quick Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                paddingTop: 'var(--space-2)',
              }}
            >
              <Button href="#sprints" variant="gold" size="lg">
                Explore Engagement Sprints
              </Button>
              <Button href="#catalogue" variant="secondary" size="lg">
                Browse Full Service Catalogue
              </Button>
            </div>
          </div>

          {/* Studio Metrics / Operating Highlights Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--space-4)',
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: 'var(--space-8)',
            }}
          >
            {hero.stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-6)',
                  backgroundColor: 'rgba(18, 18, 18, 0.4)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '2px',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                className="stat-card"
              >
                <span
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-family-base)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </span>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-muted)',
                    margin: 0,
                    lineHeight: 1.45,
                  }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      <style jsx>{`
        :global(.stat-card:hover) {
          border-color: rgba(197, 160, 89, 0.4) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default ServicesHero;
