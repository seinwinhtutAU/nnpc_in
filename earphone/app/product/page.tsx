"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { Star, Check } from "@/components/Icons";

const colorOptions = [
  { id: "black", name: "Black", hex: "#0B0B0B" },
  { id: "white", name: "White", hex: "#F8F8F8" },
  { id: "pink", name: "Pink", hex: "#F472B6" },
];

const colorThumbnails: Record<string, string[]> = {
  black: [
    "/black/image2.png",
    "/black/image3.png",
    "/black/image4.png",
  ],
  white: [
    "/white/image2.png",
    "/white/image3.png",
    "/white/image4.png",
  ],
  pink: [
    "/pink/image2.png",
    "/pink/image3.png",
    "/pink/image4.png",
  ],
};

const specs = [
  { label: "Bluetooth", value: "5.4" },
  { label: "Battery", value: "Up to 40 hours with case" },
  { label: "Charging", value: "USB-C, 10-min quick charge" },
  { label: "Drivers", value: "11mm custom dynamic" },
  { label: "Noise Cancellation", value: "Hybrid Active ANC" },
  { label: "Microphones", value: "6 beamforming mics" },
  { label: "Weight", value: "5.2g per earbud" },
  { label: "Charging Port", value: "USB-C" },
];

const boxContents = [
  "Flash Air Pro Earbuds",
  "Wireless Charging Case",
  "USB-C Cable",
  "Silicone Ear Tips (S, M, L)",
  "User Manual",
];

const relatedProducts = [
  { name: "Flash Air Pro — Pearl White", price: "THB 3,200", image: "/white/image1.png" },
  { name: "Flash Air Pro — Rose Pink", price: "THB 3,200", image: "/pink/image1.png" },
  { name: "Flash Air Pro — Matte Black", price: "THB 3,200", image: "/black/image1.png" },
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [version, setVersion] = useState<"Standard" | "Pro">("Pro");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    colorThumbnails[colorOptions[0].id][0],
  );

  const currentThumbnails = colorThumbnails[selectedColor.id];
  const price = version === "Pro" ? 3200 : 2600;

  return (
    <>
      <section className="bg-matte pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div className="flex flex-col-reverse gap-6 lg:flex-row">
              <div className="flex gap-4 lg:flex-col">
                {currentThumbnails.map((thumb, index) => (
                  <button
                    key={thumb}
                    onClick={() => setMainImage(thumb)}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      mainImage === thumb
                        ? "border-gold"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={thumb}
                      alt={`Product thumbnail ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-charcoal to-matte">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={mainImage}
                    alt="Flash Air Pro product image"
                    fill
                    priority
                    loading="eager"
                    className="object-contain p-8 transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-charcoal/80 px-4 py-2 text-xs font-medium text-soft-white/70 backdrop-blur">
                  360° View
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-2 flex items-center gap-2 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} />
                ))}
                <span className="ml-2 text-sm text-soft-white/60">
                  4.9 (2,847 reviews)
                </span>
              </div>
              <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-soft-white md:text-5xl">
                Flash Air Pro
              </h1>
              <p className="mt-2 text-3xl font-semibold text-gold">
                THB {price.toLocaleString()}
              </p>
              <p className="mt-6 text-base leading-relaxed text-soft-white/70">
                Premium wireless earbuds with hybrid active noise cancellation,
                immersive Hi-Fi audio, and an industry-leading 40-hour battery
                life. Built for those who refuse to compromise.
              </p>

              {/* Color Selection */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-soft-white">
                  Color: {" "}
                  <span className="text-soft-white/70">
                    {selectedColor.name}
                  </span>
                </p>
                <div className="flex gap-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                    onClick={() => {
                      setSelectedColor(color);
                      setMainImage(colorThumbnails[color.id][0]);
                    }}
                      className={`group relative h-12 w-12 rounded-full border-2 transition-all ${
                        selectedColor.id === color.id
                          ? "border-gold"
                          : "border-white/20 hover:border-white/50"
                      }`}
                      aria-label={`Select ${color.name}`}
                    >
                      <span
                        className="absolute inset-2 rounded-full"
                        style={{ backgroundColor: color.hex }}
                      />
                      {color.id === "white" && (
                        <span className="absolute inset-2 rounded-full border border-black/10" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Version Selection */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-soft-white">
                  Version
                </p>
                <div className="flex gap-3">
                  {(["Standard", "Pro"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setVersion(v)}
                      className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                        version === v
                          ? "bg-gold text-matte"
                          : "border border-white/20 text-soft-white hover:border-gold hover:text-gold"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-soft-white">
                  Quantity
                </p>
                <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-charcoal/50 px-2 py-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-soft-white transition-colors hover:bg-white/10"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold text-soft-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-soft-white transition-colors hover:bg-white/10"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="flex-1" size="large">
                  Add to Cart
                </Button>
                <Button variant="secondary" className="flex-1" size="large">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="border-y border-white/5 bg-charcoal/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader title="Specifications" />
          <div className="overflow-hidden rounded-2xl border border-white/10">
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-8 py-5 ${
                  index !== specs.length - 1 ? "border-b border-white/10" : ""
                } ${index % 2 === 0 ? "bg-charcoal/30" : "bg-matte/50"}`}
              >
                <span className="font-medium text-soft-white/70">
                  {spec.label}
                </span>
                <span className="font-semibold text-soft-white">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-matte py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader title="Inside the Box" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boxContents.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/30 p-6 transition-colors hover:border-gold/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Check size={20} />
                </div>
                <div>
                  <span className="text-sm text-soft-white/50">
                    Item {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold text-soft-white">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-charcoal/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Complete Your Setup" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
