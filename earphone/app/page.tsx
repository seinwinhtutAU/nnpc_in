import Image from "next/image";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import ReviewCard from "@/components/ReviewCard";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import {
  Battery,
  Bluetooth,
  Droplets,
  Headphones,
} from "@/components/Icons";

const features = [
  {
    icon: <Headphones size={28} />,
    title: "Hi-Fi Audio",
    description:
      "Studio-grade 11mm drivers deliver deep bass, balanced mids, and crystal-clear highs.",
  },
  {
    icon: <Battery size={28} />,
    title: "40-Hour Battery",
    description:
      "All-day power with the charging case. Quick charge gives 3 hours of playback in 10 minutes.",
  },
  {
    icon: <Bluetooth size={28} />,
    title: "Bluetooth 5.4",
    description:
      "Lightning-fast pairing, ultra-low latency, and a rock-solid connection up to 15 meters.",
  },
  {
    icon: <Droplets size={28} />,
    title: "IPX7 Water Resistant",
    description:
      "Built to withstand rain, sweat, and splashes so your music never stops.",
  },
];

const colors = [
  { name: "Matte Black", image: "/black/image1.png" },
  { name: "Pearl White", image: "/white/image1.png" },
  { name: "Rose Pink", image: "/pink/image1.png" },
];

const reviews = [
  {
    quote: "Amazing bass and crystal-clear sound. These earbuds punch way above their price.",
    author: "Marcus T.",
  },
  {
    quote: "Best earbuds I've ever owned. The ANC is incredible and they stay comfortable all day.",
    author: "Sarah L.",
  },
  {
    quote: "The battery life is unreal. I charge them once a week and use them every single day.",
    author: "David K.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-charcoal via-matte to-matte pt-24 sound-wave">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.08),transparent_50%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Introducing Flash Air Pro
            </p>
            <h1 className="font-display text-5xl font-bold uppercase leading-tight tracking-wide text-soft-white md:text-7xl">
              Experience Sound Without Limits
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-soft-white/70 lg:mx-0">
              Premium wireless earbuds designed for music lovers, gamers, and
              everyday life.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/product" size="large">
                Shop Now
              </Button>
              <Button href="/features" variant="outline" size="large">
                Explore Features
              </Button>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative aspect-square w-full max-w-xl animate-[float_6s_ease-in-out_infinite]">
              <Image
                src="/black/image1.png"
                alt="Flash Air Pro earbuds floating above an open charging case"
                fill
                priority
                loading="eager"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-16 w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-matte py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Engineered to Impress"
            subtitle="Every detail of Flash Air Pro is designed to deliver a premium listening experience."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Colors */}
      <section className="border-y border-white/5 bg-charcoal/30 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Choose Your Style"
            subtitle="Available in three finishes, each crafted with the same meticulous attention to detail."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((color) => (
              <ProductCard
                key={color.name}
                name={`Flash Air Pro — ${color.name}`}
                price="THB 999"
                image={color.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-matte py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Loved by Listeners"
            subtitle="Join thousands of audiophiles who have made Flash their daily driver."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.author} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-matte to-charcoal py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-soft-white md:text-6xl">
            Upgrade Your Listening Experience
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-soft-white/70">
            Immerse yourself in sound engineered without compromise. Order now
            and enjoy free express shipping.
          </p>
          <div className="mt-10">
            <Button href="/product" variant="secondary" size="large">
              Buy Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
