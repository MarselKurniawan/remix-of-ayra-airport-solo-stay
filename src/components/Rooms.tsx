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
    name: "Superior Room",
    images: [roomSuperior, roomSuperior2, roomSuperior3],
    price: "Rp 450.000",
    bed: "Twin Bed",
    guest: "2 Tamu",
    size: "22 m²",
    desc: "Kamar nyaman dengan desain modern, cocok untuk perjalanan singkat maupun transit.",
    amenities: ["AC", "TV LED 32\"", "WiFi", "Shower"],
  },
  {
    name: "Deluxe Room",
    images: [roomDeluxe, roomDeluxe2, roomDeluxe3],
    price: "Rp 650.000",
    bed: "King Bed",
    guest: "2 Tamu",
    size: "28 m²",
    desc: "Kamar luas dengan fasilitas premium dan pemandangan area hotel yang asri.",
    amenities: ["AC", "TV LED 43\"", "WiFi", "Bathtub", "Mini Bar"],
  },
  {
    name: "Executive Suite",
    images: [roomSuite, roomSuite2, roomSuite3],
    price: "Rp 950.000",
    bed: "King Bed",
    guest: "2 Tamu",
    size: "40 m²",
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

      {/* Nav arrows */}
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

      {/* Dots */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Image Slider */}
              <RoomImageSlider images={room.images} name={room.name} />

              {/* Price badge */}
              <div className="relative">
                <div className="absolute -top-5 right-4 bg-card border border-border rounded-lg px-3 py-1.5 shadow-md">
                  <span className="font-body text-sm font-bold text-foreground">{room.price}</span>
                  <span className="font-body text-xs text-muted-foreground">/malam</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
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
