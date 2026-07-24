import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="text-center">

        <h1 className="mb-4 text-7xl font-bold text-orange-500">
          404
        </h1>

        <h2 className="mb-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mb-8 text-zinc-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}
