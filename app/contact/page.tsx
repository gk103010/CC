import React from 'react';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | CHOSEN CREATORS',
  description: 'Start a project or submit a new business inquiry to Chosen Creators studio.',
};

export default function ContactPage() {
  return <ContactSection />;
}

