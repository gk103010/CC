'use client';

import React, { useState } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { servicesData, ProcessStage } from '@/data/servicesData';

export const ServicesProcess: React.FC = () => {
  const { stages } = servicesData;
  const [activeStageId, setActiveStageId] = useState<string>(stages[0].id);

  const activeStage: ProcessStage =
    stages.find((stage) => stage.id === activeStageId) || stages[0];

  const activeIndex = stages.findIndex((stage) => stage.id === activeStageId);

  return (
    <section
      id="operating-system"
      aria-label="Studio Operating System"
      style={{
        position: 'relative',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--color-border-subtle)',
        backgroundColor: 'rgba(9, 9, 9, 0.6)',
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
              <span className="font-label text-gold">01</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">TRANSFORMATION ENGINE</span>
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
              THE 4-STAGE STUDIO OPERATING SYSTEM
            </h2>

            <p className="font-body-lg text-secondary" style={{ margin: 0 }}>
              Chaos and subjectivity are the enemies of iconic work. We run every project
              through a rigorous, 4-stage pipeline that eliminates guesswork and delivers
              high-performance reality on fixed timelines.
            </p>
          </div>

          {/* Interactive Stage Stepper / Tab Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--space-3)',
              borderBottom: '1px solid var(--color-border-subtle)',
              paddingBottom: 'var(--space-6)',
            }}
            role="tablist"
            aria-label="Process stages"
          >
            {stages.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${stage.id}`}
                  id={`stage-tab-${stage.id}`}
                  onClick={() => setActiveStageId(stage.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-5)',
                    backgroundColor: isActive
                      ? 'rgba(197, 160, 89, 0.08)'
                      : 'rgba(18, 18, 18, 0.3)',
                    border: `1px solid ${
                      isActive ? 'var(--color-gold)' : 'var(--color-border-subtle)'
                    }`,
                    borderRadius: '2px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="stage-tab-btn"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--color-gold)' : 'var(--color-text-muted)',
                      }}
                    >
                      STAGE {stage.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        backgroundColor: isActive
                          ? 'rgba(197, 160, 89, 0.2)'
                          : 'rgba(255, 255, 255, 0.05)',
                        color: isActive ? 'var(--color-gold)' : 'var(--color-text-muted)',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {stage.duration}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-family-base)',
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: isActive
                        ? 'var(--color-text-primary)'
                        : 'var(--color-text-secondary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div
            id={`stage-panel-${activeStage.id}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${activeStage.id}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              backgroundColor: 'rgba(18, 18, 18, 0.5)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Top Stage Header Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 'var(--space-4)',
                borderBottom: '1px solid var(--color-border-subtle)',
                paddingBottom: 'var(--space-6)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontWeight: 600,
                  }}
                >
                  STAGE {activeStage.number} // {activeStage.duration}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-family-base)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  {activeStage.title}
                </h3>
                <span
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-grey-secondary)',
                  }}
                >
                  {activeStage.subtitle}
                </span>
              </div>

              {/* Step Counter Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                <span>PHASE {activeStage.number} OF 04</span>
              </div>
            </div>

            {/* Core Thesis Statement */}
            <div
              style={{
                paddingLeft: 'var(--space-6)',
                borderLeft: '2px solid var(--color-gold)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-family-base)',
                  fontSize: 'clamp(1.125rem, 1.8vw, 1.4rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                &ldquo;{activeStage.thesis}&rdquo;
              </p>
            </div>

            {/* Two Column Grid: Focus Areas vs Tangible Outputs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--space-8)',
                paddingTop: 'var(--space-4)',
              }}
            >
              {/* Column 1: Key Focus Areas */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-gold)',
                    }}
                  />
                  <h4
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    INVESTIGATION & EXECUTION FOCUS
                  </h4>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  {activeStage.focusAreas.map((area, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.9375rem',
                        color: 'var(--color-grey-white)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--color-gold)',
                          fontSize: '0.75rem',
                          marginTop: '0.2rem',
                        }}
                      >
                        ◆
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Tangible Artifact Outputs */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-text-muted)',
                    }}
                  />
                  <h4
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    STAGE DELIVERABLES & OUTPUTS
                  </h4>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)',
                  }}
                >
                  {activeStage.outputs.map((output, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: '2px',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <span>{output}</span>
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontFamily: 'monospace',
                          color: 'var(--color-gold)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        VERIFIED
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Stepper Footer Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--color-border-subtle)',
                paddingTop: 'var(--space-6)',
                marginTop: 'var(--space-4)',
              }}
            >
              <button
                disabled={activeIndex === 0}
                onClick={() => setActiveStageId(stages[activeIndex - 1].id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color:
                    activeIndex === 0
                      ? 'var(--color-border-strong)'
                      : 'var(--color-text-secondary)',
                  cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                ← PREVIOUS STAGE
              </button>

              <button
                disabled={activeIndex === stages.length - 1}
                onClick={() => setActiveStageId(stages[activeIndex + 1].id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color:
                    activeIndex === stages.length - 1
                      ? 'var(--color-border-strong)'
                      : 'var(--color-gold)',
                  cursor: activeIndex === stages.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                NEXT STAGE →
              </button>
            </div>
          </div>
        </div>
      </PageContainer>

      <style jsx>{`
        :global(.stage-tab-btn:hover) {
          border-color: rgba(197, 160, 89, 0.5) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesProcess;
