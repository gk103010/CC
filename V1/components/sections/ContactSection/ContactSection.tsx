'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import PageContainer from '@/components/layout/PageContainer';
import ContactForm from './ContactForm';

export const ContactSection: React.FC = () => {
  const pathname = usePathname();
  const isStandaloneContact = pathname === '/contact';

  return (
    <section
      id="contact"
      aria-label="Contact Chosen Creators"
      style={{
        position: 'relative',
        backgroundColor: 'transparent',
        paddingTop: isStandaloneContact ? 'var(--space-12)' : 'var(--section-spacing-lg)',
        paddingBottom: 'var(--section-spacing-lg)',
        borderTop: isStandaloneContact ? 'none' : '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
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
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '44rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="font-label text-gold">08</span>
              <span className="font-label text-muted" aria-hidden="true">—</span>
              <span className="font-label text-muted">CONTACT</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              START A CONVERSATION
            </h2>

            <p className="font-body-lg text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>
              Tell us about your project, timeline, and vision. We will review your inquiry and schedule an initial discovery alignment.
            </p>
          </div>

          {/* Contact Enquiry Form Component */}
          <ContactForm />
        </div>
      </PageContainer>
    </section>
  );
};

export default ContactSection;
