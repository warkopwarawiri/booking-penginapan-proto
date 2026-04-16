import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Headphones,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { getBookingById, getPropertyBySlug } from "@/data/mock-data";
import { cn, formatCurrency, formatDateRange, statusTone } from "@/lib/utils";

const arrivalGuides: Record<string, { address: string; contact: string; note: string }> = {
  "villa-padi-ubud": {
    address: "Jl. Raya Keliki No. 8, Ubud, Bali",
    contact: "+62 812-3900-8812",
    note: "Tunjukkan kode booking ke host saat tiba agar proses check-in terasa lebih cepat.",
  },
  "teras-senja-yogya": {
    address: "Jl. Kemasan No. 14, Kota Gede, Yogyakarta",
    contact: "+62 811-2870-220",
    note: "Host standby di area depan rumah 15 menit sebelum jadwal check-in.",
  },
};

export default async function BookingDetailPage({
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

  const baseAmount = property.price * booking.nights;
  const taxAmount = Math.round(baseAmount * 0.1);
  const serviceFee = Math.max(booking.total - baseAmount - taxAmount, 0);
  const paymentDate =
    booking.timeline.find((entry) => entry.title === "Pembayaran Berhasil")?.timestamp ??
    "Pembayaran berhasil diverifikasi";
  const arrivalGuide = arrivalGuides[property.slug] ?? {
    address: `${property.location} · detail lengkap tersedia di voucher`,
    contact: "+62 811-0000-7788",
    note: "Simpan voucher digital ini agar staff bisa membantu proses kedatangan dengan lebih lancar.",
  };

  const statusSummary =
    booking.status === "Dikonfirmasi"
      ? "Pembayaran berhasil dan properti sudah siap menyambut kedatanganmu."
      : booking.status === "Selesai"
        ? "Perjalananmu sudah selesai dan seluruh riwayat tersimpan rapi di aplikasi."
        : booking.status === "Check-in"
          ? "Kamu sedang dalam masa menginap. Semua info penting tetap bisa diakses di halaman ini."
          : "Booking masih menunggu langkah berikutnya. Detail terbarunya akan muncul otomatis di sini.";

  const confidencePoints = [
    { label: "Pembayaran", value: "Terverifikasi" },
    { label: "Kontak host", value: "Aktif" },
    {
      label: property.isMuslimFriendly ? "Info ibadah" : "Kebijakan",
      value: property.isMuslimFriendly ? "Sudah dicatat" : "Jelas & fleksibel",
    },
  ];
  const arrivalChecklist = [
    "Simpan e-voucher atau screenshot sebelum berangkat.",
    "Datang sesuai jam check-in dan tunjukkan kode booking ke staff.",
    "Jika perlu bantuan, buka detail ini untuk kontak host dan update status terbaru.",
  ];

  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Detail Pesanan"
        title={booking.id}
        description="Pantau status booking, pembayaran, dan informasi kedatangan dalam satu layar yang ringkas."
        backHref="/bookings"
        action={<Badge tone={statusTone(booking.status)}>{booking.status}</Badge>}
      />

      <section className="overflow-hidden rounded-[24px] border border-[rgba(74,171,240,0.22)] bg-[linear-gradient(135deg,#0F6FAE_0%,#4AABF0_58%,#EAF8FF_100%)] p-4 text-white shadow-[0_22px_50px_-30px_rgba(45,140,199,0.8)]">
        <div className="flex gap-3">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[20px] border border-white/20 bg-white/10">
            <Image src={property.imageUrl} alt={property.name} fill className="object-cover" sizes="96px" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">Ringkasan booking</p>
            <h2 className="mt-1.5 text-lg font-bold leading-6">{property.name}</h2>
            <p className="mt-1 flex items-center gap-1 text-sm text-white/85">
              <MapPin size={14} className="shrink-0" />
              {property.location}
            </p>

            <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-semibold">
              {property.isHiddenGem ? (
                <span className="rounded-full bg-[rgba(240,183,86,0.2)] px-2.5 py-1 text-[#FFF4D6]">✦ Hidden Gem</span>
              ) : null}
              {property.isMuslimFriendly ? (
                <span className="rounded-full bg-white/14 px-2.5 py-1 text-white/90">Muslim-friendly</span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-[18px] bg-white/12 px-3 py-2.5 backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">Durasi</p>
            <p className="mt-1 text-sm font-semibold">{booking.nights} malam</p>
          </div>
          <div className="rounded-[18px] bg-white/12 px-3 py-2.5 backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">Tamu</p>
            <p className="mt-1 text-sm font-semibold">{booking.guests} orang</p>
          </div>
          <div className="rounded-[18px] bg-white/12 px-3 py-2.5 backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">Total</p>
            <p className="mt-1 text-sm font-semibold">{formatCurrency(booking.total)}</p>
          </div>
        </div>

        <div className="mt-2 rounded-[18px] bg-white/10 px-3 py-2 text-[11px] text-white/90 backdrop-blur-sm">
          Jadwal menginap: {formatDateRange(booking.checkIn, booking.checkOut)}
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-[var(--color-primary-soft)] p-2.5 text-[var(--color-primary-dark)]">
            <CheckCircle2 size={18} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-base font-semibold text-[var(--color-text)]">Status saat ini</h2>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">{statusSummary}</p>
              </div>
              <Badge tone={statusTone(booking.status)}>{booking.status}</Badge>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-[var(--color-text-muted)]">
              <span className="rounded-full bg-[var(--color-surface-muted)] px-3 py-1.5">Voucher digital aktif</span>
              <span className="rounded-full bg-[var(--color-surface-muted)] px-3 py-1.5">Check-in 14.00 WIB</span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {confidencePoints.map((item) => (
                <div key={item.label} className="rounded-[16px] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] px-2 py-2.5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{item.label}</p>
                  <p className="mt-1 text-[11px] font-semibold text-[var(--color-text)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Rincian pembayaran</h2>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Semua biaya ditampilkan transparan sebelum perjalanan dimulai.</p>
          </div>
          <CreditCard size={18} className="mt-1 shrink-0 text-[var(--color-primary-dark)]" />
        </div>

        <div className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
          <div className="flex items-center justify-between">
            <span>{formatCurrency(property.price)} × {booking.nights} malam</span>
            <span>{formatCurrency(baseAmount)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Pajak</span>
            <span>{formatCurrency(taxAmount)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Biaya layanan</span>
            <span>{formatCurrency(serviceFee)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-3 font-semibold text-[var(--color-text)]">
            <span>Total dibayarkan</span>
            <span>{formatCurrency(booking.total)}</span>
          </div>
        </div>

        <div className="mt-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3 text-xs leading-5 text-[var(--color-text-muted)]">
          Pembayaran terverifikasi pada {paymentDate} via {booking.paymentMethod}.
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Timeline status</h2>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Riwayat perjalananmu tercatat rapi dan mudah dilacak.</p>
          </div>
          <Sparkles size={18} className="mt-1 shrink-0 text-[var(--color-primary-dark)]" />
        </div>

        <div className="mt-4 space-y-0">
          {booking.timeline.map((entry, index) => {
            const isDone = entry.state === "done";
            const isActive = entry.state === "active";

            return (
              <div key={`${entry.title}-${entry.timestamp}`} className="flex gap-3">
                <div className="flex w-4 flex-col items-center">
                  <span
                    className={cn(
                      "mt-1 h-3.5 w-3.5 rounded-full border-2",
                      isDone && "border-[var(--color-success)] bg-[var(--color-success)]",
                      isActive && "border-[var(--color-primary)] bg-white shadow-[0_0_0_4px_rgba(74,171,240,0.18)]",
                      !isDone && !isActive && "border-[var(--color-border)] bg-white",
                    )}
                  />
                  {index < booking.timeline.length - 1 ? (
                    <span
                      className={cn(
                        "mt-1 w-px flex-1",
                        isDone ? "bg-[linear-gradient(180deg,rgba(39,174,96,0.85)_0%,rgba(74,171,240,0.3)_100%)]" : "bg-[var(--color-border)]",
                      )}
                    />
                  ) : null}
                </div>

                <div
                  className={cn(
                    "mb-3 flex-1 rounded-[18px] border px-3.5 py-3",
                    isActive
                      ? "border-[rgba(74,171,240,0.28)] bg-[var(--color-primary-soft)]/65"
                      : "border-transparent bg-[var(--color-surface-muted)]/80",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--color-text)]">{entry.title}</p>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[10px] font-semibold",
                        isDone && "bg-[#EAF8F0] text-[var(--color-success)]",
                        isActive && "bg-white text-[var(--color-primary-dark)]",
                        !isDone && !isActive && "bg-white text-[var(--color-text-muted)]",
                      )}
                    >
                      {isDone ? "Selesai" : isActive ? "Aktif" : "Berikutnya"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{entry.timestamp}</p>
                  {entry.detail ? <p className="mt-1 text-xs text-[var(--color-text-muted)]">{entry.detail}</p> : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <h2 className="text-base font-semibold text-[var(--color-text)]">Informasi check-in</h2>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Alamat properti</p>
              <p className="mt-1 text-sm text-[var(--color-text)]">{arrivalGuide.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
            <PhoneCall size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Kontak host</p>
              <p className="mt-1 text-sm text-[var(--color-text)]">{arrivalGuide.contact}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
            <Users size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Catatan kedatangan</p>
              <p className="mt-1 text-sm text-[var(--color-text)]">{arrivalGuide.note}</p>
            </div>
          </div>
          {property.muslimInfo ? (
            <div className="flex items-start gap-3 rounded-[18px] border border-[rgba(74,171,240,0.18)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] px-3 py-3">
              <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Info ramah Muslim tersimpan</p>
                <p className="mt-1 text-sm text-[var(--color-text)]">{property.muslimInfo.prayerPlace} · {property.muslimInfo.halalFood}</p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.32)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Checklist sebelum berangkat</h2>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Supaya check-in terasa lebih tenang dan tidak ada langkah yang terlewat.</p>
          </div>
          <Badge tone="info">Ready</Badge>
        </div>

        <div className="mt-3 space-y-2">
          {arrivalChecklist.map((item, index) => (
            <div key={item} className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[var(--color-primary-dark)]">
                {index + 1}
              </span>
              <p className="text-sm text-[var(--color-text-muted)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.25)] bg-[var(--color-primary-soft)]/45 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <p className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
          Semua update booking akan tercatat otomatis di sini agar perjalanan terasa lebih aman, jelas, dan transparan.
        </p>
      </section>

      <div className="space-y-2">
        <Link href={`/bookings/${booking.id}/voucher`} className={buttonVariants("primary", true)}>
          <CalendarDays size={16} />
          Lihat E-Voucher
        </Link>
        <Link href="/profile" className={buttonVariants("secondary", true)}>
          <Headphones size={16} />
          Hubungi tim bantuan
        </Link>
      </div>
    </main>
  );
}