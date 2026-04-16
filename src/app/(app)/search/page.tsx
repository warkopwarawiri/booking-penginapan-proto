import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MoonStar,
  Search,
  SearchCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { properties } from "@/data/mock-data";
import { destinations } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";

const stayTypes = ["Villa", "Resort", "Hotel", "Homestay"];
const amenities = ["Kolam Renang", "WiFi Cepat", "Sarapan", "Area Keluarga", "Makanan Halal"];
const sortOptions = ["Relevansi", "Harga Termurah", "Rating Tertinggi"];
const featuredSearchPreview =
  properties.find((property) => property.isHiddenGem && property.isMuslimFriendly) ?? properties[0];

export default function SearchPage() {
  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Pencarian & Filter"
        title="Cari stay yang paling pas buat rencana liburanmu."
        description="Destinasi, tanggal, dan preferensi penting kini terasa lebih ringkas dan premium."
      />

      <section className="overflow-hidden rounded-[26px] border border-[rgba(240,183,86,0.34)] bg-white p-2 shadow-[0_22px_50px_-30px_rgba(45,140,199,0.5)]">
        <div className="relative min-h-[180px] overflow-hidden rounded-[22px]">
          <Image
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
            alt="Pemandangan pantai tropis untuk inspirasi pencarian stay"
            fill
            sizes="(max-width: 768px) 92vw, 420px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,111,174,0.88)_0%,rgba(74,171,240,0.72)_52%,rgba(17,24,39,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_32%)]" />

          <div className="relative flex h-full flex-col justify-between p-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <Badge tone="gold">Pilihan akhir pekan</Badge>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm">
                47 hasil siap ditinjau
              </span>
            </div>

            <div>
              <h2 className="max-w-[14rem] text-[22px] font-bold leading-7">
                Bali tetap jadi pencarian paling hangat minggu ini.
              </h2>
              <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/90">
                Villa private, Hidden Gem, dan info ramah Muslim masih jadi kombinasi favorit traveler.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="rounded-full bg-black/20 px-2.5 py-1 backdrop-blur-sm">9 Hidden Gem</span>
              <span className="rounded-full bg-black/20 px-2.5 py-1 backdrop-blur-sm">18 Ramah Muslim</span>
              <span className="rounded-full bg-black/20 px-2.5 py-1 backdrop-blur-sm">Mulai Rp 450 rb</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Detail perjalanan</p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Semua parameter utama terlihat jelas tanpa terasa berat.
            </p>
          </div>
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            3 malam
          </span>
        </div>

        <div className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface-muted)]/50 px-4 py-3">
          <div className="flex items-start gap-3">
            <span className="rounded-full bg-[var(--color-primary-soft)] p-2 text-[var(--color-primary-dark)]">
              <Search size={16} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-[var(--color-text-muted)]">Lokasi / destinasi</p>
              <p className="text-sm font-semibold text-[var(--color-text)]">Bali, Indonesia</p>
              <p className="text-[11px] text-[var(--color-text-muted)]">Area favorit: Ubud, Canggu, dan Uluwatu</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            {destinations.slice(0, 4).map((destination) => (
              <span
                key={destination}
                className={`rounded-full px-3 py-1.5 ${
                  destination === "Bali"
                    ? "bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary-dark)]"
                    : "bg-white text-[var(--color-text-muted)]"
                }`}
              >
                {destination}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[20px] border border-[var(--color-border)] px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <CalendarDays size={14} /> Check-in
            </div>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">12 Apr 2026</p>
          </div>
          <div className="rounded-[20px] border border-[var(--color-border)] px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <CalendarDays size={14} /> Check-out
            </div>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">15 Apr 2026</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-[20px] border border-[var(--color-border)] px-4 py-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <Users size={14} /> Jumlah tamu
            </div>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">2 dewasa · 1 kamar</p>
          </div>
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1.5 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            Siap check-in
          </span>
        </div>
      </section>

      <section className="space-y-4 rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <SlidersHorizontal size={16} /> Preferensi pencarian
            </p>
            <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
              Filter penting dibuat lebih fokus agar decision-making terasa cepat.
            </p>
          </div>
          <button className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            Reset
          </button>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px]">
          {[
            "Hidden Gem",
            "Ramah Muslim",
            "Villa",
            "Sarapan",
          ].map((chip, index) => (
            <span
              key={chip}
              className={`rounded-full px-3 py-1.5 ${
                index < 2
                  ? "bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary-dark)]"
                  : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="rounded-[20px] border border-[rgba(74,171,240,0.35)] bg-[var(--color-primary-soft)]/50 p-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                <MoonStar size={15} className="text-[var(--color-primary-dark)]" /> Informasi ramah Muslim
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
                Info masjid, kuliner halal, dan fasilitas ibadah tampil natural dalam hasil pencarian.
              </p>
            </div>
            <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-[10px] font-bold text-white">
              ON
            </span>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3 text-sm">
            <p className="font-semibold text-[var(--color-text)]">Budget per malam</p>
            <span className="font-semibold text-[var(--color-primary-dark)]">Rp 450 rb – Rp 1,4 jt</span>
          </div>
          <div className="h-2 rounded-full bg-[var(--color-surface-muted)]">
            <div className="h-2 w-[72%] rounded-full bg-[linear-gradient(90deg,#4AABF0_0%,#F0B756_100%)]" />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-[var(--color-text)]">Urutkan hasil</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {sortOptions.map((option, index) => (
              <span
                key={option}
                className={`rounded-full px-3 py-1.5 ${
                  index === 0
                    ? "bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary-dark)]"
                    : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]"
                }`}
              >
                {option}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-[var(--color-text)]">Tipe penginapan</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {stayTypes.map((chip, index) => (
              <span
                key={chip}
                className={`rounded-full px-3 py-1.5 ${
                  index < 2
                    ? "bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary-dark)]"
                    : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-[var(--color-text)]">Fasilitas penting</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {amenities.map((chip, index) => (
              <span
                key={chip}
                className={`rounded-full px-3 py-1.5 ${
                  index === 4
                    ? "bg-[var(--color-gold-soft)] font-semibold text-[#8A5A04]"
                    : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Preview hasil pencarian</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              9 Hidden Gem · 18 stay ramah Muslim · 47 total properti
            </p>
          </div>
          <SearchCheck size={16} className="text-[var(--color-primary-dark)]" />
        </div>

        <Link
          href={`/${featuredSearchPreview.slug}`}
          className="mt-3 block overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#fffdf9_0%,#ffffff_100%)] shadow-[0_18px_40px_-34px_rgba(31,41,55,0.32)]"
        >
          <div className="relative h-32 overflow-hidden">
            <Image
              src={featuredSearchPreview.imageUrl}
              alt={featuredSearchPreview.name}
              fill
              sizes="(max-width: 768px) 92vw, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.45)_100%)]" />
            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
              {featuredSearchPreview.isHiddenGem ? <Badge tone="gold">✦ Hidden Gem</Badge> : null}
              {featuredSearchPreview.isMuslimFriendly ? <Badge tone="info">🕌 Ramah Muslim</Badge> : null}
            </div>
          </div>

          <div className="space-y-2 p-3.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{featuredSearchPreview.name}</h3>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{featuredSearchPreview.location} · {featuredSearchPreview.rating} ★</p>
              </div>
              <ArrowRight size={16} className="shrink-0 text-[var(--color-primary-dark)]" />
            </div>

            <p className="text-xs leading-5 text-[var(--color-text-muted)]">{featuredSearchPreview.shortDescription}</p>

            <div className="flex items-end justify-between gap-3">
              <span className="text-[11px] text-[var(--color-text-muted)]">
                {featuredSearchPreview.highlights.slice(0, 3).join(" • ")}
              </span>
              <div className="text-right">
                <p className="text-sm font-semibold text-[var(--color-primary-dark)]">
                  {formatCurrency(featuredSearchPreview.price)}
                </p>
                <p className="text-[10px] text-[var(--color-text-muted)]">/ malam</p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <div className="space-y-2 pt-1">
        <Link href="/search/results" className={buttonVariants("primary", true)}>
          Tampilkan 47 Properti
        </Link>
        <Link href="/home" className={buttonVariants("secondary", true)}>
          <Sparkles size={16} />
          Kembali ke discovery
        </Link>
      </div>
    </main>
  );
}