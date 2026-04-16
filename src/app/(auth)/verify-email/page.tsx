import Link from "next/link";
import { MailCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-[70dvh] flex-col items-center justify-center gap-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
        <MailCheck size={28} />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-[var(--color-text)]">Cek emailmu</h1>
        <p className="text-sm leading-6 text-[var(--color-text-muted)]">
          Kami sudah mengirim link verifikasi ke alya.rahma@example.com. Setelah akun aktif, flow booking bisa langsung dilanjutkan.
        </p>
      </div>
      <div className="w-full space-y-2">
        <Link href="/login" className={buttonVariants("primary", true)}>
          Lanjut ke Login
        </Link>
        <Link href="/register" className={buttonVariants("ghost", true)}>
          Kirim Ulang Email
        </Link>
      </div>
    </main>
  );
}