import { Car, Coffee, Dumbbell, Shirt, ParkingCircle, ConciergeBell, ShowerHead, Tv } from "lucide-react";

const facilities = [
  { icon: ConciergeBell, name: "Resepsionis 24 Jam" },
  { icon: Coffee, name: "Restoran & Café" },
  { icon: ParkingCircle, name: "Parkir Luas Gratis" },
  { icon: Car, name: "Shuttle Bandara" },
  { icon: Dumbbell, name: "Fitness Center" },
  { icon: Shirt, name: "Layanan Laundry" },
  { icon: ShowerHead, name: "Air Panas 24 Jam" },
  { icon: Tv, name: "Meeting Room" },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-card">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((f) => (
            <div
              key={f.name}
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
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
