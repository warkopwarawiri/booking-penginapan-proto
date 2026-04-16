"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="space-y-5 pb-4">
      <header className="space-y-3 pt-1">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold-soft)] px-3 py-1 text-[11px] font-semibold text-[#9A6A10]">
          <Sparkles size={12} />
          Gratis • kurang dari 1 menit
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-[var(--color-primary-dark)]">Buat akun baru</p>
          <h1 className="text-[1.9rem] font-bold leading-[1.12] tracking-tight text-[var(--color-text)]">
            Buat akun cepat, lalu lanjutkan booking dengan rasa aman.
          </h1>
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">
            Setelah daftar, user bisa menyimpan voucher, memantau status pesanan, dan langsung lanjut ke booking yang sempat tertunda.
          </p>
        </div>
      </header>

      <section className="overflow-hidden rounded-[28px] border border-[rgba(240,183,86,0.24)] bg-white shadow-[0_22px_44px_-34px_rgba(31,41,55,0.38)]">
        <div
          className="relative h-28 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(122,90,23,0.8), rgba(240,183,86,0.42)), url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            <div className="inline-flex w-fit items-center gap-1 rounded-full bg-white/16 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm">
              <ShieldCheck size={11} />
              Siap verifikasi email
            </div>

            <div>
              <p className="text-sm font-semibold">Akun baru, pengalaman tetap mulus</p>
              <p className="mt-1 text-[11px] text-white/85">
                Pilihan properti yang sudah dipilih tetap aman tersimpan untuk dilanjutkan.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-[rgba(240,183,86,0.18)] bg-[rgba(240,183,86,0.08)] p-3 text-center">
          {[
            "Daftar cepat",
            "Voucher aman",
            "Checkout mulus",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white px-2 py-2 text-[11px] font-semibold text-[var(--color-text)] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <form className="space-y-4 rounded-[26px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(31,41,55,0.4)]">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[var(--color-text)]">Lengkapi data dasar</p>
          <p className="text-xs leading-5 text-[var(--color-text-muted)]">
            Hanya data penting yang dibutuhkan agar form tetap singkat dan ramah untuk first-time user.
          </p>
        </div>

        <label className="block text-sm font-medium text-[var(--color-text)]">
          Nama Lengkap
          <div className="relative mt-2">
            <UserRound
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
            />
            <input
              className="w-full rounded-2xl border border-[var(--color-border)] bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(74,171,240,0.16)]"
              defaultValue="Alya Rahma"
            />
          </div>
        </label>

        <label className="block text-sm font-medium text-[var(--color-text)]">
          Email
          <div className="relative mt-2">
            <Mail
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
            />
            <input
              type="email"
              className="w-full rounded-2xl border border-[var(--color-border)] bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(74,171,240,0.16)]"
              defaultValue="alya.rahma@example.com"
            />
          </div>
        </label>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-[var(--color-text)]">
            Password
            <div className="relative mt-2">
              <LockKeyhole
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-2xl border border-[var(--color-border)] bg-white py-3 pl-11 pr-12 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(74,171,240,0.16)]"
                defaultValue="SafaraStay2026"
              />
              <button
                type="button"
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--color-text-muted)] transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary-dark)]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </label>

          <div className="flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-[var(--color-success)]" />
            <div className="h-1.5 flex-1 rounded-full bg-[var(--color-success)]" />
            <div className="h-1.5 flex-1 rounded-full bg-[var(--color-success)]" />
            <span className="text-[11px] font-semibold text-[var(--color-success)]">Kuat</span>
          </div>
        </div>

        <label className="block text-sm font-medium text-[var(--color-text)]">
          Konfirmasi Password
          <div className="relative mt-2">
            <LockKeyhole
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full rounded-2xl border border-[var(--color-border)] bg-white py-3 pl-11 pr-12 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(74,171,240,0.16)]"
              defaultValue="SafaraStay2026"
            />
            <button
              type="button"
              aria-label={showConfirmPassword ? "Sembunyikan konfirmasi password" : "Tampilkan konfirmasi password"}
              onClick={() => setShowConfirmPassword((current) => !current)}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--color-text-muted)] transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary-dark)]"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </label>

        <label className="flex items-start gap-3 rounded-[20px] bg-[var(--color-surface-muted)] px-3.5 py-3 text-xs leading-5 text-[var(--color-text-muted)]">
          <input
            type="checkbox"
            defaultChecked
            className="mt-0.5 h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
          />
          <span>
            Saya setuju dengan <span className="font-semibold text-[var(--color-primary-dark)]">Syarat & Ketentuan</span> dan <span className="font-semibold text-[var(--color-primary-dark)]">Kebijakan Privasi</span>.
          </span>
        </label>

        <Link href="/verify-email" className={`${buttonVariants("primary", true)} gap-2`}>
          Daftar sekarang
          <ArrowRight size={16} />
        </Link>
      </form>

      <p className="text-center text-sm text-[var(--color-text-muted)]">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-semibold text-[var(--color-primary-dark)]">
          Masuk
        </Link>
      </p>
    </main>
  );
}