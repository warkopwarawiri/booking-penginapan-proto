import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3, MapPin, Ticket } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getPropertyBySlug } from "@/data/mock-data";
import { Booking } from "@/lib/types";
import { formatCurrency, formatDateRange, statusTone } from "@/lib/utils";

interface BookingCardProps {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const property = getPropertyBySlug(booking.propertySlug);

  if (!property) {
    return null;
  }

  const statusNote =
    booking.status === "Dikonfirmasi"
      ? "Voucher siap untuk check-in"
      : booking.status === "Selesai"
        ? "Perjalanan selesai dengan lancar"
        : booking.status === "Dibatalkan"
          ? "Pesanan ini tidak lagi aktif"
          : "Tunggu konfirmasi pembayaran";

  return (
    <Link
      href={`/bookings/${booking.id}`}
      className="group flex items-start gap-3 rounded-[22px] border border-[var(--color-border)] bg-white p-3 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_-34px_rgba(31,41,55,0.5)]"
    >
      <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[18px] border border-[rgba(74,171,240,0.16)] bg-[var(--color-surface-muted)]">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          sizes="92px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.02)_0%,rgba(17,24,39,0.28)_100%)]" />
        {property.isHiddenGem ? (
          <div className="absolute left-2 top-2">
            <Badge tone="gold" className="px-2 py-1 text-[10px]">
              ✦ Gem
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold text-[var(--color-text)]">{property.name}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
              <MapPin size={12} />
              {property.location}
            </p>
          </div>
          <Badge tone={statusTone(booking.status)}>{booking.status}</Badge>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {property.isMuslimFriendly ? <Badge tone="info">🕌 Ramah Muslim</Badge> : null}
          <span className="rounded-full bg-[var(--color-surface-muted)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-text-muted)]">
            {booking.id}
          </span>
        </div>

        <p className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
          <Clock3 size={12} />
          {formatDateRange(booking.checkIn, booking.checkOut)} · {booking.nights} malam
        </p>

        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="flex items-center gap-1 text-[10px] font-medium text-[var(--color-text-muted)]">
              <Ticket size={11} /> {statusNote}
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-primary-dark)]">{formatCurrency(booking.total)}</p>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary-dark)]">
            Detail
            <ChevronRight size={15} className="text-[var(--color-text-muted)] transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
