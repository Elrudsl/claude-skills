import * as React from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface ImageRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

/**
 * Clip-path reveal + gentle scale-down for large photography. The direct
 * child (an <img>) is targeted by `.reveal-image > img` in index.css.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
  style,
  ...props
}: ImageRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-visible={inView}
      className={cn("reveal-image overflow-hidden", className)}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
