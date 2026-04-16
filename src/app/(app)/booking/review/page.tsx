import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CircleCheckBig,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { currentUser, getPropertyBySlug } from "@/data/mock-data";
import { formatCurrency, formatDateRange } from "@/lib/utils";

export default async function BookingReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ property?: string }>;
}) {
  const { property: slug } = await searchParams;
  const property = getPropertyBySlug(slug ?? "villa-padi-ubud");

  if (!property) return null;

  const nights = 3;
  const guests = 2;
  const subtotal = property.price * nights;
  const taxes = Math.round(subtotal * 0.1);
  const serviceFee = 50000;
  const total = subtotal + taxes + serviceFee;

  return (
    <main className="space-y-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <PageHeader
        eyebrow="Ringkasan Pesanan"
        title="Review terakhir sebelum pembayaran"
        description="Pastikan detail stay, data pemesan, dan total biaya sudah pas sebelum lanjut ke pembayaran."
        backHref={`/booking/form?property=${property.slug}`}
        action={
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            2/4
          </span>
        }
      />

      <section className="grid grid-cols-4 gap-2">
        {[
          { label: "Detail", active: false },
          { label: "Review", active: true },
          { label: "Bayar", active: false },
          { label: "Voucher", active: false },
        ].map((step) => (
          <div
            key={step.label}
            className={step.active
              ? "rounded-full bg-[var(--color-primary)] px-2 py-2 text-center text-[10px] font-semibold text-white shadow-[0_14px_30px_-18px_rgba(74,171,240,0.7)]"
              : "rounded-full bg-white px-2 py-2 text-center text-[10px] font-semibold text-[var(--color-text-muted)]"
            }
          >
            {step.label}
          </div>
        ))}
      </section>

      <section className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold">
        {[
          ["Pembayaran aman", "Terenkripsi"],
          ["Voucher otomatis", "Siap instan"],
          ["Pembatalan jelas", "Gratis H-1"],
        ].map(([title, note]) => (
          <div key={title} className="rounded-[18px] border border-[var(--color-border)] bg-white px-2 py-2.5">
            <p className="text-[var(--color-text)]">{title}</p>
            <p className="mt-1 text-[var(--color-text-muted)]">{note}</p>
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-[24px] border border-[rgba(74,171,240,0.22)] bg-[linear-gradient(135deg,#EAF7FF_0%,#FFFFFF_100%)] p-2 shadow-[0_22px_50px_-36px_rgba(45,140,199,0.55)]">
        <div className="flex gap-3 rounded-[20px] bg-[linear-gradient(135deg,#0F6FAE_0%,#4AABF0_58%,#DDF4FF_100%)] p-3 text-white">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[18px] border border-white/20 shadow-[0_18px_30px_-24px_rgba(17,24,39,0.65)]">
            <Image
              src={property.imageUrl}
              alt={property.name}
              fill
              sizes="96px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.36)_100%)]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/78">Detail penginapan</p>
                <h2 className="mt-1 line-clamp-2 text-lg font-bold leading-6">{property.name}</h2>
                <p className="mt-1 flex items-center gap-1 text-sm text-white/85">
                  <MapPin size={13} /> {property.location}
                </p>
              </div>
              {property.isHiddenGem ? <Badge tone="gold">Hidden Gem</Badge> : null}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {property.isMuslimFriendly ? <Badge tone="info">Ramah Muslim</Badge> : null}
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
                {property.type}
              </span>
            </div>

            <div className="mt-3 space-y-1.5 text-sm text-white/92">
              <p className="flex items-center gap-2">
                <CalendarDays size={14} /> {formatDateRange("2026-04-12", "2026-04-15")}
              </p>
              <p className="flex items-center gap-2">
                <Users size={14} /> {nights} malam · {guests} tamu
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 rounded-[18px] bg-white px-3 py-3 text-sm shadow-[0_14px_30px_-24px_rgba(31,41,55,0.35)]">
          <div>
            <p className="font-semibold text-[var(--color-text)]">Jadwal dan tamu sudah sesuai</p>
            <p className="text-xs text-[var(--color-text-muted)]">Kalau perlu, kamu masih bisa ubah detail sebelum bayar.</p>
          </div>
          <Link href={`/booking/form?property=${property.slug}`} className={buttonVariants("secondary")}>
            Ubah
          </Link>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Data pemesan</h2>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">E-voucher dan info check-in akan dikirim ke kontak ini.</p>
          </div>
          <Link href={`/booking/form?property=${property.slug}`} className={buttonVariants("secondary")}>
            Ubah
          </Link>
        </div>

        <div className="mt-3 space-y-2">
          {[
            { icon: UserRound, label: "Nama pemesan", value: currentUser.name },
            { icon: Mail, label: "Email", value: currentUser.email },
            { icon: Phone, label: "WhatsApp", value: "0812-3456-7890" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
              <item.icon size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-text)]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Rincian harga</h2>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Semua biaya ditampilkan transparan sebelum pembayaran.</p>
          </div>
          <span className="rounded-full bg-[var(--color-gold-soft)] px-3 py-1 text-[11px] font-semibold text-[#8A5A04]">
            Transparan
          </span>
        </div>

        <div className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
          <div className="flex items-center justify-between py-1">
            <span>{formatCurrency(property.price)} × {nights} malam</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span>Pajak 10%</span>
            <span>{formatCurrency(taxes)}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span>Biaya layanan</span>
            <span>{formatCurrency(serviceFee)}</span>
          </div>
          <div className="flex items-center justify-between py-1 text-[var(--color-success)]">
            <span>Benefit member</span>
            <span>E-voucher instan</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-[var(--color-border)] pt-3 font-semibold text-[var(--color-text)]">
            <span>Total pembayaran</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Yang kamu dapatkan</h2>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Benefit penting ini langsung aktif setelah pembayaran berhasil.</p>
          </div>
          <Sparkles size={16} className="mt-1 shrink-0 text-[var(--color-primary-dark)]" />
        </div>

        <div className="mt-3 space-y-2">
          {[
            "E-voucher instan setelah pembayaran berhasil",
            "Akses penuh ke fasilitas utama properti",
            "Bantuan customer support sebelum check-in",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
              <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
              <p className="text-sm text-[var(--color-text-muted)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.25)] bg-[var(--color-primary-soft)]/45 p-4 text-sm text-[var(--color-text-muted)] shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <div className="space-y-2">
          <p className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            Pembatalan gratis hingga 24 jam sebelum check-in. Setelah itu dikenakan biaya 50% dari total pesanan.
          </p>
          <p className="flex items-start gap-2">
            <MessageCircleMore size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            Butuh bantuan? Tim support siap membantu sebelum kamu menyelesaikan pembayaran.
          </p>
        </div>
      </section>

      <section className="sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-10 rounded-[24px] border border-[var(--color-border)] bg-white/95 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.42)] backdrop-blur">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Siap dibayar</p>
            <p className="text-xl font-bold text-[var(--color-primary-dark)]">{formatCurrency(total)}</p>
          </div>
          <Badge tone="info">Pembayaran aman</Badge>
        </div>

        <Link href={`/booking/payment?property=${property.slug}`} className={buttonVariants("primary", true)}>
          Lanjut ke pembayaran · {formatCurrency(total)}
        </Link>

        <p className="mt-2 text-center text-[11px] text-[var(--color-text-muted)]">
          Aman, terenkripsi, dan e-voucher langsung terbit setelah pembayaran berhasil.
        </p>
      </section>
    </main>
  );
}