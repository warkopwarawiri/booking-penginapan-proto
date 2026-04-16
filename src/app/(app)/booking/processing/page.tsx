import Link from "next/link";
import { Copy, LoaderCircle, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { getPropertyBySlug, properties } from "@/data/mock-data";

const progressSteps = [
  { label: "Metode dipilih", state: "done" },
  { label: "Pembayaran diverifikasi", state: "active" },
  { label: "Voucher diterbitkan", state: "upcoming" },
] as const;

export default async function ProcessingPage({
  searchParams,
}: {
  searchParams: Promise<{ property?: string }>;
}) {
  const { property: slug } = await searchParams;
  const property = getPropertyBySlug(slug ?? "") ?? properties[0];

  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Menunggu Konfirmasi"
        title="Pembayaran sedang diproses"
        description={`Sistem sedang menyiapkan konfirmasi untuk ${property.name} dan akan menerbitkan e-voucher setelah valid.`}
        backHref={`/booking/payment?property=${property.slug}`}
      />

      <section className="flex flex-col items-center gap-3 pt-2 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
          <LoaderCircle size={28} className="animate-spin" />
        </div>
        <Badge tone="warning">Menunggu verifikasi bank</Badge>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <h2 className="text-base font-semibold text-[var(--color-text)]">Status progres</h2>
        <div className="mt-4 space-y-3">
          {progressSteps.map((step) => (
            <div key={step.label} className="flex items-center gap-3">
              <span
                className={`h-3 w-3 rounded-full ${
                  step.state === "done"
                    ? "bg-[var(--color-success)]"
                    : step.state === "active"
                      ? "bg-[var(--color-primary)]"
                      : "bg-[var(--color-border)]"
                }`}
              />
              <p className="text-sm text-[var(--color-text-muted)]">{step.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.25)] bg-[var(--color-primary-soft)]/45 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Nomor virtual account</p>
            <p className="mt-1 text-lg font-bold text-[var(--color-text)]">8808 2211 4500 9912</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[var(--color-primary-dark)]">
            <Copy size={12} /> Copy
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
          Status akan diperbarui otomatis begitu pembayaran terverifikasi oleh bank.
        </p>
      </section>

      <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
        <p className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
          Status pembayaran dan voucher tetap bisa dicek kapan saja dari halaman riwayat pesanan.
        </p>
      </section>

      <div className="space-y-2">
        <Link href="/booking/success" className={buttonVariants("primary", true)}>
          Lihat status berhasil
        </Link>
        <Link href="/booking/failed" className={buttonVariants("secondary", true)}>
          Lihat jika ada kendala
        </Link>
      </div>
    </main>
  );
}