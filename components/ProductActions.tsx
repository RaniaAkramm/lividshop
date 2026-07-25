"use client";

import { useState } from "react";
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

  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    addToCart({
      id,
      slug,
      name,
      image,
      price,
      quantity,
    });
  }

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <span>Quantity</span>

        <button
          className="btn-outline"
          onClick={() =>
            setQuantity((q) => Math.max(1, q - 1))
          }
        >
          -
        </button>

        <strong
          style={{
            minWidth: "32px",
            textAlign: "center",
          }}
        >
          {quantity}
        </strong>

        <button
          className="btn-outline"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
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
    </div>
  );
}
