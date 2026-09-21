'use client';

import React from 'react';
import { Project } from '@/types';
import EditorialProjectItem from './EditorialProjectItem';

interface EditorialProjectSequenceProps {
  projects: Project[];
}

export const EditorialProjectSequence: React.FC<EditorialProjectSequenceProps> = ({
  projects,
}) => {
  if (projects.length === 0) {
    return (
      <div
        className="surface-dark border-default"
        style={{
          padding: 'var(--space-10) var(--space-8)',
          borderRadius: 'var(--radius-sm)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-3)',
          width: '100%',
        }}
      >
        <span className="font-meta text-gold" style={{ fontSize: '0.875rem' }}>
          EMPTY EXHIBITION ARCHIVE
        </span>
        <h3 className="font-h3 text-primary" style={{ margin: 0 }}>
          NO PROJECTS PUBLISHED IN THIS CATEGORY
        </h3>
        <p className="font-body-sm text-secondary" style={{ maxWidth: '420px', margin: 0 }}>
          Selected projects in this capability area are currently in production and will be added to the exhibition archive upon release.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {projects.map((project, idx) => (
        <EditorialProjectItem
          key={project.id}
          project={project}
          displayIndex={idx + 1}
        />
      ))}
    </div>
  );
};

export default EditorialProjectSequence;
