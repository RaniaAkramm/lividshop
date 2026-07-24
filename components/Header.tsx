"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-bold text-orange-500"
        >
          LividShop
        </Link>

        <nav className="hidden md:flex items-center gap-8">

          <Link href="/">Home</Link>

          <Link href="/shop">Shop</Link>

          <Link href="/categories">Categories</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        <div className="flex items-center gap-5">

          <button>
            <Search size={22} />
          </button>

          <button>
            <Heart size={22} />
          </button>

          <button>
            <ShoppingCart size={22} />
          </button>

          <button className="md:hidden">
            <Menu size={24} />
          </button>

        </div>

      </div>
    </header>
  );
}
