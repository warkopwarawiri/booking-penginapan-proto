import Link from "next/link";
import { ChevronRight, Globe, HelpCircle, Lock, LogOut, ShieldCheck, Sparkles, UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { currentUser } from "@/data/mock-data";
import { PageHeader } from "@/components/ui/page-header";

const menus = [
  { label: "Edit Profil", href: "#", icon: UserRound },
  { label: "Bahasa", href: "/profile/language", icon: Globe },
  { label: "Keamanan & Password", href: "#", icon: Lock },
  { label: "Bantuan & CS", href: "#", icon: HelpCircle },
];

export default function ProfilePage() {
  return (
    <main className="space-y-4 pb-2">
      <PageHeader
        eyebrow="Profil"
        title="Kelola akun dan preferensi perjalananmu"
        description="Atur bahasa, keamanan, dan kebutuhan bantuan dalam satu tempat yang rapi."
      />

      <section className="rounded-[24px] bg-[linear-gradient(135deg,#4AABF0_0%,#2D8CC7_100%)] p-4 text-white shadow-[0_22px_50px_-30px_rgba(45,140,199,0.8)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-lg font-bold">AR</div>
            <h1 className="mt-3 text-xl font-bold">{currentUser.name}</h1>
            <p className="text-sm text-white/80">{currentUser.email}</p>
          </div>
          <Badge tone="gold">Traveler ready</Badge>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5">
            <p className="text-white/70">Bahasa</p>
            <p className="mt-1 font-semibold">Indonesia</p>
          </div>
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5">
            <p className="text-white/70">Voucher</p>
            <p className="mt-1 font-semibold">Digital</p>
          </div>
          <div className="rounded-[16px] bg-white/12 px-2 py-2.5">
            <p className="text-white/70">Support</p>
            <p className="mt-1 font-semibold">Cepat</p>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(240,183,86,0.42)] bg-[linear-gradient(180deg,#FFF9EC_0%,#FFFFFF_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.25)]">
        <div className="flex items-start gap-3">
          <span className="rounded-full bg-[var(--color-gold-soft)] p-2 text-[#8A5A04]">
            <Sparkles size={16} />
          </span>
          <div>
            <h2 className="text-base font-semibold text-[var(--color-text)]">Akun siap mendukung perjalanan end-to-end</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
              Preferensi bahasa, keamanan akun, dan bantuan pelanggan sudah diposisikan rapi agar pengalaman terasa lebih matang.
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[var(--color-text-muted)] shadow-sm">
            <ShieldCheck size={12} className="text-[var(--color-primary-dark)]" /> Akun aman
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[var(--color-text-muted)] shadow-sm">
            <Globe size={12} className="text-[var(--color-primary-dark)]" /> Multi-language ready
          </span>
        </div>
      </section>

      <section className="space-y-2 rounded-[24px] border border-[var(--color-border)] bg-white p-3">
        {menus.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.label} href={item.href} className="flex items-center justify-between rounded-2xl px-3 py-3 hover:bg-[var(--color-surface-muted)]">
              <span className="flex items-center gap-3 text-sm font-medium text-[var(--color-text)]">
                <Icon size={16} />
                {item.label}
              </span>
              <ChevronRight size={16} className="text-[var(--color-text-muted)]" />
            </Link>
          );
        })}
        <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium text-[var(--color-danger)] hover:bg-[#FDECEC]">
          <LogOut size={16} />
          Keluar
        </button>
      </section>
    </main>
  );
}