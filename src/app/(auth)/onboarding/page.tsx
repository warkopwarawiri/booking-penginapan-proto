"use client";

import Link from "next/link";
import { useState, type TouchEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gem,
  MapPinned,
  MoonStar,
  Sparkles,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "01",
    eyebrow: "Mulai lebih mudah",
    title: "Hidden Gem terkurasi dan stay nyaman kini lebih mudah ditemukan",
    body: "Buka rekomendasi yang terasa personal, dengan info penting yang langsung membantu kamu memilih lebih yakin.",
    points: ["9 Hidden Gem pilihan", "18 stay ramah Muslim", "Booking 4 langkah"],
    previewTitle: "Yang langsung terasa",
    previewMeta: "Kurasi tim • Info sekitar • Voucher instan",
    gradient: "from-[#0F6FAE] via-[#4AABF0] to-[#BEE7FF]",
    icon: MapPinned,
  },
  {
    id: "02",
    eyebrow: "Hidden Gem pilihan",
    title: "Jelajahi tempat unik dengan alasan kurasi yang benar-benar jelas",
    body: "Setiap Hidden Gem hadir dengan cerita singkat, suasana tempat, dan detail yang membuat pilihan terasa lebih meyakinkan.",
    points: ["Dipilih tim internal", "Alasan stay ditampilkan", "Visual terasa premium"],
    previewTitle: "Unggulan minggu ini",
    previewMeta: "View sawah • Masjid 350m • Rating 4.9",
    gradient: "from-[#7A5A17] via-[#D9A441] to-[#FFF1C9]",
    icon: Gem,
  },
  {
    id: "03",
    eyebrow: "Perjalanan lebih nyaman",
    title: "Info ramah Muslim bukan tempelan, tapi benar-benar membantu",
    body: "Arah kiblat, kuliner halal, dan tempat ibadah terdekat ditampilkan natural tanpa membuat pengalaman terasa rumit.",
    points: ["Masjid & halal nearby", "Arah kiblat tersedia", "Lebih tenang saat check-in"],
    previewTitle: "Proof di tiap listing",
    previewMeta: "Masjid 350m • Halal food 200m • Wudhu tersedia",
    gradient: "from-[#166B68] via-[#2BAAA4] to-[#CFF8F4]",
    icon: MoonStar,
  },
];

export default function OnboardingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goToPrevious = () => setActiveIndex((current) => Math.max(current - 1, 0));
  const goToNext = () => setActiveIndex((current) => Math.min(current + 1, slides.length - 1));

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 36) goToNext();
    if (swipeDistance < -36) goToPrevious();

    setTouchStartX(null);
  };

  const activeSlide = slides[activeIndex];
  const isLastSlide = activeIndex === slides.length - 1;
  const Icon = activeSlide.icon;

  return (
    <main className="flex min-h-[calc(100dvh-2rem)] flex-col justify-between gap-4 pb-3">
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)] shadow-sm">
            <Sparkles size={12} />
            {activeSlide.id} / 03
          </div>
          <Link href="/login" className="text-xs font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-primary-dark)]">
            Lewati
          </Link>
        </div>

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={cn(
            "touch-pan-y overflow-hidden rounded-[30px] bg-gradient-to-br p-[1px] shadow-[0_24px_60px_-32px_rgba(45,140,199,0.55)]",
            activeSlide.gradient,
          )}
        >
          <div className="rounded-[29px] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] p-5 text-white backdrop-blur-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">Safara Stay</p>
                <p className="mt-2 inline-flex rounded-full bg-white/14 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm">
                  {activeSlide.eyebrow}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-sm">
                <Icon size={22} />
              </div>
            </div>

            <h1 className="mt-4 text-[1.9rem] font-bold leading-[1.08] tracking-tight">{activeSlide.title}</h1>
            <p className="mt-3 text-sm leading-6 text-white/86">{activeSlide.body}</p>

            <div className="mt-4 space-y-2">
              {activeSlide.points.map((point) => (
                <div key={point} className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-sm backdrop-blur-sm">
                  <CheckCircle2 size={15} className="shrink-0 text-white" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[22px] border border-white/15 bg-[rgba(255,255,255,0.1)] p-3 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">{activeSlide.previewTitle}</p>
              <div className="mt-2 rounded-2xl bg-white/14 px-3 py-2.5 text-sm font-medium text-white">
                {activeSlide.previewMeta}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Buka slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-200",
                  index === activeIndex ? "w-7 bg-[var(--color-primary)]" : "w-2.5 bg-[rgba(74,171,240,0.24)]",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              disabled={isLastSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(74,171,240,0.2)] bg-[var(--color-primary)] text-white transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <p className="text-center text-[11px] text-[var(--color-text-muted)]">
          {isLastSlide ? "Akun siap dibuat dan pilihan penginapan tetap tersimpan." : "Geser kartu atau tap tombol untuk lanjut."}
        </p>

        {isLastSlide ? (
          <>
            <Link href="/register" className={buttonVariants("primary", true)}>
              Daftar gratis
              <ArrowRight size={16} />
            </Link>
            <Link href="/login" className={buttonVariants("secondary", true)}>
              Saya sudah punya akun
            </Link>
          </>
        ) : (
          <button
            type="button"
            onClick={goToNext}
            className={buttonVariants("primary", true)}
          >
            Selanjutnya
            <ArrowRight size={16} />
          </button>
        )}

        {/* <div className="rounded-[20px] border border-[var(--color-border)] bg-white/90 px-4 py-3 text-center shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
          <p className="text-xs font-semibold text-[var(--color-text)]">Lanjut booking tanpa mengulang dari awal</p>
          <p className="mt-1 text-[11px] leading-5 text-[var(--color-text-muted)]">
            Setelah daftar atau masuk, pilihan penginapanmu tetap tersimpan dan siap dilanjutkan.
          </p>
        </div> */}
      </section>
    </main>
  );
}