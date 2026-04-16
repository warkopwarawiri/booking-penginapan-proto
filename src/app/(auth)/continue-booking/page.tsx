import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function ContinueBookingPage() {
  return (
    <main className="flex flex-col gap-5 pb-4 pt-3">
      <section className="overflow-hidden rounded-[24px] border border-[rgba(74,171,240,0.22)] bg-[linear-gradient(135deg,#0F6FAE_0%,#4AABF0_58%,#EAF8FF_100%)] p-4 text-white shadow-[0_22px_50px_-30px_rgba(45,140,199,0.8)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Lanjutkan pemesanan</p>
        <h1 className="mt-2 text-2xl font-bold">Satu langkah lagi untuk mengunci harga.</h1>
        <p className="mt-2 text-sm leading-6 text-white/85">
          Masuk atau buat akun singkat untuk melanjutkan pesanan, menyimpan voucher, dan melihat status booking kapan saja.
        </p>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <p className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
          Data booking pilihanmu akan tetap aman setelah login atau registrasi.
        </p>
      </section>

      <div className="space-y-2">
        <Link href="/register" className={buttonVariants("primary", true)}>
          Daftar gratis
          <ArrowRight size={16} />
        </Link>
        <Link href="/login" className={buttonVariants("secondary", true)}>
          Saya sudah punya akun
        </Link>
        <Link href="/home" className={buttonVariants("ghost", true)}>
          Kembali jelajah dulu
        </Link>
      </div>
    </main>
  );
}