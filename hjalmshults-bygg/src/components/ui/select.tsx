import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

/**
 * Styled native <select>. A full Radix Select is overkill here — this is a
 * plain form field, not a rich combobox, so the native element (with its
 * built-in keyboard/a11y/mobile behaviour) is the cheaper and more robust
 * choice.
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "flex h-12 w-full appearance-none border border-graphite/15 bg-white px-4 pr-10 text-[15px] text-graphite",
            "transition-colors duration-150 ease-out",
            "focus-visible:outline-none focus-visible:border-graphite focus-visible:ring-1 focus-visible:ring-graphite",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite-400"
        />
      </div>
    );
  },
);
Select.displayName = "Select";

export { Select };
