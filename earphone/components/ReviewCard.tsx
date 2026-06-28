import { Star } from "./Icons";

interface ReviewCardProps {
  quote: string;
  author: string;
  role?: string;
}

export default function ReviewCard({
  quote,
  author,
  role = "Verified Buyer",
}: ReviewCardProps) {
  return (
    <div className="glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/20">
      <div className="mb-4 flex gap-1 text-gold">
        {[...Array(5)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <p className="mb-6 text-lg leading-relaxed text-soft-white/90">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-soft-white">{author}</p>
        <p className="text-sm text-soft-white/50">{role}</p>
      </div>
    </div>
  );
}
