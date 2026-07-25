import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />

      <Hero />

      <CategoryGrid />

      <FeaturedProducts />

      <section className="section">
        <div className="container">
          <div className="card">
            <div
              style={{
                padding: "60px",
                textAlign: "center",
              }}
            >
              <h2 className="title">
                Join Our Newsletter
              </h2>

              <p
                className="subtitle"
                style={{
                  marginTop: "20px",
                }}
              >
                Get Halloween deals, horror product updates,
                and exclusive seasonal offers.
              </p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
