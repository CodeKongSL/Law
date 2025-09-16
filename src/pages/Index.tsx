import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import FeaturedLawyers from "@/components/FeaturedLawyers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <PracticeAreas />
        <FeaturedLawyers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
