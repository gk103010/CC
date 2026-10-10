'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface CaseStudyNavigationProps {
  previousProject?: Project;
  nextProject?: Project;
}

export const CaseStudyNavigation: React.FC<CaseStudyNavigationProps> = ({
  previousProject,
  nextProject,
}) => {
  if (!previousProject && !nextProject) {
    return null;
  }

  return (
    <nav
      aria-label="Case Study Navigation"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        gap: 'var(--space-6)',
        paddingTop: 'var(--section-spacing-sm)',
        paddingBottom: 'var(--section-spacing-sm)',
        borderTop: '1px solid var(--color-border-subtle)',
        width: '100%',
      }}
    >
      {/* Previous Project Link */}
      {previousProject ? (
        <Link
          href={`/work/${previousProject.slug}`}
          className="surface-dark border-default"
          aria-label={`Navigate to previous project: ${previousProject.title}`}
          style={{
            flex: '1 1 280px',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            transition: 'border-color var(--transition-fast)',
            outline: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="text-gold" aria-hidden="true">←</span>
            <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
              PREVIOUS PROJECT
            </span>
          </div>

          <h4
            style={{
              fontFamily: 'var(--font-family-base)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {previousProject.title}
          </h4>
          <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
            {previousProject.category}
          </span>
        </Link>
      ) : (
        <div style={{ flex: '1 1 280px' }} />
      )}

      {/* Next Project Link */}
      {nextProject ? (
        <Link
          href={`/work/${nextProject.slug}`}
          className="surface-dark border-default"
          aria-label={`Navigate to next project: ${nextProject.title}`}
          style={{
            flex: '1 1 280px',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            textAlign: 'right',
            alignItems: 'flex-end',
            transition: 'border-color var(--transition-fast)',
            outline: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
              NEXT PROJECT
            </span>
            <span className="text-gold" aria-hidden="true">→</span>
          </div>

          <h4
            style={{
              fontFamily: 'var(--font-family-base)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {nextProject.title}
          </h4>
          <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
            {nextProject.category}
          </span>
        </Link>
      ) : (
        <div style={{ flex: '1 1 280px' }} />
      )}
    </nav>
  );
};

export default CaseStudyNavigation;
