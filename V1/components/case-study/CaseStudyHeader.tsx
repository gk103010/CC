'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface CaseStudyHeaderProps {
  project: Project;
  projectIndex: number;
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  project,
  projectIndex,
}) => {
  const formattedIndex = projectIndex < 10 ? `0${projectIndex}` : `${projectIndex}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Return Link */}
      <div>
        <Link
          href="/work"
          aria-label="Return to selected work portfolio listing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            fontFamily: 'var(--font-family-mono)',
            fontSize: '0.875rem',
            transition: 'color var(--transition-fast)',
            outline: 'none',
          }}
        >
          <span className="text-gold" aria-hidden="true">←</span>
          <span>BACK TO SELECTED WORK</span>
        </Link>
      </div>

      {/* Main Metadata & Title Group */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span className="font-label text-gold">PROJECT {formattedIndex}</span>
            <span className="font-label text-muted" aria-hidden="true">—</span>
            <span className="font-label text-muted">{project.category}</span>
          </div>

          <span className="font-meta text-muted" style={{ fontSize: '0.875rem' }}>
            RELEASE YEAR: {project.year}
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-family-base)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          {project.title}
        </h1>

        <p
          className="font-body-lg text-secondary"
          style={{ maxWidth: '44rem', margin: 0, lineHeight: 1.5 }}
        >
          {project.description}
        </p>
      </div>

      {/* Services Delivered Pill List */}
      {project.services && project.services.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            paddingTop: 'var(--space-6)',
            paddingBottom: 'var(--space-6)',
            borderTop: '1px solid var(--color-border-subtle)',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
            SERVICES DELIVERED
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {project.services.map((service) => (
              <span
                key={service}
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-primary)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyHeader;
