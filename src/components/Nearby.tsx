import { Plane, Landmark, ShoppingBag, GraduationCap, Trees, Building2 } from "lucide-react";

const places = [
  { icon: Plane, name: "Bandara Adi Soemarmo", distance: "5 menit", desc: "Bandara internasional utama Solo" },
  { icon: Landmark, name: "Keraton Surakarta", distance: "25 menit", desc: "Istana kerajaan bersejarah" },
  { icon: ShoppingBag, name: "Hartono Mall Solo", distance: "15 menit", desc: "Pusat perbelanjaan terbesar di Solo" },
  { icon: Trees, name: "Candi Cetho & Sukuh", distance: "60 menit", desc: "Candi Hindu di lereng Gunung Lawu" },
  { icon: GraduationCap, name: "Universitas Sebelas Maret", distance: "20 menit", desc: "Universitas negeri terkemuka" },
  { icon: Building2, name: "Solo Technopark", distance: "10 menit", desc: "Pusat teknologi dan inovasi" },
];

const Nearby = () => {
  return (
    <section id="nearby" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Lokasi Terdekat
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">Di Sekitar Hotel</h2>
          <p className="font-body text-muted-foreground">
            Lokasi strategis dengan akses mudah ke berbagai destinasi menarik di Solo dan sekitarnya.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((p) => (
            <div
              key={p.name}
              className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground">{p.name}</h3>
                <span className="font-body text-xs font-semibold text-primary">{p.distance}</span>
                <p className="font-body text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nearby;
