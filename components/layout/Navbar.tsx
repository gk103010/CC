'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PageContainer from './PageContainer';
import Button from '@/components/ui/Button';
import { useScrollState } from '@/hooks/useScrollState';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'WORK', href: '/work' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isScrolled = useScrollState(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useLockBodyScroll(isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Keyboard navigation: Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="navbar-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 'var(--z-header)',
          width: '100%',
          backgroundColor: isScrolled ? 'rgba(8, 8, 8, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
          transition: 'background-color var(--transition-standard), border-color var(--transition-standard), backdrop-filter var(--transition-standard)',
        }}
      >
        <PageContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '80px',
            }}
          >
            {/* Brand Logo / Identifier: [ CC ] CHOSEN CREATORS */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              aria-label="Chosen Creators Home"
              style={{
                textDecoration: 'none',
                color: 'var(--color-text-primary)',
                fontSize: '1.0625rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.2rem 0.45rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-family-mono)',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-primary)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                CC
              </span>
              <span>CHOSEN CREATORS</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                }}
                aria-hidden="true"
              />
            </Link>

            {/* Desktop Navigation Links & CTA */}
            <div
              className="desktop-nav-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3rem',
              }}
            >
              <nav aria-label="Main Navigation">
                <ul
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem',
                    listStyle: 'none',
                  }}
                >
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`link-nav ${isActive ? 'active' : ''}`}
                          style={{
                            color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.375rem',
                            position: 'relative',
                            paddingBottom: '4px',
                          }}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {isActive && (
                            <span
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-accent)',
                                display: 'inline-block',
                              }}
                              aria-hidden="true"
                            />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Desktop CTA */}
              <Button href="/contact" variant="secondary" size="sm">
                START A PROJECT
              </Button>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-overlay"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-primary)',
                padding: '0.5rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-label)',
                letterSpacing: 'var(--letter-spacing-label)',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-family-base)',
                fontWeight: 600,
                display: 'none',
              }}
            >
              {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </PageContainer>
      </header>

      {/* Full Screen Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="mobile-nav-overlay"
          aria-label="Mobile Navigation Drawer"
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 'var(--z-overlay)',
            backgroundColor: 'var(--color-canvas)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'var(--gutter-padding)',
            paddingTop: '100px',
            paddingBottom: 'var(--space-12)',
            overflowY: 'auto',
          }}
        >
          <PageContainer style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Mobile Nav Links */}
            <nav aria-label="Mobile Main Navigation" style={{ width: '100%' }}>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  listStyle: 'none',
                }}
              >
                {NAV_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <li
                      key={item.href}
                      style={{
                        animation: `mobileNavFadeIn 250ms var(--ease-out-quad) forwards ${index * 60}ms`,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        style={{
                          textDecoration: 'none',
                          color: isActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                          fontSize: 'var(--font-size-h2)',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingBottom: 'var(--space-4)',
                          borderBottom: '1px solid var(--color-border-subtle)',
                        }}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{item.label}</span>
                        <span className="font-meta" style={{ fontSize: '0.875rem' }}>
                          0{index + 1}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile CTA & Footer details */}
            <div
              style={{
                marginTop: 'var(--space-12)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-6)',
              }}
            >
              <Button href="/contact" variant="primary" size="lg" onClick={closeMobileMenu}>
                START A PROJECT
              </Button>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: 'var(--font-size-small)' }}>
                <span>hello@chosencreators.com</span>
                <span>© {new Date().getFullYear()} CC</span>
              </div>
            </div>
          </PageContainer>
        </div>
      )}

      {/* Global CSS media queries for desktop vs mobile nav */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav-group {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
        @keyframes mobileNavFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
