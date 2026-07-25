import ProductCard from "@/components/ProductCard";
import { Product, products } from "@/data/products";

type RelatedProductsProps = {
  currentProduct: Product;
};

export default function RelatedProducts({
  currentProduct,
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="section">

      <div className="container">

        <h2 className="title">
          Related Products
        </h2>

        <div
          className="grid grid-4"
          style={{ marginTop: "40px" }}
        >
          {relatedProducts.map((product) => (
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

    </section>
  );
}
