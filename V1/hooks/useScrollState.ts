'use client';

import { useState, useEffect } from 'react';

/**
 * Lightweight, performant hook to detect scroll offset.
 * @param threshold Scroll threshold in pixels (default 20px)
 */
export function useScrollState(threshold = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}

export default useScrollState;
