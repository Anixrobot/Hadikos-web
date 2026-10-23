import { useState } from "react";
import { createWhatsAppUrl } from "../data/hadikosData";
import {
  Zap,
  Train,
  Users,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-linear-to-b from-emerald-50/50 via-white to-white"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-emerald-200/25 blur-3xl rounded-full pointer-events-none -z-10" />

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

          {/* Right Column: Clean Visual Showcase (No Overlapping Elements) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-2 bg-linear-to-tr from-emerald-500/20 to-teal-400/10 rounded-3xl blur-xl -z-10" />

              {/* Master Showcase Card Container */}
              <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200/90 shadow-xl space-y-3.5">
                {/* 1. Main Photo: Ruang Tamu & TV (100% Unobstructed) */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-4/3 group shadow-inner">
                  <img
                    src={
                      imgErrorMain
                        ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                        : "/images/ruang-tv.jpg"
                    }
                    onError={() => setImgErrorMain(true)}
                    alt="Ruang Komunal & TV Hadikos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top-Left Badge: Foto Asli Properti */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wide uppercase shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Fasilitas Bersama</span>
                    </span>
                  </div>

                  {/* Top-Right Badge: 100% All-In Bill (Neatly within photo, no bleed) */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-emerald-800 border border-emerald-200/80 text-[11px] font-bold shadow-md">
                      <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      <span>100% All-In Bill</span>
                    </span>
                  </div>
                </div>

                {/* 2. Structured Inset Section: Sub-Photo (Balkon Rooftop) & Clear Text */}
                <div className="grid grid-cols-12 gap-3 items-center p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  {/* Sub-Photo Thumbnail with Dedicated Frame */}
                  <div className="col-span-4 relative rounded-xl overflow-hidden aspect-4/3 bg-slate-200 border border-slate-200 shadow-xs group/sub">
                    <img
                      src={
                        imgErrorSub
                          ? "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80"
                          : "/images/balkon-rooftop.jpg"
                      }
                      onError={() => setImgErrorSub(true)}
                      alt="Balkon Rooftop Hadikos"
                      className="w-full h-full object-cover group-hover/sub:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                      <span className="text-[10px] font-bold text-white leading-tight">
                        Balkon Rooftop
                      </span>
                    </div>
                  </div>

                  {/* Dedicated High-Contrast Text & LRT Indicator */}
                  <div className="col-span-8 space-y-1 pl-1">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        Ruang Tamu & TV Plafon Tinggi
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                        Lega & Asri
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 leading-tight">
                      Area komunal sejuk untuk santai bersama serasa di rumah sendiri.
                    </p>

                    {/* Akses Dekat LRT Pill */}
                    <div className="flex items-center gap-1.5 pt-1 text-xs font-semibold text-emerald-800">
                      <div className="w-4 h-4 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <Train className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700">
                        Akses Dekat LRT (± 3 - 5 Menit)
                      </span>
                    </div>
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
