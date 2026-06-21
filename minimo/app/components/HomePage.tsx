"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { WOMEN_PRODUCTS, type Page, type Product } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import Footer from "@/app/components/Footer";

interface HomePageProps {
  setPage: (p: Page) => void;
  setSelectedProduct: (p: Product) => void;
}

const CATEGORIES_GRID = [
  { label: "WOMEN", sub: "New Season", img: "https://images.unsplash.com/photo-1763551229559-a16b9376c60c?w=600&h=800&fit=crop&auto=format" },
  { label: "MEN", sub: "New Season", img: "https://images.unsplash.com/photo-1621343342511-d9923a83bcf0?w=600&h=800&fit=crop&auto=format" },
  { label: "KIDS", sub: "New Season", img: "https://images.unsplash.com/photo-1651743679361-201259835e44?w=600&h=800&fit=crop&auto=format" },
  { label: "HOME", sub: "New Season", img: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&h=800&fit=crop&auto=format" },
];

const FEATURES = [
  { title: "AIRism", sub: "Inner Wear", desc: "Incredibly light fabric that keeps you cool and comfortable all day.", icon: "◇" },
  { title: "HeatTech", sub: "Inner Wear", desc: "Converts body moisture into heat to keep you warm in cooler weather.", icon: "◈" },
  { title: "BLOCKTECH", sub: "Outerwear", desc: "Water and wind resistant fabric with a clean, technical aesthetic.", icon: "◉" },
];

const ANNOUNCEMENTS = [
  "FREE SHIPPING ON ORDERS OVER $75",
  "SUMMER LINEN COLLECTION — NOW AVAILABLE",
  "NEW: HEATTECH ULTRA WARM FOR NEXT SEASON",
];

export default function HomePage({ setPage, setSelectedProduct }: HomePageProps) {
  const [announcementIdx, setAnnouncementIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAnnouncementIdx((i) => (i + 1) % ANNOUNCEMENTS.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Announcement */}
      <div className="bg-[#E8001A] text-white py-2.5">
        <p className="text-center text-[11px] tracking-[0.2em] font-medium">
          {ANNOUNCEMENTS[announcementIdx]}
        </p>
      </div>

      {/* Hero */}
      <section className="flex flex-col md:flex-row" style={{ minHeight: "78vh" }}>
        <div className="bg-[#111111] text-white md:w-[38%] flex flex-col justify-end p-10 md:p-14 lg:p-16 order-2 md:order-1" style={{ minHeight: "320px" }}>
          <p className="text-[10px] tracking-[0.3em] text-white/40 mb-5 font-medium">SUMMER 2025 COLLECTION</p>
          <h1
            className="text-white leading-[0.88] tracking-[-0.01em] uppercase mb-6 font-display"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)", fontWeight: 700 }}
          >
            LIFE<br />WEAR<br />MADE<br />SIMPLE
          </h1>
          <p className="text-sm text-white/55 leading-relaxed mb-9 max-w-[260px]">
            Everyday clothing designed to make your life better. Quality materials, thoughtful construction.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setPage("women")}
              className="bg-white text-black text-[11px] tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-white/85 transition-colors"
            >
              SHOP NOW
            </button>
            <button className="border border-white/30 text-white text-[11px] tracking-[0.2em] font-semibold px-8 py-3.5 hover:border-white/70 transition-colors">
              LOOKBOOK
            </button>
          </div>
        </div>
        <div className="relative md:w-[62%] bg-gray-200 overflow-hidden order-1 md:order-2" style={{ minHeight: "50vw" }}>
          <img
            src="https://images.unsplash.com/photo-1763551229559-a16b9376c60c?w=1400&h=900&fit=crop&auto=format"
            alt="Woman in minimal white studio outfit"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute bottom-8 right-8 bg-white/92 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.22em] font-semibold text-black">NEW ARRIVALS</p>
            <p className="text-xs text-gray-400 mt-0.5 tracking-wide">From $24.90</p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {CATEGORIES_GRID.map(({ label, sub, img }) => (
          <div
            key={label}
            className="relative group overflow-hidden aspect-[3/4] cursor-pointer bg-gray-200"
            onClick={() => label === "WOMEN" && setPage("women")}
          >
            <img src={img} alt={`${label} collection`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/60 text-[10px] tracking-[0.22em] font-medium mb-1">{sub}</p>
              <h3 className="text-white text-2xl font-bold tracking-wide font-display">{label}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* New Arrivals */}
      <section className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.28em] text-muted-foreground mb-2.5 font-medium">DISCOVER</p>
            <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight leading-none font-display">
              New Arrivals
            </h2>
          </div>
          <button
            onClick={() => setPage("women")}
            className="text-[11px] tracking-[0.16em] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            VIEW ALL <ChevronRight size={12} strokeWidth={2.5} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {WOMEN_PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => { setSelectedProduct(product); setPage("product"); }}
            />
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="bg-[#F4F4F4] border-t border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-14">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground text-center mb-2">INNOVATION</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10 font-display">
            Fabric Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-border">
            {FEATURES.map(({ title, sub, desc, icon }) => (
              <div key={title} className="px-8 py-6 text-center">
                <span className="text-3xl text-muted-foreground block mb-4">{icon}</span>
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-1.5">{sub}</p>
                <h3 className="text-xl font-bold tracking-tight mb-3 font-display">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <button className="mt-5 text-[10px] tracking-[0.2em] font-semibold flex items-center gap-1.5 mx-auto hover:gap-2.5 transition-all">
                  LEARN MORE <ChevronRight size={10} strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Banner */}
      <section className="relative overflow-hidden bg-gray-900" style={{ height: "clamp(360px, 55vw, 600px)" }}>
        <img src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=1800&h=800&fit=crop&auto=format" alt="Clothing in minimal retail space" className="w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <p className="text-[10px] tracking-[0.35em] mb-5 text-white/50 font-medium">THE CONCEPT</p>
          <h2 className="text-white leading-[0.88] tracking-tight uppercase mb-6 font-display" style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 700 }}>
            LifeWear<br />Philosophy
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-[420px] leading-relaxed mb-10">
            Clothes that are designed to make the lives of the people who wear them better — universal, essential, enduring.
          </p>
          <button className="border border-white/50 text-white text-[11px] tracking-[0.22em] font-semibold px-9 py-3.5 hover:bg-white hover:text-black transition-all duration-300">
            DISCOVER MORE
          </button>
        </div>
      </section>

      {/* Split Collections */}
      <section className="grid md:grid-cols-2">
        {[
          { label: "Women", img: "https://images.unsplash.com/photo-1651828855248-343042ecc906?w=900&h=700&fit=crop&auto=format", alt: "Women summer collection" },
          { label: "Men", img: "https://images.unsplash.com/photo-1621343342511-d9923a83bcf0?w=900&h=700&fit=crop&auto=format", alt: "Men minimal outfit collection" },
        ].map(({ label, img, alt }) => (
          <div
            key={label}
            className="relative group overflow-hidden bg-gray-200 cursor-pointer"
            style={{ height: "clamp(320px, 45vw, 560px)" }}
            onClick={() => label === "Women" && setPage("women")}
          >
            <img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white/50 text-[10px] tracking-[0.28em] mb-2 font-medium">COLLECTION</p>
              <h3 className="text-white text-[2.5rem] font-bold tracking-tight leading-none mb-4 font-display">{label}</h3>
              <button className="text-white text-[11px] tracking-[0.18em] font-semibold flex items-center gap-2.5 border-b border-white/30 pb-0.5 hover:border-white transition-colors">
                SHOP ALL <ChevronRight size={11} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter */}
      <section className="bg-[#111111] py-16 px-6 text-center text-white">
        <p className="text-[10px] tracking-[0.3em] text-white/40 mb-3 font-medium">EXCLUSIVE ACCESS</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 font-display">
          Get 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/50 mb-9 max-w-sm mx-auto leading-relaxed">
          Early access to new collections, exclusive offers, and style inspiration.
        </p>
        <div className="flex flex-col sm:flex-row gap-0 max-w-[440px] mx-auto">
          <input type="email" placeholder="Your email address" className="flex-1 px-5 py-4 text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/30 outline-none focus:border-white/50 transition-colors" />
          <button className="bg-[#E8001A] text-white text-[11px] tracking-[0.2em] font-semibold px-8 py-4 hover:bg-[#c40017] transition-colors whitespace-nowrap">
            SUBSCRIBE
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer setPage={setPage} />
    </div>
  );
}
