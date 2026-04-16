import Link from "next/link";
import { Bell, Tag, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { notifications } from "@/data/mock-data";

const icons = {
  booking: Wallet,
  promo: Tag,
  system: Bell,
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter((item) => item.unread).length;

  if (!notifications.length) {
    return (
      <main className="space-y-4">
        <PageHeader
          eyebrow="Notifikasi"
          title="Belum ada notifikasi baru"
          description="Update booking, promo, dan status pembayaran akan muncul di sini."
          backHref="/home"
        />
        <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 text-center shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">
            Update booking, promo, dan status pembayaran akan muncul di sini.
          </p>
          <Link href="/home" className={`${buttonVariants("primary", true)} mt-4`}>
            Kembali ke beranda
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Notifikasi"
        title="Update booking dan promo"
        description="Semua kabar penting tentang pesanan, promo, dan pengingat perjalanan tersusun di sini."
        backHref="/home"
      />

      <section className="rounded-[24px] border border-[rgba(74,171,240,0.25)] bg-[var(--color-primary-soft)]/45 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Ringkasan hari ini</p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{unreadCount} notifikasi belum dibaca dari booking dan promo terbaru.</p>
          </div>
          <Badge tone="info">{unreadCount} baru</Badge>
        </div>
      </section>

      <div className="space-y-3">
        {notifications.map((item) => {
          const Icon = icons[item.type];

          return (
            <div
              key={item.id}
              className={`rounded-[20px] border p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.3)] ${
                item.unread
                  ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)]/50"
                  : "border-[var(--color-border)] bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white p-2 text-[var(--color-primary-dark)]">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--color-text)]">{item.title}</p>
                    {item.unread ? <Badge tone="info">Baru</Badge> : null}
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.body}</p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-xs text-[var(--color-text-muted)]">{item.time}</p>
                    <div className="flex gap-2 text-[11px] font-semibold">
                      <span className="rounded-full bg-white px-2.5 py-1 text-[var(--color-primary-dark)]">Tandai dibaca</span>
                      <span className="rounded-full bg-white px-2.5 py-1 text-[var(--color-text)]">Lihat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}