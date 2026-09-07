import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-32 w-full resize-y border border-graphite/15 bg-white px-4 py-3 text-[15px] text-graphite placeholder:text-graphite-400",
          "transition-colors duration-150 ease-out",
          "focus-visible:outline-none focus-visible:border-graphite focus-visible:ring-1 focus-visible:ring-graphite",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
