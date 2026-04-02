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
    <section id="nearby" className="py-20 md:py-28 bg-card">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Places list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {places.map((p) => (
              <div
                key={p.name}
                className="flex items-start gap-4 p-5 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
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

          {/* Google Maps embed */}
          <div className="rounded-lg overflow-hidden border border-border shadow-md h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2!2d110.74!3d-7.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a149e5dd6d09b%3A0x51f20959e2d6e862!2sTegalrejo%2C%20Ngesrep%2C%20Kec.%20Ngemplak%2C%20Kabupaten%20Boyolali%2C%20Jawa%20Tengah%2057375!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Ayra Airport Hotel Solo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nearby;
