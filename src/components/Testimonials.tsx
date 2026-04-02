import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Business Traveler",
    rating: 5,
    text: "Hotel yang sangat nyaman dan dekat sekali dengan bandara. Staff ramah dan kamar bersih. Sangat recommended!",
    initials: "BS",
  },
  {
    name: "Ratna Dewi",
    role: "Keluarga",
    rating: 5,
    text: "Menginap bersama keluarga sangat menyenangkan. Shuttle bandara sangat membantu, anak-anak suka pelayanannya.",
    initials: "RD",
  },
  {
    name: "Ahmad Fadillah",
    role: "Solo Traveler",
    rating: 4,
    text: "Lokasi strategis, harga terjangkau, kualitas kamar di atas ekspektasi. WiFi kencang, cocok untuk remote work.",
    initials: "AF",
  },
  {
    name: "Siti Nurhaliza",
    role: "Business Traveler",
    rating: 5,
    text: "Meeting room sangat profesional. Pelayanan catering luar biasa. Perfect untuk acara bisnis!",
    initials: "SN",
  },
  {
    name: "Dewi Lestari",
    role: "Honeymoon",
    rating: 5,
    text: "Kamar suite-nya romantis sekali. Pelayanan room service cepat dan makanan enak. Pengalaman menginap terbaik!",
    initials: "DL",
  },
  {
    name: "Reza Pratama",
    role: "Transit Traveler",
    rating: 4,
    text: "Sangat dekat bandara, check-in cepat, kamar bersih. Pilihan sempurna untuk transit sebelum penerbangan pagi.",
    initials: "RP",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, testimonials.length - 3);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Testimoni
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Kata Tamu Kami
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[calc(33.333%-14px)] w-[calc(33.333%-14px)] flex-shrink-0 hidden md:block"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className={j < t.rating ? "fill-primary text-primary" : "text-border"}
                      />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-body text-xs font-bold text-primary">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: single card view */}
          <div className="md:hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "transition-all duration-400",
                  i === current ? "block" : "hidden"
                )}
              >
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className={j < t.rating ? "fill-primary text-primary" : "text-border"}
                      />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-body text-xs font-bold text-primary">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === current
                  ? "w-6 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
