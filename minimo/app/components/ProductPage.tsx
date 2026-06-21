"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Star,
  Plus,
  Minus,
  Heart,
  ShoppingBag,
  Check,
  Truck,
  RotateCcw,
} from "lucide-react";
import { WOMEN_PRODUCTS, type Page, type Product } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import Footer from "@/app/components/Footer";

interface ProductPageProps {
  product: Product;
  setPage: (p: Page) => void;
  setSelectedProduct: (p: Product) => void;
}

export default function ProductPage({
  product,
  setPage,
  setSelectedProduct,
}: ProductPageProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wished, setWished] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");
  const [sizeError, setSizeError] = useState(false);

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const related = WOMEN_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const ACCORDION_ITEMS = [
    {
      key: "details",
      label: "Product Details",
      content: product.desc,
    },
    {
      key: "material",
      label: "Material & Care",
      content: `Material: ${product.material}. Machine wash cold with like colors. Do not bleach. Tumble dry low. Cool iron if needed. Do not dry clean.`,
    },
    {
      key: "shipping",
      label: "Shipping & Returns",
      content:
        "Free standard shipping on orders over $75. Express delivery available at checkout. Free returns within 30 days — no questions asked.",
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center gap-2 text-[11px] tracking-[0.12em] text-muted-foreground">
        <button
          onClick={() => setPage("home")}
          className="hover:text-foreground transition-colors"
        >
          Home
        </button>
        <ChevronRight size={10} strokeWidth={2} />
        <button
          onClick={() => setPage("women")}
          className="hover:text-foreground transition-colors"
        >
          Women
        </button>
        <ChevronRight size={10} strokeWidth={2} />
        <span className="text-foreground truncate max-w-[200px]">
          {product.name}
        </span>
      </div>

      {/* Main layout */}
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {/* Left: Image Gallery */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-2 w-[72px] flex-shrink-0">
              {product.imgs.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square bg-gray-100 overflow-hidden border-2 transition-colors ${
                    activeImg === i
                      ? "border-foreground"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={src.replace("w=900&h=1200", "w=150&h=150")}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1 relative aspect-[3/4] bg-gray-100 overflow-hidden">
              <img
                src={product.imgs[activeImg]}
                alt={product.alt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.tag && (
                <span
                  className={`absolute top-4 left-4 text-[9px] tracking-[0.15em] font-bold px-2.5 py-1 ${
                    product.tag === "SALE" || product.tag === "BEST SELLER"
                      ? "bg-[#E8001A] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {product.tag}
                </span>
              )}
              <button
                onClick={() => setWished(!wished)}
                className="absolute top-4 right-4 w-9 h-9 bg-white flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Heart
                  size={16}
                  strokeWidth={1.5}
                  className={
                    wished ? "fill-[#E8001A] text-[#E8001A]" : "text-foreground"
                  }
                />
              </button>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <p className="text-[10px] tracking-[0.25em] text-muted-foreground mb-2 font-medium">
              {product.category.toUpperCase()}
            </p>
            <h1 className="text-[1.9rem] md:text-[2.2rem] font-bold leading-tight tracking-tight mb-3 font-display">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    strokeWidth={1.5}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-foreground text-foreground"
                        : "text-border fill-border"
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <p className="text-2xl font-bold">{product.price}</p>
              {product.originalPrice && (
                <p className="text-base text-muted-foreground line-through">
                  {product.originalPrice}
                </p>
              )}
            </div>

            {/* Color selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] tracking-[0.18em] font-semibold">
                  COLOR
                </p>
                <p className="text-xs text-muted-foreground">
                  {selectedColor.name}
                </p>
              </div>
              <div className="flex gap-2.5">
                {product.colors.map((color) => (
                  <button
                    key={color.hex}
                    title={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor.hex === color.hex
                        ? "border-foreground scale-110"
                        : "border-transparent hover:border-border"
                    }`}
                    style={{
                      background: color.hex,
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.12)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <p
                  className={`text-[11px] tracking-[0.18em] font-semibold ${sizeError ? "text-[#E8001A]" : ""}`}
                >
                  SIZE {sizeError && "— Please select a size"}
                </p>
                <button className="text-[11px] text-muted-foreground hover:text-foreground underline transition-colors tracking-wide">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`py-2.5 text-xs font-semibold tracking-[0.1em] border transition-colors ${
                      selectedSize === size
                        ? "bg-foreground text-white border-foreground"
                        : sizeError
                          ? "border-[#E8001A]/40 hover:border-foreground"
                          : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Bag */}
            <div className="flex gap-3 mb-5">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus size={14} strokeWidth={2} />
                </button>
                <span className="w-10 text-center text-sm font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus size={14} strokeWidth={2} />
                </button>
              </div>

              <button
                onClick={handleAddToBag}
                className={`flex-1 h-12 text-[11px] tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? "bg-[#1a7a3a] text-white"
                    : "bg-[#111111] text-white hover:bg-[#333333]"
                }`}
              >
                {added ? (
                  <>
                    <Check size={15} strokeWidth={2.5} /> ADDED TO BAG
                  </>
                ) : (
                  <>
                    <ShoppingBag size={15} strokeWidth={1.5} /> ADD TO BAG
                  </>
                )}
              </button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  icon: <Truck size={14} strokeWidth={1.5} />,
                  text: "Free shipping over $75",
                },
                {
                  icon: <RotateCcw size={14} strokeWidth={1.5} />,
                  text: "Free 30-day returns",
                },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 p-3 bg-[#f4f4f4]"
                >
                  <span className="text-muted-foreground">{icon}</span>
                  <span className="text-[11px] text-muted-foreground tracking-wide">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="border-t border-border">
              {ACCORDION_ITEMS.map(({ key, label, content }) => (
                <div key={key} className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === key ? null : key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-[11px] tracking-[0.18em] font-semibold">
                      {label.toUpperCase()}
                    </span>
                    {openAccordion === key ? (
                      <ChevronUp
                        size={14}
                        strokeWidth={2}
                        className="text-muted-foreground flex-shrink-0"
                      />
                    ) : (
                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className="text-muted-foreground flex-shrink-0"
                      />
                    )}
                  </button>
                  {openAccordion === key && (
                    <div className="pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {content}
                      </p>
                      {key === "material" && (
                        <p className="text-[11px] text-muted-foreground mt-2 tracking-wide">
                          Made in Portugal
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to collection */}
      <div className="max-w-screen-xl mx-auto px-6 mb-8">
        <button
          onClick={() => setPage("women")}
          className="flex items-center gap-2 text-[11px] tracking-[0.16em] font-semibold hover:gap-3 transition-all text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={13} strokeWidth={2} /> BACK TO WOMEN
        </button>
      </div>

      {/* You May Also Like */}
      <section className="bg-[#f4f4f4] border-t border-border py-14 px-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.28em] text-muted-foreground mb-2.5 font-medium">
            CONTINUE SHOPPING
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10 font-display">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => {
                  setSelectedProduct(p);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer setPage={setPage} simple />
    </div>
  );
}
