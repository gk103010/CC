import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'standard' | 'nav' | 'arrow' | 'subtle';
  external?: boolean;
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  variant = 'standard',
  external,
  active,
  className,
  style,
}) => {
  const variantClasses = {
    standard: 'link-standard',
    nav: cn('link-nav', active && 'active'),
    arrow: 'link-arrow',
    subtle: 'text-muted hover:text-primary transition-colors',
  }[variant];

  const combinedClasses = cn(variantClasses, className);

  const content = (
    <>
      <span>{children}</span>
      {variant === 'arrow' && (
        <span className="arrow-icon" aria-hidden="true" style={{ display: 'inline-block' }}>
          →
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses} style={style}>
      {content}
    </Link>
  );
};

export default CustomLink;
