import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";

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

      {/* Booking Widget - Book and Link (isolated in iframe) */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="bg-card/95 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl max-w-4xl overflow-hidden">
          <iframe
            srcDoc={`
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                  * { margin: 0; padding: 0; box-sizing: border-box; }
                  body { 
                    font-family: 'Montserrat', sans-serif; 
                    background: transparent;
                    padding: 16px 24px;
                  }
                  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
                  
                  /* Override widget button styles */
                  button, .btn, [type="submit"], a.btn {
                    background-color: #fb7a10 !important;
                    background: #fb7a10 !important;
                    border: none !important;
                    border-radius: 0.5rem !important;
                    font-family: 'Montserrat', sans-serif !important;
                    font-weight: 600 !important;
                    color: #ffffff !important;
                    cursor: pointer !important;
                    transition: background-color 0.2s !important;
                  }
                  button:hover, .btn:hover, [type="submit"]:hover, a.btn:hover {
                    background-color: #e06d0e !important;
                    background: #e06d0e !important;
                  }
                  input, select {
                    border-radius: 0.5rem !important;
                    font-family: 'Montserrat', sans-serif !important;
                  }
                  label {
                    font-family: 'Montserrat', sans-serif !important;
                  }
                </style>
              </head>
              <body>
                <div id="bnl-widget-formular" pid="PROPDE_01KG1JF9WSHBB920MFQJ8WC346" data-url="https://booking.sinergimax.com/widget" data-style="{'btnText':'Book Now'}"></div>
                <script src="https://admin.bookandlink.com/public/js/widget/v2/widget-formular.min.js"><\/script>
              </body>
              </html>
            `}
            className="w-full border-0"
            style={{ height: "80px", minHeight: "80px" }}
            title="Booking Widget"
            loading="lazy"
          />
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
