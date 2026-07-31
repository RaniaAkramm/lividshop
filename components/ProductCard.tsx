"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

type ProductCardProps = {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  id,
  slug,
  name,
  price,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const favorite = isInWishlist(id);
  const numericPrice = Number(price.replace("$", ""));

  function handleAddToCart() {
    addToCart({
      id,
      slug,
      name,
      image,
      price: numericPrice,
      quantity: 1,
    });
  }

  function handleWishlist() {
    if (favorite) {
      removeFromWishlist(id);
      return;
    }

    addToWishlist({
      id,
      slug,
      name,
      image,
      price: numericPrice,
    });
  }

  return (
    <article className="card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-orange-500">

      <div className="relative h-[220px] w-full">

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          loading="lazy"
          className="object-cover transition duration-300 hover:scale-105"
        />

        <button
          onClick={handleWishlist}
          aria-label={
            favorite
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          title={
            favorite
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/80 transition hover:bg-black"
        >
          <Heart
            size={20}
            fill={favorite ? "#ef4444" : "transparent"}
            color={favorite ? "#ef4444" : "#ffffff"}
          />
        </button>

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold line-clamp-2">
          {name}
        </h3>

        <p className="mt-3 text-lg font-bold text-orange-500">
          {price}
        </p>

        <div className="mt-5 flex gap-3">

          <Link
            href={`/product/${slug}`}
            className="btn-outline flex-1 text-center"
          >
            View Details
          </Link>

          <button
            onClick={handleAddToCart}
            className="btn-primary flex-1"
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </article>
  );
}
