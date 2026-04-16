import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonVariants(variant: ButtonVariant = "primary", fullWidth = false) {
  return cn(
    "inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition-transform duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    fullWidth && "w-full",
    variant === "primary" &&
      "bg-[var(--color-primary)] text-white shadow-[0_18px_40px_-20px_rgba(74,171,240,0.8)] hover:bg-[var(--color-primary-dark)]",
    variant === "secondary" &&
      "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
    variant === "ghost" && "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]",
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
