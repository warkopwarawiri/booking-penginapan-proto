import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Bell, Compass, Gem, MapPin, MoonStar, ShieldCheck, SlidersHorizontal, Sparkles, WalletCards } from "lucide-react";

import { PropertyCard } from "@/components/properties/property-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { currentUser, properties } from "@/data/mock-data";
import { discoveryDestinations, quickFilters } from "@/lib/constants";
import { cn, formatCurrency } from "@/lib/utils";

const hiddenGems = properties.filter((property) => property.isHiddenGem);
const recommended = properties.slice(0, 3);
const affordable = properties.filter((property) => property.price <= 850000).slice(0, 3);
const heroGem = hiddenGems[0];
const muslimFriendlyCount = properties.filter((property) => property.isMuslimFriendly).length;
const trustHighlights = [
  {
    title: `${hiddenGems.length} Hidden Gem diverifikasi`,
    body: "Dipilih manual oleh tim untuk pengalaman yang terasa lebih spesial",
    icon: Gem,
    accentClass: "bg-[var(--color-gold-soft)] text-[#8A5A04]",
  },
  {
    title: `${muslimFriendlyCount} stay dengan info ibadah`,
    body: "Masjid, kuliner halal, dan arah kiblat tampil langsung saat dibutuhkan",
    icon: MoonStar,
    accentClass: "bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]",
  },
  {
    title: "Voucher terbit instan",
    body: "Begitu bayar, detail check-in langsung siap tanpa langkah tambahan",
    icon: ShieldCheck,
    accentClass: "bg-[var(--color-surface-muted)] text-[var(--color-text)]",
  },
];

const quickDecisionSteps = [
  { label: "Kurasi", value: "Alasan stay jelas" },
  { label: "Ibadah", value: "Info nearby siap" },
  { label: "Checkout", value: "Voucher instan" },
];

function SectionShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={cn(
        "rounded-[24px] border border-[var(--color-border)] bg-white/95 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)] backdrop-blur",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="space-y-5 pb-3">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4AABF0_0%,#2D8CC7_100%)] text-sm font-bold text-white shadow-[0_18px_30px_-20px_rgba(45,140,199,0.9)]">
            AR
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-dark)]">
              Selamat datang kembali
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">{currentUser.name}</p>
            <h1 className="mt-2 text-[1.5rem] font-bold leading-[1.2] text-[var(--color-text)]">
              Temukan stay yang terasa spesial, jelas alasannya, dan cepat dibooking.
            </h1>
            <p className="mt-1.5 text-xs leading-5 text-[var(--color-text-muted)]">
              Hidden Gem, info ramah Muslim, dan booking yang ringan dibuat untuk membantu kamu cepat yakin.
            </p>
          </div>
        </div>
        <Link
          href="/notifications"
          className="relative rounded-full border border-[var(--color-border)] bg-white p-2.5 text-[var(--color-text)] shadow-sm"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
        </Link>
      </header>

      <SectionShell className="overflow-hidden border-[rgba(74,171,240,0.18)] bg-[linear-gradient(135deg,#0F6FAE_0%,#4AABF0_58%,#DDF4FF_100%)] text-white shadow-[0_26px_60px_-30px_rgba(45,140,199,0.85)]">
        <div className="relative overflow-hidden rounded-[20px]">
          {heroGem ? (
            <Image
              src={heroGem.imageUrl}
              alt={heroGem.name}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,111,174,0.92)_0%,rgba(74,171,240,0.84)_58%,rgba(221,244,255,0.55)_100%)]" />
          <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          <Badge tone="gold">Kurasi yang terasa nyata</Badge>
          <h2 className="mt-3 text-[1.45rem] font-bold leading-8">
            Temukan stay yang cantik, jelas alasannya, dan langsung terasa aman untuk dipilih.
          </h2>
          <p className="mt-2 max-w-[290px] text-sm leading-6 text-white/88">
            Hidden Gem, info ramah Muslim, dan alur booking ringan digabung dalam satu pengalaman yang tidak bikin ragu.
          </p>
          {heroGem?.muslimInfo ? (
            <div className="mt-3 rounded-[18px] border border-white/20 bg-black/15 px-3 py-2.5 text-[11px] font-medium text-white/92 backdrop-blur-sm">
              <p className="text-white/70">Kenapa traveler cepat yakin</p>
              <p className="mt-1 leading-5">
                {heroGem.hiddenGemReasons?.[0] ?? "Dipilih manual oleh tim kurasi"} • {heroGem.muslimInfo.prayerPlace} • Voucher langsung aktif
              </p>
            </div>
          ) : null}
          <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
            {quickDecisionSteps.map((item) => (
              <div key={item.label} className="rounded-[16px] bg-white/12 px-2.5 py-2 text-center backdrop-blur-sm">
                <p className="text-white/70">{item.label}</p>
                <p className="mt-1 font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/search/results" className={buttonVariants("secondary")}>
              Lihat Hidden Gem
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Coba pencarian cepat
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-2xl bg-white/12 px-3 py-2 backdrop-blur-sm">
              <p className="text-white/70">Mulai dari</p>
              <p className="mt-1 text-sm font-semibold">{formatCurrency(480000)}</p>
            </div>
            <div className="rounded-2xl bg-white/12 px-3 py-2 backdrop-blur-sm">
              <p className="text-white/70">Booking flow</p>
              <p className="mt-1 text-sm font-semibold">4 langkah ringan</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <div className="sticky top-3 z-10">
        <Link
          href="/search"
          className="flex items-center justify-between rounded-[20px] border border-white/80 bg-white/90 px-4 py-3 text-sm shadow-[0_18px_40px_-34px_rgba(31,41,55,0.45)] backdrop-blur"
        >
          <div>
            <p className="font-semibold text-[var(--color-text)]">Cari stay yang paling pas</p>
            <p className="text-xs text-[var(--color-text-muted)]">Lokasi, tanggal, tamu, lalu lihat pilihan terbaik</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[var(--color-primary-soft)] px-3 py-2 text-[var(--color-primary-dark)]">
            <MapPin size={16} />
            <SlidersHorizontal size={16} />
          </div>
        </Link>
      </div>

      <section className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
        {trustHighlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="min-w-[148px] rounded-[18px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#F9FCFF_0%,#FFFFFF_100%)] px-3 py-3.5"
            >
              <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-full", item.accentClass)}>
                <Icon size={14} />
              </span>
              <p className="mt-2 text-[12px] font-semibold leading-4 text-[var(--color-text)]">{item.title}</p>
              <p className="mt-1 text-[11px] leading-[1.35] text-[var(--color-text-muted)]">{item.body}</p>
            </div>
          );
        })}
      </section>

      <section className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
        {quickFilters.slice(0, 5).map((filter, index) => (
          <span
            key={filter}
            className={cn(
              "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition",
              index === 0
                ? "bg-[var(--color-primary)] text-white shadow-[0_12px_24px_-18px_rgba(45,140,199,0.8)]"
                : filter === "Ramah Muslim"
                  ? "border border-[rgba(74,171,240,0.18)] bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]"
                  : "border border-[var(--color-border)] bg-white text-[var(--color-text-muted)]",
            )}
          >
            {filter}
          </span>
        ))}
      </section>

      <SectionShell>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Destinasi populer minggu ini</p>
            <p className="text-xs text-[var(--color-text-muted)]">Inspirasi destinasi yang sedang banyak dicari traveler minggu ini.</p>
          </div>
          <Compass size={16} className="text-[var(--color-primary-dark)]" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {discoveryDestinations.map((destination) => (
            <div
              key={destination.name}
              className="rounded-[18px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] p-3"
            >
              <p className="text-sm font-semibold text-[var(--color-text)]">{destination.name}</p>
              <p className="mt-1 text-[11px] leading-5 text-[var(--color-text-muted)]">{destination.caption}</p>
              <p className="mt-2 text-[11px] font-semibold text-[var(--color-primary-dark)]">{destination.metric}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="flex items-center gap-1 text-sm font-semibold text-[#8A5A04]">
              <Sparkles size={14} /> Hidden Gem pilihan editor
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              Pilihan unik dengan suasana yang sulit ditemukan di tempat lain.
            </p>
          </div>
          <Link href="/search/results" className="text-xs font-semibold text-[var(--color-primary-dark)]">
            Lihat semua
          </Link>
        </div>

        {heroGem ? (
          <Link
            href={`/${heroGem.slug}`}
            className="block rounded-[24px] border border-[rgba(240,183,86,0.45)] bg-[linear-gradient(135deg,#FFF8EA_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(138,90,4,0.28)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A5A04]">Sorotan minggu ini</p>
                <h3 className="mt-1 text-base font-semibold text-[var(--color-text)]">{heroGem.name}</h3>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {heroGem.location} · {formatCurrency(heroGem.price)} / malam
                </p>
              </div>
              <Badge tone="gold">Paling dicari</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
              {heroGem.hiddenGemReasons?.[0] ?? heroGem.shortDescription}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {heroGem.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[var(--color-text-muted)] shadow-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </Link>
        ) : null}

        <div className="hide-scrollbar flex items-stretch gap-3 overflow-x-auto py-1">
          {hiddenGems.slice(0, 3).map((property) => (
            <div key={property.id} className="flex min-w-[292px] max-w-[292px] self-stretch">
              <PropertyCard property={property} featured />
            </div>
          ))}
        </div>
      </section>

      <SectionShell>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Pilihan mulai 400 ribuan</p>
            <p className="text-xs text-[var(--color-text-muted)]">Pilihan nyaman dengan harga bersahabat untuk liburan singkat.</p>
          </div>
          <WalletCards size={16} className="text-[var(--color-primary-dark)]" />
        </div>
        <div className="mt-3 space-y-2">
          {affordable.map((property) => (
            <Link
              key={property.id}
              href={`/${property.slug}`}
              className="flex items-center justify-between rounded-[18px] border border-[var(--color-border)] px-3 py-3 transition hover:bg-[var(--color-surface-muted)]"
            >
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">{property.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{property.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{formatCurrency(property.price)}</p>
                <p className="text-[10px] text-[var(--color-text-muted)]">/ malam</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>

      <section className="space-y-3">
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">Rekomendasi untukmu</p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Kurasi yang disesuaikan dengan minat dan gaya perjalananmu.
          </p>
        </div>
        <div className="grid gap-3">
          {recommended.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}