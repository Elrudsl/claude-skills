import { useEffect, useRef } from "react";

/**
 * Subtle scroll-linked parallax for a decorative hero image layer.
 * rAF-throttled, transform-only, and skipped entirely for
 * prefers-reduced-motion. `strength` is the max px of travel.
 */
export function useParallax<T extends HTMLElement>(strength = 60) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      // Progress from -1 (section above viewport) to 1 (below viewport).
      const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const clamped = Math.max(-1, Math.min(1, progress));
      const offset = clamped * strength;
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return ref;
}
