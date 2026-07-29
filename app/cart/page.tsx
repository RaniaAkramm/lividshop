"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
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
                padding: "60px",
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              <h2>Your cart is empty</h2>

              <Link
                href="/shop"
                className="btn-primary"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "grid",
                  gap: "24px",
                  marginTop: "40px",
                }}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="card"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr auto",
                      gap: "24px",
                      alignItems: "center",
                      padding: "20px",
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
                          borderRadius: "12px",
                        }}
                      />
                    </div>

                    <div>
                      <h3>{item.name}</h3>

                      <p
                        style={{
                          color: "#ff6a00",
                          marginTop: "10px",
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                          marginTop: "18px",
                        }}
                      >
                        <button
                          className="btn-outline"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          −
                        </button>

                        <strong>
                          {item.quantity}
                        </strong>

                        <button
                          className="btn-outline"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <h3>
                        $
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </h3>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="btn-outline"
                        style={{
                          marginTop: "18px",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="card"
                style={{
                  marginTop: "40px",
                  padding: "30px",
                }}
              >
                <h2>Order Summary</h2>

                <h3
                  style={{
                    marginTop: "20px",
                  }}
                >
                  Total: ${subtotal.toFixed(2)}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                    marginTop: "30px",
                  }}
                >
                  <button
                    className="btn-outline"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>

                  <Link
                    href="/checkout"
                    className="btn-primary"
                  >
                    Proceed to Checkout
                  </Link>
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
