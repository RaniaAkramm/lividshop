"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1 className="title">
            Shopping Cart
          </h1>

          {items.length === 0 ? (
            <div
              className="card"
              style={{
                marginTop: "40px",
                padding: "60px",
                textAlign: "center",
              }}
            >
              <h2>Your cart is empty.</h2>

              <p
                className="subtitle"
                style={{ marginTop: "20px" }}
              >
                Start shopping and add your favorite products.
              </p>

              <Link
                href="/shop"
                className="btn-primary"
                style={{
                  display: "inline-block",
                  marginTop: "30px",
                }}
              >
                Continue Shopping
              </Link>

            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px",
                    marginTop: "20px",
                    alignItems: "center",
                  }}
                >

                  <div
                    style={{
                      position: "relative",
                      width: "120px",
                      height: "120px",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>

                    <h3>{item.name}</h3>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p>
                      ${item.price.toFixed(2)}
                    </p>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn-outline"
                  >
                    Remove
                  </button>

                </div>
              ))}

              <div
                className="card"
                style={{
                  marginTop: "40px",
                  padding: "30px",
                }}
              >

                <h2>
                  Total: ${total.toFixed(2)}
                </h2>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginTop: "24px",
                  }}
                >

                  <button
                    className="btn-outline"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>

                  <button className="btn-primary">
                    Checkout
                  </button>

                </div>

              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
