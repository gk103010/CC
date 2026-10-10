'use client';

import React from 'react';
import { Project } from '@/types';

interface CaseStudyHeroProps {
  project: Project;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ project }) => {
  const renderVisualGraphic = () => {
    if (project.category === 'BRANDS') {
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path d="M 0 225 L 800 225 M 400 0 L 400 450 M 200 0 L 200 450 M 600 0 L 600 450" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="225" r="120" stroke="var(--color-border-strong)" strokeWidth="2" />
          <circle cx="400" cy="225" r="90" stroke="var(--color-accent-muted)" strokeWidth="1.5" />
          <text x="400" y="242" textAnchor="middle" fill="var(--color-text-primary)" fontFamily="var(--font-family-mono)" fontSize="56" fontWeight="700" letterSpacing="0.1em">CC HERO</text>
          <circle cx="400" cy="285" r="5" fill="var(--color-accent)" />
        </svg>
      );
    }

    if (project.category === 'DIGITAL EXPERIENCES') {
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect x="60" y="50" width="680" height="350" rx="8" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <circle cx="96" cy="80" r="6" fill="#444" />
          <circle cx="120" cy="80" r="6" fill="#444" />
          <circle cx="144" cy="80" r="6" fill="#444" />
          <line x1="60" y1="110" x2="740" y2="110" stroke="var(--color-border-subtle)" strokeWidth="1" />
          <rect x="100" y="150" width="280" height="32" rx="4" fill="var(--color-text-primary)" opacity="0.85" />
          <rect x="100" y="200" width="440" height="16" rx="3" fill="var(--color-text-muted)" opacity="0.6" />
          <rect x="100" y="230" width="360" height="16" rx="3" fill="var(--color-text-muted)" opacity="0.4" />
          <rect x="100" y="280" width="160" height="48" rx="4" fill="var(--color-accent)" opacity="0.85" />
        </svg>
      );
    }

    if (project.category === 'VISUAL WORLDS') {
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect x="80" y="60" width="640" height="330" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <path d="M 80 60 L 240 150 M 720 60 L 560 150 M 80 390 L 240 300 M 720 390 L 560 300" stroke="var(--color-border-subtle)" strokeWidth="1" />
          <rect x="240" y="150" width="320" height="150" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.7" />
          <circle cx="400" cy="225" r="45" fill="var(--color-accent-muted)" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path d="M 100 100 L 300 350 M 300 100 L 100 350 M 500 100 L 700 350 M 700 100 L 500 350" stroke="var(--color-border-subtle)" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="100" cy="100" r="10" fill="var(--color-accent)" />
        <circle cx="300" cy="350" r="10" fill="var(--color-text-primary)" />
        <circle cx="500" cy="100" r="10" fill="var(--color-accent)" />
        <circle cx="700" cy="350" r="10" fill="var(--color-text-secondary)" />
        <text x="400" y="380" textAnchor="middle" fill="var(--color-text-muted)" fontFamily="var(--font-family-mono)" fontSize="14" letterSpacing="0.1em">&lt;EXPERIMENTAL_HERO_SURFACE /&gt;</text>
      </svg>
    );
  };

  return (
    <div
      className="surface-dark border-default"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        backgroundColor: 'var(--color-canvas)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {renderVisualGraphic()}

      <span
        className="font-meta"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '20px',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        {project.title} — HERO VISUAL MOMENT
      </span>
    </div>
  );
};

export default CaseStudyHero;
