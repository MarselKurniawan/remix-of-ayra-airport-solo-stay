import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Business Traveler",
    rating: 5,
    text: "Hotel yang sangat nyaman dan dekat sekali dengan bandara. Staff ramah, kamar bersih, dan sarapan enak. Sangat recommended untuk transit!",
  },
  {
    name: "Ratna Dewi",
    role: "Keluarga",
    rating: 5,
    text: "Menginap bersama keluarga sangat menyenangkan. Fasilitas lengkap, shuttle bandara sangat membantu, dan anak-anak suka dengan pelayanannya.",
  },
  {
    name: "Ahmad Fadillah",
    role: "Solo Traveler",
    rating: 4,
    text: "Lokasi strategis, harga terjangkau, dan kualitas kamar di atas ekspektasi. WiFi kencang, cocok untuk bekerja remote. Pasti kembali lagi!",
  },
  {
    name: "Siti Nurhaliza",
    role: "Business Traveler",
    rating: 5,
    text: "Meeting room sangat profesional dan nyaman. Pelayanan catering untuk meeting juga luar biasa. Perfect untuk acara bisnis!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Testimoni
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-6">Kata Tamu Kami</h2>
          <p className="font-body text-primary-foreground/70">
            Pengalaman nyata dari tamu yang telah menginap di Ayra Airport Hotel Solo.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card */}
          <div className="overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "transition-all duration-500 ease-in-out",
                  i === current
                    ? "opacity-100 translate-x-0 block"
                    : "opacity-0 translate-x-8 hidden"
                )}
              >
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-8 md:p-10 relative text-center">
                  <Quote className="text-primary/20 mx-auto mb-6" size={40} />
                  <div className="flex items-center justify-center gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className={j < t.rating ? "fill-primary text-primary" : "text-primary-foreground/20"}
                      />
                    ))}
                  </div>
                  <p className="font-body text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-heading text-xl text-primary-foreground">{t.name}</p>
                    <p className="font-body text-sm text-primary-foreground/50 mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-primary-foreground/25 hover:bg-primary-foreground/40"
                )}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
