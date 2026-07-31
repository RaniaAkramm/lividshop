import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
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

  const categoryName = slug.replace(/-/g, " ");

  return {
    title: `${categoryName} | LividShop`,
    description: `Browse the best ${categoryName} products at LividShop. Discover Halloween costumes, masks, decorations and more from trusted affiliate partners.`,
    alternates: {
      canonical: `https://lividshop.com/category/${slug}`,
    },
    openGraph: {
      title: `${categoryName} | LividShop`,
      description: `Browse the best ${categoryName} products.`,
      url: `https://lividshop.com/category/${slug}`,
      siteName: "LividShop",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} | LividShop`,
      description: `Browse the best ${categoryName} products.`,
    },
  };
}

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const category = slug.replace(/-/g, " ").toLowerCase();

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  const categoryTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1 className="title">
            {categoryTitle}
          </h1>

          <p
            className="subtitle"
            style={{
              marginTop: "12px",
            }}
          >
            Explore our collection of {categoryTitle.toLowerCase()} and find the best products from trusted affiliate partners.
          </p>

          <div
            className="grid grid-4"
            style={{
              marginTop: "40px",
            }}
          >
            {categoryProducts.map((product) => (
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

        </div>
      </main>

      <Footer />
    </>
  );
}
