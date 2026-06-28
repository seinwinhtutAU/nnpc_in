import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="glass group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5">
      <div className="mb-6 inline-flex rounded-xl bg-gold/10 p-4 text-gold transition-colors group-hover:bg-gold/20">
        {icon}
      </div>
      <h3 className="mb-3 font-display text-xl font-semibold text-soft-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-soft-white/60">
        {description}
      </p>
    </div>
  );
}
