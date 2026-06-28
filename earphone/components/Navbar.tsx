"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/features", label: "Features" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-2xl font-bold uppercase tracking-widest text-soft-white"
        >
          Flash
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-soft-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/product"
          className="rounded-full bg-electric-blue px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric-blue/25 transition-all hover:-translate-y-0.5 hover:bg-electric-blue/90 hover:shadow-electric-blue/40"
        >
          Shop Now
        </Link>
      </nav>
    </header>
  );
}
