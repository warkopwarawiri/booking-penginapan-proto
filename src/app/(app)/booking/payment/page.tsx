"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CircleCheckBig, Clock3, CreditCard, Landmark, ShieldCheck, Sparkles, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { getPropertyBySlug, properties } from "@/data/mock-data";
import { cn, formatCurrency, formatDateRange } from "@/lib/utils";

interface PaymentMethod {
  id: string;
  label: string;
  note: string;
  brand: string;
  badge?: string;
}

interface PaymentMethodGroup {
  title: string;
  icon: typeof Landmark;
  items: PaymentMethod[];
}

const methodGroups: PaymentMethodGroup[] = [
  {
    title: "Transfer bank",
    icon: Landmark,
    items: [
      {
        id: "bca-va",
        label: "BCA Virtual Account",
        note: "Verifikasi otomatis, tanpa upload bukti.",
        brand: "BCA",
        badge: "Direkomendasikan",
      },
      {
        id: "mandiri-va",
        label: "Mandiri Virtual Account",
        note: "Nomor VA aktif selama 59 menit.",
        brand: "MDR",
      },
    ],
  },
  {
    title: "E-wallet",
    icon: Wallet,
    items: [
      {
        id: "gopay",
        label: "GoPay",
        note: "Instan untuk pembayaran cepat dari mobile.",
        brand: "G",
        badge: "Instan",
      },
      {
        id: "ovo",
        label: "OVO",
        note: "Praktis untuk transaksi harian yang ringan.",
        brand: "OVO",
      },
    ],
  },
  {
    title: "Kartu & internasional",
    icon: CreditCard,
    items: [
      {
        id: "card",
        label: "Kartu Kredit / Debit",
        note: "Visa, Mastercard, dan kartu debit utama.",
        brand: "CARD",
      },
    ],
  },
];

const methodHints: Record<string, { title: string; points: string[] }> = {
  "bca-va": {
    title: "Cocok untuk pembayaran yang paling aman dan familiar",
    points: [
      "Nomor virtual account dibuat otomatis setelah kamu konfirmasi.",
      "Bayar sesuai nominal agar sistem memverifikasi lebih cepat.",
      "E-voucher terbit otomatis begitu pembayaran terdeteksi.",
    ],
  },
  "mandiri-va": {
    title: "Alternatif transfer bank dengan alur yang tetap cepat",
    points: [
      "Nomor virtual account aktif selama sesi pembayaran masih berjalan.",
      "Status pembayaran diperbarui otomatis tanpa perlu konfirmasi manual.",
      "Cocok jika kamu lebih nyaman transfer dari mobile banking.",
    ],
  },
  gopay: {
    title: "Pilihan tercepat untuk checkout dari perangkat mobile",
    points: [
      "Setelah konfirmasi, kamu akan diarahkan ke aplikasi e-wallet.",
      "Status booking biasanya terupdate dalam hitungan detik.",
      "Ideal untuk demo flow yang singkat dan mulus.",
    ],
  },
  ovo: {
    title: "Praktis untuk pengguna e-wallet yang ingin proses ringkas",
    points: [
      "Pembayaran dilakukan langsung dari saldo atau sumber dana aktif.",
      "Konfirmasi transaksi terasa lebih cepat dari flow transfer manual.",
      "Tetap aman dan status muncul real-time di detail pesanan.",
    ],
  },
  card: {
    title: "Mendukung kartu utama untuk tamu lokal maupun internasional",
    points: [
      "Visa dan Mastercard dapat digunakan untuk transaksi online aman.",
      "Cocok untuk traveler yang ingin pembayaran fleksibel lintas negara.",
      "E-voucher langsung disiapkan setelah pembayaran berhasil.",
    ],
  },
};

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="space-y-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <PageHeader
            eyebrow="Pembayaran"
            title="Pilih metode pembayaran"
            description="Menyiapkan checkout yang aman dan cepat untukmu."
            backHref="/booking/review"
          />
          <section className="h-32 animate-pulse rounded-[24px] bg-white/80" />
          <section className="h-56 animate-pulse rounded-[24px] bg-white/80" />
        </main>
      }
    >
      <PaymentPageContent />
    </Suspense>
  );
}

function PaymentPageContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("property") ?? "";
  const property = useMemo(() => getPropertyBySlug(slug) ?? properties[0], [slug]);
  const [selectedMethod, setSelectedMethod] = useState<string>("bca-va");

  const nights = 3;
  const subtotal = property.price * nights;
  const taxes = Math.round(subtotal * 0.1);
  const serviceFee = 50000;
  const total = subtotal + taxes + serviceFee;
  const activeMethod = methodGroups.flatMap((group) => group.items).find((item) => item.id === selectedMethod) ?? methodGroups[0].items[0];
  const activeHint = methodHints[selectedMethod] ?? methodHints["bca-va"];
  const afterConfirming = [
    "Sistem langsung memeriksa pembayaran secara otomatis.",
    "Status booking berubah real-time tanpa refresh manual.",
    "E-voucher aktif dan siap dibuka setelah pembayaran berhasil.",
  ];

  return (
    <main className="space-y-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <PageHeader
        eyebrow="Pembayaran"
        title="Pilih metode yang terasa paling aman"
        description="Total tidak akan berubah di tahap ini. Setelah konfirmasi, voucher akan diterbitkan otomatis bila pembayaran berhasil."
        backHref={`/booking/review?property=${property.slug}`}
        action={
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            3/4
          </span>
        }
      />

      <section className="grid grid-cols-4 gap-2">
        {[
          { label: "Detail", active: false },
          { label: "Review", active: false },
          { label: "Bayar", active: true },
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
            <Image src={property.imageUrl} alt={property.name} fill sizes="96px" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.38)_100%)]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/78">Siap dibayar</p>
                <h2 className="mt-1 line-clamp-2 text-lg font-bold leading-6">{property.name}</h2>
                <p className="mt-1 text-sm text-white/85">{property.location}</p>
              </div>
              <Badge tone="warning">59:00</Badge>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {property.isHiddenGem ? <Badge tone="gold">Hidden Gem</Badge> : null}
              {property.isMuslimFriendly ? <Badge tone="info">Ramah Muslim</Badge> : null}
            </div>

            <p className="mt-2 text-sm text-white/92">{formatDateRange("2026-04-12", "2026-04-15")} · {nights} malam</p>
            <p className="mt-1 text-xs text-white/75">Total yang akan dibayar hari ini</p>
            <p className="text-xl font-bold text-white">{formatCurrency(total)}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.25)] bg-[var(--color-primary-soft)]/45 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <div className="flex items-start gap-3">
          <Clock3 size={18} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
          <div className="w-full">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[var(--color-text)]">Pesanan ditahan sementara</p>
              <span className="text-xs font-semibold text-[var(--color-primary-dark)]">Sesi aman</span>
            </div>
            <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
              Setelah pembayaran berhasil, e-voucher otomatis terbit dan langsung muncul di riwayat pesanan.
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/90">
              <div className="h-full w-3/4 rounded-full bg-[var(--color-primary)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {methodGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title}
              className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]"
            >
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                <Icon size={16} className="text-[var(--color-primary-dark)]" /> {group.title}
              </p>
              <div className="space-y-2">
                {group.items.map((method) => {
                  const isActive = method.id === selectedMethod;

                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id)}
                      className={cn(
                        "flex w-full items-start justify-between gap-3 rounded-[18px] border px-3 py-3 text-left transition-all duration-150",
                        isActive
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] shadow-[0_16px_30px_-24px_rgba(74,171,240,0.7)]"
                          : "border-[var(--color-border)] bg-white hover:border-[rgba(74,171,240,0.35)] hover:bg-[var(--color-primary-soft)]/35",
                      )}
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span className={cn(
                          "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-[10px] font-bold",
                          isActive ? "bg-white text-[var(--color-primary-dark)]" : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]",
                        )}>
                          {method.brand}
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-[var(--color-text)]">{method.label}</p>
                            {method.badge ? <Badge tone={isActive ? "info" : "warning"}>{method.badge}</Badge> : null}
                          </div>
                          <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">{method.note}</p>
                        </div>
                      </div>

                      <span
                        className={cn(
                          "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                          isActive ? "border-[var(--color-primary)] bg-[var(--color-primary)]" : "border-[var(--color-border)] bg-white",
                        )}
                        aria-hidden="true"
                      >
                        {isActive ? <span className="h-2 w-2 rounded-full bg-white" /> : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Ringkasan metode terpilih</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{activeHint.title}</p>
          </div>
          <span className="rounded-full bg-[var(--color-gold-soft)] px-3 py-1 text-[11px] font-semibold text-[#8A5A04]">
            Smooth checkout
          </span>
        </div>

        <div className="mt-3 space-y-2">
          {activeHint.points.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
              <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
              <p className="text-sm text-[var(--color-text-muted)]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="space-y-2">
          <p className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
            Pembayaran diproses aman dan status booking akan muncul real-time di halaman detail pesanan.
          </p>
          <p className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-[var(--color-primary-dark)]" />
            Setelah transaksi berhasil, kamu langsung masuk ke tahap voucher tanpa langkah tambahan yang membingungkan.
          </p>
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.2)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.3)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Apa yang terjadi setelah konfirmasi</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Transisi ke voucher dibuat cepat, aman, dan mudah dipahami.</p>
          </div>
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            Realtime
          </span>
        </div>

        <div className="mt-3 space-y-2">
          {afterConfirming.map((point, index) => (
            <div key={point} className="flex items-start gap-3 rounded-[18px] bg-white px-3 py-3 shadow-[0_12px_28px_-30px_rgba(31,41,55,0.45)]">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[11px] font-bold text-[var(--color-primary-dark)]">
                {index + 1}
              </span>
              <p className="text-sm text-[var(--color-text-muted)]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-10 rounded-[24px] border border-[var(--color-border)] bg-white/95 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.42)] backdrop-blur">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Metode aktif</p>
            <p className="text-sm font-semibold text-[var(--color-text)]">{activeMethod.label}</p>
          </div>
          <p className="text-sm font-bold text-[var(--color-primary-dark)]">{formatCurrency(total)}</p>
        </div>

        <Link href={`/booking/processing?property=${property.slug}`} className={buttonVariants("primary", true)}>
          Konfirmasi pembayaran · {formatCurrency(total)}
        </Link>

        <p className="mt-2 text-center text-[11px] text-[var(--color-text-muted)]">Nominal tetap, status real-time, dan e-voucher aktif otomatis setelah pembayaran berhasil.</p>
      </section>
    </main>
  );
}