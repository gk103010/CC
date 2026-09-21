'use client';

import React, { useState, useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import DifferenceItem from './DifferenceItem';
import differenceData from './differenceData';

export const ChosenDifferenceSection: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState<string>(differenceData.items[0].id);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setActiveItemId(differenceData.items[0].id);
      return;
    }

    let ticking = false;
    const sectionEl = document.getElementById('difference-section');

    const handleScrollOrResize = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        if (sectionEl) {
          const secRect = sectionEl.getBoundingClientRect();
          if (secRect.bottom < 0 || secRect.top > window.innerHeight) {
            ticking = false;
            return;
          }
        }

        // Reader's natural focal line at 38% of viewport height
        const focalLine = window.innerHeight * 0.38;
        let closestId = differenceData.items[0].id;
        let minDistance = Infinity;

        differenceData.items.forEach((item) => {
          const el = document.getElementById(`difference-item-${item.id}`);
          if (el) {
            const rect = el.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(itemCenter - focalLine);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = item.id;
            }
          }
        });

        setActiveItemId(closestId);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    handleScrollOrResize(); // Run initial position check

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  const handleSelectItem = (id: string) => {
    setActiveItemId(id);
    const element = document.getElementById(`difference-item-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="difference-section"
      aria-label="The Chosen Difference"
      style={{
        position: 'relative',
        backgroundColor: 'transparent',
        paddingTop: 'var(--section-spacing-lg)',
        paddingBottom: 'var(--section-spacing-lg)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <PageContainer>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--space-8)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Sticky Section Header */}
          <div
            className="difference-header-col"
            style={{
              gridColumn: 'span 12',
              position: 'sticky',
              top: '120px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {/* Section Index & Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span className="font-label text-gold">{differenceData.sectionIndex}</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">{differenceData.sectionLabel}</span>
            </div>

            {/* Main Section Heading */}
            <h2
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ display: 'block' }}>{differenceData.headingLine1}</span>
              <span style={{ display: 'block', color: 'var(--color-text-secondary)' }}>
                US <span style={{ color: 'var(--color-accent)' }}>CHOSEN</span>?
              </span>
            </h2>
          </div>

          {/* Right Column: Numbered Principles List */}
          <div
            className="difference-list-col"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {differenceData.items.map((item) => (
              <DifferenceItem
                key={item.id}
                item={item}
                isActive={activeItemId === item.id}
                onSelect={handleSelectItem}
              />
            ))}
          </div>
        </div>
      </PageContainer>

      {/* Responsive Grid Column Stylesheet */}
      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.difference-header-col) {
            grid-column: span 5 !important;
            margin-bottom: 0 !important;
          }
          :global(.difference-list-col) {
            grid-column: 6 / span 7 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ChosenDifferenceSection;
