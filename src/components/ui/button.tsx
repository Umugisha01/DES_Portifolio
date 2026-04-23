import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wider uppercase ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gold text-ink hover:bg-gold-bright hover:shadow-gold",
        gold: "bg-gold text-ink hover:bg-gold-bright hover:shadow-gold hover:-translate-y-0.5",
        outline: "border border-gold text-gold bg-transparent hover:bg-gold hover:text-ink",
        ghost: "text-foreground hover:text-gold hover:bg-transparent",
        link: "text-gold underline-offset-4 hover:underline normal-case tracking-normal",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "bg-ink-elevated text-foreground border border-border hover:border-gold hover:text-gold",
      },
      size: {
        default: "h-12 px-7 py-3",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
