"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { useDebounce } from "../lib/useDebounce";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
};

type Props = {
  products: Product[];
};

const PAGE_SIZE = 6;

export default function ProductBrowser({ products }: Props) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query, 300);

  const filtered = useMemo(() => {
    let result = products.filter(p =>
      p.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "recent")
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    return result;
  }, [products, debouncedQuery, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="transition-colors duration-300">
      {/* SEARCH + SORT */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="w-full md:max-w-sm rounded-lg border px-4 py-2 text-sm outline-none 
                     bg-[#071a11] 
                     border-white/20
                     text-white
                     focus:border-primary transition-colors"
        />

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="w-full md:w-56 rounded-lg border px-4 py-2 text-sm outline-none 
                     bg-[#071a11] 
                     border-white/20
                     text-white
                     focus:border-primary transition-colors"
        >
          <option value="recent">Most recent</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      {/* EMPTY STATES */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-white/60 transition-colors">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm mt-2">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <>
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginated.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  );
}
