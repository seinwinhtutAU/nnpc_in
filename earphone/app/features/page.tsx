import Image from "next/image";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import {
  Battery,
  Bluetooth,
  Droplets,
  Ear,
  Headphones,
  Shield,
} from "@/components/Icons";

const features = [
  {
    title: "Hi-Fi Audio",
    description:
      "Studio-grade 11mm drivers for deep bass and crystal-clear highs.",
    icon: Headphones,
  },
  {
    title: "Active Noise Cancellation",
    description:
      "Hybrid ANC blocks noise or lets sound in when you need awareness.",
    icon: Shield,
  },
  {
    title: "40-Hour Battery",
    description:
      "All-week battery with a quick 10-minute charge for 3 hours playback.",
    icon: Battery,
  },
  {
    title: "Bluetooth 5.4",
    description:
      "Instant pairing, ultra-low latency, and rock-solid connectivity.",
    icon: Bluetooth,
  },
  {
    title: "IPX7 Water Resistance",
    description: "Survives rain, sweat, and splashes during any workout.",
    icon: Droplets,
  },
  {
    title: "Comfort Fit",
    description: "Three ear-tip sizes for a secure, all-day comfortable seal.",
    icon: Ear,
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-b from-charcoal via-matte to-matte pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            The Technology Inside
          </p>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold uppercase leading-tight tracking-wide text-soft-white md:text-7xl">
            Engineered for Exceptional Sound
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-soft-white/70">
            Every component, every material, and every line of firmware is
            designed to deliver an uncompromising audio experience.
          </p>
          <div className="relative mx-auto mt-16 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal/30">
            <Image
              src="/black/image1.png"
              alt="Flash Air Pro earbuds"
              fill
              priority
              loading="eager"
              className="object-contain p-8"
            />
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="bg-matte py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Key Features"
            subtitle="Everything you need in one compact pair of earbuds."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-charcoal/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-charcoal/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-soft-white">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-soft-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-matte to-charcoal py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-soft-white md:text-6xl">
            Ready to Hear the Difference?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-soft-white/70">
            Join the next generation of wireless audio. Free shipping and a
            30-day money-back guarantee included.
          </p>
          <div className="mt-10">
            <Button href="/product" size="large">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
