import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1 className="title">
            Shop
          </h1>

          <p
            className="subtitle"
            style={{
              marginTop: "12px",
            }}
          >
            Browse all Halloween products.
          </p>

          <div
            className="grid grid-4"
            style={{
              marginTop: "40px",
            }}
          >
            {products.map((product) => (
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
