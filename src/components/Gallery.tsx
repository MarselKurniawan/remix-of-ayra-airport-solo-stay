import gFasad from "@/assets/gallery-fasad.webp";
import gLobbyMural from "@/assets/gallery-lobby-mural.webp";
import gLobby1 from "@/assets/gallery-lobby-1.webp";
import gLobby2 from "@/assets/gallery-lobby-2.webp";
import gReception from "@/assets/gallery-reception.webp";
import gMeeting from "@/assets/gallery-meeting.webp";
import gResto from "@/assets/gallery-resto.webp";
import gSuite1 from "@/assets/gallery-suite-1.webp";
import gSuite2 from "@/assets/gallery-suite-2.webp";
import gSuite3 from "@/assets/gallery-suite-3.webp";

const photos = [
  { src: gFasad, alt: "Fasad Ayra Hotel", label: "Fasad Hotel" },
  { src: gReception, alt: "Resepsionis", label: "Reception" },
  { src: gLobby1, alt: "Lobby Ayra Hotel", label: "Lobby" },
  { src: gLobby2, alt: "Area Lobby", label: "Lounge Area" },
  { src: gLobbyMural, alt: "Lobby dengan mural", label: "Mural Lobby" },
  { src: gResto, alt: "Riverside Resto", label: "Riverside Resto" },
  { src: gMeeting, alt: "Meeting Room", label: "Meeting Room" },
  { src: gSuite1, alt: "Suites Room", label: "Suites Room" },
  { src: gSuite2, alt: "Suasana Suites", label: "Suite Vibes" },
  { src: gSuite3, alt: "Workspace Suites", label: "Workspace" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Galeri
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Jelajahi Hotel Kami
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            Lihat berbagai sudut dan fasilitas yang kami tawarkan untuk kenyamanan Anda.
          </p>
        </div>

        {/* Uniform grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.label}
              className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <span className="font-body text-sm font-semibold text-primary-foreground px-5 pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
