import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedLawyers from "@/components/FeaturedLawyers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <FeaturedLawyers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
