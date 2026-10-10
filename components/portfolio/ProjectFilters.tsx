'use client';

import React from 'react';
import { FILTER_CATEGORIES, FilterCategory } from '@/data/projects';

interface ProjectFiltersProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        width: '100%',
        borderBottom: '1px solid var(--color-border-subtle)',
        paddingBottom: 'var(--space-6)',
      }}
    >
      {/* Filter Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
          FILTER WORK
        </span>
        <span className="font-meta text-muted" aria-hidden="true">—</span>
        <span className="font-meta text-muted" style={{ fontSize: '0.75rem' }}>
          BY CAPABILITY CATEGORY
        </span>
      </div>

      {/* Filter Button Group */}
      <div
        role="tablist"
        aria-label="Filter Projects by Category"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
          alignItems: 'center',
        }}
      >
        {FILTER_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(category)}
              style={{
                background: isActive ? 'var(--color-surface)' : 'transparent',
                border: `1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border-subtle)'}`,
                color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontFamily: 'var(--font-family-mono)',
                fontSize: '0.75rem',
                fontWeight: isActive ? 700 : 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast)',
                outline: 'none',
              }}
            >
              <span>{category}</span>
              {isActive && (
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)',
                    display: 'inline-block',
                  }}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilters;
