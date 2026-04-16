import Link from "next/link";
import { CircleX, ShieldAlert } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";

export default function BookingFailedPage() {
  return (
    <main className="space-y-4 pb-2 text-center">
      <PageHeader
        eyebrow="Pembayaran Belum Berhasil"
        title="Masih bisa dicoba lagi"
        description="Pilihan stay kamu tetap aman. Kamu bisa ulang pembayaran atau ganti metode dengan cepat."
        backHref="/booking/payment"
      />

      <section className="flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDECEC] text-[var(--color-danger)]">
          <CircleX size={28} />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Pembayaran belum berhasil</h1>
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">
            Tenang, pilihan stay kamu belum hilang. Kamu masih bisa memilih metode lain atau mencoba ulang.
          </p>
        </div>
      </section>

      <section className="rounded-[24px] border border-[#F8D7DA] bg-[#FFF6F6] p-4 text-left shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <p className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
          <ShieldAlert size={16} className="mt-0.5 shrink-0 text-[var(--color-danger)]" />
          Penyebab umum: sesi pembayaran habis, saldo kurang, atau koneksi bank sedang lambat.
        </p>
      </section>

      <div className="w-full space-y-2">
        <Link href="/booking/payment" className={buttonVariants("primary", true)}>
          Coba lagi
        </Link>
        <Link href="/home" className={buttonVariants("secondary", true)}>
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}