import { useEffect, useState } from "react";
import { ArrowDown, CalendarDays, Users, Search } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroResto from "@/assets/hero-resto.jpg";

const slides = [
  {
    image: heroImg,
    kicker: "Airport Hotel · Solo, Central Java",
    title: (
      <>
        Where comfort
        <br />
        meets convenience.
      </>
    ),
    desc: "Hanya 5 menit dari Bandara Adi Soemarmo — tempat ideal untuk beristirahat sebelum atau sesudah perjalanan Anda.",
  },
  {
    image: heroWedding,
    kicker: "Wedding & Ballroom",
    title: (
      <>
        Pernikahan impian
        <br />
        di Ballroom Ayra.
      </>
    ),
    desc: "Paket pernikahan eksklusif dengan dekorasi mewah, kapasitas hingga 500 tamu. Promo spesial early bird tersedia.",
  },
  {
    image: heroResto,
    kicker: "Riverside Resto & Café",
    title: (
      <>
        Bersantap dengan
        <br />
        panorama tepi sungai.
      </>
    ),
    desc: "Nikmati hidangan istimewa di Riverside Resto dengan suasana yang hangat dan pemandangan menawan.",
  },
];

const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = () => {
    const baseUrl = "https://booking.sinergimax.com/widget";
    const params = new URLSearchParams();
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    if (guests) params.set("guests", guests);
    params.set("pid", "PROPDE_01KG1JF9WSHBB920MFQJ8WC346");
    window.open(`${baseUrl}?${params.toString()}`, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          width={1920}
          height={1080}
        />
      ))}
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 pt-24" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl" key={current}>
            <p className="font-body text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/70 mb-5 animate-fade-in">
              {slides[current].kicker}
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-6xl lg:text-7xl leading-[1] text-primary-foreground mb-6 animate-fade-in">
              {slides[current].title}
            </h1>
            <p className="font-body text-sm md:text-base text-primary-foreground/80 max-w-md leading-relaxed mb-8 animate-fade-in">
              {slides[current].desc}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-8 bg-primary" : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modern Booking Widget */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="max-w-4xl">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl p-2">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_auto] gap-2">
              {/* Check In */}
              <div className="relative group">
                <div className="bg-muted/50 rounded-xl px-4 py-3 transition-colors group-hover:bg-muted/80">
                  <label className="font-body text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground block mb-1">
                    Check In
                  </label>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-primary shrink-0" />
                    <input
                      type="date"
                      value={checkIn}
                      min={today}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent font-body text-sm text-card-foreground outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Check Out */}
              <div className="relative group">
                <div className="bg-muted/50 rounded-xl px-4 py-3 transition-colors group-hover:bg-muted/80">
                  <label className="font-body text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground block mb-1">
                    Check Out
                  </label>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-primary shrink-0" />
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || today}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent font-body text-sm text-card-foreground outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="relative group">
                <div className="bg-muted/50 rounded-xl px-4 py-3 transition-colors group-hover:bg-muted/80">
                  <label className="font-body text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground block mb-1">
                    Tamu
                  </label>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-primary shrink-0" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="bg-transparent font-body text-sm text-card-foreground outline-none cursor-pointer appearance-none pr-4"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Tamu" : "Tamu"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-3 font-body text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                <Search size={18} />
                <span className="hidden md:inline">Cari</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 pb-6 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
        >
          <span className="font-body text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
