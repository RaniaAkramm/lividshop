import Link from "next/link";

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
            <div
              key={product.id}
              className="card"
            >
              <div
                style={{
                  height: "220px",
                  background: "#202020",
                }}
              />

              <div style={{ padding: "20px" }}>

                <h3>{product.name}</h3>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#ff6a00",
                    fontWeight: 700,
                  }}
                >
                  {product.price}
                </p>

                <Link
                  href={`/product/${product.id}`}
                  className="btn-primary"
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                  }}
                >
                  View Product
                </Link>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
