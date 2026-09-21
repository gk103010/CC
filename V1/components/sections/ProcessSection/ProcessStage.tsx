'use client';

import React from 'react';
import { ProcessStageData } from './processData';

interface ProcessStageProps {
  stage: ProcessStageData;
  isActive: boolean;
  isLast: boolean;
  onSelect: (id: string) => void;
}

export const ProcessStage: React.FC<ProcessStageProps> = ({
  stage,
  isActive,
  isLast,
  onSelect,
}) => {
  return (
    <div
      id={`process-stage-${stage.id}`}
      style={{
        position: 'relative',
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-8)',
        borderBottom: isLast ? 'none' : '1px solid var(--color-border-subtle)',
        transition: 'opacity var(--transition-standard)',
        opacity: isActive ? 1 : 0.45,
      }}
    >
      <button
        type="button"
        onClick={() => onSelect(stage.id)}
        aria-expanded={isActive}
        aria-controls={`process-stage-content-${stage.id}`}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {/* Stage Header Line: Number + Title + Gold Active Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-4)',
            width: '100%',
          }}
        >
          {/* Stage Number */}
          <span
            className="font-meta"
            style={{
              fontSize: '1rem',
              color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
              transition: 'color var(--transition-fast)',
              minWidth: '2.5rem',
            }}
          >
            {stage.number}
          </span>

          {/* Stage Title */}
          <h3
            style={{
              fontFamily: 'var(--font-family-base)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              transition: 'color var(--transition-fast)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              margin: 0,
              flex: 1,
            }}
          >
            <span>{stage.title}</span>
            {isActive && (
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            )}
          </h3>

          {/* Directional Indicator */}
          <span
            style={{
              color: isActive ? 'var(--color-accent)' : 'var(--color-border-strong)',
              fontSize: '1.25rem',
              transition: 'color var(--transition-fast), transform var(--transition-fast)',
              transform: isActive ? 'translateY(0)' : 'translateY(-2px)',
            }}
            aria-hidden="true"
          >
            ↓
          </span>
        </div>

        {/* Stage Body Content */}
        <div
          id={`process-stage-content-${stage.id}`}
          style={{
            paddingLeft: 'clamp(2.5rem, 4vw, 3.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
          }}
        >
          {/* Short Description */}
          <p
            className="font-body-lg"
            style={{
              color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              maxWidth: '38rem',
              transition: 'color var(--transition-fast)',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {stage.shortDescription}
          </p>

          {/* Stage Metadata Detail */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              marginTop: 'var(--space-2)',
            }}
          >
            <span
              className="font-meta"
              style={{
                fontSize: '0.75rem',
                color: isActive ? 'var(--color-text-muted)' : 'var(--color-border-strong)',
                transition: 'color var(--transition-fast)',
              }}
            >
              {stage.detail}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ProcessStage;
