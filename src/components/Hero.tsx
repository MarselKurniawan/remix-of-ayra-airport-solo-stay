import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";

const Hero = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the widget div
    if (widgetRef.current) {
      const widgetDiv = document.createElement("div");
      widgetDiv.id = "bnl-widget-formular";
      widgetDiv.setAttribute("pid", "PROPDE_01KG1JF9WSHBB920MFQJ8WC346");
      widgetDiv.setAttribute("data-url", "https://booking.sinergimax.com/widget");
      widgetDiv.setAttribute("data-style", "{'btnText':'Book Now'}");
      widgetRef.current.innerHTML = "";
      widgetRef.current.appendChild(widgetDiv);

      // Load the script
      const existingScript = document.querySelector('script[src*="widget-formular"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://admin.bookandlink.com/public/js/widget/v2/widget-formular.min.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

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
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Spacer for navbar */}
      <div className="relative z-10 pt-24" />

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
          </div>
        </div>
      </div>

      {/* Booking Widget - Book and Link */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div
          ref={widgetRef}
          className="booking-widget-wrapper bg-card/95 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl p-4 md:p-6 max-w-4xl"
        />
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
