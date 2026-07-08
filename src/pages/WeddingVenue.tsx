import { Link } from "react-router-dom";
import { ArrowLeft, Users, Sparkles, Music, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SALES, waLink } from "@/lib/contact";
import { useLanguage } from "@/contexts/LanguageContext";
import facilityBallroom from "@/assets/facility-ballroom.webp";
import heroWedding from "@/assets/hero-wedding.jpg";
import gLobby1 from "@/assets/gallery-lobby-1.webp";
import gLobby2 from "@/assets/gallery-lobby-2.webp";
import gLobbyMural from "@/assets/gallery-lobby-mural.webp";
import gReception from "@/assets/gallery-reception.webp";

const WeddingVenue = () => {
  const { t } = useLanguage();

  const gallery = [
    { src: heroWedding, alt: "Wedding setup" },
    { src: facilityBallroom, alt: "Ballroom" },
    { src: gLobbyMural, alt: "Lobby mural" },
    { src: gLobby1, alt: "Lobby" },
    { src: gLobby2, alt: "Lounge" },
    { src: gReception, alt: "Reception" },
  ];

  const highlights = [
    { icon: Users, title: "Kapasitas hingga 500 tamu", desc: "Ballroom luas dengan konfigurasi fleksibel." },
    { icon: Sparkles, title: "Dekorasi Mewah", desc: "Tim dekorasi profesional untuk berbagai tema." },
    { icon: Music, title: "Sound & Lighting", desc: "Peralatan audio-visual berkualitas premium." },
    { icon: Utensils, title: "Catering Premium", desc: "Menu lokal & internasional dari chef berpengalaman." },
  ];

  const waHref = waLink(
    `Halo ${SALES.name}, saya ingin konsultasi Wedding Venue di Ayra Airport Hotel Solo.`
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={heroWedding} alt="Wedding at Ayra" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/30" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm">
            <ArrowLeft size={14} /> {t("back.home")}
          </Link>
          <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            {t("wed.tag")}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-3 max-w-3xl">
            {t("wed.title")}
          </h1>
          <p className="font-body text-primary-foreground/80 max-w-xl">{t("wed.subtitle")}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-14">
            {t("wed.desc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h) => (
              <div key={h.title} className="p-5 bg-background rounded-xl border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <h.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-1">{h.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Gallery
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">{t("wed.gallery")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl md:text-3xl mb-3">Wujudkan Pernikahan Impian Anda</h3>
          <p className="font-body text-primary-foreground/70 max-w-lg mx-auto mb-6">
            Konsultasikan konsep pernikahan Anda dengan tim wedding kami sekarang.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-body font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            <WhatsAppIcon size={18} />
            {t("wed.cta")} · {SALES.phone}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeddingVenue;
