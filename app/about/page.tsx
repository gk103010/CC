import React from 'react';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | CHOSEN CREATORS',
  description: 'Learn about Chosen Creators studio philosophy, creative capabilities, and strategic approach.',
};

export default function AboutPage() {
  return <AboutSection />;
}

