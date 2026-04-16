export type Amenity =
  | "WiFi"
  | "Kolam Renang"
  | "Sarapan"
  | "Parkir"
  | "AC"
  | "Dapur"
  | "Arah Kiblat"
  | "Makanan Halal";

export type BookingStatus =
  | "Menunggu Pembayaran"
  | "Dikonfirmasi"
  | "Check-in"
  | "Selesai"
  | "Dibatalkan";

export interface NearbyActivity {
  name: string;
  distance: string;
}

export interface MuslimFriendlyInfo {
  prayerPlace: string;
  halalFood: string;
  qiblaInfo: string;
  wudhuFacility: string;
  note: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  type: "Hotel" | "Villa" | "Homestay" | "Cottage" | "Resort";
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageLabel: string;
  imageUrl: string;
  shortDescription: string;
  description: string;
  amenities: Amenity[];
  maxGuests: number;
  isHiddenGem?: boolean;
  isMuslimFriendly?: boolean;
  highlights: string[];
  hiddenGemReasons?: string[];
  editorialStory?: string;
  teamTips?: string[];
  nearbyActivities?: NearbyActivity[];
  muslimInfo?: MuslimFriendlyInfo;
}

export interface BookingTimelineEntry {
  title: string;
  timestamp: string;
  state: "done" | "active" | "upcoming";
  detail?: string;
}

export interface Booking {
  id: string;
  propertySlug: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  total: number;
  paymentMethod: string;
  status: BookingStatus;
  timeline: BookingTimelineEntry[];
}

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  time: string;
  type: "booking" | "promo" | "system";
  unread?: boolean;
}

export interface AppUser {
  name: string;
  email: string;
  language: "id" | "en";
}