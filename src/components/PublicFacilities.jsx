import { useState } from "react";
import { PUBLIC_FACILITIES } from "../data/hadikosData";
import {
  Coffee,
  Bath,
  Bike,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function PublicFacilities() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getFacilityIcon = (id) => {
    switch (id) {
      case "balkon-rooftop":
        return <Coffee className="w-4 h-4 text-emerald-700" />;
      case "kamar-mandi-sharing":
        return <Bath className="w-4 h-4 text-emerald-700" />;
      case "parkir-indoor":
        return <Bike className="w-4 h-4 text-emerald-700" />;
      default:
        return <Building2 className="w-4 h-4 text-emerald-700" />;
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
            Fasilitas Bersama Nyaman & Bersih
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tidak terbatas di dalam kamar tidur. Anda dapat menikmati fasilitas
            bersama yang terawat, asri, dan aman dengan kapasitas maksimal hanya
            3 penghuni.
          </p>
        </div>

        {/* 3-Column Grid Layout: 3 Main Public Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PUBLIC_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* 1. Image Section: 100% Clear, Natural & Unobstructed */}
              <div className="relative w-full overflow-hidden bg-slate-100 h-56 sm:h-60">
                <img
                  src={
                    imgErrors[facility.id]
                      ? facility.fallbackImage
                      : facility.image
                  }
                  onError={() => handleImgError(facility.id)}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top-Left Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white/95 text-emerald-800 backdrop-blur-md shadow-sm border border-emerald-100">
                    {facility.badge}
                  </span>
                </div>

                {/* Top-Right Icon Pill */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center border border-slate-200/80 shadow-sm">
                  {getFacilityIcon(facility.id)}
                </div>
              </div>

              {/* 2. Content Section: Clean, Readable Text on Pure White */}
              <div className="p-5 sm:p-6 flex flex-col justify-between grow space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {facility.description}
                  </p>
                </div>

                {/* Feature Checklist Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {facility.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
