'use client';

import React, { useEffect, useRef, useState } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import problemData from './problemData';

export const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Once revealed, remain visible permanently
        }
      },
      {
        threshold: 0.05,
        rootMargin: '100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem-section"
      aria-label="The Problem"
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
            gap: 'var(--space-12)',
          }}
        >
          {/* Section Index & Label */}
          <div
            className={`reveal-fade-up ${isVisible ? 'is-visible' : ''}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              transitionDelay: '0ms',
            }}
          >
            <span className="font-label text-gold">{problemData.sectionIndex}</span>
            <span className="font-label text-muted" aria-hidden="true">—</span>
            <span className="font-label text-muted">{problemData.sectionLabel}</span>
          </div>

          {/* Asymmetric Editorial Layout: Main Statement + Supporting Copy */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'var(--space-8)',
              alignItems: 'start',
            }}
          >
            {/* Main Statement (Columns 1 - 8) */}
            <div
              className={`reveal-fade-up ${isVisible ? 'is-visible' : ''}`}
              style={{
                gridColumn: 'span 12',
                transitionDelay: '150ms',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-family-base)',
                  fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)',
                  textTransform: 'uppercase',
                  maxWidth: '1000px',
                }}
              >
                <span style={{ display: 'block' }}>{problemData.statementLine1}</span>
                <span style={{ display: 'block', color: 'var(--color-text-secondary)' }}>
                  {problemData.statementLine2}
                </span>
                <span style={{ display: 'block', marginTop: 'var(--space-4)' }}>
                  {problemData.statementLine3}
                </span>
                <span style={{ display: 'block', color: 'var(--color-accent)' }}>
                  {problemData.statementLine4}
                </span>
              </h2>
            </div>

            {/* Supporting Copy Column (Columns 1 - 12 on mobile, 7 - 12 on desktop) */}
            <div
              className={`reveal-fade-up ${isVisible ? 'is-visible' : ''}`}
              style={{
                gridColumn: 'span 12',
                marginTop: 'var(--space-8)',
                transitionDelay: '300ms',
              }}
            >
              <div
                style={{
                  maxWidth: '440px',
                  borderLeft: '1px solid var(--color-border)',
                  paddingLeft: 'var(--space-6)',
                }}
              >
                <p className="font-body-lg text-secondary">
                  {problemData.supportingCopy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* Stylesheet for Grid column responsive overrides */}
      <style jsx>{`
        @media (min-width: 1024px) {
          div[style*="gridColumn: 'span 12'"]:nth-child(1) {
            grid-column: span 8 !important;
          }
          div[style*="gridColumn: 'span 12'"]:nth-child(2) {
            grid-column: 8 / span 5 !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
