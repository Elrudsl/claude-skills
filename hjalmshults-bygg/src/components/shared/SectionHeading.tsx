import * as React from "react";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal
          as="p"
          className="mb-4 text-xs font-medium uppercase tracking-widest text-sand-dark"
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={60} as={as}>
        <span className="font-display text-3xl leading-[1.15] text-graphite sm:text-4xl md:text-[2.75rem]">
          {title}
        </span>
      </Reveal>
      {description && (
        <Reveal
          delay={120}
          as="p"
          className="mt-5 text-base leading-relaxed text-graphite-500 md:text-lg"
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
