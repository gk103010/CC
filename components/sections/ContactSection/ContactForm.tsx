'use client';

import React, { useState } from 'react';

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
  '3D',
  'Film / Content',
  'AI Experiences',
  'Other',
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

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'dev_notice'>('idle');

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
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message with at least 10 characters.';
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

    // Simulate clean form submission handling
    setTimeout(() => {
      setStatus('dev_notice');
    }, 800);
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-sm)',
        padding: 'var(--space-8)',
      }}
    >
      {status === 'dev_notice' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            padding: 'var(--space-6)',
            border: '1px solid var(--color-accent)',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--color-bg)',
          }}
          role="alert"
        >
          <span className="font-meta text-gold" style={{ fontSize: '0.8rem' }}>
            ENQUIRY FORM VALIDATED
          </span>
          <h3 className="font-h3 text-primary" style={{ margin: 0 }}>
            Thank you, {formData.name.trim()}!
          </h3>
          <p className="font-body-md text-secondary" style={{ margin: 0 }}>
            Your enquiry details for <strong>{formData.projectType}</strong> have been validated cleanly.
          </p>
          <div
            style={{
              padding: 'var(--space-3) var(--space-4)',
              backgroundColor: 'var(--color-surface)',
              borderLeft: '2px solid var(--color-accent)',
              fontSize: '0.85rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-family-mono)',
            }}
          >
            The form is ready to connect to the project enquiry service.
          </div>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                email: '',
                company: '',
                projectType: 'Brand Strategy',
                budget: 'Not sure yet',
                message: '',
              });
            }}
            style={{
              alignSelf: 'flex-start',
              background: 'transparent',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              padding: 'var(--space-2) var(--space-4)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-family-mono)',
              marginTop: 'var(--space-2)',
            }}
          >
            ← SUBMIT ANOTHER ENQUIRY
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
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
                PROJECT TYPE <span style={{ color: 'var(--color-accent)' }}>*</span>
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
              PROJECT DETAILS & GOALS <span style={{ color: 'var(--color-accent)' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your vision, timeline, key challenges, or project objectives..."
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

          {/* Submit Action Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: 'var(--space-2)' }}>
            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                background: status === 'submitting' ? 'var(--color-surface)' : 'var(--color-accent)',
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
              {status === 'submitting' ? 'PROCESSING ENQUIRY...' : 'SUBMIT ENQUIRY →'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
