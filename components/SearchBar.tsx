"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      style={{
        display: "flex",
        gap: "12px",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
          outline: "none",
        }}
      />

      <button
        type="submit"
        className="btn-primary"
      >
        Search
      </button>
    </form>
  );
}
