'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import { servicesData, ServiceDetail, ServiceDomainGroup } from '@/data/servicesData';
import Button from '@/components/ui/Button';

export const ServicesCatalogue: React.FC = () => {
  const { domainGroups } = servicesData;

  // Flatten all services for filter options
  const allServices: ServiceDetail[] = domainGroups.flatMap((group) => group.services);

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'brand' | 'digital' | 'spatial'>('all');
  
  // Track open accordion IDs. Default open first service in each group or 'brand-strategy'
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'brand-strategy': true,
    'web-design': false,
    'web-development': false,
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const newState: Record<string, boolean> = {};
    allServices.forEach((s) => {
      newState[s.id] = true;
    });
    setOpenIds(newState);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredGroups: ServiceDomainGroup[] =
    selectedFilter === 'all'
      ? domainGroups
      : domainGroups.filter((group) => group.id === selectedFilter);

  return (
    <section
      id="catalogue"
      aria-label="Comprehensive Services Catalogue"
      style={{
        position: 'relative',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--color-border-subtle)',
        backgroundColor: 'rgba(9, 9, 9, 0.75)',
      }}
    >
      <PageContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-10)',
            width: '100%',
          }}
        >
          {/* Header Row & Controls */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="font-label text-gold">03</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">DISCIPLINE DIRECTORY</span>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 'var(--space-6)',
              }}
            >
              <div style={{ maxWidth: '44rem' }}>
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
                  FULL SERVICE CATALOGUE
                </h2>
                <p
                  className="font-body-lg text-secondary"
                  style={{ margin: 0, marginTop: 'var(--space-3)' }}
                >
                  An exhaustive index of our 9 creative, digital, and spatial disciplines.
                  Expand any capability to inspect our methodology, tangible deliverables, and tech stack.
                </p>
              </div>

              {/* Expand / Collapse All Quick Controls */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                <button
                  onClick={expandAll}
                  style={{
                    background: 'none',
                    border: '1px solid var(--color-border)',
                    borderRadius: '2px',
                    padding: '0.4rem 0.85rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="ctrl-btn"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  style={{
                    background: 'none',
                    border: '1px solid var(--color-border)',
                    borderRadius: '2px',
                    padding: '0.4rem 0.85rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="ctrl-btn"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* Filter Domain Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-2)',
                borderBottom: '1px solid var(--color-border-subtle)',
                paddingBottom: 'var(--space-4)',
              }}
            >
              {[
                { id: 'all', label: 'All Disciplines (09)' },
                { id: 'brand', label: 'Brand Architecture (03)' },
                { id: 'digital', label: 'Digital Engineering (03)' },
                { id: 'spatial', label: 'Spatial & Motion (03)' },
              ].map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id as typeof selectedFilter)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '2px',
                      backgroundColor: isActive
                        ? 'var(--color-gold)'
                        : 'rgba(255, 255, 255, 0.03)',
                      color: isActive ? '#090909' : 'var(--color-text-secondary)',
                      border: `1px solid ${
                        isActive ? 'var(--color-gold)' : 'var(--color-border-subtle)'
                      }`,
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    className="domain-filter-btn"
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordion List Grouped by Domain */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-12)',
            }}
          >
            {filteredGroups.map((group: ServiceDomainGroup) => (
              <div
                key={group.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                {/* Domain Group Header */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: 'var(--space-2)',
                    borderBottom: '1px solid var(--color-border-strong)',
                    paddingBottom: 'var(--space-3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        color: 'var(--color-gold)',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                      }}
                    >
                      DOMAIN {group.index}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-family-base)',
                        fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        letterSpacing: '-0.01em',
                        margin: 0,
                      }}
                    >
                      {group.label}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {group.description}
                  </span>
                </div>

                {/* Domain Services Accordion Items */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  {group.services.map((service: ServiceDetail) => {
                    const isOpen = !!openIds[service.id];

                    return (
                      <div
                        key={service.id}
                        style={{
                          borderBottom: '1px solid var(--color-border-subtle)',
                          backgroundColor: isOpen
                            ? 'rgba(18, 18, 18, 0.7)'
                            : 'rgba(14, 14, 14, 0.4)',
                          transition: 'background-color 0.25s ease',
                        }}
                      >
                        {/* Accordion Trigger Header */}
                        <button
                          onClick={() => toggleAccordion(service.id)}
                          aria-expanded={isOpen}
                          aria-controls={`accordion-body-${service.id}`}
                          id={`accordion-btn-${service.id}`}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                            background: 'none',
                            border: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                            gap: 'var(--space-4)',
                          }}
                          className="accordion-trigger"
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'clamp(1rem, 2vw, 1.75rem)',
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'monospace',
                                fontSize: '0.9375rem',
                                color: isOpen
                                  ? 'var(--color-gold)'
                                  : 'var(--color-text-muted)',
                                fontWeight: 700,
                                minWidth: '1.75rem',
                              }}
                            >
                              {service.number}
                            </span>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.2rem',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'var(--font-family-base)',
                                  fontSize: 'clamp(1.125rem, 2.2vw, 1.45rem)',
                                  fontWeight: 700,
                                  color: 'var(--color-text-primary)',
                                  letterSpacing: '-0.015em',
                                }}
                              >
                                {service.title}
                              </span>
                              <span
                                style={{
                                  fontSize: '0.75rem',
                                  color: 'var(--color-text-muted)',
                                  letterSpacing: '0.06em',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {service.domainLabel}
                              </span>
                            </div>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                            }}
                          >
                            <span
                              style={{
                                width: '2rem',
                                height: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: isOpen
                                  ? 'var(--color-gold)'
                                  : 'rgba(255, 255, 255, 0.05)',
                                color: isOpen ? '#090909' : 'var(--color-text-secondary)',
                                fontSize: '1.125rem',
                                fontWeight: 700,
                                transition: 'all 0.25s ease',
                              }}
                            >
                              {isOpen ? '−' : '+'}
                            </span>
                          </div>
                        </button>

                        {/* Accordion Expandable Content */}
                        {isOpen && (
                          <div
                            id={`accordion-body-${service.id}`}
                            role="region"
                            aria-labelledby={`accordion-btn-${service.id}`}
                            style={{
                              padding: '0 clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.5rem, 3vw, 2.25rem)',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 'var(--space-6)',
                              borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                            }}
                          >
                            {/* Tagline & Deep Narrative */}
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-2)',
                                paddingTop: 'var(--space-4)',
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: 'var(--font-family-base)',
                                  fontSize: '1.0625rem',
                                  fontWeight: 600,
                                  color: 'var(--color-gold)',
                                  margin: 0,
                                }}
                              >
                                {service.tagline}
                              </p>
                              <p
                                style={{
                                  fontSize: '0.9375rem',
                                  color: 'var(--color-grey-secondary)',
                                  lineHeight: 1.6,
                                  maxWidth: '54rem',
                                  margin: 0,
                                }}
                              >
                                {service.description}
                              </p>
                            </div>

                            {/* 2-Column Grid: Deliverables vs Tech Stack */}
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: 'var(--space-6)',
                                paddingTop: 'var(--space-2)',
                              }}
                            >
                              {/* Deliverables */}
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'var(--space-3)',
                                  padding: 'var(--space-5)',
                                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                                  border: '1px solid var(--color-border-subtle)',
                                  borderRadius: '2px',
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '0.6875rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-text-primary)',
                                  }}
                                >
                                  TANGIBLE DELIVERABLES
                                </span>
                                <ul
                                  style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                  }}
                                >
                                  {service.deliverables.map((item, idx) => (
                                    <li
                                      key={idx}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.5rem',
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
                                        ◆
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Tech Stack & Inquiries */}
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'space-between',
                                  gap: 'var(--space-4)',
                                  padding: 'var(--space-5)',
                                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                                  border: '1px solid var(--color-border-subtle)',
                                  borderRadius: '2px',
                                }}
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-3)',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: '0.6875rem',
                                      fontWeight: 700,
                                      letterSpacing: '0.1em',
                                      textTransform: 'uppercase',
                                      color: 'var(--color-text-primary)',
                                    }}
                                  >
                                    TOOLS, FRAMEWORKS & ARTIFACTS
                                  </span>

                                  <div
                                    style={{
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      gap: '0.5rem',
                                    }}
                                  >
                                    {service.technologies.map((tech, idx) => (
                                      <span
                                        key={idx}
                                        style={{
                                          fontSize: '0.75rem',
                                          padding: '0.25rem 0.625rem',
                                          borderRadius: '2px',
                                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                          border: '1px solid var(--color-border)',
                                          color: 'var(--color-text-secondary)',
                                        }}
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    gap: 'var(--space-3)',
                                    paddingTop: 'var(--space-2)',
                                  }}
                                >
                                  <Button
                                    href={`/contact?service=${service.id}`}
                                    variant="gold"
                                    size="sm"
                                  >
                                    Inquire for {service.title}
                                  </Button>

                                  {service.relatedProjectSlug && (
                                    <Link
                                      href={`/work/${service.relatedProjectSlug}`}
                                      style={{
                                        fontSize: '0.8125rem',
                                        color: 'var(--color-text-muted)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                      }}
                                      className="related-link"
                                    >
                                      View Related Project →
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      <style jsx>{`
        :global(.ctrl-btn:hover) {
          border-color: var(--color-gold) !important;
          color: var(--color-gold) !important;
        }
        :global(.domain-filter-btn:hover) {
          border-color: rgba(197, 160, 89, 0.5) !important;
        }
        :global(.accordion-trigger:hover) {
          background-color: rgba(255, 255, 255, 0.02) !important;
        }
        :global(.related-link:hover) {
          color: var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesCatalogue;
