import React from 'react';
import Link from 'next/link';
import PageContainer from './PageContainer';
import CustomLink from '@/components/ui/Link';
import { NavItem, SocialLink } from '@/types';

const FOOTER_NAV: NavItem[] = [
  { label: 'WORK', href: '/work' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

interface FooterSocialLink {
  name: string;
  href: string;
}

const SOCIAL_LINKS: FooterSocialLink[] = [
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Behance', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--color-border-subtle)',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: 'var(--color-text-secondary)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-12)',
        marginTop: 'auto',
      }}
    >
      <PageContainer>
        {/* Multi-column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-12)',
            marginBottom: 'var(--space-12)',
          }}
        >
          {/* Brand Lockup Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'var(--color-text-primary)',
                fontSize: '1.125rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.2rem 0.4rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-family-mono)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: 'var(--color-canvas)',
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                CC
              </span>
              <span>CHOSEN CREATORS</span>
            </Link>
            <p className="font-body-sm text-secondary" style={{ maxWidth: '280px', lineHeight: 1.6 }}>
              Creative agency shaping positioning, visual identity, digital products, and spatial experiences.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-label text-primary" style={{ marginBottom: 'var(--space-4)', fontSize: '0.85rem' }}>
              NAVIGATION
            </h3>
            <nav aria-label="Footer Navigation">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {FOOTER_NAV.map((item) => (
                  <li key={item.href}>
                    <CustomLink href={item.href} variant="subtle">
                      {item.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Inquiries Column */}
          <div>
            <h3 className="font-label text-primary" style={{ marginBottom: 'var(--space-4)', fontSize: '0.85rem' }}>
              DIRECT INQUIRIES
            </h3>
            <p className="font-body-sm text-secondary" style={{ marginBottom: 'var(--space-2)' }}>
              hello@chosencreators.com
            </p>
            <p className="font-caption text-muted">
              New Business & Strategic Partnerships
            </p>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="font-label text-primary" style={{ marginBottom: 'var(--space-4)', fontSize: '0.85rem' }}>
              SOCIALS
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <CustomLink href={link.href} external variant="subtle">
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Exact Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: 'var(--font-size-body-sm)',
            color: 'var(--color-text-muted)',
          }}
        >
          <p style={{ margin: 0, fontFamily: 'var(--font-family-mono)', fontSize: '0.85rem' }}>
            © 2026 CHOSEN CREATORS
          </p>
          <span className="font-meta text-gold" style={{ fontSize: '0.75rem' }}>
            CHOSEN CREATORS STUDIO
          </span>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
