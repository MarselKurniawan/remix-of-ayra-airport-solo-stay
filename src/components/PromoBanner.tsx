import { useLanguage } from "@/contexts/LanguageContext";

const PromoBanner = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary-foreground/80 mb-2">
          {t("promo.tag")}
        </p>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3">
          {t("promo.title")}
        </h2>
        <p className="font-body text-sm md:text-base text-primary-foreground/80 max-w-lg mx-auto">
          {t("promo.desc")}
        </p>
      </div>
    </section>
  );
};

export default PromoBanner;
