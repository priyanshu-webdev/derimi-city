"use client";

import { Section } from "@/components/ui/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";

// ─── Content (unchanged) ───────────────────────────────────────────────────
const features = [
  {
    n:     "01",
    title: "Wide Internal Roads",
    desc:  "Spacious road network designed for comfortable, safe movement within the township.",
  },
  {
    n:     "02",
    title: "Street Lighting",
    desc:  "Well-illuminated pathways for a safe and welcoming environment at all hours.",
  },
  {
    n:     "03",
    title: "Electricity Supply",
    desc:  "Reliable, modern power infrastructure supporting every residential and commercial need.",
  },
  {
    n:     "04",
    title: "Underground Drainage",
    desc:  "Modern sewage and drainage systems ensuring a clean, hygienic community.",
  },
  {
    n:     "05",
    title: "Commercial Zone",
    desc:  "Dedicated commercial plots for businesses, markets, and essential services.",
  },
  {
    n:     "06",
    title: "Children's Park",
    desc:  "Safe, well-maintained play areas designed with your children's wellbeing in mind.",
  },
  {
    n:     "07",
    title: "Green Landscape",
    desc:  "Lush gardens and planted avenues that bring nature into everyday life.",
  },
  {
    n:     "08",
    title: "Clean Water Supply",
    desc:  "24/7 reliable and clean water availability for every resident.",
  },
  {
    n:     "09",
    title: "Gated Community",
    desc:  "Secure entry points and professional security for complete peace of mind.",
  },
  {
    n:     "10",
    title: "Documentation Support",
    desc:  "100% legal, transparent, and hassle-free property documentation assistance.",
  },
];

// ─── Individual Feature Card ───────────────────────────────────────────────
function FeatureCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div
      className={[
        "group relative flex flex-col justify-between overflow-hidden cursor-default",
        // Sizing & spacing
        "p-7 md:p-8 min-h-[200px]",
        // Background & border
        "bg-primary-charcoal/40 border border-white/[0.07]",
        "rounded-sm",
        // Hover border glow
        "hover:border-primary-gold/30",
        // Hover elevation
        "hover:-translate-y-1",
        // Smooth transitions
        "transition-all duration-500 ease-out",
        // Subtle shadow lift on hover
        "hover:shadow-[0_16px_40px_rgba(0,0,0,0.45),0_0_20px_rgba(184,149,42,0.08)]",
      ].join(" ")}
    >
      {/* Top-left gold accent line — grows on hover */}
      <div className="absolute top-0 left-0 h-px w-10 bg-primary-gold/30 group-hover:w-full group-hover:bg-primary-gold/40 transition-all duration-700 ease-out" />

      {/* Watermark ordinal — decorative, fades slightly on hover for contrast */}
      <span
        className={[
          "absolute -top-3 -right-1 font-serif font-bold leading-none select-none pointer-events-none",
          "text-[4.5rem] text-white/[0.04] group-hover:text-primary-gold/[0.07]",
          "transition-colors duration-500",
        ].join(" ")}
        aria-hidden="true"
      >
        {n}
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5">
        {/* Number badge */}
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-primary-gold/25 bg-primary-gold/5 text-[10px] font-semibold tracking-[0.18em] text-primary-gold/60 group-hover:border-primary-gold/50 group-hover:text-primary-gold/80 group-hover:bg-primary-gold/10 transition-all duration-500 self-start">
          {n}
        </span>

        {/* Text block */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-serif text-[1.05rem] font-medium leading-tight text-primary-white group-hover:text-primary-gold-light transition-colors duration-400">
            {title}
          </h3>
          <p className="text-[12.5px] text-primary-gray/50 font-light leading-[1.75] group-hover:text-primary-gray/70 transition-colors duration-500">
            {desc}
          </p>
        </div>
      </div>

      {/* Bottom-right corner accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary-gold/0 group-hover:border-primary-gold/20 rounded-tl-sm transition-colors duration-500" />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────
export function WhyChoose() {
  return (
    <Section id="why" variant="wide" className="bg-primary-black">

      {/* ── Header ── */}
      <FadeUp className="mb-10 md:mb-20">

        {/* Eyebrow — gold line variant matching About / Amenities */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-8 h-px bg-primary-gold/50" />
          <span className="text-[10px] tracking-[0.28em] uppercase text-primary-gold/70 font-light">
            Why Choose Derimi City
          </span>
        </div>

        {/* Heading + sub-copy */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary-white leading-[1.08] text-balance max-w-xl">
            World-Class{" "}
            <span className="text-primary-gold font-light italic">Infrastructure</span>
          </h2>
          <p className="text-primary-gray/50 text-sm font-light max-w-xs leading-[1.85] lg:text-right">
            Every detail of Derimi City has been thoughtfully planned to deliver an elevated living experience.
          </p>
        </div>

        {/* Decorative divider below heading */}
        <div className="mt-10 h-px bg-gradient-to-r from-primary-gold/30 via-primary-gold/10 to-transparent" />
      </FadeUp>

      {/* ── Feature Cards Grid ── */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
        {features.map((f) => (
          <StaggerItem key={f.n}>
            <FeatureCard {...f} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* ── Bottom count strip ── */}
      <FadeUp delay={0.35} className="mt-10 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 border-t border-white/[0.05] pt-8">
        <div className="flex flex-col">
          <span className="font-serif text-3xl text-primary-white font-medium">10</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-primary-gray/40 font-light mt-1">
            World-Class Features
          </span>
        </div>
        <div className="w-px h-8 bg-white/[0.07] hidden sm:block" />
        <div className="flex flex-col">
          <span className="font-serif text-3xl text-primary-white font-medium">100%</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-primary-gray/40 font-light mt-1">
            Clear Documentation
          </span>
        </div>
        <div className="w-px h-8 bg-white/[0.07] hidden sm:block" />
        <div className="flex flex-col">
          <span className="font-serif text-3xl text-primary-white font-medium">6</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-primary-gray/40 font-light mt-1">
            Years of Excellence
          </span>
        </div>
      </FadeUp>

    </Section>
  );
}
