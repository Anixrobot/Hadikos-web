# UI/UX Design System & Styling Guidelines - HADIKOS

## 1. Visual Direction & Mood
- **Design Style:** Simple, Clean, Modern Minimalist, High-Trust Property Showcase.
- **Core Theme:** **Fresh Emerald Green & Pure White** (Hijau & Putih Bersih).
- **Prinsip Utama:**
  - Gunakan banyak ruang kosong (*generous whitespace*) agar foto asli kamar dan ruangan kos tampil menonjol.
  - Hindari elemen dekoratif berlebihan; fokus pada tipografi yang tegas, ikon yang bersih, dan kontras tombol CTA yang jelas.
  - Semua komponen kartu dan gambar menggunakan sudut membulat halus (*soft rounded corners*).

---

## 2. Color Palette (Tailwind CSS Mapping)

### 2.1. Backgrounds
- **Primary Background (Dominan):** `#FFFFFF` -> `bg-white`
- **Secondary Section Background (Selang-seling):** `#F8FAFC` / `#F0FDF4` -> `bg-slate-50` atau `bg-emerald-50/40`
- **Dark Accent Banner (CTA Section / Footer):** `#064E3B` -> `bg-emerald-950`
- **Glassmorphism Navbar:** `bg-white/85 backdrop-blur-md`

### 2.2. Brand & Accent Colors (Emerald Green)
- **Primary Brand Color (Buttons, Active States, Icons):** `#059669` -> `bg-emerald-600`, `text-emerald-600`, `border-emerald-600`
- **Primary Hover State:** `#047857` -> `hover:bg-emerald-700`
- **Soft Badge Fill:** `#D1FAE5` -> `bg-emerald-100 text-emerald-800`
- **Highlight Badge (Kamar VIP / Populer):** `#FEF3C7` -> `bg-amber-100 text-amber-800 border border-amber-200`

### 2.3. Typography Colors
- **Heading / Primary Text:** `#0F172A` -> `text-slate-900`
- **Body / Secondary Text:** `#475569` -> `text-slate-600`
- **Muted / Caption Text:** `#94A3B8` -> `text-slate-400`
- **Text on Emerald/Dark Background:** `#FFFFFF` -> `text-white` dan `#A7F3D0` -> `text-emerald-200`

---

## 3. Typography & Font Scale

- **Font Family:** `'Plus Jakarta Sans', 'Inter', sans-serif` (Import dari Google Fonts di `index.html`).
- **Typographic Scale (Tailwind Classes):**
  - **Hero Title (H1):** `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900`
  - **Section Heading (H2):** `text-2xl sm:text-3xl font-bold tracking-tight text-slate-900`
  - **Section Subtitle:** `text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed`
  - **Card Title (H3 - Nama Kamar/Fasilitas):** `text-xl font-bold text-slate-900`
  - **Body Text:** `text-sm sm:text-base text-slate-600 leading-relaxed`
  - **Pill / Badge Text:** `text-xs font-semibold uppercase tracking-wider`

---

## 4. Layouting, Containers & Grid System

### 4.1. Global Container & Section Spacing
- **Main Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Vertical Section Padding:** `py-16 md:py-24`
- **Section Header Margin Bottom:** `mb-10 md:mb-14`

### 4.2. Section Grid Specifications
1. **Navbar:** `h-20 flex items-center justify-between`
2. **Hero Section:** `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-8 pb-16 md:py-20`
   - Left Content: `lg:col-span-7 space-y-6`
   - Right Visual Collage: `lg:col-span-5 relative`
3. **4-Pillar Keunggulan:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
4. **3-Card Katalog Kamar:** `grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch`
5. **Bento Grid Fasilitas Bersama:**
   - Grid Wrapper: `grid grid-cols-1 md:grid-cols-3 gap-6`
   - Kartu Utama (Ruang Tamu/TV & Balkon Rooftop): `md:col-span-2` atau kartu dengan tinggi proporsional `h-72 sm:h-80`
   - Kartu Pendukung (Kamar Mandi Sharing 1:3, Parkir Indoor, Dapur, Cuci Jemur): `md:col-span-1 h-72 sm:h-80`

---

## 5. Component Styling & Micro-Interactions

### 5.1. Cards (Room Cards & Feature Cards)
- **Base Style:** `bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between`
- **Hover Effect:** `transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/40`
- **VIP Room Card Highlight:** Gunakan `ring-2 ring-emerald-600 shadow-md` pada Kamar 1 (VIP Rooftop) agar langsung menarik perhatian pengunjung.

### 5.2. Buttons
- **Primary Button (Emerald):** `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-emerald-500/20 hover:shadow-lg transition-all duration-200 active:scale-[0.98]`
- **Secondary / Outline Button:** `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 font-semibold text-sm sm:text-base transition-all duration-200`

### 5.3. Image Containers
- Gunakan `aspect-[4/3]` atau `h-60 w-full object-cover` pada kartu kamar.
- Tambahkan efek zoom halus saat kartu di-hover: `group-hover:scale-105 transition-transform duration-500 ease-out`.