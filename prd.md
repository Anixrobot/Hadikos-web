# Product Requirements Document (PRD) - Website Profil & Promosi HADIKOS

## 1. Project Overview
- **Nama Proyek:** Hadikos Web Profile & Promotion
- **Tech Stack:** React.js (Functional Components + Hooks), Tailwind CSS, Lucide React (Icons)
- **Jenis Website:** Single-Page Promotional Landing Page (Mobile-First & High Conversion)
- **Kategori Properti:** Kos Khusus Putra (Laki-laki) Eksklusif
- **Unique Selling Proposition (USP):**
  1. **Super Private & Kondusif:** Hanya terdiri dari 3 unit kamar di dalam satu rumah besar yang lega dan asri.
  2. **Harga 100% All-In:** Biaya sewa bulanan sudah termasuk Listrik, Air, dan WiFi stabil (tanpa tagihan tambahan).
  3. **Akses Strategis Dekat LRT:** Lokasi kos dekat dengan akses transportasi umum Stasiun LRT.
  4. **Kamar Mandi Sharing Lega (Rasio 1:3):** 1 Kamar mandi umum bersih yang hanya dipakai bersama oleh maksimal 3 penghuni kos (bebas antre).
- **Primary Conversion Goal:** Mengarahkan pengunjung untuk menghubungi Admin via WhatsApp dengan format pesan otomatis (pre-filled message) guna menjadwalkan survei lokasi atau booking kamar.

---

## 2. Content Boundaries (Batasan Konten)
- **Yang Wajib Ada:** Identitas Kos Putra Hadikos, 4 keunggulan utama, katalog 3 kamar tidur (2 AC Besar, 1 Non-AC Kecil), fasilitas bersama (Ruang Tamu/TV, Balkon/Rooftop, Parkir Indoor, Dapur, Area Cuci Jemur, Kamar Mandi Sharing 1:3), info akses LRT, dan CTA WhatsApp.
- **Yang Dihilangkan (Out of Scope):**
  - TIDAK menampilkan seksi Peraturan Kos (House Rules).
  - TIDAK menampilkan rincian batas wajar pemakaian daya listrik atau FAQ yang panjang agar halaman tampil simpel, bersih, dan fokus pada visual serta konversi.

---

## 3. Arsitektur Komponen & Spesifikasi Konten (Section-by-Section)

### 3.1. Sticky Navbar (`<Navbar />`)
- **Kiri:** Brand Logo & Nama **HADIKOS** + Badge kecil `Kos Putra`.
- **Tengah (Menu Navigasi Smooth Scroll):**
  - `#beranda` (Beranda)
  - `#keunggulan` (Keunggulan)
  - `#kamar` (Pilihan Kamar)
  - `#fasilitas` (Fasilitas)
  - `#lokasi` (Lokasi LRT)
- **Kanan:** Tombol CTA `Chat Admin WA` (Hijau Emerald) + Tombol Hamburger Menu untuk layar Mobile.

### 3.2. Hero Section (`<Hero />`)
- **Top Badge:** `KOS PUTRA EKSKLUSIF • HANYA 3 UNIT KAMAR`
- **Main Headline:** "Hunian Kos Putra Tenang & Nyaman — Harga All-In Selangkah dari LRT"
- **Sub-headline:** "Nikmati kenyamanan kos serasa rumah sendiri dengan ruang komunal super luas dan lingkungan bersih kondusif. Sewa bulanan sudah termasuk Listrik, Air, dan WiFi berkecepatan tinggi."
- **Highlight Pills:**
  - `⚡ Gratis Listrik, Air & WiFi`
  - `🚆 Dekat Stasiun LRT`
  - `🏠 Maksimal 3 Penghuni`
- **CTA Buttons:**
  - Primary CTA: `Lihat 3 Pilihan Kamar` (Scroll ke `#kamar`)
  - Secondary CTA: `Jadwalkan Survei via WA` (Direct link ke WhatsApp)
- **Hero Visual:** Kolase foto utama ruang komunal/balkon Hadikos dengan 2 floating card badge (`100% All-In Bill` & `Akses Dekat LRT`).

### 3.3. Keunggulan Utama (`<Features />` - ID: `#keunggulan`)
Ditampilkan dalam 4 kartu sejajar (Grid 4 kolom di Desktop, 1-2 kolom di Mobile):
1. **Harga Transparan All-In:** Sewa bulanan sudah termasuk Listrik, Air, dan WiFi tanpa biaya tersembunyi.
2. **Koneksi WiFi Stabil:** Internet cepat dan stabil untuk menunjang kuliah online, WFH, maupun streaming.
3. **Lingkungan Bersih & Tenang:** Hanya 3 kamar dalam satu rumah besar, privasi terjaga dan tidak berisik.
4. **Dekat Transportasi LRT:** Memudahkan mobilitas harian menuju kampus, kantor, atau pusat kota via Stasiun LRT.

### 3.4. Katalog 3 Kamar (`<RoomCatalog />` - ID: `#kamar`)
Menampilkan tepat 3 kartu kamar berdampingan (Grid 3 kolom) tanpa tombol filter yang rumit.

