'use client';

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { servicesData, EngagementSprint } from '@/data/servicesData';
import Button from '@/components/ui/Button';

export const ServicesSprints: React.FC = () => {
  const { sprints } = servicesData;

  return (
    <section
      id="sprints"
      aria-label="Engagement Sprints"
      style={{
        position: 'relative',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <PageContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-12)',
            width: '100%',
          }}
        >
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              maxWidth: '52rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="font-label text-gold">02</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">ENGAGEMENT MODELS</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              PROJECT SPRINTS & COLLABORATION
            </h2>

            <p className="font-body-lg text-secondary" style={{ margin: 0 }}>
              Fixed sprint scopes, predictable timelines, and transparent milestones. We do not
              inflate budgets or hide behind endless billable hours. Choose the engagement model
              calibrated to your ambition.
            </p>
          </div>

          {/* Sprints 3-Column Comparison Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
              alignItems: 'stretch',
            }}
          >
            {sprints.map((sprint: EngagementSprint) => {
              const isPopular = sprint.isPopular;

              return (
                <div
                  key={sprint.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                    backgroundColor: isPopular
                      ? 'rgba(24, 24, 24, 0.7)'
                      : 'rgba(18, 18, 18, 0.45)',
                    border: isPopular
                      ? '1px solid var(--color-gold)'
                      : '1px solid var(--color-border)',
                    borderRadius: '2px',
                    position: 'relative',
                    backdropFilter: 'blur(16px)',
                    boxShadow: isPopular
                      ? '0 12px 40px -10px rgba(197, 160, 89, 0.15)'
                      : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="sprint-card"
                >
                  {/* Top Badges & Meta */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-6)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontFamily: 'monospace',
                          letterSpacing: '0.1em',
                          color: isPopular ? 'var(--color-gold)' : 'var(--color-text-muted)',
                          fontWeight: 700,
                        }}
                      >
                        MODEL {sprint.number}
                      </span>

                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '999px',
                          backgroundColor: isPopular
                            ? 'var(--color-gold)'
                            : 'rgba(255, 255, 255, 0.06)',
                          color: isPopular ? '#090909' : 'var(--color-text-muted)',
                        }}
                      >
                        {sprint.badge}
                      </span>
                    </div>

                    {/* Title & Duration */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-family-base)',
                          fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          color: 'var(--color-text-primary)',
                          margin: 0,
                          textTransform: 'uppercase',
                        }}
                      >
                        {sprint.title}
                      </h3>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'monospace',
                          fontSize: '0.875rem',
                          color: 'var(--color-gold)',
                          fontWeight: 600,
                        }}
                      >
                        <span>⏱ {sprint.duration}</span>
                      </div>
                    </div>

                    {/* Tagline & Narrative */}
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        color: 'var(--color-grey-white)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {sprint.tagline}
                    </p>

                    {/* Ideal For & Squad Details */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)',
                        padding: 'var(--space-4)',
                        backgroundColor: 'rgba(0, 0, 0, 0.35)',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: '2px',
                        fontSize: '0.8125rem',
                      }}
                    >
                      <div>
                        <span
                          style={{
                            color: 'var(--color-gold)',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            fontSize: '0.6875rem',
                            display: 'block',
                            marginBottom: '0.2rem',
                          }}
                        >
                          IDEAL FOR:
                        </span>
                        <span style={{ color: 'var(--color-grey-secondary)' }}>
                          {sprint.idealFor}
                        </span>
                      </div>

                      <div>
                        <span
                          style={{
                            color: 'var(--color-gold)',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            fontSize: '0.6875rem',
                            display: 'block',
                            marginBottom: '0.2rem',
                          }}
                        >
                          SQUAD COMPOSITION:
                        </span>
                        <span style={{ color: 'var(--color-text-primary)' }}>
                          {sprint.squad}
                        </span>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)',
                        paddingTop: 'var(--space-2)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        KEY DELIVERABLES
                      </span>

                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'var(--space-2)',
                        }}
                      >
                        {sprint.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.625rem',
                              fontSize: '0.875rem',
                              color: 'var(--color-grey-white)',
                              lineHeight: 1.45,
                            }}
                          >
                            <span
                              style={{
                                color: 'var(--color-gold)',
                                fontSize: '0.75rem',
                                marginTop: '0.15rem',
                              }}
                            >
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA Button */}
                  <div style={{ paddingTop: 'var(--space-8)' }}>
                    <Button
                      href={`/contact?interest=${sprint.id}`}
                      variant={isPopular ? 'gold' : 'secondary'}
                      size="md"
                      className="w-full"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {isPopular ? 'Reserve Transformation Sprint' : 'Inquire for This Model'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>

      <style jsx>{`
        :global(.sprint-card:hover) {
          border-color: rgba(197, 160, 89, 0.6) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default ServicesSprints;
