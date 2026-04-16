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
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="space-y-5 pb-4">
      <header className="space-y-3 pt-1">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]">
          <Sparkles size={12} />
          Masuk lebih cepat
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-[var(--color-primary-dark)]">Selamat datang kembali</p>
          <h1 className="text-[1.9rem] font-bold leading-[1.12] tracking-tight text-[var(--color-text)]">
            Masuk dan lanjutkan booking tanpa mengulang dari awal.
          </h1>
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">
            Voucher, pilihan terakhir, dan status pesananmu tetap tersimpan rapi di satu akun.
          </p>
        </div>
      </header>

      <section className="overflow-hidden rounded-[28px] border border-[rgba(74,171,240,0.16)] bg-white shadow-[0_22px_44px_-34px_rgba(45,140,199,0.45)]">
        <div
          className="relative h-28 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15,111,174,0.82), rgba(74,171,240,0.58)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            <div className="inline-flex w-fit items-center gap-1 rounded-full bg-white/16 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm">
              <ShieldCheck size={11} />
              Akun terverifikasi
            </div>

            <div>
              <p className="text-sm font-semibold">Pilihan stay tetap aman tersimpan</p>
              <p className="mt-1 text-[11px] text-white/85">
                Masuk sekali untuk cek voucher, status pesanan, dan destinasi favorit.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-[rgba(74,171,240,0.12)] bg-[rgba(74,171,240,0.08)] p-3 text-center">
          {[
            "Voucher siap",
            "Booking cepat",
            "Notifikasi rapi",
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
          <p className="text-sm font-semibold text-[var(--color-text)]">Masuk ke akunmu</p>
          <p className="text-xs leading-5 text-[var(--color-text-muted)]">
            Data contoh sudah terisi agar alur demo terasa lebih lancar.
          </p>
        </div>

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

        <div className="flex items-center justify-between gap-3 text-xs">
          <label className="flex items-center gap-2 text-[var(--color-text-muted)]">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
            />
            Ingat saya
          </label>
          <button type="button" className="font-semibold text-[var(--color-primary-dark)]">
            Lupa password?
          </button>
        </div>

        <Link href="/home" className={`${buttonVariants("primary", true)} gap-2`}>
          Masuk
          <ArrowRight size={16} />
        </Link>

        <div className="rounded-[20px] border border-[rgba(74,171,240,0.18)] bg-[linear-gradient(180deg,#F8FCFF_0%,#F2F9FD_100%)] px-3.5 py-3 text-xs leading-5 text-[var(--color-text-muted)]">
          <p className="flex items-center gap-2 font-semibold text-[var(--color-text)]">
            <ShieldCheck size={15} className="text-[var(--color-primary-dark)]" />
            Aman dan siap dipresentasikan
          </p>
          <p className="mt-1">
            Begitu masuk, user langsung kembali ke alur pencarian dan booking tanpa terasa terputus.
          </p>
        </div>
      </form>

      <p className="text-center text-sm text-[var(--color-text-muted)]">
        Belum punya akun?{" "}
        <Link href="/register" className="font-semibold text-[var(--color-primary-dark)]">
          Daftar gratis
        </Link>
      </p>
    </main>
  );
}