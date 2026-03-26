import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Business Traveler",
    rating: 5,
    text: "Hotel yang sangat nyaman dan dekat sekali dengan bandara. Staff ramah, kamar bersih, dan sarapan enak. Sangat recommended untuk transit!",
  },
  {
    name: "Ratna Dewi",
    role: "Keluarga",
    rating: 5,
    text: "Menginap bersama keluarga sangat menyenangkan. Fasilitas lengkap, shuttle bandara sangat membantu, dan anak-anak suka dengan pelayanannya.",
  },
  {
    name: "Ahmad Fadillah",
    role: "Solo Traveler",
    rating: 4,
    text: "Lokasi strategis, harga terjangkau, dan kualitas kamar di atas ekspektasi. WiFi kencang, cocok untuk bekerja remote. Pasti kembali lagi!",
  },
  {
    name: "Siti Nurhaliza",
    role: "Business Traveler",
    rating: 5,
    text: "Meeting room sangat profesional dan nyaman. Pelayanan catering untuk meeting juga luar biasa. Perfect untuk acara bisnis!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Testimoni
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-6">Kata Tamu Kami</h2>
          <p className="font-body text-primary-foreground/70">
            Pengalaman nyata dari tamu yang telah menginap di Ayra Airport Hotel Solo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 relative">
              <Quote className="text-primary/30 absolute top-4 right-4" size={32} />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < t.rating ? "fill-primary text-primary" : "text-primary-foreground/20"}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-primary-foreground/80 leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading text-primary-foreground">{t.name}</p>
                <p className="font-body text-xs text-primary-foreground/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
