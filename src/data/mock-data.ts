import { AppNotification, AppUser, Booking, Property } from "@/lib/types";

export const currentUser: AppUser = {
  name: "Alya Rahma",
  email: "alya.rahma@example.com",
  language: "id",
};

export const properties: Property[] = [
  {
    id: "prop-1",
    slug: "villa-padi-ubud",
    name: "Villa Padi Ubud",
    type: "Villa",
    location: "Ubud, Bali",
    price: 950000,
    originalPrice: 1100000,
    rating: 4.9,
    reviewCount: 124,
    imageLabel: "Private Escape",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Villa private bernuansa tropis dengan sarapan premium dan suasana tenang khas Ubud.",
    description:
      "Tersembunyi di balik jalur sawah Ubud, villa ini menawarkan suasana private, interior hangat, dan pengalaman menginap yang terasa personal.",
    amenities: ["WiFi", "Kolam Renang", "Sarapan", "AC", "Arah Kiblat", "Makanan Halal"],
    maxGuests: 4,
    isHiddenGem: true,
    isMuslimFriendly: true,
    highlights: ["Pool", "Mountain View", "Breakfast"],
    hiddenGemReasons: [
      "Lokasi tenang yang jarang diketahui wisatawan umum",
      "Arsitektur tradisional dengan sentuhan premium",
      "Pemandangan sawah langsung dari kamar utama",
    ],
    editorialStory:
      "Tersembunyi di balik jalan setapak yang dikelilingi sawah, Villa Padi Ubud dibangun untuk menghadirkan ketenangan Bali yang paling otentik. Setiap detail ruangnya terasa hangat, personal, dan siap menjadi cerita perjalanan yang berkesan.",
    teamTips: [
      "Datang pagi untuk sunrise terbaik dari balkon utama",
      "Pesan sarapan sehari sebelumnya untuk menu khas Bali",
      "Siapkan uang tunai untuk area sekitar desa",
    ],
    nearbyActivities: [
      { name: "Campuhan Ridge Walk", distance: "1.2 km" },
      { name: "Kelas Memasak Bali", distance: "2 km" },
      { name: "Tegalalang Sunrise", distance: "3 km" },
    ],
    muslimInfo: {
      prayerPlace: "Masjid Al-Hidayah · 350m",
      halalFood: "RM Sari Halal · 200m",
      qiblaInfo: "Arah kiblat tersedia di kamar",
      wudhuFacility: "Area wudhu tersedia",
      note: "Informasi dikurasi oleh tim platform",
    },
  },
  {
    id: "prop-2",
    slug: "samudra-haven-lombok",
    name: "Samudra Haven Lombok",
    type: "Resort",
    location: "Senggigi, Lombok",
    price: 1250000,
    rating: 4.8,
    reviewCount: 96,
    imageLabel: "Ocean Escape",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Pemandangan laut, akses pantai cepat, dan pengalaman resort santai.",
    description:
      "Resort premium dengan kamar luas, akses pantai pribadi, dan area santai untuk keluarga maupun solo traveler.",
    amenities: ["WiFi", "Kolam Renang", "Sarapan", "Parkir", "AC"],
    maxGuests: 3,
    isHiddenGem: true,
    highlights: ["Beachfront", "Sunset", "Spa"],
    hiddenGemReasons: [
      "Sunset langsung dari deck resort",
      "Akses pantai semi-private",
      "Suasana lebih tenang dari area wisata utama",
    ],
    editorialStory:
      "Samudra Haven menawarkan sisi Lombok yang lebih tenang dan refined. Tempat ini cocok untuk traveler yang ingin menikmati laut tanpa keramaian yang berlebihan.",
    teamTips: ["Pilih kamar lantai atas untuk view penuh", "Sunset terbaik pukul 17.30"],
    nearbyActivities: [{ name: "Sunset Cruise", distance: "800m" }],
  },
  {
    id: "prop-3",
    slug: "teras-senja-yogya",
    name: "Teras Senja Yogyakarta",
    type: "Homestay",
    location: "Kota Gede, Yogyakarta",
    price: 480000,
    originalPrice: 560000,
    rating: 4.7,
    reviewCount: 77,
    imageLabel: "Warm Jogja",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Homestay hangat dekat pusat budaya dengan sentuhan lokal.",
    description:
      "Pilihan nyaman untuk eksplorasi Yogyakarta dengan suasana homey dan lokasi strategis.",
    amenities: ["WiFi", "Sarapan", "Parkir", "AC", "Makanan Halal"],
    maxGuests: 2,
    isMuslimFriendly: true,
    highlights: ["City Access", "Family Stay"],
    muslimInfo: {
      prayerPlace: "Masjid Mataram · 250m",
      halalFood: "Gudeg Halal Mbak Sari · 180m",
      qiblaInfo: "Arah kiblat tersedia pada panduan kamar",
      wudhuFacility: "Tempat wudhu outdoor",
      note: "Info diperbarui berkala oleh tim kurasi",
    },
  },
  {
    id: "prop-4",
    slug: "langit-batu-malang",
    name: "Langit Batu Retreat",
    type: "Cottage",
    location: "Batu, Malang",
    price: 670000,
    rating: 4.6,
    reviewCount: 65,
    imageLabel: "Mountain Air",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Cottage pegunungan yang tenang untuk recharge singkat bersama pasangan atau keluarga kecil.",
    description:
      "Cottage dengan suasana pegunungan, cocok untuk short escape dan keluarga kecil.",
    amenities: ["WiFi", "Sarapan", "Parkir", "Dapur"],
    maxGuests: 4,
    highlights: ["Hillside", "Cool Air"],
  },
  {
    id: "prop-5",
    slug: "nusa-breeze-suite",
    name: "Nusa Breeze Suite",
    type: "Hotel",
    location: "Nusa Penida, Bali",
    price: 840000,
    rating: 4.8,
    reviewCount: 81,
    imageLabel: "Island View",
    imageUrl:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Suite modern dengan akses cepat ke spot wisata utama.",
    description:
      "Hotel modern yang dirancang untuk traveler aktif, dengan view pulau yang terbuka dan layanan cepat.",
    amenities: ["WiFi", "Kolam Renang", "AC", "Sarapan"],
    maxGuests: 2,
    highlights: ["Island Trip", "Fast Check-in"],
  },
  {
    id: "prop-6",
    slug: "kampung-lintang-bajo",
    name: "Kampung Lintang Bajo",
    type: "Villa",
    location: "Labuan Bajo",
    price: 1390000,
    rating: 4.9,
    reviewCount: 58,
    imageLabel: "Harbor Glow",
    imageUrl:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Villa premium untuk pengalaman sunset dan island hopping.",
    description:
      "Stay premium dengan ambience hangat, area lounge luas, dan akses mudah ke pelabuhan.",
    amenities: ["WiFi", "Kolam Renang", "Sarapan", "Parkir", "AC"],
    maxGuests: 5,
    isHiddenGem: true,
    highlights: ["Sunset Deck", "Private Lounge"],
    hiddenGemReasons: [
      "View pelabuhan yang terbuka luas",
      "Jumlah kamar terbatas dan eksklusif",
      "Cocok untuk curated island trip",
    ],
    editorialStory:
      "Properti ini terasa seperti basecamp eksklusif sebelum menjelajah Komodo. Material kayu, pencahayaan hangat, dan panorama senja menciptakan pengalaman yang memorable.",
    teamTips: ["Book island hopping lebih awal", "Pilih kamar barat untuk sunset"],
  },
];

