import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | CHOSEN CREATORS',
  description: 'Services overview structure for Chosen Creators.',
};

export default function ServicesPage() {
  return (
    <PageContainer>
      <section className="section-padding-md" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
      }}>
        <span className="font-label text-gold">Structural Placeholder</span>
        <h1 className="font-h1 text-primary">SERVICES</h1>
        <p className="font-body-lg text-secondary" style={{ maxWidth: '600px' }}>
          CHOSEN CREATORS — Services overview structure inheriting Phase 1 design tokens.
        </p>
      </section>
    </PageContainer>
  );
}
