"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();

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
            Checkout
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "40px",
                marginTop: "40px",
              }}
            >
              <div className="card" style={{ padding: "30px" }}>

                <h2>Customer Information</h2>

                <div
                  style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "24px",
                  }}
                >
                  <input
                    className="input"
                    type="text"
                    placeholder="Full Name"
                  />

                  <input
                    className="input"
                    type="email"
                    placeholder="Email Address"
                  />

                  <input
                    className="input"
                    type="text"
                    placeholder="Address"
                  />

                  <input
                    className="input"
                    type="text"
                    placeholder="City"
                  />

                  <input
                    className="input"
                    type="text"
                    placeholder="Country"
                  />
                </div>

              </div>

              <div className="card" style={{ padding: "30px" }}>

                <h2>Order Summary</h2>

                <div style={{ marginTop: "24px" }}>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <span>
                        {item.name} × {item.quantity}
                      </span>

                      <span>
                        $
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <hr
                  style={{
                    margin: "24px 0",
                  }}
                />

                <h3>
                  Total: ${subtotal.toFixed(2)}
                </h3>

                <button
                  className="btn-primary"
                  style={{
                    width: "100%",
                    marginTop: "24px",
                  }}
                >
                  Place Order
                </button>

              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
