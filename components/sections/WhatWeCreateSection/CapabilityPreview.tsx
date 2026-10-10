'use client';

import React from 'react';
import { CapabilityData } from './capabilitiesData';

interface CapabilityPreviewProps {
  capability: CapabilityData;
}

export const CapabilityPreview: React.FC<CapabilityPreviewProps> = ({ capability }) => {
  return (
    <div
      id={`capability-panel-${capability.id}`}
      role="tabpanel"
      aria-labelledby={`capability-tab-${capability.id}`}
      className="surface-dark border-default"
      style={{
        padding: 'var(--space-8)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
        transition: 'opacity var(--transition-standard), transform var(--transition-standard)',
      }}
    >
      {/* 1. Capability Art-Directed Visual Preview */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          backgroundColor: 'var(--color-canvas)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {capability.previewType === 'brands' && (
          <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Identity Grid System */}
            <path d="M 0 112.5 L 400 112.5 M 200 0 L 200 225 M 100 0 L 100 225 M 300 0 L 300 225" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="112.5" r="60" stroke="var(--color-border-strong)" strokeWidth="1.5" />
            <circle cx="200" cy="112.5" r="45" stroke="var(--color-accent-muted)" strokeWidth="1" />
            {/* Monogram Brand Motif */}
            <text x="200" y="122" textAnchor="middle" fill="var(--color-text-primary)" fontFamily="var(--font-family-mono)" fontSize="32" fontWeight="700" letterSpacing="0.1em">CC</text>
            <circle cx="200" cy="142" r="3" fill="var(--color-accent)" />
          </svg>
        )}

        {capability.previewType === 'digital-experiences' && (
          <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Browser Frame & Interface Layers */}
            <rect x="30" y="25" width="340" height="175" rx="4" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1" />
            <circle cx="48" cy="40" r="4" fill="#333333" />
            <circle cx="62" cy="40" r="4" fill="#333333" />
            <circle cx="76" cy="40" r="4" fill="#333333" />
            <line x1="30" y1="55" x2="370" y2="55" stroke="var(--color-border-subtle)" strokeWidth="1" />
            {/* Layout Wireframe */}
            <rect x="50" y="75" width="140" height="16" rx="2" fill="var(--color-white-primary)" opacity="0.9" />
            <rect x="50" y="100" width="220" height="8" rx="2" fill="var(--color-text-muted)" opacity="0.6" />
            <rect x="50" y="115" width="180" height="8" rx="2" fill="var(--color-text-muted)" opacity="0.4" />
            <rect x="50" y="140" width="80" height="24" rx="2" fill="var(--color-accent)" opacity="0.85" />
          </svg>
        )}

        {capability.previewType === 'visual-worlds' && (
          <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Atmospheric Depth & Spatial Camera Frame */}
            <rect x="40" y="30" width="320" height="165" stroke="var(--color-border-strong)" strokeWidth="1" />
            <path d="M 40 30 L 120 75 M 360 30 L 280 75 M 40 195 L 120 150 M 360 195 L 280 150" stroke="var(--color-border-subtle)" strokeWidth="1" />
            <rect x="120" y="75" width="160" height="75" stroke="var(--color-accent)" strokeWidth="1" opacity="0.7" />
            <circle cx="200" cy="112.5" r="25" fill="var(--color-accent-muted)" />
          </svg>
        )}

        {capability.previewType === 'experimental' && (
          <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Exploratory Code Matrix & Node Network */}
            <path d="M 50 50 L 150 150 M 150 50 L 50 150 M 250 50 L 350 150" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="5" fill="var(--color-accent)" />
            <circle cx="150" cy="150" r="5" fill="var(--color-text-primary)" />
            <circle cx="250" cy="50" r="5" fill="var(--color-accent)" />
            <circle cx="350" cy="150" r="5" fill="var(--color-text-secondary)" />
            <text x="200" y="180" textAnchor="middle" fill="var(--color-text-muted)" fontFamily="var(--font-family-mono)" fontSize="11" letterSpacing="0.1em">&lt;EXPERIMENTAL_PROTOTYPE_LAB /&gt;</text>
          </svg>
        )}

        {capability.previewType === 'future' && (
          <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Futuristic Horizon & Speculative Coordinate Matrix */}
            <line x1="40" y1="135" x2="360" y2="135" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.8" />
            <line x1="200" y1="35" x2="200" y2="195" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="95" r="45" stroke="var(--color-border-strong)" strokeWidth="1" />
            <circle cx="200" cy="95" r="30" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="200" cy="95" r="4" fill="var(--color-accent)" />
            <path d="M 120 165 L 200 95 L 280 165" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="200" y="185" textAnchor="middle" fill="var(--color-text-muted)" fontFamily="var(--font-family-mono)" fontSize="11" letterSpacing="0.12em">&lt;SPECULATIVE_FUTURE_HORIZON /&gt;</text>
          </svg>
        )}

        {/* Subtle Overlay Label */}
        <span
          className="font-meta"
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            fontSize: '0.6875rem',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {capability.title} — CAPABILITY PREVIEW
        </span>
      </div>

      {/* 2. Selected Title & Short Description */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <h3 className="font-h3 text-primary">{capability.title}</h3>
        <p className="font-body-lg text-secondary">{capability.shortDescription}</p>
      </div>

      {/* 3. Related Work Neutral Placeholder Area */}
      <div
        style={{
          borderTop: '1px solid var(--color-border-subtle)',
          paddingTop: 'var(--space-4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="font-caption text-muted">{capability.relatedWorkNotice}</span>
        <span className="font-meta" style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>
          PORTFOLIO ARCHITECTURE READY
        </span>
      </div>
    </div>
  );
};

export default CapabilityPreview;
