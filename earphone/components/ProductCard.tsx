import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  href?: string;
}

export default function ProductCard({
  name,
  price,
  image,
  href = "/product",
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-charcoal/50 transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-charcoal to-matte p-8">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-soft-white">
          {name}
        </h3>
        <p className="mt-2 text-gold">{price}</p>
      </div>
    </Link>
  );
}
