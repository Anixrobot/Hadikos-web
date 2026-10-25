// HADIKOS Static Data Source & Configuration
// Strictly following prd.md and design.md

export const HADIKOS_CONFIG = {
  name: "HADIKOS",
  tagline: "Kos Putra Eksklusif Dekat Stasiun LRT",
  badge: "Kos Putra Eksklusif",
  subBadge: "Hanya 3 Unit Kamar",
  phone: "6287878618339", // Ganti dengan nomor WhatsApp admin aktif (format: 62...)
  phoneDisplay: "+62 878-7861-8339",
  address: "Komplek Jatibening AL, Jl. Bintan No. 150 RT.005/RW.10, Jatibening, Kec. Pondok Gede",
  city: "Kota Bekasi, Jawa Barat 17412",
  mapsUrl: "https://maps.app.goo.gl/iLcqxgkfnrjzaAUK8",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.885664977464!2d106.9463083!3d-6.2652504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d9a78e690ab%3A0xe66ae6af8d1a662b!2shadikos!5e0!3m2!1sid!2sid",
  maxTenants: 3,
  bathroomRatio: "1 : 3",
};

export const HIGHLIGHT_PILLS = [
  { icon: "Zap", label: "Gratis Listrik, Air & WiFi", sublabel: "100% All-In Bill" },
  { icon: "Train", label: "Dekat Stasiun LRT", sublabel: "3-5 Menit Akses" },
  { icon: "Users", label: "Maksimal 3 Penghuni", sublabel: "Super Tenang & Privat" },
];

export const KEY_FEATURES = [
  {
    id: "all-in",
    icon: "BadgeCheck",
    title: "Harga Transparan All-In",
    description: "Sewa bulanan sudah mencakup pemakaian Listrik, Air, dan WiFi stabil. Anda tidak perlu pusing memikirkan token listrik tambahan atau tagihan bulanan tersembunyi.",
    highlight: "Bebas Biaya Tambahan",
  },
  {
    id: "wifi",
    icon: "Wifi",
    title: "Koneksi WiFi Stabil",
    description: "Didukung jaringan internet fiber optic berkecepatan tinggi yang andal untuk kebutuhan WFH (Work From Home), kuliah online, skripsi, hingga streaming video tanpa buffer.",
    highlight: "Fiber Optic High-Speed",
  },
  {
    id: "peaceful",
    icon: "Home",
    title: "Lingkungan Kondusif & Privat",
    description: "Hanya terdiri dari 3 unit kamar tidur dalam satu rumah besar yang lega. Suasana hunian terasa seperti rumah keluarga sendiri: tenang, bersih, aman, dan tidak berisik.",
    highlight: "Hanya 3 Kamar Kos",
  },
  {
    id: "lrt",
    icon: "Train",
    title: "Dekat Transportasi LRT",
    description: "Lokasi prima yang memudahkan mobilitas harian menuju kampus ternama, kawasan perkantoran, dan pusat bisnis ibu kota dengan cepat tanpa stres macet.",
    highlight: "Mobilitas Efisien",
  },
];

