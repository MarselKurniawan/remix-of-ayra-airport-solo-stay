import heroImg from "@/assets/hero-hotel.jpg";
import logoWhite from "@/assets/logo-white.png";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Ayra Airport Hotel Solo"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Minimal dark overlay */}
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Top bar — logo */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <img src={logoWhite} alt="Ayra Airport Hotel Solo" className="h-8 md:h-10 opacity-90" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="font-body text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/60 mb-5">
              Airport Hotel · Solo, Central Java
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-6xl lg:text-7xl leading-[1] text-primary-foreground mb-6">
              Where comfort
              <br />
              meets convenience.
            </h1>
            <p className="font-body text-sm md:text-base text-primary-foreground/65 max-w-md leading-relaxed mb-10">
              Hanya 5 menit dari Bandara Adi Soemarmo — tempat ideal untuk beristirahat sebelum atau sesudah perjalanan Anda.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#rooms"
                className="font-body text-sm font-semibold bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-secondary transition-colors"
              >
                Lihat Kamar
              </a>
              <a
                href="#about"
                className="font-body text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors underline underline-offset-4 decoration-primary-foreground/30"
              >
                Pelajari Lebih
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 pb-10 flex justify-center">
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
