import { KEY_FEATURES } from "../data/hadikosData";
import { Zap, Wifi, Home, Train, Sparkles } from "lucide-react";

export default function Features() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "BadgeCheck":
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case "Wifi":
        return <Wifi className="w-6 h-6 text-emerald-600" />;
      case "Home":
        return <Home className="w-6 h-6 text-emerald-600" />;
      case "Train":
        return <Train className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keunggulan Utama</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Mengapa Memilih Menghuni di HADIKOS?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Didesain khusus untuk mahasiswa dan pekerja pria yang menginginkan
            kenyamanan tinggal serasa rumah sendiri, tanpa keramaian berlebih.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_FEATURES.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Box with gentle hover animation */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {getIcon(item.icon)}
                  </div>
                </div>

                {/* Badge Tag */}
                <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md mb-2">
                  {item.highlight}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Pilar {index + 1}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/40 group-hover:bg-emerald-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
