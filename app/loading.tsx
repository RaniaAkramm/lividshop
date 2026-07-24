export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">

      <div className="flex flex-col items-center gap-6">

        <div className="w-16 h-16 rounded-full border-4 border-zinc-800 border-t-orange-500 animate-spin" />

        <h2 className="text-3xl font-bold text-orange-500">
          LividShop
        </h2>

        <p className="text-zinc-400">
          Loading...
        </p>

      </div>

    </main>
  );
}
