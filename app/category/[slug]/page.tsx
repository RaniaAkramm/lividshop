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

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1 className="title">
            {slug.replace(/-/g, " ")}
          </h1>

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
