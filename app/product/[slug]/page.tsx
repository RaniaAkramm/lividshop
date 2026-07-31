import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import RelatedProducts from "@/components/RelatedProducts";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found | LividShop",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | LividShop`,
    description: product.description,
    alternates: {
      canonical: `https://lividshop.com/product/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://lividshop.com/product/${product.slug}`,
      siteName: "LividShop",
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: product.affiliateUrl,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  return (
    <>
      <Header />

      <main className="section">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

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
                <strong>Brand:</strong> {product.brand}
              </p>

              <p
                style={{
                  marginTop: "10px",
                }}
              >
                <strong>Stock:</strong>{" "}
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>

              <p
                className="subtitle"
                style={{
                  marginTop: "24px",
                }}
              >
                {product.description}
              </p>

              <ProductActions
                id={product.id}
                slug={product.slug}
                name={product.name}
                image={product.images[0]}
                price={product.price}
                affiliateUrl={product.affiliateUrl}
              />

            </div>

          </div>

        </div>

      </main>

      <RelatedProducts currentProduct={product} />

      <Footer />
    </>
  );
}
