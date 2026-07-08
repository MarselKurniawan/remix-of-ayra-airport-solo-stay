import logoWhite from "@/assets/logo-white.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";
import { SALES, waLink } from "@/lib/contact";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [facOpen, setFacOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.home"), href: "/#hero" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.rooms"), href: "/#rooms" },
  ];
  const facSubs = [
    { label: t("nav.facilities"), href: "/#facilities" },
    { label: t("nav.wedding"), href: "/wedding-venue", internal: true },
    { label: t("nav.meeting"), href: "/meeting-room", internal: true },
  ];
  const restLinks = [
    { label: t("nav.nearby"), href: "/#nearby" },
    { label: t("nav.testimonials"), href: "/#testimonials" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const waHref = waLink(`Halo ${SALES.name}, saya ingin bertanya tentang Ayra Airport Hotel Solo.`);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-foreground/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/">
          <img src={logoWhite} alt="Ayra Airport Hotel Solo" className="h-10" />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}

          {/* Facilities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFacOpen(true)}
            onMouseLeave={() => setFacOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors">
              {t("nav.facilities")} <ChevronDown size={14} />
            </button>
            {facOpen && (
              <div className="absolute top-full left-0 pt-3 min-w-[200px]">
                <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                  {facSubs.map((s) =>
                    s.internal ? (
                      <Link
                        key={s.href}
                        to={s.href}
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {s.label}
                      </Link>
                    ) : (
                      <a
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {s.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {restLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}

          {/* WhatsApp Sales Button */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe57] text-white font-body font-semibold text-sm pl-3 pr-4 py-2 rounded-md transition-colors"
          >
            <WhatsAppIcon size={18} />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[9px] font-normal opacity-80 tracking-wider uppercase">{SALES.name}</span>
              <span className="text-xs font-bold">{SALES.phone}</span>
            </div>
          </a>
        </div>

        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-foreground/95 backdrop-blur-md px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <div className="pt-2 border-t border-primary-foreground/10">
            <p className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mb-2">{t("nav.facilities")}</p>
            {facSubs.map((s) =>
              s.internal ? (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors py-1"
                >
                  {s.label}
                </Link>
              ) : (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors py-1"
                >
                  {s.label}
                </a>
              )
            )}
          </div>
          {restLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold text-sm px-4 py-2.5 rounded-md mt-2"
          >
            <WhatsAppIcon size={18} />
            <span>{SALES.name} · {SALES.phone}</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
