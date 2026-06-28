import Link from "next/link";

const footerLinks = {
  About: ["Our Story", "Careers", "Press"],
  Products: ["Flash Air Pro", "Accessories", "Bundles"],
  Features: ["Hi-Fi Audio", "ANC", "Battery Life"],
  Support: ["Contact Us", "FAQs", "Warranty"],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-3xl font-bold uppercase tracking-widest text-gold"
            >
              Flash
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-soft-white/60">
              Premium wireless earbuds engineered for exceptional sound.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-soft-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-soft-white/60 transition-colors hover:text-gold"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-soft-white/40">
            © {new Date().getFullYear()} Flash Audio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "X", "YouTube", "TikTok"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-sm text-soft-white/60 transition-colors hover:text-gold"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
