'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { FilterCategory } from '@/data/projects';
import ProjectFilters from './ProjectFilters';
import EditorialProjectSequence from './EditorialProjectSequence';

interface WorkListingViewProps {
  initialProjects: Project[];
}

export const WorkListingView: React.FC<WorkListingViewProps> = ({ initialProjects }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');

  const filteredProjects =
    activeCategory === 'ALL'
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-8)',
        width: '100%',
      }}
    >
      <ProjectFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <EditorialProjectSequence projects={filteredProjects} />
    </div>
  );
};

export default WorkListingView;
