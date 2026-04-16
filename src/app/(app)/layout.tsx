"use client";

import { usePathname } from "next/navigation";

import { BottomNav } from "@/components/navigation/bottom-nav";
import { MobileFrame } from "@/components/ui/mobile-frame";
import { cn } from "@/lib/utils";

const ROOT_NAV_ROUTES = new Set(["/home", "/search", "/bookings", "/profile"]);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showBottomNav = ROOT_NAV_ROUTES.has(pathname);

  return (
    <MobileFrame>
      <div className="relative flex h-dvh flex-col overflow-hidden bg-[linear-gradient(180deg,#F5FBFF_0%,#FFFFFF_18%)]">
      {/* <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[linear-gradient(180deg,#F5FBFF_0%,#FFFFFF_18%)]"> */}
        <div
          className={cn(
            "min-h-0 flex-1 overflow-y-auto px-4 pt-4",
            showBottomNav
              ? "pb-[var(--bottom-nav-safe-offset)]"
              : "pb-[max(1rem,env(safe-area-inset-bottom))]",
          )}
        >
          {children}
        </div>

        {showBottomNav ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-[linear-gradient(180deg,rgba(248,250,251,0)_0%,rgba(248,250,251,0.72)_36%,rgba(248,250,251,0.94)_68%,rgba(248,250,251,1)_100%)] px-3 pb-[var(--bottom-nav-bottom-gap)] pt-6">
            <div className="pointer-events-auto">
              <BottomNav />
            </div>
          </div>
        ) : null}
      </div>
    </MobileFrame>
  );
}