import * as React from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger delay in ms — keep within 30–80ms increments between siblings. */
  delay?: number;
  as?: React.ElementType;
}

/**
 * Fade + subtle rise on scroll-into-view. Fires once (see useInView) —
 * marketing sections only, never on UI a user revisits constantly.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  style,
  ...props
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  // createElement (not JSX) sidesteps the ref-typing mismatch that comes
  // from `Tag` being a dynamic React.ElementType.
  return React.createElement(
    Tag,
    {
      ref,
      "data-visible": inView,
      className: cn("reveal", className),
      style: { ...style, ["--reveal-delay"]: `${delay}ms` },
      ...props,
    },
    children,
  );
}
