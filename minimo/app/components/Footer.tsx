"use client";

import type { Page } from "@/app/lib/data";

interface FooterProps {
  page?: Page;
  setPage?: (p: Page) => void;
  simple?: boolean;
}

export default function Footer({ page, setPage, simple = false }: FooterProps) {
  if (simple) {
    return (
      <footer className="bg-[#0a0a0a] text-white pt-10 pb-8 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {setPage ? (
            <button onClick={() => setPage("home")} className="text-xl font-bold tracking-[-0.02em] font-display">
              MINIMO
            </button>
          ) : (
            <span className="text-xl font-bold tracking-[-0.02em] font-display">MINIMO</span>
          )}
          <p className="text-[11px] text-white/25 tracking-wide">© 2025 MINIMO. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#0a0a0a] text-white pt-14 pb-10 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/8">
          {[
            { title: "SHOP", links: ["Women", "Men", "Kids", "Home", "Sale"] },
            { title: "HELP", links: ["Find a Store", "Shipping & Returns", "Order Tracking", "FAQs", "Contact Us"] },
            { title: "COMPANY", links: ["About MINIMO", "LifeWear Concept", "Sustainability", "Careers", "Press"] },
            { title: "FOLLOW US", links: ["Instagram", "Facebook", "Pinterest", "Twitter / X", "YouTube"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p className="text-[10px] tracking-[0.22em] text-white/35 mb-5 font-semibold">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/55 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {setPage ? (
            <button onClick={() => setPage("home")} className="text-2xl font-bold tracking-[-0.02em] font-display">
              MINIMO
            </button>
          ) : (
            <span className="text-2xl font-bold tracking-[-0.02em] font-display">MINIMO</span>
          )}
          <div className="flex flex-wrap gap-5 text-[11px] text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
          </div>
          <p className="text-[11px] text-white/25 tracking-wide">© 2025 MINIMO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
