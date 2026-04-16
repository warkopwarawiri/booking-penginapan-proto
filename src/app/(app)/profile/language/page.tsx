import { Globe2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";

const languageCards = [
  {
    label: "🇮🇩 Bahasa Indonesia",
    tone: "active",
    sample: "Pesan Sekarang",
    note: "Bahasa utama untuk demo saat ini.",
  },
  {
    label: "🇬🇧 English",
    tone: "ready",
    sample: "Book Now",
    note: "Siap untuk audience global.",
  },
  {
    label: "🇸🇦 العربية",
    tone: "soon",
    sample: "احجز الآن",
    note: "Disiapkan untuk fase RTL berikutnya.",
  },
] as const;

export default function LanguagePage() {
  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Pilih Bahasa"
        title="Struktur multi-language siap digunakan"
        description="Bahasa Indonesia aktif, English siap dipilih, dan Arabic disiapkan untuk fase berikutnya."
        backHref="/profile"
      />

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.2)] bg-[linear-gradient(135deg,#0F6FAE_0%,#4AABF0_60%,#EAF8FF_100%)] p-4 text-white shadow-[0_22px_50px_-30px_rgba(45,140,199,0.75)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/78">Global-ready experience</p>
            <h2 className="mt-1 text-lg font-bold">Satu fondasi untuk audiens lokal dan internasional.</h2>
            <p className="mt-1 text-sm leading-6 text-white/85">
              Bahasa aktif, preview English, dan arah RTL sudah diposisikan agar visi produk terasa lebih besar.
            </p>
          </div>
          <span className="rounded-full bg-white/14 p-2.5 text-white">
            <Globe2 size={18} />
          </span>
        </div>
      </section>

      <section className="space-y-2 rounded-[24px] border border-[var(--color-border)] bg-white p-3 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.3)]">
        {languageCards.map((language) => (
          <div
            key={language.label}
            className={`rounded-[18px] px-3 py-3 ${
              language.tone === "active"
                ? "bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]"
                : "border border-[var(--color-border)] bg-white text-[var(--color-text)]"
            }`}
          >
            <div className="flex items-center justify-between gap-3 text-sm font-semibold">
              <span>{language.label}</span>
              {language.tone === "active" ? (
                <Badge tone="info">Aktif</Badge>
              ) : language.tone === "soon" ? (
                <Badge>Segera Hadir</Badge>
              ) : (
                <Badge tone="gold">Ready</Badge>
              )}
            </div>
            <p className="mt-2 text-lg font-bold">{language.sample}</p>
            <p className="mt-1 text-xs leading-5 opacity-80">{language.note}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[24px] border border-[rgba(240,183,86,0.45)] bg-[linear-gradient(180deg,#FFF8EA_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(138,90,4,0.24)]">
        <div className="flex items-start gap-3">
          <span className="rounded-full bg-[var(--color-gold-soft)] p-2 text-[#8A5A04]">
            <Sparkles size={16} />
          </span>
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Cerita produk terasa lebih luas</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
              Preview bahasa ini membantu menunjukkan bahwa platform siap tumbuh dari traveler Indonesia ke pasar regional yang lebih luas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}