"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Check,
  Star,
} from "lucide-react";
import {
  WOMEN_PRODUCTS,
  CATEGORIES_FILTER,
  SORT_OPTIONS,
  COLOR_FILTERS,
  type Page,
  type Product,
} from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import Footer from "@/app/components/Footer";

interface WomenPageProps {
  setPage: (p: Page) => void;
  onSelectProduct: (p: Product) => void;
}

export default function WomenPage({
  setPage,
  onSelectProduct,
}: WomenPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const sortRef = useRef<HTMLDivElement>(null);

  const toggleColor = (hex: string) =>
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex],
    );

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node))
        setShowSort(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const filtered = WOMEN_PRODUCTS.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const price = parseFloat(p.price.replace("$", ""));
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];
    const colorMatch =
      selectedColors.length === 0 ||
      p.colors.some((c) => selectedColors.includes(c.hex));
    return catMatch && priceMatch && colorMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Price: Low–High")
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    if (sortBy === "Price: High–Low")
      return (
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
      );
    if (sortBy === "Best Sellers") return b.sold - a.sold;
    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
  });

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[260px] md:h-[340px] bg-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1600&h=500&fit=crop&auto=format"
          alt="Women's collection"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="flex items-center gap-2 text-white/60 text-[11px] tracking-[0.12em] mb-4">
            <button
              onClick={() => setPage("home")}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight size={10} strokeWidth={2} />
            <span className="text-white">Women</span>
          </div>
          <h1 className="text-white text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-none tracking-tight font-display">
            Women&apos;s Collection
          </h1>
          <p className="text-white/60 text-sm mt-3">
            Summer 2025 — {WOMEN_PRODUCTS.length} Styles
          </p>
        </div>
      </div>

      {/* Sub-nav categories */}
      <div className="border-b border-border bg-white sticky top-[60px] z-40">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {CATEGORIES_FILTER.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-4 text-[11px] tracking-[0.16em] font-semibold transition-colors border-b-2 -mb-px ${
                  activeCategory === cat
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{sorted.length}</span>{" "}
          items
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`flex items-center gap-2 text-[11px] tracking-[0.14em] font-semibold px-4 py-2.5 border transition-colors ${
              showFilter
                ? "border-foreground bg-foreground text-white"
                : "border-border hover:border-foreground"
            }`}
          >
            <SlidersHorizontal size={13} strokeWidth={2} />
            FILTER
            {selectedColors.length > 0 && (
              <span className="w-4 h-4 bg-[#E8001A] text-white text-[9px] rounded-full flex items-center justify-center ml-0.5">
                {selectedColors.length}
              </span>
            )}
          </button>

          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-[11px] tracking-[0.14em] font-semibold px-4 py-2.5 border border-border hover:border-foreground transition-colors"
            >
              SORT: {sortBy.toUpperCase()}
              {showSort ? (
                <ChevronUp size={12} strokeWidth={2} />
              ) : (
                <ChevronDown size={12} strokeWidth={2} />
              )}
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-border shadow-lg z-50 w-52">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSortBy(opt);
                      setShowSort(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-[11px] tracking-[0.12em] font-semibold hover:bg-secondary transition-colors flex items-center justify-between ${
                      sortBy === opt
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {opt}
                    {sortBy === opt && <Check size={12} strokeWidth={2.5} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilter && (
        <div className="border-t border-b border-border bg-[#fafafa]">
          <div className="max-w-screen-xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[10px] tracking-[0.22em] font-semibold text-muted-foreground mb-4">
                COLOR
              </p>
              <div className="flex flex-wrap gap-3">
                {COLOR_FILTERS.map((c) => (
                  <button
                    key={c.hex}
                    title={c.name}
                    onClick={() => toggleColor(c.hex)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColors.includes(c.hex)
                        ? "border-foreground scale-110"
                        : "border-transparent hover:border-foreground/30"
                    }`}
                    style={{
                      background: c.hex,
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
                    }}
                  />
                ))}
              </div>
              {selectedColors.length > 0 && (
                <button
                  onClick={() => setSelectedColors([])}
                  className="mt-3 text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Clear
                </button>
              )}
            </div>

            <div>
              <p className="text-[10px] tracking-[0.22em] font-semibold text-muted-foreground mb-4">
                PRICE: ${priceRange[0]} – ${priceRange[1]}
              </p>
              <input
                type="range"
                min={0}
                max={200}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full accent-foreground"
              />
            </div>

            <div>
              <p className="text-[10px] tracking-[0.22em] font-semibold text-muted-foreground mb-4">
                CATEGORY
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES_FILTER.slice(1).map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setActiveCategory(cat === activeCategory ? "All" : cat)
                    }
                    className={`text-[10px] tracking-[0.12em] font-semibold px-3 py-1.5 border transition-colors ${
                      activeCategory === cat
                        ? "bg-foreground text-white border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="max-w-screen-xl mx-auto px-6 pb-20">
        {sorted.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-lg text-muted-foreground">
              No items match your filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSelectedColors([]);
                setPriceRange([0, 200]);
              }}
              className="mt-4 text-[11px] tracking-[0.16em] font-semibold underline"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sorted.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onSelectProduct(product)}
              />
            ))}
          </div>
        )}
      </div>

      <Footer setPage={setPage} simple />
    </div>
  );
}
