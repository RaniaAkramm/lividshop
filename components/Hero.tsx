import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
          Halloween 2026 Collection
        </span>

        <h1 className="max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
          Halloween Starts
          <span className="text-orange-500"> Here</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Discover Halloween costumes, horror masks,
          gothic fashion, spooky decorations,
          collectibles, and seasonal deals.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="/shop"
            className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Shop Now
          </Link>

          <Link
            href="/categories"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-bold text-white transition hover:border-orange-500"
          >
            Explore Categories
          </Link>

        </div>

      </div>
    </section>
  );
}
