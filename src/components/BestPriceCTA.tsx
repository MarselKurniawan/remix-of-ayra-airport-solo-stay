import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { SALES, waLink } from "@/lib/contact";
import { useLanguage } from "@/contexts/LanguageContext";

const BestPriceCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
              <BadgeCheck size={26} className="text-primary-foreground" />
            </div>
            <div>
              <p className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-primary mb-1">
                {t("bpg.tag")}
              </p>
              <h3 className="font-heading text-xl md:text-2xl">{t("bpg.title")}</h3>
              <p className="font-body text-xs md:text-sm text-primary-foreground/70 mt-1 max-w-xl">
                {t("bpg.desc")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 pr-6 border-r border-primary-foreground/20">
              <div className="flex items-center gap-2 text-xs">
                <ShieldCheck size={16} className="text-primary" /> Price Match
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Sparkles size={16} className="text-primary" /> Direct Perks
              </div>
            </div>
            <a
              href={waLink(`Halo ${SALES.name}, saya ingin klaim Best Price Guarantee di Ayra Airport Hotel Solo.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              <WhatsAppIcon size={18} />
              {t("bpg.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPriceCTA;
