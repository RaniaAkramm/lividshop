import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";

export default function HomePage() {
  return (
    <main>

      <Header />

      <Hero />

      <CategoryGrid />

      <section className="section">

        <div className="container">

          <h2 className="title">
            Featured Products
          </h2>

          <div
            className="grid grid-4"
            style={{ marginTop: "40px" }}
          >

            {[1, 2, 3, 4].map((item) => (
              <div className="card" key={item}>

                <div
                  style={{
                    height: "220px",
                    background: "#202020",
                  }}
                />

                <div style={{ padding: "20px" }}>

                  <h3>Coming Soon</h3>

                  <p
                    className="subtitle"
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    Affiliate product placeholder.
                  </p>

                  <button
                    className="btn-primary"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    View Product
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

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

    </main>
  );
}