export const ROOMS_DATA = [
  {
    id: "kamar-vip-rooftop",
    name: "Tipe kamar besar rooftop",
    category: "Kamar Besar + AC",
    badge: "Paling Favorit • Akses Rooftop",
    isHighlight: true, // Special emerald border highlight
    tag: "VIP SUITE",
    size: "Kamar Besar",
    cooling: "AC (Air Conditioner Dingin)",
    bedType: "Single Bed + Bantal & Guling",
    bathroom: "Kamar Mandi Sharing Bersih (Rasio 1:3)",
    billing: "100% All-In (Termasuk Listrik, Air & WiFi)",
    keyBenefit: "Pintu ganda akses langsung ke area Balkon/Rooftop dengan pemandangan asri pepohonan.",
    description: "Kamar tipe VIP yang paling luas dan menjadi favorit di Hadikos. Dilengkapi pintu kaca ganda yang membuka langsung ke area Rooftop semi-outdoor bersofa empuk. Udara sejuk dan pencahayaan alami melimpah menjadikannya pilihan sempurna untuk istirahat maksimal.",
    image: "/images/kamar-vip-rooftop.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "/images/kamar-vip-rooftop.jpg",
        fallback: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
        title: "Kamar VIP Rooftop",
        desc: "Kasur empuk, lemari susun, meja rias & pintu ganda ke balkon"
      },
      {
        url: "/images/balkon-rooftop.jpg",
        fallback: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        title: "Akses Balkon / Rooftop Langsung",
        desc: "Balkon semi-outdoor dengan sofa empuk persis di depan pintu kamar"
      },
      {
        url: "/images/ruang-tv.jpg",
        fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        title: "Ruang TV & Komunal Bersama",
        desc: "Ruang santai luas ber-AC di lantai bawah"
      }
    ],
    facilities: [
      "Pendingin Ruangan (AC) Dingin",
      "Pintu Ganda Akses Langsung ke Rooftop",
      "Ranjang Single Bed + Kasur Berkualitas",
      "Set Bantal & Guling Bersih",
      "Lemari Pakaian Susun Rapi",
      "Meja Cermin Rias + Kursi",
      "Sirkulasi & Cahaya Alami Melimpah",
      "Stop Kontak Nyaman Dekat Ranjang",
      "Kamar Mandi Bersih Sharing (Rasio 1:3)",
      "Gratis Listrik, Air & WiFi Tanpa Tambahan Biaya",
    ],
  },
  {
    id: "kamar-deluxe-spacious",
    name: "Tipe kamar besar luas",
    category: "Kamar Besar + AC",
    badge: "Ruang Ekstra Lega",
    isHighlight: false,
    tag: "DELUXE SUITE",
    size: "Kamar Besar/luas",
    cooling: "AC (Air Conditioner Dingin)",
    bedType: " Kasur + Bantal & Guling",
    bathroom: "Kamar Mandi Sharing Bersih (Rasio 1:3)",
    billing: "100% All-In (Termasuk Listrik, Air & WiFi)",
    keyBenefit: "Ruangan sangat luas dengan sirkulasi 2 jendela terang",
    description: "Pilihan kamar berdimensi paling luas dengan nuansa hangat, Memiliki 2 jendela lebar yang menjamin aliran udara segar dan pencahayaan terang sepanjang hari. Sangat nyaman untuk yang menyukai ruang gerak leluasa dan meja kerja luas.",
    image: "/images/kamar-deluxe-ac.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "/images/kamar-deluxe-ac.jpg",
        fallback: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
        title: "Kamar Deluxe Ekstra Lega",
        desc: "Ranjang kayu, lemari 3 pintu, dan meja kerja lapang"
      },
      {
        url: "/images/ruang-tamu.jpg",
        fallback: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        title: "Ruang Tamu Depan",
        desc: "Ruang tamu asri dan nyaman untuk menerima kerabat"
      },
      {
        url: "/images/ruang-tv.jpg",
        fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        title: "Ruang TV & Santai Komunal",
        desc: "Area komunal berplafon tinggi dengan TV layar datar"
      }
    ],
    facilities: [
      "Pendingin Ruangan (AC) Dingin",
      "2 Jendela Kaca Lebar (Sirkulasi Terang)",
      "Ranjang Kayu Solid + Kasur Empuk",
      "Set Bantal & Guling Nyaman",
      "Lemari Pakaian 3 Pintu",
      "Meja Kerja / Belajar Lapang + Kursi Puff",
      "Meja Rias & Cermin Dinding",
      "Ruang Gerak Super Lapang",
      "Kamar Mandi Bersih Sharing (Rasio 1:3)",
      "Gratis Listrik, Air & WiFi Tanpa Tambahan Biaya",
    ],
  },
  {
    id: "kamar-regular-nonac",
    name: "Tipe kamar sedang non AC",
    category: "Kamar Compact / Non-AC",
    badge: "Pilihan Hemat & Nyaman",
    isHighlight: false,
    tag: "COZY ROOM",
    size: "Kamar Compact / Standar (~3 x 3 m)",
    cooling: "Kipas Angin Besi",
    bedType: "Tempat Tidur + Kasur + Bantal & Guling",
    bathroom: "Kamar Mandi Sharing Bersih (Rasio 1:3)",
    billing: "100% All-In (Termasuk Listrik, Air & WiFi)",
    keyBenefit: "Suasana hangat dilengkapi karpet lantai tebal dan jendela ventilasi udara alami.",
    description: "Kamar dengan nuansa hangat dan fungsional, sangat ideal bagi Anda yang mencari hunian nyaman dengan harga ramah di kantong. Dilengkapi karpet merah tebal yang bersih, kipas angin besi dengan hembusan angin kencang, serta jendela ventilasi alami yang menyejukkan.",
    image: "/images/kamar-regular-nonac.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "/images/kamar-regular-nonac.jpg",
        fallback: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        title: "Kamar Regular Non-AC",
        desc: "Ranjang empuk berkarpet tebal dengan kipas angin kencang"
      },
      {
        url: "/images/ruang-tv.jpg",
        fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        title: "Akses Penuh Ruang Santai",
        desc: "Penghuni tipe Regular tetap menikmati seluruh fasilitas komunal luas"
      },
      {
        url: "/images/balkon-rooftop.jpg",
        fallback: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        title: "Akses Balkon Rooftop",
        desc: "Santai sore di balkon berangin sejuk lantai atas"
      }
    ],
    facilities: [
      "Kipas Angin Besi",
      "Jendela Ventilasi Udara Alami",
      "Tempat Tidur + Kasur + Bantal & Guling",
      "Lemari Pakaian Kayu 2 Pintu",
      "Karpet Lantai Merah Tebal & Bersih",
      "Rak Dinding Gantung & Cermin",
      "Stop Kontak Dekat Kasur",
      "Suasana Tenang & Super Privat",
      "Kamar Mandi Bersih Sharing (Rasio 1:3)",
      "Gratis Listrik, Air & WiFi Tanpa Tambahan Biaya",
    ],
  },
];

