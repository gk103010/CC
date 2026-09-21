import React from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | CHOSEN CREATORS',
  description: 'The requested page or project could not be found.',
};

export default function NotFound() {
  return (
    <PageContainer>
      <section
        className="section-padding-md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
          alignItems: 'flex-start',
          minHeight: '60vh',
          justifyContent: 'center',
        }}
      >
        <span className="font-label text-gold">404 — NOT FOUND</span>
        <h1
          style={{
            fontFamily: 'var(--font-family-base)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          PROJECT NOT FOUND
        </h1>
        <p className="font-body-lg text-secondary" style={{ maxWidth: '36rem', margin: 0 }}>
          The project or page you requested does not exist or has been relocated within the Chosen Creators portfolio.
        </p>

        <div style={{ marginTop: 'var(--space-4)' }}>
          <Link
            href="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-text-primary)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              fontFamily: 'var(--font-family-mono)',
              fontSize: '0.875rem',
            }}
          >
            <span className="text-gold" aria-hidden="true">←</span>
            <span>RETURN TO SELECTED WORK</span>
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
