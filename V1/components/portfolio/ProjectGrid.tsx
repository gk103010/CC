'use client';

import React from 'react';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
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
          EMPTY CATEGORY STATE
        </span>
        <h3 className="font-h3 text-primary" style={{ margin: 0 }}>
          NO PROJECTS AVAILABLE IN THIS CATEGORY
        </h3>
        <p className="font-body-sm text-secondary" style={{ maxWidth: '420px', margin: 0 }}>
          Selected projects in this category are currently in production and will be published here upon release.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'var(--space-8)',
        width: '100%',
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
