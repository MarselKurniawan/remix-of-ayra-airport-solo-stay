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

        <div className="flex flex-col gap-16">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-2xl transition-shadow duration-500 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image — alternating side */}
              <div className={`relative overflow-hidden h-72 lg:h-auto lg:min-h-[400px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center p-8 md:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-[10px] font-semibold tracking-widest uppercase text-primary">
                    {room.bed} · {room.size}
                  </span>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">{room.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{room.desc}</p>

                {/* Specs */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                  <span className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <Bed size={16} className="text-primary" /> {room.bed}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <Users size={16} className="text-primary" /> {room.guest}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <Maximize size={16} className="text-primary" /> {room.size}
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="bg-muted text-muted-foreground font-body text-xs px-3 py-1.5 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-heading text-2xl md:text-3xl text-foreground">{room.price}</span>
                    <span className="font-body text-sm text-muted-foreground ml-1">/malam</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    Pesan Kamar
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
