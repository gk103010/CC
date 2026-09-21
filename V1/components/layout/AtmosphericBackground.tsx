'use client';

import React from 'react';

/**
 * AtmosphericBackground Component (Phase 17)
 * Layered architectural dark environment replacing pure flat black.
 *
 * Layers:
 * 1. Base Canvas — Deep graphite (#090909 to #0c0c0c)
 * 2. Atmospheric Light — Massive, ultra-soft diffused graphite ambient zones
 * 3. Film Grain — Static fine monochrome film grain (approx 2.5% intensity)
 * 4. Vignette / Depth — Subtle radial edge shadow preventing flat borders
 * 5. Ultra-Slow Motion — 50-second continuous, barely perceptible atmospheric drift
 */
export const AtmosphericBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="atmospheric-root"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#090909',
      }}
    >
      {/* LAYER 1: Deep Graphite Base Field */}
      <div
        className="atmospheric-base-layer"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#090909',
        }}
      />

      {/* LAYER 2: CC Brand Image Background with Smooth Ambient Breathing */}
      <div
        className="atmospheric-image-field"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/images/cc-bg.png')`,
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Atmospheric Soft Light Overlay for Rich Contrast & Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8, 8, 8, 0.4) 0%, rgba(8, 8, 8, 0.2) 40%, rgba(8, 8, 8, 0.45) 100%)',
        }}
      />

      {/* LAYER 4: Vignette / Ambient Depth Contour */}
      <div
        className="atmospheric-vignette"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 85% at 50% 50%, transparent 58%, rgba(4, 4, 4, 0.55) 100%)',
        }}
      />

      {/* LAYER 3: Fine Monochrome Film Grain Texture (Static, ~2.5% intensity, GPU friendly) */}
      <div
        className="atmospheric-grain"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Styles for Tuned Ambient Drift & Responsive / Reduced Motion Guards */}
      <style jsx>{`
        .atmospheric-image-field {
          animation: bgAmbientBreathe 24s ease-in-out infinite alternate;
        }

        @keyframes bgAmbientBreathe {
          0% {
            opacity: 0.82;
          }
          50% {
            opacity: 0.98;
          }
          100% {
            opacity: 0.88;
          }
        }

        @media (max-width: 768px) {
          .atmospheric-image-field {
            animation: none !important;
            background-position: 70% center !important;
          }
          .atmospheric-grain {
            opacity: 0.02 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .atmospheric-image-field {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AtmosphericBackground;
