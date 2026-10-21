import { useState } from "react";
import { PUBLIC_FACILITIES } from "../data/hadikosData";
import {
  Tv,
  Coffee,
  Bath,
  Bike,
  Utensils,
  SunMedium,
  CheckCircle,
  Building2,
} from "lucide-react";

export default function PublicFacilities() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getFacilityIcon = (id) => {
    switch (id) {
      case "ruang-tv":
        return <Tv className="w-5 h-5 text-white" />;
      case "balkon-rooftop":
        return <Coffee className="w-5 h-5 text-white" />;
      case "kamar-mandi-sharing":
        return <Bath className="w-5 h-5 text-white" />;
      case "parkir-indoor":
        return <Bike className="w-5 h-5 text-white" />;
      case "dapur-bersama":
        return <Utensils className="w-5 h-5 text-white" />;
      case "cuci-jemur":
        return <SunMedium className="w-5 h-5 text-white" />;
      default:
        return <Building2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Fasilitas Bersama</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Fasilitas Komunal Luas Serasa Rumah Sendiri
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tidak terbatas di dalam kamar tidur. Anda dapat menikmati seluruh
            ruang publik kos yang lega, bersih, dan nyaman untuk bekerja,
            bersantai, atau menerima tamu.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLIC_FACILITIES.map((facility) => {
            const isWide = facility.colSpan.includes("md:col-span-2");

            return (
              <div
                key={facility.id}
                className={`relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-white flex flex-col justify-between group hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 ${
                  facility.colSpan
                } ${isWide ? "min-h-[380px]" : "min-h-[340px]"}`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={
                      imgErrors[facility.id]
                        ? facility.fallbackImage
                        : facility.image
                    }
                    onError={() => handleImgError(facility.id)}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle dark gradient overlay so text is 100% readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/30" />
                </div>

                {/* Top Badge & Icon */}
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-600/90 text-white backdrop-blur-md shadow-xs">
                    {facility.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xs">
                    {getFacilityIcon(facility.id)}
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 pt-0 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
                    {facility.description}
                  </p>

                  {/* Feature checklist chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {facility.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/15 text-white backdrop-blur-xs border border-white/20"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
