"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, House, Search, UserRound } from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { href: "/home", label: "Beranda", icon: House, matches: ["/home"] },
  { href: "/search", label: "Cari", icon: Search, matches: ["/search", "/properties"] },
  { href: "/bookings", label: "Pesanan", icon: CalendarDays, matches: ["/bookings", "/booking"] },
  { href: "/profile", label: "Profil", icon: UserRound, matches: ["/profile", "/notifications"] },
];

function isPathActive(pathname: string, matches: string[]) {
  return matches.some((match) => pathname === match || pathname.startsWith(`${match}/`));
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto w-full max-w-[400px]">
      <div className="rounded-[28px] border border-white/75 bg-white/92 p-1.5 shadow-[0_22px_44px_-24px_rgba(31,41,55,0.36)] backdrop-blur-xl">
        <div className="grid grid-cols-4 gap-1">
          {items.map((item) => {
            const isActive = isPathActive(pathname, item.matches);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-[18px] px-2 py-2 text-[11px] font-medium transition-all duration-200",
                  isActive
                    ? "bg-[linear-gradient(180deg,#EEF7FE_0%,#F9FCFF_100%)] text-[var(--color-primary-dark)] shadow-[inset_0_0_0_1px_rgba(74,171,240,0.14)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)]",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full transition-all",
                    isActive && "bg-white/95 shadow-[0_8px_18px_-12px_rgba(45,140,199,0.45)]",
                  )}
                >
                  <Icon size={18} className={cn(isActive && "scale-105")} />
                </span>
                <span className="leading-none">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}