import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Bookmark,
  ChevronLeft,
  Clock3,
  Compass,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getPropertyBySlug } from "@/data/mock-data";
import { cn, formatCurrency } from "@/lib/utils";

function DetailSection({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.35)]",
        className,
      )}
    >
      <h2 className="text-base font-semibold text-[var(--color-text)]">{title}</h2>
      {description ? <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">{description}</p> : null}
      <div className="mt-3">{children}</div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FCFF_100%)] p-3 shadow-[0_12px_24px_-28px_rgba(31,41,55,0.45)]">
      <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
        {icon}
      </span>
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{label}</p>
      <p className="mt-1 text-xs font-semibold leading-5 text-[var(--color-text)]">{value}</p>
    </div>
  );
}

const propertyExperience: Record<
  string,
  {
    gallery: string[];
    nearbyPoint: string;
    mapNote: string;
    checkIn: string;
    checkOut: string;
    cancellation: string;
    rules: string[];
  }
> = {
  "villa-padi-ubud": {
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    ],
    nearbyPoint: "12 menit ke pusat Ubud · akses mobil mudah",
    mapNote: "Dekat area sawah, cafe lokal, dan spot sunrise yang sering direkomendasikan traveler.",
    checkIn: "14.00 WIB",
    checkOut: "12.00 WIB",
    cancellation: "Gratis sampai H-1 sebelum check-in",
    rules: [
      "Area kamar non-smoking agar suasana tetap segar dan nyaman.",
      "Maksimal 4 tamu per unit sesuai kapasitas stay.",
      "Mohon menjaga ketenangan setelah pukul 22.00 WIB.",
    ],
  },
  "langit-batu-malang": {
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    ],
    nearbyPoint: "8 menit ke pusat Batu · udara pegunungan sejuk",
    mapNote: "Ideal untuk short escape, dekat wisata keluarga, kafe hangat, dan area jalan pagi.",
    checkIn: "14.00 WIB",
    checkOut: "12.00 WIB",
    cancellation: "Reschedule fleksibel untuk tanggal terdekat",
    rules: [
      "Tamu keluarga dan pasangan diprioritaskan untuk menjaga kenyamanan area.",
      "Jam tenang dimulai pukul 22.00 WIB.",
      "Parkir tersedia dekat lobby cottage.",
    ],
  },
};

