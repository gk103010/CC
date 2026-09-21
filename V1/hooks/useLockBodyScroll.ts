'use client';

import { useEffect } from 'react';

/**
 * Custom React hook to prevent body scrolling when mobile drawer menu is open.
 */
export function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}

export default useLockBodyScroll;