#### Data Spesifikasi 3 Kamar:
1. **Kamar 1: Tipe VIP Rooftop (Kamar Besar + AC)**
   - **Badge:** `Paling Favorit • Akses Rooftop`
   - **Ukuran:** Kamar Besar / Luas
   - **Pendingin:** AC (Air Conditioner)
   - **Keunggulan Utama:** Pintu ganda akses langsung ke area Balkon/Rooftop santai bersofa dengan pemandangan asri.
   - **Fasilitas Kamar:** Kasur single bed + bantal & guling, lemari pakaian susun, meja cermin rias + kursi stool, AC, akses balkon/rooftop.
   - **Kamar Mandi:** Kamar Mandi Sharing Bersih (Rasio 1:3)
   - **Tagihan:** All-In (Termasuk Listrik, Air, WiFi)

2. **Kamar 2: Tipe Deluxe Spacious (Kamar Besar + AC)**
   - **Badge:** `Ruang Ekstra Lega`
   - **Ukuran:** Kamar Besar / Ekstra Lega
   - **Pendingin:** AC (Air Conditioner)
   - **Keunggulan Utama:** Ruangan sangat luas dengan sirkulasi 2 jendela terang dan furnitur kayu jati lengkap.
   - **Fasilitas Kamar:** Ranjang kayu single bed + kasur + bantal & guling, lemari kayu 3 pintu ukuran besar, meja kerja/belajar + kursi puff, meja cermin, AC.
   - **Kamar Mandi:** Kamar Mandi Sharing Bersih (Rasio 1:3)
   - **Tagihan:** All-In (Termasuk Listrik, Air, WiFi)

3. **Kamar 3: Tipe Regular Cozy (Kamar Kecil + Non-AC)**
   - **Badge:** `Pilihan Hemat & Nyaman`
   - **Ukuran:** Kamar Compact / Standar
   - **Pendingin:** Non-AC (Kipas Angin Besi Kencang)
   - **Keunggulan Utama:** Suasana hangat dilengkapi karpet lantai tebal dan jendela ventilasi udara.
   - **Fasilitas Kamar:** Tempat tidur + kasur + bantal & guling, lemari pakaian kayu 2 pintu, kipas angin, karpet lantai merah tebal, rak dinding & cermin.
   - **Kamar Mandi:** Kamar Mandi Sharing Bersih (Rasio 1:3)
   - **Tagihan:** All-In (Termasuk Listrik, Air, WiFi)

- **Interaksi Kartu Kamar:**
  - Tombol `Lihat Detail & Foto`: Membuka Modal Pop-up (`<RoomModal />`) berisi foto besar dan rincian lengkap.
  - Tombol `Pesan / Tanya Kamar Ini`: Mengarahkan langsung ke WhatsApp Admin dengan pesan otomatis sesuai nama kamar yang dipilih.

### 3.5. Fasilitas Bersama (`<PublicFacilities />` - ID: `#fasilitas`)
Ditampilkan menggunakan layout **Modern Bento Grid** dengan foto dan deskripsi singkat:
1. **Ruang Tamu & Ruang TV Super Luas:** Area komunal plafon tinggi yang sejuk dengan sofa, kursi santai, dan TV layar datar.
2. **Balkon / Rooftop Santai:** Area semi-outdoor lantai atas dengan sofa empuk dan tirai peneduh, menghadap pepohonan hijau.
3. **Kamar Mandi Umum Bersih (1 untuk 3 Penghuni):** Kamar mandi sharing yang terawat dan hanya dipakai bersama oleh maksimal 3 anak kos.
4. **Garasi Parkir Motor Indoor:** Parkir motor di dalam pagar berlantai keramik, 100% aman dari hujan, panas, dan pencurian.
5. **Dapur Bersama:** Fasilitas dapur praktis untuk kebutuhan memasak penghuni.
6. **Area Cuci Baju & Jemuran:** Area khusus yang lega dan terkena sinar matahari untuk mencuci serta menjemur pakaian.

### 3.6. Lokasi & Akses LRT (`<LocationSection />` - ID: `#lokasi`)
- **Konten Kiri:** Daftar keunggulan lokasi (Dekat Stasiun LRT, dekat minimarket/warung makan, akses jalan lingkungan aman dan tenang) + Tombol `Buka Rute di Google Maps`.
- **Konten Kanan:** Visualisasi peta interaktif (Google Maps iframe embed) + kartu highlight jarak tempuh ke Stasiun LRT.

### 3.7. CTA Penutup & Alur Booking WhatsApp (`<BookingCTA />` & `<Footer />`)
- **3 Langkah Mudah Menghuni Hadikos:**
  1. Pilih tipe kamar di katalog web.
  2. Klik tombol WhatsApp untuk tanya ketersediaan / atur jadwal survei.
  3. Survei lokasi, cocok, dan langsung kunci kamar.
- **Quick WA Selector:** Dropdown singkat untuk memilih kamar (`VIP Rooftop AC`, `Deluxe Spacious AC`, `Regular Cozy Non-AC`), memilih tujuan (`Jadwalkan Survei Lokasi` atau `Tanya Ketersediaan & Booking`), dan tombol `Kirim Pesan WhatsApp Sekarang`.
- **Floating WhatsApp Button:** Tombol bulat melayang di pojok kanan bawah layar.