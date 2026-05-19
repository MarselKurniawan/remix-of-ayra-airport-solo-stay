import logoWhite from "@/assets/logo-white.png";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logoWhite} alt="Ayra Airport Hotel Solo" className="h-10 mb-4" />
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Hotel modern dekat Bandara Adi Soemarmo dengan kenyamanan terbaik untuk perjalanan bisnis dan liburan Anda.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-4">Kontak</h3>
            <div className="space-y-3">
              <a href="tel:+62271123456" className="flex items-center gap-3 font-body text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Phone size={16} /> +62 271 123 456
              </a>
              <a href="mailto:info@ayrahotel.com" className="flex items-center gap-3 font-body text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Mail size={16} /> info@ayrahotel.com
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-primary-foreground/60">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Tegalrejo, Ngesrep, Kec. Ngemplak, Kabupaten Boyolali, Jawa Tengah 57375</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-4">Jam Operasional</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-body text-sm text-primary-foreground/60">
                <Clock size={16} />
                <div>
                  <p>Check-in: 14:00 WIB</p>
                  <p>Check-out: 12:00 WIB</p>
                </div>
              </div>
              <p className="font-body text-sm text-primary-foreground/60">Resepsionis 24 Jam</p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-4">Ikuti Kami</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 mt-4">@ayraairporthotel</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Ayra Airport Hotel Solo. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/60">
            Managed by{" "}
            <a
              href="https://www.sinergimanajemen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold tracking-wide text-primary hover:text-primary/80 transition-colors uppercase"
            >
              Sinergi Manajemen Indonesia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
