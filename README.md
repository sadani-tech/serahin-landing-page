# Serahin Landing Page

Website pemasaran publik untuk **Serahin**, terpisah dari aplikasi operasional
di folder `../serahin`.

Konten produk dirangkum dari PRD Serahin:

- **Tersedia:** kemampuan PRD v1.0–v1.9.
- **Dalam roadmap:** PRD v2.0 (notifikasi WhatsApp) dan PRD v3.0
  (marketplace multi-seller), karena keduanya masih berstatus draft.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Jika aplikasi utama juga berjalan di port 3000,
jalankan landing page dengan `npm run dev -- -p 3001`.

Salin `.env.example` menjadi `.env.local` untuk mengarahkan tombol **Masuk**
ke URL aplikasi Serahin yang benar.

## Memperbarui saat PRD baru datang

Semua copy fitur, fase roadmap, alur, dan FAQ berada di
`src/lib/product-content.ts`. Perbarui registry tersebut terlebih dahulu;
komponen halaman akan mengikuti datanya tanpa perlu mengubah struktur layout.

## Pemeriksaan

```bash
npm run lint
npm run build
```
