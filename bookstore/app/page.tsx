"use client";

import { useState } from "react";

const featuredBooks = [
  { title: "The Midnight Library", author: "Matt Haig" },
  { title: "Where the Crawdads Sing", author: "Delia Owens" },
  { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Project Hail Mary", author: "Andy Weir" },
  { title: "The Four Winds", author: "Kristin Hannah" },
];

const categories = [
  { title: "Fiction", count: "2,456 books" },
  { title: "Non-Fiction", count: "1,892 books" },
  { title: "Mystery & Thriller", count: "1,234 books" },
  { title: "Romance", count: "987 books" },
  { title: "Science Fiction", count: "765 books" },
  { title: "Biography", count: "654 books" },
];

const bestsellers = [
  { title: "Project Hail Mary", author: "Andy Weir", price: "$28.00" },
  { title: "The Four Winds", author: "Kristin Hannah", price: "$29.99" },
  { title: "The Push", author: "Ashley Audrain", price: "$26.00" },
  {
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    price: "$27.50",
  },
  { title: "Klara and the Sun", author: "Kazuo Ishiguro", price: "$28.50" },
];

function Icon({
  name,
  className = "",
}: {
  name:
    | "search"
    | "cart"
    | "user"
    | "mail"
    | "facebook"
    | "twitter"
    | "instagram";
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M20 20l-3.8-3.8" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M3.5 5h2l1.8 9h9.2l2-6.6H7.1" />
          <circle cx="10" cy="19" r="1.2" />
          <circle cx="17" cy="19" r="1.2" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8.25" r="3.25" />
          <path d="M5.5 19c1.5-3.5 4-5 6.5-5s5 1.5 6.5 5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" />
          <path d="m5.5 8.5 6.5 5 6.5-5" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M13.5 21v-7h2.4l.6-3h-3V9.3c0-.9.3-1.3 1.5-1.3H17V5.2c-.5-.1-1.4-.2-2.5-.2-2.7 0-4.5 1.7-4.5 4.8V11H7.5v3h2.5v7h3.5Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M21 7.5c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.8.4-1.5.8-2.4 1a3.5 3.5 0 0 0-6 3.2 10 10 0 0 1-7.3-3.7 3.5 3.5 0 0 0 1.1 4.7c-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.2 2.9 3.5-.5.1-1.1.1-1.6 0 .5 1.5 1.9 2.6 3.6 2.6A7.1 7.1 0 0 1 3 18.4a10 10 0 0 0 15.4-8.9V9c.8-.5 1.4-1.1 1.9-1.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

function Placeholder({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-[4px] border border-dashed border-black/10 bg-[#f5f2eb] text-[12px] text-stone-400 transition duration-150 ease-out hover:-translate-y-[1px] hover:border-[#8f3f45]/30 hover:bg-[#f0e9dc] active:translate-y-0 active:scale-[0.99] ${className}`}
    >
      {label ?? ""}
    </button>
  );
}

export default function Home() {
  const [activeNav, setActiveNav] = useState("Books");

  const navItems = [
    { label: "Books", target: "featured" },
    { label: "Categories", target: "categories" },
    { label: "The Literary Corner", target: "top" },
    { label: "Authors", target: "footer" },
    { label: "About", target: "footer" },
    { label: "Contact", target: "footer" },
  ];

  const handleNavClick = (label: string, target: string) => {
    setActiveNav(label);
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-stone-800">
      <header id="top" className="border-b border-black/5 bg-white">
        <div className="mx-auto grid h-auto max-w-[1160px] grid-cols-1 items-center gap-3 px-4 py-3 sm:h-[44px] sm:grid-cols-[1fr_auto_1fr] sm:gap-0 sm:px-5 sm:py-0">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 justify-self-center text-[14px] text-stone-600 sm:justify-self-start sm:gap-8">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.label, item.target)}
                className={`inline-flex items-center justify-center whitespace-nowrap transition duration-150 ease-out hover:text-[#8f3f45] active:scale-[1.04] ${
                  activeNav === item.label
                    ? "scale-[1.04] font-medium text-[#8f3f45]"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => handleNavClick("The Literary Corner", "top")}
            className={`inline-flex items-center justify-center justify-self-center whitespace-nowrap font-black tracking-[-0.03em] text-[#8b3b41] transition duration-150 ease-out hover:opacity-80 active:scale-[1.04] ${
              activeNav === "The Literary Corner"
                ? "scale-[1.04] font-black"
                : ""
            }`}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
          >
            The Literary Corner
          </button>
          <div className="flex items-center justify-center gap-6 justify-self-center text-[14px] text-stone-700 sm:justify-self-end sm:gap-8">
            {navItems.slice(3).map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.label, item.target)}
                className={`inline-flex items-center justify-center whitespace-nowrap transition duration-150 ease-out hover:text-[#8f3f45] active:scale-[1.04] ${
                  activeNav === item.label
                    ? "scale-[1.04] font-medium text-[#8f3f45]"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full transition duration-150 ease-out hover:bg-black/5 active:scale-90"
                aria-label="Search"
              >
                <Icon name="search" className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full transition duration-150 ease-out hover:bg-black/5 active:scale-90"
                aria-label="Cart"
              >
                <Icon name="cart" className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full transition duration-150 ease-out hover:bg-black/5 active:scale-90"
                aria-label="Account"
              >
                <Icon name="user" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[360px] overflow-hidden bg-[#2c2118] sm:h-[450px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(143,91,45,.35),transparent_36%),linear-gradient(180deg,rgba(255,255,255,.04),rgba(0,0,0,.28))]" />
        <div className="relative mx-auto flex h-full max-w-[1160px] items-center px-4 py-10 sm:px-5 sm:py-0">
          <div className="max-w-[700px]">
            <h1 className="font-sans text-[40px] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[64px] sm:leading-[0.92]">
              Discover Your Next Great Read
            </h1>
            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.35] text-white/82 sm:mt-7 sm:text-[22px] sm:leading-[1.28]">
              Curated collection of timeless classics and contemporary
              bestsellers
            </p>
            <a
              href="#featured"
              className="mt-6 inline-flex h-[34px] items-center rounded-[4px] bg-[#933b47] px-6 text-[14px] font-medium text-white transition duration-150 ease-out hover:-translate-y-[1px] active:scale-[0.99] sm:mt-8 sm:h-[38px] sm:px-7 sm:text-[15px]"
            >
              Explore Now
            </a>
          </div>
        </div>
      </section>

      <section id="featured" className="bg-white py-20">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-5">
          <h2 className="font-sans text-[28px] font-semibold tracking-[-0.03em] text-stone-700 sm:text-[32px]">
            Featured This Month
          </h2>
          <div className="mt-2 h-[3px] w-[228px] bg-[#8f3f45]" />
          <div className="mt-8 -mx-4 overflow-x-auto pb-3 sm:mt-10 sm:-mx-1">
            <div className="flex w-max gap-3 px-4 sm:px-1">
              {featuredBooks.map((book) => (
                <article
                  key={book.title}
                  className="w-[170px] shrink-0 overflow-hidden rounded-[2px] bg-white transition duration-150 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] active:scale-[0.99] sm:w-[210px]"
                >
                  <Placeholder label="photo" className="h-[210px] w-full sm:h-[260px]" />
                  <div className="border-l border-r border-b border-black/5 bg-white px-2.5 pb-3 pt-2">
                    <h3 className="truncate font-sans text-[11px] font-semibold leading-tight text-stone-700 sm:text-[12px]">
                      {book.title}
                    </h3>
                    <p className="mt-1 font-sans text-[10px] italic text-stone-500 sm:text-[11px]">
                      {book.author}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="bg-[#f3ede2] py-20">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-5">
          <h2 className="font-sans text-[28px] font-semibold tracking-[-0.03em] text-stone-700 sm:text-[32px]">
            Browse by Category
          </h2>
          <div className="mt-10 grid gap-5">
            <div className="grid grid-cols-1 gap-3 overflow-hidden rounded-[6px] sm:grid-cols-3 sm:gap-0">
              {categories.slice(0, 3).map((category) => (
                <Placeholder
                  key={category.title}
                  label={`${category.title}\n${category.count}`}
                  className="h-[92px] whitespace-pre-line bg-[#4a423f] text-white/85 transition duration-150 ease-out hover:brightness-110 active:scale-[0.99] sm:h-[98px]"
                />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3 overflow-hidden rounded-[6px] sm:grid-cols-3 sm:gap-0">
              {categories.slice(3).map((category) => (
                <Placeholder
                  key={category.title}
                  label={`${category.title}\n${category.count}`}
                  className="h-[92px] whitespace-pre-line bg-[#56423f] text-white/85 transition duration-150 ease-out hover:brightness-110 active:scale-[0.99] sm:h-[98px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-10 px-4 sm:px-5 lg:grid-cols-[1fr_290px] lg:gap-12">
          <div>
            <h2 className="font-sans text-[28px] font-semibold tracking-[-0.03em] text-stone-700 sm:text-[32px]">
              This Week&apos;s Bestsellers
            </h2>
            <div className="mt-8 space-y-6 sm:space-y-7">
              {bestsellers.map((book) => (
                <div
                  key={book.title}
                  className="grid grid-cols-[56px_1fr_auto] items-center gap-3 sm:grid-cols-[74px_1fr_auto] sm:gap-4"
                >
                  <Placeholder label="photo" className="h-[74px] w-[56px] sm:h-[88px] sm:w-[64px]" />
                  <div>
                    <h3 className="font-sans text-[13px] font-semibold leading-tight text-stone-700 sm:text-[15px]">
                      {book.title}
                    </h3>
                    <p className="mt-1 font-sans text-[10px] italic text-stone-500 sm:text-[11px]">
                      {book.author}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold italic text-[#8f3f45] sm:text-[12px]">
                      {book.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-[4px] bg-[#933b47] px-3 py-1.5 text-[11px] font-medium text-white transition duration-150 ease-out hover:-translate-y-[1px] hover:bg-[#7f3240] active:translate-y-0 active:scale-[0.99] sm:px-4 sm:text-[12px]"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-0 h-full lg:pt-2">
            <Placeholder label="photo" className="h-[280px] w-full bg-[#a2a09d] sm:h-[360px] lg:h-[520px]" />
          </div>
        </div>
      </section>

      <section className="bg-[#f3ede2] py-20">
        <div className="mx-auto max-w-[1160px] px-4 text-center sm:px-5">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#933b47] text-white">
            <Icon name="mail" className="h-5 w-5" />
          </div>
          <h2 className="mt-8 font-sans text-[28px] font-semibold tracking-[-0.03em] text-stone-700 sm:text-[32px]">
            Join Our Book Club
          </h2>
          <p className="mt-4 text-[13px] text-stone-500 sm:text-[14px]">
            Receive weekly recommendations and exclusive offers
          </p>
          <form
            className="mx-auto mt-6 flex max-w-[450px] flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-[36px] flex-1 rounded-[4px] border border-black/10 bg-white px-4 text-[13px] outline-none placeholder:text-stone-400 sm:h-[32px]"
            />
            <button
              type="submit"
              className="h-[36px] rounded-[4px] bg-[#933b47] px-5 text-[13px] font-medium text-white transition duration-150 ease-out hover:-translate-y-[1px] hover:bg-[#7f3240] active:translate-y-0 active:scale-[0.99] sm:h-[32px]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer id="footer" className="bg-[#2b2928] py-20 text-[#e7e0d5]">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-5">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            <div>
              <h3 className="font-sans text-[18px] font-semibold">
                The Literary Corner
              </h3>
              <address className="mt-5 not-italic text-[12px] leading-6 text-[#c6beb1]">
                123 Book Street
                <br />
                New York, NY 10001
                <br />
                info@literarycorner.com
                <br />
                (555) 123-4567
              </address>
            </div>
            <div>
              <h4 className="font-sans text-[14px] font-semibold">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-2 text-[12px] leading-5 text-[#c6beb1]">
                <li>Home</li>
                <li>New Releases</li>
                <li>Bestsellers</li>
                <li>Sale</li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[14px] font-semibold">
                Customer Service
              </h4>
              <ul className="mt-5 space-y-2 text-[12px] leading-5 text-[#c6beb1]">
                <li>FAQ</li>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[14px] font-semibold">Connect</h4>
              <div className="mt-5 flex items-center gap-4 text-[#f2efe8]">
                <Icon name="facebook" className="h-4 w-4" />
                <Icon name="twitter" className="h-4 w-4" />
                <Icon name="instagram" className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-4 text-[11px] text-[#c6beb1]">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p>© 2024 The Literary Corner. All rights reserved.</p>
              <div className="flex items-center gap-5 uppercase tracking-[0.08em]">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>PayPal</span>
                <span>Amex</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
