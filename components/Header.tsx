"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu
} from "lucide-react";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "#111111",
        borderBottom: "1px solid #262626"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
          gap: "20px"
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#ff6a00"
          }}
        >
          LividShop
        </Link>

        <nav
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center"
          }}
        >
          <Link href="/">Home</Link>

          <Link href="/shop">Shop</Link>

          <Link href="/categories">Categories</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/contact">Contact</Link>
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px"
          }}
        >
          <Search size={22} />

          <Heart size={22} />

          <ShoppingCart size={22} />

          <Menu size={24} />
        </div>
      </div>
    </header>
  );
}
