"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Share2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

interface VoucherActionsProps {
  bookingId: string;
}

export function VoucherActions({ bookingId }: VoucherActionsProps) {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!message) return;

    const timer = window.setTimeout(() => setMessage(null), 2200);
    return () => window.clearTimeout(timer);
  }, [message]);

  const handleDownload = () => {
    setMessage("Voucher siap disimpan untuk presentasi atau check-in.");
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/bookings/${bookingId}/voucher`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `E-Voucher ${bookingId}`,
          text: "Lihat detail voucher booking ini.",
          url,
        });
        setMessage("Detail voucher berhasil dibagikan.");
        return;
      }

      await navigator.clipboard.writeText(url);
      setMessage("Tautan voucher berhasil disalin.");
    } catch {
      setMessage("Voucher tetap siap ditunjukkan langsung di aplikasi.");
    }
  };

  return (
    <div className="space-y-2">
      {message ? (
        <div className="rounded-[20px] border border-[rgba(74,171,240,0.22)] bg-[var(--color-primary-soft)]/70 px-4 py-3 text-sm text-[var(--color-primary-dark)] shadow-[0_14px_30px_-26px_rgba(74,171,240,0.65)]">
          {message}
        </div>
      ) : null}

      <button type="button" onClick={handleDownload} className={buttonVariants("primary", true)}>
        <Download size={16} />
        Unduh e-voucher
      </button>

      <button type="button" onClick={handleShare} className={buttonVariants("secondary", true)}>
        <Share2 size={16} />
        Bagikan detail
      </button>

      <Link href={`/bookings/${bookingId}`} className={buttonVariants("ghost", true)}>
        Kembali ke detail pesanan
      </Link>
    </div>
  );
}
