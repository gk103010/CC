import React from 'react';

interface FallbackVisualProps {
  className?: string;
}

/**
 * Authoritative CC Emblem SVG Static Fallback.
 * Reproduces the exact interlocking double-C vector geometry and brushed gold aesthetic.
 */
export const FallbackVisual: React.FC<FallbackVisualProps> = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'clamp(180px, 24vw, 320px)',
        height: 'clamp(180px, 24vw, 320px)',
        userSelect: 'none',
      }}
      aria-label="Chosen Creators Authoritative Brand Identity Emblem"
      role="img"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.6))' }}
      >
        <defs>
          <linearGradient id="ccGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e0aa" />
            <stop offset="35%" stopColor="#d5b060" />
            <stop offset="70%" stopColor="#aa8237" />
            <stop offset="100%" stopColor="#e2c57c" />
          </linearGradient>
          <linearGradient id="ccGoldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#d5b060" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Left C Ring */}
        <path
          d="M 108 32 C 60 32 24 68 24 116 C 24 164 60 200 108 200 C 122 200 134 196 146 190 L 132 166 C 125 170 117 173 108 173 C 77 173 52 147 52 116 C 52 85 77 59 108 59 C 117 59 125 62 132 66 L 146 42 C 134 36 122 32 108 32 Z"
          fill="url(#ccGoldGradient)"
        />

        {/* Interlocking Right C Ring */}
        <path
          d="M 92 16 C 106 16 118 20 130 26 L 116 50 C 109 46 101 43 92 43 C 61 43 36 69 36 100 C 36 111 39 121 45 130 L 21 144 C 11 131 6 116 6 100 C 6 52 42 16 90 16 Z"
          transform="translate(68, 0)"
          fill="url(#ccGoldGradient)"
        />

        {/* Inner Top Detached C Element */}
        <path
          d="M 125 78 C 118 70 108 65 96 65 C 88 65 80 68 74 73 L 60 51 C 70 43 83 38 96 38 C 114 38 130 46 141 59 Z"
          transform="translate(42, 22)"
          fill="url(#ccGoldGradient)"
        />

        {/* Inner Bottom Detached C Element */}
        <path
          d="M 96 127 C 108 127 118 122 125 114 L 141 133 C 130 146 114 154 96 154 C 83 154 70 149 60 141 L 74 119 C 80 124 88 127 96 127 Z"
          transform="translate(42, 22)"
          fill="url(#ccGoldGradient)"
        />
      </svg>
    </div>
  );
};

export default FallbackVisual;
