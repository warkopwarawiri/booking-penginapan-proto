import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";

export default function LanguagePage() {
  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Pilih Bahasa"
        title="Struktur multi-language siap digunakan"
        description="Bahasa Indonesia aktif, English siap dipilih, dan Arabic disiapkan untuk fase berikutnya."
        backHref="/profile"
      />

      <section className="space-y-2 rounded-[24px] border border-[var(--color-border)] bg-white p-3">
        <div className="flex items-center justify-between rounded-2xl bg-[var(--color-primary-soft)] px-3 py-3 text-sm font-semibold text-[var(--color-primary-dark)]">
          <span>🇮🇩 Bahasa Indonesia</span>
          <Badge tone="info">Aktif</Badge>
        </div>
        <div className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-[var(--color-text)]">
          <span>🇬🇧 English</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-[var(--color-text)]">
          <span>🇸🇦 العربية</span>
          <Badge>Segera Hadir</Badge>
        </div>
      </section>
    </main>
  );
}