"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">

      <div className="container flex h-20 items-center justify-between gap-6">

        <Link
          href="/"
          className="text-3xl font-bold text-orange-500"
        >
          LividShop
        </Link>

        <nav className="hidden lg:flex items-center gap-8">

          <Link href="/">Home</Link>

          <Link href="/shop">Shop</Link>

          <Link href="/categories">Categories</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-md"
        >

          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-l-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none"
          />

          <button
            type="submit"
            className="rounded-r-lg bg-orange-500 px-5 font-semibold text-white hover:bg-orange-600"
          >
            Search
          </button>

        </form>

        <div className="flex items-center gap-5">

          <Link href="/wishlist">
            <Heart size={22} />
          </Link>

          <Link href="/cart">
            <ShoppingCart size={22} />
          </Link>

          <button className="lg:hidden">
            <Menu size={24} />
          </button>

        </div>

      </div>

    </header>
  );
}
