import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full border border-graphite/15 bg-white px-4 text-[15px] text-graphite placeholder:text-graphite-400",
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
Input.displayName = "Input";

export { Input };
