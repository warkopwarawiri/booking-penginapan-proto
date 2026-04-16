"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CalendarDays,
  CircleCheckBig,
  Mail,
  MessageCircleMore,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { currentUser, getPropertyBySlug, properties } from "@/data/mock-data";
import { cn, formatCurrency, formatDateRange } from "@/lib/utils";

function addDays(dateString: string, days: number) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);

  return date.toISOString().split("T")[0] ?? dateString;
}

function calculateNights(checkIn: string, checkOut: string) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();

  return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function formatInputDate(dateString: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function BookingFormPage() {
  return (
    <Suspense
      fallback={
        <main className="space-y-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <PageHeader
            eyebrow="Form Pemesanan"
            title="Lengkapi detail pemesananmu"
            description="Menyiapkan detail booking terbaik untukmu."
            backHref="/search/results"
          />
          <section className="h-36 animate-pulse rounded-[24px] bg-white/80" />
          <section className="h-72 animate-pulse rounded-[24px] bg-white/80" />
        </main>
      }
    >
      <BookingFormContent />
    </Suspense>
  );
}

function BookingFormContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("property") ?? "";
  const property = useMemo(() => getPropertyBySlug(slug) ?? properties[0], [slug]);

  const [checkIn, setCheckIn] = useState("2026-04-12");
  const [checkOut, setCheckOut] = useState("2026-04-15");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [whatsapp, setWhatsapp] = useState("0812-3456-7890");
  const [request, setRequest] = useState("");

  const nights = calculateNights(checkIn, checkOut);
  const subtotal = property.price * nights;
  const taxes = Math.round(subtotal * 0.1);
  const serviceFee = 50000;
  const total = subtotal + taxes + serviceFee;
  const canContinue = name.trim() && email.trim() && whatsapp.trim();

  const handleCheckInChange = (value: string) => {
    setCheckIn(value);

    if (new Date(value) >= new Date(checkOut)) {
      setCheckOut(addDays(value, 1));
    }
  };

  const handleGuestChange = (delta: number) => {
    setGuests((current) => Math.min(property.maxGuests, Math.max(1, current + delta)));
  };

  return (
    <main className="space-y-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <PageHeader
        eyebrow="Form Pemesanan"
        title="Lengkapi detail pemesananmu"
        description="Tinjau tanggal, data tamu, dan kebutuhan khusus sebelum lanjut ke pembayaran."
        backHref={`/${property.slug}`}
        action={
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            1/4
          </span>
        }
      />

      <section className="grid grid-cols-4 gap-2">
        {[
          { label: "Detail", active: true },
          { label: "Review", active: false },
          { label: "Bayar", active: false },
          { label: "Voucher", active: false },
        ].map((step) => (
          <div
            key={step.label}
            className={cn(
              "rounded-full px-2 py-2 text-center text-[10px] font-semibold",
              step.active
                ? "bg-[var(--color-primary)] text-white shadow-[0_14px_30px_-18px_rgba(74,171,240,0.7)]"
                : "bg-white text-[var(--color-text-muted)]",
            )}
          >
            {step.label}
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
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.38)_100%)]" />
            <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 text-[9px] font-bold text-[var(--color-primary-dark)]">
              {property.type}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/78">Pilihan properti</p>
                <h2 className="mt-1 line-clamp-2 text-lg font-bold leading-6">{property.name}</h2>
                <p className="mt-1 text-sm text-white/85">{property.location}</p>
              </div>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
                {property.imageLabel}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {property.isHiddenGem ? <Badge tone="gold">Hidden Gem</Badge> : null}
              {property.isMuslimFriendly ? <Badge tone="info">Ramah Muslim</Badge> : null}
            </div>

            <p className="mt-2 text-sm text-white/92">
              {formatDateRange(checkIn, checkOut)} · {nights} malam · {guests} tamu
            </p>
            <p className="mt-1 text-xs text-white/75">Detail stay sudah tersimpan, kamu tinggal lengkapi data inti.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Tanggal & jumlah tamu</p>
            <p className="text-xs text-[var(--color-text-muted)]">Atur jadwal perjalananmu dengan cepat sebelum review akhir.</p>
          </div>
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            Fleksibel
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label className="rounded-[20px] border border-[var(--color-border)] px-4 py-3">
            <span className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <CalendarDays size={14} /> Check-in
            </span>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{formatInputDate(checkIn)}</p>
            <input
              type="date"
              value={checkIn}
              min="2026-04-12"
              onChange={(event) => handleCheckInChange(event.target.value)}
              className="mt-2 w-full rounded-xl bg-[var(--color-surface-muted)] px-3 py-2 text-xs text-[var(--color-text-muted)] outline-none [color-scheme:light]"
            />
          </label>

          <label className="rounded-[20px] border border-[var(--color-border)] px-4 py-3">
            <span className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <CalendarDays size={14} /> Check-out
            </span>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{formatInputDate(checkOut)}</p>
            <input
              type="date"
              value={checkOut}
              min={addDays(checkIn, 1)}
              onChange={(event) => setCheckOut(event.target.value)}
              className="mt-2 w-full rounded-xl bg-[var(--color-surface-muted)] px-3 py-2 text-xs text-[var(--color-text-muted)] outline-none [color-scheme:light]"
            />
          </label>
        </div>

        <div className="flex items-center justify-between rounded-[18px] border border-[rgba(74,171,240,0.18)] bg-[linear-gradient(135deg,#F5FBFF_0%,#FFFFFF_100%)] px-3 py-2.5 text-xs text-[var(--color-text-muted)]">
          <span>{nights} malam · jadwal masih bisa diubah</span>
          <span className="font-semibold text-[var(--color-primary-dark)]">Stay nyaman</span>
        </div>

        <div className="rounded-[20px] border border-[var(--color-border)] px-4 py-3">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <Users size={15} /> Jumlah tamu
            </p>
            <span className="text-xs text-[var(--color-text-muted)]">Maks. {property.maxGuests} tamu</span>
          </div>
          <div className="flex items-center justify-between rounded-full bg-[var(--color-surface-muted)] px-3 py-2">
            <button
              type="button"
              onClick={() => handleGuestChange(-1)}
              disabled={guests <= 1}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-primary-dark)] shadow-[0_10px_20px_-18px_rgba(31,41,55,0.65)] transition disabled:opacity-40"
              aria-label="Kurangi tamu"
            >
              <Minus size={14} />
            </button>
            <span className="text-sm font-semibold text-[var(--color-text)]">{guests} tamu</span>
            <button
              type="button"
              onClick={() => handleGuestChange(1)}
              disabled={guests >= property.maxGuests}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-[0_14px_24px_-18px_rgba(74,171,240,0.9)] transition disabled:opacity-40"
              aria-label="Tambah tamu"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Kontak pemesan</p>
            <p className="text-xs text-[var(--color-text-muted)]">E-voucher dan update check-in akan dikirim ke sini.</p>
          </div>
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            Data aman
          </span>
        </div>

        <div className="flex items-center justify-between rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3 text-sm text-[var(--color-text)]">
          <span>Pemesan sama dengan tamu utama</span>
          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary-dark)]">Ya</span>
        </div>

        <label className="block text-sm font-medium text-[var(--color-text)]">
          Nama pemesan
          <input
            className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[rgba(74,171,240,0.45)]"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="block text-sm font-medium text-[var(--color-text)]">
          Email konfirmasi
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[var(--color-border)] px-4 py-3 focus-within:border-[rgba(74,171,240,0.45)]">
            <Mail size={16} className="text-[var(--color-text-muted)]" />
            <input
              type="email"
              className="w-full outline-none"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </label>

        <label className="block text-sm font-medium text-[var(--color-text)]">
          WhatsApp aktif
          <input
            className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[rgba(74,171,240,0.45)]"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
          />
        </label>

        <label className="block text-sm font-medium text-[var(--color-text)]">
          Permintaan khusus
          <textarea
            className="mt-2 min-h-24 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[rgba(74,171,240,0.45)]"
            placeholder="Contoh: early check-in, kamar lantai bawah, atau info sarapan halal."
            value={request}
            onChange={(event) => setRequest(event.target.value)}
          />
        </label>

        {property.isMuslimFriendly && property.muslimInfo ? (
          <div className="flex items-start gap-3 rounded-[18px] border border-[rgba(74,171,240,0.18)] bg-[linear-gradient(135deg,#F5FBFF_0%,#FFFFFF_100%)] px-3 py-3">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            <p className="text-sm text-[var(--color-text-muted)]">
              Info arah kiblat, tempat ibadah, dan rekomendasi halal sudah tersedia saat check-in.
            </p>
          </div>
        ) : null}
      </section>

      <section className="space-y-3 rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Ringkasan harga</p>
            <p className="text-xs text-[var(--color-text-muted)]">Semua biaya sudah dirangkum agar keputusan booking terasa lebih yakin.</p>
          </div>
          <span className="rounded-full bg-[var(--color-gold-soft)] px-3 py-1 text-[11px] font-semibold text-[#8A5A04]">
            Transparan
          </span>
        </div>

        <div className="space-y-2 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3 text-sm text-[var(--color-text-muted)]">
          <div className="flex items-center justify-between gap-3">
            <span>{formatCurrency(property.price)} × {nights} malam</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Pajak & biaya layanan</span>
            <span>{formatCurrency(taxes + serviceFee)}</span>
          </div>
          <div className="h-px bg-[rgba(99,110,114,0.14)]" />
          <div className="flex items-center justify-between gap-3 text-[var(--color-text)]">
            <span className="font-semibold">Total pembayaran</span>
            <span className="text-lg font-bold text-[var(--color-primary-dark)]">{formatCurrency(total)}</span>
          </div>
        </div>
      </section>

      <section className="space-y-2 rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
          <p className="text-sm text-[var(--color-text-muted)]">Pembatalan gratis hingga 24 jam sebelum check-in untuk properti ini.</p>
        </div>
        <div className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
          <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
          <p className="text-sm text-[var(--color-text-muted)]">E-voucher otomatis terbit segera setelah pembayaran berhasil.</p>
        </div>
        <div className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
          <MessageCircleMore size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
          <p className="text-sm text-[var(--color-text-muted)]">Tim support siap membantu jika ada kendala sebelum check-in.</p>
        </div>
      </section>

      <section className="sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-10 rounded-[24px] border border-[var(--color-border)] bg-white/95 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.42)] backdrop-blur">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Total estimasi</p>
            <p className="text-xl font-bold text-[var(--color-primary-dark)]">{formatCurrency(total)}</p>
          </div>
          <p className="text-xs text-right text-[var(--color-text-muted)]">{formatCurrency(property.price)} × {nights} malam</p>
        </div>

        {canContinue ? (
          <Link href={`/booking/review?property=${property.slug}`} className={buttonVariants("primary", true)}>
            Lanjutkan ke review pesanan
          </Link>
        ) : (
          <div className={cn(buttonVariants("primary", true), "pointer-events-none opacity-50")}>
            Lengkapi data untuk lanjut
          </div>
        )}

        <p className="mt-2 text-center text-[11px] text-[var(--color-text-muted)]">Belum ada pembayaran di langkah ini.</p>
      </section>
    </main>
  );
}