'use client';

import React from 'react';
import { DifferenceItemData } from './differenceData';

interface DifferenceItemProps {
  item: DifferenceItemData;
  isActive?: boolean;
  onSelect?: (id: string) => void;
}

export const DifferenceItem: React.FC<DifferenceItemProps> = ({
  item,
  isActive = false,
  onSelect,
}) => {
  return (
    <article
      id={`difference-item-${item.id}`}
      style={{
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-16)',
        borderBottom: '1px solid var(--color-border-subtle)',
        transition: 'opacity var(--transition-standard), transform var(--transition-standard)',
        opacity: isActive ? 1 : 0.45,
        cursor: onSelect ? 'pointer' : 'default',
      }}
      onClick={() => onSelect && onSelect(item.id)}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {/* Number & Title Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-4)',
          }}
        >
          {/* Number */}
          <span
            className="font-meta"
            style={{
              fontSize: '1rem',
              color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
              transition: 'color var(--transition-fast)',
              minWidth: '2.5rem',
            }}
          >
            {item.number}
          </span>

          {/* Statement Title */}
          <h3
            style={{
              fontFamily: 'var(--font-family-base)',
              fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: isActive ? 'var(--color-text-primary)' : 'var(--color-grey-white)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: 0,
            }}
          >
            <span>{item.title}</span>
            {isActive && (
              <span
                style={{
                  display: 'inline-block',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            )}
          </h3>
        </div>

        {/* Supporting Copy */}
        <div
          style={{
            paddingLeft: 'calc(2.5rem + var(--space-4))',
            maxWidth: '560px',
          }}
        >
          <p
            className="font-body"
            style={{
              color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              lineHeight: 1.6,
              transition: 'color var(--transition-fast)',
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default DifferenceItem;
