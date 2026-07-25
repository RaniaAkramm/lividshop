"use client";

import { useCart } from "@/context/CartContext";

type ProductActionsProps = {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  affiliateUrl: string;
};

export default function ProductActions({
  id,
  slug,
  name,
  image,
  price,
  affiliateUrl,
}: ProductActionsProps) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      id,
      slug,
      name,
      image,
      price,
      quantity: 1,
    });
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginTop: "40px",
        flexWrap: "wrap",
      }}
    >
      <button
        onClick={handleAddToCart}
        className="btn-primary"
      >
        Add to Cart
      </button>

      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
      >
        Buy Now
      </a>
    </div>
  );
}
