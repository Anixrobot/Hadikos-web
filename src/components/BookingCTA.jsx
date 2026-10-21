import { useState } from "react";
import {
  ROOMS_DATA,
  BOOKING_STEPS,
  createWhatsAppUrl,
} from "../data/hadikosData";
import {
  MessageCircle,
  Calendar,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function BookingCTA() {
  const [selectedRoom, setSelectedRoom] = useState(ROOMS_DATA[0].name);
  const [purpose, setPurpose] = useState("Jadwalkan Survei Lokasi");
  const [visitorName, setVisitorName] = useState("");
  const [customNote, setCustomNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = createWhatsAppUrl({
      roomName: selectedRoom,
      purpose: purpose,
      name: visitorName.trim(),
      customMessage: customNote.trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 md:py-24 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3 Langkah Mudah */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-700/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Alur Praktis Tanpa Ribet</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            3 Langkah Mudah Menghuni HADIKOS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-200/90 leading-relaxed max-w-2xl mx-auto">
            Hanya tersedia 3 kamar eksklusif. Amankan kamar Anda sebelum terisi
            penuh oleh penghuni lain.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {BOOKING_STEPS.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-900/40 border border-emerald-800/80 rounded-2xl p-6 backdrop-blur-xs relative group hover:border-emerald-500/60 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-emerald-500/30 mb-3 group-hover:text-emerald-400/50 transition-colors">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Quick WA Selector Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-2xl border border-emerald-100">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wide mb-2">
              Formulir WhatsApp Otomatis
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Kirim Pesan WhatsApp Langsung ke Admin
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pilih kamar dan tujuan Anda. Link pesan akan tersusun otomatis dan
              rapi untuk langsung dikirimkan ke WhatsApp admin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 1. Pilih Kamar */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Pilih Tipe Kamar:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ROOMS_DATA.map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => setSelectedRoom(r.name)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      selectedRoom === r.name
                        ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/40 text-emerald-900 font-bold"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="text-xs sm:text-sm leading-tight block">
                      {r.name}
                    </span>
                    <span className="text-[11px] font-normal text-slate-500 mt-1 block">
                      {r.cooling.split("(")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pilih Tujuan */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Pilih Tujuan Kebutuhan Anda:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    value: "Jadwalkan Survei Lokasi",
                    label: "Jadwalkan Survei Lokasi",
                    icon: Calendar,
                    desc: "Lihat langsung kamar & suasana rumah",
                  },
                  {
                    value: "Booking Kamar",
                    label: "Tanya Ketersediaan & Booking",
                    icon: CheckCircle2,
                    desc: "Tanyakan apakah unit masih kosong untuk dibooking",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      type="button"
                      key={item.value}
                      onClick={() => setPurpose(item.value)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        purpose === item.value
                          ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/40 text-emerald-950 font-bold"
                          : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          purpose === item.value
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{item.label}</div>
                        <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Input Nama (Opsional) & Catatan Tambahan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nama Anda (Opsional):
                </label>
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Contoh: Dimas / Rio"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Catatan / Waktu Survei (Opsional):
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Contoh: Rencana survei Sabtu sore"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all duration-200 active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kirim Pesan WhatsApp Sekarang</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Respon Cepat
                Admin
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Tanpa
                Perantara / Calo
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
