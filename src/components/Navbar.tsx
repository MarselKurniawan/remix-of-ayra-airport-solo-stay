import logoWhite from "@/assets/logo-white.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Kamar", href: "#rooms" },
    { label: "Fasilitas", href: "#facilities" },
    { label: "Sekitar", href: "#nearby" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-foreground/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#hero">
          <img src={logoWhite} alt="Ayra Airport Hotel Solo" className="h-10" />
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-secondary transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-foreground/95 backdrop-blur-md px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
