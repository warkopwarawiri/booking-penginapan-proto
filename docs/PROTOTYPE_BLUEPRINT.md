# Prototype Blueprint — Customer App
## Platform Booking Penginapan (Muslim-Friendly & Hidden Gem)

> **Versi:** 1.0  
> **Tanggal:** 15 April 2026  
> **Tipe Prototype:** Mobile-First (375px width baseline, mengikuti keputusan blueprint produk v2.0)  
> **Tujuan:** Prototype investor-ready — memvalidasi UX, menampilkan diferensiasi produk, dan menjual visi platform kepada investor  
> **Warna Primer:** Sky Blue `#4AABF0` | Accent: Soft Gold `#F0B756` | Warm White `#F8FAFB`

---

## Daftar Isi

1. [Filosofi Prototype](#1-filosofi-prototype)
2. [Ringkasan Daftar Page](#2-ringkasan-daftar-page)
3. [Navigation & Flow Map](#3-navigation--flow-map)
4. [Detail Per Page](#4-detail-per-page)
   - [P-01 · Splash Screen & Onboarding](#p-01--splash-screen--onboarding)
   - [P-02 · Register](#p-02--register)
   - [P-03 · Email Verification Pending](#p-03--email-verification-pending)
   - [P-04 · Login](#p-04--login)
   - [P-05 · Home / Discovery](#p-05--home--discovery)
   - [P-06 · Search & Filter](#p-06--search--filter)
   - [P-07 · Search Results](#p-07--search-results)
   - [P-08 · Unit Detail — Regular](#p-08--unit-detail--regular)
   - [P-09 · Unit Detail — Hidden Gem](#p-09--unit-detail--hidden-gem)
   - [P-10 · Booking Form](#p-10--booking-form)
   - [P-11 · Order Review](#p-11--order-review)
   - [P-12 · Payment Method Selection](#p-12--payment-method-selection)
   - [P-13 · Payment Processing / Waiting](#p-13--payment-processing--waiting)
   - [P-14 · Booking Confirmed + E-Voucher](#p-14--booking-confirmed--e-voucher)
   - [P-15 · Payment Failed / Expired](#p-15--payment-failed--expired)
   - [P-16 · My Bookings (Riwayat Pesanan)](#p-16--my-bookings-riwayat-pesanan)
   - [P-17 · Booking Detail & Timeline](#p-17--booking-detail--timeline)
   - [P-18 · E-Voucher Detail (In-App)](#p-18--e-voucher-detail-in-app)
   - [P-19 · Profile & Settings](#p-19--profile--settings)
   - [P-20 · Language Selector](#p-20--language-selector)
   - [P-21 · Guest Interrupted Flow — Register Prompt](#p-21--guest-interrupted-flow--register-prompt)
   - [P-22 · Empty States](#p-22--empty-states)
   - [P-23 · Notification Center](#p-23--notification-center)
5. [Interaksi Global & Micro-Interactions](#5-interaksi-global--micro-interactions)
6. [Catatan Teknis untuk Desainer](#6-catatan-teknis-untuk-desainer)
7. [Investor Demo Script (Suggested Flow)](#7-investor-demo-script-suggested-flow)

---

## 1. Filosofi Prototype

### Tujuan Utama

Prototype ini bukan sekadar mockup statis — ini adalah **sales tool**. Setiap halaman dirancang untuk:

1. **Membuktikan diferensiasi** — Hidden Gem dan Muslim-Friendly information harus terasa premium dan tidak ada di platform lain.
2. **Menunjukkan alur kerja yang mulus** — dari discovery → booking → pembayaran harus terasa seamless.
3. **Membangun kepercayaan investor** — visual polished, data realistis (bukan placeholder "Lorem Ipsum"), dan micro-interaction yang matang.

### Prinsip Desain yang Harus Dijaga

| Prinsip | Implementasi |
|---|---|
| **Simplicity over complexity** | Setiap page punya 1 primary action yang jelas |
| **Data realistis** | Gunakan nama properti nyata, foto berkualitas, harga masuk akal |
| **Bahasa konsisten** | Semua copy dalam Bahasa Indonesia untuk prototype awal |
| **Mobile-first** | 375px width, touch-target minimum 44px |
| **Brand identity kuat** | Sky Blue dominan, Gold untuk aksen/CTA, tipografi premium |

### Apa yang TIDAK Perlu di Prototype

- Fungsionalitas backend asli (semua data hardcoded/mock)
- Form validation yang kompleks
- Error handling exhaustive
- Semua edge case (fokus pada happy path + 1–2 failure state kritis)

---

## 2. Ringkasan Daftar Page

| ID | Nama Page | Kategori | Prioritas Demo | Catatan |
|---|---|---|---|---|
| P-01 | Splash Screen & Onboarding | Auth/Onboarding | 🔴 Wajib | First impression ke investor |
| P-02 | Register | Auth | 🔴 Wajib | |
| P-03 | Email Verification Pending | Auth | 🟡 Penting | Bisa dilewat jika demo time terbatas |
| P-04 | Login | Auth | 🔴 Wajib | |
| P-05 | Home / Discovery | Core | 🔴 Wajib | Showcase Hidden Gem & Muslim-Friendly |
| P-06 | Search & Filter | Core | 🔴 Wajib | Tampilkan filter Muslim-Friendly |
| P-07 | Search Results | Core | 🔴 Wajib | Badge system harus terlihat |
| P-08 | Unit Detail — Regular | Core | 🔴 Wajib | |
| P-09 | Unit Detail — Hidden Gem | Core | 🔴 Wajib | **Halaman terpenting untuk diferensiasi** |
| P-10 | Booking Form | Booking | 🔴 Wajib | |
| P-11 | Order Review | Booking | 🔴 Wajib | |
| P-12 | Payment Method Selection | Payment | 🔴 Wajib | |
| P-13 | Payment Processing | Payment | 🟡 Penting | Loading state |
| P-14 | Booking Confirmed + E-Voucher | Payment | 🔴 Wajib | **Momen "wow" pertama** |
| P-15 | Payment Failed/Expired | Payment | 🟡 Penting | |
| P-16 | My Bookings | Account | 🔴 Wajib | |
| P-17 | Booking Detail & Timeline | Account | 🔴 Wajib | Transparansi status |
| P-18 | E-Voucher Detail (In-App) | Account | 🟡 Penting | |
| P-19 | Profile & Settings | Account | 🟢 Nice-to-have | |
| P-20 | Language Selector | Settings | 🟢 Nice-to-have | Tunjukkan multilingual awareness |
| P-21 | Guest Interrupted Flow | Auth | 🟡 Penting | Seamless UX differentiator |
| P-22 | Empty States | UX | 🟡 Penting | Kualitas UI saat tidak ada data |
| P-23 | Notification Center | Account | 🟢 Nice-to-have | |

**Total: 23 halaman** (14 wajib untuk demo investor minimum)

---

## 3. Navigation & Flow Map

```
ONBOARDING FLOW
────────────────
P-01 Splash/Onboarding
    ├── [Daftar] → P-02 Register → P-03 Email Verification → P-04 Login
    └── [Masuk]  → P-04 Login

DISCOVERY FLOW (Logged-in)
────────────────────────────
P-05 Home
    ├── [Search Bar] → P-06 Search & Filter → P-07 Results
    │                                              ├── [Card Regular] → P-08 Unit Detail
    │                                              └── [Card Hidden Gem] → P-09 Unit Detail HG
    ├── [Section Hidden Gem] → P-09 Unit Detail HG
    └── [Bottom Nav] → P-16 My Bookings | P-19 Profile

BOOKING FLOW
────────────────
P-08 / P-09 Unit Detail
    └── [Pesan Sekarang] → P-10 Booking Form
                               └── [Lanjutkan] → P-11 Order Review
                                                      └── [Bayar] → P-12 Payment Method
                                                                         └── [Konfirmasi] → P-13 Processing
                                                                                                ├── [Sukses] → P-14 Confirmed + Voucher
                                                                                                └── [Gagal]  → P-15 Failed

GUEST INTERRUPTED FLOW
──────────────────────
P-08/P-09 → [Pesan Sekarang] → P-21 Register Prompt → P-02 Register → ... → P-10 Booking Form (lanjut)

ACCOUNT FLOW
─────────────
P-16 My Bookings
    └── [Tap Booking] → P-17 Booking Detail & Timeline
                            └── [Lihat Voucher] → P-18 E-Voucher Detail
```

---

## 4. Detail Per Page

---

### P-01 · Splash Screen & Onboarding

**Kategori:** Onboarding  
**Posisi dalam Flow:** Entry point — halaman pertama yang dilihat pengguna baru

#### Deskripsi
Serangkaian 3 slide onboarding yang memperkenalkan value proposition platform sebelum user masuk ke login/register. Ini adalah **momen pertama** investor melihat brand — harus berkesan dan menyampaikan diferensiasi dalam hitungan detik.

#### Yang Menarik untuk Investor
- Visual identitas brand yang kuat dengan warna Sky Blue dan Gold
- Copy yang langsung menyampaikan 3 nilai utama platform: booking mudah, Hidden Gem, Muslim-friendly
- Animasi transisi antar slide yang premium (slide atau fade)
- Ilustrasi atau foto berkualitas tinggi yang merepresentasikan pengalaman menginap

#### Struktur Visual

**Slide 1 — Brand Identity:**
- Logo platform di center atas
- Headline besar: *"Temukan Penginapan Terbaik, Sesuai Caramu"*
- Sub-copy: *"Booking mudah untuk semua — dari turis lokal hingga mancanegara"*
- Ilustrasi/foto: Tampilan berbagai jenis penginapan (villa, boutique hotel, homestay)

**Slide 2 — Hidden Gem:**
- Badge ikon berlian/bintang dengan warna Gold
- Headline: *"Temukan Hidden Gem yang Terlupakan"*
- Sub-copy: *"Kurasi penginapan unik dengan pengalaman menginap tak terlupakan"*
- Visual: Foto dramatis penginapan unik dengan landscape indah

**Slide 3 — Muslim-Friendly:**
- Ikon masjid atau compass (arah kiblat) dengan sentuhan elegan
- Headline: *"Informasi Lengkap untuk Perjalanan Nyaman"*
- Sub-copy: *"Info tempat ibadah, kuliner halal, dan fasilitas ramah Muslim tersedia di setiap listing"*
- Visual: Ilustrasi suasana perjalanan yang inklusif

#### Elemen UI
- Progress dots di bawah untuk indikasi slide (3 dots)
- Tombol "Lewati" (skip) di pojok kanan atas — kecil, teks saja
- Tombol "Selanjutnya" di bottom — pill-shaped, warna Sky Blue
- Pada slide terakhir: dua tombol — **"Daftar Gratis"** (primary, Sky Blue) dan **"Masuk"** (secondary, outline)

#### Interaksi
- Swipe horizontal untuk pindah slide
- Tap tombol "Selanjutnya"
- Auto-advance opsional setelah 4 detik (dengan animasi progress dot)
- Skip langsung ke screen login/register

---

### P-02 · Register

**Kategori:** Auth  
**Posisi dalam Flow:** P-01 → P-02 → P-03

#### Deskripsi
Halaman pendaftaran akun customer. Sesuai blueprint: data general — nama, email, password. **Tidak perlu KTP atau data identitas lengkap** di tahap ini.

#### Yang Menarik untuk Investor
- Form yang bersih dan tidak intimidating — hanya 4 field
- UX yang mengundang: copy yang friendly, bukan formal
- Estimasi waktu daftar: "kurang dari 1 menit"
- Social proof subtle: *"Bergabung bersama ribuan traveler"*

#### Struktur Visual
- Header: Logo kecil + headline *"Buat Akun Baru"*
- Sub-copy: *"Mulai perjalananmu dalam kurang dari 1 menit"*
- Form fields:
  - **Nama Lengkap** — text input, icon person
  - **Email** — email input, icon mail
  - **Password** — password input dengan toggle show/hide
  - **Konfirmasi Password** — password input
- Checkbox: *"Saya setuju dengan Syarat & Ketentuan dan Kebijakan Privasi"* (teks link underline)
- CTA Button: **"Daftar Sekarang"** — full-width, Sky Blue, pill-shape
- Divider "atau"
- Link: *"Sudah punya akun? Masuk"*

#### Elemen UI
- Input field dengan label floating (animated)
- Password strength indicator (weak/medium/strong) — bar berwarna
- Character count opsional untuk password
- Error state: border merah + pesan di bawah field

#### Interaksi
- Tap field → label naik (floating label animation)
- Tap ikon mata → toggle password visibility
- Tap "Daftar Sekarang" → loading state pada button (spinner) → navigate ke P-03
- Tap "Masuk" → navigate ke P-04

---

### P-03 · Email Verification Pending

**Kategori:** Auth  
**Posisi dalam Flow:** P-02 → P-03 → (user check email → click link) → P-04

#### Deskripsi
Halaman konfirmasi bahwa email verifikasi sudah dikirim. User diminta memeriksa inbox.

#### Yang Menarik untuk Investor
- UX yang tidak meninggalkan user kebingungan — langkah selanjutnya jelas
- Ilustrasi email yang charming (amplop terbang/terkirim)
- Opsi "Kirim Ulang" jika email tidak masuk

#### Struktur Visual
- Ilustrasi besar: ikon amplop dengan efek animasi "terkirim"
- Headline: *"Cek Emailmu!"*
- Body copy: *"Kami sudah mengirim link verifikasi ke **[email@user.com]**. Klik link tersebut untuk mengaktifkan akunmu."*
- Countdown timer: *"Kirim ulang dalam 00:45"*
- Link: *"Kirim Ulang Email"* (aktif setelah countdown selesai)
- Link: *"Ganti Email"* — kecil, di bawah

#### Interaksi
- Countdown timer berjalan mundur
- Setelah countdown selesai, "Kirim Ulang Email" menjadi aktif/tappable
- Tap "Kirim Ulang" → feedback toast: *"Email berhasil dikirim ulang"*

---

### P-04 · Login

**Kategori:** Auth  
**Posisi dalam Flow:** Entry point untuk returning users

#### Deskripsi
Halaman masuk akun. Bersih, cepat, tidak ada hambatan.

#### Struktur Visual
- Logo + tagline kecil platform di atas
- Headline: *"Selamat Datang Kembali 👋"*
- Form:
  - **Email**
  - **Password** + toggle show/hide
- Link: *"Lupa Password?"* — rata kanan
- CTA: **"Masuk"** — full-width, Sky Blue
- Divider "atau"
- Link: *"Belum punya akun? Daftar Gratis"*

#### Interaksi
- Tap "Masuk" → loading → navigate ke P-05 Home
- Tap "Lupa Password?" → modal/page reset password (bisa disederhanakan sebagai static page di prototype)

---

### P-05 · Home / Discovery

**Kategori:** Core  
**Posisi dalam Flow:** Post-login / entry utama platform

#### Deskripsi
**Halaman terpenting dalam prototype.** Ini adalah showcase utama diferensiasi produk. Harus terasa seperti editorial travel magazine yang premium, bukan OTA generik.

#### Yang Menarik untuk Investor
- Section **Hidden Gem** yang menonjol dan berbeda secara visual dari listing biasa
- Info Muslim-Friendly terintegrasi secara natural pada kartu listing
- Suasana visual yang "aspirational" — foto-foto berkualitas tinggi
- Personalisasi ringan: *"Selamat datang, [Nama]!"*
- Struktur yang menunjukkan breadth produk: berbagai tipe penginapan, berbagai lokasi

#### Struktur Visual (Scroll dari atas ke bawah)

**1. App Bar / Header:**
- Kiri: Logo platform (compact)
- Kanan: Ikon notifikasi (dengan badge) + Avatar user (lingkaran kecil)
- Warna background: Sky Blue gradient tipis

**2. Search Bar (Sticky/Floating):**
- Full-width, rounded, shadow elevation
- Placeholder: *"Cari penginapan di mana?"*
- Ikon search di kiri
- Ikon filter di kanan (pill button kecil: "Filter")
- Tap → navigate ke P-06

**3. Banner Promo / Hero Section:**
- Full-width card dengan foto dramatis
- Overlay gradient gelap di bawah
- Text: *"Harga Terjangkau Menginap di Bali"* + Sub: *"Dari Rp 350.000/malam"*
- Badge kecil: "Promo Terbatas"

**4. Quick Filter Chips (Horizontal Scroll):**
- Chip: Semua | Villa | Hotel | Homestay | Muslim-Friendly | Pantai | Pegunungan
- Chip aktif: Sky Blue background + teks putih
- Chip inactive: outline + teks abu

**5. Section: "Hidden Gem — Dikurasi Untukmu" (⭐ KUNCI DIFERENSIASI):**
- Header section dengan ikon berlian Gold + teks "Hidden Gem" bold
- Sub: *"Penginapan unik yang hanya kamu temukan di sini"*
- Horizontal scroll card list (card landscape, lebih besar dari reguler)
- Setiap card:
  - Foto full-bleed berkualitas tinggi
  - Badge "✦ Hidden Gem" di pojok kiri atas (Gold background, teks hitam)
  - Nama penginapan (tipografi bold)
  - Lokasi dengan ikon pin
  - Rating ★ (stars)
  - Harga per malam
  - Tag fasilitas 1–2 (contoh: "Pool • Mountain View")

**6. Section: "Rekomendasi Untukmu":**
- Grid 2 kolom untuk listing reguler
- Setiap card:
  - Foto (aspect ratio 4:3)
  - Badge "Muslim-Friendly" jika applicable (ikon masjid kecil + teks, Sky Blue lembut)
  - Nama + lokasi + rating + harga
  - Icon bookmark (untuk save — inactive state)

**7. Section: "Jelajahi Destinasi Populer":**
- Horizontal scroll circular cards dengan nama kota/destinasi
- Contoh: Bali, Yogyakarta, Lombok, Labuan Bajo, Malang

**8. Section: "Penginapan Terjangkau":**
- List card dengan harga di-highlight

**9. Bottom Navigation Bar:**
- 4 tab: 🏠 Beranda | 🔍 Cari | 📋 Pesanan | 👤 Profil
- Tab aktif: Sky Blue icon + teks

#### Interaksi
- Tap search bar → animate ke P-06 (search bar expand)
- Tap chip filter → re-render section dengan animasi fade
- Horizontal scroll pada section Hidden Gem dan Destinasi
- Tap card penginapan reguler → P-08
- Tap card Hidden Gem → P-09
- Tap ikon bookmark → toggle state (filled/outlined, dengan animasi haptic-like pop)
- Pull-to-refresh gesture
- Bottom navigation tab switch

---

### P-06 · Search & Filter

**Kategori:** Core  
**Posisi dalam Flow:** P-05 → P-06 → P-07

#### Deskripsi
Halaman pencarian dengan parameter utama (lokasi, tanggal, tamu) dan filter lanjutan. Ini harus **terasa cepat dan intuitif** — tidak boleh ada friction yang tidak perlu.

#### Yang Menarik untuk Investor
- Filter **"Muslim-Friendly"** sebagai filter yang natural, bukan tersembunyi
- Date picker yang clean dan mobile-friendly
- Hasil filter yang real-time (chip menunjukkan filter aktif)

#### Struktur Visual

**Header:**
- Tombol back "←" + judul "Cari Penginapan"

**Search Input Group:**
- **Lokasi / Destinasi** — input text dengan autocomplete suggestion dropdown
  - Contoh suggestions: Bali, Yogyakarta, Lombok...
  - Ikon pin kiri
- **Tanggal Check-in** — tap → calendar modal (date picker)
- **Tanggal Check-out** — tap → calendar modal (linked, min = check-in + 1 hari)
- **Jumlah Tamu** — tap → counter modal (+/-)

**Date Range Visual:**
- Setelah dipilih: tampil ringkasan *"12 Apr → 15 Apr · 3 malam"*

**Filter Section (Collapsible):**
- Toggle expand "Filter Lanjutan"

**Ketika di-expand:**

*Rentang Harga:*
- Slider dua titik (range slider) untuk min-max harga
- Display: "Rp 200.000 – Rp 1.500.000/malam"

*Tipe Penginapan:*
- Multi-select chips: Hotel | Villa | Homestay | Cottage | Resort

*Fasilitas:*
- Multi-select chips: WiFi | Kolam Renang | Parkir | AC | Dapur | Sarapan

*Muslim-Friendly:*
- Toggle switch besar, Sky Blue saat aktif
- Label: *"Tampilkan info Muslim-Friendly"*
- Sub-label: *"Menampilkan properti dengan info tempat ibadah & kuliner halal"*

*Urutkan:*
- Radio buttons: Relevansi | Harga Termurah | Rating Tertinggi | Terbaru

**CTA:**
- Tombol **"Tampilkan Hasil"** — full-width, Sky Blue, dengan counter: *"Tampilkan 47 Properti"*
- Link: "Reset Semua" — teks kecil di atas tombol

#### Interaksi
- Tap "Lokasi" → keyboard muncul + dropdown suggestion animate in
- Tap "Tanggal" → bottom sheet calendar muncul dengan animasi slide up
- Calendar: tap tanggal check-in → highlight, tap check-out → range highlight
- Counter tamu: tap "+" / "−" dengan minimum 1
- Range slider: drag dua handle
- Toggle Muslim-Friendly: animasi on/off dengan warna berubah
- Tap "Tampilkan Hasil" → navigate ke P-07 dengan parameter

---

### P-07 · Search Results

**Kategori:** Core  
**Posisi dalam Flow:** P-06 → P-07 → P-08 / P-09

#### Deskripsi
Halaman hasil pencarian. Menampilkan listing yang relevan dengan **badge system** yang jelas untuk Hidden Gem dan Muslim-Friendly.

#### Yang Menarik untuk Investor
- Visual hierarchy yang jelas antara Hidden Gem dan listing reguler
- Badge system yang elegant — informasi kaya tanpa visual noise
- "Sort & Filter" persistently accessible
- Hasil terasa relevant dan berkualitas (foto bagus, data lengkap)

#### Struktur Visual

**Header (Sticky):**
- Tombol back + ringkasan pencarian: *"Bali · 12–15 Apr · 2 Tamu"*
- Tombol "Ubah" (kecil) → kembali ke P-06
- Baris kedua: chips filter aktif yang bisa di-dismiss (×)
- Tombol "Urutkan" (kanan)

**Hasil Count:**
- *"47 penginapan ditemukan"*

**Featured: Hidden Gem Banner (jika ada dalam hasil):**
- Card landscape yang lebih lebar (full-width)
- Background Sky Blue gradient + badge Gold "✦ Hidden Gem"
- Label: *"Penginapan Unggulan di Area Ini"*

**List Card Reguler (Vertical scroll, 1 kolom untuk mobile):**

Setiap card berisi:
- Foto thumbnail (aspect 16:9, rounded corners)
- Badge "✦ Hidden Gem" (Gold, pojok kiri atas foto) — hanya jika berlaku
- Badge "🕌 Muslim-Friendly" (Sky Blue soft, pojok kiri bawah foto) — hanya jika berlaku
- **Nama Penginapan** (bold, 16px)
- Lokasi (ikon pin, abu-abu, 13px)
- Rating: ★ 4.8 · (124 ulasan)
- Harga: **Rp 850.000**/malam — warna Sky Blue
- Harga coret jika ada promo: ~~Rp 1.000.000~~ → Rp 850.000
- Tag fasilitas ringkas: WiFi · Kolam Renang · Sarapan
- Ikon bookmark (kanan atas card)

**Load More:**
- Pagination via infinite scroll atau tombol "Muat Lebih Banyak"

#### Interaksi
- Tap card → navigate ke P-08 (reguler) atau P-09 (Hidden Gem)
- Tap "✕" pada filter chip → remove filter + update count
- Tap "Urutkan" → bottom sheet muncul dengan opsi sort
- Swipe card ke kiri → shortcut bookmark (opsional, nice-to-have)
- Scroll down → load more animasi skeleton loading

---

### P-08 · Unit Detail — Regular

**Kategori:** Core  
**Posisi dalam Flow:** P-07 → P-08 → P-10

#### Deskripsi
Halaman detail unit penginapan reguler. Semua informasi yang dibutuhkan customer untuk membuat keputusan booking ada di sini.

#### Struktur Visual (Scroll dari atas ke bawah)

**1. Photo Gallery Header:**
- Full-width foto hero (swipeable, 4–6 foto)
- Dots indicator bawah
- Counter "1/5" di pojok kanan bawah
- Tombol back "←" (transparan/overlay)
- Tombol share & bookmark (overlay kanan atas)
- Badge "Muslim-Friendly" jika applicable (overlay kiri bawah foto)

**2. Info Utama:**
- **Nama Penginapan** (H1, bold, 20px)
- Rating: ★ 4.7 · 89 ulasan · (teks link biru)
- Tipe: Villa · Lokasi: Ubud, Bali
- Row: ikon kalender + *"Tersedia 12–15 Apr"* | ikon orang + *"Max 4 Tamu"*

**3. Harga Sticky Teaser (muncul saat scroll):**
- Kecil di bawah nama: **Rp 950.000**/malam
- Tombol kecil "Pesan" — muncul saat scroll melewati CTA utama

**4. Deskripsi:**
- Teks paragraf 3–4 kalimat
- "Baca Selengkapnya" collapse/expand

**5. Fasilitas:**
- Grid ikon 3 kolom: WiFi | Kolam Renang | AC | Parkir | Dapur | Sarapan | TV | dll
- Nama fasilitas di bawah ikon
- Link: "Lihat Semua Fasilitas"

**6. Aturan Properti:**
- Check-in: ab 14.00 | Check-out: sebelum 12.00
- Maks tamu: 4 orang
- Tidak boleh merokok di dalam
- Hewan peliharaan: tidak diizinkan

**7. Lokasi & Map:**
- Map embed (Leaflet/Google Maps) — interaktif
- Alamat lengkap
- *"500m dari Pasar Ubud"*

**8. Informasi Sekitar (Muslim-Friendly Section — jika applicable):**
> **Ini adalah salah satu diferensiasi terpenting — harus tampil premium**

- Header dengan ikon masjid + *"Informasi Ramah Muslim"*
- Card list (horizontal scroll):
  - 🕌 Masjid Al-Hidayah — 350m (ikon, nama, jarak)
  - 🍽️ RM Sari Halal — 200m (tempat makan halal terdekat)
  - 🧭 Arah Kiblat — tersedia di kamar
  - 🚿 Fasilitas wudhu — tersedia
- Footer sub-teks kecil: *"Informasi dikurasi oleh tim platform"*

**9. CTA Bar (Sticky di bawah):**
- Kiri: Harga **Rp 950.000**/malam + sub "belum termasuk pajak"
- Kanan: Tombol **"Pesan Sekarang"** — Sky Blue, pill-shape, lebar cukup untuk thumb tap

#### Interaksi
- Swipe foto → transisi antar foto
- Tap foto → full-screen photo viewer dengan pinch-to-zoom
- Scroll → sticky CTA bar muncul (setelah melewati area harga utama)
- Tap "Baca Selengkapnya" → expand teks dengan animasi
- Tap map → open full-screen map atau deep-link ke maps app
- Tap "Pesan Sekarang" → navigate ke P-10

---

### P-09 · Unit Detail — Hidden Gem

**Kategori:** Core  
**Posisi dalam Flow:** P-07 → P-09 → P-10  
**⭐ Halaman terpenting untuk diferensiasi — harus terasa berbeda dan premium dari P-08**

#### Deskripsi
Halaman detail khusus unit Hidden Gem. Konten lebih kaya, narasi editorial, dan visual treatment berbeda (premium) dibanding unit reguler.

#### Yang Menarik untuk Investor
- **Konten editorial** yang tidak ada di platform lain — "cerita di balik tempat ini"
- Kualitas foto lebih tinggi dan lebih banyak
- Visual badge Gold yang menonjol memberikan rasa eksklusivitas
- Tips dari platform — menunjukkan bahwa platform ini **bukan sekadar aggregator**
- Section "Kenapa Ini Hidden Gem" — diferensiasi editorial yang kuat

#### Perbedaan dari P-08 (Unit Reguler)

| Aspek | Regular (P-08) | Hidden Gem (P-09) |
|---|---|---|
| Badge | Tidak ada / Muslim-Friendly | **✦ Hidden Gem** (Gold, prominent) |
| Header photo | 4–6 foto | 8–12 foto, kualitas lebih tinggi |
| Deskripsi | Dari mitra | Narasi editorial dari platform |
| Section tambahan | — | "Cerita di Balik Tempat Ini" |
| Section tambahan | — | "Tips dari Tim Kami" |
| Section tambahan | — | "Aktivitas di Sekitar" |
| Info Muslim-Friendly | Standard (jika ada) | Lebih detail |
| Visual treatment | Standard card | Gold accent border/details |

#### Struktur Visual Tambahan (di atas/tambahan dari P-08)

**Badge Hero yang Menonjol:**
- Overlay di foto hero: pita/ribbon "✦ Hidden Gem" dengan Gold gradient
- Animasi subtle shimmer pada badge

**Section: "Kenapa Ini Disebut Hidden Gem":**
> Box dengan background Sky Blue very light + border Gold tipis

- Ikon berlian Gold di kiri
- Headline: *"Kenapa Tempat Ini Istimewa"*
- 3 bullet point dengan ikon centang Gold:
  - *"Terletak di area yang jarang diketahui wisatawan biasa"*
  - *"Arsitektur tradisional Bali yang terjaga keasliannya"*
  - *"View persawahan langsung dari kamar tanpa terhalang apapun"*

**Section: "Cerita di Balik Tempat Ini" (Editorial):**
- Headline italic + paragraf editorial 4–6 kalimat
- Foto editorial dalam teks (inline photo)
- Tone: warm, storytelling — bukan deskripsi teknis

Contoh copy: *"Tersembunyi di balik jalan setapak yang dikelilingi sawah berteras, Villa Padi Ubud lahir dari impian seorang seniman lokal yang ingin berbagi keindahan kampung halamannya kepada dunia. Setiap sudutnya menceritakan sesuatu — dari ukiran pintu yang dikerjakan pengrajin Gianyar hingga kain tenun Bali yang menghias dinding..."*

**Section: "Aktivitas di Sekitar":**
- Horizontal scroll card:
  - Foto + Nama aktivitas + jarak
  - Contoh: Trekking Campuhan Ridge · 1.2km | Kelas Memasak Bali · 2km | Sunrise di Tegalalang · 3km

**Section: "Tips dari Tim Kami":**
- Card dengan ikon light bulb (Gold)
- 3 tips konkret:
  - *"Pesan sarapan sehari sebelumnya — chef lokal menyiapkan nasi jinggo khas Ubud"*
  - *"Waktu terbaik menikmati pemandangan: pukul 06.00–08.00 pagi"*
  - *"Bawa uang cash — area sekitar belum semua terima kartu"*

#### Interaksi
- Semua interaksi dari P-08 berlaku
- Tap section "Cerita" → smooth scroll expand
- Foto gallery: lebih banyak foto, swipe lebih fluid

---

### P-10 · Booking Form

**Kategori:** Booking  
**Posisi dalam Flow:** P-08/P-09 → P-10 → P-11

#### Deskripsi
Halaman pengisian data booking — tanggal, tamu, dan informasi kontak. Harus **efisien dan tidak berasa berat** — ini adalah titik di mana banyak user drop off di platform lain.

#### Yang Menarik untuk Investor
- Form yang minimal — hanya data yang benar-benar diperlukan
- Preview ringkasan unit di atas (user tidak lupa apa yang mereka booking)
- Date picker terintegrasi langsung dalam form (tidak popup terpisah)

#### Struktur Visual

**Sticky Mini Card di Atas:**
- Thumbnail foto kecil (64px) + nama penginapan + lokasi
- Rating bintang ringkas
- Memastikan user tahu mereka booking apa

**Form Bagian 1 — Tanggal & Tamu:**
- **Tanggal Check-in** + **Check-out** — side by side, tap → calendar picker
- Ringkasan durasi: *"3 malam"* (otomatis kalkulasi)
- **Jumlah Tamu** — stepper (+/−), min 1, max sesuai kapasitas unit

**Form Bagian 2 — Data Tamu Utama:**
- Label: *"Data Pemesan"*
- Nama Lengkap (pre-filled dari profil jika sudah login)
- Nomor HP/WhatsApp (untuk koordinasi check-in)
- Email konfirmasi (pre-filled)
- Optional: *"Tamu berbeda dengan pemesan?"* — toggle untuk input data tamu berbeda

**Form Bagian 3 — Permintaan Khusus (Optional):**
- Textarea: *"Ada permintaan khusus? (Opsional)"*
- Contoh placeholder: *"Early check-in, kamar non-smoking, dll."*

**Ringkasan Harga (Sticky di bawah atau sebelum CTA):**
- Rp 950.000 × 3 malam = Rp 2.850.000
- Pajak & biaya layanan: Rp 285.000
- **Total: Rp 3.135.000**

**CTA:**
- Tombol **"Lanjutkan ke Pembayaran"** — full-width, Sky Blue

#### Interaksi
- Tap "Check-in/out" → bottom sheet calendar muncul
- Tap stepper → haptic feedback (simulated)
- Input nama/email pre-filled dari profil → user tinggal verifikasi
- Scroll → sticky price summary selalu visible
- Tap CTA → validasi form → navigate ke P-11

---

### P-11 · Order Review

**Kategori:** Booking  
**Posisi dalam Flow:** P-10 → P-11 → P-12

#### Deskripsi
Halaman konfirmasi sebelum pembayaran — **review terakhir** sebelum user commit. Harus membuat user merasa aman dan percaya.

#### Yang Menarik untuk Investor
- Transparansi total: semua yang dibayarkan jelas breakdown-nya
- E-voucher preview — user tahu persis apa yang akan mereka dapatkan
- Kebijakan pembatalan ditampilkan jelas (trust builder)

#### Struktur Visual

**Header:** "Ringkasan Pesanan"

**Card: Detail Penginapan:**
- Foto + nama + lokasi
- Tanggal: Check-in — Check-out
- Durasi: 3 malam · 2 Tamu
- Tombol "Ubah" kecil di kanan (kembali ke P-10)

**Card: Data Pemesan:**
- Nama, Email, Nomor HP
- Tombol "Ubah" kecil

**Card: Rincian Harga:**
- Tabel bersih:
  - Rp 950.000 × 3 malam ......................... Rp 2.850.000
  - Pajak (10%) ....................................... Rp 285.000
  - Biaya layanan .................................... Rp 50.000
  - ─────────────────────────────
  - **Total yang Dibayarkan ...................... Rp 3.185.000**
- Warna total: Sky Blue, bold

**Card: Kebijakan:**
- Ikon info
- *"Pembatalan gratis hingga 24 jam sebelum check-in. Setelah itu dikenakan biaya 50%."*
- Link: "Baca kebijakan lengkap"

**Card: Yang Kamu Dapatkan:**
- Ikon e-voucher
- *"Setelah pembayaran berhasil, E-Voucher digital akan dikirim ke emailmu dan tersedia di aplikasi."*

**CTA:**
- Tombol **"Bayar Sekarang — Rp 3.185.000"** — full-width, Sky Blue, bold
- Sub-teks kecil: *"Aman. Terenkripsi. Terjamin."* + ikon gembok

#### Interaksi
- Tap "Ubah" pada detail → navigate kembali ke P-10
- Tap "Baca kebijakan" → bottom sheet kebijakan
- Tap CTA "Bayar Sekarang" → navigate ke P-12

---

### P-12 · Payment Method Selection

**Kategori:** Payment  
**Posisi dalam Flow:** P-11 → P-12 → P-13

#### Deskripsi
Pilihan metode pembayaran. Harus memberi user **pilihan yang cukup tanpa overwhelming** — metode Indonesia dan internasional.

#### Yang Menarik untuk Investor
- Dukungan metode pembayaran lokal DAN internasional — menegaskan target pasar global
- Visual yang clean, logo metode pembayaran yang familiar

#### Struktur Visual

**Header:** Jumlah total yang harus dibayar — **Rp 3.185.000** — besar, Sky Blue

**Countdown Timer:**
- *"Selesaikan pembayaran dalam 59:00"* — countdown merah saat mendekati 0
- Progress bar tipis di bawah

**Section: Transfer Bank & Virtual Account:**
- Radio list dengan logo bank: BCA | Mandiri | BNI | BRI
- Sub-teks: *"Nomor virtual account akan digenerate otomatis"*

**Section: E-Wallet:**
- Radio list: GoPay | OVO | DANA | ShopeePay | LinkAja
- Ikon masing-masing wallet

**Section: Kartu Kredit/Debit:**
- Input form kartu (jika dipilih): nomor kartu, nama, exp, CVV
- Logo Visa / Mastercard / JCB

**Section: Pembayaran Internasional:**
- Label: *"Untuk pembayaran luar negeri"*
- Opsi: Kartu Internasional (Stripe) | PayPal (Post-MVP label)

**CTA:**
- Tombol **"Konfirmasi Pembayaran"** — full-width, Sky Blue

#### Interaksi
- Tap radio → select metode
- Jika Virtual Account: langsung ke P-13 dengan instruksi VA
- Jika kartu kredit: form expand inline
- Countdown timer real-time update

---

### P-13 · Payment Processing / Waiting

**Kategori:** Payment  
**Posisi dalam Flow:** P-12 → P-13 → P-14 (sukses) / P-15 (gagal)

#### Deskripsi
Halaman penantian setelah konfirmasi pembayaran. Dua varian: (a) menunggu konfirmasi real-time, (b) instruksi Virtual Account.

#### Varian A: Kartu / E-Wallet (Konfirmasi Real-time)

**Visual:**
- Animasi loading premium (spinner Sky Blue atau animated illustration)
- Headline: *"Sedang Memproses Pembayaranmu..."*
- Sub: *"Jangan tutup halaman ini"*
- Progress steps visual: 3 langkah dengan animasi bertahap
  1. Memverifikasi pembayaran ✓
  2. Mengkonfirmasi ketersediaan unit ⟳ (animasi)
  3. Menyiapkan E-Voucher ○

#### Varian B: Virtual Account

**Visual:**
- Ikon bank besar
- Headline: *"Lakukan Transfer ke Nomor Berikut"*
- **Nomor VA besar dan jelas:** `8277 0001 2345 6789` (dengan tombol copy)
- Bank tujuan: BCA Virtual Account
- Jumlah tepat: **Rp 3.185.000** (harus transfer tepat)
- Batas waktu: *"Bayar sebelum 12 Apr 2026, 15:30 WIB"*
- Countdown timer merah
- Instruksi 3 langkah bergambar: Buka app bank → Transfer VA → Masukkan nominal

#### Interaksi
- Varian A: auto-navigate ke P-14 saat callback sukses (simulasi 3 detik)
- Varian B: tombol "Saya Sudah Bayar" (cek status manual)
- Tombol "Kembali ke Beranda" — secondary, teks saja

---

### P-14 · Booking Confirmed + E-Voucher

**Kategori:** Payment  
**Posisi dalam Flow:** P-13 → P-14  
**⭐ Momen "wow" terpenting dalam happy path — harus terasa celebratory**

#### Deskripsi
Halaman konfirmasi booking berhasil + E-Voucher digital. Ini adalah puncak happy path — user harus merasa puas, aman, dan excited.

#### Yang Menarik untuk Investor
- Visual "konfirmasi berhasil" yang celebratory — animasi confetti atau checkmark yang satisfying
- E-Voucher yang terasa premium dan nyata — seperti tiket digital sungguhan
- Informasi check-in yang komplet — user langsung tahu apa yang harus dilakukan
- QR code yang terasa "legit" — merepresentasikan tech yang matang

#### Struktur Visual

**Animation Layer (first 2 detik):**
- Animasi checkmark lingkaran hijau yang "draw" (stroke animation)
- Confetti atau particle burst subtle
- Haptic feedback simulation (visual bounce)

**Success State:**
- ✅ Headline besar: *"Booking Berhasil!"*
- Sub: *"E-Voucher sudah dikirim ke email kamu"*

**E-Voucher Card (Desain Premium):**
> Ini harus terasa seperti tiket premium, bukan halaman web biasa

Card dengan:
- Background: gradient Sky Blue ke warna lebih dalam
- Logo platform + nama "E-VOUCHER" dengan tipografi premium
- Garis putus-putus (perforasi) memisahkan bagian atas dan bawah
- **Atas:**
  - Foto thumbnail penginapan (bulat atau rounded)
  - Nama penginapan bold
  - Lokasi
  - Check-in: **Sabtu, 12 April 2026** (bold)
  - Check-out: **Selasa, 15 April 2026** (bold)
  - 2 Tamu · 3 Malam
- **Bawah (setelah perforasi):**
  - QR Code besar (di-generate, bisa dummy untuk prototype)
  - Kode booking: **#BK-2026-04121** (bold, monospace font)
  - Teks kecil: *"Tunjukkan kode ini saat check-in"*

**Info Check-in:**
- Card informasi: *"Apa yang Perlu Kamu Lakukan?"*
  - 1. Simpan E-Voucher ini (atau screenshot)
  - 2. Tiba di properti sesuai jadwal
  - 3. Tunjukkan kode booking ke staff

**Action Buttons:**
- **"Lihat Detail Pesanan"** — primary, Sky Blue
- **"Unduh E-Voucher (PDF)"** — secondary, outline
- **"Kembali ke Beranda"** — teks saja, abu

#### Interaksi
- Animasi konfirmasi auto-play saat page load
- Tap "Lihat Detail Pesanan" → navigate ke P-17
- Tap "Unduh PDF" → simulasi download (toast "Voucher sedang diunduh")
- Tap "Kembali ke Beranda" → navigate ke P-05

---

### P-15 · Payment Failed / Expired

**Kategori:** Payment  
**Posisi dalam Flow:** P-13 → P-15

#### Deskripsi
Halaman saat pembayaran gagal atau waktu habis. Harus **tidak frustrasi** — arahkan user dengan jelas untuk mencoba lagi.

#### Struktur Visual

**Varian A — Gagal:**
- Ikon ✕ lingkaran merah (animasi)
- Headline: *"Pembayaran Tidak Berhasil"*
- Sub: *"Mohon cek koneksi atau saldo kamu dan coba lagi"*
- Informasi: unit yang dicoba masih tersedia
- CTA: **"Coba Lagi"** → kembali ke P-12
- Secondary: "Ganti Metode Pembayaran"
- Link: "Hubungi CS" → chat CS

**Varian B — Expired:**
- Ikon jam berpasir (animasi)
- Headline: *"Waktu Pembayaran Habis"*
- Sub: *"Pesananmu sudah dibatalkan otomatis. Tenang, kamu bisa booking ulang."*
- CTA: **"Booking Ulang"** → kembali ke P-08/P-09
- Secondary: "Cari Penginapan Lain" → ke P-05

#### Interaksi
- Tap "Coba Lagi" / "Booking Ulang" sesuai varian
- Tap "Hubungi CS" → buka chat CS (simulasi, atau link ke WhatsApp)

---

### P-16 · My Bookings (Riwayat Pesanan)

**Kategori:** Account  
**Posisi dalam Flow:** Bottom Nav → P-16 → P-17

#### Deskripsi
Daftar semua booking customer — aktif, selesai, dan dibatalkan. Ini adalah hub akun yang menunjukkan **transparansi platform** dan trust-building.

#### Yang Menarik untuk Investor
- Status badge yang jelas dan berwarna — user langsung paham state setiap booking
- Timeline status dalam list card — menunjukkan transparansi
- Desain yang membuat order history terasa seperti "aset" customer, bukan sekedar data

#### Struktur Visual

**Tab Bar:**
- Semua | Aktif | Selesai | Dibatalkan
- Tab aktif: underline Sky Blue

**Setiap Booking Card:**
- Foto thumbnail kecil (kiri)
- **Nama Penginapan** (bold)
- Lokasi
- Tanggal: *"12–15 Apr 2026 · 3 malam"*
- Kode Booking: #BK-2026-04121 (monospace, kecil)
- Status Badge (kanan atas card):
  - 🟡 **Menunggu Pembayaran** (kuning)
  - 🔵 **Dikonfirmasi** (Sky Blue)
  - 🟢 **Check-in** (hijau)
  - ✅ **Selesai** (hijau tua)
  - ⛔ **Dibatalkan** (merah)
  - 🔄 **Refund Diproses** (abu-abu)
- Total harga: Rp 3.185.000
- Chevron "›" di kanan

**Empty State (jika belum ada booking):**
- Ilustrasi koper perjalanan
- *"Belum ada pesanan"*
- CTA: "Mulai Cari Penginapan"

#### Interaksi
- Tap tab → filter list dengan animasi fade
- Tap card → navigate ke P-17
- Pull-to-refresh

---

### P-17 · Booking Detail & Timeline

**Kategori:** Account  
**Posisi dalam Flow:** P-16 → P-17 → P-18

#### Deskripsi
Detail lengkap satu booking beserta **timeline perubahan status** — menunjukkan transparansi penuh kepada customer tentang apa yang terjadi dengan pesanan mereka.

#### Yang Menarik untuk Investor
- Timeline audit trail visual — tidak ada platform booking lokal yang menampilkan ini sebaik ini
- Transparency yang membangun trust
- Akses cepat ke E-Voucher dari halaman detail

#### Struktur Visual

**Header:** *"Detail Pesanan #BK-2026-04121"*

**Card: Ringkasan Penginapan:**
- Foto + nama + lokasi + tanggal + tamu

**Card: Status Saat Ini:**
- Badge besar status aktif: **🔵 Dikonfirmasi**
- Sub: *"Pembayaran berhasil. Penginapan sudah dikonfirmasi."*
- Tombol **"Lihat E-Voucher"** → P-18

**Card: Rincian Pembayaran:**
- Breakdown harga lengkap (sama dengan P-11)
- Metode bayar: BCA Virtual Account
- Tanggal bayar: 09 Apr 2026, 14:23 WIB

**Card: Timeline Status (Visual Timeline):**
> Ini adalah fitur yang paling powerful secara visual — gunakan vertical timeline dengan ikon dan warna

```
● [Hijau] Pesanan Dibuat
  09 Apr 2026, 13:45 WIB

● [Hijau] Pembayaran Berhasil
  09 Apr 2026, 14:23 WIB
  Metode: BCA Virtual Account

● [Hijau] E-Voucher Diterbitkan
  09 Apr 2026, 14:23 WIB

○ [Biru — Aktif] Menunggu Check-in
  12 Apr 2026, 14:00 WIB

○ [Abu — Mendatang] Check-out
  15 Apr 2026, 12:00 WIB

○ [Abu — Mendatang] Pesanan Selesai
```

**Card: Informasi Check-in:**
- Alamat lengkap
- Nomor HP mitra (untuk koordinasi)
- *"Tunjukkan kode booking saat tiba"*

**Action Buttons (bawah):**
- "Butuh Bantuan? Hubungi CS" — teks + ikon chat

#### Interaksi
- Tap "Lihat E-Voucher" → P-18
- Tap "Hubungi CS" → chat CS (simulasi)
- Timeline entry bisa di-tap untuk detail lebih (opsional)

---

### P-18 · E-Voucher Detail (In-App)

**Kategori:** Account  
**Posisi dalam Flow:** P-14 / P-17 → P-18

#### Deskripsi
Tampilan penuh E-Voucher di dalam app. User dapat menyimpan atau menunjukkan langsung dari halaman ini saat check-in.

#### Struktur Visual
- Versi expanded dari E-Voucher card di P-14
- Tombol "Brightness Max" suggestion (opsional)
- QR Code full-size
- Kode booking besar
- Info check-in
- Tombol: "Unduh PDF" | "Bagikan" | "Kembali"

---

### P-19 · Profile & Settings

**Kategori:** Account  
**Posisi dalam Flow:** Bottom Nav → P-19

#### Deskripsi
Halaman profil dan pengaturan akun customer.

#### Struktur Visual

**Header:**
- Avatar (lingkaran, inisial nama jika tidak ada foto)
- Nama lengkap (bold)
- Email
- Tombol "Edit Profil"

**Menu List:**
- 👤 Edit Profil
- 🔔 Notifikasi
- 🌐 Bahasa (dengan nilai saat ini: "Indonesia")
- 🔒 Keamanan & Password
- 📋 Syarat & Ketentuan
- 🛡️ Kebijakan Privasi
- ❓ Bantuan & CS
- 🚪 Keluar (merah)

#### Interaksi
- Tap "Bahasa" → navigate ke P-20
- Tap "Keluar" → confirmation modal → navigate ke P-04

---

### P-20 · Language Selector

**Kategori:** Settings  
**Posisi dalam Flow:** P-19 → P-20

#### Deskripsi
Pilihan bahasa. Halaman ini penting untuk **menunjukkan kepada investor** bahwa platform dirancang global dari awal.

#### Struktur Visual

**Header:** *"Pilih Bahasa / Select Language / اختر اللغة"*

**List Pilihan:**
- 🇮🇩 Bahasa Indonesia ✓ (terpilih)
- 🇬🇧 English
- 🇸🇦 العربية (Arabic) — dengan label kecil *"Segera Hadir"* (badge abu)

#### Interaksi
- Tap bahasa aktif (ID/EN) → instant switch
- Tap Arabic → toast *"Bahasa Arab segera tersedia di update berikutnya"*

---

### P-21 · Guest Interrupted Flow — Register Prompt

**Kategori:** Auth  
**Posisi dalam Flow:** P-08/P-09 → [Pesan Sekarang tanpa login] → P-21 → P-02

#### Deskripsi
Saat guest tanpa akun mencoba booking, alih-alih langsung tolak, platform menampilkan halaman ini dengan **promise yang jelas**: setelah daftar, proses booking akan dilanjutkan otomatis — **tidak perlu mulai dari awal**.

#### Yang Menarik untuk Investor
- UX yang **tidak membuang user** — ini diferensiasi dari banyak platform yang memutus alur
- Pesan yang encouraging, bukan punishing
- "Satu langkah lagi" framing yang psychologically smart

#### Struktur Visual
- Ikon kunci atau akun (animasi unlock)
- Headline: *"Satu Langkah Lagi!"*
- Sub: *"Daftar gratis untuk melanjutkan pesananmu. Setelah akun aktif, kamu langsung bisa lanjut bayar — tidak perlu pilih ulang dari awal."*
- Info card kecil:
  - 📋 Unit yang sudah kamu pilih **tersimpan**
  - ⏱️ Tersedia selama **10 menit**
- CTA: **"Daftar Gratis"** → P-02
- Secondary: "Sudah punya akun? Masuk" → P-04

---

### P-22 · Empty States

**Kategori:** UX Polish  
**Tujuan:** Menunjukkan kepada investor bahwa produk ini didesain dengan matang, bahkan untuk kondisi edge case

#### Deskripsi
Kumpulan empty state yang digunakan di berbagai halaman. Setiap empty state harus informatif dan mengundang aksi.

#### Varian

**Empty State — Search No Results:**
- Ilustrasi: peta dengan ikon tanda tanya
- Headline: *"Tidak ada hasil untuk pencarianmu"*
- Sub: *"Coba ubah tanggal atau lokasi pencarian"*
- CTA: "Ubah Pencarian"

**Empty State — No Bookings:**
- Ilustrasi: koper perjalanan kosong yang charming
- Headline: *"Belum ada pesanan"*
- Sub: *"Mulai perjalananmu dan temukan penginapan impian"*
- CTA: "Cari Penginapan"

**Empty State — No Notifications:**
- Ilustrasi: bel notifikasi tidur
- Headline: *"Tidak ada notifikasi"*
- Sub: *"Kamu akan menerima update booking dan promosi di sini"*

---

### P-23 · Notification Center

**Kategori:** Account  
**Posisi dalam Flow:** P-05 → [tap ikon notifikasi] → P-23

#### Deskripsi
Daftar notifikasi terbaru — booking konfirmasi, reminder check-in, promosi.

#### Struktur Visual

**Header:** "Notifikasi" + "Tandai semua telah dibaca"

**List Notifikasi (Grouped by Today / Earlier):**

Setiap item:
- Ikon kategori (booking = kalender biru, promo = tag gold, system = bell abu)
- Judul notifikasi (bold jika belum dibaca)
- Sub-teks pendek
- Waktu (2 jam lalu, kemarin, dll)
- Background putih (dibaca) vs Sky Blue very light (belum dibaca)

Contoh entries:
- 🔵 **Booking Dikonfirmasi** — Pesananmu #BK-2026-04121 sudah dikonfirmasi · 2 jam lalu
- 🔔 **Reminder Check-in** — Check-in di Villa Padi Ubud besok pukul 14:00 · 1 hari lalu
- 🏷️ **Promo Hidden Gem** — Diskon 20% untuk Hidden Gem Lombok minggu ini · 3 hari lalu

#### Interaksi
- Tap item → navigate ke halaman relevan (P-17 untuk booking)
- Swipe kiri → delete notifikasi
- Tap "Tandai semua dibaca" → semua item berubah ke state dibaca

---

## 5. Interaksi Global & Micro-Interactions

Berikut adalah daftar interaksi yang harus ada di seluruh prototype untuk memberikan kesan **polished dan premium**:

### Navigation
| Interaksi | Detail |
|---|---|
| Bottom nav tap | Haptic-like pulse animation pada ikon yang dipilih |
| Back navigation | Slide right (iOS style) atau slide-down (bottom sheet) |
| Page transition | Fade + slide horizontal untuk navigasi normal |
| Modal/Bottom sheet | Slide up dari bawah dengan backdrop gelap semi-transparan |

### Feedback & States
| Interaksi | Detail |
|---|---|
| Button tap | Scale down 95% → return (spring animation) |
| Loading state | Skeleton screen (tidak spinner saja) untuk halaman konten |
| Success toast | Muncul dari bawah, auto-dismiss 3 detik |
| Error state | Shake animation + border merah pada field |
| Bookmark toggle | Heart fill animation (scale up → settle) |

### Scroll Behavior
| Interaksi | Detail |
|---|---|
| Sticky header | Fade in/out dengan background saat scroll |
| Sticky CTA | Slide up dari bawah saat melewati area CTA utama |
| Pull-to-refresh | Spinner custom dengan logo/warna brand |

---

## 6. Catatan Teknis untuk Desainer

### Tools yang Direkomendasikan
- **Figma** — untuk prototype interaktif
- **Protopie** — untuk interaksi micro yang lebih kompleks (countdown, animasi)
- **Lottie** — untuk animasi checkmark, confetti, loading (JSON animation)

### Design Tokens

```
/* Colors */
--primary: #4AABF0;
--primary-dark: #2D8CC7;
--primary-light: #E8F5FD;
--accent-gold: #F0B756;
--accent-gold-light: #FEF6E4;
--background: #F8FAFB;
--surface: #FFFFFF;
--text-primary: #2D3436;
--text-secondary: #636E72;
--text-disabled: #B2BEC3;
--success: #27AE60;
--warning: #F39C12;
--error: #E74C3C;
--border: #DFE6E9;

/* Spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;

/* Border Radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-pill: 100px;

/* Typography */
--font-heading: [Premium display font — contoh: Playfair Display, Canela, atau Syne]
--font-body: [Clean sans-serif — contoh: DM Sans, Plus Jakarta Sans, atau Outfit]
--font-mono: [Untuk kode booking — JetBrains Mono atau IBM Plex Mono]
```

### Spesifikasi Mobile
- **Viewport:** 375 × 812px (iPhone SE / standard)
- **Safe area:** Perhatikan notch atas (44px) dan home indicator bawah (34px)
- **Touch target minimum:** 44 × 44px untuk semua elemen interaktif
- **Scroll:** Vertical natural, horizontal hanya untuk carousel
- **Keyboard:** Bottom sheet form harus scroll up saat keyboard muncul

### Data Mock yang Harus Disiapkan
- Minimal 8 unit penginapan (4 reguler, 4 hidden gem) dengan:
  - Nama realistis
  - Foto berkualitas tinggi (bisa dari Unsplash, CC license)
  - Harga masuk akal (Rp 350.000 – Rp 2.500.000/malam)
  - Rating & jumlah ulasan
  - Lokasi nyata (Bali, Yogyakarta, Lombok, dll)
- 1 akun user sample: nama, email, riwayat booking
- Minimal 2 booking dalam riwayat (1 aktif, 1 selesai)

---

## 7. Investor Demo Script (Suggested Flow)

Untuk presentasi prototype kepada investor, gunakan urutan demo berikut (estimasi 8–12 menit):

### Bagian 1: First Impression (1–2 menit)
1. Buka P-01 Onboarding → swipe 3 slide
2. *"Platform ini dirancang untuk semua traveler — lokal dan mancanegara — dengan keunggulan informasi yang belum ada di kompetitor mana pun."*

### Bagian 2: Discovery & Diferensiasi (3–4 menit)
3. Login → P-05 Home
4. *"Ini adalah halaman utama kami. Perhatikan section Hidden Gem di atas — properti-properti ini dikurasi editorial oleh tim internal kami, bukan sekadar listing mitra."*
5. Tap card Hidden Gem → P-09
6. *"Inilah perbedaan Hidden Gem vs listing biasa. Ada narasi editorial, tips eksklusif, dan konten yang memang dibuat untuk membuat traveler excited — ini yang membuat kami sulit ditiru."*
7. Scroll ke section Muslim-Friendly di P-09
8. *"Dan ini adalah fitur yang tidak ada di Traveloka, Airbnb, atau platform manapun — informasi Muslim-friendly yang dikurasi: lokasi masjid terdekat, restoran halal, fasilitas di kamar. Ini membuka pasar $225 miliar wisata Muslim global yang belum tersentuh."*

### Bagian 3: Booking Experience (3–4 menit)
9. Tap "Pesan Sekarang" → P-10 → P-11 → P-12 → P-13
10. *"Booking flow kami dirancang seminimal mungkin — hanya 4 langkah dari detail properti ke pembayaran."*
11. → P-14 Confirmed
12. *"Dan ini adalah momen yang kami desain dengan sangat hati-hati — E-Voucher digital yang terasa premium, bukan sekadar halaman konfirmasi biasa."*

### Bagian 4: Post-Booking Transparency (1–2 menit)
13. Navigate ke P-16 My Bookings → P-17 Detail & Timeline
14. *"Customer kami bisa melihat persis apa yang terjadi dengan pesanan mereka — real-time status timeline. Ini membangun kepercayaan yang tidak bisa dibeli dengan iklan."*

### Penutup
*"Dalam 12 bulan, kami menargetkan 500 unit listing terkurasi, dengan fokus initial di Bali dan Yogyakarta — dua destinasi teratas wisata Muslim internasional di Indonesia. Platform ini bukan sekadar booking engine lain — ini adalah editorial travel platform yang kebetulan bisa booking."*

---

*Dokumen ini disiapkan sebagai panduan komprehensif prototype Customer App untuk platform booking penginapan. Seluruh rekomendasi page, interaksi, dan copy mengacu pada Product Blueprint v2.0 dan standar prototype investor-ready.*

*Revisi dokumen ini sesuai kebutuhan saat desainer memulai pengerjaan di Figma.*
