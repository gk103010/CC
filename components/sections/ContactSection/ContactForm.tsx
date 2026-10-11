'use client';

import React, { useState, useEffect } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const PROJECT_TYPE_OPTIONS = [
  'Brand Strategy',
  'Visual Identity',
  'Web Design',
  'Web Development',
  'Creative Direction',
  'Motion',
  '3D & Spatial',
  'Film / Content',
  'AI Experiences',
  'Studio Sprint (2-4 Wks)',
  'Flagship Transformation (6-10 Wks)',
  'Embedded Partnership (Retainer)',
  'Other / Custom Inquiry',
];

const BUDGET_OPTIONS = [
  'Not sure yet',
  'Under ₹1,00,000',
  '₹1,00,000–₹3,00,000',
  '₹3,00,000–₹5,00,000',
  '₹5,00,000+',
  'Prefer not to say',
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand Strategy',
    budget: 'Not sure yet',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Auto-fill project type if arriving with query parameter from Services or Portfolio
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service') || params.get('interest') || params.get('sprint');

      if (serviceParam) {
        const normalized = serviceParam.toLowerCase().replace(/[-_]/g, ' ');
        const matched = PROJECT_TYPE_OPTIONS.find((opt) =>
          opt.toLowerCase().includes(normalized) || normalized.includes(opt.toLowerCase())
        );

        if (matched) {
          setFormData((prev) => ({ ...prev, projectType: matched }));
        } else if (serviceParam.includes('sprint') || serviceParam.includes('studio')) {
          setFormData((prev) => ({ ...prev, projectType: 'Studio Sprint (2-4 Wks)' }));
        } else if (serviceParam.includes('transformation') || serviceParam.includes('flagship')) {
          setFormData((prev) => ({ ...prev, projectType: 'Flagship Transformation (6-10 Wks)' }));
        } else if (serviceParam.includes('embedded') || serviceParam.includes('partnership')) {
          setFormData((prev) => ({ ...prev, projectType: 'Embedded Partnership (Retainer)' }));
        }
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Project Type validation
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project or inquiry.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Please enter a message with at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _honey: honeypot,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.error || 'Failed to dispatch inquiry. Please try again or email directly.'
        );
      }

      setStatus('success');
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'An unexpected connection error occurred. Please reach out to xyzagency.dev@gmail.com directly.'
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Brand Strategy',
      budget: 'Not sure yet',
      message: '',
    });
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-sm)',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        position: 'relative',
      }}
    >
      {/* SUCCESS STATE */}
      {status === 'success' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
            padding: 'var(--space-6)',
            border: '1px solid var(--color-gold)',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(197, 160, 89, 0.05)',
          }}
          role="alert"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-gold)',
              }}
            />
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '0.8125rem',
                color: 'var(--color-gold)',
                letterSpacing: '0.1em',
                fontWeight: 700,
              }}
            >
              ENQUIRY TRANSMITTED // SENT
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h3
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                margin: 0,
              }}
            >
              Thank you, {formData.name.trim()}!
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '48rem',
              }}
            >
              Your project inquiry has been delivered directly to{' '}
              <strong style={{ color: 'var(--color-gold)' }}>xyzagency.dev@gmail.com</strong>.
              Our senior studio directors will review your brief and follow up with a tailored discovery response within 24 hours.
            </p>
          </div>

          {/* Submission Summary Table */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-4)',
              padding: 'var(--space-4)',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '2px',
              fontSize: '0.8125rem',
            }}
          >
            <div>
              <span style={{ color: 'var(--color-text-muted)', display: 'block' }}>CONTACT</span>
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
                {formData.email}
              </span>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', display: 'block' }}>PROJECT FOCUS</span>
              <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>
                {formData.projectType}
              </span>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', display: 'block' }}>BUDGET TIER</span>
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
                {formData.budget}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            style={{
              alignSelf: 'flex-start',
              background: 'transparent',
              border: '1px solid var(--color-border-strong)',
              color: 'var(--color-text-primary)',
              padding: '0.625rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              fontSize: '0.8125rem',
              fontFamily: 'monospace',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
          >
            ← Submit Another Inquiry
          </button>
        </div>
      )}

      {/* ERROR STATE */}
      {status === 'error' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            padding: 'var(--space-5)',
            border: '1px solid #e53e3e',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(229, 62, 62, 0.08)',
            marginBottom: 'var(--space-6)',
          }}
          role="alert"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fc8181' }}>
            <span style={{ fontWeight: 700 }}>⚠ Submission Notice:</span>
            <span>{errorMessage}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <a
              href={`mailto:xyzagency.dev@gmail.com?subject=${encodeURIComponent(
                `Project Inquiry: ${formData.projectType} - ${formData.name}`
              )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
              )}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--color-gold)',
                color: '#090909',
                borderRadius: '2px',
                textDecoration: 'none',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              Send via Email App to xyzagency.dev@gmail.com →
            </a>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                padding: '0.5rem 1rem',
                borderRadius: '2px',
                cursor: 'pointer',
                fontSize: '0.8125rem',
              }}
            >
              Try Again in Form
            </button>
          </div>
        </div>
      )}

      {/* FORM INPUTS */}
      {status !== 'success' && (
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}
        >
          {/* Honeypot field for bot spam deterrence */}
          <input
            type="text"
            name="_honey"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none', position: 'absolute', opacity: 0, pointerEvents: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Row 1: Name & Email */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {/* Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="name" className="font-label text-primary" style={{ fontSize: '0.85rem' }}>
                YOUR NAME <span style={{ color: 'var(--color-accent)' }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  padding: 'var(--space-3) var(--space-4)',
                  backgroundColor: 'var(--color-bg)',
                  border: errors.name ? '1px solid #e53e3e' : '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-family-base)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              {errors.name && (
                <span className="font-caption" style={{ color: '#fc8181' }} role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="email" className="font-label text-primary" style={{ fontSize: '0.85rem' }}>
                EMAIL ADDRESS <span style={{ color: 'var(--color-accent)' }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  padding: 'var(--space-3) var(--space-4)',
                  backgroundColor: 'var(--color-bg)',
                  border: errors.email ? '1px solid #e53e3e' : '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-family-base)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              {errors.email && (
                <span className="font-caption" style={{ color: '#fc8181' }} role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Row 2: Company & Project Type */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {/* Company */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="company" className="font-label text-primary" style={{ fontSize: '0.85rem' }}>
                COMPANY / ORGANISATION <span className="font-meta text-muted">(OPTIONAL)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Studio / Brand Name"
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  padding: 'var(--space-3) var(--space-4)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-family-base)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Project Type */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="projectType" className="font-label text-primary" style={{ fontSize: '0.85rem' }}>
                PROJECT TYPE / DISCIPLINE <span style={{ color: 'var(--color-accent)' }}>*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  padding: 'var(--space-3) var(--space-4)',
                  backgroundColor: 'var(--color-bg)',
                  border: errors.projectType ? '1px solid #e53e3e' : '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-family-base)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                {PROJECT_TYPE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} style={{ backgroundColor: '#111', color: '#fff' }}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <span className="font-caption" style={{ color: '#fc8181' }} role="alert">
                  {errors.projectType}
                </span>
              )}
            </div>
          </div>

          {/* Row 3: Budget Range */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label htmlFor="budget" className="font-label text-primary" style={{ fontSize: '0.85rem' }}>
              BUDGET RANGE <span className="font-meta text-muted">(OPTIONAL)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              disabled={status === 'submitting'}
              style={{
                width: '100%',
                padding: 'var(--space-3) var(--space-4)',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-family-base)',
                fontSize: '0.95rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} style={{ backgroundColor: '#111', color: '#fff' }}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Row 4: Message */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label htmlFor="message" className="font-label text-primary" style={{ fontSize: '0.85rem' }}>
              PROJECT DETAILS & OBJECTIVES <span style={{ color: 'var(--color-accent)' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your vision, timeline, key goals, or project scope..."
              disabled={status === 'submitting'}
              style={{
                width: '100%',
                padding: 'var(--space-3) var(--space-4)',
                backgroundColor: 'var(--color-bg)',
                border: errors.message ? '1px solid #e53e3e' : '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-family-base)',
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'vertical',
              }}
            />
            {errors.message && (
              <span className="font-caption" style={{ color: '#fc8181' }} role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {/* Direct Notice & Submit Action Button */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-4)',
              paddingTop: 'var(--space-2)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)',
              }}
            >
              <span style={{ color: 'var(--color-gold)' }}>✉</span>
              <span>Dispatches directly to xyzagency.dev@gmail.com</span>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                background:
                  status === 'submitting' ? 'var(--color-surface)' : 'var(--color-accent)',
                color: status === 'submitting' ? 'var(--color-text-muted)' : 'var(--color-canvas)',
                border: 'none',
                padding: 'var(--space-4) var(--space-8)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-family-mono)',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {status === 'submitting' ? 'DISPATCHING BRIEF...' : 'SUBMIT ENQUIRY →'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
