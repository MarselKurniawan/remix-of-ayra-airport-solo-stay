const PromoBanner = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary-foreground/80 mb-2">
          Promo Spesial
        </p>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3">
          Diskon hingga 25% untuk Early Bird
        </h2>
        <p className="font-body text-sm md:text-base text-primary-foreground/70 max-w-lg mx-auto mb-6">
          Pesan sekarang dan nikmati harga spesial untuk menginap di Ayra Airport Hotel Solo.
        </p>
        <a
          href="#hero"
          className="inline-block bg-primary-foreground text-primary font-body font-semibold text-sm px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
