'use client';

import React, { useState, useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import processData from './processData';
import ProcessStage from './ProcessStage';
import ProcessProgress from './ProcessProgress';

export const ProcessSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>(processData.stages[0].id);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setActiveStageId(processData.stages[0].id);
      return;
    }

    let ticking = false;
    const sectionEl = document.getElementById('process-section');

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
        let closestId = processData.stages[0].id;
        let minDistance = Infinity;

        processData.stages.forEach((stage) => {
          const el = document.getElementById(`process-stage-${stage.id}`);
          if (el) {
            const rect = el.getBoundingClientRect();
            const stageCenter = rect.top + rect.height / 2;
            const distance = Math.abs(stageCenter - focalLine);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = stage.id;
            }
          }
        });

        setActiveStageId(closestId);
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

  const handleSelectStage = (id: string) => {
    setActiveStageId(id);
    const element = document.getElementById(`process-stage-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="process-section"
      aria-label="How We Make It Real"
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
            gap: 'var(--space-10)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Sticky Header & Progress Operating System */}
          <div
            className="process-header-col"
            style={{
              gridColumn: 'span 12',
              position: 'sticky',
              top: '120px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {/* Header Group */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                }}
              >
                <span className="font-label text-gold">{processData.sectionIndex}</span>
                <span className="font-label text-muted" aria-hidden="true">—</span>
                <span className="font-label text-muted">{processData.sectionLabel}</span>
              </div>

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
                {processData.heading}
              </h2>
            </div>

            {/* Minimal Progress Indicator */}
            <ProcessProgress
              stages={processData.stages}
              activeId={activeStageId}
              onSelectStage={handleSelectStage}
            />
          </div>

          {/* Right Column: Progressive 4-Stage Operating System Sequence */}
          <div
            className="process-list-col"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {processData.stages.map((stage, index) => (
              <ProcessStage
                key={stage.id}
                stage={stage}
                isActive={activeStageId === stage.id}
                isLast={index === processData.stages.length - 1}
                onSelect={handleSelectStage}
              />
            ))}
          </div>
        </div>
      </PageContainer>

      {/* Desktop Responsive Grid Stylesheet */}
      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.process-header-col) {
            grid-column: span 5 !important;
            margin-bottom: 0 !important;
          }
          :global(.process-list-col) {
            grid-column: 6 / span 7 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
