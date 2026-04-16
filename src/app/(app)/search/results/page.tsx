import Image from "next/image";
import Link from "next/link";
import { ArrowUpDown, MoonStar, ShieldCheck, Sparkles, Wallet } from "lucide-react";

import { PropertyCard } from "@/components/properties/property-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { properties } from "@/data/mock-data";
import { formatCurrency } from "@/lib/utils";

const featuredProperty = properties.find((property) => property.isHiddenGem) ?? properties[0];
const orderedProperties = [...properties].sort(
  (left, right) => Number(Boolean(right.isHiddenGem)) - Number(Boolean(left.isHiddenGem)),
);
const muslimFriendlyProperty = orderedProperties.find((property) => property.isMuslimFriendly) ?? orderedProperties[0];
const budgetProperty = [...orderedProperties].sort((left, right) => left.price - right.price)[0];
const compareSpotlights = [
  {
    title: "Paling unik",
    property: featuredProperty,
    note: featuredProperty.hiddenGemReasons?.[0] ?? "Kurasi manual oleh tim kami",
    icon: Sparkles,
    accentClass: "bg-[var(--color-gold-soft)] text-[#8A5A04]",
  },
  {
    title: "Info ibadah paling siap",
    property: muslimFriendlyProperty,
    note: muslimFriendlyProperty.muslimInfo?.prayerPlace ?? "Masjid dan kuliner halal nearby",
    icon: MoonStar,
    accentClass: "bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]",
  },
  {
    title: "Budget paling aman",
    property: budgetProperty,
    note: `Mulai ${formatCurrency(budgetProperty.price)} per malam`,
    icon: Wallet,
    accentClass: "bg-[var(--color-surface-muted)] text-[var(--color-text)]",
  },
];

export default function SearchResultsPage() {
  if (!orderedProperties.length) {
    return (
      <main className="space-y-4">
        <PageHeader
          eyebrow="Hasil Pencarian"
          title="Belum ada hasil yang cocok"
          backHref="/search"
        />
        <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 text-center shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">
            Coba ubah tanggal, budget, atau tipe stay untuk melihat rekomendasi lain.
          </p>
          <Link href="/search" className={`${buttonVariants("primary", true)} mt-4`}>
            Ubah Filter
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Hasil Pencarian"
        title="Bali · 12–15 Apr · 2 tamu"
        description="Temukan Hidden Gem dan stay ramah Muslim yang sesuai dengan rencana perjalananmu."
        backHref="/search"
      />

      <div className="sticky top-3 z-10 space-y-3 rounded-[24px] border border-white/80 bg-white/95 p-3 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.45)] backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Ringkasan pencarian</p>
            <p className="text-sm font-semibold text-[var(--color-text)]">Villa private · info ibadah terverifikasi</p>
          </div>
          <Link href="/search" className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1.5 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            Ubah
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "Ramah Muslim ×",
            "Villa ×",
            "Cancel fleksibel ×",
          ].map((chip, index) => (
            <span
              key={chip}
              className={`rounded-full px-3 py-1.5 ${
                index === 0
                  ? "bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary-dark)]"
                  : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <section className="overflow-hidden rounded-[24px] border border-[rgba(240,183,86,0.42)] bg-[linear-gradient(180deg,#FFF9EC_0%,#FFFFFF_100%)] p-3 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <div className="relative h-36 overflow-hidden rounded-[18px]">
          <Image
            src={featuredProperty.imageUrl}
            alt={featuredProperty.name}
            fill
            sizes="(max-width: 768px) 92vw, 420px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.05)_0%,rgba(17,24,39,0.48)_100%)]" />
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <Badge tone="gold">✦ Hidden Gem</Badge>
            <span className="rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
              Pilihan editor
            </span>
          </div>
        </div>

        <div className="p-1 pt-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="flex items-center gap-1 text-sm font-semibold text-[#8A5A04]">
                <Sparkles size={14} /> Highlight stay minggu ini
              </p>
              <h2 className="mt-1 text-lg font-bold text-[var(--color-text)]">{featuredProperty.name}</h2>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{formatCurrency(featuredProperty.price)}</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">/ malam</p>
            </div>
          </div>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{featuredProperty.shortDescription}</p>
          <Link href={`/${featuredProperty.slug}`} className={`${buttonVariants("secondary")} mt-3`}>
            Lihat Highlight Stay
          </Link>
        </div>
      </section>

      <section className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">47 stay ditemukan</p>
          <p className="text-xs text-[var(--color-text-muted)]">9 Hidden Gem dan 18 properti dengan info ramah Muslim.</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-2 text-[11px] font-semibold text-[var(--color-text)]">
          <ArrowUpDown size={13} /> Paling relevan
        </span>
      </section>

      <section className="rounded-[22px] border border-[rgba(74,171,240,0.16)] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FCFF_100%)] p-3 shadow-[0_14px_32px_-30px_rgba(31,41,55,0.4)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Bandingkan cepat dalam 5 detik</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              Lihat pemenang untuk keunikan, kesiapan info ibadah, dan budget sebelum membuka detail.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary-dark)]">
            <ShieldCheck size={12} /> Kurasi aktif
          </span>
        </div>

        <div className="mt-3 grid gap-2">
          {compareSpotlights.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={`/${item.property.slug}`}
                className="flex items-start justify-between gap-3 rounded-[18px] border border-[var(--color-border)] bg-white px-3 py-3 transition hover:bg-[var(--color-surface-muted)]"
              >
                <div className="flex items-start gap-3">
                  <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.accentClass}`}>
                    <Icon size={15} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{item.title}</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">{item.property.name}</p>
                    <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">{item.note}</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[var(--color-primary-dark)]">Lihat</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-3">
        {orderedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} featured={property.isHiddenGem} />
        ))}
      </section>
    </main>
  );
}