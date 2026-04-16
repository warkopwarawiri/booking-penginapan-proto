import Image from "next/image";
import { CalendarDays, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

import { VoucherActions } from "@/components/bookings/voucher-actions";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { getBookingById, getPropertyBySlug } from "@/data/mock-data";
import { formatDateRange } from "@/lib/utils";

const qrPattern = [
  "11111110101",
  "10000010111",
  "10111010001",
  "10111010110",
  "10111010010",
  "10000010101",
  "11111110111",
  "00110100101",
  "11001111010",
  "10100001101",
  "11101010111",
];

export default async function VoucherPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const booking = getBookingById(id);

  if (!booking) {
    notFound();
  }

  const property = getPropertyBySlug(booking.propertySlug);

  if (!property) {
    notFound();
  }

  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Detail E-Voucher"
        title="Voucher digital"
        description="Tunjukkan voucher ini saat check-in atau simpan screenshot-nya untuk akses yang lebih cepat saat tiba di properti."
        backHref={`/bookings/${booking.id}`}
      />

      <section className="overflow-hidden rounded-[28px] border border-[rgba(74,171,240,0.2)] bg-[linear-gradient(135deg,#1681C5_0%,#4AABF0_62%,#7DC8FF_100%)] p-4 text-white shadow-[0_24px_60px_-30px_rgba(45,140,199,0.85)]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-white/80">E-VOUCHER AKTIF</p>
          <Badge tone="gold">Check-in cepat</Badge>
        </div>

        <div className="mt-3 flex gap-3 rounded-[22px] border border-white/15 bg-white/10 p-2.5 backdrop-blur-sm">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] border border-white/20 bg-white/10">
            <Image src={property.imageUrl} alt={property.name} fill className="object-cover" sizes="80px" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold leading-6">{property.name}</h2>
            <p className="mt-1 flex items-center gap-1 text-sm text-white/85">
              <MapPin size={14} className="shrink-0" />
              {property.location}
            </p>
            <p className="mt-2 inline-flex rounded-full bg-white/14 px-2.5 py-1 text-[11px] font-medium text-white/90">
              {formatDateRange(booking.checkIn, booking.checkOut)} · {booking.guests} tamu
            </p>
          </div>
        </div>

        <div className="my-4 border-t border-dashed border-white/35" />

        <div className="grid grid-cols-[1fr_auto] items-start gap-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/75">Kode booking</p>
            <p className="mt-1 font-mono text-[31px] font-bold leading-none tracking-tight">{booking.id}</p>
            <p className="mt-2 max-w-[12rem] text-xs leading-5 text-white/82">
              Tunjukkan kode atau QR ini saat tiba agar proses check-in terasa lebih mulus.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-white/90">
              <span className="rounded-full bg-white/14 px-2.5 py-1">Check-in 14.00 WIB</span>
              <span className="rounded-full bg-white/14 px-2.5 py-1">Reservasi aktif</span>
            </div>
          </div>

          <div className="rounded-[22px] bg-white/95 p-2.5 text-slate-900 shadow-[0_16px_30px_-22px_rgba(15,23,42,0.45)]">
            <div className="grid grid-cols-11 gap-[2px]">
              {qrPattern.flatMap((row, rowIndex) =>
                row.split("").map((cell, colIndex) => (
                  <span
                    key={`${rowIndex}-${colIndex}`}
                    className={`h-[6px] w-[6px] rounded-[1px] ${cell === "1" ? "bg-slate-900" : "bg-sky-50"}`}
                  />
                )),
              )}
            </div>
            <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              QR Check-in
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-[var(--color-primary-soft)] p-2 text-[var(--color-primary-dark)]">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Voucher siap digunakan</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
              E-voucher ini sudah aktif, bisa ditunjukkan langsung di properti, dan aman disimpan sebagai cadangan selama perjalanan.
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {[
            "Simpan screenshot voucher ini sebelum berangkat.",
            "Datang sesuai jam check-in dan tunjukkan kode booking ke staf.",
            "Jika ada kendala di lokasi, buka detail pesanan untuk bantuan cepat.",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-2.5"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-[var(--color-primary-dark)]">
                {index + 1}
              </span>
              <p className="text-sm text-[var(--color-text-muted)]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.22)] bg-[var(--color-primary-soft)]/60 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
          <p className="flex items-start gap-2">
            <CalendarDays size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            Jadwal menginap: {formatDateRange(booking.checkIn, booking.checkOut)}.
          </p>
          <p className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            Detail voucher ini sudah siap ditunjukkan langsung saat tiba agar pengalaman check-in terasa lebih jelas dan terpercaya.
          </p>
        </div>
      </section>

      <VoucherActions bookingId={booking.id} />
    </main>
  );
}