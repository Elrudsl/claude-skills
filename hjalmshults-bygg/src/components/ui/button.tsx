import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "text-sm font-medium tracking-wide",
    "transition-[transform,background-color,color,border-color] duration-150 ease-out",
    "active:scale-[0.97]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sand",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-graphite text-offwhite hover:bg-graphite-800 border border-graphite",
        accent:
          "bg-sand text-graphite-950 hover:bg-sand-light border border-sand",
        outline:
          "border border-offwhite/40 text-offwhite bg-transparent hover:bg-offwhite/10",
        "outline-dark":
          "border border-graphite/25 text-graphite bg-transparent hover:bg-graphite/5",
        ghost: "text-graphite hover:bg-graphite/5",
        link: "text-graphite underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[13px]",
        lg: "h-14 px-9 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
