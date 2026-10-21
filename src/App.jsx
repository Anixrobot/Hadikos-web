import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RoomCatalog from "./components/RoomCatalog";
import RoomModal from "./components/RoomModal";
import PublicFacilities from "./components/PublicFacilities";
import LocationLRT from "./components/LocationLRT";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRoomModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseRoomModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Keunggulan Utama 4 Pilar (#keunggulan) */}
        <Features />

        {/* 3. Katalog 3 Unit Kamar (#kamar) */}
        <RoomCatalog onSelectRoom={handleOpenRoomModal} />

        {/* 4. Fasilitas Bersama Bento Grid (#fasilitas) */}
        <PublicFacilities />

        {/* 5. Lokasi & Akses Stasiun LRT (#lokasi) */}
        <LocationLRT />

        {/* 6. Form Booking & Langkah Menghuni */}
        <BookingCTA />
      </main>

      {/* Footer & Floating WhatsApp Button */}
      <Footer />

      {/* Interactive Room Detail Modal */}
      <RoomModal
        key={selectedRoom?.id || "modal"}
        room={selectedRoom}
        isOpen={isModalOpen}
        onClose={handleCloseRoomModal}
      />
    </div>
  );
}
