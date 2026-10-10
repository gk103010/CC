import React from 'react';
import Hero from '@/components/sections/Hero/Hero';
import ProblemSection from '@/components/sections/ProblemSection/ProblemSection';
import ChosenDifferenceSection from '@/components/sections/ChosenDifferenceSection/ChosenDifferenceSection';
import WhatWeCreateSection from '@/components/sections/WhatWeCreateSection/WhatWeCreateSection';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection/CapabilitiesSection';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import FinalCTA from '@/components/sections/FinalCTA/FinalCTA';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CHOSEN CREATORS | Creative Agency',
  description: 'You know what needs to exist. We know how to make it real.',
};

export default function HomePage() {
  return (
    <>
      {/* Phase 3/4 Hero / Identity & 3D Layer */}
      <Hero />

      {/* Phase 5 The Problem Storytelling Section */}
      <ProblemSection />

      {/* Phase 6 The Chosen Difference Principles Section */}
      <ChosenDifferenceSection />

      {/* Phase 7 What We Create Capabilities Section */}
      <WhatWeCreateSection />

      {/* Phase 8 How We Make It Real Process Section */}
      <ProcessSection />

      {/* Phase 13 Capabilities Editorial Index Section */}
      <CapabilitiesSection />

      {/* Phase 13 About Studio Section */}
      <AboutSection />

      {/* Phase 14 Final Call To Action */}
      <FinalCTA />

      {/* Phase 14 Contact Inquiry Section */}
      <ContactSection />
    </>
  );
}