const propertyTestimonials: Record<string, Array<{ name: string; context: string; quote: string }>> = {
  "villa-padi-ubud": [
    {
      name: "Alya · Jakarta",
      context: "Short healing trip",
      quote: "Sesuai foto, suasananya tenang, dan check-in terasa sangat mudah.",
    },
    {
      name: "Nadia · Surabaya",
      context: "Muslim-friendly stay",
      quote: "Info masjid dan kuliner halal di sekitar benar-benar membantu saat tiba.",
    },
  ],
  "samudra-haven-lombok": [
    {
      name: "Rafi · Bandung",
      context: "Weekend escape",
      quote: "Sunset-nya cantik dan suasananya jauh lebih tenang dari area ramai.",
    },
    {
      name: "Sinta · Bali",
      context: "Anniversary trip",
      quote: "Properti terasa rapi, premium, dan cocok untuk short escape yang santai.",
    },
  ],
  "teras-senja-yogya": [
    {
      name: "Hana · Semarang",
      context: "2 malam city stay",
      quote: "Lokasinya strategis dan detail stay-nya jelas sejak sebelum datang.",
    },
    {
      name: "Reno · Solo",
      context: "Kuliner trip",
      quote: "Pilihan pas untuk trip singkat yang nyaman dan tidak ribet.",
    },
  ],
};

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const experience = propertyExperience[property.slug] ?? {
    gallery: [property.imageUrl],
    nearbyPoint: `Akses mudah di area ${property.location}`,
    mapNote: "Lokasi strategis dengan akses yang nyaman untuk check-in dan eksplorasi singkat.",
    checkIn: "14.00 WIB",
    checkOut: "12.00 WIB",
    cancellation: "Kebijakan fleksibel sesuai ketersediaan",
    rules: [
      "Mohon menjaga kenyamanan tamu lain selama menginap.",
      `Maksimal ${property.maxGuests} tamu per pemesanan.`,
      "Ikuti instruksi check-in yang tertera pada voucher digital.",
    ],
  };

  const gallery = Array.from(new Set([property.imageUrl, ...experience.gallery]));
  const trustHighlights = [
    { label: "Akurasi lokasi", value: property.isHiddenGem ? "98%" : "96%" },
    { label: "Check-in mudah", value: property.isHiddenGem ? "9.7/10" : "9.4/10" },
    {
      label: property.isMuslimFriendly ? "Info ibadah" : "Respon host",
      value: property.isMuslimFriendly ? "Terverifikasi" : "< 10 menit",
    },
  ];
  const guestQuotes = propertyTestimonials[property.slug] ?? [
    {
      name: "Tamu terverifikasi",
      context: "Recent stay",
      quote: "Tempatnya sesuai foto dan terasa nyaman sejak pertama datang.",
    },
    {
      name: "Traveler keluarga",
      context: "Booking cepat",
      quote: "Detail stay dan proses check-in-nya jelas, jadi lebih tenang saat booking.",
    },
  ];

  const travelerReasons = [
    property.isHiddenGem ? "suasana lebih private" : "lokasi mudah dijangkau",
    property.isMuslimFriendly ? "info ibadah sudah siap" : "detail check-in jelas",
    property.originalPrice ? "harga terasa lebih aman" : "cocok untuk short escape",
  ];

  return (
    <main className="space-y-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <section
        className={cn(
          "relative overflow-hidden rounded-[28px] p-4 text-white shadow-[0_26px_60px_-34px_rgba(31,41,55,0.55)]",
          property.isHiddenGem
            ? "border border-[rgba(240,183,86,0.35)] bg-[linear-gradient(135deg,#7A5312_0%,#C88B2E_40%,#4AABF0_100%)]"
            : "bg-[linear-gradient(135deg,#4AABF0_0%,#DDF2FF_100%)]",
        )}
      >
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, 430px"
          className="object-cover"
        />
        <div
          className={cn(
            "absolute inset-0",
            property.isHiddenGem
              ? "bg-[linear-gradient(180deg,rgba(43,33,15,0.18)_0%,rgba(43,33,15,0.32)_30%,rgba(43,33,15,0.72)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(45,140,199,0.12)_0%,rgba(45,140,199,0.28)_35%,rgba(34,68,93,0.72)_100%)]",
          )}
        />

        <div className="relative">
          <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

          <div className="mb-12 flex items-start justify-between gap-3">
            <div className="space-y-2">
              <Link
                href="/search/results"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/12 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur transition hover:bg-white/18"
              >
                <ChevronLeft size={14} />
                Kembali
              </Link>
              <div className="flex flex-wrap gap-2">
                {property.isHiddenGem ? <Badge tone="gold">✦ Hidden Gem Pilihan</Badge> : null}
                {property.isMuslimFriendly ? <Badge tone="info">🕌 Ramah Muslim</Badge> : null}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
                {property.imageLabel}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur">
                <Bookmark size={14} />
              </span>
            </div>
          </div>

          <div className="max-w-[285px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78">Stay pilihan</p>
            <h1 className="mt-2 text-[1.55rem] font-bold leading-8 text-white">{property.name}</h1>
            <p className="mt-2 flex items-center gap-1 text-sm text-white/90">
              <MapPin size={14} />
              {property.location}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {property.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-white/14 px-3 py-1.5 text-[11px] font-medium text-white/95 backdrop-blur"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-4 inline-flex items-center rounded-full bg-black/20 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur">
            {gallery.length} foto pilihan terbaik untuk melihat suasana stay
          </div>
        </div>
      </section>

      <section className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
        {gallery.slice(0, 4).map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative h-[72px] min-w-[96px] overflow-hidden rounded-[18px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_-28px_rgba(31,41,55,0.48)]"
          >
            <Image
              src={image}
              alt={`${property.name} gallery ${index + 1}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-dark)]">Pilihan editor</p>
            <h2 className="mt-1 text-[1.7rem] font-bold leading-9 text-[var(--color-text)]">{property.shortDescription}</h2>
          </div>
          <div className="rounded-2xl bg-[var(--color-primary-soft)] px-3 py-2 text-xs font-semibold text-[var(--color-primary-dark)]">
            {property.type}
          </div>
        </div>

        <p className="flex items-center gap-1 text-sm text-[var(--color-text)]">
          <Star size={14} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
          {property.rating} · {property.reviewCount} ulasan
        </p>

        <p className="text-sm leading-6 text-[var(--color-text-muted)]">{property.description}</p>

        <div className="grid grid-cols-3 gap-2">
          <StatCard icon={<Star size={15} />} label="Rating" value={`${property.rating}/5`} />
          <StatCard icon={<Users size={15} />} label="Kapasitas" value={`Hingga ${property.maxGuests} tamu`} />
          <StatCard icon={<Clock3 size={15} />} label="Check-in" value={experience.checkIn} />
        </div>
      </section>

      <DetailSection
        title="Diverifikasi oleh tim kami"
        description="Proof cepat yang membuat stay ini terasa lebih jelas, terpercaya, dan siap dibooking."
      >
        <div className="grid grid-cols-3 gap-2 text-sm">
          {trustHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[18px] border border-[rgba(74,171,240,0.16)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] px-3 py-3"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[18px] border border-[rgba(74,171,240,0.16)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] px-3 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">Catatan kurasi tim</p>
          <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
            {property.hiddenGemReasons?.[0] ?? "Stay ini dipilih karena konsisten nyaman, detail jelas, dan terasa mudah dipercaya sejak sebelum check-in."}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {travelerReasons.map((reason) => (
              <span
                key={reason}
                className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[var(--color-text-muted)] shadow-[0_10px_20px_-18px_rgba(31,41,55,0.35)]"
              >
                {reason}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {guestQuotes.map((guest) => (
            <div key={`${guest.name}-${guest.context}`} className="rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] font-semibold text-[var(--color-text)]">{guest.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">{guest.context}</p>
                </div>
                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-[var(--color-text-muted)]">Terverifikasi</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">“{guest.quote}”</p>
            </div>
          ))}
        </div>
      </DetailSection>

      <DetailSection
        title="Yang perlu kamu tahu"
        description="Ringkasan cepat agar proses booking terasa lebih yakin dan smooth."
      >
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Check-in</p>
            <p className="mt-1 font-semibold text-[var(--color-text)]">{experience.checkIn}</p>
          </div>
          <div className="rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Check-out</p>
            <p className="mt-1 font-semibold text-[var(--color-text)]">{experience.checkOut}</p>
          </div>
          <div className="col-span-2 rounded-[18px] border border-[rgba(74,171,240,0.18)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] px-3 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Pembatalan</p>
            <p className="mt-1 font-semibold text-[var(--color-text)]">{experience.cancellation}</p>
          </div>
        </div>

        <div className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
          {experience.rules.map((rule) => (
            <div key={rule} className="flex gap-3 rounded-[18px] bg-white px-3 py-3 shadow-[0_12px_28px_-30px_rgba(31,41,55,0.55)]">
              <span className="mt-0.5 text-[var(--color-primary-dark)]">•</span>
              <p>{rule}</p>
            </div>
          ))}
        </div>
      </DetailSection>

      <DetailSection
        title="Fasilitas utama"
        description="Hal-hal penting yang biasanya langsung dicari traveler sebelum memesan."
      >
        <div className="flex flex-wrap gap-2 text-xs">
          {property.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-[var(--color-surface-muted)] px-3 py-1.5 text-[var(--color-text-muted)]"
            >
              {amenity}
            </span>
          ))}
        </div>
      </DetailSection>

      <DetailSection
        title="Lokasi & suasana sekitar"
        description="Membantu user membayangkan area stay bahkan sebelum membuka peta."
      >
        <div className="rounded-[18px] border border-[rgba(74,171,240,0.18)] bg-[linear-gradient(135deg,#EAF7FF_0%,#FFFFFF_100%)] p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)]">{property.location}</p>
              <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">{experience.mapNote}</p>
            </div>
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary-dark)]">
              Lokasi strategis
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-white px-3 py-1.5 text-[var(--color-text-muted)]">{experience.nearbyPoint}</span>
            <span className="rounded-full bg-white px-3 py-1.5 text-[var(--color-text-muted)]">Akses kendaraan mudah</span>
          </div>

          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary-dark)]">
            <ArrowUpRight size={14} />
            Cocok untuk check-in santai dan eksplorasi singkat
          </div>
        </div>
      </DetailSection>

      {property.isHiddenGem && property.hiddenGemReasons ? (
        <DetailSection
          title="Kenapa tempat ini istimewa"
          description="Alasan yang membuat stay ini terasa lebih eksklusif dan berkesan."
          className="border-[rgba(240,183,86,0.5)] bg-[linear-gradient(180deg,#FFF8EA_0%,#FFFFFF_100%)]"
        >
          <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
            {property.hiddenGemReasons.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-[18px] bg-white/80 px-3 py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold-soft)] text-[11px] font-bold text-[#8A5A04]">
                  {index + 1}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </DetailSection>
      ) : null}

      {property.editorialStory ? (
        <DetailSection
          title="Cerita di balik tempat ini"
          description="Gambaran suasana agar user bisa memilih dengan lebih yakin."
        >
          <div className="rounded-[18px] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] px-4 py-4 text-sm leading-6 text-[var(--color-text-muted)]">
            “{property.editorialStory}”
          </div>
        </DetailSection>
      ) : null}

      {property.teamTips?.length ? (
        <DetailSection
          title="Tips dari tim kami"
          description="Insight singkat agar pengalaman menginap terasa makin memorable."
          className="border-[rgba(240,183,86,0.45)]"
        >
          <div className="space-y-2">
            {property.teamTips.map((tip) => (
              <div key={tip} className="flex gap-3 rounded-[18px] bg-[rgba(254,246,228,0.75)] px-3 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#8A5A04]">
                  <Lightbulb size={16} />
                </span>
                <p className="text-sm leading-6 text-[var(--color-text-muted)]">{tip}</p>
              </div>
            ))}
          </div>
        </DetailSection>
      ) : null}

      {property.nearbyActivities?.length ? (
        <DetailSection
          title="Aktivitas di sekitar"
          description="Cocok untuk menambah rasa discovery pada detail halaman Hidden Gem."
        >
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            {property.nearbyActivities.map((activity) => (
              <div
                key={`${activity.name}-${activity.distance}`}
                className="min-w-[160px] rounded-[18px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] p-3"
              >
                <Compass size={16} className="text-[var(--color-primary-dark)]" />
                <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{activity.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{activity.distance}</p>
              </div>
            ))}
          </div>
        </DetailSection>
      ) : null}

      {property.muslimInfo ? (
        <DetailSection
          title="Informasi ramah Muslim"
          description="Info penting yang ditampilkan natural untuk perjalanan yang lebih nyaman."
        >
          <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <div className="rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">🕌 {property.muslimInfo.prayerPlace}</div>
            <div className="rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">🍽️ {property.muslimInfo.halalFood}</div>
            <div className="rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">🧭 {property.muslimInfo.qiblaInfo}</div>
            <div className="rounded-[18px] bg-[var(--color-surface-muted)] px-3 py-3">🚿 {property.muslimInfo.wudhuFacility}</div>
          </div>
          <div className="mt-3 flex items-start gap-2 rounded-[16px] bg-[var(--color-primary-soft)] px-3 py-3 text-xs text-[var(--color-primary-dark)]">
            <ShieldCheck size={15} className="mt-0.5 shrink-0" />
            <p>{property.muslimInfo.note}</p>
          </div>
        </DetailSection>
      ) : null}

      <section
        className={cn(
          "sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] rounded-[24px] border border-[var(--color-border)] bg-white/95 p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.42)] backdrop-blur",
          property.isHiddenGem && "border-[rgba(240,183,86,0.55)]",
        )}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Harga per malam</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-lg font-bold text-[var(--color-primary-dark)]">{formatCurrency(property.price)}</p>
              {property.originalPrice ? (
                <span className="text-xs text-[var(--color-text-muted)] line-through">
                  {formatCurrency(property.originalPrice)}
                </span>
              ) : null}
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">max {property.maxGuests} tamu · voucher digital langsung terbit</p>
          </div>
          {property.isHiddenGem ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-gold-soft)] px-2.5 py-1 text-[10px] font-semibold text-[#8A5A04]">
              <Sparkles size={12} /> Kurasi Tim
            </span>
          ) : null}
        </div>

        <div className="space-y-2">
          <Link href={`/booking/form?property=${property.slug}`} className={buttonVariants("primary", true)}>
            Pesan Sekarang
          </Link>
          <Link href="/continue-booking" className={buttonVariants("ghost", true)}>
            Sudah punya akun? Masuk untuk checkout lebih cepat
          </Link>
        </div>
      </section>
    </main>
  );
}