import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="container py-16">

        <div className="grid grid-4">

          <div>

            <h2 className="mb-5 text-2xl font-bold text-orange-500">
              LividShop
            </h2>

            <p className="text-zinc-400">
              Halloween costumes, horror masks,
              gothic fashion, decorations,
              collectibles and seasonal deals.
            </p>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Shop
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/shop">
                  All Products
                </Link>
              </li>

              <li>
                <Link href="/category/costumes">
                  Costumes
                </Link>
              </li>

              <li>
                <Link href="/category/masks">
                  Masks
                </Link>
              </li>

              <li>
                <Link href="/category/decorations">
                  Decorations
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms">
                  Terms of Service
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Newsletter
            </h3>

            <p className="mb-4 text-zinc-400">
              Subscribe for new arrivals and seasonal offers.
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="mb-3 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none"
            />

            <button className="btn-primary w-full">
              Subscribe
            </button>

          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-zinc-500">

          © 2026 LividShop. All rights reserved.

        </div>

      </div>

    </footer>
  );
}
