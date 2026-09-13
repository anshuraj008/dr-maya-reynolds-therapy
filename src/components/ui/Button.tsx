import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

    const variantStyles = {
      primary:
        "bg-primary text-surface hover:bg-primary-light shadow-sm hover:shadow-md",
      accent:
        "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
      outline:
        "border border-primary/30 text-primary bg-transparent hover:bg-secondary/40 hover:border-primary",
      ghost:
        "text-primary hover:bg-secondary/30 bg-transparent",
    };

    const sizeStyles = {
      sm: "min-h-[40px] px-4 py-1.5 text-sm gap-1.5",
      md: "min-h-[48px] px-6 py-2.5 text-base gap-2",
      lg: "min-h-[54px] px-8 py-3.5 text-lg gap-2.5",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
