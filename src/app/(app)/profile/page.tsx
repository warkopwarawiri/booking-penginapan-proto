import Link from "next/link";
import { ChevronRight, Globe, HelpCircle, Lock, LogOut, UserRound } from "lucide-react";

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

      <section className="rounded-[24px] bg-[linear-gradient(135deg,#4AABF0_0%,#2D8CC7_100%)] p-4 text-white">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-lg font-bold">AR</div>
        <h1 className="mt-3 text-xl font-bold">Alya Rahma</h1>
        <p className="text-sm text-white/80">alya.rahma@example.com</p>
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