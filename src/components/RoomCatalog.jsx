import { useState } from "react";
import { ROOMS_DATA, createWhatsAppUrl } from "../data/hadikosData";
import {
  Maximize2,
  Wind,
  Bath,
  Zap,
  Eye,
  MessageCircle,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function RoomCatalog({ onSelectRoom }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="kamar" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>Katalog Unit Kos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Hanya Tersedia 3 Unit Kamar
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tidak ada keramaian kos massal. Di Hadikos, Anda berbagi rumah besar
            hanya dengan 2 penghuni lainnya, dengan akses penuh ke ruang komunal
            dan kamar mandi sharing bersih.
          </p>
        </div>

        {/* 3 Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {ROOMS_DATA.map((room) => {
            const waRoomLink = createWhatsAppUrl({
              roomName: room.name,
              purpose: "Tanya Ketersediaan & Booking",
            });

            return (
              <div
                key={room.id}
                className={`relative bg-white rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${
                  room.isHighlight
                    ? "border-emerald-500 ring-2 ring-emerald-600/90 shadow-lg"
                    : "border-slate-200/90 shadow-sm hover:border-emerald-400/50"
                }`}
              >
                {/* Special VIP Ribbon if highlighted */}
                {room.isHighlight && (
                  <div className="bg-emerald-600 text-white text-center py-1.5 px-4 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-inner">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Unit Paling Direkomendasikan • Rooftop Suite</span>
                  </div>
                )}

                <div>
                  {/* Room Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                    <img
                      src={
                        imgErrors[room.id]
                          ? room.fallbackImage
                          : room.image
                      }
                      onError={() => handleImgError(room.id)}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Room Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm ${
                          room.isHighlight
                            ? "bg-amber-400 text-slate-950 font-extrabold border border-amber-300"
                            : "bg-white/95 text-slate-900 border border-slate-200"
                        }`}
                      >
                        {room.badge}
                      </span>
                    </div>

                    {/* Category Tag (Bottom Left of Image) */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                        {room.tag}
                      </span>
                      <h3 className="text-xl font-bold leading-tight drop-shadow-xs">
                        {room.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Key Benefit Highlight Box */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      💡 {room.keyBenefit}
                    </div>

                    {/* Room Specification Pills */}
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Dimensi</span>
                        </span>
                        <span className="font-semibold text-slate-800">
                          {room.size}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Wind className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Pendingin</span>
                        </span>
                        <span className="font-semibold text-slate-800">
                          {room.cooling}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Bath className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Kamar Mandi</span>
                        </span>
                        <span className="font-semibold text-emerald-700">
                          Sharing (Rasio 1:3 Bebas Antre)
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Zap className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Biaya Bulanan</span>
                        </span>
                        <span className="font-bold text-emerald-700">
                          100% All-In (Listrik, Air, WiFi)
                        </span>
                      </div>
                    </div>

                    {/* Feature Checklist Preview */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Fasilitas Kamar
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {room.facilities.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                        <li className="text-[11px] font-medium text-emerald-700">
                          + {room.facilities.length - 3} fasilitas lainnya
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 sm:p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4 text-slate-600" />
                    <span>Lihat Detail & Foto</span>
                  </button>

                  <a
                    href={waRoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pesan / Tanya Kamar Ini</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
