'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface EditorialProjectItemProps {
  project: Project;
  displayIndex: number;
}

export const EditorialProjectItem: React.FC<EditorialProjectItemProps> = ({
  project,
  displayIndex,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '120px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const formattedIndex = displayIndex < 10 ? `0${displayIndex}` : `${displayIndex}`;
  const isImageLeft = displayIndex % 2 !== 0; // Odd = Image Left, Even = Text Left

  const renderVisualGraphic = () => {
    if (project.category === 'BRANDS') {
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path d="M 0 250 L 800 250 M 400 0 L 400 500 M 200 0 L 200 500 M 600 0 L 600 500" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="250" r="120" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <circle cx="400" cy="250" r="85" stroke="var(--color-accent-muted)" strokeWidth="1" />
          <text x="400" y="265" textAnchor="middle" fill="var(--color-text-primary)" fontFamily="var(--font-family-mono)" fontSize="48" fontWeight="700" letterSpacing="0.1em">CC</text>
          <circle cx="400" cy="305" r="5" fill="var(--color-accent)" />
        </svg>
      );
    }
    if (project.category === 'DIGITAL EXPERIENCES') {
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect x="50" y="45" width="700" height="410" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1" />
          <line x1="50" y1="95" x2="750" y2="95" stroke="var(--color-border-subtle)" strokeWidth="1" />
          <circle cx="80" cy="70" r="5" fill="#444" />
          <circle cx="98" cy="70" r="5" fill="#444" />
          <circle cx="116" cy="70" r="5" fill="#444" />
          <rect x="90" y="140" width="280" height="28" rx="3" fill="var(--color-text-primary)" opacity="0.85" />
          <rect x="90" y="185" width="460" height="14" rx="2" fill="var(--color-text-muted)" opacity="0.6" />
          <rect x="90" y="210" width="380" height="14" rx="2" fill="var(--color-text-muted)" opacity="0.4" />
          <rect x="90" y="260" width="140" height="42" rx="3" fill="var(--color-accent)" opacity="0.85" />
        </svg>
      );
    }
    if (project.category === 'VISUAL WORLDS') {
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect x="60" y="50" width="680" height="400" stroke="var(--color-border-strong)" strokeWidth="1" />
          <path d="M 60 50 L 220 160 M 740 50 L 580 160 M 60 450 L 220 340 M 740 450 L 580 340" stroke="var(--color-border-subtle)" strokeWidth="1" />
          <rect x="220" y="160" width="360" height="180" stroke="var(--color-accent)" strokeWidth="1" opacity="0.7" />
          <circle cx="400" cy="250" r="45" fill="var(--color-accent-muted)" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path d="M 80 90 L 280 410 M 280 90 L 80 410 M 520 90 L 720 410 M 720 90 L 520 410" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="80" cy="90" r="8" fill="var(--color-accent)" />
        <circle cx="280" cy="410" r="8" fill="var(--color-text-primary)" />
        <circle cx="520" cy="90" r="8" fill="var(--color-accent)" />
        <circle cx="720" cy="410" r="8" fill="var(--color-text-secondary)" />
        <text x="400" y="440" textAnchor="middle" fill="var(--color-text-muted)" fontFamily="var(--font-family-mono)" fontSize="13" letterSpacing="0.1em">&lt;EXPERIMENTAL_EXHIBITION_PROTOTYPE /&gt;</text>
      </svg>
    );
  };

  const imageBlock = (
    <div
      className="editorial-graphic-container surface-dark border-default"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 10',
        backgroundColor: 'var(--color-canvas)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        transition: 'border-color var(--transition-fast)',
      }}
    >
      <div
        className="editorial-graphic"
        style={{
          width: '100%',
          height: '100%',
          transition: 'transform var(--transition-standard)',
        }}
      >
        {renderVisualGraphic()}
      </div>
    </div>
  );

  const textBlock = (
    <div
      className="editorial-text-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span className="font-label text-gold">PROJECT {formattedIndex}</span>
          <span className="font-label text-muted" aria-hidden="true">—</span>
          <span className="font-label text-muted">{project.category}</span>
        </div>
        <span className="font-meta text-muted" style={{ fontSize: '0.875rem' }}>
          {project.year}
        </span>
      </div>

      <h2
        className="editorial-title"
        style={{
          fontFamily: 'var(--font-family-base)',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          color: 'var(--color-text-primary)',
          margin: 0,
          transition: 'color var(--transition-fast)',
        }}
      >
        {project.title}
      </h2>

      <p className="font-body-md text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'var(--space-2)' }}>
        <span className="font-meta" style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
          VIEW PROJECT
        </span>
        <span className="text-gold editorial-arrow" style={{ fontSize: '1rem', transition: 'transform var(--transition-fast)' }}>
          →
        </span>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      id={`editorial-project-${project.slug}`}
      style={{
        width: '100%',
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-10)',
        borderBottom: '1px solid var(--color-border-subtle)',
        opacity: 1,
        transform: 'none',
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View project details for ${project.title}`}
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          outline: 'none',
        }}
        className="editorial-project-link"
      >
        <div
          className={`editorial-split-grid ${isImageLeft ? 'image-left' : 'text-left'}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--space-8)',
            alignItems: 'center',
          }}
        >
          {isImageLeft ? (
            <>
              <div className="grid-col-image" style={{ gridColumn: 'span 12' }}>
                {imageBlock}
              </div>
              <div className="grid-col-text" style={{ gridColumn: 'span 12' }}>
                {textBlock}
              </div>
            </>
          ) : (
            <>
              <div className="grid-col-text" style={{ gridColumn: 'span 12' }}>
                {textBlock}
              </div>
              <div className="grid-col-image" style={{ gridColumn: 'span 12' }}>
                {imageBlock}
              </div>
            </>
          )}
        </div>
      </Link>

      <style jsx>{`
        :global(.editorial-project-link:hover .editorial-graphic) {
          transform: scale(1.025);
        }
        :global(.editorial-project-link:hover .editorial-graphic-container) {
          border-color: var(--color-border-strong) !important;
        }
        :global(.editorial-project-link:hover .editorial-arrow) {
          transform: translateX(4px);
        }

        @media (min-width: 1024px) {
          :global(.editorial-split-grid.image-left > .grid-col-image) {
            grid-column: span 7 !important;
          }
          :global(.editorial-split-grid.image-left > .grid-col-text) {
            grid-column: 8 / span 5 !important;
          }

          :global(.editorial-split-grid.text-left > .grid-col-text) {
            grid-column: span 5 !important;
          }
          :global(.editorial-split-grid.text-left > .grid-col-image) {
            grid-column: 6 / span 7 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default EditorialProjectItem;
