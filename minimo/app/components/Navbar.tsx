"use client";

import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";
import { NAV_LINKS, type Page } from "@/app/lib/data";

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
  scrolled: boolean;
}

export default function Navbar({ page, setPage, scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-border transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_8px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-[60px] flex items-center justify-between gap-8">
        <button
          onClick={() => setPage("home")}
          className="text-[26px] font-bold tracking-[-0.03em] leading-none flex-shrink-0 font-display"
        >
          MINIMO
        </button>

        <ul className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => link === "WOMEN" && setPage("women")}
                className={`text-[11px] tracking-[0.18em] font-semibold pb-0.5 relative transition-colors ${
                  link === "SALE"
                    ? "text-[#E8001A]"
                    : (link === "WOMEN" && page === "women") || (link === "WOMEN" && page === "product")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link}
                {(link === "WOMEN" && (page === "women" || page === "product")) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 flex-shrink-0">
          <button className="hover:opacity-50 transition-opacity"><Search size={18} strokeWidth={1.5} /></button>
          <button className="hover:opacity-50 transition-opacity hidden md:block"><User size={18} strokeWidth={1.5} /></button>
          <button className="hover:opacity-50 transition-opacity relative">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 w-[16px] h-[16px] bg-[#E8001A] text-white text-[9px] rounded-full flex items-center justify-center font-bold leading-none">3</span>
          </button>
          <button className="md:hidden hover:opacity-50" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => { if (link === "WOMEN") setPage("women"); setMobileOpen(false); }}
              className={`w-full px-6 py-4 text-left text-[12px] tracking-[0.18em] font-semibold border-b border-border flex items-center justify-between ${
                link === "SALE" ? "text-[#E8001A]" : ""
              }`}
            >
              {link}
              <ChevronRight size={13} strokeWidth={1.5} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
