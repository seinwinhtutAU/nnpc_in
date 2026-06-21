"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/app/lib/data";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [wished, setWished] = useState(false);

  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
        <img
          src={product.img}
          alt={product.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span
            className={`absolute top-3 left-3 text-[9px] tracking-[0.15em] font-bold px-2.5 py-1 ${
              product.tag === "BEST SELLER"
                ? "bg-[#E8001A] text-white"
                : product.tag === "SALE"
                ? "bg-[#E8001A] text-white"
                : "bg-white text-black"
            }`}
          >
            {product.tag}
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 bg-white flex items-center justify-center"
        >
          <Heart
            size={15}
            strokeWidth={1.5}
            className={wished ? "fill-[#E8001A] text-[#E8001A]" : "text-foreground"}
          />
        </button>
        <button className="absolute bottom-0 left-0 right-0 bg-[#111111] text-white text-[10px] tracking-[0.2em] font-semibold py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          QUICK ADD
        </button>
      </div>
      <div>
        <div className="flex gap-1.5 mb-2">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c.hex}
              title={c.name}
              className="inline-block w-3.5 h-3.5 rounded-full border border-black/10 hover:scale-110 transition-transform"
              style={{ background: c.hex }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-[10px] text-muted-foreground self-center ml-0.5">+{product.colors.length - 4}</span>
          )}
        </div>
        <h4 className="text-sm font-medium leading-tight mb-1 tracking-wide">{product.name}</h4>
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{product.price}</p>
          {product.originalPrice && (
            <p className="text-xs text-muted-foreground line-through">{product.originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}
