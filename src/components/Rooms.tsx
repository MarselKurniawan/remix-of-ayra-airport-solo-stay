import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import { Bed, Users, Maximize, ArrowRight } from "lucide-react";

const rooms = [
  {
    name: "Superior Room",
    image: roomSuperior,
    price: "Rp 450.000",
    bed: "Twin Bed",
    guest: "2 Tamu",
    size: "22 m²",
    desc: "Kamar nyaman dengan desain modern, cocok untuk perjalanan singkat maupun transit.",
    amenities: ["AC", "TV LED 32\"", "WiFi", "Shower"],
  },
  {
    name: "Deluxe Room",
    image: roomDeluxe,
    price: "Rp 650.000",
    bed: "King Bed",
    guest: "2 Tamu",
    size: "28 m²",
    desc: "Kamar luas dengan fasilitas premium dan pemandangan area hotel yang asri.",
    amenities: ["AC", "TV LED 43\"", "WiFi", "Bathtub", "Mini Bar"],
  },
  {
    name: "Executive Suite",
    image: roomSuite,
    price: "Rp 950.000",
    bed: "King Bed",
    guest: "2 Tamu",
    size: "40 m²",
    desc: "Suite eksklusif dengan ruang tamu terpisah, ideal untuk tamu bisnis dan keluarga.",
    amenities: ["AC", "TV LED 55\"", "WiFi", "Bathtub", "Mini Bar", "Living Area"],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Akomodasi
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Pilihan Kamar Kami</h2>
          <p className="font-body text-sm text-muted-foreground">
            Setiap kamar dirancang untuk kenyamanan maksimal Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-card rounded-xl overflow-hidden border border-border group hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="font-body text-sm font-bold text-foreground">{room.price}</span>
                  <span className="font-body text-xs text-muted-foreground">/malam</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2">{room.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{room.desc}</p>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                  <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                    <Bed size={14} className="text-primary" /> {room.bed}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                    <Users size={14} className="text-primary" /> {room.guest}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                    <Maximize size={14} className="text-primary" /> {room.size}
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="bg-muted text-muted-foreground font-body text-[11px] px-2.5 py-1 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 w-full justify-center bg-foreground text-background font-body font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Pesan Kamar
                  <ArrowRight size={14} />
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
