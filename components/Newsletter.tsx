export default function Newsletter() {
  return (
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
                maxWidth: "700px",
                marginInline: "auto",
              }}
            >
              Get Halloween deals, horror product updates,
              exclusive discounts, and seasonal offers delivered
              directly to your inbox.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >

              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "360px",
                  maxWidth: "100%",
                  padding: "14px 18px",
                  borderRadius: "10px",
                  border: "1px solid #333",
                  background: "#111",
                  color: "#fff",
                  outline: "none",
                }}
              />

              <button className="btn-primary">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
