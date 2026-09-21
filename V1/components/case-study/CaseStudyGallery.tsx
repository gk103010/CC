'use client';

import React from 'react';

interface CaseStudyGalleryProps {
  gallery?: string[];
  projectTitle: string;
}

export const CaseStudyGallery: React.FC<CaseStudyGalleryProps> = ({
  gallery,
  projectTitle,
}) => {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
        paddingTop: 'var(--space-6)',
        borderTop: '1px solid var(--color-border-subtle)',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
          PROJECT GALLERY
        </span>
        <span className="font-meta text-muted" aria-hidden="true">—</span>
        <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
          VISUAL SHOWCASE ARCHITECTURE
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-6)',
          width: '100%',
        }}
      >
        {gallery.map((assetId, idx) => (
          <div
            key={assetId}
            className="surface-dark border-default"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <rect x="20" y="20" width="360" height="210" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
              <text x="200" y="130" textAnchor="middle" fill="var(--color-text-muted)" fontFamily="var(--font-family-mono)" fontSize="12" letterSpacing="0.05em">
                {projectTitle.toUpperCase()} — GALLERY ASSET 0{idx + 1}
              </text>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyGallery;
