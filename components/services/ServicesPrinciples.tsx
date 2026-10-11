'use client';

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { servicesData } from '@/data/servicesData';

export const ServicesPrinciples: React.FC = () => {
  const { principles } = servicesData;

  return (
    <section
      aria-label="Studio Principles & Quality Guarantees"
      style={{
        position: 'relative',
        paddingTop: 'clamp(3.5rem, 7vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
        borderBottom: '1px solid var(--color-border-subtle)',
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
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              maxWidth: '44rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="font-label text-gold">04</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">OPERATIONAL STANDARDS</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              HOW WE WORK WITH YOU
            </h2>

            <p className="font-body text-secondary" style={{ margin: 0 }}>
              The tenets that govern every client collaboration at Chosen Creators.
            </p>
          </div>

          {/* 4-Item Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {principles.map((principle, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-6)',
                  backgroundColor: 'rgba(18, 18, 18, 0.35)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '2px',
                  position: 'relative',
                  transition: 'border-color 0.25s ease',
                }}
                className="principle-card"
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                  }}
                >
                  TENET {principle.number}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-family-base)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {principle.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-grey-secondary)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      <style jsx>{`
        :global(.principle-card:hover) {
          border-color: rgba(197, 160, 89, 0.4) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesPrinciples;
