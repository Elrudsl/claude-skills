import { useEffect, useState } from "react";

/**
 * Boolean flag for "has the user scrolled past `threshold`". Only updates
 * state on the boundary crossing, not on every scroll event, so it never
 * drives a per-frame style — just the header's transparent→solid class swap.
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const next = window.scrollY > threshold;
        return prev === next ? prev : next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
