import facilityBallroom from "@/assets/facility-ballroom.webp";
import facilityMeeting from "@/assets/facility-meeting.webp";
import heroResto from "@/assets/hero-resto.jpg";
import { Car, Coffee, Shirt, ParkingCircle, ConciergeBell, ShowerHead, Tv, UtensilsCrossed, Crown } from "lucide-react";

const facilities = [
  { icon: UtensilsCrossed, name: "Riverside Resto", image: heroResto },
  { icon: Crown, name: "Ballroom", image: facilityBallroom },
  { icon: Tv, name: "Meeting Room", image: facilityMeeting },
];

const facilityList = [
  { icon: ConciergeBell, name: "Resepsionis 24 Jam" },
  { icon: ParkingCircle, name: "Parkir Luas Gratis" },
  { icon: Car, name: "Shuttle Bandara" },
  { icon: Shirt, name: "Layanan Laundry" },
  { icon: ShowerHead, name: "Air Panas 24 Jam" },
  { icon: Coffee, name: "Café" },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Fasilitas
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">Fasilitas Lengkap</h2>
          <p className="font-body text-muted-foreground">
            Nikmati berbagai fasilitas modern yang kami sediakan untuk kenyamanan Anda selama menginap.
          </p>
        </div>

        {/* Featured facilities with photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {facilities.map((f) => (
            <div
              key={f.name}
              className="relative overflow-hidden rounded-lg group h-64"
            >
              <img
                src={f.image}
                alt={f.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <f.icon className="text-primary-foreground" size={18} />
                </div>
                <span className="font-body text-sm font-semibold text-primary-foreground">{f.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Other facilities as icon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {facilityList.map((f) => (
            <div
              key={f.name}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <f.icon className="text-primary" size={22} />
              </div>
              <span className="font-body text-sm font-medium text-foreground text-center">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
