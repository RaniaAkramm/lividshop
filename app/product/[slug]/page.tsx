import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="section">

        <div className="container">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "500px",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </div>

            <div>

              <h1 className="title">
                {product.name}
              </h1>

              <p
                style={{
                  color: "#ff6a00",
                  fontSize: "32px",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                ${product.price.toFixed(2)}
              </p>

              <p
                className="subtitle"
                style={{
                  marginTop: "24px",
                }}
              >
                {product.description}
              </p>

              <button
                className="btn-primary"
                style={{
                  marginTop: "40px",
                }}
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
