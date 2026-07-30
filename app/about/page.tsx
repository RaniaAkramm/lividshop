import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | LividShop",
  description:
    "Learn more about LividShop and how we help you discover the best Halloween costumes, masks, decorations, and gothic fashion from trusted partner stores.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div
          className="container"
          style={{
            maxWidth: "900px",
          }}
        >
          <h1 className="title">
            About LividShop
          </h1>

          <p
            className="subtitle"
            style={{
              marginTop: "20px",
            }}
          >
            LividShop is an affiliate website dedicated to helping Halloween
            fans discover high-quality costumes, masks, decorations, gothic
            fashion, and seasonal collectibles from trusted online retailers.
          </p>

          <section style={{ marginTop: "50px" }}>
            <h2 className="title">Our Mission</h2>

            <p
              className="subtitle"
              style={{ marginTop: "16px" }}
            >
              Our goal is to make it easier to find the best Halloween products
              by collecting recommendations in one place. We carefully organize
              products into categories so visitors can compare and choose what
              fits their style and budget.
            </p>
          </section>

          <section style={{ marginTop: "50px" }}>
            <h2 className="title">How We Select Products</h2>

            <p
              className="subtitle"
              style={{ marginTop: "16px" }}
            >
              Products featured on LividShop are selected based on relevance,
              popularity, seasonal trends, and information provided by our
              affiliate partners. We aim to showcase products that offer value
              and a great shopping experience.
            </p>
          </section>

          <section style={{ marginTop: "50px" }}>
            <h2 className="title">Affiliate Disclosure</h2>

            <p
              className="subtitle"
              style={{ marginTop: "16px" }}
            >
              LividShop participates in affiliate programs. When you click on
              certain product links and make a purchase, we may earn a
              commission at no additional cost to you. This helps support the
              operation of our website.
            </p>
          </section>

          <section style={{ marginTop: "50px" }}>
            <h2 className="title">Our Commitment</h2>

            <p
              className="subtitle"
              style={{ marginTop: "16px", marginBottom: "60px" }}
            >
              We are committed to providing a fast, user-friendly experience,
              helpful product recommendations, and continuously improving our
              content to help visitors find the perfect Halloween products.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
