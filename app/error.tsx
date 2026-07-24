"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="max-w-lg text-center">

        <h1 className="mb-4 text-5xl font-bold text-orange-500">
          Something went wrong
        </h1>

        <p className="mb-8 text-zinc-400">
          An unexpected error occurred while loading this page.
        </p>

        <button
          onClick={reset}
          className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Try Again
        </button>

      </div>
    </main>
  );
}
