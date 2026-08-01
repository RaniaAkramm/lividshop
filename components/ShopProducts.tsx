"use client";

import { useMemo, useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import { products } from "@/data/products";

const PRODUCTS_PER_PAGE = 12;

export default function ShopProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(products.map((product) => product.category))
      ),
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (item) => item.category === category
      );
    }

    if (search.trim()) {
      const searchTerm = search.toLowerCase().trim();

      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm)
      );
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name":
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return result;
  }, [search, category, sort]);

  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const currentProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "32px",
        }}
      >
        <input
          className="input"
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products"
        />

        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter products by category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          className="input"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
        >
          <option value="default">
            Sort
          </option>

          <option value="price-low">
            Price Low → High
          </option>

          <option value="price-high">
            Price High → Low
          </option>

          <option value="name">
            Name A → Z
          </option>
        </select>
      </div>

      <p
        style={{
          marginTop: "20px",
          opacity: 0.8,
        }}
      >
        {filteredProducts.length} Products
      </p>

      {currentProducts.length === 0 ? (
        <div
          className="card"
          style={{
            marginTop: "32px",
            padding: "50px 20px",
            textAlign: "center",
          }}
        >
          <h2>
            No products found
          </h2>

          <p
            className="subtitle"
            style={{
              marginTop: "10px",
            }}
          >
            Try another search term or category.
          </p>
        </div>
      ) : (
        <div
          className="grid grid-4"
          style={{
            marginTop: "32px",
          }}
        >
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              name={product.name}
              price={`$${product.price.toFixed(2)}`}
              image={product.images[0]}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </>
  );
}
