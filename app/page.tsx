import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />

      <Hero />

      <CategoryGrid />

      <FeaturedProducts />

      <Newsletter />

      <Footer />
    </main>
  );
}
