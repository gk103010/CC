import React from 'react';
import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesSprints from '@/components/services/ServicesSprints';
import ServicesCatalogue from '@/components/services/ServicesCatalogue';
import ServicesPrinciples from '@/components/services/ServicesPrinciples';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'SERVICES & METHODOLOGY | CHOSEN CREATORS',
  description:
    'From raw intent to digital reality. Explore the Chosen Creators 4-stage transformation engine, fixed sprint models, and complete 9-discipline services catalogue.',
  openGraph: {
    title: 'SERVICES & METHODOLOGY | CHOSEN CREATORS',
    description:
      'From raw intent to digital reality. Explore our 4-stage transformation engine, fixed sprint models, and comprehensive 9-discipline service catalogue.',
    url: 'https://chosencreators.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* 01. Services Hero: Philosophy, Big Display Headline & Highlight Metrics */}
      <ServicesHero />

      {/* 02. The 4-Stage Studio Operating System: Understand -> Define -> Create -> Execute */}
      <ServicesProcess />

      {/* 03. Project Sprints & Engagement Models: Studio Sprint, Flagship Transformation, Embedded */}
      <ServicesSprints />

      {/* 04. Comprehensive Accordion Service Catalogue: 9 Capabilities with Deliverables & Tech Stack */}
      <ServicesCatalogue />

      {/* 05. Studio Operational Tenets: Zero Bloat, Fixed Timeframes, Designers Who Code, Full IP */}
      <ServicesPrinciples />

      {/* 06. Collaboration Inquiry CTA */}
      <ServicesCTA />
    </>
  );
}
