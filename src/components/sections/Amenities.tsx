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
  },
  {
    title: "Landscaped Parks",
    desc:  "Lush green spaces designed for wellness, morning walks, and relaxation.",
    img:   "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    tag:   "Nature",
  },
  {
    title: "24/7 Security",
    desc:  "Gated community with advanced CCTV surveillance and professional security personnel.",
    img:   "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    tag:   "Safety",
  },
  {
    title: "Wide Internal Roads",
    desc:  "Spacious avenues ensuring smooth, comfortable traffic flow within the township.",
    img:   "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
    tag:   "Infrastructure",
  },
];

function AmenityCard({
  title,
  desc,
  img,
  tag,
}: {
  title: string;
  desc: string;
  img: string;
  tag: string;
}) {
  return (
    <div className="group relative flex flex-col justify-end overflow-hidden rounded-2xl md:rounded-3xl bg-primary-black border border-primary-gold/15 hover:border-primary-gold/40 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(184,149,42,0.15)] h-[400px] sm:h-[440px] lg:h-[480px] w-full cursor-pointer grain">
      {/* Image with smooth zoom and superior object cropping */}
      <Image
        src={img}
        alt={`${title} at Derimi City Luxury Township Bihar`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center transform group-hover:scale-[1.06] transition-transform duration-700 ease-out"
      />

      {/* Multi-layered Gradient Overlays for optimal readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/60 to-primary-black/15 group-hover:from-primary-black group-hover:via-primary-black/75 transition-all duration-700" />
      
      {/* Fading subtle top border glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

      {/* Card Content Container with increased padding */}
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
        {/* Tag / Category Badge */}
        <div className="self-start">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-black/60 backdrop-blur-md border border-primary-gold/30 text-primary-gold text-[10px] sm:text-xs font-light tracking-[0.2em] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-gold/80 animate-pulse" />
            {tag}
          </span>
        </div>

        {/* Text Section & Action Line */}
        <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif text-2xl md:text-3xl text-primary-white group-hover:text-primary-gold-light transition-colors duration-500 mb-3 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-primary-gray/80 font-light leading-relaxed max-w-lg mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            {desc}
          </p>

          {/* Elegant gold expand line */}
          <div className="w-8 group-hover:w-16 h-px bg-primary-gold/60 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}

export function Amenities() {
  return (
    <Section id="amenities" variant="wide" className="bg-primary-charcoal">
      {/* Section Header */}
      <FadeUp className="mb-14">
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

      {/* Amenities Cards Grid - Equal Heights & Spacious Gap */}
      <FadeUp delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {amenities.map((amenity, idx) => (
            <AmenityCard key={idx} {...amenity} />
          ))}
        </div>
      </FadeUp>
    </Section>
  );
}

