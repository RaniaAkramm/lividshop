"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Heart, ShoppingCart, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Header() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = query.trim();

    if (!value) return;

    router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  function navClass(href: string) {
    return pathname === href
      ? "text-orange-500 font-semibold"
      : "transition hover:text-orange-500";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">

      <div className="container flex h-20 items-center justify-between gap-6">

        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          LividShop
        </Link>

        <nav className="hidden lg:flex items-center gap-8">

          <Link href="/" className={navClass("/")}>
            Home
          </Link>

          <Link href="/shop" className={navClass("/shop")}>
            Shop
          </Link>

          <Link href="/categories" className={navClass("/categories")}>
            Categories
          </Link>

          <Link href="/blog" className={navClass("/blog")}>
            Blog
          </Link>

          <Link href="/contact" className={navClass("/contact")}>
            Contact
          </Link>

        </nav>

        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-md"
        >
          <input
            type="search"
            placeholder="Search Halloween products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-l-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none focus:border-orange-500"
          />

          <button
            type="submit"
            className="rounded-r-lg bg-orange-500 px-5 font-semibold text-white transition hover:bg-orange-600"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-5">

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative transition hover:text-orange-500"
          >
            <Heart size={22} />

            {wishlistItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {wishlistItems.length > 99 ? "99+" : wishlistItems.length}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="relative transition hover:text-orange-500"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>

        </div>

      </div>

    </header>
  );
}
