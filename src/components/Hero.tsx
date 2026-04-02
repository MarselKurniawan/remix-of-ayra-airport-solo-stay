import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";

const Hero = () => {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'resize-iframe') {
        const iframe = document.getElementById('booking-iframe') as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = Math.max(120, e.data.height + 10) + 'px';
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
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

      {/* Booking Widget - Book and Link (isolated in iframe) */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="max-w-4xl bg-white rounded-xl shadow-2xl">
          <iframe
            id="booking-iframe"
            srcDoc={`
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
                <style>
                  * { margin: 0; padding: 0; box-sizing: border-box; }
                  html, body { 
                    font-family: 'Montserrat', sans-serif !important; 
                    background: #ffffff !important;
                    padding: 14px 28px;
                    overflow: hidden;
                  }
                  
                  #bnl-widget-formular, #bnl-widget-formular * {
                    font-family: 'Montserrat', sans-serif !important;
                  }
                  #bnl-widget-formular {
                    display: flex !important;
                    align-items: flex-end !important;
                    gap: 14px !important;
                    flex-wrap: nowrap !important;
                  }
                  #bnl-widget-formular > div, #bnl-widget-formular > span, #bnl-widget-formular > fieldset {
                    flex: 1 !important;
                    min-width: 0 !important;
                  }

                  button, .btn, [type="submit"], a.btn {
                    background: #fb7a10 !important;
                    border: none !important;
                    border-radius: 8px !important;
                    font-family: 'Montserrat', sans-serif !important;
                    font-weight: 600 !important;
                    font-size: 13px !important;
                    color: #ffffff !important;
                    cursor: pointer !important;
                    padding: 11px 24px !important;
                    transition: all 0.2s ease !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.05em !important;
                    white-space: nowrap !important;
                    flex-shrink: 0 !important;
                  }
                  button:hover, .btn:hover, [type="submit"]:hover, a.btn:hover {
                    background: #e06d0e !important;
                  }
                  input, select {
                    border-radius: 6px !important;
                    font-family: 'Montserrat', sans-serif !important;
                    font-size: 13px !important;
                    border: 1px solid #ddd !important;
                    background: #f7f7f7 !important;
                    color: #333 !important;
                    padding: 10px 12px !important;
                    width: 100% !important;
                  }
                  input:focus, select:focus {
                    outline: none !important;
                    border-color: #fb7a10 !important;
                    box-shadow: 0 0 0 2px rgba(251,122,16,0.15) !important;
                  }
                  input::placeholder { color: #aaa !important; }
                  label {
                    font-family: 'Montserrat', sans-serif !important;
                    font-size: 10px !important;
                    font-weight: 700 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    color: #999 !important;
                    display: block !important;
                    margin-bottom: 6px !important;
                  }
                  select option { background: #fff !important; color: #333 !important; }
                  .form-group, .form-control, .input-group, div, span, form, fieldset {
                    background: transparent !important;
                  }
                  .datepicker, .ui-datepicker, .calendar, [class*="calendar"], [class*="datepicker"], [class*="picker"] {
                    z-index: 9999 !important;
                    background: #fff !important;
                    border: 1px solid #e0e0e0 !important;
                    border-radius: 8px !important;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.15) !important;
                  }
                </style>
              </head>
              <body>
                <div id="bnl-widget-formular" pid="PROPDE_01KG1JF9WSHBB920MFQJ8WC346" data-url="https://booking.sinergimax.com/widget" data-style="{'btnText':'Book Now'}"></div>
                <script src="https://admin.bookandlink.com/public/js/widget/v2/widget-formular.min.js"><\/script>
                <script>
                  function resizeToParent() {
                    var h = document.body.scrollHeight;
                    window.parent.postMessage({ type: 'resize-iframe', height: h }, '*');
                  }
                  
                  function addLabels() {
                    var inputs = document.querySelectorAll('input, select');
                    inputs.forEach(function(input) {
                      if (input.previousElementSibling && input.previousElementSibling.tagName === 'LABEL') return;
                      var parent = input.parentElement;
                      if (!parent) return;
                      // Check if label already exists in parent
                      if (parent.querySelector('label')) return;
                      var label = document.createElement('label');
                      var ph = input.getAttribute('placeholder') || input.getAttribute('name') || '';
                      if (ph.toLowerCase().includes('check in') || ph.toLowerCase().includes('checkin')) {
                        label.textContent = 'Check In';
                      } else if (ph.toLowerCase().includes('check out') || ph.toLowerCase().includes('checkout')) {
                        label.textContent = 'Check Out';
                      } else if (ph.toLowerCase().includes('promo')) {
                        label.textContent = 'Promo Code';
                      } else {
                        label.textContent = ph;
                      }
                      if (label.textContent) {
                        parent.insertBefore(label, parent.firstChild);
                      }
                    });
                  }
                  
                  var observer = new MutationObserver(function() {
                    document.querySelectorAll('button, .btn, [type=submit], a.btn').forEach(function(el) {
                      el.style.setProperty('background-color', '#fb7a10', 'important');
                      el.style.setProperty('background', '#fb7a10', 'important');
                    });
                    addLabels();
                    resizeToParent();
                  });
                  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
                  window.addEventListener('load', function() { 
                    setTimeout(function() { addLabels(); resizeToParent(); }, 500); 
                    setTimeout(function() { addLabels(); resizeToParent(); }, 1000); 
                  });
                  document.addEventListener('click', function(e) {
                    // When clicking date inputs, expand iframe for calendar
                    var target = e.target;
                    if (target.tagName === 'INPUT' && (target.placeholder || '').toLowerCase().includes('check')) {
                      document.body.style.overflow = 'visible';
                      window.parent.postMessage({ type: 'resize-iframe', height: 400 }, '*');
                    }
                    setTimeout(resizeToParent, 100);
                    setTimeout(resizeToParent, 300);
                    setTimeout(resizeToParent, 600);
                  });
                  // Shrink back when clicking outside
                  document.addEventListener('focusout', function() {
                    setTimeout(function() {
                      document.body.style.overflow = 'hidden';
                      resizeToParent();
                    }, 200);
                  });
                <\/script>
              </body>
              </html>
            `}
            className="w-full border-0"
            style={{ height: "90px", minHeight: "90px", transition: "height 0.3s ease" }}
            title="Booking Widget"
            loading="eager"
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
