import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCheck, MapPin, MoonStar, ShieldCheck, Sparkles, Ticket } from "lucide-react";

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
        title="Stay kamu resmi terkunci dan siap check-in"
        description="Pembayaran sudah masuk, voucher aktif, dan detail kedatangan langsung tersusun tanpa langkah tambahan."
        backHref="/bookings"
      />

      <section className="relative overflow-hidden rounded-[26px] border border-[rgba(39,174,96,0.18)] bg-[linear-gradient(135deg,#1D9B63_0%,#4AABF0_100%)] p-4 text-white shadow-[0_24px_60px_-30px_rgba(45,140,199,0.75)]">
        <div className="absolute -right-10 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-[#F0B756]/20 blur-2xl" />

        <div className="relative flex items-start gap-3">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/18 backdrop-blur-sm">
            <CheckCheck size={30} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/78">Pembayaran terverifikasi</p>
            <h2 className="mt-1 text-xl font-bold leading-7">Perjalananmu resmi siap dimulai.</h2>
            <p className="mt-1 text-sm leading-6 text-white/88">
              Tidak ada langkah tambahan yang membingungkan — voucher aktif, detail kedatangan rapi, dan check-in tinggal satu langkah lagi.
            </p>
          </div>
        </div>

        <div className="relative mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5 backdrop-blur-sm">
            <p className="text-white/70">Status</p>
            <p className="mt-1 font-semibold">Dikonfirmasi</p>
          </div>
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5 backdrop-blur-sm">
            <p className="text-white/70">Voucher</p>
            <p className="mt-1 font-semibold">Siap pakai</p>
          </div>
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5 backdrop-blur-sm">
            <p className="text-white/70">Total</p>
            <p className="mt-1 font-semibold">{formatCurrency(booking.total)}</p>
          </div>
        </div>

        <div className="relative mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-white/92">
          <span className="rounded-full bg-white/14 px-3 py-1.5">Voucher otomatis terbit</span>
          <span className="rounded-full bg-white/14 px-3 py-1.5">Detail tiba tersimpan</span>
          <span className="rounded-full bg-white/14 px-3 py-1.5">Tanpa follow-up manual</span>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[24px] border border-[rgba(240,183,86,0.36)] bg-[linear-gradient(135deg,#4AABF0_0%,#2D8CC7_100%)] p-4 text-white shadow-[0_25px_60px_-30px_rgba(45,140,199,0.8)]">
        <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[var(--color-background)]/90" />
        <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[var(--color-background)]/90" />

        <div className="relative flex items-center justify-between gap-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/80">E-VOUCHER PREMIUM</p>
          <span className="rounded-full bg-white/16 px-2.5 py-1 text-[10px] font-semibold">Check-in cepat</span>
        </div>
        <h2 className="relative mt-2 text-lg font-bold">{property.name}</h2>
        <p className="relative text-sm text-white/80">{formatDateRange(booking.checkIn, booking.checkOut)} · {booking.guests} tamu</p>

        <div className="relative mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-white/92">
          <span className="rounded-full bg-white/14 px-3 py-1.5">Diterbitkan 14:23 WIB</span>
          <span className="rounded-full bg-white/14 px-3 py-1.5">Status check-in siap</span>
          <span className="rounded-full bg-white/14 px-3 py-1.5">Tunjukkan kode saat tiba</span>
        </div>

        <div className="my-4 border-t border-dashed border-white/40" />
        <div className="relative flex items-center justify-between gap-3">
          <div className="space-y-2">
            <div>
              <p className="text-xs text-white/80">Kode booking</p>
              <p className="text-base font-bold">{booking.id}</p>
            </div>
            <div className="rounded-[16px] bg-white/12 px-3 py-2 text-xs text-white/88 backdrop-blur-sm">
              Tunjukkan kode ini atau QR di samping saat check-in.
            </div>
          </div>
          <div className="rounded-[22px] border border-white/25 bg-white/14 px-3 py-3 text-center shadow-[0_18px_40px_-26px_rgba(17,24,39,0.45)] backdrop-blur-sm">
            <div className="rounded-[18px] bg-white/88 px-5 py-5 text-[11px] font-bold text-[var(--color-primary-dark)]">
              QR CHECK-IN
            </div>
            <p className="mt-2 text-[10px] font-semibold text-white/85">Scan / tunjukkan ke staff</p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <div className="rounded-[18px] bg-white/12 px-3 py-3 backdrop-blur-sm">
            <p className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
              <MapPin size={12} /> Lokasi
            </p>
            <p className="mt-1 text-sm font-semibold">{property.location}</p>
          </div>
          <div className="rounded-[18px] bg-white/12 px-3 py-3 backdrop-blur-sm">
            <p className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
              <Ticket size={12} /> Kedatangan
            </p>
            <p className="mt-1 text-sm font-semibold">Check-in 14.00 WIB</p>
          </div>
          <div className="rounded-[18px] bg-white/12 px-3 py-3 backdrop-blur-sm">
            <p className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
              <MoonStar size={12} /> Info tambahan
            </p>
            <p className="mt-1 text-sm font-semibold">{property.muslimInfo?.prayerPlace ?? "Detail stay siap"}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.18)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-dark)]">Semua sudah otomatis beres</p>
            <h2 className="mt-1 text-base font-bold text-[var(--color-text)]">Tidak ada follow-up yang membingungkan setelah bayar.</h2>
          </div>
          <span className="rounded-full bg-[var(--color-primary-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary-dark)]">Tanpa ribet</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="rounded-[16px] border border-[var(--color-border)] bg-white px-2 py-2.5">
            <p className="text-[var(--color-text-muted)]">Pembayaran</p>
            <p className="mt-1 font-semibold text-[var(--color-text)]">Masuk</p>
          </div>
          <div className="rounded-[16px] border border-[var(--color-border)] bg-white px-2 py-2.5">
            <p className="text-[var(--color-text-muted)]">Voucher</p>
            <p className="mt-1 font-semibold text-[var(--color-text)]">Aktif</p>
          </div>
          <div className="rounded-[16px] border border-[var(--color-border)] bg-white px-2 py-2.5">
            <p className="text-[var(--color-text-muted)]">Check-in</p>
            <p className="mt-1 font-semibold text-[var(--color-text)]">Siap</p>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(240,183,86,0.45)] bg-[linear-gradient(180deg,#FFF8EA_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(138,90,4,0.26)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A5A04]">Momen yang diingat</p>
            <h2 className="mt-1 text-base font-bold text-[var(--color-text)]">Bukan sekadar booking berhasil — stay kamu terasa benar-benar siap.</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
              Semua hal penting sudah diringkas supaya rasa lega dan excitement muncul tepat setelah pembayaran selesai.
            </p>
          </div>
          <span className="rounded-full bg-[var(--color-gold-soft)] px-2.5 py-1 text-[10px] font-semibold text-[#8A5A04]">Ready to arrive</span>
        </div>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--color-primary-dark)] shadow-[0_12px_24px_-20px_rgba(31,41,55,0.25)]">
          Detail lengkap kini tinggal satu tap <ArrowRight size={14} />
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-[var(--color-primary-soft)] p-2 text-[var(--color-primary-dark)]">
            <Sparkles size={18} />
          </div>
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Yang perlu kamu lakukan berikutnya</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
              Semua langkah sudah diringkas agar user langsung tahu apa yang harus dilakukan setelah bayar.
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {[
            {
              icon: CalendarDays,
              text: "Simpan voucher ini atau screenshot sebagai cadangan.",
            },
            {
              icon: Ticket,
              text: "Datang sesuai jadwal check-in dan tunjukkan kode booking ke staff.",
            },
            {
              icon: ShieldCheck,
              text: "Jika ada kendala, detail pesanan dan bantuan tetap mudah diakses dari aplikasi.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.text} className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
                <Icon size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
                <p className="text-sm text-[var(--color-text-muted)]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="space-y-2">
        <Link href={`/bookings/${booking.id}`} className={buttonVariants("primary", true)}>
          Lihat Detail Pesanan
        </Link>
        <Link href={`/bookings/${booking.id}/voucher`} className={buttonVariants("secondary", true)}>
          Buka E-Voucher
        </Link>
        <Link href="/home" className={buttonVariants("ghost", true)}>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}