import { MobileFrame } from "@/components/ui/mobile-frame";
import { appConfig } from "@/lib/constants";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <MobileFrame>
      <div className="flex min-h-dvh flex-col bg-[linear-gradient(180deg,#F4FBFF_0%,#FFFFFF_32%)]">
        <div className="px-5 pb-4 pt-6">
          <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)] shadow-sm">
            {appConfig.name} · Stay pilihan
          </div>
        </div>
        <div className="flex-1 px-5 pb-6">{children}</div>
      </div>
    </MobileFrame>
  );
}