import { Shield, Clock, Utensils, Wifi } from "lucide-react";

const features = [
  { icon: Shield, title: "Keamanan 24 Jam", desc: "CCTV & security profesional" },
  { icon: Clock, title: "Check-in Fleksibel", desc: "Layanan resepsionis 24 jam" },
  { icon: Utensils, title: "Restoran & Café", desc: "Sajian lokal & internasional" },
  { icon: Wifi, title: "WiFi Gratis", desc: "Koneksi cepat di seluruh area" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Tentang Kami
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
            Selamat Datang di Ayra Airport Hotel
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Terletak strategis hanya 5 menit dari Bandara Internasional Adi Soemarmo, Ayra Airport Hotel Solo
            menawarkan kenyamanan modern dengan sentuhan keramahan khas Jawa. Ideal untuk perjalanan bisnis maupun liburan,
            kami hadir untuk memberikan pengalaman menginap yang tak terlupakan di kota Solo dan sekitarnya.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