export const bookings: Booking[] = [
  {
    id: "BK-2026-04121",
    propertySlug: "villa-padi-ubud",
    checkIn: "2026-04-12",
    checkOut: "2026-04-15",
    guests: 2,
    nights: 3,
    total: 3185000,
    paymentMethod: "BCA Virtual Account",
    status: "Dikonfirmasi",
    timeline: [
      { title: "Pesanan Dibuat", timestamp: "09 Apr 2026, 13:45 WIB", state: "done" },
      {
        title: "Pembayaran Berhasil",
        timestamp: "09 Apr 2026, 14:23 WIB",
        state: "done",
        detail: "Metode: BCA Virtual Account",
      },
      { title: "E-Voucher Diterbitkan", timestamp: "09 Apr 2026, 14:23 WIB", state: "done" },
      { title: "Menunggu Check-in", timestamp: "12 Apr 2026, 14:00 WIB", state: "active" },
      { title: "Check-out", timestamp: "15 Apr 2026, 12:00 WIB", state: "upcoming" },
    ],
  },
  {
    id: "BK-2026-03208",
    propertySlug: "teras-senja-yogya",
    checkIn: "2026-03-03",
    checkOut: "2026-03-05",
    guests: 2,
    nights: 2,
    total: 1106000,
    paymentMethod: "GoPay",
    status: "Selesai",
    timeline: [
      { title: "Pesanan Selesai", timestamp: "05 Mar 2026, 12:00 WIB", state: "done" },
    ],
  },
];

export const notifications: AppNotification[] = [
  {
    id: "notif-1",
    title: "Booking Dikonfirmasi",
    body: "Pesananmu #BK-2026-04121 sudah dikonfirmasi.",
    time: "2 jam lalu",
    type: "booking",
    unread: true,
  },
  {
    id: "notif-2",
    title: "Reminder Check-in",
    body: "Check-in di Villa Padi Ubud besok pukul 14:00.",
    time: "1 hari lalu",
    type: "system",
  },
  {
    id: "notif-3",
    title: "Promo Hidden Gem",
    body: "Diskon 20% untuk Hidden Gem Lombok minggu ini.",
    time: "3 hari lalu",
    type: "promo",
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getBookingById(id: string) {
  return bookings.find((booking) => booking.id === id);
}
