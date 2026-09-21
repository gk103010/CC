import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { getAllProjects } from '@/data/projects';
import WorkListingView from '@/components/portfolio/WorkListingView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SELECTED WORK | CHOSEN CREATORS',
  description: 'Explore selected brands, digital experiences, visual worlds, and creative technology projects by Chosen Creators.',
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <PageContainer>
      <section
        className="section-padding-md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-10)',
        }}
      >
        {/* Page Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span className="font-label text-gold">05</span>
            <span className="font-label text-muted" aria-hidden="true">—</span>
            <span className="font-label text-muted">PORTFOLIO EXHIBITION</span>
          </div>

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
            SELECTED WORK
          </h1>

          <p
            className="font-body-lg text-secondary"
            style={{ maxWidth: '44rem', margin: 0 }}
          >
            Every project is a distinct world. A curated exhibition sequence of identity frameworks, digital products, visual environments, and experimental creative prototypes.
          </p>
        </div>

        {/* Portfolio Category Filter & Editorial Exhibition View */}
        <WorkListingView initialProjects={projects} />
      </section>
    </PageContainer>
  );
}
