import { useState } from "react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomDeluxe2 from "@/assets/room-deluxe-2.jpg";
import roomDeluxe3 from "@/assets/room-deluxe-3.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomSuperior2 from "@/assets/room-superior-2.jpg";
import roomSuperior3 from "@/assets/room-superior-3.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomSuite2 from "@/assets/room-suite-2.jpg";
import roomSuite3 from "@/assets/room-suite-3.jpg";
import { Bed, Users, Maximize, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const rooms = [
  {
    name: "Superior Twin",
    images: [roomSuperior, roomSuperior2, roomSuperior3],
    bed: "Twin Bed",
    guest: "2 Tamu",
    size: "22 m²",
    desc: "Kamar nyaman dengan dua tempat tidur terpisah, ideal untuk perjalanan singkat maupun transit.",
    amenities: ["AC", "TV LED 32\"", "WiFi", "Shower"],
  },
  {
    name: "Deluxe Double",
    images: [roomDeluxe, roomDeluxe2, roomDeluxe3],
    bed: "Double Bed",
    guest: "2 Tamu",
    size: "26 m²",
    desc: "Kamar modern dengan double bed dan fasilitas premium untuk kenyamanan maksimal.",
    amenities: ["AC", "TV LED 43\"", "WiFi", "Bathtub", "Mini Bar"],
  },
  {
    name: "Deluxe Twin",
    images: [roomDeluxe2, roomDeluxe3, roomDeluxe],
    bed: "Twin Bed",
    guest: "2 Tamu",
    size: "26 m²",
    desc: "Pilihan Deluxe dengan dua tempat tidur terpisah, cocok untuk teman seperjalanan.",
    amenities: ["AC", "TV LED 43\"", "WiFi", "Bathtub", "Mini Bar"],
  },
  {
    name: "Executive Double",
    images: [roomSuperior3, roomSuperior, roomSuperior2],
    bed: "King Bed",
    guest: "2 Tamu",
    size: "32 m²",
    desc: "Kamar eksekutif yang lapang dengan king bed dan pemandangan area hotel yang asri.",
    amenities: ["AC", "TV LED 43\"", "WiFi", "Bathtub", "Mini Bar", "Work Desk"],
  },
  {
    name: "Junior Suites",
    images: [roomSuite2, roomSuite3, roomSuite],
    bed: "King Bed",
    guest: "2 Tamu",
    size: "38 m²",
    desc: "Suite kompak dengan area duduk terpisah untuk pengalaman menginap yang lebih leluasa.",
    amenities: ["AC", "TV LED 55\"", "WiFi", "Bathtub", "Mini Bar", "Sofa"],
  },
  {
    name: "Suites Room",
    images: [roomSuite, roomSuite3, roomSuite2],
    bed: "King Bed",
    guest: "2 Tamu",
    size: "45 m²",
    desc: "Suite eksklusif dengan ruang tamu terpisah, ideal untuk tamu bisnis dan keluarga.",
    amenities: ["AC", "TV LED 55\"", "WiFi", "Bathtub", "Mini Bar", "Living Area"],
  },
];

const RoomImageSlider = ({ images, name }: { images: string[]; name: string }) => {
  const [current, setCurrent] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden h-56 group/slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${name} ${i + 1}`}
          loading="lazy"
          width={800}
          height={600}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            i === current ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-card"
        aria-label="Previous image"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-card"
        aria-label="Next image"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={cn(
              "rounded-full transition-all",
              i === current
                ? "w-5 h-1.5 bg-primary-foreground"
                : "w-1.5 h-1.5 bg-primary-foreground/50"
            )}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <RoomImageSlider images={room.images} name={room.name} />

              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2">{room.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{room.desc}</p>

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
