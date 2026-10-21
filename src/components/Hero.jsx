import { useState } from "react";
import { createWhatsAppUrl } from "../data/hadikosData";
import {
  Zap,
  Train,
  Users,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [imgErrorMain, setImgErrorMain] = useState(false);
  const [imgErrorSub, setImgErrorSub] = useState(false);

  const waSurveyLink = createWhatsAppUrl({
    purpose: "Jadwalkan Survei Lokasi",
  });

  return (
    <section
      id="beranda"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-200/25 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>KOS PUTRA EKSKLUSIF • HANYA 3 UNIT KAMAR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Hunian Kos Putra Tenang & Nyaman —{" "}
              <span className="text-emerald-700 underline decoration-emerald-300 underline-offset-4">
                Harga All-In
              </span>{" "}
              Selangkah dari LRT
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Nikmati kenyamanan kos serasa rumah sendiri dengan ruang komunal
              super luas dan lingkungan bersih kondusif. Sewa bulanan sudah
              termasuk Listrik, Air, dan WiFi berkecepatan tinggi tanpa biaya
              tersembunyi.
            </p>

            {/* Highlight Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold text-slate-700">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Gratis Listrik, Air & WiFi</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold text-slate-700">
                <Train className="w-4 h-4 text-emerald-600" />
                <span>Dekat Stasiun LRT</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold text-slate-700">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Maksimal 3 Penghuni</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#kamar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-emerald-500/25 hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Lihat 3 Pilihan Kamar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={waSurveyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 font-semibold text-sm sm:text-base transition-all duration-200 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Jadwalkan Survei via WA</span>
              </a>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Kamar Mandi Bersih Sharing 1:3</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Parkir Motor Indoor Aman</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Ruang TV & Balkon Santai</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Accent Background Box */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600/20 to-teal-500/10 rounded-3xl blur-xl" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100 group">
                <img
                  src={
                    imgErrorMain
                      ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                      : "/images/ruang-tv.jpg"
                  }
                  onError={() => setImgErrorMain(true)}
                  alt="Ruang Komunal & TV Hadikos"
                  className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20" />

                {/* Photo Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-xs text-[11px] font-bold tracking-wide uppercase mb-1">
                    Fasilitas Bersama
                  </span>
                  <h4 className="text-base sm:text-lg font-bold leading-snug">
                    Ruang Tamu & Ruang TV Super Luas
                  </h4>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    Area komunal berplafon tinggi yang asri & sejuk
                  </p>
                </div>
              </div>

              {/* Secondary Sub-Photo (Thumbnail Rooftop) */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                <img
                  src={
                    imgErrorSub
                      ? "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80"
                      : "/images/balkon-rooftop.jpg"
                  }
                  onError={() => setImgErrorSub(true)}
                  alt="Balkon Rooftop Hadikos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-2 text-white">
                  <span className="text-[10px] font-bold leading-tight">
                    Balkon Rooftop
                  </span>
                </div>
              </div>

              {/* Floating Card Badge 1: 100% All-In Bill */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    100% All-In Bill
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Gratis Listrik, Air & WiFi
                  </div>
                </div>
              </div>

              {/* Floating Card Badge 2: Akses Dekat LRT */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-600/30">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Akses Dekat LRT
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold">
                    3 - 5 Menit Jalan / Motor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
