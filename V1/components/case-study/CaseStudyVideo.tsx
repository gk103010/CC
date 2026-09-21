'use client';

import React from 'react';

interface CaseStudyVideoProps {
  videoUrl?: string;
  posterUrl?: string;
  title: string;
}

export const CaseStudyVideo: React.FC<CaseStudyVideoProps> = ({
  videoUrl,
  posterUrl,
  title,
}) => {
  if (!videoUrl || videoUrl.trim().length === 0) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        width: '100%',
        paddingTop: 'var(--space-6)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
        MOTION & VIDEO DOCUMENTATION
      </span>

      <div
        className="surface-dark border-default"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          backgroundColor: 'var(--color-canvas)',
        }}
      >
        <video
          controls
          playsInline
          preload="metadata"
          poster={posterUrl}
          aria-label={`Video presentation for ${title}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CaseStudyVideo;
