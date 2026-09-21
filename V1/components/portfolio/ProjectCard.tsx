'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="surface-dark border-default"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-sm)',
          textDecoration: 'none',
          gap: 'var(--space-5)',
          transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
          outline: 'none',
        }}
      >
        {/* 1. Thumbnail Graphic Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 10',
            backgroundColor: 'var(--color-canvas)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {project.category === 'BRANDS' && (
            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M 0 125 L 400 125 M 200 0 L 200 250" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="125" r="50" stroke="var(--color-border-strong)" strokeWidth="1.5" />
              <circle cx="200" cy="125" r="35" stroke="var(--color-accent-muted)" strokeWidth="1" />
              <text x="200" y="133" textAnchor="middle" fill="var(--color-text-primary)" fontFamily="var(--font-family-mono)" fontSize="24" fontWeight="700" letterSpacing="0.1em">CC</text>
            </svg>
          )}

          {project.category === 'DIGITAL EXPERIENCES' && (
            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <rect x="30" y="30" width="340" height="190" rx="4" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1" />
              <line x1="30" y1="60" x2="370" y2="60" stroke="var(--color-border-subtle)" strokeWidth="1" />
              <rect x="50" y="80" width="140" height="16" rx="2" fill="var(--color-text-primary)" opacity="0.8" />
              <rect x="50" y="105" width="220" height="8" rx="2" fill="var(--color-text-muted)" opacity="0.6" />
              <rect x="50" y="120" width="180" height="8" rx="2" fill="var(--color-text-muted)" opacity="0.4" />
              <rect x="50" y="145" width="80" height="24" rx="2" fill="var(--color-accent)" opacity="0.8" />
            </svg>
          )}

          {project.category === 'VISUAL WORLDS' && (
            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <rect x="40" y="35" width="320" height="180" stroke="var(--color-border-strong)" strokeWidth="1" />
              <path d="M 40 35 L 120 80 M 360 35 L 280 80 M 40 215 L 120 170 M 360 215 L 280 170" stroke="var(--color-border-subtle)" strokeWidth="1" />
              <rect x="120" y="80" width="160" height="90" stroke="var(--color-accent)" strokeWidth="1" opacity="0.7" />
            </svg>
          )}

          {project.category === 'EXPERIMENTAL / FUTURE' && (
            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M 60 60 L 160 190 M 160 60 L 60 190 M 240 60 L 340 190" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="60" cy="60" r="5" fill="var(--color-accent)" />
              <circle cx="160" cy="190" r="5" fill="var(--color-text-primary)" />
              <circle cx="240" cy="60" r="5" fill="var(--color-accent)" />
              <circle cx="340" cy="190" r="5" fill="var(--color-text-secondary)" />
            </svg>
          )}
        </div>

        {/* 2. Metadata Header: Category Tag & Year */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
            {project.category}
          </span>
          <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
            {project.year}
          </span>
        </div>

        {/* 3. Title & Short Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
          <h3
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
            {project.title}
          </h3>
          <p
            className="font-body-sm text-secondary"
            style={{
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* 4. Action Arrow Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            paddingTop: 'var(--space-2)',
            borderTop: '1px solid var(--color-border-subtle)',
          }}
        >
          <span
            className="font-meta"
            style={{ fontSize: '0.75rem', color: 'var(--color-text-primary)' }}
          >
            VIEW CASE STUDY
          </span>
          <span className="text-gold" style={{ fontSize: '0.875rem' }} aria-hidden="true">
            →
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
