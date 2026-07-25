import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

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
              gap: "50px",
            }}
          >

            <ProductGallery
              images={product.images}
              name={product.name}
            />

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
                style={{
                  marginTop: "16px",
                }}
              >
                ⭐ {product.rating} ({product.reviews} reviews)
              </p>

              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Brand: {product.brand}
              </p>

              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Stock: {product.stock}
              </p>

              <p
                className="subtitle"
                style={{
                  marginTop: "24px",
                }}
              >
                {product.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  marginTop: "40px",
                }}
              >
                <button className="btn-primary">
                  Add to Cart
                </button>

                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Buy Now
                </a>
              </div>

            </div>

          </div>

        </div>

      </main>

      <RelatedProducts currentProduct={product} />

      <Footer />
    </>
  );
}