export const PUBLIC_FACILITIES = [
  {
    id: "balkon-rooftop",
    title: "Balkon / Rooftop Santai Bersofa",
    badge: "Semi-Outdoor Asri",
    description: "Balkon semi-outdoor di lantai atas dengan sofa santai, meja kopi, dan tirai peneduh. Menghadap langsung ke rimbunnya pepohonan hijau untuk ngopi sore atau cari inspirasi.",
    image: "/images/balkon-rooftop.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    features: ["Sofa Outdoor Empuk", "Pemandangan Hijau", "Tirai Peneduh Sejuk"],
    colSpan: "col-span-1",
    accent: "bg-emerald-600/10 text-emerald-800",
  },
  {
    id: "kamar-mandi-sharing",
    title: "Kamar Mandi Bersih (Rasio 1:3)",
    badge: "Bebas Antre",
    description: "Kamar mandi umum sharing yang bersih dan terawat dengan dinding keramik, shower, kloset, dan cermin. Hanya dipakai bersama oleh maksimal 3 orang penghuni kos sehingga waktu mandi leluasa tanpa drama antre di pagi hari.",
    image: "/images/kamar-mandi.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    features: ["Shower & Kloset Terawat", "Cermin & Sirkulasi Kering", "Rasio Maksimal 1 : 3 Orang"],
    colSpan: "col-span-1",
    accent: "bg-emerald-600/10 text-emerald-800",
  },
  {
    id: "parkir-indoor",
    title: "Garasi Parkir Motor Indoor",
    badge: "Aman & Terlindungi",
    description: "Area parkir khusus sepeda motor di dalam gerbang berlantai keramik terlindung atap kanopi. Kendaraan Anda 100% aman dari panas terik, guyuran hujan lebat, dan risiko pencurian.",
    image: "/images/parkiran.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1000&q=80",
    features: ["Di Dalam Pagar / Gerbang", "Atap Kanopi Bebas Hujan", "Lantai Bersih Berkeramik"],
    colSpan: "col-span-1",
    accent: "bg-emerald-600/10 text-emerald-800",
  },
];

