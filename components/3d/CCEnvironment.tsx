import React from 'react';

/**
 * Controlled 3D Lighting Environment for Authoritative CC Brushed Gold Sculpture.
 * Positioned to produce the crisp top edge specular glint shown in the reference logo image.
 */
export const CCEnvironment: React.FC = () => {
  return (
    <>
      {/* Crisp Neutral Ambient Illumination */}
      <ambientLight intensity={1.2} color="#ffffff" />

      {/* Primary Key Specular Light (Front-Top-Right) */}
      <directionalLight
        position={[4, 5, 6]}
        intensity={3.5}
        color="#ffffff"
      />

      {/* Front Fill Light */}
      <directionalLight
        position={[0, 1, 5]}
        intensity={2.2}
        color="#ffffff"
      />

      {/* Left Rim Fill Light */}
      <directionalLight
        position={[-4, 2, 4]}
        intensity={1.5}
        color="#d5b060"
      />

      {/* Bottom Under-Glow Light */}
      <directionalLight
        position={[0, -4, 2]}
        intensity={1.0}
        color="#aa8237"
      />

      {/* Point light in center for inner bevel highlights */}
      <pointLight
        position={[0, 0, 3]}
        intensity={1.5}
        color="#ffffff"
      />
    </>
  );
};

export default CCEnvironment;
