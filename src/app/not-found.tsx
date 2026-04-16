import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[var(--color-background)] px-4">
      <div className="mx-auto max-w-md rounded-[24px] border border-[var(--color-border)] bg-white p-6 text-center shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <p className="text-sm font-medium text-[var(--color-primary-dark)]">404</p>
        <h1 className="mt-2 text-2xl font-bold text-[var(--color-text)]">Halaman belum tersedia</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">Halaman yang kamu cari belum tersedia atau sudah dipindahkan.</p>
        <Link href="/home" className={buttonVariants("primary", true) + " mt-4"}>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}