import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main>

      <Header />

      <section className="section">
        <div className="container">

          <h1 className="title">
            Halloween Starts Here
          </h1>

          <p className="subtitle">
            Discover costumes, masks, horror props, gothic fashion,
            decorations, and spooky collectibles.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary">
              Shop Now
            </button>

            <button className="btn-outline">
              Browse Categories
            </button>
          </div>

        </div>
      </section>

      <section className="section">

        <div className="container">

          <h2 className="title">
            Shop by Category
          </h2>

          <div
            className="grid grid-4"
            style={{ marginTop: "40px" }}
          >

            <div className="card">
              <div style={{ padding: "30px" }}>
                <h3>Halloween Costumes</h3>
              </div>
            </div>

            <div className="card">
              <div style={{ padding: "30px" }}>
                <h3>Horror Masks</h3>
              </div>
            </div>

            <div className="card">
              <div style={{ padding: "30px" }}>
                <h3>Decorations</h3>
              </div>
            </div>

            <div className="card">
              <div style={{ padding: "30px" }}>
                <h3>Gothic Fashion</h3>
              </div>
            </div>

          </div>

        </div>

      </section>

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
