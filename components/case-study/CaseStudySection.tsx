'use client';

import React from 'react';

interface CaseStudySectionProps {
  indexLabel: string; // e.g. "01 — THE CHALLENGE"
  title: string;      // e.g. "PROBLEM STATEMENT"
  content?: string;
  subtitle?: string;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  indexLabel,
  title,
  content,
  subtitle,
}) => {
  if (!content || content.trim().length === 0) {
    return null;
  }

  return (
    <div
      className="surface-dark border-default"
      style={{
        width: '100%',
        padding: 'var(--space-8)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
          {indexLabel}
        </span>
        {subtitle && (
          <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
            {subtitle}
          </span>
        )}
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-family-base)',
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {title}
      </h2>

      <p
        className="font-body-md text-secondary"
        style={{
          margin: 0,
          lineHeight: 1.65,
          maxWidth: '52rem',
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default CaseStudySection;
