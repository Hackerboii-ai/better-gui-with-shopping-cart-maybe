import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import DealsSection from "@/components/DealsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DealsSection />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;
