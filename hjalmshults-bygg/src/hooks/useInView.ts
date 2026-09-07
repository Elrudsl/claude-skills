import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element enters the viewport, then disconnects.
 * Used to gate `.reveal` / `.reveal-image` — re-triggering on every
 * scroll-by would fight the reader, so this never re-arms.
 */
export function useInView<T extends HTMLElement>(rootMargin = "-10% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion by revealing immediately — no scroll-gating.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
