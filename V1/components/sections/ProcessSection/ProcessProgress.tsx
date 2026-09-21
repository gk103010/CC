'use client';

import React from 'react';
import { ProcessStageData } from './processData';

interface ProcessProgressProps {
  stages: ProcessStageData[];
  activeId: string;
  onSelectStage: (id: string) => void;
}

export const ProcessProgress: React.FC<ProcessProgressProps> = ({
  stages,
  activeId,
  onSelectStage,
}) => {
  const activeIndex = stages.findIndex((s) => s.id === activeId);
  const progressPercent = ((activeIndex + 1) / stages.length) * 100;

  return (
    <div
      aria-label="Process Progression Tracker"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        width: '100%',
        maxWidth: '360px',
      }}
    >
      {/* Progress Counter Metadata Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
          PROGRESS OPERATING SYSTEM
        </span>
        <span className="font-meta text-gold" style={{ fontSize: '0.875rem' }}>
          STAGE {stages[activeIndex >= 0 ? activeIndex : 0].number} / 0{stages.length}
        </span>
      </div>

      {/* Progress Track Line */}
      <div
        style={{
          position: 'relative',
          height: '2px',
          backgroundColor: 'var(--color-border-subtle)',
          borderRadius: '1px',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: 'var(--color-accent)',
            transition: 'width var(--transition-standard)',
          }}
        />
      </div>

      {/* Interactive Step Markers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${stages.length}, 1fr)`,
          gap: 'var(--space-2)',
        }}
      >
        {stages.map((stage, idx) => {
          const isActive = stage.id === activeId;
          const isPassed = idx <= activeIndex;

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              aria-label={`Jump to stage ${stage.number}: ${stage.title}`}
              style={{
                background: 'transparent',
                border: 'none',
                padding: 'var(--space-2) 0',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                textAlign: 'left',
                outline: 'none',
              }}
            >
              <span
                className="font-meta"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 700 : 400,
                  color: isActive
                    ? 'var(--color-accent)'
                    : isPassed
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-muted)',
                  transition: 'color var(--transition-fast)',
                }}
              >
                {stage.number}
              </span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-family-mono)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: isActive
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-muted)',
                  transition: 'color var(--transition-fast)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {stage.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessProgress;
