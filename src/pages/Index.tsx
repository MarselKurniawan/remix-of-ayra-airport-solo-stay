import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestPriceCTA from "@/components/BestPriceCTA";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Facilities from "@/components/Facilities";
import Nearby from "@/components/Nearby";
import Testimonials from "@/components/Testimonials";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BestPriceCTA />
      <About />
      <Rooms />
      <Gallery />
      <Facilities />
      <Nearby />
      <Testimonials />
      <PromoBanner />
      <Footer />
    </div>
  );
};

export default Index;
