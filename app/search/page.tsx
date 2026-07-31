import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products } from "@/data/products";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { q = "" } = await searchParams;

  const keyword = q.trim();

  return {
    title: keyword
      ? `Search: ${keyword} | LividShop`
      : "Search Products | LividShop",

    description: keyword
      ? `Search results for "${keyword}" on LividShop.`
      : "Search Halloween products on LividShop.",

    alternates: {
      canonical: keyword
        ? `https://lividshop.com/search?q=${encodeURIComponent(keyword)}`
        : "https://lividshop.com/search",
    },

    openGraph: {
      title: keyword
        ? `Search: ${keyword}`
        : "Search Products",

      description: keyword
        ? `Search results for "${keyword}".`
        : "Search Halloween products.",

      url: keyword
        ? `https://lividshop.com/search?q=${encodeURIComponent(keyword)}`
        : "https://lividshop.com/search",

      siteName: "LividShop",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: keyword
        ? `Search: ${keyword}`
        : "Search Products",

      description: keyword
        ? `Search results for "${keyword}".`
        : "Search Halloween products.",
    },
  };
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const { q = "" } = await searchParams;

  const keyword = q.toLowerCase().trim();

  const results = products.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword)
  );

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <Breadcrumbs
            items={[
              {
                label: "Home",
                href: "/",
              },
              {
                label: "Search",
              },
            ]}
          />

          <h1 className="title">
            Search Results
          </h1>

          <p
            className="subtitle"
            style={{ marginTop: "10px" }}
          >
            {results.length} product(s) found for "{q}"
          </p>

          {results.length === 0 ? (
            <div
              className="card"
              style={{
                padding: "60px",
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              <h2>No products found</h2>

              <p className="subtitle">
                Try another keyword.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-4"
              style={{
                marginTop: "40px",
              }}
            >
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  price={`$${product.price.toFixed(2)}`}
                  image={product.images[0]}
                />
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