export const LOCATION_POINTS = [
  {
    icon: "Train",
    title: "Selangkah dari Stasiun LRT",
    desc: "Akses kilat sekitar 3-5 menit menuju stasiun LRT terdekat, memudahkan mobilitas harian tanpa lelah dan macet.",
    highlight: "3 - 5 Menit",
  },
  {
    icon: "ShoppingBag",
    title: "Minimarket & Kebutuhan Harian",
    desc: "Indomaret, Alfamart, dan warung kelontong dapat dicapai hanya dengan beberapa langkah jalan santai.",
    highlight: "Jalan Kaki 2 Menit",
  },
  {
    icon: "Utensils",
    title: "Pusat Kuliner & Makanan Murah",
    desc: "Dikelilingi warteg, aneka rumah makan, cafe, dan jajanan yang ramah kantong mahasiswa maupun pekerja.",
    highlight: "Radius < 5 Menit",
  },
  {
    icon: "ShieldCheck",
    title: "Lingkungan Tenang & Aman",
    desc: "Berada di jalan perumahan yang asri, tidak bising deru kendaraan raya.",
    highlight: "Tenang & Aman",
  },
];

export const BOOKING_STEPS = [
  {
    step: "01",
    title: "Pilih Tipe Kamar",
    desc: "Cek 3 pilihan kamar di katalog web dan tentukan kamar yang paling cocok dengan kebutuhan serta budget Anda.",
  },
  {
    step: "02",
    title: "Chat Admin via WhatsApp",
    desc: "Klik tombol WhatsApp untuk konfirmasi ketersediaan kamar atau langsung atur jadwal survei lokasi.",
  },
  {
    step: "03",
    title: "Survei & Kunci Kamar",
    desc: "Kunjungi Hadikos, rasakan langsung suasananya yang tenang dan lega, lalu kunci kamar pilihan Anda sebelum kehabisan!",
  },
];

/**
 * Generate standardized WhatsApp direct link with clean pre-filled Indonesian text
 */
export const createWhatsAppUrl = ({
  phone = HADIKOS_CONFIG.phone,
  roomName = "",
  purpose = "Tanya Ketersediaan / Survei",
  name = "",
  customMessage = "",
}) => {
  let text;

  if (roomName) {
    if (purpose === "Jadwalkan Survei Lokasi" || purpose === "survey") {
      text = `Halo Admin HADIKOS,\n\nSaya tertarik dengan kamar *${roomName}* dan ingin *menjadwalkan survei lokasi langsung*. Apakah ada jadwal waktu luang minggu ini?\n\nTerima kasih!`;
    } else if (purpose === "Booking Kamar" || purpose === "booking") {
      text = `Halo Admin HADIKOS,\n\nSaya ingin menanyakan ketersediaan dan prosedur *booking* untuk kamar *${roomName}*. Apakah masih tersedia?\n\nTerima kasih!`;
    } else {
      text = `Halo Admin HADIKOS,\n\nSaya ingin bertanya mengenai kamar *${roomName}* di Hadikos. Mohon info ketersediaan dan detailnya ya.\n\nTerima kasih!`;
    }
  } else {
    if (purpose === "Jadwalkan Survei Lokasi" || purpose === "survey") {
      text = `Halo Admin HADIKOS,\n\nSaya ingin *menjadwalkan survei lokasi* ke Hadikos. Kapan waktu yang memungkinkan untuk berkunjung?\n\nTerima kasih!`;
    } else {
      text = `Halo Admin HADIKOS,\n\nSaya ingin menanyakan ketersediaan kamar kos putra di Hadikos. Mohon info tipe kamar yang saat ini masih kosong.\n\nTerima kasih!`;
    }
  }

  if (name) {
    text = `Nama saya: ${name}\n` + text;
  }

  if (customMessage) {
    text += `\n\nCatatan tambahan: ${customMessage}`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
