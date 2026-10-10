import React from 'react';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/PageContainer';
import { getProjectBySlug, getAdjacentProjects, getAllProjects } from '@/data/projects';
import { WorkPageProps } from '@/types';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import CaseStudyGallery from '@/components/case-study/CaseStudyGallery';
import CaseStudyVideo from '@/components/case-study/CaseStudyVideo';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found | CHOSEN CREATORS',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | CHOSEN CREATORS`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: WorkPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const { previousProject, nextProject, currentIndex } = getAdjacentProjects(resolvedParams.slug);
  const projectDisplayNumber = currentIndex >= 0 ? currentIndex + 1 : 1;

  return (
    <PageContainer>
      <article
        className="section-padding-md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-10)',
        }}
      >
        {/* 1. Project Editorial Header */}
        <CaseStudyHeader project={project} projectIndex={projectDisplayNumber} />

        {/* 2. Hero Visual Moment */}
        <CaseStudyHero project={project} />

        {/* 3. The Challenge Section */}
        <CaseStudySection
          indexLabel="01 — THE CHALLENGE"
          title="CONTEXT & PROBLEM STATEMENT"
          content={project.challenge}
          subtitle="DIAGNOSTIC & CONTEXT"
        />

        {/* 4. The Idea Section */}
        <CaseStudySection
          indexLabel="02 — THE IDEA"
          title="CONCEPT & STRATEGIC DIRECTION"
          content={project.solution}
          subtitle="CREATIVE STRATEGY"
        />

        {/* 5. The Execution Section */}
        <CaseStudySection
          indexLabel="03 — THE EXECUTION"
          title="IMPLEMENTATION & VISUAL CRAFT"
          content={`Production and design execution focused on modular typography tokens, responsive interaction design, and fine-tuned micro-details across all client touchpoints.`}
          subtitle="SYSTEMS ENGINEERING"
        />

        {/* 6. Image Gallery Showcase */}
        <CaseStudyGallery gallery={project.gallery} projectTitle={project.title} />

        {/* 7. Optional Video Support */}
        <CaseStudyVideo videoUrl={project.video} posterUrl={project.videoPoster} title={project.title} />

        {/* 8. The Result Section */}
        <CaseStudySection
          indexLabel="04 — THE RESULT"
          title="DELIVERED OUTCOME"
          content={project.result}
          subtitle="VERIFIED IMPACT"
        />

        {/* 9. Final Visual Moment */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid var(--color-border-subtle)',
          }}
        >
          <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
            FINAL VISUAL PERSPECTIVE
          </span>
          <CaseStudyHero project={project} />
        </div>

        {/* 10. Next / Previous Project Exhibition Navigation */}
        <CaseStudyNavigation previousProject={previousProject} nextProject={nextProject} />
      </article>
    </PageContainer>
  );
}
