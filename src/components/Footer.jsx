import { HADIKOS_CONFIG, createWhatsAppUrl } from "../data/hadikosData";
import {
  Home,
  MessageCircle,
  MapPin,
  Train,
  ShieldCheck,
  Zap,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const waLink = createWhatsAppUrl({
    purpose: "Tanya Ketersediaan Kamar Kos",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-white tracking-tight">
                    {HADIKOS_CONFIG.name}
                  </span>
                  <span className="block text-[11px] font-semibold text-emerald-400">
                    Kos Putra Eksklusif (3 Kamar)
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hunian kos khusus putra berkonsep rumah tinggal super privat.
                Harga sewa bulanan sudah mencakup listrik, air, dan internet
                fiber optic berkecepatan tinggi tanpa biaya tersembunyi.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Lingkungan Aman & Khusus Mahasiswa / Karyawan Pria</span>
              </div>
            </div>

            {/* Column 2: Navigasi Cepat */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Navigasi Cepat
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#beranda"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#keunggulan"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Keunggulan Hadikos
                  </a>
                </li>
                <li>
                  <a
                    href="#kamar"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Katalog 3 Kamar
                  </a>
                </li>
                <li>
                  <a
                    href="#fasilitas"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Fasilitas Bersama
                  </a>
                </li>
                <li>
                  <a
                    href="#lokasi"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Akses Stasiun LRT
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Fasilitas Utama */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Sorotan Utama
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Gratis Listrik, Air & WiFi Cepat</span>
                </li>
                <li className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>3-5 Menit ke Stasiun LRT</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Kamar Mandi Sharing Bersih (Rasio 1:3)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Ruang TV & Balkon Santai</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Garasi Motor Indoor Beratap</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Kontak & WhatsApp Admin */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Kontak Pengelola
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{HADIKOS_CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>WhatsApp: {HADIKOS_CONFIG.phoneDisplay}</span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi Pengelola via WA</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} {HADIKOS_CONFIG.name}. Kos Putra
              Eksklusif Dekat LRT. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-4">
              <span>Maksimal 3 Unit Kamar</span>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold focus:outline-none transition-colors"
              >
                <span>Kembali ke Atas</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 active:scale-95 border-2 border-white/60 focus:outline-none"
        aria-label="Chat WhatsApp Admin Hadikos"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="font-bold text-sm tracking-wide hidden sm:inline-block">
          Tanya Kos via WA
        </span>
      </a>
    </>
  );
}
