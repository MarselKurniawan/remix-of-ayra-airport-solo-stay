import { Shield, Clock, Utensils, Wifi, Plane, Star } from "lucide-react";

const highlights = [
  { icon: Plane, value: "5 min", label: "Dari Bandara" },
  { icon: Star, value: "4.8", label: "Rating Tamu" },
  { icon: Clock, value: "24/7", label: "Resepsionis" },
  { icon: Shield, value: "100%", label: "Keamanan" },
];

const features = [
  { icon: Shield, title: "Keamanan 24 Jam", desc: "CCTV & security profesional menjaga kenyamanan Anda sepanjang waktu." },
  { icon: Clock, title: "Check-in Fleksibel", desc: "Layanan resepsionis tersedia 24 jam untuk kemudahan Anda." },
  { icon: Utensils, title: "Restoran & Café", desc: "Nikmati sajian lokal dan internasional di restoran hotel kami." },
  { icon: Wifi, title: "WiFi Gratis", desc: "Koneksi internet cepat tersedia di seluruh area hotel." },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Tentang Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-5">
            Selamat Datang di Ayra Airport Hotel
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Terletak strategis hanya 5 menit dari Bandara Internasional Adi Soemarmo, 
            kami menawarkan kenyamanan modern dengan sentuhan keramahan khas Jawa — 
            ideal untuk perjalanan bisnis maupun liburan.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="text-center py-6 px-4 rounded-xl bg-background border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <h.icon className="text-primary" size={18} />
              </div>
              <p className="font-heading text-2xl text-foreground">{h.value}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/20 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
