import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Serahin — Kelola Pre-Order dalam Satu Alur",
  description: "Kelola kampanye PO, pesanan, pembayaran, produksi, dan pengalaman pembeli dalam satu tempat yang rapi.",
  keywords: ["aplikasi pre-order", "manajemen PO", "sistem PO", "seller Indonesia", "Serahin"],
  openGraph: {
    title: "Serahin — Kelola Pre-Order dalam Satu Alur",
    description: "Dari buka PO sampai barang terkirim, semua lebih rapi bersama Serahin.",
    type: "website",
    locale: "id_ID",
    siteName: "Serahin",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8ee",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
