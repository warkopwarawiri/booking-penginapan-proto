import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  backHref?: string;
  action?: ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  backHref,
  action,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "rounded-[24px] border border-[rgba(74,171,240,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,251,0.96)_100%)] p-3 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.2)]",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {backHref ? (
          <Link
            href={backHref}
            aria-label="Kembali"
            className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] shadow-[0_10px_24px_-18px_rgba(31,41,55,0.32)] transition-all duration-150 hover:bg-[var(--color-surface-muted)] active:scale-[0.97]"
          >
            <ChevronLeft size={18} />
          </Link>
        ) : null}

        <div className="min-w-0 flex-1 space-y-1.5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-[var(--color-primary-dark)]">{eyebrow}</p>
              <h1 className="text-2xl font-bold leading-8 text-[var(--color-text)]">{title}</h1>
            </div>
            {action ? <div className="shrink-0 pt-0.5">{action}</div> : null}
          </div>

          {description ? (
            <p className="max-w-[32rem] text-sm leading-6 text-[var(--color-text-muted)]">{description}</p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
