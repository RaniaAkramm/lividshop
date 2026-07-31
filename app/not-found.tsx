import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="section">
        <div
          className="container"
          style={{
            textAlign: "center",
            padding: "80px 0",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#ff6a00",
            }}
          >
            404
          </h1>

          <h2
            style={{
              marginTop: "20px",
            }}
          >
            Page Not Found
          </h2>

          <p
            className="subtitle"
            style={{
              marginTop: "20px",
            }}
          >
            Sorry, the page you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="btn-primary"
            style={{
              marginTop: "40px",
              display: "inline-block",
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
