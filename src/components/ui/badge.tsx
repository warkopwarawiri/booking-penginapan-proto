import { cn } from "@/lib/utils";

type BadgeTone = "info" | "gold" | "soft" | "success" | "warning" | "danger";

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export function Badge({ children, tone = "soft", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold",
        tone === "info" && "bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]",
        tone === "gold" && "bg-[var(--color-gold-soft)] text-[#8A5A04]",
        tone === "soft" && "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]",
        tone === "success" && "bg-[#EAF8F0] text-[var(--color-success)]",
        tone === "warning" && "bg-[#FFF6E7] text-[var(--color-warning)]",
        tone === "danger" && "bg-[#FDECEC] text-[var(--color-danger)]",
        className,
      )}
    >
      {children}
    </span>
  );
}