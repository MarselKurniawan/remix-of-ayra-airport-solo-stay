import heroImg from "@/assets/hero-hotel.jpg";
import logoWhite from "@/assets/logo-white.png";
import { Plane, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Ayra Airport Hotel Solo"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Plane className="text-primary-foreground" size={20} />
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary-foreground/90">
            5 Menit dari Bandara Adi Soemarmo
          </span>
        </div>
        <img src={logoWhite} alt="Ayra Airport Hotel Solo" className="h-16 md:h-20 mx-auto mb-6" />
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Pengalaman menginap premium dengan kenyamanan terbaik di dekat Bandara Internasional Adi Soemarmo, Solo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rooms"
            className="bg-card text-foreground font-body font-semibold px-8 py-3.5 rounded-md hover:bg-muted transition-colors text-sm"
          >
            Lihat Kamar
          </a>
          <a
            href="#contact"
            className="border-2 border-primary-foreground text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-md hover:bg-primary-foreground/10 transition-colors text-sm"
          >
            Hubungi Kami
          </a>
        </div>
        <div className="flex items-center justify-center gap-1 mt-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-primary-foreground text-primary-foreground" />
          ))}
          <span className="font-body text-sm text-primary-foreground/80 ml-2">Hotel Bintang 3</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
