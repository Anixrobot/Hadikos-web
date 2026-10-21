import { HADIKOS_CONFIG, LOCATION_POINTS } from "../data/hadikosData";
import {
  Train,
  MapPin,
  ExternalLink,
  ShoppingBag,
  Utensils,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function LocationLRT() {
  const getLocationIcon = (iconName) => {
    switch (iconName) {
      case "Train":
        return <Train className="w-5 h-5 text-emerald-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <MapPin className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Train className="w-3.5 h-3.5" />
            <span>Konektivitas & Akses</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Lokasi Strategis Dekat Stasiun LRT
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tinggal dekat stasiun LRT membebaskan Anda dari kemacetan harian.
            Akses ke kampus, perkantoran Kuningan, Sudirman, maupun pusat kota
            menjadi cepat, hemat, dan nyaman.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Accessibility Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {LOCATION_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    {getLocationIcon(point.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">
                        {point.title}
                      </h3>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md flex-shrink-0">
                        {point.highlight}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Address Banner & Maps Button */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Alamat Properti HADIKOS
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {HADIKOS_CONFIG.address}, {HADIKOS_CONFIG.city}
                  </p>
                </div>
              </div>
              <a
                href={HADIKOS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all active:scale-95"
              >
                <span>Buka Rute di Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map with Floating LRT Travel Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 h-[400px] sm:h-[460px]">
              {/* Iframe Google Maps */}
              <iframe
                title="Peta Lokasi Hadikos"
                src={HADIKOS_CONFIG.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[1.1]"
              />

              {/* Floating LRT Card Overlay */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Stasiun LRT Terdekat
                    </h5>
                    <p className="text-sm font-extrabold text-slate-900">
                      Hanya ± 3 - 5 Menit
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                  <span>Jarak Sangat Dekat</span>
                  <span className="font-semibold text-emerald-600">
                    Bebas Macet
                  </span>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs font-medium flex items-center gap-2 shadow-md">
                <Compass className="w-4 h-4 text-emerald-400 animate-spin [animation-duration:10s]" />
                <span>Kawasan Tenang & Akses Mudah Mobil/Motor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
