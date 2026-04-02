import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Users, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";
import logoWhite from "@/assets/logo-white.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");

  return (
    <section id="hero" className="relative h-screen flex flex-col">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Ayra Airport Hotel Solo"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Spacer for navbar */}
      <div className="relative z-10 pt-24" />

      {/* Center content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="font-body text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/60 mb-5">
              Airport Hotel · Solo, Central Java
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-6xl lg:text-7xl leading-[1] text-primary-foreground mb-6">
              Where comfort
              <br />
              meets convenience.
            </h1>
            <p className="font-body text-sm md:text-base text-primary-foreground/65 max-w-md leading-relaxed mb-10">
              Hanya 5 menit dari Bandara Adi Soemarmo — tempat ideal untuk beristirahat sebelum atau sesudah perjalanan Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Widget */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="bg-card/95 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl p-4 md:p-6 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-end">
            {/* Check-in */}
            <div className="space-y-1.5">
              <label className="font-body text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                Check-in
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-body font-normal h-11",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {checkIn ? format(checkIn, "dd MMM yyyy") : "Pilih tanggal"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out */}
            <div className="space-y-1.5">
              <label className="font-body text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                Check-out
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-body font-normal h-11",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {checkOut ? format(checkOut, "dd MMM yyyy") : "Pilih tanggal"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) =>
                      date < (checkIn || new Date())
                    }
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="space-y-1.5">
              <label className="font-body text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                Tamu
              </label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="h-11 font-body">
                  <Users className="mr-2 h-4 w-4 text-primary" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Tamu</SelectItem>
                  <SelectItem value="2">2 Tamu</SelectItem>
                  <SelectItem value="3">3 Tamu</SelectItem>
                  <SelectItem value="4">4 Tamu</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button className="h-11 font-body font-semibold text-sm tracking-wide">
              Cek Ketersediaan
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 pb-6 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
        >
          <span className="font-body text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
