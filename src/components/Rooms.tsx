import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import { Bed, Users, Maximize, AirVent } from "lucide-react";

const rooms = [
  {
    name: "Superior Room",
    image: roomSuperior,
    price: "Rp 450.000",
    bed: "Twin Bed",
    guest: "2 Tamu",
    size: "22 m²",
    desc: "Kamar nyaman dengan desain modern, cocok untuk perjalanan singkat maupun transit.",
    amenities: ["AC", "TV LED 32\"", "WiFi Gratis", "Kamar Mandi Shower"],
  },
  {
    name: "Deluxe Room",
    image: roomDeluxe,
    price: "Rp 650.000",
    bed: "King Bed",
    guest: "2 Tamu",
    size: "28 m²",
    desc: "Kamar luas dengan fasilitas premium dan pemandangan area hotel yang asri.",
    amenities: ["AC", "TV LED 43\"", "WiFi Gratis", "Bathtub", "Mini Bar"],
  },
  {
    name: "Executive Suite",
    image: roomSuite,
    price: "Rp 950.000",
    bed: "King Bed",
    guest: "2 Tamu",
    size: "40 m²",
    desc: "Suite eksklusif dengan ruang tamu terpisah, ideal untuk tamu bisnis dan keluarga.",
    amenities: ["AC", "TV LED 55\"", "WiFi Gratis", "Bathtub", "Mini Bar", "Living Area"],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Akomodasi
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">Pilihan Kamar Kami</h2>
          <p className="font-body text-muted-foreground">
            Setiap kamar dirancang dengan perhatian terhadap detail untuk kenyamanan maksimal Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-body font-bold text-sm px-3 py-1.5 rounded-md">
                  {room.price}<span className="font-normal text-xs">/malam</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2">{room.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{room.desc}</p>
                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <span className="flex items-center gap-1 text-xs font-body">
                    <Bed size={14} /> {room.bed}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-body">
                    <Users size={14} /> {room.guest}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-body">
                    <Maximize size={14} /> {room.size}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.amenities.map((a) => (
                    <span key={a} className="bg-muted text-muted-foreground font-body text-xs px-2.5 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="block text-center bg-primary text-primary-foreground font-body font-semibold text-sm py-2.5 rounded-md hover:bg-secondary transition-colors"
                >
                  Pesan Kamar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
