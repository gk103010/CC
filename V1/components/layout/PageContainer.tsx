import React from 'react';
import { cn } from '@/lib/utils';

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'max' | 'wide' | 'full';
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'article';
  style?: React.CSSProperties;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
  size = 'max',
  as: Component = 'div',
  style,
}) => {
  const sizeStyles: Record<NonNullable<PageContainerProps['size']>, string> = {
    sm: 'max-w-[var(--container-sm)]',
    md: 'max-w-[var(--container-md)]',
    lg: 'max-w-[var(--container-lg)]',
    xl: 'max-w-[var(--container-xl)]',
    '2xl': 'max-w-[var(--container-2xl)]',
    max: 'max-w-[var(--container-max)]',
    wide: 'max-w-[var(--container-wide)]',
    full: 'max-w-full',
  };

  const isFullWidth = size === 'full';

  return (
    <Component
      className={cn(
        'w-full mx-auto',
        !isFullWidth && 'px-[var(--gutter-padding)]',
        sizeStyles[size],
        className
      )}
      style={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: isFullWidth ? '0' : 'var(--gutter-padding)',
        paddingRight: isFullWidth ? '0' : 'var(--gutter-padding)',
        maxWidth: isFullWidth ? '100%' : `var(--container-${size})`,
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default PageContainer;
