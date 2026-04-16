import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonVariants(variant: ButtonVariant = "primary", fullWidth = false) {
  return cn(
    "inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition-all duration-200 ease-out will-change-transform",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    fullWidth && "w-full",
    variant === "primary" &&
      "bg-[var(--color-primary)] text-white shadow-[0_18px_40px_-20px_rgba(74,171,240,0.8)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-[0_24px_50px_-24px_rgba(74,171,240,0.95)]",
    variant === "secondary" &&
      "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[rgba(74,171,240,0.24)] hover:bg-[var(--color-surface-muted)] hover:shadow-[0_18px_36px_-28px_rgba(31,41,55,0.42)]",
    variant === "ghost" && "bg-transparent text-[var(--color-primary)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-soft)]",
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export function Button({
  className,
  variant = "primary",
  fullWidth,
  ...props
}: ButtonProps) {
  return <button className={cn(buttonVariants(variant, fullWidth), className)} {...props} />;
}
