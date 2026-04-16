import Link from "next/link";
import { CalendarDays, Sparkles, Ticket } from "lucide-react";

import { BookingCard } from "@/components/bookings/booking-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { bookings, getPropertyBySlug } from "@/data/mock-data";
import { formatDateRange, statusTone } from "@/lib/utils";

type BookingTab = "all" | "active" | "completed" | "cancelled";

const tabs: Array<{ label: string; value: BookingTab }> = [
  { label: "Semua", value: "all" },
  { label: "Aktif", value: "active" },
  { label: "Selesai", value: "completed" },
  { label: "Dibatalkan", value: "cancelled" },
];

export default async function BookingsPage({
  searchParams,
}: {
  searchParams?: Promise<{ tab?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const currentTab: BookingTab = tabs.some((tab) => tab.value === resolvedSearchParams?.tab)
    ? (resolvedSearchParams?.tab as BookingTab)
    : "all";

  const activeBookings = bookings.filter((booking) => booking.status !== "Selesai" && booking.status !== "Dibatalkan");
  const completedBookings = bookings.filter((booking) => booking.status === "Selesai");
  const cancelledBookings = bookings.filter((booking) => booking.status === "Dibatalkan");
  const voucherReadyCount = bookings.filter(
    (booking) => booking.status === "Dikonfirmasi" || booking.status === "Check-in" || booking.status === "Selesai",
  ).length;

  const spotlight = activeBookings[0] ?? bookings[0];
  const spotlightProperty = spotlight ? getPropertyBySlug(spotlight.propertySlug) : null;

  if (!bookings.length) {
    return (
      <main className="space-y-4">
        <PageHeader
          eyebrow="Pesanan Saya"
          title="Belum ada pesanan"
          description="Mulai cari stay favoritmu dan semua timeline booking akan muncul rapi di sini."
        />
        <section className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 text-center shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">
            Jelajahi Hidden Gem atau stay ramah Muslim untuk mulai perjalanan pertamamu.
          </p>
          <Link href="/home" className={`${buttonVariants("primary", true)} mt-4`}>
            Mulai eksplorasi
          </Link>
        </section>
      </main>
    );
  }

  const filteredBookings =
    currentTab === "active"
      ? activeBookings
      : currentTab === "completed"
        ? completedBookings
        : currentTab === "cancelled"
          ? cancelledBookings
          : bookings;

  const tabCounts: Record<BookingTab, number> = {
    all: bookings.length,
    active: activeBookings.length,
    completed: completedBookings.length,
    cancelled: cancelledBookings.length,
  };

  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Pesanan Saya"
        title="Riwayat dan status perjalananmu"
        description="Pantau booking aktif, voucher, dan progress check-in dalam satu tampilan yang terasa lebih premium dan rapi."
      />

      <section className="overflow-hidden rounded-[24px] border border-[rgba(74,171,240,0.22)] bg-[linear-gradient(135deg,#0F6FAE_0%,#4AABF0_58%,#EAF8FF_100%)] p-4 text-white shadow-[0_22px_50px_-30px_rgba(45,140,199,0.8)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Ringkasan perjalanan</p>
            <h2 className="mt-2 text-lg font-bold">Satu dashboard untuk semua rencana stay.</h2>
            <p className="mt-1 max-w-[15rem] text-xs leading-5 text-white/82">
              Booking aktif, voucher siap pakai, dan riwayat perjalanan tersusun dalam satu layar.
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5 backdrop-blur">
            <p className="text-white/70">Aktif</p>
            <p className="mt-1 text-sm font-bold">{activeBookings.length}</p>
          </div>
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5 backdrop-blur">
            <p className="text-white/70">Selesai</p>
            <p className="mt-1 text-sm font-bold">{completedBookings.length}</p>
          </div>
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5 backdrop-blur">
            <p className="text-white/70">Voucher siap</p>
            <p className="mt-1 text-sm font-bold">{voucherReadyCount}</p>
          </div>
        </div>
      </section>

      {spotlight && spotlightProperty ? (
        <section className="rounded-[24px] border border-[rgba(240,183,86,0.42)] bg-[linear-gradient(180deg,#FFF9EC_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="flex items-center gap-1 text-sm font-semibold text-[#8A5A04]">
                <Sparkles size={14} /> Trip terdekat
              </p>
              <h2 className="mt-1 text-base font-bold text-[var(--color-text)]">{spotlightProperty.name}</h2>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                {formatDateRange(spotlight.checkIn, spotlight.checkOut)} · {spotlight.guests} tamu
              </p>
            </div>
            <Badge tone={statusTone(spotlight.status)}>{spotlight.status}</Badge>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[var(--color-text-muted)] shadow-[0_12px_24px_-24px_rgba(31,41,55,0.35)]">
              <CalendarDays size={12} /> {spotlight.nights} malam sudah terjadwal
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[var(--color-text-muted)] shadow-[0_12px_24px_-24px_rgba(31,41,55,0.35)]">
              <Ticket size={12} /> Voucher siap ditunjukkan saat check-in
            </span>
          </div>

          <div className="mt-3 flex gap-2">
            <Link href={`/bookings/${spotlight.id}`} className={buttonVariants("secondary")}>
              Buka detail
            </Link>
            <Link href={`/bookings/${spotlight.id}/voucher`} className={buttonVariants("ghost")}>
              Lihat voucher
            </Link>
          </div>
        </section>
      ) : null}

      <div className="flex gap-2 overflow-x-auto pb-1 text-xs hide-scrollbar">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.value;

          return (
            <Link
              key={tab.value}
              href={tab.value === "all" ? "/bookings" : `/bookings?tab=${tab.value}`}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-150 ${
                isActive
                  ? "bg-[var(--color-primary)] text-white shadow-[0_16px_30px_-24px_rgba(74,171,240,0.9)]"
                  : "border border-[var(--color-border)] bg-white text-[var(--color-text-muted)]"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${isActive ? "bg-white/20" : "bg-[var(--color-surface-muted)]"}`}>
                {tabCounts[tab.value]}
              </span>
            </Link>
          );
        })}
      </div>

      <section className="rounded-[20px] border border-[rgba(74,171,240,0.14)] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FCFF_100%)] px-4 py-3 shadow-[0_14px_30px_-30px_rgba(31,41,55,0.4)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-dark)]">
              {currentTab === "all"
                ? "Semua perjalanan"
                : currentTab === "active"
                  ? "Booking aktif"
                  : currentTab === "completed"
                    ? "Riwayat selesai"
                    : "Booking dibatalkan"}
            </p>
            <h2 className="mt-1 text-base font-bold text-[var(--color-text)]">{filteredBookings.length} pesanan tersusun rapi</h2>
          </div>
          <span className="rounded-full bg-[var(--color-primary-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary-dark)]">
            Live status
          </span>
        </div>
      </section>

      {filteredBookings.length ? (
        <section className="grid gap-3">
          {filteredBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </section>
      ) : (
        <section className="rounded-[24px] border border-dashed border-[var(--color-border)] bg-white px-4 py-6 text-center shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
          <p className="text-sm font-semibold text-[var(--color-text)]">Belum ada pesanan di kategori ini</p>
          <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
            Coba lihat semua perjalanan agar voucher dan status booking tetap mudah dipantau.
          </p>
          <Link href="/bookings" className={`${buttonVariants("secondary")} mt-3`}>
            Lihat semua pesanan
          </Link>
        </section>
      )}
    </main>
  );
}