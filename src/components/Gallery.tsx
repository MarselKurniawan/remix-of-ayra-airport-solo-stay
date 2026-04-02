import galleryLobby from "@/assets/gallery-lobby.jpg";
import galleryRestaurant from "@/assets/gallery-restaurant.jpg";
import galleryPool from "@/assets/gallery-pool.jpg";
import galleryMeeting from "@/assets/gallery-meeting.jpg";
import galleryGym from "@/assets/gallery-gym.jpg";
import galleryParking from "@/assets/gallery-parking.jpg";

const photos = [
  { src: galleryLobby, alt: "Lobby Hotel", label: "Lobby" },
  { src: galleryRestaurant, alt: "Restoran & Café", label: "Restoran" },
  { src: galleryPool, alt: "Kolam Renang", label: "Kolam Renang" },
  { src: galleryMeeting, alt: "Meeting Room", label: "Meeting Room" },
  { src: galleryGym, alt: "Fitness Center", label: "Gym" },
  { src: galleryParking, alt: "Area Parkir", label: "Parkir" },
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
