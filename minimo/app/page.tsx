"use client";

import { useState, useEffect } from "react";
import { WOMEN_PRODUCTS, type Page, type Product } from "@/app/lib/data";
import Navbar from "@/app/components/Navbar";
import HomePage from "@/app/components/HomePage";
import WomenPage from "@/app/components/WomenPage";
import ProductPage from "@/app/components/ProductPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    WOMEN_PRODUCTS[0],
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar page={page} setPage={setPage} scrolled={scrolled} />

      {page === "home" && (
        <HomePage setPage={setPage} setSelectedProduct={setSelectedProduct} />
      )}
      {page === "women" && (
        <WomenPage
          setPage={setPage}
          onSelectProduct={(p) => {
            setSelectedProduct(p);
            setPage("product");
          }}
        />
      )}
      {page === "product" && (
        <ProductPage
          key={selectedProduct.id}
          product={selectedProduct}
          setPage={setPage}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}
