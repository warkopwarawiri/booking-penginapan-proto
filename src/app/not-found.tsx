import Image from "next/image";
import Link from "next/link";
import { Compass, Home, ReceiptText, SearchX, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MobileFrame } from "@/components/ui/mobile-frame";
import { properties } from "@/data/mock-data";
import { cn, formatCurrency } from "@/lib/utils";

const spotlight = properties.find((property) => property.isHiddenGem) ?? properties[0];

const quickActions = [
  {
    href: "/home",
    label: "Kembali ke beranda",
    detail: "Lanjutkan jelajah rekomendasi terbaru",
    icon: Home,
    accentClass: "bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]",
  },
  {
    href: "/search",
    label: "Cari penginapan lain",
    detail: "Buka pencarian dan filter favoritmu",
    icon: Compass,
    accentClass: "bg-[var(--color-gold-soft)] text-[#8A5A04]",
  },
  {
    href: "/bookings",
    label: "Cek pesanan aktif",
    detail: "Pastikan booking dan voucher tetap aman",
    icon: ReceiptText,
    accentClass: "bg-[var(--color-surface-muted)] text-[var(--color-text)]",
  },
];

export default function NotFound() {
  return (
    <MobileFrame>
      <main className="relative flex min-h-dvh flex-col overflow-hidden bg-[linear-gradient(180deg,#F5FBFF_0%,#FFFFFF_18%)]">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(74,171,240,0.22),transparent_72%)]" />

        <div className="relative flex-1 overflow-y-auto px-4 pb-6 pt-4">
          <div className="mx-auto flex max-w-md flex-col gap-4">
            <section className="overflow-hidden rounded-[28px] border border-[rgba(74,171,240,0.16)] bg-white shadow-[0_24px_60px_-34px_rgba(31,41,55,0.35)]">
              <div className="relative min-h-[250px]">
                <Image
                  src={spotlight.imageUrl}
                  alt={spotlight.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 430px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,89,138,0.05)_0%,rgba(14,89,138,0.58)_48%,rgba(14,89,138,0.88)_100%)]" />

                <div className="relative flex min-h-[250px] flex-col justify-between p-4 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <Badge tone="gold">Safara Stay</Badge>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold backdrop-blur">
                      404
                    </span>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur">
                      <SearchX size={13} />
                      Halaman tidak ditemukan
                    </span>
                    <h1 className="mt-3 text-[1.7rem] font-bold leading-[1.2] text-white">
                      Rute ini belum tersedia, tapi perjalananmu tetap bisa lanjut.
                    </h1>
                    <p className="mt-2 max-w-[300px] text-sm leading-6 text-white/82">
                      Halaman yang kamu cari mungkin sudah dipindahkan. Tenang, kami siapkan jalan cepat ke bagian yang paling berguna.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[24px] border border-[var(--color-border)] bg-white/95 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)] backdrop-blur">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">Lanjut tanpa bingung</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
                    Kami arahkan ke tujuan yang paling sering dibutuhkan setelah halaman seperti ini muncul.
                  </p>
                </div>
                <Sparkles size={16} className="mt-0.5 text-[var(--color-primary-dark)]" />
              </div>

              <div className="mt-3 space-y-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#FCFEFF_0%,#FFFFFF_100%)] px-3 py-3 transition hover:border-[rgba(74,171,240,0.28)] hover:bg-[var(--color-primary-soft)]/30"
                    >
                      <span className={cn("inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full", action.accentClass)}>
                        <Icon size={16} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-[var(--color-text)]">{action.label}</span>
                        <span className="mt-0.5 block text-xs text-[var(--color-text-muted)]">{action.detail}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <Link href="/home" className={buttonVariants("primary", true)}>
                  Kembali ke Beranda
                </Link>
                <Link href={`/${spotlight.slug}`} className={buttonVariants("secondary", true)}>
                  Lihat Hidden Gem Pilihan
                </Link>
              </div>
            </section>

            <section className="rounded-[24px] border border-[rgba(240,183,86,0.36)] bg-[linear-gradient(135deg,#FFF8EA_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(138,90,4,0.24)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A5A04]">Inspirasi cepat</p>
                  <h2 className="mt-1 text-base font-semibold text-[var(--color-text)]">{spotlight.name}</h2>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{spotlight.location}</p>
                </div>
                <Badge tone="gold">Hidden Gem</Badge>
              </div>

              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{spotlight.shortDescription}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)] shadow-sm">
                  {formatCurrency(spotlight.price)} / malam
                </span>
                {spotlight.highlights.slice(0, 2).map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[rgba(240,183,86,0.35)] bg-white/80 px-3 py-1 text-[11px] font-medium text-[var(--color-text-muted)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </MobileFrame>
  );
}