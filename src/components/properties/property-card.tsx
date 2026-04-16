import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Sparkles, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Property } from "@/lib/types";
import { cn, formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  return (
    <Link
      href={`/${property.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-white p-3 shadow-[0_18px_40px_-32px_rgba(31,41,55,0.4)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_60px_-36px_rgba(31,41,55,0.55)]",
        featured && "border-[rgba(240,183,86,0.75)] bg-[linear-gradient(180deg,#fffdf7_0%,#ffffff_100%)]",
      )}
    >
      <div
        className={cn(
          "relative min-h-[148px] overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#4AABF0_0%,#BFE5FF_65%,#EAF7FF_100%)] p-3.5 text-white",
          featured && "bg-[linear-gradient(135deg,#9A630A_0%,#E8B452_58%,#F9E7BE_100%)] text-[#4B3214]",
        )}
      >
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 92vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={cn("absolute inset-0", featured ? "bg-[linear-gradient(180deg,rgba(122,83,18,0.18)_0%,rgba(75,50,20,0.48)_100%)]" : "bg-[linear-gradient(180deg,rgba(16,24,40,0.12)_0%,rgba(17,24,39,0.42)_100%)]")} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_42%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {property.isHiddenGem ? <Badge tone="gold">✦ Hidden Gem</Badge> : null}
              {property.isMuslimFriendly ? <Badge tone="info">🕌 Ramah Muslim</Badge> : null}
            </div>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold backdrop-blur",
                featured ? "bg-white/55 text-[#6C4910]" : "bg-white/20 text-white",
              )}
            >
              <Heart size={11} />
              Simpan
            </span>
          </div>

          <div
            className={cn(
              "rounded-[16px] border px-3 py-2.5 backdrop-blur-sm",
              featured ? "border-white/50 bg-white/55" : "border-white/15 bg-white/14",
            )}
          >
            <p className="text-[11px] font-semibold">{property.imageLabel}</p>
            <p className={cn("mt-1 text-[10px]", featured ? "text-[#6B4F26]" : "text-white/80")}>
              {property.highlights.slice(0, 3).join(" • ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col space-y-2.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-h-[40px]">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">{property.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
              <MapPin size={12} />
              {property.location}
            </p>
          </div>
          {property.isHiddenGem ? <Sparkles size={16} className="shrink-0 text-[var(--color-gold)]" /> : null}
        </div>

        <p className="min-h-[48px] text-xs leading-5 text-[var(--color-text-muted)]">{property.shortDescription}</p>

        <div className="mt-auto flex items-end justify-between gap-3">
          <span className="flex items-center gap-1 text-xs font-medium text-[var(--color-text)]">
            <Star size={12} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
            {property.rating} · {property.reviewCount} ulasan
          </span>
          <div className="text-right">
            {property.originalPrice ? (
              <p className="text-[10px] text-[var(--color-text-muted)] line-through">
                {formatCurrency(property.originalPrice)}
              </p>
            ) : null}
            <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{formatCurrency(property.price)}</p>
            <p className="text-[10px] text-[var(--color-text-muted)]">/ malam</p>
          </div>
        </div>
      </div>
    </Link>
  );
}