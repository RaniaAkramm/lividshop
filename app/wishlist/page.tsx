"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
  const {
    items,
    removeFromWishlist,
  } = useWishlist();

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1 className="title">
            My Wishlist
          </h1>

          <p
            className="subtitle"
            style={{
              marginTop: "12px",
            }}
          >
            Save your favorite products for later.
          </p>

          {items.length === 0 ? (
            <div
              className="card"
              style={{
                marginTop: "40px",
                padding: "60px",
                textAlign: "center",
              }}
            >
              <h2>Your wishlist is empty.</h2>

              <Link
                href="/shop"
                className="btn-primary"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                }}
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div
              className="grid grid-4"
              style={{
                marginTop: "40px",
              }}
            >
              {items.map((product) => (
                <div
                  key={product.id}
                  className="card overflow-hidden"
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "220px",
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "20px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >
                      {product.name}
                    </h3>

                    <p
                      style={{
                        color: "#ff6a00",
                        marginTop: "12px",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      ${product.price.toFixed(2)}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "20px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link
                        href={`/product/${product.slug}`}
                        className="btn-outline"
                      >
                        View Product
                      </Link>

                      <button
                        onClick={() =>
                          removeFromWishlist(product.id)
                        }
                        className="btn-primary"
                      >
                        Remove
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
