import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="section">
      <div className="container">

        <h2 className="title">
          Featured Products
        </h2>

        <div
          className="grid grid-4"
          style={{ marginTop: "40px" }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={`$${product.price.toFixed(2)}`}
              image={product.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
