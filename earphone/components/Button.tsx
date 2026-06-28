import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-electric-blue text-white shadow-lg shadow-electric-blue/25 hover:shadow-electric-blue/40 hover:bg-electric-blue/90",
    secondary:
      "bg-gold text-matte shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:bg-gold/90",
    outline:
      "border border-white/20 text-soft-white hover:border-gold hover:text-gold hover:bg-white/5",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-10 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
