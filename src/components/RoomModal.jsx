import { useState, useEffect } from "react";
import { createWhatsAppUrl } from "../data/hadikosData";
import {
  X,
  CheckCircle,
  Wind,
  Bed,
  Maximize2,
  Zap,
  Bath,
  MessageCircle,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function RoomModal({ room, isOpen, onClose }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [prevRoomId, setPrevRoomId] = useState(room?.id);

  if (room && room.id !== prevRoomId) {
    setPrevRoomId(room.id);
    setActivePhotoIndex(0);
    setImgError(false);
  }

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !room) return null;

  const currentGallery = room.gallery || [
    { url: room.image, fallback: room.fallbackImage, title: room.name },
  ];

  const currentPhoto = currentGallery[activePhotoIndex] || currentGallery[0];

  const waSurveyLink = createWhatsAppUrl({
    roomName: room.name,
    purpose: "Jadwalkan Survei Lokasi",
  });

  const waBookingLink = createWhatsAppUrl({
    roomName: room.name,
    purpose: "Booking Kamar",
  });

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) =>
      prev === 0 ? currentGallery.length - 1 : prev - 1
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md flex items-center justify-center transition-all focus:outline-none"
            aria-label="Tutup Detail Kamar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Photo Showcase Carousel */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] sm:aspect-[16/9] shadow-inner group">
            <img
              src={imgError ? currentPhoto.fallback : currentPhoto.url}
              onError={() => setImgError(true)}
              alt={currentPhoto.title || room.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

            {/* Gallery Navigation Arrows (if multiple photos) */}
            {currentGallery.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Foto Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Foto Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom Photo Title & Counter */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white text-xs">
              <div>
                <p className="font-semibold text-sm">
                  {currentPhoto.title || room.name}
                </p>
                {currentPhoto.desc && (
                  <p className="text-slate-300 text-xs">{currentPhoto.desc}</p>
                )}
              </div>
              <span className="px-2 py-0.5 rounded-md bg-black/50 text-[11px] font-mono">
                {activePhotoIndex + 1} / {currentGallery.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Selector */}
          {currentGallery.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {currentGallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActivePhotoIndex(idx);
                    setImgError(false);
                  }}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activePhotoIndex === idx
                      ? "border-emerald-600 ring-2 ring-emerald-500/30 scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Room Title, Badge & Category */}
          <div className="border-b border-slate-200 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                {room.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                {room.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {room.name}
            </h3>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dimensi Ruang</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                {room.size}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <Wind className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pendingin</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                {room.cooling}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <Bed className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tipe Kasur</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                Single Bed Set
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sistem Tagihan</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-700">
                100% All-In
              </div>
            </div>
          </div>

          {/* Important Highlight Notice: Kamar Mandi Sharing & All-In */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Kamar Mandi Bersih Sharing (Rasio 1 : 3)
                </h4>
                <p className="text-xs text-slate-600">
                  Hanya dipakai oleh maksimal 3 orang penghuni kos. Selalu bersih,
                  nyaman, dan tidak ada antrean panjang.
                </p>
              </div>
            </div>
            <span className="self-end sm:self-auto text-xs font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-300">
              Bebas Antre
            </span>
          </div>

          {/* List of Facilities in this Room */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Fasilitas Lengkap Kamar Ini:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.facilities.map((fac, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/60"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action CTA Buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
            <a
              href={waSurveyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-emerald-600/30 transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Jadwalkan Survei via WA</span>
            </a>
            <a
              href={waBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-300 hover:border-emerald-300 font-semibold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Tanya & Booking Kamar Ini</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
