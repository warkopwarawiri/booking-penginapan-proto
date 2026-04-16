import Link from "next/link";
import { CheckCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { bookings, getPropertyBySlug } from "@/data/mock-data";
import { formatCurrency, formatDateRange } from "@/lib/utils";

const booking = bookings[0];
const property = getPropertyBySlug(booking.propertySlug);

export default function BookingSuccessPage() {
  if (!property) return null;

  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Booking Berhasil"
        title="Pemesanan berhasil dikonfirmasi"
        description="E-voucher sudah dikirim ke email dan siap dibuka kapan saja dari aplikasi."
        backHref="/bookings"
      />

      <section className="flex flex-col items-center gap-3 pt-2 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF8F0] text-[var(--color-success)]">
          <CheckCheck size={30} />
        </div>
      </section>

      <section className="rounded-[24px] bg-[linear-gradient(135deg,#4AABF0_0%,#2D8CC7_100%)] p-4 text-white shadow-[0_25px_60px_-30px_rgba(45,140,199,0.8)]">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/80">E-VOUCHER</p>
        <h2 className="mt-2 text-lg font-bold">{property.name}</h2>
        <p className="text-sm text-white/80">{formatDateRange(booking.checkIn, booking.checkOut)} · {booking.guests} tamu</p>
        <div className="my-4 border-t border-dashed border-white/40" />
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-white/80">Kode booking</p>
            <p className="text-base font-bold">{booking.id}</p>
            <p className="mt-1 text-xs text-white/80">Tunjukkan kode ini saat check-in</p>
          </div>
          <div className="rounded-2xl bg-white/20 px-3 py-5 text-xs font-semibold">QR Check-in</div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 text-sm text-[var(--color-text-muted)]">
        <p>Total terbayar: <span className="font-semibold text-[var(--color-primary-dark)]">{formatCurrency(booking.total)}</span></p>
        <p className="mt-2">Simpan voucher ini atau lanjut ke detail pesanan untuk melihat timeline lengkap.</p>
      </section>

      <div className="space-y-2">
        <Link href={`/bookings/${booking.id}`} className={buttonVariants("primary", true)}>
          Lihat Detail Pesanan
        </Link>
        <Link href="/home" className={buttonVariants("secondary", true)}>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}