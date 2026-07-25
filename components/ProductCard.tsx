import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  slug,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-orange-500">

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ padding: "20px" }}>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          {name}
        </h3>

        <p
          style={{
            color: "#ff6a00",
            marginTop: "12px",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          {price}
        </p>

        <Link
          href={`/product/${slug}`}
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
  );
}
