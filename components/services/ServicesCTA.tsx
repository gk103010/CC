'use client';

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';

export const ServicesCTA: React.FC = () => {
  return (
    <section
      id="services-cta"
      aria-label="Services Inquiry CTA"
      style={{
        position: 'relative',
        paddingTop: 'clamp(5rem, 10vw, 8.5rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8.5rem)',
        backgroundColor: 'rgba(7, 7, 7, 0.85)',
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
          {/* Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span className="font-label text-gold">START A PROJECT</span>
            <span className="font-label text-muted" aria-hidden="true">—</span>
            <span className="font-label text-muted">COLLABORATION INQUIRY</span>
          </div>

          {/* Large Statement Headline */}
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
                READY TO TRANSFORM
              </span>
              <span style={{ display: 'block', color: 'var(--color-text-secondary)' }}>
                RAW INTENT INTO REALITY?
              </span>
            </h2>

            <p
              className="font-body-lg text-secondary"
              style={{
                maxWidth: '44rem',
                marginTop: 'var(--space-6)',
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              Whether you need a high-velocity 2-week Studio Sprint or an end-to-end 10-week
              Flagship Transformation, our senior squad is ready to execute. Let’s build something
              enduring together.
            </p>
          </div>

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'var(--space-4)',
              paddingTop: 'var(--space-2)',
            }}
          >
            <Button href="/contact" variant="gold" size="lg">
              Initiate Project Inquiry
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              Explore Selected Work
            </Button>
          </div>

          {/* Direct Contact Alternative */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              paddingTop: 'var(--space-2)',
            }}
          >
            <span>Or reach out directly at</span>
            <a
              href="mailto:hello@chosencreators.com"
              style={{
                color: 'var(--color-gold)',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              hello@chosencreators.com
            </a>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default ServicesCTA;
