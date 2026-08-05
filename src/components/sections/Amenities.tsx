"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/animations/FadeUp";

const amenities = [
  {
    title: "Luxury Clubhouse",
    desc:  "A state-of-the-art recreational center for residents — pool, lounge, and gathering spaces designed for premium living.",
    img:   "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    tag:   "Recreation",
    span:  "row-span-2",
  },
  {
    title: "Landscaped Parks",
    desc:  "Lush green spaces designed for wellness, morning walks, and relaxation.",
    img:   "https://images.unsplash.com/photo-1584488219973-1f196ce2d56a?auto=format&fit=crop&w=900&q=80",
    tag:   "Nature",
    span:  "",
  },
  {
    title: "24/7 Security",
    desc:  "Gated community with advanced CCTV surveillance and professional security personnel.",
    img:   "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    tag:   "Safety",
    span:  "",
  },
  {
    title: "Wide Internal Roads",
    desc:  "Spacious avenues ensuring smooth, comfortable traffic flow within the township.",
    img:   "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
    tag:   "Infrastructure",
    span:  "",
  },
];

function AmenityCard({
  title, desc, img, tag, className = "",
}: {
  title: string; desc: string; img: string; tag: string; className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[3px] group cursor-pointer grain ${className}`}>
      {/* Image */}
      <Image
        src={img}
        alt={`${title} at Derimi City Luxury Township Bihar`}
        fill
        className="object-cover transform group-hover:scale-[1.03] transition-transform duration-[10s] ease-out"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-black/95 via-primary-black/40 to-primary-black/10 group-hover:from-primary-black transition-colors duration-700" />
      {/* Fading subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      {/* Border hover (Gold) */}
      <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-primary-gold/20 transition-all duration-700 rounded-[3px]" />

      {/* Content */}
      <div className="absolute inset-0 p-7 flex flex-col justify-between">
        {/* Tag */}
        <div className="self-start">
          <span className="text-[9px] tracking-[0.2em] uppercase text-primary-gold/70 font-light border border-primary-gold/20 px-3 py-1.5 rounded-full bg-primary-black/40 backdrop-blur-sm">
            {tag}
          </span>
        </div>
        {/* Text */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif text-xl md:text-2xl text-primary-white mb-2 leading-tight">{title}</h3>
          <p className="text-[13px] text-primary-gray/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 max-w-xs">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Amenities() {
  return (
    <Section id="amenities" variant="wide" className="bg-primary-charcoal">
      {/* Header */}
      <FadeUp className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-primary-gold/50" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-primary-gold/70 font-light">
            World-Class Lifestyle
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-white leading-tight text-balance max-w-md">
            Premium <span className="text-primary-gold font-light italic">Amenities</span>
          </h2>
          <p className="text-primary-gray/50 text-sm font-light max-w-xs leading-relaxed">
            Every amenity has been curated to elevate your everyday living experience.
          </p>
        </div>
      </FadeUp>

      {/* Bento Grid */}
      <FadeUp delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-2 gap-4 lg:min-h-[580px]">
          {/* Large tile — spans 2 rows */}
          <AmenityCard
            {...amenities[0]}
            className="lg:row-span-2 h-[400px] lg:h-auto"
          />
          {/* Row 1 — smaller tiles */}
          <AmenityCard {...amenities[1]} className="h-[280px] lg:h-auto" />
          <AmenityCard {...amenities[2]} className="h-[280px] lg:h-auto" />
          {/* Row 2 — full width on lg */}
          <AmenityCard {...amenities[3]} className="h-[280px] lg:h-auto lg:col-span-2" />
        </div>
      </FadeUp>
    </Section>
  );
}
