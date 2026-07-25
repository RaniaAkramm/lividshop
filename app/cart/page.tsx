import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CartPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1 className="title">
            Shopping Cart
          </h1>

          <div
            className="card"
            style={{
              marginTop: "40px",
              padding: "60px",
              textAlign: "center",
            }}
          >
            <h2>Your cart is empty.</h2>

            <p
              className="subtitle"
              style={{
                marginTop: "20px",
              }}
            >
              Start shopping and add your favorite Halloween products.
            </p>

            <Link
              href="/shop"
              className="btn-primary"
              style={{
                display: "inline-block",
                marginTop: "30px",
              }}
            >
              Continue Shopping
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
