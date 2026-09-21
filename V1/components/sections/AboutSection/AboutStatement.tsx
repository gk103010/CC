'use client';

import React from 'react';
import { aboutData } from '@/data/aboutData';

export const AboutStatement: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-8)',
        width: '100%',
      }}
    >
      {/* Primary Vision Statement */}
      <h3
        style={{
          fontFamily: 'var(--font-family-base)',
          fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
          fontWeight: 600,
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {aboutData.mainStatement}
      </h3>

      {/* Paragraphs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-6)',
        }}
      >
        {aboutData.paragraphs.map((paragraph, idx) => (
          <p
            key={idx}
            className="font-body-lg text-secondary"
            style={{
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Studio Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'var(--space-6)',
          paddingTop: 'var(--space-8)',
          borderTop: '1px solid var(--color-border-subtle)',
          marginTop: 'var(--space-4)',
        }}
      >
        {aboutData.pillars.map((pillar) => (
          <div
            key={pillar.number}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
            }}
          >
            <span className="font-mono text-gold" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
              {pillar.number} // {pillar.title}
            </span>
            <p className="font-body-sm text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStatement;
