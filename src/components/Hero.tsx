import heroImg from "@/assets/hero-hotel.jpg";
import logoWhite from "@/assets/logo-white.png";
import { ArrowRight, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Ayra Airport Hotel Solo"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--hero-soft-light)" }} />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 mb-6 backdrop-blur-sm">
            <Plane className="text-primary-foreground" size={16} />
            <span className="font-body text-[11px] font-semibold tracking-[0.24em] uppercase text-primary-foreground/85">
              Airport hotel yang tenang & praktis
            </span>
          </div>

          <img src={logoWhite} alt="Ayra Airport Hotel Solo" className="h-12 md:h-14 mb-6" />

          <div className="w-20 h-px bg-primary mb-6" />

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-primary-foreground max-w-2xl mb-5">
            Stay simple, rest well, move easily.
          </h1>

          <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed mb-8">
            AYRA AIRPORT HOTEL SOLO menghadirkan pengalaman menginap yang bersih, modern, dan nyaman hanya beberapa menit dari Bandara Adi Soemarmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#rooms"
              className="inline-flex items-center justify-center gap-2 bg-card text-foreground font-body font-semibold px-7 py-3.5 rounded-md hover:bg-muted transition-colors text-sm"
            >
              Lihat Pilihan Kamar
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-md hover:bg-primary-foreground/10 transition-colors text-sm backdrop-blur-sm"
            >
              Hubungi Kami
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { value: "5 menit", label: "ke bandara" },
              { value: "24 jam", label: "resepsionis siap" },
              { value: "3 bintang", label: "nyaman & efisien" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-t border-primary-foreground/20 pt-4"
              >
                <p className="font-heading text-2xl text-primary-foreground">{item.value}</p>
                <p className="font-body text-sm text-primary-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32" style={{ background: "var(--hero-bottom-fade)" }} />
      </div>
    </section>
  );
};

export default Hero;
