import { cn } from "@/lib/utils";

interface MobileFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileFrame({ children, className }: MobileFrameProps) {
  return (
    <div className="min-h-dvh bg-[var(--color-background)] px-0 py-0 sm:px-6 sm:py-8">
      <div
        className={cn(
          "relative isolate mx-auto min-h-dvh max-w-[430px] overflow-hidden bg-white sm:min-h-[812px] sm:rounded-[28px] sm:border sm:border-white/70 sm:shadow-[0_25px_80px_-35px_rgba(45,140,199,0.45)]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}