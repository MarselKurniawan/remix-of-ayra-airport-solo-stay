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
        <div className="max-w-4xl bg-foreground/50 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          <iframe
            srcDoc={`
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
                <style>
                  * { margin: 0; padding: 0; box-sizing: border-box; background: transparent !important; }
                  html, body { 
                    font-family: 'Montserrat', sans-serif !important; 
                    background: transparent !important;
                    padding: 20px 24px;
                    overflow: hidden;
                  }
                  
                  #bnl-widget-formular, #bnl-widget-formular * {
                    background: transparent !important;
                  }
                  #bnl-widget-formular {
                    display: flex !important;
                    align-items: center !important;
                    gap: 12px !important;
                  }

                  button, .btn, [type="submit"], a.btn {
                    background: #fb7a10 !important;
                    border: none !important;
                    border-radius: 8px !important;
                    font-family: 'Montserrat', sans-serif !important;
                    font-weight: 600 !important;
                    font-size: 14px !important;
                    color: #ffffff !important;
                    cursor: pointer !important;
                    padding: 12px 28px !important;
                    transition: all 0.2s ease !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.05em !important;
                  }
                  button:hover, .btn:hover, [type="submit"]:hover, a.btn:hover {
                    background: #e06d0e !important;
                  }
                  input, select {
                    border-radius: 8px !important;
                    font-family: 'Montserrat', sans-serif !important;
                    font-size: 13px !important;
                    border: 1px solid rgba(255,255,255,0.3) !important;
                    background: rgba(255,255,255,0.1) !important;
                    color: #fff !important;
                    padding: 10px 14px !important;
                  }
                  input::placeholder { color: rgba(255,255,255,0.5) !important; }
                  label {
                    font-family: 'Montserrat', sans-serif !important;
                    font-size: 11px !important;
                    font-weight: 600 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.08em !important;
                    color: rgba(255,255,255,0.7) !important;
                  }
                  select option { background: #1a1a1a !important; color: #fff !important; }
                  .form-group, .form-control, .input-group, div, span, form, fieldset {
                    background: transparent !important;
                  }
                </style>
              </head>
              <body>
                <div id="bnl-widget-formular" pid="PROPDE_01KG1JF9WSHBB920MFQJ8WC346" data-url="https://booking.sinergimax.com/widget" data-style="{'btnText':'Book Now'}"></div>
                <script src="https://admin.bookandlink.com/public/js/widget/v2/widget-formular.min.js"><\/script>
                <script>
                  // Force transparent background after widget loads
                  var observer = new MutationObserver(function() {
                    document.querySelectorAll('*').forEach(function(el) {
                      el.style.backgroundColor = 'transparent';
                    });
                    document.querySelectorAll('button, .btn, [type=submit], a.btn').forEach(function(el) {
                      el.style.backgroundColor = '#fb7a10';
                    });
                    document.querySelectorAll('input, select').forEach(function(el) {
                      el.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    });
                  });
                  observer.observe(document.body, { childList: true, subtree: true });
                <\/script>
              </body>
              </html>
            `}
            className="w-full border-0"
            style={{ height: "100px", minHeight: "100px" }}
            title="Booking Widget"
            loading="eager"
            allowTransparency={true as any}
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
