import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Classic Vampire Costume",
    price: "$49.99",
  },
  {
    id: 2,
    name: "Scary Clown Mask",
    price: "$29.99",
  },
  {
    id: 3,
    name: "Halloween Decoration Kit",
    price: "$39.99",
  },
  {
    id: 4,
    name: "Gothic Hooded Cloak",
    price: "$59.99",
  },
];

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
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
