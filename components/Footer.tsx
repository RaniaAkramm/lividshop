import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="container py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <Link
              href="/"
              className="mb-5 inline-block text-3xl font-bold text-orange-500"
            >
              LividShop
            </Link>

            <p className="leading-7 text-zinc-400">
              Discover the best Halloween costumes, horror masks,
              gothic fashion, decorations and collectibles from
              trusted affiliate partners.
            </p>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Shop
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link
                  href="/shop"
                  className="transition hover:text-orange-500"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/category/costumes"
                  className="transition hover:text-orange-500"
                >
                  Costumes
                </Link>
              </li>

              <li>
                <Link
                  href="/category/masks"
                  className="transition hover:text-orange-500"
                >
                  Masks
                </Link>
              </li>

              <li>
                <Link
                  href="/category/decorations"
                  className="transition hover:text-orange-500"
                >
                  Decorations
                </Link>
              </li>

              <li>
                <Link
                  href="/category/fashion"
                  className="transition hover:text-orange-500"
                >
                  Gothic Fashion
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Information
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-orange-500"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="transition hover:text-orange-500"
                >
                  Affiliate Disclosure
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Disclaimer
            </h3>

            <p className="leading-7 text-zinc-400">
              LividShop participates in affiliate programs.
              We may earn a commission when you purchase
              products through our links at no extra cost to you.
            </p>

          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">

          © {new Date().getFullYear()} LividShop.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}
